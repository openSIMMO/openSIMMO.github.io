"use strict";(self.webpackChunkopenSIMMO=self.webpackChunkopenSIMMO||[]).push([[581],{2561:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>h});var i=s(4848),n=s(8453);const r={id:"02_2_Preparation",title:"Prepare the different parts"},a=void 0,l={id:"02_2_Preparation",title:"Prepare the different parts",description:"Preparation",source:"@site/docs/02_2_Preparation.md",sourceDirName:".",slug:"/02_2_Preparation",permalink:"/docs/02_2_Preparation",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"02_2_Preparation",title:"Prepare the different parts"},sidebar:"tutorialSidebar",previous:{title:"Bill Of Materials",permalink:"/docs/02_1_BillOfMaterials"},next:{title:"Assembly",permalink:"/docs/03_1_Assembly"}},o={},h=[{value:"Preparation",id:"preparation",level:2},{value:"Large Parts &amp; Housing",id:"large-parts--housing",level:3},{value:"Optomechanics",id:"optomechanics",level:2},{value:"3D Printing Files",id:"3d-printing-files",level:2},{value:"Table of 3D Printing Files",id:"table-of-3d-printing-files",level:3},{value:"Lasercutting Files",id:"lasercutting-files",level:2},{value:"Design Files",id:"design-files",level:2},{value:"SIM Pattern Generation",id:"sim-pattern-generation",level:2},{value:"Fourier mask",id:"fourier-mask",level:2},{value:"Accessories",id:"accessories",level:2}];function d(e){const t={a:"a",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"preparation",children:"Preparation"}),"\n",(0,i.jsxs)(t.p,{children:["This documentation is designed to help you replicate our setup and understand the components and files required for the project. The openSIMMO project integrates 3D printed parts, laser-cut enclosures, and various accessories to create a customizable optomechanical system.\nTo replicate this setup, you will need to prepare components in the following categories: 3D printed parts, laser-cut enclosures, and accessories. Detailed design files can be found in the ",(0,i.jsx)(t.a,{href:"https://github.com/openSIMMO/openSIMMO/",children:"design-files repository"}),"."]}),"\n",(0,i.jsx)(t.h3,{id:"large-parts--housing",children:"Large Parts & Housing"}),"\n",(0,i.jsx)(t.p,{children:"The housing and large parts of the system are manufactured using laser cutting. Additionally, we use holders for commercial optomechanics, which are 3D printed to ensure system stability."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:s(9947).A+"",width:"1076",height:"825"})}),"\n",(0,i.jsx)(t.h2,{id:"optomechanics",children:"Optomechanics"}),"\n",(0,i.jsxs)(t.p,{children:["To maintain system stability, certain optomechanical components with fine adjustabilities are necessary and cannot be replaced. We utilize a combination of Thorlabs parts and 3D printed components, including kinematic mirror mounts, 1-inch cage plates, and XY translation stages. An in-depth list of all the components used in our design can be found in the ",(0,i.jsx)(t.a,{href:"/docs/02_1_BillOfMaterials",children:"Bill of Materials"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"3d-printing-files",children:"3D Printing Files"}),"\n",(0,i.jsx)(t.p,{children:"All components were printed with 100% infill in PLA using a 0.2mm layer height on a Prusa i3 mk2."}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Download All 3D Printing Files:"})," ",(0,i.jsx)(t.a,{href:"https://github.com/openSIMMO/openSIMMO/raw/master/STL/STL.zip",children:"STL.zip"})]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"table-of-3d-printing-files",children:"Table of 3D Printing Files"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"File Name"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"https://github.com/openSIMMO/openSIMMO/tree/master/STL/Assembly_SIMMO_1_10_Mountinplate_Mirrors_v0_18.stl",children:"STL File"})}),(0,i.jsx)(t.td,{children:"Kinematic mirror mounts x4"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"https://github.com/openSIMMO/openSIMMO/tree/master/STL/Assembly_SIMMO_1_Adapter_DMD_KM100_1.stl",children:"STL File"})}),(0,i.jsx)(t.td,{children:"DMD mount plate x1"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"https://github.com/openSIMMO/openSIMMO/tree/master/STL/Assembly_SIMMO_1_Cover_new_7.stl",children:"STL File"})}),(0,i.jsx)(t.td,{children:"DMD assemblies cover x1"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"https://github.com/openSIMMO/openSIMMO/tree/master/STL/Assembly_SIMMO_1_MCH011_FLASH_BOARD_54.stl",children:"STL File"})}),(0,i.jsx)(t.td,{children:"Special mirror mount x1"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"https://github.com/openSIMMO/openSIMMO/tree/master/STL/Assembly_SIMMO_1_Nikon_Ti2E_3.stl",children:"STL File"})}),(0,i.jsx)(t.td,{children:"Camera mount x1"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"https://github.com/openSIMMO/openSIMMO/tree/master/STL/Assembly_SIMMO_1_RailOptiX_Thorlabs_63.stl",children:"STL File"})}),(0,i.jsx)(t.td,{children:"Nikon Adapter"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"https://github.com/openSIMMO/openSIMMO/tree/master/STL/Assembly_SIMMO_1_RailOptiX_Thorlabs_69.stl",children:"STL File"})}),(0,i.jsx)(t.td,{children:"Ray optics mounts x7"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"https://github.com/openSIMMO/openSIMMO/tree/master/STL/Assembly_SIMMO_1_rpi2-top_netfabb_70.stl",children:"STL File"})}),(0,i.jsx)(t.td,{children:"Raspberry Pi 2 top cover x1"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"https://github.com/openSIMMO/openSIMMO/tree/master/STL/Assembly_SIMMO_1_rpi3-bottom_100mm-vesa_netfabb_71.stl",children:"STL File"})}),(0,i.jsx)(t.td,{children:"Raspberry Pi 3 bottom cover x1"})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"lasercutting-files",children:"Lasercutting Files"}),"\n",(0,i.jsx)(t.p,{children:"The different optical elements are fixed in place according to the provided sketch."}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Lasercutting Files Location:"})," ",(0,i.jsx)(t.a,{href:"https://github.com/openSIMMO/openSIMMO/tree/master/LaserCutting",children:"LaserCutting folder"})]}),"\n"]}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"File Name"}),(0,i.jsx)(t.th,{children:"Quantity"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"https://github.com/openSIMMO/openSIMMO/blob/master/LaserCutting/BaseplateSIMMO.dxf",children:"Ground board with mounting holes"})}),(0,i.jsx)(t.td,{children:"x1"}),(0,i.jsx)(t.td,{children:"Base plate with mounting holes for the setup"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.a,{href:"https://github.com/openSIMMO/openSIMMO/blob/master/LaserCutting/Sidewall_Back1.dxf",children:"Side walls"}),", ",(0,i.jsx)(t.a,{href:"https://github.com/openSIMMO/openSIMMO/blob/master/LaserCutting/Sidewall_Back2.dxf",children:"Back2"}),", ",(0,i.jsx)(t.a,{href:"https://github.com/openSIMMO/openSIMMO/blob/master/LaserCutting/Sidewall_Back3.dxf",children:"Back3"}),", ",(0,i.jsx)(t.a,{href:"https://github.com/openSIMMO/openSIMMO/blob/master/LaserCutting/Sidewall_Laser.dxf",children:"Laser"}),", ",(0,i.jsx)(t.a,{href:"https://github.com/openSIMMO/openSIMMO/blob/master/LaserCutting/Sidewall_LaserDriver.dxf",children:"LaserDriver"}),", ",(0,i.jsx)(t.a,{href:"https://github.com/openSIMMO/openSIMMO/blob/master/LaserCutting/Sidewall_Mirror.dxf",children:"Mirror"}),", ",(0,i.jsx)(t.a,{href:"https://github.com/openSIMMO/openSIMMO/blob/master/LaserCutting/Sidewall_Telescope.dxf",children:"Telescope"}),", ",(0,i.jsx)(t.a,{href:"https://github.com/openSIMMO/openSIMMO/blob/master/LaserCutting/Sidewall_TelescopeDown.dxf",children:"TelescopeDown"})]}),(0,i.jsx)(t.td,{children:"x7"}),(0,i.jsx)(t.td,{children:"Side walls for enclosing the system and mounting various components. Includes specific walls for laser, laser driver, mirror, and telescope alignments"})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"design-files",children:"Design Files"}),"\n",(0,i.jsx)(t.p,{children:"The components are constructed using Inventor 2024 Student edition."}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Design Files Location:"})," ",(0,i.jsx)(t.a,{href:"https://github.com/openSIMMO/openSIMMO/tree/master/INVENTOR",children:"INVENTOR folder"})]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"sim-pattern-generation",children:"SIM Pattern Generation"}),"\n",(0,i.jsx)(t.p,{children:"The SIM pattern was generated using plugin FairSIM from ImageJ. Open Imagej - Plugin - SLM Grating - Search Pattern, the parameters are shown in the screenshot."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:s(5969).A+"",width:"471",height:"965"})}),"\n",(0,i.jsxs)(t.p,{children:["The pattern will be calculated and generated for both 488/635nm laser.\n",(0,i.jsx)(t.img,{src:s(8483).A+"",width:"537",height:"599"})]}),"\n",(0,i.jsx)(t.h2,{id:"fourier-mask",children:"Fourier mask"}),"\n",(0,i.jsxs)(t.p,{children:["The Fourier mask is used to block the 0th order beam, only 1st order beam can pass through for creating 2 beam SIM interference. The Fourier mask was made with Thorlabs ",(0,i.jsx)(t.a,{href:"https://www.thorlabs.com/thorproduct.cfm?partnumber=BKF12",children:"black aluminium foil"}),". The hole position was made with AutoCAD and exported as pdf file. Printing the pattern with normal printer and cut the black aluminium foil with 25mm diameter circle, using a pin to stich the 6 holes on the right position."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.img,{src:s(4262).A+"",width:"1811",height:"1414"}),"\n",(0,i.jsx)(t.img,{src:s(4963).A+"",width:"3024",height:"4032"}),"\n",(0,i.jsx)(t.img,{src:s(172).A+"",width:"1488",height:"1538"})]}),"\n",(0,i.jsx)(t.h2,{id:"accessories",children:"Accessories"}),"\n",(0,i.jsx)(t.p,{children:"The setup also uses 3 standard aluminum profiles to mount the ray optical parts, with lengths of 2 x 100mm and 1 x 150mm."}),"\n",(0,i.jsx)(t.p,{children:"For further information or if you have any questions, feel free to open an issue in this repository."})]})}function c(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},172:(e,t,s)=>{s.d(t,{A:()=>i});const i=s.p+"assets/images/Finished_FourierMask-3b528a5a2ad08353011b236d5007e728.jpg"},8483:(e,t,s)=>{s.d(t,{A:()=>i});const i=s.p+"assets/images/Generated_Pattern-d5dc326fabaf5a4e0024ca663f572c18.png"},5969:(e,t,s)=>{s.d(t,{A:()=>i});const i=s.p+"assets/images/PatternGeneration_FairSIM-1d5f341685f97ff682259c6d4b9ab96f.png"},9947:(e,t,s)=>{s.d(t,{A:()=>i});const i=s.p+"assets/images/PositionDiagram-1c51c8fb2f5c4ca71485ba1fed16a5f2.PNG"},4262:(e,t,s)=>{s.d(t,{A:()=>i});const i=s.p+"assets/images/Printed_pattern-83a55217a1d1c39d79193e87387fb410.jpg"},4963:(e,t,s)=>{s.d(t,{A:()=>i});const i=s.p+"assets/images/Thorlabs_aluFoil-a3c596b98c7fa6688e81767ed762c326.jpg"},8453:(e,t,s)=>{s.d(t,{R:()=>a,x:()=>l});var i=s(6540);const n={},r=i.createContext(n);function a(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);