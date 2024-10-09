# Introduction to openSIMMO

Read more in our preprint:
[![DOI:10.1101/2024.07.04.601961]([http://img.shields.io/badge/DOI-10.1101/2020.03.02.973073-B31B1B.svg](https://img.shields.io/badge/DOI-10.1101/2024.07.04.601961-B31B1B.svg))](https://doi.org/10.1101/2024.07.04.601961) 


***Enhancing Microscope Resolution through Open-Source Structured Illumination***

This open-source super-resolution module is designed to be attached to epi-fluorescence microscopes, significantly improving their capabilities through advanced fluorescence microscopy techniques. The heart of this device lies in its dual-colored structured illumination extension, which is not only cost-effective but also user-friendly, making it an ideal choice for a wide array of research laboratories equipped with old microscopes that lack the feature of super-resolution.

## Table of Content

This Website will guide you through the process of creating the openSIMMO for your system. Below you can find the necessary steps that can be taken in different orders, but we recommend you go following the following route:

| Step  | Topic  | Sub-Steps  |
|---|---|---|
|  1 | Theory | [Laser](./01_1_Laser.md), [Electronics](./01_02_Electronics.md), [DMD](./01_2_DMD.md)  |
|  2 |  Manufacturing| [02_1_BillOfMaterials.md](./02_1_BillOfMaterials.md) [Preparation](./02_2_Preparation.md)  |
|  3 |  Setup | [Assembly](./03_1_Assembly), [Aligning](./03_2_Aligning)  |
|  4 |  Software |  [ImSwitch](./04_01_ImSwitch.md), [Reconstruction](./04_02_Reconstruction.md)  |


## Key Features of openSIMMO:

1. **Dual-Colored Structured Illumination**: Utilizes a novel approach for achieving super-resolution, employing dual-colored (488/635 nm) structured illumination. This technique is particularly effective in improving resolution beyond the traditional diffraction limit.

2. **Open-Source and Cost-Effective**: One of the most compelling aspects of openSIMMO is its open-source nature, ensuring accessibility to a broad scientific community. The use of cost-effective components significantly reduces the overall expense, making high-resolution imaging more affordable.

3. **Enhanced Resolution with Minimal Complexity**: The module provides an enhancement factor of 1.55x compared to general widefield microscopy. This improvement is achieved without introducing the complexity typically associated with high-end microscopy techniques.

4. **Seamless Integration with ImSwitch Software**: openSIMMO is complemented by the ImSwitch controlling software, a Python-based interface that facilitates efficient communication with the hardware and streamlines data processing. This integration allows for automated workflows and customizable experiment designs.

5. **DIY Friendly with Extensive Documentation**: The package includes detailed documentation and tutorials for assembling and aligning the setup, transforming a video projector into a spatial light modulator, and preparing all necessary components. This comprehensive guide ensures that even those with limited optics expertise can successfully implement the module.

## Applications and Impact:

openSIMMO's versatility and affordability make it a valuable asset for various research domains, particularly in biological research and life sciences. Its ability to image finer structures and dynamic cellular processes with enhanced resolution has the potential to answer increasingly complex scientific questions. Additionally, its educational potential cannot be understated, offering a practical and cost-effective tool for learning advanced imaging techniques.

In summary, openSIMMO stands as a significant advancement in the field of microscopy, bridging the gap between high-cost, complex imaging systems and the need for accessible, high-resolution imaging solutions in research and education.

This repository gives you (hopefully) all the tools necessary to replicate the device in your lab. If you have any questions. Feel free to file an issue here https://github.com/openSIMMO/openSIMMO/issues.
