"use strict";(self.webpackChunkopenSIMMO=self.webpackChunkopenSIMMO||[]).push([[229],{1260:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var s=t(4848),i=t(8453);const a={},r="Electronics",o={id:"01_02_Electronics",title:"Electronics",description:"In order to display SIM patterns on the DMD and trigger the camera, we would need to connect it to a Raspberry Pi that itself acts as a display server and realizes a fast trigger and display rate for reasonalbe framerates in SIM experiments. For this, we build a fastapi-driven Server that loads and displays images using openCL accelerated pygame. The latest version of the display server can be found here. A step-by-step code explenation follows below.",source:"@site/docs/01_02_Electronics.md",sourceDirName:".",slug:"/01_02_Electronics",permalink:"/docs/01_02_Electronics",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Laser Safety for openSIMMO Users",permalink:"/docs/00_2_Safety"},next:{title:"Laser",permalink:"/docs/01_1_Laser"}},l={},d=[{value:"Install the dependencies",id:"install-the-dependencies",level:2},{value:"Python display server",id:"python-display-server",level:2},{value:"Explanation",id:"explanation",level:3},{value:"Preparation of the raspberry pi server",id:"preparation-of-the-raspberry-pi-server",level:4},{value:"ZeroMQ (ZMQ) Messaging",id:"zeromq-zmq-messaging",level:4},{value:"Pygame for Image Display",id:"pygame-for-image-display",level:4},{value:"FastAPI Web Server",id:"fastapi-web-server",level:4},{value:"Raspberry Pi GPIO (Optional)",id:"raspberry-pi-gpio-optional",level:4},{value:"<code>ViewerController</code>",id:"viewercontroller",level:4},{value:"<code>ImageLoader</code>",id:"imageloader",level:4},{value:"<code>PygameViewer</code>",id:"pygameviewer",level:4},{value:"FastAPI Endpoints",id:"fastapi-endpoints",level:4},{value:"GPIO Configuration and Cleanup",id:"gpio-configuration-and-cleanup",level:3},{value:"Running the System",id:"running-the-system",level:3},{value:"Launch server on startup",id:"launch-server-on-startup",level:3},{value:"Camera trigger",id:"camera-trigger",level:2}];function p(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"electronics",children:"Electronics"}),"\n",(0,s.jsxs)(n.p,{children:["In order to display SIM patterns on the DMD and trigger the camera, we would need to connect it to a Raspberry Pi that itself acts as a display server and realizes a fast trigger and display rate for reasonalbe framerates in SIM experiments. For this, we build a fastapi-driven Server that loads and displays images using openCL accelerated pygame. The latest version of the display server can be found ",(0,s.jsx)(n.a,{href:"https://github.com/openUC2/ImSwitch/blob/SIM_PCO/tools/fastapiSIM.py",children:"here"}),". A step-by-step code explenation follows below."]}),"\n",(0,s.jsx)(n.p,{children:"The system is modular and can be adapted or extended for various imaging and display applications. The integration of web control via FastAPI makes it versatile for remote operation, potentially in laboratory settings where automated image display and capture are required. ImSwitch adapts the fastapi REST-API and triggers the display of certain display sequences."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(9739).A+"",width:"1500",height:"1004"})}),"\n",(0,s.jsx)(n.h2,{id:"install-the-dependencies",children:"Install the dependencies"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"pip3 install GPIO\npip3 install fastapi\npip3 install pyzmq\npip3 install pygame\npip3 install uvicorn\n"})}),"\n",(0,s.jsx)(n.h2,{id:"python-display-server",children:"Python display server"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://github.com/openUC2/ImSwitch/blob/SIM_PCO/tools/fastapiSIM.py",children:"Latest fastapi.py code"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-py",children:'import zmq\nimport numpy as np\nimport pygame\nimport time\nimport os\nimport socket\nfrom os import listdir\nfrom os.path import isfile, join\nfrom threading import Thread, Event\nfrom fastapi import FastAPI, BackgroundTasks\nimport uvicorn\n\nZMQPORT = 5555\nIS_FULLSCREEN = False\nnImages = 9\nCAM_TRIGGER_PIN = 37\n\n# Configure GPIO if running on Raspberry Pi\ntry:\n    import RPi.GPIO as GPIO\nexcept:\n    print("Not running on Pi")\n    GPIO = None\n\nif GPIO is not None:\n    # List of pins your application uses\n    pins_to_cleanup = [CAM_TRIGGER_PIN]\n\n    # Clean up specific pins\n    GPIO.setmode(GPIO.BOARD)  # or GPIO.BOARD, depending on your pin numbering\n    for pin in pins_to_cleanup:\n        GPIO.setup(pin, GPIO.IN)  # Set pin to input to safely unexport it\n    GPIO.cleanup(pins_to_cleanup)  # Clean up only the pins you plan to use\n\n    # Now, set up your GPIO pins as usual\n    print("Setting up pin: ")\n    GPIO.setup(CAM_TRIGGER_PIN, GPIO.OUT)\n\nclass ViewerController:\n    def __init__(self):\n        self.context = zmq.Context()\n        # Use REQ socket for request-reply pattern\n        self.socket = self.context.socket(zmq.PAIR)\n        self.socket.bind("tcp://*:"+str(ZMQPORT))\n        self.tWait = 0.1\n\n    def send_stop_continous(self):\n        self.isRunningContinous = False\n        try:\n            self.mThread.join(timeout=1)\n        except Exception as e:\n            print(e)\n\n    def send_stop_viewer(self):\n        self.send_command("stop")\n\n    def send_command(self, command):\n        return self.send_command_and_receive(command)\n\n    def send_command_and_receive(self, command):\n        # clear messages in the socket\n        while self.socket.poll(0):\n            print(self.socket.recv_string(zmq.NOBLOCK))\n\n        self.socket.send_string(command)\n        # Block until a reply is received\n        message = self.socket.recv_string()\n        return message\n\n    def display_continous(self):\n        self.isRunningContinous = True\n        def runPatternDisplayThreadFunction():\n            while(self.isRunningContinous):\n                for pattern_id in range(nImages): #len(self.current_images)):\n                    if not self.isRunningContinous:\n                        return\n                    self.display_pattern(pattern_id)\n                    self.send_trigger()\n                    print(str(pattern_id))\n                    time.sleep(self.tWait)\n        self.mThread = threading.Thread(target=runPatternDisplayThreadFunction).start()\n\n    def display_pattern(self, pattern_id):\n        self.send_command(f"display:{pattern_id}")\n\n    def change_wavelength(self, wavelength):\n        self.send_command(f"change_wavelength:{wavelength}")\n\n    def set_wait_time(self, tWait):\n        self.tWait = tWait\n\n    def start_single_loop(self, i_cycle):\n        self.send_command(f"start_single_loop:{i_cycle}")\n\n    def send_trigger(self):\n        self.send_command(f"trigger")\n\nclass ImageLoader:\n    def __init__(self, path_488, path_635, n_images=9):\n        self.path_488 = path_488\n        self.path_635 = path_635\n        self.n_images = n_images\n        self.images_488 = self.load_images(self.path_488)\n        self.images_635 = self.load_images(self.path_635)\n\n    def load_images(self, path):\n        images = []\n        try:\n            image_files = sorted([f for f in listdir(path) if isfile(join(path, f))])\n            for i in range(self.n_images):\n                images.append(pygame.image.load(join(path, image_files[i])))\n            print("Images loaded successfully.")\n        except Exception as e:\n            print(f"Failed to load images: {e}")\n            # Handle error or generate random patterns\n        return images\n\napp = FastAPI()\nviewer_controller = ViewerController()\n\nclass PygameViewer:\n    def __init__(self, display_size, path_488, path_635):\n        self.display_size = display_size\n        self.loader = ImageLoader(path_488, path_635)\n        # Initialization of pygame and zmq as before\n        self.context = zmq.Context()\n        self.socket = self.context.socket(zmq.PAIR)\n        self.socket.connect("tcp://localhost:"+str(ZMQPORT))\n        self.current_images = self.loader.images_488  # Default to 488nm images\n        self.tWait = 0.1  # Default time to wait between patterns\n        self.isRunningContinous = False\n        self.mLock = threading.Lock()\n\n    def run(self):\n        os.environ["DISPLAY"] = ":0"\n        pygame.display.init()\n        pygame.init()\n        if IS_FULLSCREEN:\n            self.display = pygame.display.set_mode(self.display_size, pygame.FULLSCREEN)\n        else:\n            self.display = pygame.display.set_mode(self.display_size)\n        pygame.mouse.set_visible(False)\n        self.running = True\n        while self.running:\n                # Check for Pygame events\n                for event in pygame.event.get():\n                    if event.type == pygame.QUIT:  # Allows quitting by closing the window\n                        self.running = False\n\n                # Non-blocking check for a message from ZMQ\n                try:\n                    # Wait for next request from client\n                    message = self.socket.recv_string(zmq.NOBLOCK)\n                    reply = self.handle_message(message)\n                    # Send reply back to client\n                    self.socket.send_string(reply)\n\n                except zmq.Again:\n                    pass  # No message received\n\n                pygame.display.flip()  # Update the full display surface to the screen\n                pygame.time.wait(10)  # Small delay to prevent high CPU usage\n\n    def handle_message(self, message):\n        response = ""\n        if message.startswith("display:"):\n            pattern_id = int(message.split(":")[1])\n            self.display_pattern(pattern_id)\n        elif message.startswith("change_wavelength:"):\n            wavelength = int(message.split(":")[1])\n            self.change_wavelength(wavelength)\n        elif message == "start":\n            self.start()\n            # hreading.Thread(target=self.start).start()\n        elif message == "stop":\n            self.running = False\n        elif message == "trigger":\n            self.trigger()\n        elif message.startswith("start_single_loop"):\n            self.start_single_loop(int(message.split(":")[1]))\n            response = "Current pattern info or any other data"\n        return response\n\n    def trigger(self, gpiopin=CAM_TRIGGER_PIN):\n        # Perform trigger action\n        GPIO.output(gpiopin, GPIO.HIGH)\n        time.sleep(0.001)\n        GPIO.output(gpiopin, GPIO.LOW)\n        time.sleep(0.001)\n\n\n    def display_pattern(self, pattern_id):\n        with self.mLock:\n            if pattern_id < len(self.current_images):\n                image = self.current_images[pattern_id]\n                self.display.blit(image, (0, 0))  # Draw the image to the display\n                #pygame.display.flip()  # Refresh the display seems not work\n                pygame.display.update()\n            else:\n                print("Pattern ID out of range")\n\n    def change_wavelength(self, wavelength):\n        if wavelength == 488:\n            self.current_images = self.loader.images_488\n            print("wl is 488")\n        elif wavelength == 635:\n            self.current_images = self.loader.images_635\n            print("wl is 635")\n        else:\n            print("Unsupported wavelength")\n\n    def start(self): # how to deal with it\n        self.isRunningContinous = True\n        def runPatternDisplayThreadFunction():\n            while(self.isRunningContinous):\n                for i in range(len(self.current_images)):\n                    if not self.isRunningContinous: break\n                    self.display_pattern(i)\n                    self.trigger()\n                    print(str(i))\n                    time.sleep(self.tWait)\n        #threading.Thread(target=runPatternDisplayThreadFunction).start()\n        #runPatternDisplayThreadFunction()\n\n    def start_single_loop(self, cycle):\n        # display each pattern once and perform a trigger action\n        print("Start Single Loop: "+str(cycle))\n        for cyc in range(cycle):\n            for i in range(len(self.current_images)):\n                self.display_pattern(i)\n                self.trigger()\n                print(str(i))\n                time.sleep(self.tWait)\n            self.display_pattern(0) #go back to default pattern\n\n\n@app.get("/display_pattern/{pattern_id}")\nasync def display_pattern(pattern_id: int):\n    viewer_controller.display_pattern(pattern_id)\n    return {"message": f"Displaying pattern {pattern_id}."}\n\n@app.get("/start_viewer/")\nasync def start_viewer():\n    #def startContinousFct():\n    #    viewer_controller.send_command("start")\n    #threading.Thread(target=startContinousFct).start()\n    #startContinousFct()\n    viewer_controller.display_continous()\n    return {"message": "Viewer started."}\n\n@app.get("/stop_viewer/")\nasync def stop_viewer():\n    viewer_controller.send_stop_continous()\n    return {"message": "Viewer stopped."}\n\n# Corresponding FastAPI endpoint\n@app.get("/change_wavelength/{wavelength}")\nasync def change_wavelength(wavelength: int):\n    viewer_controller.change_wavelength(wavelength)\n    return {"message": f"Wavelength changed to {wavelength}nm."}\n\n@app.get("/start_viewer_single_loop/{i_cycle}")\nasync def start_viewer_single_loop(i_cycle: int):\n    viewer_controller.start_single_loop(i_cycle)\n    #response = viewer_controller.send_command_and_receive("start_single_loop")\n    return {"message": "Viewer started in single loop mode."}\n\n@app.get("/set_wait_time/{tWait}") # fix it\nasync def set_wait_time(tWait: float):\n    viewer_controller.set_wait_time(tWait)\n    return {"message": f"Wait time set to {tWait}."}\n\n# Implement other endpoints similarly, using viewer_controller to send appropriate commands\n\nPATH_488 = "/home/pi/Desktop/Pattern_SIMMO/488"\nPATH_635 = "/home/pi/Desktop/Pattern_SIMMO/635"\nDISPLAY_SIZE = (1920, 1080)  \n\nimport threading\nif __name__ == "__main__":\n    def startServer():\n        uvicorn.run(app, host="0.0.0.0", port=8000)\n\n    def startViewer():\n        viewer = PygameViewer(DISPLAY_SIZE, PATH_488, PATH_635)\n        viewer.run()        \n    threading.Thread(target=startServer).start()\n    startViewer()\n'})}),"\n",(0,s.jsx)(n.h3,{id:"explanation",children:"Explanation"}),"\n",(0,s.jsx)(n.h4,{id:"preparation-of-the-raspberry-pi-server",children:"Preparation of the raspberry pi server"}),"\n",(0,s.jsx)(n.p,{children:"This code is part of a software package designed to control an imaging system, potentially for scientific research purposes. It integrates several components, including hardware control, image processing, and server communication, to create an automated and interactive system for displaying and capturing images. The code is written in Python and makes use of several libraries, including ZeroMQ (zmq) for messaging, NumPy for numerical operations, Pygame for image display, FastAPI for serving a web interface, and optionally RPi.GPIO for controlling Raspberry Pi GPIO pins. Below is a detailed documentation of the various components of this system."}),"\n",(0,s.jsx)(n.p,{children:"The software consists of multiple classes and functions that work together to control the display of images, potentially capture images with a camera, and interact with the user or other systems via a web interface. It is structured to run on a Raspberry Pi, leveraging GPIO pins for hardware control, but it can also be run on other systems with slight modifications."}),"\n",(0,s.jsx)(n.h4,{id:"zeromq-zmq-messaging",children:"ZeroMQ (ZMQ) Messaging"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"ZeroMQ is used for inter-process communication between the different components of the system. It allows for sending commands and receiving responses between the image display controller and the viewer interface."}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"pygame-for-image-display",children:"Pygame for Image Display"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Pygame is utilized for loading and displaying images on a screen. It is capable of running in fullscreen mode for immersive viewing experiences or in a windowed mode for debugging and development."}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"fastapi-web-server",children:"FastAPI Web Server"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"FastAPI is employed to create a web interface for remotely controlling the imaging system. This allows users to start and stop the viewer, change displayed images or patterns, and adjust system settings through HTTP requests."}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"raspberry-pi-gpio-optional",children:"Raspberry Pi GPIO (Optional)"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"If running on a Raspberry Pi, the script includes an option to use RPi.GPIO for controlling General Purpose Input/Output (GPIO) pins. This is useful for triggering external devices, such as cameras, in sync with image display."}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"viewercontroller",children:(0,s.jsx)(n.code,{children:"ViewerController"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Manages the communication between the web server (FastAPI) and the image viewer (Pygame) using ZMQ messaging."}),"\n",(0,s.jsxs)(n.li,{children:["Includes functions to send various commands (",(0,s.jsx)(n.code,{children:"send_command"}),"), such as stopping the viewer, changing displayed images, and adjusting settings."]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"imageloader",children:(0,s.jsx)(n.code,{children:"ImageLoader"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Loads and stores images from specified directories for two different wavelengths (488nm and 635nm), supporting easy switching between different image sets based on experimental requirements."}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"pygameviewer",children:(0,s.jsx)(n.code,{children:"PygameViewer"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Initializes and controls the Pygame window for displaying images."}),"\n",(0,s.jsxs)(n.li,{children:["Handles messages from the ",(0,s.jsx)(n.code,{children:"ViewerController"})," to update the displayed image, change wavelengths, or trigger external devices using GPIO pins."]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"fastapi-endpoints",children:"FastAPI Endpoints"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["The web server exposes several endpoints for interacting with the imaging system, such as ",(0,s.jsx)(n.code,{children:"/display_pattern/{pattern_id}"})," for displaying a specific image pattern, and ",(0,s.jsx)(n.code,{children:"/start_viewer/"})," for starting the continuous display mode."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"gpio-configuration-and-cleanup",children:"GPIO Configuration and Cleanup"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"If running on a Raspberry Pi, the script attempts to import RPi.GPIO. If successful, it sets up and cleans specific GPIO pins used by the application, ensuring safe operation and shutdown."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"running-the-system",children:"Running the System"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The script is designed to be run as the main entry point of the application. It initializes and starts both the FastAPI web server and the Pygame viewer in separate threads, allowing them to operate concurrently."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"launch-server-on-startup",children:"Launch server on startup"}),"\n",(0,s.jsx)(n.p,{children:"The DMD we used accepts HDMI input, so we need to use the DMD as the screen of a raspberry pi, a FastAPI server will direct start on the raspberry pi while it boots. For that we need to modify some code on rapsberry pi and let the FastAPI server will automatic start."}),"\n",(0,s.jsx)(n.p,{children:"Connect the raspberry pi to a normal screen and boot it. Open the terminal of and using the command"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"sudo nano /etc/rc.local"})}),"\n",(0,s.jsxs)(n.p,{children:["then add this code before ",(0,s.jsx)(n.code,{children:"exit 0"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"python /home/pi/Desktop/fastapiSIM.py &"})}),"\n",(0,s.jsxs)(n.p,{children:["Quit and save the file. Based on the code, we need to copy the ",(0,s.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:t(1775).A+"",children:(0,s.jsx)(n.code,{children:"fastapiSIM.py"})})," and also the whole ",(0,s.jsx)(n.a,{href:"./Pattern_SIMMO",children:"folder"})," for the patterns to the desktop of pi."]}),"\n",(0,s.jsx)(n.p,{children:"Using a ethernet cable to connect the raspberry pi to the computer and reboot the raspberry pi."}),"\n",(0,s.jsx)(n.p,{children:"After the raspberry pi rebooted, we should see the desktop screen on the DMD and can access the server via"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"http://localhost:8000/docs#"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(6194).A+"",width:"2251",height:"1220"})}),"\n",(0,s.jsx)(n.h2,{id:"camera-trigger",children:"Camera trigger"}),"\n",(0,s.jsxs)(n.p,{children:["The camera has an external trigger come from the raspberry pi, currently, the trigger is provided by GPIO port 26. Use a BNC to jumper cable to connect ",(0,s.jsx)(n.strong,{children:"GPIO26"})," and ",(0,s.jsx)(n.strong,{children:"GND"})," on pi board to the trigger input of camera."]})]})}function c(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},1775:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/files/fastapiSIM-adbe44648edf89d8cfcc93dcd7640d35.py"},6194:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/FastAPI_Screenshot-1a1e18923abc6657c3fb4850c2164a5f.png"},9739:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/hardwareinteraction-d9f37384ca399b8a1a85b4e044979f75.png"},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>o});var s=t(6540);const i={},a=s.createContext(i);function r(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);