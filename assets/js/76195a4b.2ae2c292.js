"use strict";(self.webpackChunkMatchboxscope=self.webpackChunkMatchboxscope||[]).push([[630],{5680:(e,t,a)=>{a.d(t,{xA:()=>g,yg:()=>d});var n=a(6540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},g=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),m=p(a),c=r,d=m["".concat(s,".").concat(c)]||m[c]||u[c]||i;return a?n.createElement(d,l(l({ref:t},g),{},{components:a})):n.createElement(d,l({ref:t},g))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},8775:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=a(8168),r=(a(6540),a(5680));const i={},l=void 0,o={unversionedId:"Preparation",id:"Preparation",title:"Preparation",description:"Preparation",source:"@site/docs/Preparation.md",sourceDirName:".",slug:"/Preparation",permalink:"/docs/Preparation",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Laser",permalink:"/docs/Laser"},next:{title:"Reconstruction",permalink:"/docs/Reconstruction"}},s={},p=[{value:"Preparation",id:"preparation",level:2},{value:"Large Parts &amp; Housing",id:"large-parts--housing",level:3},{value:"Optomechanics",id:"optomechanics",level:2},{value:"3D Printing Files",id:"3d-printing-files",level:2},{value:"Table of 3D Printing Files",id:"table-of-3d-printing-files",level:3},{value:"Lasercutting Files",id:"lasercutting-files",level:2},{value:"Design Files",id:"design-files",level:2},{value:"Accessories",id:"accessories",level:2}],g={toc:p},m="wrapper";function u(e){let{components:t,...i}=e;return(0,r.yg)(m,(0,n.A)({},g,i,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"preparation"},"Preparation"),(0,r.yg)("p",null,"This documentation is designed to help you replicate our setup and understand the components and files required for the project. The openSIMMO project integrates 3D printed parts, laser-cut enclosures, and various accessories to create a customizable optomechanical system.\nTo replicate this setup, you will need to prepare components in the following categories: 3D printed parts, laser-cut enclosures, and accessories. Detailed design files can be found in the ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/openSIMMO/openSIMMO/"},"design-files repository"),"."),(0,r.yg)("h3",{id:"large-parts--housing"},"Large Parts & Housing"),(0,r.yg)("p",null,"The housing and large parts of the system are manufactured using laser cutting. Additionally, we use holders for commercial optomechanics, which are 3D printed to ensure system stability."),(0,r.yg)("p",null,(0,r.yg)("img",{src:a(9947).A,width:"1076",height:"825"})),(0,r.yg)("h2",{id:"optomechanics"},"Optomechanics"),(0,r.yg)("p",null,"To maintain system stability, certain optomechanical components with fine adjustabilities are necessary and cannot be replaced. We utilize a combination of Thorlabs parts and 3D printed components, including kinematic mirror mounts, 1-inch cage plates, and XY translation stages. An in-depth list of all the components used in our design can be found in the ",(0,r.yg)("a",{parentName:"p",href:"/docs/BillOfMaterials"},"Bill of Materials"),"."),(0,r.yg)("h2",{id:"3d-printing-files"},"3D Printing Files"),(0,r.yg)("p",null,"All components were printed with 100% infill in PLA using a 0.2mm layer height on a Prusa i3 mk2."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Download All 3D Printing Files:")," ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/openSIMMO/openSIMMO/raw/master/STL/STL.zip"},"STL.zip"))),(0,r.yg)("h3",{id:"table-of-3d-printing-files"},"Table of 3D Printing Files"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"File Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/openSIMMO/openSIMMO/tree/master/STL/Assembly_SIMMO_1_10_Mountinplate_Mirrors_v0_18.stl"},"STL File")),(0,r.yg)("td",{parentName:"tr",align:null},"Kinematic mirror mounts x4")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/openSIMMO/openSIMMO/tree/master/STL/Assembly_SIMMO_1_Adapter_DMD_KM100_1.stl"},"STL File")),(0,r.yg)("td",{parentName:"tr",align:null},"DMD mount plate x1")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/openSIMMO/openSIMMO/tree/master/STL/Assembly_SIMMO_1_Cover_new_7.stl"},"STL File")),(0,r.yg)("td",{parentName:"tr",align:null},"DMD assemblies cover x1")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/openSIMMO/openSIMMO/tree/master/STL/Assembly_SIMMO_1_MCH011_FLASH_BOARD_54.stl"},"STL File")),(0,r.yg)("td",{parentName:"tr",align:null},"Special mirror mount x1")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/openSIMMO/openSIMMO/tree/master/STL/Assembly_SIMMO_1_Nikon_Ti2E_3.stl"},"STL File")),(0,r.yg)("td",{parentName:"tr",align:null},"Camera mount x1")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/openSIMMO/openSIMMO/tree/master/STL/Assembly_SIMMO_1_RailOptiX_Thorlabs_63.stl"},"STL File")),(0,r.yg)("td",{parentName:"tr",align:null},"Nikon Adapter")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/openSIMMO/openSIMMO/tree/master/STL/Assembly_SIMMO_1_RailOptiX_Thorlabs_69.stl"},"STL File")),(0,r.yg)("td",{parentName:"tr",align:null},"Ray optics mounts x7")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/openSIMMO/openSIMMO/tree/master/STL/Assembly_SIMMO_1_rpi2-top_netfabb_70.stl"},"STL File")),(0,r.yg)("td",{parentName:"tr",align:null},"Raspberry Pi 2 top cover x1")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/openSIMMO/openSIMMO/tree/master/STL/Assembly_SIMMO_1_rpi3-bottom_100mm-vesa_netfabb_71.stl"},"STL File")),(0,r.yg)("td",{parentName:"tr",align:null},"Raspberry Pi 3 bottom cover x1")))),(0,r.yg)("h2",{id:"lasercutting-files"},"Lasercutting Files"),(0,r.yg)("p",null,"The different optical elements are fixed in place according to the provided sketch."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Lasercutting Files Location:")," ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/openSIMMO/openSIMMO/tree/master/LaserCutting"},"LaserCutting folder"))),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"File Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Quantity"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/openSIMMO/openSIMMO/blob/master/LaserCutting/BaseplateSIMMO.dxf"},"Ground board with mounting holes")),(0,r.yg)("td",{parentName:"tr",align:null},"x1"),(0,r.yg)("td",{parentName:"tr",align:null},"Base plate with mounting holes for the setup")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/openSIMMO/openSIMMO/blob/master/LaserCutting/Sidewall_Back1.dxf"},"Side walls"),", ",(0,r.yg)("a",{parentName:"td",href:"https://github.com/openSIMMO/openSIMMO/blob/master/LaserCutting/Sidewall_Back2.dxf"},"Back2"),", ",(0,r.yg)("a",{parentName:"td",href:"https://github.com/openSIMMO/openSIMMO/blob/master/LaserCutting/Sidewall_Back3.dxf"},"Back3"),", ",(0,r.yg)("a",{parentName:"td",href:"https://github.com/openSIMMO/openSIMMO/blob/master/LaserCutting/Sidewall_Laser.dxf"},"Laser"),", ",(0,r.yg)("a",{parentName:"td",href:"https://github.com/openSIMMO/openSIMMO/blob/master/LaserCutting/Sidewall_LaserDriver.dxf"},"LaserDriver"),", ",(0,r.yg)("a",{parentName:"td",href:"https://github.com/openSIMMO/openSIMMO/blob/master/LaserCutting/Sidewall_Mirror.dxf"},"Mirror"),", ",(0,r.yg)("a",{parentName:"td",href:"https://github.com/openSIMMO/openSIMMO/blob/master/LaserCutting/Sidewall_Telescope.dxf"},"Telescope"),", ",(0,r.yg)("a",{parentName:"td",href:"https://github.com/openSIMMO/openSIMMO/blob/master/LaserCutting/Sidewall_TelescopeDown.dxf"},"TelescopeDown")),(0,r.yg)("td",{parentName:"tr",align:null},"x7"),(0,r.yg)("td",{parentName:"tr",align:null},"Side walls for enclosing the system and mounting various components. Includes specific walls for laser, laser driver, mirror, and telescope alignments")))),(0,r.yg)("h2",{id:"design-files"},"Design Files"),(0,r.yg)("p",null,"The components are constructed using Inventor 2024 Student edition."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Design Files Location:")," ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/openSIMMO/openSIMMO/tree/master/INVENTOR"},"INVENTOR folder"))),(0,r.yg)("h2",{id:"accessories"},"Accessories"),(0,r.yg)("p",null,"The setup also uses 3 standard aluminum profiles to mount the ray optical parts, with lengths of 2 x 100mm and 1 x 150mm."),(0,r.yg)("p",null,"For further information or if you have any questions, feel free to open an issue in this repository."))}u.isMDXComponent=!0},9947:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/PositionDiagram-1c51c8fb2f5c4ca71485ba1fed16a5f2.PNG"}}]);