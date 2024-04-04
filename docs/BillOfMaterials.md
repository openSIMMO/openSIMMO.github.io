---
id: 02_1
---

# Bill Of Materials

| Part                        | Specification                             | Purpose                    | Quantity | Cost (in Euro) | Link                                                                                                                       |
| --------------------------- | ----------------------------------------- | -------------------------- | -------- | --------| -------------------------------------------------------------------------------------------------------------------------- |
| Acrylic glas                | 6mm thickness, 60x60mm, black             | SIMMO                      | 3        | 50      | [Kunststoffplattenonline](https://kunststoffplattenonline.de/product/acrylglas-platte-schwarz-6-mm/)                       |
| DMD                         | DLP4710EVM-G2                             | SIM Generator              | 1        | 1200    | [Texas Instruments]( https://www.ti.com/tool/DLPDLCR4710EVM-G2)                                                            |
| Achromatic lens             | AC254-050-A                               | Fourier Lens               | 2        | 80      | [Thorlabs](https://www.thorlabs.com/newgrouppage9.cfm?objectgroup_id=2696&pn=AC254-050-A-ML)                               |
| Achromatic lens             | AC254-075-A                               | Collimation Lens           | 2        | 80      | [Thorlabs](https://www.thorlabs.com/newgrouppage9.cfm?objectgroup_id=2696&pn=AC254-075-A-ML)                               |
| Achromatic lens             | AC254-150-A                               | Tube Lens                  | 1        | 80      | [Thorlabs](https://www.thorlabs.com/newgrouppage9.cfm?objectgroup_id=2696&pn=AC254-150-A-ML)                               |
| Silver coated mirror        | PF10-03-P01 - Ø1" Protected Silver Mirror | Illumination direction     | 3        | 50      | [Thorlabs](https://www.thorlabs.com/thorproduct.cfm?partnumber=PF10-03-P01)                                                |
| Kinematic mirror mount      | KM100                                     | Fine adjustment of mirror  | 4        | 38.04   | [Thorlabs](https://www.thorlabs.com/newgrouppage9.cfm?objectgroup_id=1492&pn=KM100)                                        |
| Fiber coupled diode laser   | 488nm 30mW single-mode fiber coupled      | Excitation light source    | 1        | 250     | [openUC2](https://openuc2.com/)                                                                                            |
| Fiber coupled diode laser   | 635nm 60mW single-mode fiber coupled      | Excitation light source    | 1        | 250     | [openUC2](https://openuc2.com/)                                                                                            |
| Optomechanical cage plate   | CP33/M                                    | Mount lenses               | 6        | 17.35   | [Thorlabs](https://www.thorlabs.com/newgrouppage9.cfm?objectgroup_id=2273&pn=CP33M)                                        |
| Fiber adapter               | SM1FC                                     | Adpter for fiber laser     | 2        | 30.7    | [Thorlabs](https://www.thorlabs.com/newgrouppage9.cfm?objectgroup_id=69&pn=SM1FC)                                          |
| XY translation mount        | CXY1A                                     | Alignment for Fourier Mask | 1        | 183.14  | [Thorlabs](https://www.thorlabs.com/newgrouppage9.cfm?objectgroup_id=184&pn=CXY1A)                                         |
| Lens Tube                   | SM1L40                                    | Mount the tube lens        | 1        | 45.12   | [Thorlabs](https://www.thorlabs.com/thorproduct.cfm?partnumber=SM1L40)                                                     |
| Raspberry Pi 3B             | 4x 1,4 GHz, 1 GB RAM                      | Control DMD/Display Server | 1        | 38.65   | [Reichelt](https://www.reichelt.de/de/de/raspberry-pi-3-b-4x-1-4-ghz-1-gb-ram-wlan-bt-raspberry-pi-3b--p217696.html?PROVID=2788&gad_source=1&gclid=CjwKCAjw_LOwBhBFEiwAmSEQAfp409SfHn6MyuCKzRIseEWkS6VLrwq3-aNhslFIsxqYlyXUkh7wkRoCL4AQAvD_BwE&&r=1)     |
| ESP32                       | Compatible with CNC controllerboard       | Trigger signal generation  | 1        | 9.99       | [Amazon](https://www.amazon.de/AZDelivery-NodeMCU-Entwicklungsboard-Bluetooth-kompatibel/dp/B08BV3L92G?th=1)              |
| CNC-Controllerboard         | A4988 Motor driver                        | Driver for stepper motor   | 1        | 17.7    | [Reichelt](https://www.reichelt.de/arduino-shield-cnc-controllerboard-a4988-ard-shd-cnc-kit-p226375.html?PROVID=2788&gad_source=1&gclid=CjwKCAjw_LOwBhBFEiwAmSEQAa4a9eD-5PQbeCzHf90KCoav6ybRpw1aThQGHKh_voCHw14F3v3JmxoCzukQAvD_BwE)|
| Nema17 Motor                |                                           | Motorized Focus            | 1        | 15      | [Reichelt](https://www.reichelt.de/hybridschrittmotor-nema-17-1-8-1-7-a-2-6-v-act-17hs4417p1x4-p237908.html?PROVID=2788&gad_source=1&gclid=CjwKCAjw_LOwBhBFEiwAmSEQAdq1HLK9jyYW6MHtvKmPjfStByHIucyRfMKkRWcCxekHi5io6gR5PxoCpSEQAvD_BwE)|
| GT2 150mm                   |                                           | Belt drive                 | 1        | 2.40    | [I3DService](https://imprimante-3d-service.com/de/364-gt2-riemen-6mm-geschlossen-150mm-75-zahne.html)                     |
| Pulley GT2                  |                                           | Belt                       | 1        | 1.68    | [I3DService](https://imprimante-3d-service.com/de/41-44-riemenscheibe-gt2-20-zahne-fur-5-oder-8-mm-achse.html#/29-durchmesser_bohrung_riemenscheiben-5mm) |
| HDMI Cable                  |                                           | HDMI for DMD to raspberry pi|1        | 2.7     | [Reichelt](https://www.reichelt.de/hdmi-high-speed-mit-ethernet-kabel-1-50m-hds-x-hc000-015e-p223584.html?PROVID=2788&gad_source=1&gclid=CjwKCAjw_LOwBhBFEiwAmSEQAagbyoidNCsnFX6diHtKCYBrHOuBSjif-KqoWtv2ipkphM8pTaWYwRoClsYQAvD_BwE)|
| USB micro Powersupply       | 5,1V, 2,5A                                | Powersupply for raspberry Pi|1        | 8.4     | [Reichelt](https://www.reichelt.de/raspberry-pi-netzteil-5-1-v-2-5-a-microusb-eu-stecker-wei-rpi-ps-12-5eu-wt-p316266.html?PROVID=2788&gad_source=1&gclid=CjwKCAjw_LOwBhBFEiwAmSEQAc11uLTp_qDsxu5rdBqsNm_koDs_wQ6dN1ajSfVMbmqiCvRHExYXbRoCEOwQAvD_BwE)|
| M3 Screw Set, DIN912        |                                           |                            | 1        | 15      |                                                                                                                            |
| Pillar                      | RS4P8E                                    |                            | 3        | 34.29   | [Thorlabs](https://www.thorlabs.com/thorproduct.cfm?partnumber=RS4P8E)   |
| Braket                      | C1011/M                                   |                            | 3        | 83.41   | [Thorlabs](https://www.thorlabs.com/thorproduct.cfm?partnumber=C1011/M) |
| Aluminium Profile           | 20mm, 40mm                                |                            |          |         |                                                                                                                            |
| 3DP: Kinematic Mirror Mount |                                           |                            |          |         |
| 3DP: Railoptics Mounts      |                                           |                            |          |         |                                                                                                                            |
| 3DP: Microscope Adapter     |                                           |                            |          |         |                                                                                                                            |
| 3DP: Microscope Adapter     |                                           |                            |          |         |                                                                                                                            |
| 3DP: Microscope Adapter     |                                           |                            |          |         |                                                                                                                            |
| 3DP: Microscope Adapter     |                                           |                            |          |         |                                                                                                                            |
| 3DP: Microscope Adapter     |                                           |                            |          |         |                                                                                                                            |
| 3DP: Microscope Adapter     |                                           |                            |          |         |                                                                                                                            |



## BOM exported from Inventor

| #  | Part name                          | Count |
| -- | ---------------------------------- | ----- |
| 1  | Mount_DMD_KM100                    | 1     |
| 2  | KM100-Solidworks                   | 1     |
| 3  | 00_AC254-030-A-ML-Step             | 2     |
| 4  | Nikon_Ti2E                         | 1     |
| 5  | 00_Beampath_v0                     | 1     |
| 6  | 00_AC254-200-A-ML-Step             | 1     |
| 7  | 00_AC254-075-A-ML-Step             | 2     |
| 8  | Cover_new                          | 1     |
| 9  | 00_KM100-Step                      | 3     |
| 10 | PF10-03-P01-Solidworks             | 3     |
| 11 | 00_Baseplate_Simmo_base            | 2     |
| 12 | 00_B3060L-Step                     | 4     |
| 13 | Assembly_Post_v0                   | 3     |
| 14 | 00_PCO_edge-det                    | 1     |
| 15 | 00_Aluminium_Extrusion_20x20       | 1     |
| 16 | 10_Mountinplate_Mirrors_v0         | 4     |
| 17 | MB4560_M-Solidworks                | 1     |
| 18 | 00_Baseplate_Simmo_side2_v2        | 1     |
| 19 | 10_Baseplate_Simmo_side1           | 1     |
| 20 | 00_Aluminium_Extrusion_20x20_250mm | 2     |
| 21 | 00_CP33_M-Solidworks               | 6     |
| 22 | 00_Baseplate_Simmo_side5_v2        | 1     |
| 23 | 00_Baseplate_Simmo_side6_v2        | 1     |
| 24 | 00_Baseplate_Simmo_side7_v2        | 1     |
| 25 | 00_Baseplate_Simmo_side4_v2        | 1     |
| 26 | MCH008_EVM_BOARD                   | 1     |
| 27 | MCH011_FLASH_BOARD                 | 1     |
| 28 | Nikon_Eclipse_Ts2R_FL_Assy         | 1     |
| 29 | 00_Laser_HeatSink                  | 2     |
| 30 | 00_Baseplate_Simmo_side3_v2        | 1     |
| 31 | 30126G3-Solidworks                 | 2     |
| 32 | CXY1QA-Solidworks                  | 1     |
| 33 | RailOptiX_Thorlabs                 | 7     |
| 34 | rpi2-top_netfabb                   | 1     |
| 35 | rpi3-bottom_100mm-vesa_netfabb     | 1     |
| 36 | ESP32-WROVER-DEVKIT-NODEMCU-V1.3   | 1     |
