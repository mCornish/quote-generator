webpackJsonp([1,0],[function(t,e,o){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}var r=o(22),a=n(r),i=o(13),s=n(i);new a.default({el:"#app",template:"<App/>",components:{App:s.default}})},function(t,e,o){var n,r;o(10),n=o(6);var a=o(20);r=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(r=n=n.default),"function"==typeof r&&(r=r.options),r.render=a.render,r.staticRenderFns=a.staticRenderFns,r._scopeId="data-v-d6cba67c",t.exports=n},function(t,e,o){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=o(12),a=n(r),i=o(16),s=n(i),u=o(14),d=n(u),c=o(1),l=n(c),p=o(15),h=n(p);e.default={name:"app",created:function(){var t=this,e=20,o="http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]="+e,n="514ddf55c64189cee554ae4015dce60d3c6806da6098ee7628b27d8f3108206f",r="design",i=20,s="https://api.unsplash.com/photos/random?query="+r+"&count="+i+"&client_id="+n;this.TWEET_BASE_URL="https://twitter.com/intent/tweet?text=",a.default.getJSON(o,function(e){t.quotes=e}),a.default.getJSON(s,function(e){t.photos=e})},components:{Generator:s.default,Quote:l.default,Background:d.default,IconFooter:h.default},data:function(){return{quotes:[],quoteIndex:0,photos:[],photoIndex:0,imageLoaded:!1}},methods:{nextQuote:function(){this.quoteIndex<this.quotes.length-1?this.quoteIndex+=1:this.quoteIndex=0},nextPhoto:function(){var t=this;this.imageLoaded=!1;var e=this.photoIndex<this.photos.length-1?this.photoIndex+1:0;setTimeout(function(){t.photoIndex=e},1e3)},encodeQuote:function(t,e){var o=t.length>100?t.substr(0,50)+"...”":t,n=encodeURIComponent(o).replace(/%26%238217%3B/g,"%27").replace(/%26%238220%3B/g,"%E2%80%98").replace(/%26%238221%3B/g,"%E2%80%99"),r=encodeURIComponent(e);return n+" —"+r},preload:function(t){var e=document.createElement("img");e.src=t},detectLoad:function(t){var e=this,o=document.createElement("img");o.src=t,o.onload=function(){e.imageLoaded=!0}}},computed:{currentQuote:function(){return this.quotes[this.quoteIndex]&&this.quotes[this.quoteIndex]},currentPhoto:function(){this.imageLoaded=!1;var t=this.photos[this.photoIndex]&&this.photos[this.photoIndex].urls.full;return this.detectLoad(t),t},currentPhotoSmall:function(){return this.photos[this.photoIndex]&&this.photos[this.photoIndex].urls.small},tweetUrl:function(){var t=this.currentQuote&&this.currentQuote.content.replace("<p>","“").replace("</p>","”").replace("  ",""),e=this.currentQuote&&this.currentQuote.title;return t&&e&&this.TWEET_BASE_URL+this.encodeQuote(t,e)}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"background",created:function(){var t=this,e=document.createElement("img");e.src=this.imageUrl,e.onload=function(){console.error("loaded"),t.$emit("image-load")}},props:{imageUrl:String,smallImageUrl:String,imageLoaded:Boolean},computed:{styleString:function(){return this.imageLoaded?"background-image: url('"+this.imageUrl+"')":"background-image: url('"+this.smallImageUrl+"')"},smallStyleString:function(){return"background-image: url('"+this.smallImageUrl+"')"}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"icon-footer",props:{repoUrl:String}}},function(t,e,o){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=o(1),a=n(r);e.default={name:"generator",props:{quoteObj:Object,tweetUrl:String,nextQuote:Function,nextPhoto:Function,imageUrl:String,imageLoaded:Boolean},components:{Quote:a.default},methods:{next:function(){this.nextQuote(),this.nextPhoto()}},computed:{styleString:function(){var t=document.querySelector(".background"),e=t&&t.clientWidth,o=t&&t.clientHeight;return"background-image: url('"+this.imageUrl+"'); background-size: "+e+"px "+o+"px;"}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"quote",props:{quote:Object},computed:{quoteText:function(){return this.quote&&this.quote.content.replace("<p>","“").replace("</p>","”")},quoteTitle:function(){return this.quote&&"— "+this.quote.title}}}},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,function(t,e,o){var n,r;o(11),n=o(2);var a=o(21);r=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(r=n=n.default),"function"==typeof r&&(r=r.options),r.render=a.render,r.staticRenderFns=a.staticRenderFns,t.exports=n},function(t,e,o){var n,r;o(9),n=o(3);var a=o(19);r=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(r=n=n.default),"function"==typeof r&&(r=r.options),r.render=a.render,r.staticRenderFns=a.staticRenderFns,r._scopeId="data-v-a4407850",t.exports=n},function(t,e,o){var n,r;o(7),n=o(4);var a=o(17);r=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(r=n=n.default),"function"==typeof r&&(r=r.options),r.render=a.render,r.staticRenderFns=a.staticRenderFns,r._scopeId="data-v-09867ec5",t.exports=n},function(t,e,o){var n,r;o(8),n=o(5);var a=o(18);r=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(r=n=n.default),"function"==typeof r&&(r=r.options),r.render=a.render,r.staticRenderFns=a.staticRenderFns,r._scopeId="data-v-4300fe99",t.exports=n},function(module,exports){module.exports={render:function(){with(this)return _h("footer",[_h("a",{attrs:{href:"http://mikecornish.net",target:"_blank"}},[_h("svg",{staticClass:"logo",attrs:{width:"100%",height:"100%",viewBox:"0 0 684 93",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","xml:space":"preserve",style:"fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"}},[_h("g",{attrs:{transform:"matrix(1,0,0,1,-492.509,-567.147)"}},[_h("g",{attrs:{transform:"matrix(7.80536,0,0,7.80536,-1912.68,-1248.06)"}},[_h("text",{attrs:{x:"326.024px",y:"244.191px",style:"font-family:'MerriweatherSans-Bold', 'Merriweather Sans';font-weight:700;font-size:12px;"}},["m",_h("tspan",{attrs:{x:"337.419px 340.686px 347.34px 353.712px 360.724px 367.753px 372.578px 379.9px 383.167px 388.708px ",y:"244.191px 244.191px 244.191px 244.191px 244.191px 244.191px 244.191px 244.191px 244.191px 244.191px "}},["ikeCornish"])])])," ",_h("g",{attrs:{transform:"matrix(1,0,0,1,-154.796,303.859)"}},[_h("path",{attrs:{d:"M652.939,355.408C650.2,347.511 644.441,323.862 649.011,304.561C656.593,272.539 690.984,263.069 711.196,263.292C748.06,263.7 766.711,286.185 772.753,304.561C779.189,324.131 770.941,355.408 770.941,355.408L748.712,355.408L735.012,304.561L719.639,355.408L704.434,355.408L690.803,304.561L675.167,355.408C675.167,355.408 652.991,355.557 652.939,355.408Z"}})])])])])," ",_h("a",{staticClass:"github-link",attrs:{href:repoUrl,target:"_blank"}},[_h("svg",{attrs:{viewBox:"0 0 128 128"}},[_h("path",{attrs:{d:"M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"}}),_h("path",{attrs:{d:"M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm-.743-.55M28.93 94.535c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zm-.575-.618M31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm0 0M34.573 101.373c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm0 0M39.073 103.324c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm0 0M44.016 103.685c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm0 0M48.614 102.903c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"}})])])])},staticRenderFns:[]}},function(module,exports){module.exports={render:function(){with(this)return _h("div",{staticClass:"generator"},[_h("div",{staticClass:"generator__back",style:styleString})," ",_h("quote",{attrs:{quote:quoteObj}})," ",_h("transition",{attrs:{name:"fade"}},[_h("div",{directives:[{name:"show",rawName:"v-show",value:imageLoaded,expression:"imageLoaded"}],staticClass:"generator__buttons"},[_h("button",{on:{click:next}},["New Quote"])," ",_h("a",{staticClass:"--tweet",attrs:{role:"button",href:tweetUrl,target:"_blank"}},["Tweet"])])])])},staticRenderFns:[]}},function(module,exports){module.exports={render:function(){with(this)return _h("div",{staticClass:"background",class:{"is-loading":!imageLoaded},style:styleString})},staticRenderFns:[]}},function(module,exports){module.exports={render:function(){with(this)return _h("div",{staticClass:"quote"},[_h("div",{staticClass:"quote__text",domProps:{innerHTML:_s(quoteText)}})," ",_h("div",{staticClass:"quote__name",domProps:{innerHTML:_s(quoteTitle)}})])},staticRenderFns:[]}},function(module,exports){module.exports={render:function(){with(this)return _h("div",{staticClass:"app",attrs:{id:"app"}},[_h("generator",{attrs:{"quote-obj":currentQuote,"tweet-url":tweetUrl,"next-quote":nextQuote,"next-photo":nextPhoto,"image-url":currentPhotoSmall,"image-loaded":imageLoaded}})," ",_h("background",{attrs:{"image-url":currentPhoto,"small-image-url":currentPhotoSmall,"image-loaded":imageLoaded}})," ",_h("icon-footer",{attrs:{repoUrl:"https://github.com/mCornish/quote-generator"}})])},staticRenderFns:[]}}]);
//# sourceMappingURL=app.ab01ba9c8ddd6a0a4b46.js.map