(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{626:function(t,a,s){t.exports=s.p+"assets/img/exspsheet.7a0cfb60.png"},788:function(t,a,s){"use strict";s.r(a);var e=s(3),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"exspsheet"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#exspsheet"}},[t._v("#")]),t._v(" exspsheet")]),t._v(" "),e("p",[e("img",{attrs:{src:s(626),alt:""}})]),t._v(" "),e("ul",[e("li",[e("strong",[e("em",[t._v("exspsheet 基于 x-data-spreadsheet，运用 xlsx 等插件，可对 excel 进行在线的创建，编辑，保存，导入导出等。\n支持本地文件导入，导出 json，xlsx，blob 等格式。")])])])]),t._v(" "),e("h2",{attrs:{id:"安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),e("ol",[e("li",[t._v("npm 方式")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("    npm install exspsheet\n")])])]),e("ol",{attrs:{start:"2"}},[e("li",[t._v("yarn 方式")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("    yarn add exspsheet\n")])])]),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("依赖包")]),t._v(" "),e("p",[t._v("babel-preset-es2015 less less-loader vue x-data-spreadsheet xlsx")])]),t._v(" "),e("ul",[e("li",[t._v("安装后无法启动，请检查 package.json 中配置是否存在以上依赖包。")])]),t._v(" "),e("h2",{attrs:{id:"引用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#引用"}},[t._v("#")]),t._v(" 引用")]),t._v(" "),e("p",[t._v("安装之后，在需要使用的页面进行如下引入：")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("div",{staticClass:"highlight-lines"},[e("div",{staticClass:"highlighted"},[t._v(" ")]),e("br"),e("br"),e("br"),e("div",{staticClass:"highlighted"},[t._v(" ")]),e("br"),e("br"),e("br")]),e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" exspsheet "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'exspsheet'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  name"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'MyComponent'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  components"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    exspsheet\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("h2",{attrs:{id:"使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[t._v("#")]),t._v(" 使用")]),t._v(" "),e("p",[e("em",[t._v("在 html 中写入以下代码段")])]),t._v(" "),e("div",{staticClass:"language-html extra-class"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 此代码目前为完整配置--\x3e")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("exspsheet")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":jsonParam")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("jsonParam"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":blobParam")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("blobParam"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":isFile")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("isFile"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":isBlob")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("isBlob"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":isJson")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("isJson"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":isLocalFile")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("isLocalFile"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("@jsonResult")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("jsonResult"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("@blobResult")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("blobResult"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("exspsheet")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),e("h2",{attrs:{id:"参数配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参数配置"}},[t._v("#")]),t._v(" 参数配置")]),t._v(" "),e("h3",{attrs:{id:"_1-jsonparam"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-jsonparam"}},[t._v("#")]),t._v(" 1.jsonParam")]),t._v(" "),e("ul",[e("li",[t._v("用于向 excel 中传入 json 格式的 string 数据，渲染至页面。")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("名称")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),e("th",{staticStyle:{"text-align":"right"}},[t._v("必填")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("jsonParam")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("String")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("false")])])])]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("jsonParam "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'[{"name":"商品销售明细表","freeze":"A1","styles":[],"merges":[],"rows":{"0":{"cells":{"0":{"text":"商品销售明细表"}}},"1":{"cells":{"0":{"text":"门店编号："},"1":{"text":"CS102003624"},"2":{"text":"门店名称："},"3":{"text":"零食店"},"5":{"text":" "},"6":{"text":"时间："},"7":{"text":"2020/01/01 - 2020/12/31"},"14":{"text":" "}}},"2":{"cells":{"0":{"text":"汇总一栏"},"1":{"text":"净销量"},"2":{"text":"净销售额(元)"},"3":{"text":"折前金额(元)"},"4":{"text":"销售成本（元）"},"5":{"text":"销售毛利（元）"},"6":{"text":"毛利率（%）"},"7":{"text":"退货数量"},"8":{"text":"退货金额（元）"},"9":{"text":"退货率（%）"}}},"3":{"cells":{"1":{"text":"45868"},"2":{"text":"226729.90 "},"3":{"text":"235092.20 "},"4":{"text":"151196.98 "},"5":{"text":"7"},"6":{"text":"33.32 "},"7":{"text":"262"},"8":{"text":"1565.90 "},"9":{"text":"0.57 "}}},"4":{"cells":{}},"5":{"cells":{"0":{"text":"条形码"},"1":{"text":"商品名称"},"3":{"text":"分类"},"4":{"text":"品牌"},"5":{"text":"净销量"},"6":{"text":"净销售额(元)"},"7":{"text":"折前金额(元)"},"8":{"text":"销售成本（元）"},"9":{"text":"销售均价（元）"},"10":{"text":"销售毛利（元）"},"11":{"text":"毛利率（%）"},"12":{"text":"毛利比重（%）"},"13":{"text":"退货数量"},"14":{"text":"退货金额（元）"},"15":{"text":"退货率（%）"}}},"6":{"cells":{"0":{"text":"2000000004754"},"1":{"text":"巧妈妈水蜜桃/橘子味果冻"},"3":{"text":"巧克力糖果茶饮类"},"4":{"text":"其他"},"5":{"text":"2286"},"6":{"text":"3552.97 "},"7":{"text":"4114.80 "},"8":{"text":"2286.00 "},"9":{"text":"1.55 "},"10":{"text":"1266.97 "},"11":{"text":"35.66 "},"12":{"text":"1.68 "},"13":{"text":"16"},"14":{"text":"25.20 "},"15":{"text":"0.70 "}}},"len":100},"cols":{"len":26},"validations":[],"autofilter":{}}]\'')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("hr"),t._v(" "),e("h3",{attrs:{id:"_2-blobparam"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-blobparam"}},[t._v("#")]),t._v(" 2.blobParam")]),t._v(" "),e("ul",[e("li",[t._v("用于向 excel 中传入 blob 格式的数据，渲染至页面。")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("名称")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),e("th",{staticStyle:{"text-align":"right"}},[t._v("必填")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("blobParam")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("blob")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("false")])])])]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("    blobParam"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Blob")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),e("h3",{attrs:{id:"_3-isfile"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-isfile"}},[t._v("#")]),t._v(" 3.isFile")]),t._v(" "),e("ul",[e("li",[t._v("是否使用导出本地文件功能，默认 false。")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("名称")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),e("th",{staticStyle:{"text-align":"right"}},[t._v("必填")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("isFile")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("boolean")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("false")])])])]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("    isFile"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),e("h3",{attrs:{id:"_4-isblob"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-isblob"}},[t._v("#")]),t._v(" 4.isBlob")]),t._v(" "),e("ul",[e("li",[t._v("是否使用导出 blob 格式功能，默认 false。")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("名称")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),e("th",{staticStyle:{"text-align":"right"}},[t._v("必填")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("isBlob")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("boolean")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("false")])])])]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("    isBlob"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),e("h3",{attrs:{id:"_5-isjson"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-isjson"}},[t._v("#")]),t._v(" 5.isJson")]),t._v(" "),e("ul",[e("li",[t._v("是否使用导出 json 功能，默认 false。")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("名称")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),e("th",{staticStyle:{"text-align":"right"}},[t._v("必填")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("isJson")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("boolean")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("false")])])])]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("    isJson"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),e("h3",{attrs:{id:"_6-islocalfile"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-islocalfile"}},[t._v("#")]),t._v(" 6.isLocalFile")]),t._v(" "),e("ul",[e("li",[t._v("是否使用本地导入文件功能，默认 false。")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("名称")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),e("th",{staticStyle:{"text-align":"right"}},[t._v("必填")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("isLocalFile")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("boolean")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("false")])])])]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("    isLocalFile"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),e("h2",{attrs:{id:"事件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#事件"}},[t._v("#")]),t._v(" 事件")]),t._v(" "),e("h3",{attrs:{id:"_1-jsonresult"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-jsonresult"}},[t._v("#")]),t._v(" 1.jsonResult")]),t._v(" "),e("ul",[e("li",[t._v("用于接收 json 格式导入结果。得到数据后可进行下部处理")])]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("jsonResult")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("value")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),e("h3",{attrs:{id:"_2-blobresult"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-blobresult"}},[t._v("#")]),t._v(" 2.blobResult")]),t._v(" "),e("ul",[e("li",[t._v("用于接收 blob 格式导入结果。得到数据后可进行下部处理")])]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("blobResult")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("value")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);