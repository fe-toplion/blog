(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{254:function(t,n,e){"use strict";e.r(n);var s=e(0),r=Object(s.a)({},(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"【第12题】三条路径理清原型链（定格记忆篇）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#【第12题】三条路径理清原型链（定格记忆篇）","aria-hidden":"true"}},[t._v("#")]),t._v(" 【第12题】三条路径理清原型链（定格记忆篇）")]),t._v(" "),e("h3",{attrs:{id:"面试题（头条）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#面试题（头条）","aria-hidden":"true"}},[t._v("#")]),t._v(" 面试题（头条）")]),t._v(" "),e("blockquote",[e("p",[t._v("利用原型和原型链相关知识，画出 "),e("code",[t._v("Object、 Function、Object.prototype、Function.prototype")]),t._v(" 四个对象间的关联关系")])]),t._v(" "),e("h3",{attrs:{id:"答案解析："}},[e("a",{staticClass:"header-anchor",attrs:{href:"#答案解析：","aria-hidden":"true"}},[t._v("#")]),t._v(" 答案解析：")]),t._v(" "),e("p",[e("strong",[t._v("原型和原型链")]),t._v("，是"),e("code",[t._v("javascript")]),t._v("这门语言中的重要概念，同时也是面试过程中的必考知识点。小编对它也是日常迷惑，每次都需要查资料、重新理逻辑，近日重新换了个角度思考，对原型和原型链有了更加深刻的认识和理解。")]),t._v(" "),e("h3",{attrs:{id:"被忽视的点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#被忽视的点","aria-hidden":"true"}},[t._v("#")]),t._v(" 被忽视的点")]),t._v(" "),e("p",[t._v("有一些比较重要的知识点，往往容易被忽略，清醒的认识下面的几个点，对于后面理解原型和原型链有很大帮助。")]),t._v(" "),e("p",[e("strong",[t._v("1. prototype是函数对象的独有属性，同时prototype对象是一个普通对象object（Function.prototype除外，它是一个function）")])]),t._v(" "),e("p",[t._v("在JS的世界中，对象被分为两种：普通对象（object）、函数对象（function）。")]),t._v(" "),e("p",[e("strong",[t._v("只有函数对象才有"),e("code",[t._v("prototype")]),t._v("属性，普通对象是没有"),e("code",[t._v("prototype")]),t._v("属性的。")])]),t._v(" "),e("p",[t._v("可以通过下面代码进行验证：")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("let obj = {\n    name: '前端名狮'\n};\n\nfunction foo () {\n    console.log('my name is 前端名狮');\n}\n\nconsole.log(obj.prototype); // undefined\nconsole.log(foo.prototype); // {constructor: foo}\n\nconsole.log(typeof(foo.prototype)) // object\nconsole.log(foo.prototype.hasOwnProperty('constructor')) // true\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br"),e("span",{staticClass:"line-number"},[t._v("12")]),e("br"),e("span",{staticClass:"line-number"},[t._v("13")]),e("br")])]),e("p",[t._v("由上我们能看出：")]),t._v(" "),e("p",[e("code",[t._v("obj.prototype")]),t._v(" 输出"),e("code",[t._v("undefined")]),t._v("，表明普通对象没有prototype属性。")]),t._v(" "),e("p",[e("code",[t._v("foo.prototype")]),t._v("的输出结果是一个普通的"),e("code",[t._v("object")]),t._v("，同时里面包含了"),e("code",[t._v("constructor")]),t._v("属性，而"),e("code",[t._v("constructor")]),t._v("指向了foo函数本身。所以我们能得出下图结论：")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_png/2K5IuDFDWmib7z2k0gCOzianWUU7wB2hFWHicQCXVgpYk3uLIuMkSfT3Z9cEKqW9MyAn6sRLIZr6G08Qu9YGmXEtw/0?wx_fmt=png",alt:""}})]),t._v(" "),e("p",[e("strong",[t._v("2. Object，Function 都是函数")])]),t._v(" "),e("p",[t._v("由于原型和原型链之间的关系复杂，梳理过程中，很容易忽视Object、Function是函数，可以通过下面代码加深理解")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("console.log(typeof(Object)); //打印出 Function\nlet obj = new Object(); // 可以使用new创建，表明是一个函数\n\nconsole.log(typeof(Function));\nlet fn = new Function('console.log(88)'); // 通过new的方式创建函数，表明Function本身是一个函数\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br")])]),e("h3",{attrs:{id:"三条路径覆盖原型链"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三条路径覆盖原型链","aria-hidden":"true"}},[t._v("#")]),t._v(" 三条路径覆盖原型链")]),t._v(" "),e("p",[t._v("所谓的原型链，就是查找一个对象的属性时，先查找它本身是否存在该属性，如果本身不存在的话，会通过"),e("strong",[t._v("隐式原型属性"),e("code",[t._v("__proto__")])]),t._v(" 找到它的上一级对象，，然后再通过上一级对象的"),e("code",[t._v("__proto__")]),t._v("查找上一级的上一级，一直到最顶层对象"),e("code",[t._v("null")]),t._v("，这样的一种查找途径，通过"),e("code",[t._v("__proto__")]),t._v("形成了一条链路。")]),t._v(" "),e("p",[e("strong",[t._v("上面提到，"),e("code",[t._v("prototype")]),t._v("是函数对象的特有属性，而"),e("code",[t._v("__proto__")]),t._v("属性任何对象有。所以原型链实际是靠"),e("code",[t._v("__proto__")]),t._v("属性实现的。")])]),t._v(" "),e("p",[t._v("我们一定要牢记下面这句话，我们下面所有的内容都是基于这句话展开的，没有为什么，JS这门语言实现时就是这么指定的，记住就好了：\n"),e("strong",[t._v("对象的"),e("code",[t._v("__proto__")]),t._v("指向的是创建它的函数的"),e("code",[t._v("prototype")])])]),t._v(" "),e("p",[e("strong",[e("code",[t._v("__proto__")]),t._v("相当于C++中的指针，"),e("code",[t._v("prototype")]),t._v("相当于指针指向的对象，该"),e("code",[t._v("prototye")]),t._v("对象中包含了"),e("code",[t._v("__proto__")]),t._v("指针，指向上一级对象。")])]),t._v(" "),e("p",[t._v("下面我们来分析一下原型链存在的三条路径：")]),t._v(" "),e("p",[e("strong",[t._v("一. 普通对象")])]),t._v(" "),e("p",[t._v("常见普通对象的生成其实有两种形式，如下代码：")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("// 第一种\nlet obj = {\n    name: '前端名狮'\n}\n\n// 第二种，通过函数对象新建\n\nfunction Foo () {\n    console.log('my name is 前端名狮');\n}\n\nlet foo = new Foo();\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br"),e("span",{staticClass:"line-number"},[t._v("12")]),e("br")])]),e("p",[t._v("正常情况下，两种情况实际属于同一种情况，为什么呢？")]),t._v(" "),e("p",[e("code",[t._v("new")]),t._v(" 本身经历了一个复杂的过程，正常情况返回的实际是内部创建的一个object对象，具体可以阅读"),e("a",{attrs:{href:"https://mp.weixin.qq.com/s/rSIKA2WaQgXdyedSRtyEdg",target:"_blank",rel:"noopener noreferrer"}},[t._v("【第15题】- new 操作符内部实现原理"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("下面我们分析一下"),e("code",[t._v("obj，foo")]),t._v("的原型链路径")]),t._v(" "),e("ol",[e("li",[t._v("obj 本身是一个普通对象，它的构造函数实际是Object，所以我们找到了创建obj的函数Object。具体推导流程如下面代码所示，一直到顶层"),e("code",[t._v("null")])])]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("obj.constructor === Object\n\nobj.__proto__ === Object.prototype\n\nObject.prototype.__proto__ === null\n\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br")])]),e("p",[e("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_png/2K5IuDFDWmib7z2k0gCOzianWUU7wB2hFWAVHBOkNnZ8xQkqgXTrIsmtKzlq8W1SqTQbB8SnjmRxLJEDKX8hCs0Q/0?wx_fmt=png",alt:""}})]),t._v(" "),e("ol",{attrs:{start:"2"}},[e("li",[t._v("foo的构造函数是"),e("code",[t._v("Foo")]),t._v("，所以"),e("code",[t._v("foo.__proto__ === Foo.prototype")]),t._v("。")])]),t._v(" "),e("p",[t._v("由上方的分析可知，"),e("code",[t._v("prototype")]),t._v("是一个普通对象，所以"),e("code",[t._v("Foo.prototype")]),t._v("是一个普通对象"),e("code",[t._v("object")]),t._v("，再往上查找就回到了第一种情况"),e("code",[t._v("Foo.prototype.__proto__ === Object.prototype")]),t._v("，再往上就到达原型链的顶层了。")]),t._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("foo"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("constructor "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" Foo\n\nfoo"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__proto__ "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Foo")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype\n\n"),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Foo")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__proto__ "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype\n\n"),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__proto__ "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br")])]),e("p",[e("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_png/2K5IuDFDWmib7z2k0gCOzianWUU7wB2hFWMQ4R1ibvwb60QvoBT5G2vymiasfkyVrluB13zWCjhQnIhmYQyGdtO9Gw/0?wx_fmt=png",alt:""}})]),t._v(" "),e("p",[e("strong",[t._v("二. 函数对象")])]),t._v(" "),e("p",[t._v("从函数"),e("code",[t._v("Foo")]),t._v("开始，分析下原型链的路径")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("function Foo () {\n    console.log('my name is 前端名狮');\n}\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br")])]),e("p",[t._v("Foo 是一个函数，所以它的构造函数是"),e("code",[t._v("Function")]),t._v("，即"),e("code",[t._v("Foo.constructor === Function")]),t._v("，可以得知"),e("code",[t._v("Foo.__proto__ === Function.prototype")]),t._v("。再往上就是"),e("code",[t._v("Function.prototype.__proto__ === Object.prototype")]),t._v("，剩下的就跟上面的情况一样了。")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("Foo.constructor === Function\n\nFoo.__proto__ === Function.prototype\n\nFunction.prototype.__proto__ === Object.prototype\n\nObject.prototype.__proto__ === null\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br")])]),e("p",[e("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_png/2K5IuDFDWmib7z2k0gCOzianWUU7wB2hFWk5NTHWaq5E1oybXwUViapx5Ur5z5K7tmp9lDuibdv1a1LCfjNebxb6VQ/0?wx_fmt=png",alt:""}})]),t._v(" "),e("p",[e("strong",[t._v("三. Object和Function")])]),t._v(" "),e("p",[t._v("正如前面分析的那样，"),e("code",[t._v("Object、Function")]),t._v("都是函数对象，这两个对象是JS对象的源头，所以单独拎出来分析。")]),t._v(" "),e("p",[e("code",[t._v("Object")]),t._v("本身是一个函数对象，它的构造函数是"),e("code",[t._v("Function")]),t._v(",即 "),e("code",[t._v("Object.constructor === Function")]),t._v("，所以"),e("code",[t._v("Object.__proto__ === Function.prototype")]),t._v("，再往上查找就是"),e("code",[t._v("Function.prototype.__proto__ === Object.prototype")]),t._v("，再往上就是null。")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("Object.constructor === Function\n\nObject.__proto__ === Function.prototype\n\nFunction.prototype.__proto__ === Object.prototype\n\nObject.prototype.__proto__ === null\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br")])]),e("p",[e("code",[t._v("Function")]),t._v("本身是一个函数，它的构造函数还是一个函数，所以"),e("code",[t._v("Function.constructor === Function")]),t._v("，所以"),e("code",[t._v("Function.__proto__ === Function.prototype")]),t._v("，后面的就和上面一样了。")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("Function.constructor === Function\n\nFunction.__proto__ === Function.prototype\n\nFunction.prototype.__proto__ === Object.prototype\n\nObject.prototype.__proto__ === null\n\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br")])]),e("p",[e("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_png/2K5IuDFDWmib7z2k0gCOzianWUU7wB2hFW6npxtfJDayETQwrLpKHjwCkkTM9FUM4LfA2nYDhKzQ8TaLPd3FyEGQ/0?wx_fmt=png",alt:""}})]),t._v(" "),e("h3",{attrs:{id:"总结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#总结","aria-hidden":"true"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),e("p",[t._v("按照上面的三个路径，很容易"),e("strong",[t._v("记忆理解")]),t._v("原型链，上面内容也基本上涵盖了原型链的大部分场景，应付面试题绰绰有余。记忆理解后，再也不用每次面试都要重新复习这个难点了。")]),t._v(" "),e("h3",{attrs:{id:"推荐阅读"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#推荐阅读","aria-hidden":"true"}},[t._v("#")]),t._v(" 推荐阅读")]),t._v(" "),e("ol",[e("li",[e("a",{attrs:{href:"https://mp.weixin.qq.com/s/il8kHT3ZiUI6ZPfy8qVryw",target:"_blank",rel:"noopener noreferrer"}},[t._v("2019年前端大事件回顾：流年笑掷，未来可期"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://mp.weixin.qq.com/s/vWAj-bwK2RsLxYID1BtMpQ",target:"_blank",rel:"noopener noreferrer"}},[t._v("Single-Spa + Vue Cli 微前端落地指南"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://mp.weixin.qq.com/s/jYRDbgJU4dqlj2T-CLatNg",target:"_blank",rel:"noopener noreferrer"}},[t._v("BAT开源项目汇总"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://mp.weixin.qq.com/s/zwkp4t68u1X-9crkQH2UUw",target:"_blank",rel:"noopener noreferrer"}},[t._v("【第22题】理解 JS 模块化"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://mp.weixin.qq.com/s/i3YxCTAY_UNVJCJrABIWuA",target:"_blank",rel:"noopener noreferrer"}},[t._v("【深入vue】为什么Vue3.0不再使用defineProperty实现数据监听？"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://mp.weixin.qq.com/s/M5uaH7b5p6txKDlCOGXokA",target:"_blank",rel:"noopener noreferrer"}},[t._v("抛弃jenkins，如何用node从零搭建自动化部署管理平台"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://mp.weixin.qq.com/s/qyNT-p-hpMvWL6yDIKNoyw",target:"_blank",rel:"noopener noreferrer"}},[t._v("前端部署演化史"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://mp.weixin.qq.com/s/XdHo5OCW7Q-WOSw3ULe1qA",target:"_blank",rel:"noopener noreferrer"}},[t._v("深入理解 ES6 Iterator"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://mp.weixin.qq.com/s/NMse-CrCnkZJPrIaR18NJw",target:"_blank",rel:"noopener noreferrer"}},[t._v("解读HTTP/2与HTTP/3 的新特性（推荐）"),e("OutboundLink")],1)])]),t._v(" "),e("h3",{attrs:{id:"关注我"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#关注我","aria-hidden":"true"}},[t._v("#")]),t._v(" 关注我")]),t._v(" "),e("p",[e("strong",[t._v("扫一扫 关注我的公众号【前端名狮】，更多精彩内容陪伴你！")])]),t._v(" "),e("p",[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/9/8/16d105793144e24a?w=1080&h=309&f=webp&s=17610",alt:""}})])])}),[],!1,null,null,null);n.default=r.exports}}]);