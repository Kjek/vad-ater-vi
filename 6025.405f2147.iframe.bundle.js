"use strict";(self.webpackChunklunch_menu=self.webpackChunklunch_menu||[]).push([[6025],{"./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{MDXProvider:()=>MDXProvider,useMDXComponents:()=>useMDXComponents});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),react_default=__webpack_require__.n(react);const emptyComponents={},MDXContext=react_default().createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react_default().useContext(MDXContext);return react_default().useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react_default().createElement(MDXContext.Provider,{value:allComponents},properties.children)}}}]);