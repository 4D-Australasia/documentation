(self.webpackChunkcx_docs=self.webpackChunkcx_docs||[]).push([[3537],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return p}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=i.createContext({}),u=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return i.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=u(n),p=a,f=d["".concat(c,".").concat(p)]||d[p]||m[p]||r;return n?i.createElement(f,l(l({ref:t},s),{},{components:n})):i.createElement(f,l({ref:t},s))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<r;u++)l[u]=n[u];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8621:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return o},toc:function(){return c},default:function(){return s}});var i=n(2122),a=n(9756),r=(n(7294),n(3905)),l={id:"mailchimp",title:"MailChimp Integration",sidebar_label:"Mailchimp"},o={unversionedId:"features/mailchimp",id:"features/mailchimp",isDocsHomePage:!1,title:"MailChimp Integration",description:"Settings",source:"@site/docs/features/mailchimp.md",sourceDirName:"features",slug:"/features/mailchimp",permalink:"/docs/features/mailchimp",version:"current",sidebar_label:"Mailchimp",frontMatter:{id:"mailchimp",title:"MailChimp Integration",sidebar_label:"Mailchimp"},sidebar:"tutorialSidebar",previous:{title:"Form Controls",permalink:"/docs/features/formcontrols"},next:{title:"Selling with Project CX",permalink:"/docs/features/selling"}},c=[{value:"Settings",id:"settings",children:[{value:"API Key",id:"api-key",children:[]},{value:"Server Prefix",id:"server-prefix",children:[]},{value:"Default From",id:"default-from",children:[]},{value:"Default Email From",id:"default-email-from",children:[]},{value:"Default Subject",id:"default-subject",children:[]},{value:"Default Language",id:"default-language",children:[]},{value:"Use Mailchimp Audience/Lists",id:"use-mailchimp-audiencelists",children:[]}]},{value:"Sending Data to MailChimp",id:"sending-data-to-mailchimp",children:[{value:"MailChimp Merge Fields",id:"mailchimp-merge-fields",children:[]}]}],u={toc:c};function s(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"settings"},"Settings"),(0,r.kt)("h3",{id:"api-key"},"API Key"),(0,r.kt)("p",null,"Your MailChimp API key can be found at ",(0,r.kt)("a",{parentName:"p",href:"https://us1.admin.mailchimp.com/account/api/"},"https://us1.admin.mailchimp.com/account/api/")),(0,r.kt)("h3",{id:"server-prefix"},"Server Prefix"),(0,r.kt)("p",null,"This is the first part of the URL when you have logged into mailchimp."),(0,r.kt)("p",null,"If the URL is us17.admin.mailchimp.com then 'us17' is the server prefix."),(0,r.kt)("h3",{id:"default-from"},"Default From"),(0,r.kt)("p",null,"Default from name used when creating new lists."),(0,r.kt)("h3",{id:"default-email-from"},"Default Email From"),(0,r.kt)("p",null,"Default from email address used when creating new lists."),(0,r.kt)("h3",{id:"default-subject"},"Default Subject"),(0,r.kt)("p",null,"Default subject used when creating new lists."),(0,r.kt)("h3",{id:"default-language"},"Default Language"),(0,r.kt)("p",null,"Default Language used when creating new lists."),(0,r.kt)("h3",{id:"use-mailchimp-audiencelists"},"Use Mailchimp Audience/Lists"),(0,r.kt)("p",null,"Flags to create an Audience/List for each list. If not flagged, Project CX will add the list as a tag in MailChimp."),(0,r.kt)("h2",{id:"sending-data-to-mailchimp"},"Sending Data to MailChimp"),(0,r.kt)("p",null,"The 'Name' of the list in CX is the name of the Audience or Tag in MailChimp."),(0,r.kt)("p",null,"Clicking 'Save and Send to MailChimp' in the edit screen will save the list and send it directly to MailChimp."),(0,r.kt)("p",null,"Otherwise, lists are sent to MailChimp every 10 hours."),(0,r.kt)("p",null,"Switching off the 'Send to Mailchimp' flag on a list will stop it being sent."),(0,r.kt)("h3",{id:"mailchimp-merge-fields"},"MailChimp Merge Fields"),(0,r.kt)("p",null,"Fields from the contacts or companies can be sent to mailchimp as merge fields."),(0,r.kt)("p",null,"The names of the fields are case insensitive in Project-CX (including the ones listed below) but not in MailChimp (eg. if you add two fields 'Name' and 'name' as merge fields in Project-CX you will get two different fields in MailChimp with the value of the single field from Project-CX (called 'Name', 'name' or 'NAME' etc)"),(0,r.kt)("p",null,"In addition to all custom fields, the following fields can be sent as Merge fields:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CX_ID"),(0,r.kt)("td",{parentName:"tr",align:null},"ID of the record")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CX_NAME"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the company or contact")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CX_IMPORTID"),(0,r.kt)("td",{parentName:"tr",align:null},"Import ID of the company or contact")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CX_FIRSTNAME"),(0,r.kt)("td",{parentName:"tr",align:null},"First name of the contact (invalid for companies)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CX_LASTNAME"),(0,r.kt)("td",{parentName:"tr",align:null},"Last name of the contact (invalid for companies)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CX_EMAIL"),(0,r.kt)("td",{parentName:"tr",align:null},"Email of the contact (invalid for companies)")))))}s.isMDXComponent=!0}}]);