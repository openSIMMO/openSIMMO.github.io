---
id: 03_2
---


# Aligning the Setup

## Step-by-Step Video for the full process

<iframe width="560" height="315" src="https://www.youtube.com/embed/dtk1fSSjs4k?si=r-JWYkMIB2fvUEsu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Step-by-Step in Pictures

1. Collimating the laser
The collimation of the laser is checked with shear plate, place the shear plate in front of the laser lens, slightly move the lens until interference pattern shown on the shear plate with correct rotation

2. Directing the beam onto DMD
Both lasers should shoot roughly in the center of the first mirrors, then the beam is directed to the combine mirror. The red beam passes tightly besides the blue laser mirror, therefore, the red laser beam will be partially blocked by the mirror. Rotate the combine mirror until both laser beam illuminate onto the DMD chip.

3. Heading the beam path parellel to the optical axis

4. Aligning the telescope
Use a laser pointer and place it after the telescope pointint to the DMD
Maybe with the laser pointer start from the BFP make more sense? 1. Collimation can be checked with Tube lens + second telescope lens, 2. The Laser need to focus again on the DMD.

5. Adjusting the tube lens position
After the telescope nicely adjusted, the laser beam should focus in the center of the back focal plane of the objective, placing a cosair target at the objective revolver to check the beam, if is not centered, slightly move the xy translation stage of the tube lens to center the beam. After that, turn the objective back and check the output beam, it should be collimated and direct straightly towards up.

11. Insert the Fourier mask


## Timelapse of the aligning process of the SIMMO

![](IMAGES/Alignment/VID_20231123_132602.gif)


## Pictured Tutorial Step-by-Step

### Prepare the optical table

We use the Nikon TiE2 to adapt the SIMMO. In principle any microscope body can be used for the super-resolution attachement. The any thing to keep in mind is the final sampling of the SIM pattern in the sample-plane and on the detector respectively.
![](IMAGES/Alignment/SIM_ALIGN_36.jpg)

We prepare the microscope adapter plate with the tubelense (`f=200mm`) that acan be translated in XY to compensate slight angle variations w.r.t. how the SIM beams are hitting the dichroic
![](IMAGES/Alignment/SIM_ALIGN_34.jpg)

Ensure the tube lens is properly distant from the microscope body. In our case 100mm, so that it's 200mm from the last lens of the fourier-filtering telescope
![](IMAGES/Alignment/SIM_ALIGN_33.jpg)

This is the final assembly that is now slided inside the Nikon body
![](IMAGES/Alignment/SIM_ALIGN_32.jpg)

This is how the assembly looks like before fixing it with the screws
![](IMAGES/Alignment/SIM_ALIGN_35.jpg)

We use the screws, provided by the Nikon body and ensure a proper stand. Also make sure that the Nikon body is properly mounted on the table. We use Thorlabs feeds for that.
![](IMAGES/Alignment/SIM_ALIGN_31.jpg)

Now it's time to mount the optical pillars that will hold the SIMMO laser cut assembly in the next step.
![](IMAGES/Alignment/SIM_ALIGN_30.jpg)

The holding brackets are moved to be 110mm above the optical table's surface, such that the exiting SIM beams are perpendicular to the entry-port of the Nikon body. They should enter the infinity port in the center of the microscope.
![](IMAGES/Alignment/SIM_ALIGN_29.jpg)



### Algining the Fourier-filtering telescope

We now need to align the two lenses (f=50mm) that form the telescope for the Fourier mask. For this we use a special DIY machined laser assembly that mounts a 532 nm laser pointer into the center of an SMA cabe. The laser is collimated and defines our optical axis. We could use an off-the-shelf laser pointer with a 3D printed housing, too.
The CAD files will come soon (file an issue or write use if we forgot - sorry!)
![](IMAGES/Alignment/SIM_ALIGN_5.jpg)

The device is screwed in the left position of the Fourier telescope and keep both lenses inside the holder. A little mirror helps us to deflect the laser towards the ceiling, where the laser beam has to keep the same diameter. In that case, the distance between the two lenses (~100mm) ensures that the beam remains collimated.
![](IMAGES/Alignment/SIM_ALIGN_3.jpg)

The result can be observered here:
![](IMAGES/Alignment/SIM_ALIGN_2.jpg)

The DMD-backscattered/diffracted/reflected will produce a diffraction pattern. The hole telescope assembly has to be moved w.r.t. the DMD in such a way that the spots reflected by the DMD are smallest.
![](IMAGES/Alignment/SIM_ALIGN_1.jpg)


### Aligning the two excitation lasers

The goal is to place both laser lines (488, 635nm) in the center of the DMD and ensure the SIM beam will be centered in the Fourier Mask and also enter the microscope in the center of the infinity port / be parallel of the optical axis.

For this we first ensure that the laser drivers are properly wired:
![](IMAGES/Alignment/SIM_ALIGN_24.jpg)

And the TTL inputs are wired to the ESP32 that runs the UC2-ESP firmware. You can find the firmware on the https://youseetoo.github.io/ website that enables you both: Flashing the firmware as well as controling their intensity via TTL signal
![](IMAGES/Alignment/SIM_ALIGN_23.jpg)

Going to the https://youseetoo.github.io/indexWebSerialTest.html website and connecting to the ESP32 enables you to selectively turn on the 488 and 635nm laser for aligning them w.r.t. the optical pathways. Ensure you have the correct configuration. For the UC2_3, the two lasers attach to:
```cpp
          int8_t LASER_1 = GPIO_NUM_12;
          int8_t LASER_2 = GPIO_NUM_4;
```
Then control the lasers:
![](IMAGES/Alignment/SIM_ALIGN_20.jpg)


We start by first collimating the lasers by tweaking the distance between the fiber launcher and the collimation lens. For this we use a shearing plate. This has to be done for both beams individually.
![](IMAGES/Alignment/SIM_ALIGN_21.jpg)

⚠️ Ensure you do not turn on laser power too high to keep laser saftey maintaned ⚠️

![](IMAGES/Alignment/SIM_ALIGN_22.jpg)

Same for the red laser:
![](IMAGES/Alignment/SIM_ALIGN_19.jpg)

Now we will follow the beam paths and ensure both are hitting the DMD in the center. We have to make sure that the beam is not cut by optical element sin the way.
Starting with the red laser, we have to hit the first kinematic mirror in its center:
![](IMAGES/Alignment/SIM_ALIGN_17.jpg)

![](IMAGES/Alignment/SIM_ALIGN_18.jpg)

Here make sure the kinematic mirror from the 488 nm laser is not obscuring the beam:
![](IMAGES/Alignment/SIM_ALIGN_15.jpg)

The kinematic mirror that steers the beam jointly has to be hit in the center too:
![](IMAGES/Alignment/SIM_ALIGN_16.jpg)

The 488nm laser has to hit the first kinematic mirror in the center, too:
![](IMAGES/Alignment/SIM_ALIGN_14.jpg)

and be deflected onto the joint kinematic mirror in the center,too:
![](IMAGES/Alignment/SIM_ALIGN_12.jpg)
![](IMAGES/Alignment/SIM_ALIGN_13.jpg)

With both beams turned on, the two individual kinematic mirrors have to be tweaked in such a way, that the beam is on the center of the DMD. The two beams have to be exactly overlay concentrically:
![](IMAGES/Alignment/SIM_ALIGN_11.jpg)

![](IMAGES/Alignment/SIM_ALIGN_9.jpg)

![](IMAGES/Alignment/SIM_ALIGN_10.jpg)

Turn on the DMD, such that the pixels are in the  `on` state. This way you can monitor the diffraction pattern inside the Fourier telescope
![](IMAGES/Alignment/SIM_ALIGN_8.jpg)

Both wavelengths have to superpose concentrically:
![](IMAGES/Alignment/SIM_ALIGN_7.jpg)










![](IMAGES/Alignment/SIM_ALIGN_25.jpg)
