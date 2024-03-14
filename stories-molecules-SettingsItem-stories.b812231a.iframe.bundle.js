(self.webpackChunklunch_menu=self.webpackChunklunch_menu||[]).push([[4689],{"./src/stories/molecules/SettingsItem.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Default_parameters,_Default_parameters_docs,_Default_parameters1,_component_molecules_SettingsItem_SettingsItem__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/molecules/SettingsItem/SettingsItem.tsx"),_storybook_test__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/test/dist/index.mjs");const __WEBPACK_DEFAULT_EXPORT__={title:"Molecules/SettingsItem",component:_component_molecules_SettingsItem_SettingsItem__WEBPACK_IMPORTED_MODULE_0__.A,parameters:{layout:"centered"},args:{inputDefaultValue:void 0,inputPlaceholder:"Type something",onChange:(0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__.fn)(),title:"Title"},argTypes:{}},Default={};Default.parameters={...Default.parameters,docs:{...null===(_Default_parameters=Default.parameters)||void 0===_Default_parameters?void 0:_Default_parameters.docs,source:{originalSource:"{}",...null===(_Default_parameters1=Default.parameters)||void 0===_Default_parameters1||null===(_Default_parameters_docs=_Default_parameters1.docs)||void 0===_Default_parameters_docs?void 0:_Default_parameters_docs.source}}};const __namedExportsOrder=["Default"]},"./node_modules/@storybook/instrumenter/dist sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/instrumenter/dist sync recursive",module.exports=webpackEmptyContext},"./src/components/atoms/Text/Text.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_util_cn__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/utils/cn.ts"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const Text=param=>{let{className,children,placeholder,title,type,variant,...props}=param;const Tag=null!=variant?variant:"span",tagClasses=(0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((()=>{switch(variant){case"h1":return"text-3xl font-bold text-gray-800 dark:text-gray-300";case"h2":return"pb-4 text-center text-3xl font-bold text-gray-800 dark:text-gray-300 sm:w-1/3 sm:grow sm:pb-0";case"h3":return"text-2xl font-bold text-gray-800 dark:text-gray-300";case"h4":return"font-bold text-gray-800 dark:text-gray-300";case"h5":return"text-gray-500 dark:text-gray-300";default:return"text-lg text-gray-500 dark:text-gray-300"}}),[variant])(),typeClasses=(0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((()=>{switch(type){case"error":return"text-red-700 dark:text-red-500";case"info":case"normal":return"text-gray-500 dark:text-gray-300";default:return""}}),[type])();return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Tag,{...props,title,className:(0,_util_cn__WEBPACK_IMPORTED_MODULE_2__.cn)(tagClasses,typeClasses,className),children})})},__WEBPACK_DEFAULT_EXPORT__=Text;Text.__docgenInfo={description:"",methods:[],displayName:"Text",props:{variant:{required:!1,tsType:{name:"union",raw:"'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'",elements:[{name:"literal",value:"'h1'"},{name:"literal",value:"'h2'"},{name:"literal",value:"'h3'"},{name:"literal",value:"'h4'"},{name:"literal",value:"'h5'"},{name:"literal",value:"'h6'"},{name:"literal",value:"'p'"},{name:"literal",value:"'span'"}]},description:""},type:{required:!1,tsType:{name:"union",raw:"'normal' | 'info' | 'error'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'info'"},{name:"literal",value:"'error'"}]},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""}},composes:["HTMLAttributes"]}},"./src/components/atoms/TextBox/TextBox.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_util_cn__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/utils/cn.ts");const TextBox=param=>{let{className,variant="text",...props}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input",{...props,type:variant,className:(0,_util_cn__WEBPACK_IMPORTED_MODULE_1__.cn)("w-full self-center rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-800 outline-none focus:border-gray-300 focus:ring-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:placeholder-gray-400 dark:focus:border-gray-600 dark:focus:ring-gray-600",className)})})},__WEBPACK_DEFAULT_EXPORT__=TextBox;TextBox.__docgenInfo={description:"",methods:[],displayName:"TextBox",props:{variant:{required:!1,tsType:{name:"union",raw:"'text' | 'password'",elements:[{name:"literal",value:"'text'"},{name:"literal",value:"'password'"}]},description:"",defaultValue:{value:"'text'",computed:!1}}},composes:["ComponentPropsWithoutRef"]}},"./src/components/molecules/SettingsItem/SettingsItem.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_component_atoms_Text_Text__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/atoms/Text/Text.tsx"),_component_atoms_TextBox_TextBox__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/atoms/TextBox/TextBox.tsx");const SettingsItem=param=>{let{title,inputDefaultValue,inputPlaceholder,onChange}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"mb-4 flex items-center gap-4",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_component_atoms_Text_Text__WEBPACK_IMPORTED_MODULE_1__.A,{variant:"h4",className:"w-2/5 text-sm",children:title}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_component_atoms_TextBox_TextBox__WEBPACK_IMPORTED_MODULE_2__.A,{id:title.toDotNotation(),defaultValue:inputDefaultValue,placeholder:inputPlaceholder,onChange})]})},__WEBPACK_DEFAULT_EXPORT__=SettingsItem;SettingsItem.__docgenInfo={description:"",methods:[],displayName:"SettingsItem",props:{title:{required:!0,tsType:{name:"string"},description:""},inputDefaultValue:{required:!0,tsType:{name:"string"},description:""},inputPlaceholder:{required:!0,tsType:{name:"string"},description:""},onChange:{required:!0,tsType:{name:"ChangeEventHandler",elements:[{name:"HTMLInputElement"}],raw:"ChangeEventHandler<HTMLInputElement>"},description:""}}}},"./src/utils/cn.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{cn:()=>cn});var tailwind_merge__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/tailwind-merge/dist/bundle-mjs.mjs"),clsx__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/clsx/dist/clsx.mjs");const cn=function(){for(var _len=arguments.length,inputs=new Array(_len),_key=0;_key<_len;_key++)inputs[_key]=arguments[_key];return(0,tailwind_merge__WEBPACK_IMPORTED_MODULE_0__.QP)((0,clsx__WEBPACK_IMPORTED_MODULE_1__.$)(inputs))}},"./node_modules/@storybook/test/dist sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/test/dist sync recursive",module.exports=webpackEmptyContext},"./node_modules/clsx/dist/clsx.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f)}else for(f in e)e[f]&&(n&&(n+=" "),n+=f);return n}function clsx(){for(var e,t,f=0,n="",o=arguments.length;f<o;f++)(e=arguments[f])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}__webpack_require__.d(__webpack_exports__,{$:()=>clsx})}}]);