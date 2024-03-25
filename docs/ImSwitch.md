# ImSwitch

## ImSwitch Configuration

In ImSwitch we use the followin configuration to get the PCO camera working in conjuction with the SIM reconstruction

```
json
{
  "rs232devices": {
    "ESP32": {
      "managerName": "ESP32Manager",
      "managerProperties": {
        "host_": "192.168.43.129",
        "serialport": "dummy"
      }
    }
  },
  "positioners": {
    "ESP32Stage": {
      "managerName": "ESP32StageManager",
      "managerProperties": {
        "rs232device": "ESP32",
        "enableauto": 0,
        "isEnable": 1,
        "stepsizeZ": 0.3125
      },
      "axes": [
        "Z"
          ],
      "forScanning": true,
      "forPositioning": true
    }
  },
  "detectors": {
    "WidefieldCamera": {
      "analogChannel": null,
      "digitalLine": null,
      "managerName": "PCOManager",
      "managerProperties": {
        "cameraListIndex": 0,
        "PCOcam": {
          "exposure": 0
        }
      },
      "forAcquisition": true
    }
  },
  "lasers": {
    "488 Laser": {
      "analogChannel": null,
      "digitalLine": null,
      "managerName": "ESP32LEDLaserManager",
      "managerProperties": {
        "rs232device": "ESP32",
        "channel_index": 1,
        "filter_change": false,
        "laser_despeckle_period": 10,
        "laser_despeckle_amplitude": 0
      },
      "wavelength": 488,
      "valueRangeMin": 0,
      "valueRangeMax": 1024
    },
    "635 Laser": {
      "analogChannel": null,
      "digitalLine": null,
      "managerName": "ESP32LEDLaserManager",
      "managerProperties": {
        "rs232device": "ESP32",
        "channel_index": 2,
        "filter_change": false,
        "laser_despeckle_period": 10,
        "laser_despeckle_amplitude": 0
      },
      "wavelength": 635,
      "valueRangeMin": 0,
      "valueRangeMax": 1024
    }
  },
  "rois": {
    "Full chip": {
      "x": 600,
      "y": 600,
      "w": 1200,
      "h": 1200
    }
  },  
  "sim": {
    "monitorIdx": 2,
    "width": 1080,
    "height": 1920,
    "wavelength": 0,
    "pixelSize": 0,
    "angleMount": 0,
    "displayServerHost":"169.266.1.5"
  },
    "availableWidgets": [
      "Settings",
      "View",
      "Recording",
      "Laser",
      "Image",
      "SIM"    
      ]
  }
```

## Code Explanation

We rely on the PCO Edge camera which is triggered by the display server represented by the Raspberry Pi. The display server itself is controlled using a fastapi REST service that starts the display process of individual SIM patterns. This is all part of the `SIMController/SIMWidget`which can be found [here](https://github.com/openUC2/ImSwitch/blob/master/imswitch/imcontrol/controller/controllers/SIMController.py) and [here](https://github.com/openUC2/ImSwitch/blob/master/imswitch/imcontrol/view/widgets/SIMWidget.py). 
Ensure that the IP address of the Raspberry PI is setup correctly in the Configuration file above (e.g. `"displayServerHost":"169.266.1.5"`).

This Python module is part of the **ImSwitch** software package, aimed at controlling and processing Structured Illumination Microscopy (SIM) experiments. It integrates various functionalities, including device control, SIM pattern generation, image acquisition, and sophisticated image reconstruction algorithms.

Here, we want to give a brief explanation of the code.

## Key Components

### `SIMController`

The main controller class that orchestrates the SIM experiment workflow. It includes functionalities for:

- Initializing the imaging setup based on configuration files.
- Managing synchronous acquisition of images with respect to the SIM pattern display.
- Switching between different laser sources and recording modes.
- Dynamic selection of reconstruction methods, including support for both `mcSIM` and `napari`-based processing.
- Handling of GPU resources for computation, if available.

#### Initialization and Configuration

The controller loads necessary configuration from setup files and initializes connected devices (lasers, detectors, SLMs) accordingly. It also sets up the SIM display on an external monitor, if specified.

#### Image Acquisition and Processing

The controller manages the acquisition of SIM images, including synchronization with the pattern display on the SLM. It supports toggling between different lasers and utilizes threading to handle image processing without interrupting acquisition.

#### Reconstruction

Based on the selected method (`mcSIM` or `napari`), the controller performs the reconstruction of SIM images to achieve super-resolution. This involves complex computations, potentially utilizing GPU acceleration.

### `SIMProcessor`

A helper class designed for the processing and reconstruction of SIM images. It encapsulates:

- Calibration of SIM parameters based on acquired images.
- Reconstruction of high-resolution images using either `mcSIM` or `napari` processing algorithms.
- Management of GPU resources for computation, if available.

### Error Handling and Debugging

The module includes robust error handling and debugging information, allowing for troubleshooting and optimization of the SIM imaging process.

## Integration with ImSwitch

This module is designed to integrate seamlessly with the broader ImSwitch framework, utilizing common utilities for logging, device management, and UI interaction. It demonstrates the modular architecture of ImSwitch, enabling sophisticated imaging techniques like SIM to be accessible within a unified software environment.
