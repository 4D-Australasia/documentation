(self.webpackChunkcx_docs=self.webpackChunkcx_docs||[]).push([[3062],{3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return d},kt:function(){return p}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var m=a.createContext({}),c=function(t){var e=a.useContext(m),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=c(t.components);return a.createElement(m.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,m=t.parentName,d=l(t,["components","mdxType","originalType","parentName"]),u=c(n),p=r,f=u["".concat(m,".").concat(p)]||u[p]||s[p]||o;return n?a.createElement(f,i(i({ref:e},d),{},{components:n})):a.createElement(f,i({ref:e},d))}));function p(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var m in e)hasOwnProperty.call(e,m)&&(l[m]=e[m]);l.originalType=t,l.mdxType="string"==typeof t?t:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7991:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return m},default:function(){return d}});var a=n(2122),r=n(9756),o=(n(7294),n(3905)),i={id:"form-actions",title:"Form Actions",sidebar_label:"Form Actions",sidebar_position:31},l={unversionedId:"manuals/advanced/functions/form-actions",id:"manuals/advanced/functions/form-actions",isDocsHomePage:!1,title:"Form Actions",description:"Information on Adding Actions to buttons can be found here",source:"@site/docs/manuals/advanced/functions/form-actions.md",sourceDirName:"manuals/advanced/functions",slug:"/manuals/advanced/functions/form-actions",permalink:"/docs/manuals/advanced/functions/form-actions",version:"current",sidebar_label:"Form Actions",sidebarPosition:31,frontMatter:{id:"form-actions",title:"Form Actions",sidebar_label:"Form Actions",sidebar_position:31},sidebar:"tutorialSidebar",previous:{title:"Add an I-Frame",permalink:"/docs/manuals/advanced/add_iframe"},next:{title:"Form Controls",permalink:"/docs/manuals/advanced/functions/formcontrols"}},m=[{value:"Submit Actions",id:"submit-actions",children:[]},{value:"Form Item Actions",id:"form-item-actions",children:[]}],c={toc:m};function d(t){var e=t.components,n=(0,r.Z)(t,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Information on Adding Actions to buttons can be found ",(0,o.kt)("a",{parentName:"p",href:"../../beginner/add-action"},"here")),(0,o.kt)("h2",{id:"submit-actions"},"Submit Actions"),(0,o.kt)("p",null,"These actions are associated with a submit button on the form and happen after the form is submitted."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Navigate"),(0,o.kt)("td",{parentName:"tr",align:null},"Navigates to another URL, can be another form or an external URL")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Email"),(0,o.kt)("td",{parentName:"tr",align:null},"Sends an Email")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Email with Action Request"),(0,o.kt)("td",{parentName:"tr",align:null},"Creates an action request and sends an email with a link to the form used to do the action.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Email Membership Invoice"),(0,o.kt)("td",{parentName:"tr",align:null},"Generates a membership invoice for a given company and membership numbers and emails it")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Email on Payment"),(0,o.kt)("td",{parentName:"tr",align:null},"Checks the result of the payment for the submitted form, and sends an email based on it")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Set value of Company Field"),(0,o.kt)("td",{parentName:"tr",align:null},"Sets the value of a field in a company record, selected with a company lookup field")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Set value of Contact Field"),(0,o.kt)("td",{parentName:"tr",align:null},"Sets the value of a field in a contact record, selected with a contact lookup field")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Reload"),(0,o.kt)("td",{parentName:"tr",align:null},"Reloads the current form")))),(0,o.kt)("h2",{id:"form-item-actions"},"Form Item Actions"),(0,o.kt)("p",null,"These actions are associated with items on the form. They do not need the form to be submitted"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Display Form inside Placeholder"),(0,o.kt)("td",{parentName:"tr",align:null},"Displayed the given form inside the given placeholder")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Show Fees on Form"),(0,o.kt)("td",{parentName:"tr",align:null},"Show the membership fees in a given placeholder")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Open Form in Dialog"),(0,o.kt)("td",{parentName:"tr",align:null},"Opens the given form inside a dialog")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Close Dialog"),(0,o.kt)("td",{parentName:"tr",align:null},"Close the current dialog")))))}d.isMDXComponent=!0}}]);