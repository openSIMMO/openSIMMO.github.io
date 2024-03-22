"use strict";(self.webpackChunkMatchboxscope=self.webpackChunkMatchboxscope||[]).push([[530],{5680:(e,n,t)=>{t.d(n,{xA:()=>d,yg:()=>f});var a=t(6540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},g="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),g=p(t),m=i,f=g["".concat(l,".").concat(m)]||g[m]||c[m]||r;return t?a.createElement(f,s(s({ref:n},d),{},{components:t})):a.createElement(f,s({ref:n},d))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,s=new Array(r);s[0]=m;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o[g]="string"==typeof e?e:i,s[1]=o;for(var p=2;p<r;p++)s[p]=t[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},85:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var a=t(8168),i=(t(6540),t(5680));const r={},s="Electronics",o={unversionedId:"Electronics",id:"Electronics",title:"Electronics",description:"In order to display SIM patterns on the DMD and trigger the camera, we would need to connect it to a Raspberry Pi that itself acts as a display server and realizes a fast trigger and display rate for reasonalbe framerates in SIM experiments. For this, we build a fastapi-driven Server that loads and displays images using openCL accelerated pygame. The latest version of the display server can be found here. A step-by-step code explenation follows below.",source:"@site/docs/Electronics.md",sourceDirName:".",slug:"/Electronics",permalink:"/docs/Electronics",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"DMD",permalink:"/docs/DMD"},next:{title:"ImSwitch",permalink:"/docs/ImSwitch"}},l={},p=[{value:"Install the dependencies",id:"install-the-dependencies",level:2},{value:"Python display server",id:"python-display-server",level:2},{value:"Explanation",id:"explanation",level:3},{value:"Preparation of the raspberry pi server",id:"preparation-of-the-raspberry-pi-server",level:4},{value:"ZeroMQ (ZMQ) Messaging",id:"zeromq-zmq-messaging",level:4},{value:"Pygame for Image Display",id:"pygame-for-image-display",level:4},{value:"FastAPI Web Server",id:"fastapi-web-server",level:4},{value:"Raspberry Pi GPIO (Optional)",id:"raspberry-pi-gpio-optional",level:4},{value:"<code>ViewerController</code>",id:"viewercontroller",level:4},{value:"<code>ImageLoader</code>",id:"imageloader",level:4},{value:"<code>PygameViewer</code>",id:"pygameviewer",level:4},{value:"FastAPI Endpoints",id:"fastapi-endpoints",level:4},{value:"GPIO Configuration and Cleanup",id:"gpio-configuration-and-cleanup",level:3},{value:"Running the System",id:"running-the-system",level:3},{value:"Launch server on startup",id:"launch-server-on-startup",level:3},{value:"Camera trigger",id:"camera-trigger",level:2}],d={toc:p},g="wrapper";function c(e){let{components:n,...r}=e;return(0,i.yg)(g,(0,a.A)({},d,r,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"electronics"},"Electronics"),(0,i.yg)("p",null,"In order to display SIM patterns on the DMD and trigger the camera, we would need to connect it to a Raspberry Pi that itself acts as a display server and realizes a fast trigger and display rate for reasonalbe framerates in SIM experiments. For this, we build a fastapi-driven Server that loads and displays images using openCL accelerated pygame. The latest version of the display server can be found ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/openUC2/ImSwitch/blob/SIM_PCO/tools/fastapiSIM.py"},"here"),". A step-by-step code explenation follows below."),(0,i.yg)("p",null,"The system is modular and can be adapted or extended for various imaging and display applications. The integration of web control via FastAPI makes it versatile for remote operation, potentially in laboratory settings where automated image display and capture are required. ImSwitch adapts the fastapi REST-API and triggers the display of certain display sequences."),(0,i.yg)("p",null,(0,i.yg)("img",{src:t(9739).A,width:"1500",height:"1004"})),(0,i.yg)("h2",{id:"install-the-dependencies"},"Install the dependencies"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash"},"pip3 install GPIO\npip3 install fastapi\npip3 install pyzmq\npip3 install pygame\npip3 install uvicorn\n")),(0,i.yg)("h2",{id:"python-display-server"},"Python display server"),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"https://github.com/openUC2/ImSwitch/blob/SIM_PCO/tools/fastapiSIM.py"},"Latest fastapi.py code"),"."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-py"},'import zmq\nimport numpy as np\nimport pygame\nimport time\nimport os\nimport socket\nfrom os import listdir\nfrom os.path import isfile, join\nfrom threading import Thread, Event\nfrom fastapi import FastAPI, BackgroundTasks\nimport uvicorn\n\nZMQPORT = 5555\nIS_FULLSCREEN = False\nnImages = 9\nCAM_TRIGGER_PIN = 37\n\n# Configure GPIO if running on Raspberry Pi\ntry:\n    import RPi.GPIO as GPIO\nexcept:\n    print("Not running on Pi")\n    GPIO = None\n\nif GPIO is not None:\n    # List of pins your application uses\n    pins_to_cleanup = [CAM_TRIGGER_PIN]\n\n    # Clean up specific pins\n    GPIO.setmode(GPIO.BOARD)  # or GPIO.BOARD, depending on your pin numbering\n    for pin in pins_to_cleanup:\n        GPIO.setup(pin, GPIO.IN)  # Set pin to input to safely unexport it\n    GPIO.cleanup(pins_to_cleanup)  # Clean up only the pins you plan to use\n\n    # Now, set up your GPIO pins as usual\n    print("Setting up pin: ")\n    GPIO.setup(CAM_TRIGGER_PIN, GPIO.OUT)\n\nclass ViewerController:\n    def __init__(self):\n        self.context = zmq.Context()\n        # Use REQ socket for request-reply pattern\n        self.socket = self.context.socket(zmq.PAIR)\n        self.socket.bind("tcp://*:"+str(ZMQPORT))\n        self.tWait = 0.1\n\n    def send_stop_continous(self):\n        self.isRunningContinous = False\n        try:\n            self.mThread.join(timeout=1)\n        except Exception as e:\n            print(e)\n\n    def send_stop_viewer(self):\n        self.send_command("stop")\n\n    def send_command(self, command):\n        return self.send_command_and_receive(command)\n\n    def send_command_and_receive(self, command):\n        # clear messages in the socket\n        while self.socket.poll(0):\n            print(self.socket.recv_string(zmq.NOBLOCK))\n\n        self.socket.send_string(command)\n        # Block until a reply is received\n        message = self.socket.recv_string()\n        return message\n\n    def display_continous(self):\n        self.isRunningContinous = True\n        def runPatternDisplayThreadFunction():\n            while(self.isRunningContinous):\n                for pattern_id in range(nImages): #len(self.current_images)):\n                    if not self.isRunningContinous:\n                        return\n                    self.display_pattern(pattern_id)\n                    self.send_trigger()\n                    print(str(pattern_id))\n                    time.sleep(self.tWait)\n        self.mThread = threading.Thread(target=runPatternDisplayThreadFunction).start()\n\n    def display_pattern(self, pattern_id):\n        self.send_command(f"display:{pattern_id}")\n\n    def change_wavelength(self, wavelength):\n        self.send_command(f"change_wavelength:{wavelength}")\n\n    def set_wait_time(self, tWait):\n        self.tWait = tWait\n\n    def start_single_loop(self, i_cycle):\n        self.send_command(f"start_single_loop:{i_cycle}")\n\n    def send_trigger(self):\n        self.send_command(f"trigger")\n\nclass ImageLoader:\n    def __init__(self, path_488, path_635, n_images=9):\n        self.path_488 = path_488\n        self.path_635 = path_635\n        self.n_images = n_images\n        self.images_488 = self.load_images(self.path_488)\n        self.images_635 = self.load_images(self.path_635)\n\n    def load_images(self, path):\n        images = []\n        try:\n            image_files = sorted([f for f in listdir(path) if isfile(join(path, f))])\n            for i in range(self.n_images):\n                images.append(pygame.image.load(join(path, image_files[i])))\n            print("Images loaded successfully.")\n        except Exception as e:\n            print(f"Failed to load images: {e}")\n            # Handle error or generate random patterns\n        return images\n\napp = FastAPI()\nviewer_controller = ViewerController()\n\nclass PygameViewer:\n    def __init__(self, display_size, path_488, path_635):\n        self.display_size = display_size\n        self.loader = ImageLoader(path_488, path_635)\n        # Initialization of pygame and zmq as before\n        self.context = zmq.Context()\n        self.socket = self.context.socket(zmq.PAIR)\n        self.socket.connect("tcp://localhost:"+str(ZMQPORT))\n        self.current_images = self.loader.images_488  # Default to 488nm images\n        self.tWait = 0.1  # Default time to wait between patterns\n        self.isRunningContinous = False\n        self.mLock = threading.Lock()\n\n    def run(self):\n        os.environ["DISPLAY"] = ":0"\n        pygame.display.init()\n        pygame.init()\n        if IS_FULLSCREEN:\n            self.display = pygame.display.set_mode(self.display_size, pygame.FULLSCREEN)\n        else:\n            self.display = pygame.display.set_mode(self.display_size)\n        pygame.mouse.set_visible(False)\n        self.running = True\n        while self.running:\n                # Check for Pygame events\n                for event in pygame.event.get():\n                    if event.type == pygame.QUIT:  # Allows quitting by closing the window\n                        self.running = False\n\n                # Non-blocking check for a message from ZMQ\n                try:\n                    # Wait for next request from client\n                    message = self.socket.recv_string(zmq.NOBLOCK)\n                    reply = self.handle_message(message)\n                    # Send reply back to client\n                    self.socket.send_string(reply)\n\n                except zmq.Again:\n                    pass  # No message received\n\n                pygame.display.flip()  # Update the full display surface to the screen\n                pygame.time.wait(10)  # Small delay to prevent high CPU usage\n\n    def handle_message(self, message):\n        response = ""\n        if message.startswith("display:"):\n            pattern_id = int(message.split(":")[1])\n            self.display_pattern(pattern_id)\n        elif message.startswith("change_wavelength:"):\n            wavelength = int(message.split(":")[1])\n            self.change_wavelength(wavelength)\n        elif message == "start":\n            self.start()\n            # hreading.Thread(target=self.start).start()\n        elif message == "stop":\n            self.running = False\n        elif message == "trigger":\n            self.trigger()\n        elif message.startswith("start_single_loop"):\n            self.start_single_loop(int(message.split(":")[1]))\n            response = "Current pattern info or any other data"\n        return response\n\n    def trigger(self, gpiopin=CAM_TRIGGER_PIN):\n        # Perform trigger action\n        GPIO.output(gpiopin, GPIO.HIGH)\n        time.sleep(0.001)\n        GPIO.output(gpiopin, GPIO.LOW)\n        time.sleep(0.001)\n\n\n    def display_pattern(self, pattern_id):\n        with self.mLock:\n            if pattern_id < len(self.current_images):\n                image = self.current_images[pattern_id]\n                self.display.blit(image, (0, 0))  # Draw the image to the display\n                #pygame.display.flip()  # Refresh the display seems not work\n                pygame.display.update()\n            else:\n                print("Pattern ID out of range")\n\n    def change_wavelength(self, wavelength):\n        if wavelength == 488:\n            self.current_images = self.loader.images_488\n            print("wl is 488")\n        elif wavelength == 635:\n            self.current_images = self.loader.images_635\n            print("wl is 635")\n        else:\n            print("Unsupported wavelength")\n\n    def start(self): # how to deal with it\n        self.isRunningContinous = True\n        def runPatternDisplayThreadFunction():\n            while(self.isRunningContinous):\n                for i in range(len(self.current_images)):\n                    if not self.isRunningContinous: break\n                    self.display_pattern(i)\n                    self.trigger()\n                    print(str(i))\n                    time.sleep(self.tWait)\n        #threading.Thread(target=runPatternDisplayThreadFunction).start()\n        #runPatternDisplayThreadFunction()\n\n    def start_single_loop(self, cycle):\n        # display each pattern once and perform a trigger action\n        print("Start Single Loop: "+str(cycle))\n        for cyc in range(cycle):\n            for i in range(len(self.current_images)):\n                self.display_pattern(i)\n                self.trigger()\n                print(str(i))\n                time.sleep(self.tWait)\n            self.display_pattern(0) #go back to default pattern\n\n\n@app.get("/display_pattern/{pattern_id}")\nasync def display_pattern(pattern_id: int):\n    viewer_controller.display_pattern(pattern_id)\n    return {"message": f"Displaying pattern {pattern_id}."}\n\n@app.get("/start_viewer/")\nasync def start_viewer():\n    #def startContinousFct():\n    #    viewer_controller.send_command("start")\n    #threading.Thread(target=startContinousFct).start()\n    #startContinousFct()\n    viewer_controller.display_continous()\n    return {"message": "Viewer started."}\n\n@app.get("/stop_viewer/")\nasync def stop_viewer():\n    viewer_controller.send_stop_continous()\n    return {"message": "Viewer stopped."}\n\n# Corresponding FastAPI endpoint\n@app.get("/change_wavelength/{wavelength}")\nasync def change_wavelength(wavelength: int):\n    viewer_controller.change_wavelength(wavelength)\n    return {"message": f"Wavelength changed to {wavelength}nm."}\n\n@app.get("/start_viewer_single_loop/{i_cycle}")\nasync def start_viewer_single_loop(i_cycle: int):\n    viewer_controller.start_single_loop(i_cycle)\n    #response = viewer_controller.send_command_and_receive("start_single_loop")\n    return {"message": "Viewer started in single loop mode."}\n\n@app.get("/set_wait_time/{tWait}") # fix it\nasync def set_wait_time(tWait: float):\n    viewer_controller.set_wait_time(tWait)\n    return {"message": f"Wait time set to {tWait}."}\n\n# Implement other endpoints similarly, using viewer_controller to send appropriate commands\n\nPATH_488 = "/home/pi/Desktop/Pattern_SIMMO/488"\nPATH_635 = "/home/pi/Desktop/Pattern_SIMMO/635"\nDISPLAY_SIZE = (1920, 1080)  \n\nimport threading\nif __name__ == "__main__":\n    def startServer():\n        uvicorn.run(app, host="0.0.0.0", port=8000)\n\n    def startViewer():\n        viewer = PygameViewer(DISPLAY_SIZE, PATH_488, PATH_635)\n        viewer.run()        \n    threading.Thread(target=startServer).start()\n    startViewer()\n')),(0,i.yg)("h3",{id:"explanation"},"Explanation"),(0,i.yg)("h4",{id:"preparation-of-the-raspberry-pi-server"},"Preparation of the raspberry pi server"),(0,i.yg)("p",null,"This code is part of a software package designed to control an imaging system, potentially for scientific research purposes. It integrates several components, including hardware control, image processing, and server communication, to create an automated and interactive system for displaying and capturing images. The code is written in Python and makes use of several libraries, including ZeroMQ (zmq) for messaging, NumPy for numerical operations, Pygame for image display, FastAPI for serving a web interface, and optionally RPi.GPIO for controlling Raspberry Pi GPIO pins. Below is a detailed documentation of the various components of this system."),(0,i.yg)("p",null,"The software consists of multiple classes and functions that work together to control the display of images, potentially capture images with a camera, and interact with the user or other systems via a web interface. It is structured to run on a Raspberry Pi, leveraging GPIO pins for hardware control, but it can also be run on other systems with slight modifications."),(0,i.yg)("h4",{id:"zeromq-zmq-messaging"},"ZeroMQ (ZMQ) Messaging"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"ZeroMQ is used for inter-process communication between the different components of the system. It allows for sending commands and receiving responses between the image display controller and the viewer interface.")),(0,i.yg)("h4",{id:"pygame-for-image-display"},"Pygame for Image Display"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Pygame is utilized for loading and displaying images on a screen. It is capable of running in fullscreen mode for immersive viewing experiences or in a windowed mode for debugging and development.")),(0,i.yg)("h4",{id:"fastapi-web-server"},"FastAPI Web Server"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"FastAPI is employed to create a web interface for remotely controlling the imaging system. This allows users to start and stop the viewer, change displayed images or patterns, and adjust system settings through HTTP requests.")),(0,i.yg)("h4",{id:"raspberry-pi-gpio-optional"},"Raspberry Pi GPIO (Optional)"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"If running on a Raspberry Pi, the script includes an option to use RPi.GPIO for controlling General Purpose Input/Output (GPIO) pins. This is useful for triggering external devices, such as cameras, in sync with image display.")),(0,i.yg)("h4",{id:"viewercontroller"},(0,i.yg)("inlineCode",{parentName:"h4"},"ViewerController")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Manages the communication between the web server (FastAPI) and the image viewer (Pygame) using ZMQ messaging."),(0,i.yg)("li",{parentName:"ul"},"Includes functions to send various commands (",(0,i.yg)("inlineCode",{parentName:"li"},"send_command"),"), such as stopping the viewer, changing displayed images, and adjusting settings.")),(0,i.yg)("h4",{id:"imageloader"},(0,i.yg)("inlineCode",{parentName:"h4"},"ImageLoader")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Loads and stores images from specified directories for two different wavelengths (488nm and 635nm), supporting easy switching between different image sets based on experimental requirements.")),(0,i.yg)("h4",{id:"pygameviewer"},(0,i.yg)("inlineCode",{parentName:"h4"},"PygameViewer")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Initializes and controls the Pygame window for displaying images."),(0,i.yg)("li",{parentName:"ul"},"Handles messages from the ",(0,i.yg)("inlineCode",{parentName:"li"},"ViewerController")," to update the displayed image, change wavelengths, or trigger external devices using GPIO pins.")),(0,i.yg)("h4",{id:"fastapi-endpoints"},"FastAPI Endpoints"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"The web server exposes several endpoints for interacting with the imaging system, such as ",(0,i.yg)("inlineCode",{parentName:"li"},"/display_pattern/{pattern_id}")," for displaying a specific image pattern, and ",(0,i.yg)("inlineCode",{parentName:"li"},"/start_viewer/")," for starting the continuous display mode.")),(0,i.yg)("h3",{id:"gpio-configuration-and-cleanup"},"GPIO Configuration and Cleanup"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"If running on a Raspberry Pi, the script attempts to import RPi.GPIO. If successful, it sets up and cleans specific GPIO pins used by the application, ensuring safe operation and shutdown.")),(0,i.yg)("h3",{id:"running-the-system"},"Running the System"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"The script is designed to be run as the main entry point of the application. It initializes and starts both the FastAPI web server and the Pygame viewer in separate threads, allowing them to operate concurrently.")),(0,i.yg)("h3",{id:"launch-server-on-startup"},"Launch server on startup"),(0,i.yg)("p",null,"The DMD we used accepts HDMI input, so we need to use the DMD as the screen of a raspberry pi, a FastAPI server will direct start on the raspberry pi while it boots. For that we need to modify some code on rapsberry pi and let the FastAPI server will automatic start."),(0,i.yg)("p",null,"Connect the raspberry pi to a normal screen and boot it. Open the terminal of and using the command"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"sudo nano /etc/rc.local")),(0,i.yg)("p",null,"then add this code before ",(0,i.yg)("inlineCode",{parentName:"p"},"exit 0")),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"python /home/pi/Desktop/fastapiSIM.py &")),(0,i.yg)("p",null,"Quit and save the file. Based on the code, we need to copy the ",(0,i.yg)("a",{target:"_blank",href:t(1775).A},(0,i.yg)("code",null,"fastapiSIM.py"))," and also the whole ",(0,i.yg)("a",{parentName:"p",href:"./Pattern_SIMMO"},"folder")," for the patterns to the desktop of pi."),(0,i.yg)("p",null,"Using a ethernet cable to connect the raspberry pi to the computer and reboot the raspberry pi."),(0,i.yg)("p",null,"After the raspberry pi rebooted, we should see the desktop screen on the DMD and can access the server via"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"http://localhost:8000/docs#")),(0,i.yg)("p",null,(0,i.yg)("img",{src:t(6194).A,width:"2251",height:"1220"})),(0,i.yg)("h2",{id:"camera-trigger"},"Camera trigger"),(0,i.yg)("p",null,"The camera has an external trigger come from the raspberry pi, currently, the trigger is provided by GPIO port 26. Use a BNC to jumper cable to connect ",(0,i.yg)("strong",{parentName:"p"},"GPIO26")," and ",(0,i.yg)("strong",{parentName:"p"},"GND")," on pi board to the trigger input of camera."))}c.isMDXComponent=!0},1775:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/files/fastapiSIM-adbe44648edf89d8cfcc93dcd7640d35.py"},6194:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/FastAPI_Screenshot-1a1e18923abc6657c3fb4850c2164a5f.png"},9739:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/hardwareinteraction-d9f37384ca399b8a1a85b4e044979f75.png"}}]);