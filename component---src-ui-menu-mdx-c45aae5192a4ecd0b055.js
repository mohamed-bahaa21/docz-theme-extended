(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{gJDI:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return i})),t.d(n,"default",(function(){return p}));t("PN9k"),t("LnO1"),t("3eMz"),t("dtAy"),t("DB+v"),t("6lxD"),t("ERkP");var a=t("ZVZ0"),b=t("9Rvw"),r=t("BVnp");t("l1C2");function l(){return(l=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}var i={};void 0!==i&&i&&i===Object(i)&&Object.isExtensible(i)&&!i.hasOwnProperty("__filemeta")&&Object.defineProperty(i,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/UI/menu.mdx"}});var c={_frontmatter:i},o=b.a;function p(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,a,b={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(b[t]=e[t]);return b}(e,["components"]);return Object(a.b)(o,l({},c,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"menu"},"Menu"),Object(a.b)("p",null,"Improved and redesigned menu."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Menu search"),Object(a.b)("li",{parentName:"ul"},"Right side headings menu with scroll detection"),Object(a.b)("li",{parentName:"ul"},"Menu groups")),Object(a.b)("h2",{id:"config"},"Config"),Object(a.b)("h3",{id:"search"},"Search"),Object(a.b)("p",null,"Inside ",Object(a.b)("inlineCode",{parentName:"p"},"doczrc.js")," file there is a ",Object(a.b)("inlineCode",{parentName:"p"},"themeConfig.menu.search")," option to enable or disable search."),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-js"}),"//doczrc.js\nexport default {\n  themeConfig: {\n    menu: {\n      search: true,\n    },\n  },\n};\n")),Object(a.b)("h4",{id:"options"},"Options"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",l({parentName:"tr"},{align:null}),"Name"),Object(a.b)("th",l({parentName:"tr"},{align:null}),"Type"),Object(a.b)("th",l({parentName:"tr"},{align:null}),"Default"),Object(a.b)("th",l({parentName:"tr"},{align:null}),"Description"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",l({parentName:"tr"},{align:null}),"search"),Object(a.b)("td",l({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"boolean")),Object(a.b)("td",l({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"true")),Object(a.b)("td",l({parentName:"tr"},{align:null}),"Specify if the menu search should be shown.")))),Object(a.b)("hr",null),Object(a.b)("h3",{id:"headings"},"Headings"),Object(a.b)("p",null,"Inside ",Object(a.b)("inlineCode",{parentName:"p"},"doczrc.js")," file there is a ",Object(a.b)("inlineCode",{parentName:"p"},"themeConfig.menu.headings")," option."),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-js"}),"//doczrc.js\nexport default {\n  themeConfig: {\n    menu: {\n      headings: {\n        rightSide: true,\n        scrollspy: true,\n        depth: 3,\n      },\n    },\n  },\n};\n")),Object(a.b)("h4",{id:"options-1"},"Options"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",l({parentName:"tr"},{align:null}),"Name"),Object(a.b)("th",l({parentName:"tr"},{align:null}),"Type"),Object(a.b)("th",l({parentName:"tr"},{align:null}),"Default"),Object(a.b)("th",l({parentName:"tr"},{align:null}),"Description"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",l({parentName:"tr"},{align:null}),"rightSide"),Object(a.b)("td",l({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"boolean")),Object(a.b)("td",l({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"false")),Object(a.b)("td",l({parentName:"tr"},{align:null}),"Specify if the headings menu on the right should be shown.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",l({parentName:"tr"},{align:null}),"scrollspy"),Object(a.b)("td",l({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"boolean")),Object(a.b)("td",l({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"true")),Object(a.b)("td",l({parentName:"tr"},{align:null}),"Specify if the headings menu should have scrollspy enabled.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",l({parentName:"tr"},{align:null}),"depth"),Object(a.b)("td",l({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"number")),Object(a.b)("td",l({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"3")),Object(a.b)("td",l({parentName:"tr"},{align:null}),"Specify the depth of headings to be shown. (1 - 6)")))),Object(a.b)("hr",null),Object(a.b)("h3",{id:"groups"},"Groups"),Object(a.b)("p",null,"Menu items can now be grouped into labeled sections. Inside ",Object(a.b)("inlineCode",{parentName:"p"},"doczrc.js")," file there is a ",Object(a.b)("inlineCode",{parentName:"p"},"groups")," option.\nThe option receives an object where the key is the section name and the value is an array of menu items.\nThe order of items is reflected in the menu."),Object(a.b)(r.a,{type:"info",mdxType:"Hint"},"An empty key ('') represents ungrouped values."),Object(a.b)(r.a,{type:"warning",mdxType:"Hint"},"Only top level menu items or menu groups can be grouped into sections."),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-js"}),"//doczrc.js\nexport default {\n  groups: {\n    '': [],\n    API: ['Components', 'UI'],\n  },\n};\n")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"menu-name"},"Menu name"),Object(a.b)("p",null,"To allow having menus with the same name a ",Object(a.b)("inlineCode",{parentName:"p"},"menuDisplayName")," option can be set inside ",Object(a.b)("inlineCode",{parentName:"p"},"doczrc.js")," file.\nThe option receives an object where the key represents the document ",Object(a.b)("inlineCode",{parentName:"p"},"name")," and the value is a string to be displayed in the menu."),Object(a.b)(r.a,{type:"warning",mdxType:"Hint"},"This also applies to ",Object(a.b)(r.b,{mdxType:"InlineCode"},"menu")," names."),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-js"}),"//doczrc.js\nexport default {\n  menuDisplayName: {\n    UI: 'User Interface',\n    Main: 'Main Container',\n  },\n};\n")))}void 0!==p&&p&&p===Object(p)&&Object.isExtensible(p)&&!p.hasOwnProperty("__filemeta")&&Object.defineProperty(p,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/UI/menu.mdx"}}),p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-ui-menu-mdx-c45aae5192a4ecd0b055.js.map