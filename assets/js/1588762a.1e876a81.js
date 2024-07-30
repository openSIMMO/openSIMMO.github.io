"use strict";(self.webpackChunkopenSIMMO=self.webpackChunkopenSIMMO||[]).push([[373],{6884:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var s=n(4848),r=n(8453);const i={},a="Integrate openSIMMO into OpenFrame",d={id:"06_01_OpenFrame",title:"Integrate openSIMMO into OpenFrame",description:"Introduction",source:"@site/docs/06_01_OpenFrame.md",sourceDirName:".",slug:"/06_01_OpenFrame",permalink:"/docs/06_01_OpenFrame",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Computing SIM Patterns",permalink:"/docs/05_02_PatternComputation"}},l={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Step-by-Step Integration",id:"step-by-step-integration",level:2},{value:"Step 1: Prepare OpenFrame",id:"step-1-prepare-openframe",level:3},{value:"Step 2: Print the Adapter Block",id:"step-2-print-the-adapter-block",level:3},{value:"Step 3: Assemble the Adapter",id:"step-3-assemble-the-adapter",level:3},{value:"Step 4: Integrate the Heidstar XY Stage",id:"step-4-integrate-the-heidstar-xy-stage",level:3},{value:"Step 5: Setup imswitch",id:"step-5-setup-imswitch",level:3},{value:"Step 6: Test the Integration",id:"step-6-test-the-integration",level:3},{value:"Pictured Tutorial",id:"pictured-tutorial",level:2},{value:"Conclusion",id:"conclusion",level:2}];function o(e){const t={a:"a",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"integrate-opensimmo-into-openframe",children:"Integrate openSIMMO into OpenFrame"}),"\n",(0,s.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,s.jsx)(t.p,{children:"This tutorial is a work in progress."}),"\n",(0,s.jsxs)(t.p,{children:["We have designed an adapter that integrates the openSIMMO module with the OpenFrame layer. For more information about OpenFrame, you can visit their ",(0,s.jsx)(t.a,{href:"https://github.com/ImperialCollegeLondon/openFrame/wiki/",children:"GitHub repository"}),". OpenFrame is a robust, metal-machined multilayer structure, where each layer can serve a different functionality."]}),"\n",(0,s.jsx)(t.p,{children:"In this integration, we replicate an inverse fluorescence microscope, where the fluorescence path is represented by the SIM system. In the current version, we use a Heidstar XY stage. Everything is integrated into imswitch for hardware control, image acquisition, and image processing. All production files will be available soon, and the only additional component needed is a 3D-printed block."}),"\n",(0,s.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsx)(t.p,{children:"Before starting, ensure you have the following:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"OpenFrame setup."}),"\n",(0,s.jsx)(t.li,{children:"openSIMMO module."}),"\n",(0,s.jsx)(t.li,{children:"Heidstar XY stage."}),"\n",(0,s.jsx)(t.li,{children:"imswitch software."}),"\n",(0,s.jsx)(t.li,{children:"3D printer (for printing the adapter block)."}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"step-by-step-integration",children:"Step-by-Step Integration"}),"\n",(0,s.jsx)(t.h3,{id:"step-1-prepare-openframe",children:"Step 1: Prepare OpenFrame"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["Assemble the OpenFrame structure according to the instructions provided in their ",(0,s.jsx)(t.a,{href:"https://github.com/ImperialCollegeLondon/openFrame/wiki/",children:"wiki"}),"."]}),"\n",(0,s.jsx)(t.li,{children:"Ensure each layer is securely fastened and properly aligned."}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"step-2-print-the-adapter-block",children:"Step 2: Print the Adapter Block"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"Download the 3D model file for the adapter block (link will be provided soon)."}),"\n",(0,s.jsx)(t.li,{children:"Print the adapter block using a 3D printer. Ensure the dimensions and print quality meet the requirements for a snug fit."}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"step-3-assemble-the-adapter",children:"Step 3: Assemble the Adapter"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"Attach the 3D-printed adapter block to the appropriate layer of the OpenFrame."}),"\n",(0,s.jsx)(t.li,{children:"Secure the openSIMMO module onto the adapter block."}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"step-4-integrate-the-heidstar-xy-stage",children:"Step 4: Integrate the Heidstar XY Stage"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"Mount the Heidstar XY stage onto the designated layer of the OpenFrame."}),"\n",(0,s.jsx)(t.li,{children:"Connect the stage to the control system as per the manufacturer's instructions."}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"step-5-setup-imswitch",children:"Step 5: Setup imswitch"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"Install imswitch on your control computer if not already installed."}),"\n",(0,s.jsx)(t.li,{children:"Configure imswitch to recognize and control the openSIMMO module and the Heidstar XY stage."}),"\n",(0,s.jsx)(t.li,{children:"Set up the hardware control, image acquisition, and image processing parameters within imswitch."}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"step-6-test-the-integration",children:"Step 6: Test the Integration"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"Power on the system and launch imswitch."}),"\n",(0,s.jsx)(t.li,{children:"Test the movement of the XY stage and ensure the openSIMMO module is functioning correctly."}),"\n",(0,s.jsx)(t.li,{children:"Perform a test image acquisition to verify that the entire setup works seamlessly."}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"pictured-tutorial",children:"Pictured Tutorial"}),"\n",(0,s.jsx)(t.p,{children:"We 3D printed the openFrame main bodies using a BambuLab P1P using PETG with 0.2 layer height and 50-80% infill."}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"First Prototype:"}),"\n",(0,s.jsx)(t.img,{src:n(3411).A+"",width:"2736",height:"3648"})]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Placing the openUC2 Filter cube inside the OpenFrame with the Two Mounts:"}),"\n",(0,s.jsx)(t.img,{src:n(2775).A+"",width:"3648",height:"2736"})]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Adapting the SIMMOModule next to the printed OpenFrame"}),"\n",(0,s.jsx)(t.img,{src:n(8700).A+"",width:"3648",height:"2736"})]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Roughly aligning the optical axis"}),"\n",(0,s.jsx)(t.img,{src:n(6268).A+"",width:"3648",height:"2736"})]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Careful look into the Beamsplitter plane"}),"\n",(0,s.jsx)(t.img,{src:n(3751).A+"",width:"3648",height:"2736"})]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(8506).A+"",width:"3648",height:"2736"})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"A 3D printed adapter matches the thorlabs holes of the openFrame to the SIMMO"}),"\n",(0,s.jsx)(t.img,{src:n(1216).A+"",width:"3648",height:"2736"})]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Aligning the SIM orders in the back forcal plane of the OpenFrame:"})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.em,{children:"Incorrect:"}),"\n",(0,s.jsx)(t.img,{src:n(5755).A+"",width:"1280",height:"720"})]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.em,{children:"Correct:"}),"\n",(0,s.jsx)(t.img,{src:n(6214).A+"",width:"1280",height:"720"})]}),"\n",(0,s.jsx)(t.h1,{id:"cad-files",children:"CAD Files"}),"\n",(0,s.jsx)(t.p,{children:"This folder contains various CAD files for the OpenFrame project. Below is a table summarizing the contents of this folder."}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"File Name"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"File Type"}),(0,s.jsx)(t.th,{children:"Link"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"40_XYZstage_micrometer_motorized_nema8_samplemount_angle_distance_24mm.stp"}),(0,s.jsx)(t.td,{children:"XYZ stage micrometer with motorized NEMA 8 sample mount, angle distance 24mm"}),(0,s.jsx)(t.td,{children:"STEP"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:n(7025).A+"",children:"40_XYZstage_micrometer_motorized_nema8_samplemount_angle_distance_24mm.stp"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Assembly_Cube_Beamsplitter_AHF_v3.stp"}),(0,s.jsx)(t.td,{children:"Assembly cube with beamsplitter AHF, version 3"}),(0,s.jsx)(t.td,{children:"STEP"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:n(6415).A+"",children:"Assembly_Cube_Beamsplitter_AHF_v3.stp"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Assembly_Cube_empty_IM_v3.stp"}),(0,s.jsx)(t.td,{children:"Empty assembly cube, version 3"}),(0,s.jsx)(t.td,{children:"STEP"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:n(8673).A+"",children:"Assembly_Cube_empty_IM_v3.stp"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"NAUO43_Tubelens_156.5_Astromedia.stl"}),(0,s.jsx)(t.td,{children:"NAUO43 tube lens, 156.5mm, Astromedia"}),(0,s.jsx)(t.td,{children:"STL"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:n(1389).A+"",children:"NAUO43_Tubelens_156.5_Astromedia.stl"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"OF-LL-80 v1.stl"}),(0,s.jsx)(t.td,{children:"OpenFrame LL-80, version 1"}),(0,s.jsx)(t.td,{children:"STL"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:n(938).A+"",children:"OF-LL-80 v1.stl"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"OpenFrame - 35mm Blanking Plug.stp"}),(0,s.jsx)(t.td,{children:"OpenFrame 35mm blanking plug"}),(0,s.jsx)(t.td,{children:"STEP"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:n(286).A+"",children:"OpenFrame - 35mm Blanking Plug.stp"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"OpenFrame - Cube Insert_uc2_cube.stl"}),(0,s.jsx)(t.td,{children:"OpenFrame cube insert UC2 cube"}),(0,s.jsx)(t.td,{children:"STL"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:n(5729).A+"",children:"OpenFrame - Cube Insert_uc2_cube.stl"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"OpenFrame - SM2 Cmount Plug.stl"}),(0,s.jsx)(t.td,{children:"OpenFrame SM2 C-mount plug"}),(0,s.jsx)(t.td,{children:"STL"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:n(280).A+"",children:"OpenFrame - SM2 Cmount Plug.stl"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"OpenFrame - Stage Adapter_UC2.stl"}),(0,s.jsx)(t.td,{children:"OpenFrame stage adapter UC2"}),(0,s.jsx)(t.td,{children:"STL"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:n(9728).A+"",children:"OpenFrame - Stage Adapter_UC2.stl"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"OpenFrameAdapter_2.stl"}),(0,s.jsx)(t.td,{children:"OpenFrame adapter, version 2"}),(0,s.jsx)(t.td,{children:"STL"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:n(3279).A+"",children:"OpenFrameAdapter_2.stl"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"OpenFrameAdapter_2.stp"}),(0,s.jsx)(t.td,{children:"OpenFrame adapter, version 2"}),(0,s.jsx)(t.td,{children:"STEP"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:n(3731).A+"",children:"OpenFrameAdapter_2.stp"})})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,s.jsx)(t.p,{children:"By following these steps, you can successfully integrate the openSIMMO module into the OpenFrame layer, replicating an inverse fluorescence microscope with a SIM system. Keep an eye out for updates and the release of production files. If you encounter any issues or have questions, feel free to reach out through the relevant GitHub repositories."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(9964).A+"",width:"1600",height:"792"})})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},7025:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/files/40_XYZstage_micrometer_motorized_nema8_samplemount_angle_distance_24mm-b05ebceb2c5740e4a518b61c5a1b57f9.stp"},6415:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/files/Assembly_Cube_Beamsplitter_AHF_v3-2a181ce05d1a8e17218f9356f0bc6cac.stp"},8673:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/files/Assembly_Cube_empty_IM_v3-2e3834a667a15e67df559c0f8d0eea40.stp"},1389:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/files/NAUO43_Tubelens_156.5_Astromedia-0f8ccdecc1add48dc2da9c1f98a6f427.stl"},938:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/files/OF-LL-80 v1-c800831b4091bb221f8bacc4983bbd5f.stl"},286:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/files/OpenFrame - 35mm Blanking Plug-8272e9e5fc7ddcdbe86807e6af451a0d.stp"},5729:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/files/OpenFrame - Cube Insert_uc2_cube-f2da253c8e82caf3ae30850958b168ef.stl"},280:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/files/OpenFrame - SM2 Cmount Plug-7c400df0d4b8bd0e2abb89405595c722.stl"},9728:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/files/OpenFrame - Stage Adapter_UC2-af0857fcf2bc2cd0678fac984032fa98.stl"},3279:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/files/OpenFrameAdapter_2-f33634c462e158ca3b32b7bb024f9067.stl"},3731:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/files/OpenFrameAdapter_2-9709206a028a02f30773c14017e5ebdc.stp"},3411:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/IMG_20240525_082553-d3a6351774328ab1ad3ee3c5cac440a9.jpg"},2775:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/IMG_20240530_152733-a8990d8a45fe8bd7e3c6280f431e2a92.jpg"},8700:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/IMG_20240530_154303-d088bafe0c035c6e10d10dea0631358a.jpg"},6268:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/IMG_20240530_154310-64487a3ae5b69e0c835386b8733a3bc6.jpg"},3751:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/IMG_20240605_163606-3b62a4a22e48c0930311d449c1e0b79e.jpg"},8506:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/IMG_20240605_163613-2853e3efd430e1d664f2ba54d75660d8.jpg"},1216:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/IMG_20240607_125432_1-f209ac8cd4fa7d529edad6d7c1b58cb4.jpg"},5755:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/VID_20240605_164006-54bea7761e6e52b38eec50011e1b8ca7.gif"},6214:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/VID_20240605_164047-3c4467e9cf07d41a51e5db1dbdd5edda.gif"},9964:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/openframeopensimmo-26ac78dabb89a70683d7d2e2352a4ddf.jpeg"},8453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>d});var s=n(6540);const r={},i=s.createContext(r);function a(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);