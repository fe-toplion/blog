(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{239:function(t,v,_){t.exports=_.p+"assets/img/40.c8b70a35.png"},240:function(t,v,_){t.exports=_.p+"assets/img/41.19ab105e.png"},258:function(t,v,_){"use strict";_.r(v);var e=_(0),o=Object(e.a)({},(function(){var t=this,v=t.$createElement,e=t._self._c||v;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"【第8题】浏览器http请求并发数和tcp连接的关系"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#【第8题】浏览器http请求并发数和tcp连接的关系","aria-hidden":"true"}},[t._v("#")]),t._v(" 【第8题】浏览器HTTP请求并发数和TCP连接的关系")]),t._v(" "),e("h3",{attrs:{id:"面试题目（头条）："}},[e("a",{staticClass:"header-anchor",attrs:{href:"#面试题目（头条）：","aria-hidden":"true"}},[t._v("#")]),t._v(" 面试题目（头条）：")]),t._v(" "),e("blockquote",[e("ol",[e("li",[t._v("网页中的图片资源为什么分放在不同的域名下？")]),t._v(" "),e("li",[t._v("浏览器与服务器建立一个TCP连接后，是否会在完成一个http请求后断开？什么条件下会断开？")]),t._v(" "),e("li",[t._v("一个TCP连接可以同时发送几个HTTP请求？")]),t._v(" "),e("li",[t._v("浏览器http请求的并发性是如何体现的？并发请求的数量有没有限制？")])])]),t._v(" "),e("h3",{attrs:{id:"答案解析："}},[e("a",{staticClass:"header-anchor",attrs:{href:"#答案解析：","aria-hidden":"true"}},[t._v("#")]),t._v(" 答案解析：")]),t._v(" "),e("p",[e("strong",[t._v("第一个问题：")])]),t._v(" "),e("blockquote",[e("p",[t._v("网页中的图片资源为什么分放在不同的域名下?")])]),t._v(" "),e("p",[t._v("浏览器对并发请求的数目限制是针对域名的，即针对同一域名（包括二级域名）在同一时间支持的并发请求数量的限制。如果请求数目超出限制，则会阻塞。因此，网站中对一些静态资源，使用不同的一级域名，可以提升浏览器并行请求的数目，加速界面资源的获取速度。")]),t._v(" "),e("p",[e("strong",[t._v("第二个问题")])]),t._v(" "),e("blockquote",[e("p",[t._v("浏览器与服务器建立一个TCP连接后，是否会在完成一个http请求后断开？什么条件下会断开？")])]),t._v(" "),e("p",[t._v("在"),e("code",[t._v("HTTP/1.0")]),t._v("中，一个http请求收到服务器响应后，会断开对应的TCP连接。这样每次请求，都需要重新建立TCP连接，这样一直重复建立和断开的过程，比较耗时。所以为了充分利用TCP连接，可以设置头字段"),e("code",[t._v("Connection: keep-alive")]),t._v("，这样http请求完成后，就不会断开当前的TCP连接，后续的http请求可以使用当前TCP连接进行通信。")]),t._v(" "),e("p",[e("img",{attrs:{src:_(239),alt:""}})]),t._v(" "),e("p",[t._v("第一次访问有初始化连接和SSL开销")]),t._v(" "),e("p",[e("img",{attrs:{src:_(240),alt:""}})]),t._v(" "),e("p",[t._v("初始化连接和SSL开销消失了，说明使用的是同一个TCP连接。")]),t._v(" "),e("p",[e("code",[t._v("HTTP/1.1")]),t._v("将"),e("code",[t._v("Connection")]),t._v("写入了标准，默认值为"),e("code",[t._v("keep-alive")]),t._v("。除非强制设置为"),e("code",[t._v("Connection: close")]),t._v("，才会在请求后断开TCP连接。")]),t._v(" "),e("p",[t._v("所以这一题的答案就是：默认情况下建立的TCP连接不会断开，只有在请求头中设置"),e("code",[t._v("Connection: close")]),t._v("才会在请求后关闭TCP连接。")]),t._v(" "),e("p",[e("strong",[t._v("第三个问题")])]),t._v(" "),e("blockquote",[e("p",[t._v("一个TCP连接可以同时发送几个HTTP请求？")])]),t._v(" "),e("p",[e("code",[t._v("HTTP/1.1")]),t._v("中，单个TCP连接，在同一时间只能处理一个http请求，虽然存在Pipelining技术支持多个请求同时发送，但由于实践中存在很多问题无法解决，所以浏览器默认是关闭，所以可以认为是不支持同时多个请求。")]),t._v(" "),e("p",[e("code",[t._v("HTTP2")]),t._v("提供了多路传输功能，多个http请求，可以同时在同一个TCP连接中进行传输。")]),t._v(" "),e("p",[e("strong",[t._v("第四个问题")])]),t._v(" "),e("blockquote",[e("p",[t._v("浏览器http请求的并发性是如何体现的？并发请求的数量有没有限制？")])]),t._v(" "),e("p",[t._v("页面资源请求时，浏览器会同时和服务器建立多个TCP连接，在同一个TCP连接上顺序处理多个HTTP请求。所以浏览器的并发性就体现在可以建立多个TCP连接，来支持多个http同时请求。")]),t._v(" "),e("p",[t._v("Chrome浏览器最多允许对同一个域名Host建立6个TCP连接，不同的浏览器有所区别。")]),t._v(" "),e("h3",{attrs:{id:"补充"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#补充","aria-hidden":"true"}},[t._v("#")]),t._v(" 补充")]),t._v(" "),e("p",[t._v("如果图片都是HTTPS的连接，并且在同一域名下，浏览器会先和服务器协商使用"),e("code",[t._v("HTTP2")]),t._v("的"),e("code",[t._v("Multiplexing")]),t._v("功能进行多路传输，不过未必所有的挂在这个域名下的资源都会使用同一个TCP连接。如果用不了HTTPS或者HTTP2（HTTP2是在HTTPS上实现的），那么浏览器会就在同一个host建立多个TCP连接，每一个TCP连接进行顺序请求资源。")]),t._v(" "),e("hr"),t._v(" "),e("p",[e("strong",[t._v("扫一扫 关注我的公众号【前端名狮】，更多精彩内容陪伴你！")]),t._v(" "),e("img",{attrs:{src:_(58),alt:"【前端名狮】"}})])])}),[],!1,null,null,null);v.default=o.exports},58:function(t,v,_){t.exports=_.p+"assets/img/7.3e56d765.png"}}]);