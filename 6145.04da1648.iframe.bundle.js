"use strict";(self.webpackChunklunch_menu=self.webpackChunklunch_menu||[]).push([[6145],{"./src/components/molecules/AdminOption/AdminOption.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_component_atoms_Button_Button__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/atoms/Button/Button.tsx"),_component_atoms_Text_Text__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/atoms/Text/Text.tsx");const AdminOption=param=>{let{text,buttonValue,onClick}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"flex w-full gap-4",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_component_atoms_Text_Text__WEBPACK_IMPORTED_MODULE_2__.A,{className:"flex-1 self-center",variant:"h4",children:text}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_component_atoms_Button_Button__WEBPACK_IMPORTED_MODULE_1__.A,{value:buttonValue,onClick})]})})},__WEBPACK_DEFAULT_EXPORT__=AdminOption;AdminOption.__docgenInfo={description:"",methods:[],displayName:"AdminOption",props:{text:{required:!1,tsType:{name:"string"},description:""},buttonValue:{required:!0,tsType:{name:"string"},description:""},onClick:{required:!0,tsType:{name:"MouseEventHandler",elements:[{name:"HTMLInputElement"}],raw:"MouseEventHandler<HTMLInputElement>"},description:""}}}},"./src/components/molecules/CreateAdminAccountModal/CreateAdminAccountModal.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_component_atoms_Button_Button__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/atoms/Button/Button.tsx"),_component_atoms_TextBox_TextBox__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/atoms/TextBox/TextBox.tsx"),_util_api__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/utils/api.ts"),_util_toast_utils__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/utils/toast-utils.ts"),react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),react_toastify__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/react-toastify/dist/react-toastify.esm.mjs");const CreateAdminAccountModal=param=>{let{toggleModal}=param;const toastId=(0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)(0),username=(0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)(),password=(0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)(),secret=(0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)(),{mutate:createAdminAccount}=_util_api__WEBPACK_IMPORTED_MODULE_3__.F.admin.createAdminAccount.useMutation({onSuccess(){(0,_util_toast_utils__WEBPACK_IMPORTED_MODULE_4__.r)(toastId.current),setTimeout(toggleModal,2e3)},onError(error){(0,_util_toast_utils__WEBPACK_IMPORTED_MODULE_4__.K)(toastId.current,error)},onMutate(){toastId.current=react_toastify__WEBPACK_IMPORTED_MODULE_6__.oR.loading("Updating in progress...")}});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"absolute right-0 top-0 h-full w-full backdrop-blur-sm",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"flex h-full w-full items-center justify-center",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"dark:bg-gray-custom flex max-w-6xl flex-col flex-wrap gap-4 bg-white p-6",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_component_atoms_TextBox_TextBox__WEBPACK_IMPORTED_MODULE_2__.A,{placeholder:"Username",onChange:event=>username.current=event.target.value}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_component_atoms_TextBox_TextBox__WEBPACK_IMPORTED_MODULE_2__.A,{placeholder:"Password",variant:"password",onChange:event=>password.current=event.target.value}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_component_atoms_TextBox_TextBox__WEBPACK_IMPORTED_MODULE_2__.A,{placeholder:"Secret",variant:"password",onChange:event=>secret.current=event.target.value}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_component_atoms_Button_Button__WEBPACK_IMPORTED_MODULE_1__.A,{value:"Generate","aria-label":"Generate",onClick:()=>{username.current&&password.current&&secret.current&&createAdminAccount({username:username.current,password:password.current,secret:secret.current})}})]})})})},__WEBPACK_DEFAULT_EXPORT__=CreateAdminAccountModal;CreateAdminAccountModal.__docgenInfo={description:"",methods:[],displayName:"CreateAdminAccountModal",props:{toggleModal:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}}},"./src/components/molecules/CreateRestaurantSettingModal/CreateRestaurantSettingModal.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_component_atoms_Button_Button__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/atoms/Button/Button.tsx"),_component_atoms_Text_Text__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/atoms/Text/Text.tsx"),_component_atoms_TextBox_TextBox__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/atoms/TextBox/TextBox.tsx"),_component_molecules_Modal_Modal__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/molecules/Modal/Modal.tsx"),_util_cn__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/utils/cn.ts"),react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),usehooks_ts__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/usehooks-ts/dist/index.js");const CreateRestaurantSettingModal=param=>{let{createRestaurantSetting}=param;const[isOpen,toggleOpen]=(0,usehooks_ts__WEBPACK_IMPORTED_MODULE_6__.eY)(),[enabled,toggleEnabled]=(0,usehooks_ts__WEBPACK_IMPORTED_MODULE_6__.eY)(),name=(0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)(),homeUrl=(0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)(),lunchUrl=(0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)(),lunchRegex=(0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)(),weeklyRegex=(0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)();return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_component_atoms_Button_Button__WEBPACK_IMPORTED_MODULE_1__.A,{value:"Add restaurant",className:"flex-1 cursor-pointer self-end",onClick:toggleOpen}),isOpen?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_component_molecules_Modal_Modal__WEBPACK_IMPORTED_MODULE_4__.A,{toggleOpen,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_component_atoms_Text_Text__WEBPACK_IMPORTED_MODULE_2__.A,{variant:"h3",children:"Add restaurant"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_component_atoms_TextBox_TextBox__WEBPACK_IMPORTED_MODULE_3__.A,{placeholder:"Name",onChange:event=>name.current=event.target.value}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_component_atoms_TextBox_TextBox__WEBPACK_IMPORTED_MODULE_3__.A,{placeholder:"Homepage URL",onChange:event=>homeUrl.current=event.target.value}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_component_atoms_TextBox_TextBox__WEBPACK_IMPORTED_MODULE_3__.A,{placeholder:"Lunch menu URL",onChange:event=>lunchUrl.current=event.target.value}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_component_atoms_TextBox_TextBox__WEBPACK_IMPORTED_MODULE_3__.A,{placeholder:"Lunch Regex (Optional)",onChange:event=>lunchRegex.current=event.target.value}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_component_atoms_TextBox_TextBox__WEBPACK_IMPORTED_MODULE_3__.A,{placeholder:"Weekly Regex (Optional)",onChange:event=>weeklyRegex.current=event.target.value}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_component_atoms_Button_Button__WEBPACK_IMPORTED_MODULE_1__.A,{value:enabled?"Enabled":"Disabled",className:(0,_util_cn__WEBPACK_IMPORTED_MODULE_7__.cn)(enabled?"text-green-400 hover:text-green-600 dark:text-green-800 dark:hover:text-green-600":"text-red-400 hover:text-red-600 dark:text-red-800 dark:hover:text-red-600","w-fit self-end"),onClick:toggleEnabled}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"flex gap-4 self-end",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_component_atoms_Button_Button__WEBPACK_IMPORTED_MODULE_1__.A,{value:"Create",onClick:()=>{name.current&&homeUrl.current&&lunchUrl.current&&(createRestaurantSetting({name:name.current,homeUrl:homeUrl.current,lunchUrl:lunchUrl.current,lunchRegex:lunchRegex.current,weeklyRegex:weeklyRegex.current,enabled:enabled.valueOf()}),toggleOpen())}})})]}):null]})},__WEBPACK_DEFAULT_EXPORT__=CreateRestaurantSettingModal;CreateRestaurantSettingModal.__docgenInfo={description:"",methods:[],displayName:"CreateRestaurantSettingModal",props:{createRestaurantSetting:{required:!0,tsType:{name:"signature",type:"function",raw:"({}: CreateRestaurantParamsProps) => void",signature:{arguments:[{type:{name:"intersection",raw:"Omit<T, K> &\nRequired<Pick<T, K>>",elements:[{name:"Omit",elements:[{name:"Omit",elements:[{name:"UpdateSettingsParamsProps"},{name:"literal",value:"'id'"}],raw:"Omit<UpdateSettingsParamsProps, 'id'>"},{name:"union",raw:"'name' | 'homeUrl' | 'lunchUrl'",elements:[{name:"literal",value:"'name'"},{name:"literal",value:"'homeUrl'"},{name:"literal",value:"'lunchUrl'"}]}],raw:"Omit<T, K>"},{name:"Required",elements:[{name:"Pick",elements:[{name:"Omit",elements:[{name:"UpdateSettingsParamsProps"},{name:"literal",value:"'id'"}],raw:"Omit<UpdateSettingsParamsProps, 'id'>"},{name:"union",raw:"'name' | 'homeUrl' | 'lunchUrl'",elements:[{name:"literal",value:"'name'"},{name:"literal",value:"'homeUrl'"},{name:"literal",value:"'lunchUrl'"}]}],raw:"Pick<T, K>"}],raw:"Required<Pick<T, K>>"}]},name:""}],return:{name:"void"}}},description:""}}}},"./src/components/organisms/AdminMain/AdminMain.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_component_molecules_AdminOption_AdminOption__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/molecules/AdminOption/AdminOption.tsx"),_component_molecules_CreateRestaurantSettingModal_CreateRestaurantSettingModal__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/molecules/CreateRestaurantSettingModal/CreateRestaurantSettingModal.tsx"),_component_organisms_AdminRestaurantSettingsList_AdminRestaurantSettingsList__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/organisms/AdminRestaurantSettingsList/AdminRestaurantSettingsList.tsx"),_component_organisms_LoginSection_LoginSection__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/organisms/LoginSection/LoginSection.tsx"),_util_api__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/utils/api.ts"),_util_toast_utils__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/utils/toast-utils.ts"),next_auth_react__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/next-auth/react/index.js"),react__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),react_toastify__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/react-toastify/dist/react-toastify.esm.mjs");const AdminMain=()=>{const{data:session}=(0,next_auth_react__WEBPACK_IMPORTED_MODULE_7__.useSession)(),toastId=(0,react__WEBPACK_IMPORTED_MODULE_8__.useRef)(0),[currentDebugRestaurantId,setDebugRestaurantId]=(0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(""),{data:restaurantSettings,refetch:fetchRestaurants}=_util_api__WEBPACK_IMPORTED_MODULE_5__.F.admin.getRestaurantSettings.useQuery(void 0),{mutate:reScrape}=_util_api__WEBPACK_IMPORTED_MODULE_5__.F.admin.reScrape.useMutation({onSuccess(){(0,_util_toast_utils__WEBPACK_IMPORTED_MODULE_6__.r)(toastId.current)},onError(error){(0,_util_toast_utils__WEBPACK_IMPORTED_MODULE_6__.K)(toastId.current,error)},onMutate(){toastId.current=react_toastify__WEBPACK_IMPORTED_MODULE_9__.oR.loading("Scraping in progress...")}}),{mutate:reScrapeAll}=_util_api__WEBPACK_IMPORTED_MODULE_5__.F.admin.reScrapeAll.useMutation({onSuccess(){(0,_util_toast_utils__WEBPACK_IMPORTED_MODULE_6__.r)(toastId.current)},onError(error){(0,_util_toast_utils__WEBPACK_IMPORTED_MODULE_6__.K)(toastId.current,error)},onMutate(){toastId.current=react_toastify__WEBPACK_IMPORTED_MODULE_9__.oR.loading("Scraping in progress...")}}),{mutate:deleteRestaurant}=_util_api__WEBPACK_IMPORTED_MODULE_5__.F.admin.deleteRestaurant.useMutation({onSuccess(){(0,_util_toast_utils__WEBPACK_IMPORTED_MODULE_6__.r)(toastId.current),fetchRestaurants()},onError(error){(0,_util_toast_utils__WEBPACK_IMPORTED_MODULE_6__.K)(toastId.current,error)},onMutate(){toastId.current=react_toastify__WEBPACK_IMPORTED_MODULE_9__.oR.loading("Updating in progress...")}}),{mutate:updateSettings}=_util_api__WEBPACK_IMPORTED_MODULE_5__.F.admin.updateRestaurantSetting.useMutation({onSuccess(){(0,_util_toast_utils__WEBPACK_IMPORTED_MODULE_6__.r)(toastId.current),fetchRestaurants()},onError(error){(0,_util_toast_utils__WEBPACK_IMPORTED_MODULE_6__.K)(toastId.current,error)},onMutate(){toastId.current=react_toastify__WEBPACK_IMPORTED_MODULE_9__.oR.loading("Updating in progress...")}}),{data:debugData,refetch:fetchDebug}=_util_api__WEBPACK_IMPORTED_MODULE_5__.F.admin.debugContent.useQuery({restaurantId:currentDebugRestaurantId},{enabled:!1,refetchOnWindowFocus:!1}),{mutate:createRestaurantSetting}=_util_api__WEBPACK_IMPORTED_MODULE_5__.F.admin.createRestaurantSetting.useMutation({onSuccess(){(0,_util_toast_utils__WEBPACK_IMPORTED_MODULE_6__.r)(toastId.current),fetchRestaurants()},onError(error){(0,_util_toast_utils__WEBPACK_IMPORTED_MODULE_6__.K)(toastId.current,error)},onMutate(){toastId.current=react_toastify__WEBPACK_IMPORTED_MODULE_9__.oR.loading("Creating restaurant...")}});return(0,react__WEBPACK_IMPORTED_MODULE_8__.useEffect)((()=>{currentDebugRestaurantId&&fetchDebug()}),[currentDebugRestaurantId]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:(null==session?void 0:session.user)?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"flex items-center justify-center",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"dark:bg-gray-custom mx-80 my-8 flex h-full w-full flex-col gap-4 bg-white p-8",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_component_molecules_AdminOption_AdminOption__WEBPACK_IMPORTED_MODULE_1__.A,{text:"Re-scrape all restaurants",buttonValue:"Re-scrape all",onClick:()=>{reScrapeAll()}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_component_organisms_AdminRestaurantSettingsList_AdminRestaurantSettingsList__WEBPACK_IMPORTED_MODULE_3__.A,{restaurantSettings,debugData,setDebugRestaurantId,deleteRestaurant,updateSettings,reScrape}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_component_molecules_CreateRestaurantSettingModal_CreateRestaurantSettingModal__WEBPACK_IMPORTED_MODULE_2__.A,{createRestaurantSetting}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_component_molecules_AdminOption_AdminOption__WEBPACK_IMPORTED_MODULE_1__.A,{buttonValue:"Logout",onClick:()=>{(0,next_auth_react__WEBPACK_IMPORTED_MODULE_7__.signOut)()}})]})}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_component_organisms_LoginSection_LoginSection__WEBPACK_IMPORTED_MODULE_4__.A,{})})},__WEBPACK_DEFAULT_EXPORT__=AdminMain;AdminMain.__docgenInfo={description:"",methods:[],displayName:"AdminMain"}},"./src/components/organisms/LoginSection/LoginSection.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_component_atoms_Button_Button__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/atoms/Button/Button.tsx"),_component_atoms_TextBox_TextBox__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/atoms/TextBox/TextBox.tsx"),_component_molecules_CreateAdminAccountModal_CreateAdminAccountModal__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/molecules/CreateAdminAccountModal/CreateAdminAccountModal.tsx"),next_auth_react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/next-auth/react/index.js"),react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),usehooks_ts__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/usehooks-ts/dist/index.js");const LoginSection=()=>{const[isGenAdminAccOpen,toggleGenAdminAccOpen]=(0,usehooks_ts__WEBPACK_IMPORTED_MODULE_6__.eY)(),userName=(0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)(""),pass=(0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)(""),onSubmit=async()=>{await(0,next_auth_react__WEBPACK_IMPORTED_MODULE_4__.signIn)("credentials",{username:userName.current,password:pass.current,redirect:!0,callbackUrl:"/admin"})};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"flex h-screen flex-col items-center justify-center gap-1 bg-neutral-100 dark:bg-gray-900",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"dark:bg-gray-custom flex flex-col gap-2 rounded-md bg-white px-7 py-4 shadow",onKeyDown:event=>{"Enter"===event.code&&onSubmit()},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_component_atoms_TextBox_TextBox__WEBPACK_IMPORTED_MODULE_2__.A,{title:"Username",placeholder:"Username",onChange:e=>userName.current=e.target.value}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_component_atoms_TextBox_TextBox__WEBPACK_IMPORTED_MODULE_2__.A,{title:"Password",placeholder:"Password",variant:"password",onChange:e=>pass.current=e.target.value}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_component_atoms_Button_Button__WEBPACK_IMPORTED_MODULE_1__.A,{value:"Login",onClick:()=>{onSubmit()}})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"dark:bg-gray-custom absolute bottom-0 right-0 mb-4 mr-4 bg-white",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_component_atoms_Button_Button__WEBPACK_IMPORTED_MODULE_1__.A,{value:"Generate admin account",onClick:toggleGenAdminAccOpen})}),isGenAdminAccOpen?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_component_molecules_CreateAdminAccountModal_CreateAdminAccountModal__WEBPACK_IMPORTED_MODULE_3__.A,{toggleModal:toggleGenAdminAccOpen}):null]})},__WEBPACK_DEFAULT_EXPORT__=LoginSection;LoginSection.__docgenInfo={description:"",methods:[],displayName:"LoginSection"}},"./src/stories/mocks/StorybookTrpcProvider.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{jn:()=>StorybookTrpcProvider});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@tanstack/query-core/build/lib/queryClient.mjs"),_tanstack_react_query__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@tanstack/react-query/build/lib/QueryClientProvider.mjs"),_trpc_react_query__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@trpc/react-query/dist/index.mjs"),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),superjson__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/superjson/dist/index.js");const mockedTrpc=(0,_trpc_react_query__WEBPACK_IMPORTED_MODULE_1__.pY)(),StorybookTrpcProvider=param=>{let{children}=param;const[queryClient]=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(new _tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__.E({defaultOptions:{queries:{staleTime:1/0}}})),[trpcClient]=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)((()=>mockedTrpc.createClient({links:[(0,_trpc_react_query__WEBPACK_IMPORTED_MODULE_1__.fu)({url:""})],transformer:superjson__WEBPACK_IMPORTED_MODULE_3__.Ay})));return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(mockedTrpc.Provider,{client:trpcClient,queryClient,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_tanstack_react_query__WEBPACK_IMPORTED_MODULE_5__.Ht,{client:queryClient,children})})};StorybookTrpcProvider.__docgenInfo={description:"",methods:[],displayName:"StorybookTrpcProvider"}},"./src/utils/api.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{F:()=>api});var _trpc_client__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@trpc/client/dist/index.mjs"),_trpc_next__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@trpc/next/dist/index.mjs"),superjson__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/superjson/dist/index.js");__webpack_require__("./node_modules/process/browser.js");const api=(0,_trpc_next__WEBPACK_IMPORTED_MODULE_1__.R)({config:()=>({transformer:superjson__WEBPACK_IMPORTED_MODULE_2__.Ay,links:[(0,_trpc_client__WEBPACK_IMPORTED_MODULE_0__.$H)({enabled:opts=>"down"===opts.direction&&opts.result instanceof Error}),(0,_trpc_client__WEBPACK_IMPORTED_MODULE_0__.fu)({url:"".concat("","/api/trpc")})]}),ssr:!1})},"./src/utils/toast-utils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{K:()=>toastError,r:()=>toastSuccessful});var react_toastify__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react-toastify/dist/react-toastify.esm.mjs");const toastSuccessful=id=>{react_toastify__WEBPACK_IMPORTED_MODULE_0__.oR.update(id,{render:"Success!",type:"success",isLoading:!1,autoClose:5e3})},toastError=(id,error)=>{react_toastify__WEBPACK_IMPORTED_MODULE_0__.oR.update(id,{render:"Error: ".concat(error.message),type:"error",isLoading:!1,autoClose:5e3})}}}]);