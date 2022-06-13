(self["webpackChunkvue_suning"]=self["webpackChunkvue_suning"]||[]).push([[827],{6827:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return d}});var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"payHeader"},[r("div",{staticClass:"w"},[t._m(0),r("div",[t._v(" 支付账户："+t._s(t.userInfo.loginName)),r("i",[t._v("|")]),r("a",[t._v("帮助中心")]),r("i",[t._v("|")]),r("a",[t._v("提建议")]),r("i",[t._v("|")]),r("em",[t._v("服务电话：95177")])])])]),r("div",{staticClass:"payMain"},[r("div",{staticClass:"w"},[r("div",{staticClass:"payMainHd"},[r("div",{staticClass:"goodsName"},[r("div",[t._v("订单号："+t._s(t.orderId))]),r("div",[t._v(" 收款方：苏宁易购销售有限公司"),r("a",[t._v("详情")]),r("div",{staticClass:"goodsList"},[t._m(1),t._l(t.goodsList,(function(e){return r("div",{key:e.skuId,staticClass:"goods"},[r("img",{attrs:{src:e.imgUrl}}),r("div",[t._v(t._s(e.skuName))]),r("div",[t._v(t._s(e.orderPrice))]),r("div",[t._v(t._s(e.skuNum))])])}))],2)])]),r("div",[t._v(" 订单金额 "),r("span",[t._v(t._s(t.payInfo.totalFee)+".00")]),t._v(" 元 "),r("a",[t._v("刷新")])])]),r("div",{staticClass:"payMainBd"},[r("div",[r("img",{attrs:{src:t.QRCodeUrl}})]),r("div",{staticClass:"payMainButton"},[r("a",{on:{click:function(e){return t.alert("请联系管理员")}}},[t._v("遇见问题")]),r("a",{on:{click:t.queryStatus}},[t._v("支付成功")])])]),t.successShow?r("div",{staticClass:"mask"},[r("div",[r("p",[t._v("支付成功！")]),r("router-link",{attrs:{to:"/center"}},[t._v("查看订单")]),r("router-link",{attrs:{to:"/home"}},[t._v("回到首页")])],1)]):t._e(),t.failShow?r("div",{staticClass:"mask"},[r("div",[r("p",[t._v("还未支付成功哦~")]),r("a",{on:{click:function(e){t.failShow=!1}}},[t._v("继续支付")])])]):t._e()])]),t._m(2)])},o=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("span",{staticClass:"logo",attrs:{title:"苏宁支付收银台"}}),r("span",[t._v("收银台")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"goodsListHd"},[t._v("商品信息")]),r("div",{staticClass:"goodsListHd"},[t._v("单价")]),r("div",{staticClass:"goodsListHd"},[t._v("数量")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"payFooter"},[r("div",{staticClass:"w"},[r("p",[t._v("Copyright©2020-2022深圳市云网万店电子商务有限公司版权所有")]),r("p",[t._v(" 粤ICP备2021027996号 苏B2-20100316 出版物经营许可证新出发苏批字第A-243 ")])])])}],i=r(6198),a=(r(8975),r(8733)),s={name:"Pay",data:function(){return{payInfo:{},QRCodeUrl:"",goodsList:[],userInfo:{},timer:null,successShow:!1,failShow:!1}},methods:{getPayInfo:function(){var t=this;return(0,i.Z)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$API.reqPayInfo(t.orderId);case 2:r=e.sent,200==r.code&&(t.payInfo=r.data,t.getQRCode(),t.getGoodsInfo(),t.getUserInfo());case 4:case"end":return e.stop()}}),e)})))()},getQRCode:function(){var t=this;return(0,i.Z)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,a.toDataURL(t.payInfo.codeUrl);case 2:r=e.sent,t.QRCodeUrl=r;case 4:case"end":return e.stop()}}),e)})))()},getGoodsInfo:function(){var t=this;return(0,i.Z)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$API.reqOrderInfo();case 2:r=e.sent,200==r.code&&(t.goodsList=r.data.detailArrayList);case 4:case"end":return e.stop()}}),e)})))()},getUserInfo:function(){var t=this;return(0,i.Z)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$API.reqUserInfo();case 2:r=e.sent,200==r.code&&(t.userInfo=r.data);case 4:case"end":return e.stop()}}),e)})))()},queryStatus:function(){var t=this;return(0,i.Z)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$API.reqPayStatus(t.payInfo.orderId);case 2:e.sent,clearInterval(t.timer),t.timer=!0,t.successShow=!0,t.failShow=!1;case 4:case"end":return e.stop()}}),e)})))()}},computed:{orderId:function(){return this.$route.query.orderId}},mounted:function(){var t=this;this.getPayInfo(),this.timer||(this.timer=setInterval((0,i.Z)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$API.reqPayStatus(t.payInfo.orderId);case 2:r=e.sent,200==r.code?(clearInterval(t.timer),t.timer=!0,t.successShow=!0):t.successShow=!1;case 4:case"end":return e.stop()}}),e)}))),1e3))}},u=s,c=r(1001),f=(0,c.Z)(u,n,o,!1,null,"071cb406",null),d=f.exports},5659:function(t,e,r){"use strict";r(9600),r(1703),r(2707);var n={single_source_shortest_paths:function(t,e,r){var o={},i={};i[e]=0;var a,s,u,c,f,d,h,l,g,v=n.PriorityQueue.make();v.push(e,0);while(!v.empty())for(u in a=v.pop(),s=a.value,c=a.cost,f=t[s]||{},f)f.hasOwnProperty(u)&&(d=f[u],h=c+d,l=i[u],g="undefined"===typeof i[u],(g||l>h)&&(i[u]=h,v.push(u,h),o[u]=s));if("undefined"!==typeof r&&"undefined"===typeof i[r]){var p=["Could not find a path from ",e," to ",r,"."].join("");throw new Error(p)}return o},extract_shortest_path_from_predecessor_list:function(t,e){var r=[],n=e;while(n)r.push(n),t[n],n=t[n];return r.reverse(),r},find_path:function(t,e,r){var o=n.single_source_shortest_paths(t,e,r);return n.extract_shortest_path_from_predecessor_list(o,r)},PriorityQueue:{make:function(t){var e,r=n.PriorityQueue,o={};for(e in t=t||{},r)r.hasOwnProperty(e)&&(o[e]=r[e]);return o.queue=[],o.sorter=t.sorter||r.default_sorter,o},default_sorter:function(t,e){return t.cost-e.cost},push:function(t,e){var r={value:t,cost:e};this.queue.push(r),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return 0===this.queue.length}}};t.exports=n},4683:function(t,e,r){"use strict";r(1539),r(2472),r(8675),r(2990),r(8927),r(3105),r(5035),r(4345),r(7174),r(2846),r(4731),r(7209),r(6319),r(8867),r(7789),r(3739),r(9368),r(4483),r(2056),r(3462),r(678),r(7462),r(3824),r(5021),r(2974),r(5016),t.exports=function(t){for(var e=[],r=t.length,n=0;n<r;n++){var o=t.charCodeAt(n);if(o>=55296&&o<=56319&&r>n+1){var i=t.charCodeAt(n+1);i>=56320&&i<=57343&&(o=1024*(o-55296)+i-56320+65536,n+=1)}o<128?e.push(o):o<2048?(e.push(o>>6|192),e.push(63&o|128)):o<55296||o>=57344&&o<65536?(e.push(o>>12|224),e.push(o>>6&63|128),e.push(63&o|128)):o>=65536&&o<=1114111?(e.push(o>>18|240),e.push(o>>12&63|128),e.push(o>>6&63|128),e.push(63&o|128)):e.push(239,191,189)}return new Uint8Array(e).buffer}},8733:function(t,e,r){r(7042),r(1703),r(1539),r(9714);var n=r(115),o=r(8151),i=r(1173),a=r(2375);function s(t,e,r,i,a){var s=[].slice.call(arguments,1),u=s.length,c="function"===typeof s[u-1];if(!c&&!n())throw new Error("Callback required as last argument");if(!c){if(u<1)throw new Error("Too few arguments provided");return 1===u?(r=e,e=i=void 0):2!==u||e.getContext||(i=r,r=e,e=void 0),new Promise((function(n,a){try{var s=o.create(r,i);n(t(s,e,i))}catch(u){a(u)}}))}if(u<2)throw new Error("Too few arguments provided");2===u?(a=r,r=e,e=i=void 0):3===u&&(e.getContext&&"undefined"===typeof a?(a=i,i=void 0):(a=i,i=r,r=e,e=void 0));try{var f=o.create(r,i);a(null,t(f,e,i))}catch(d){a(d)}}e.create=o.create,e.toCanvas=s.bind(null,i.render),e.toDataURL=s.bind(null,i.renderToDataURL),e.toString=s.bind(null,(function(t,e,r){return a.render(t,r)}))},115:function(t,e,r){r(1539),t.exports=function(){return"function"===typeof Promise&&Promise.prototype&&Promise.prototype.then}},8079:function(t,e,r){var n=r(51).getSymbolSize;e.getRowColCoords=function(t){if(1===t)return[];for(var e=Math.floor(t/7)+2,r=n(t),o=145===r?26:2*Math.ceil((r-13)/(2*e-2)),i=[r-7],a=1;a<e-1;a++)i[a]=i[a-1]-o;return i.push(6),i.reverse()},e.getPositions=function(t){for(var r=[],n=e.getRowColCoords(t),o=n.length,i=0;i<o;i++)for(var a=0;a<o;a++)0===i&&0===a||0===i&&a===o-1||i===o-1&&0===a||r.push([n[i],n[a]]);return r}},6105:function(t,e,r){var n=r(3595),o=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function i(t){this.mode=n.ALPHANUMERIC,this.data=t}i.getBitsLength=function(t){return 11*Math.floor(t/2)+t%2*6},i.prototype.getLength=function(){return this.data.length},i.prototype.getBitsLength=function(){return i.getBitsLength(this.data.length)},i.prototype.write=function(t){var e;for(e=0;e+2<=this.data.length;e+=2){var r=45*o.indexOf(this.data[e]);r+=o.indexOf(this.data[e+1]),t.put(r,11)}this.data.length%2&&t.put(o.indexOf(this.data[e]),6)},t.exports=i},4393:function(t){function e(){this.buffer=[],this.length=0}e.prototype={get:function(t){var e=Math.floor(t/8);return 1===(this.buffer[e]>>>7-t%8&1)},put:function(t,e){for(var r=0;r<e;r++)this.putBit(1===(t>>>e-r-1&1))},getLengthInBits:function(){return this.length},putBit:function(t){var e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}},t.exports=e},4874:function(t,e,r){function n(t){if(!t||t<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=t,this.data=new Uint8Array(t*t),this.reservedBit=new Uint8Array(t*t)}r(1703),r(1539),r(2472),r(8675),r(2990),r(8927),r(3105),r(5035),r(4345),r(7174),r(2846),r(4731),r(7209),r(6319),r(8867),r(7789),r(3739),r(9368),r(4483),r(2056),r(3462),r(678),r(7462),r(3824),r(5021),r(2974),r(5016),n.prototype.set=function(t,e,r,n){var o=t*this.size+e;this.data[o]=r,n&&(this.reservedBit[o]=!0)},n.prototype.get=function(t,e){return this.data[t*this.size+e]},n.prototype.xor=function(t,e,r){this.data[t*this.size+e]^=r},n.prototype.isReserved=function(t,e){return this.reservedBit[t*this.size+e]},t.exports=n},5807:function(t,e,r){r(1539),r(2472),r(8675),r(2990),r(8927),r(3105),r(5035),r(4345),r(7174),r(2846),r(4731),r(7209),r(6319),r(8867),r(7789),r(3739),r(9368),r(4483),r(2056),r(3462),r(678),r(7462),r(3824),r(5021),r(2974),r(5016);var n=r(4683),o=r(3595);function i(t){this.mode=o.BYTE,this.data=new Uint8Array(n(t))}i.getBitsLength=function(t){return 8*t},i.prototype.getLength=function(){return this.data.length},i.prototype.getBitsLength=function(){return i.getBitsLength(this.data.length)},i.prototype.write=function(t){for(var e=0,r=this.data.length;e<r;e++)t.put(this.data[e],8)},t.exports=i},8146:function(t,e,r){var n=r(6747),o=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],i=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];e.getBlocksCount=function(t,e){switch(e){case n.L:return o[4*(t-1)+0];case n.M:return o[4*(t-1)+1];case n.Q:return o[4*(t-1)+2];case n.H:return o[4*(t-1)+3];default:return}},e.getTotalCodewordsCount=function(t,e){switch(e){case n.L:return i[4*(t-1)+0];case n.M:return i[4*(t-1)+1];case n.Q:return i[4*(t-1)+2];case n.H:return i[4*(t-1)+3];default:return}}},6747:function(t,e,r){function n(t){if("string"!==typeof t)throw new Error("Param is not a string");var r=t.toLowerCase();switch(r){case"l":case"low":return e.L;case"m":case"medium":return e.M;case"q":case"quartile":return e.Q;case"h":case"high":return e.H;default:throw new Error("Unknown EC Level: "+t)}}r(1703),e.L={bit:1},e.M={bit:0},e.Q={bit:3},e.H={bit:2},e.isValid=function(t){return t&&"undefined"!==typeof t.bit&&t.bit>=0&&t.bit<4},e.from=function(t,r){if(e.isValid(t))return t;try{return n(t)}catch(o){return r}}},1945:function(t,e,r){var n=r(51).getSymbolSize,o=7;e.getPositions=function(t){var e=n(t);return[[0,0],[e-o,0],[0,e-o]]}},576:function(t,e,r){var n=r(51),o=1335,i=21522,a=n.getBCHDigit(o);e.getEncodedBits=function(t,e){var r=t.bit<<3|e,s=r<<10;while(n.getBCHDigit(s)-a>=0)s^=o<<n.getBCHDigit(s)-a;return(r<<10|s)^i}},4187:function(t,e,r){r(1539),r(2472),r(8675),r(2990),r(8927),r(3105),r(5035),r(4345),r(7174),r(2846),r(4731),r(7209),r(6319),r(8867),r(7789),r(3739),r(9368),r(4483),r(2056),r(3462),r(678),r(7462),r(3824),r(5021),r(2974),r(5016),r(1703);var n=new Uint8Array(512),o=new Uint8Array(256);(function(){for(var t=1,e=0;e<255;e++)n[e]=t,o[t]=e,t<<=1,256&t&&(t^=285);for(var r=255;r<512;r++)n[r]=n[r-255]})(),e.log=function(t){if(t<1)throw new Error("log("+t+")");return o[t]},e.exp=function(t){return n[t]},e.mul=function(t,e){return 0===t||0===e?0:n[o[t]+o[e]]}},7133:function(t,e,r){r(1703);var n=r(3595),o=r(51);function i(t){this.mode=n.KANJI,this.data=t}i.getBitsLength=function(t){return 13*t},i.prototype.getLength=function(){return this.data.length},i.prototype.getBitsLength=function(){return i.getBitsLength(this.data.length)},i.prototype.write=function(t){var e;for(e=0;e<this.data.length;e++){var r=o.toSJIS(this.data[e]);if(r>=33088&&r<=40956)r-=33088;else{if(!(r>=57408&&r<=60351))throw new Error("Invalid SJIS character: "+this.data[e]+"\nMake sure your charset is UTF-8");r-=49472}r=192*(r>>>8&255)+(255&r),t.put(r,13)}},t.exports=i},4207:function(t,e,r){r(1703),r(7941),e.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};var n={N1:3,N2:3,N3:40,N4:10};function o(t,r,n){switch(t){case e.Patterns.PATTERN000:return(r+n)%2===0;case e.Patterns.PATTERN001:return r%2===0;case e.Patterns.PATTERN010:return n%3===0;case e.Patterns.PATTERN011:return(r+n)%3===0;case e.Patterns.PATTERN100:return(Math.floor(r/2)+Math.floor(n/3))%2===0;case e.Patterns.PATTERN101:return r*n%2+r*n%3===0;case e.Patterns.PATTERN110:return(r*n%2+r*n%3)%2===0;case e.Patterns.PATTERN111:return(r*n%3+(r+n)%2)%2===0;default:throw new Error("bad maskPattern:"+t)}}e.isValid=function(t){return null!=t&&""!==t&&!isNaN(t)&&t>=0&&t<=7},e.from=function(t){return e.isValid(t)?parseInt(t,10):void 0},e.getPenaltyN1=function(t){for(var e=t.size,r=0,o=0,i=0,a=null,s=null,u=0;u<e;u++){o=i=0,a=s=null;for(var c=0;c<e;c++){var f=t.get(u,c);f===a?o++:(o>=5&&(r+=n.N1+(o-5)),a=f,o=1),f=t.get(c,u),f===s?i++:(i>=5&&(r+=n.N1+(i-5)),s=f,i=1)}o>=5&&(r+=n.N1+(o-5)),i>=5&&(r+=n.N1+(i-5))}return r},e.getPenaltyN2=function(t){for(var e=t.size,r=0,o=0;o<e-1;o++)for(var i=0;i<e-1;i++){var a=t.get(o,i)+t.get(o,i+1)+t.get(o+1,i)+t.get(o+1,i+1);4!==a&&0!==a||r++}return r*n.N2},e.getPenaltyN3=function(t){for(var e=t.size,r=0,o=0,i=0,a=0;a<e;a++){o=i=0;for(var s=0;s<e;s++)o=o<<1&2047|t.get(a,s),s>=10&&(1488===o||93===o)&&r++,i=i<<1&2047|t.get(s,a),s>=10&&(1488===i||93===i)&&r++}return r*n.N3},e.getPenaltyN4=function(t){for(var e=0,r=t.data.length,o=0;o<r;o++)e+=t.data[o];var i=Math.abs(Math.ceil(100*e/r/5)-10);return i*n.N4},e.applyMask=function(t,e){for(var r=e.size,n=0;n<r;n++)for(var i=0;i<r;i++)e.isReserved(i,n)||e.xor(i,n,o(t,i,n))},e.getBestMask=function(t,r){for(var n=Object.keys(e.Patterns).length,o=0,i=1/0,a=0;a<n;a++){r(a),e.applyMask(a,t);var s=e.getPenaltyN1(t)+e.getPenaltyN2(t)+e.getPenaltyN3(t)+e.getPenaltyN4(t);e.applyMask(a,t),s<i&&(i=s,o=a)}return o}},3595:function(t,e,r){r(1703),r(1539),r(9714);var n=r(7117),o=r(6945);function i(t){if("string"!==typeof t)throw new Error("Param is not a string");var r=t.toLowerCase();switch(r){case"numeric":return e.NUMERIC;case"alphanumeric":return e.ALPHANUMERIC;case"kanji":return e.KANJI;case"byte":return e.BYTE;default:throw new Error("Unknown mode: "+t)}}e.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},e.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},e.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},e.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},e.MIXED={bit:-1},e.getCharCountIndicator=function(t,e){if(!t.ccBits)throw new Error("Invalid mode: "+t);if(!n.isValid(e))throw new Error("Invalid version: "+e);return e>=1&&e<10?t.ccBits[0]:e<27?t.ccBits[1]:t.ccBits[2]},e.getBestModeForData=function(t){return o.testNumeric(t)?e.NUMERIC:o.testAlphanumeric(t)?e.ALPHANUMERIC:o.testKanji(t)?e.KANJI:e.BYTE},e.toString=function(t){if(t&&t.id)return t.id;throw new Error("Invalid mode")},e.isValid=function(t){return t&&t.bit&&t.ccBits},e.from=function(t,r){if(e.isValid(t))return t;try{return i(t)}catch(n){return r}}},9050:function(t,e,r){r(1539),r(9714);var n=r(3595);function o(t){this.mode=n.NUMERIC,this.data=t.toString()}o.getBitsLength=function(t){return 10*Math.floor(t/3)+(t%3?t%3*3+1:0)},o.prototype.getLength=function(){return this.data.length},o.prototype.getBitsLength=function(){return o.getBitsLength(this.data.length)},o.prototype.write=function(t){var e,r,n;for(e=0;e+3<=this.data.length;e+=3)r=this.data.substr(e,3),n=parseInt(r,10),t.put(n,10);var o=this.data.length-e;o>0&&(r=this.data.substr(e),n=parseInt(r,10),t.put(n,3*o+1))},t.exports=o},9529:function(t,e,r){r(1539),r(2472),r(8675),r(2990),r(8927),r(3105),r(5035),r(4345),r(7174),r(2846),r(4731),r(7209),r(6319),r(8867),r(7789),r(3739),r(9368),r(4483),r(2056),r(3462),r(678),r(7462),r(3824),r(5021),r(2974),r(5016),r(7042);var n=r(4187);e.mul=function(t,e){for(var r=new Uint8Array(t.length+e.length-1),o=0;o<t.length;o++)for(var i=0;i<e.length;i++)r[o+i]^=n.mul(t[o],e[i]);return r},e.mod=function(t,e){var r=new Uint8Array(t);while(r.length-e.length>=0){for(var o=r[0],i=0;i<e.length;i++)r[i]^=n.mul(e[i],o);var a=0;while(a<r.length&&0===r[a])a++;r=r.slice(a)}return r},e.generateECPolynomial=function(t){for(var r=new Uint8Array([1]),o=0;o<t;o++)r=e.mul(r,new Uint8Array([1,n.exp(o)]));return r}},8151:function(t,e,r){r(1539),r(4747),r(2472),r(8675),r(2990),r(8927),r(3105),r(5035),r(4345),r(7174),r(2846),r(4731),r(7209),r(6319),r(8867),r(7789),r(3739),r(9368),r(4483),r(2056),r(3462),r(678),r(7462),r(3824),r(5021),r(2974),r(5016),r(7042),r(1703);var n=r(51),o=r(6747),i=r(4393),a=r(4874),s=r(8079),u=r(1945),c=r(4207),f=r(8146),d=r(6227),h=r(5755),l=r(576),g=r(3595),v=r(6423);function p(t,e){for(var r=t.size,n=u.getPositions(e),o=0;o<n.length;o++)for(var i=n[o][0],a=n[o][1],s=-1;s<=7;s++)if(!(i+s<=-1||r<=i+s))for(var c=-1;c<=7;c++)a+c<=-1||r<=a+c||(s>=0&&s<=6&&(0===c||6===c)||c>=0&&c<=6&&(0===s||6===s)||s>=2&&s<=4&&c>=2&&c<=4?t.set(i+s,a+c,!0,!0):t.set(i+s,a+c,!1,!0))}function w(t){for(var e=t.size,r=8;r<e-8;r++){var n=r%2===0;t.set(r,6,n,!0),t.set(6,r,n,!0)}}function m(t,e){for(var r=s.getPositions(e),n=0;n<r.length;n++)for(var o=r[n][0],i=r[n][1],a=-2;a<=2;a++)for(var u=-2;u<=2;u++)-2===a||2===a||-2===u||2===u||0===a&&0===u?t.set(o+a,i+u,!0,!0):t.set(o+a,i+u,!1,!0)}function y(t,e){for(var r,n,o,i=t.size,a=h.getEncodedBits(e),s=0;s<18;s++)r=Math.floor(s/3),n=s%3+i-8-3,o=1===(a>>s&1),t.set(r,n,o,!0),t.set(n,r,o,!0)}function E(t,e,r){var n,o,i=t.size,a=l.getEncodedBits(e,r);for(n=0;n<15;n++)o=1===(a>>n&1),n<6?t.set(n,8,o,!0):n<8?t.set(n+1,8,o,!0):t.set(i-15+n,8,o,!0),n<8?t.set(8,i-n-1,o,!0):n<9?t.set(8,15-n-1+1,o,!0):t.set(8,15-n-1,o,!0);t.set(i-8,8,1,!0)}function C(t,e){for(var r=t.size,n=-1,o=r-1,i=7,a=0,s=r-1;s>0;s-=2){6===s&&s--;while(1){for(var u=0;u<2;u++)if(!t.isReserved(o,s-u)){var c=!1;a<e.length&&(c=1===(e[a]>>>i&1)),t.set(o,s-u,c),i--,-1===i&&(a++,i=7)}if(o+=n,o<0||r<=o){o-=n,n=-n;break}}}}function I(t,e,r){var o=new i;r.forEach((function(e){o.put(e.mode.bit,4),o.put(e.getLength(),g.getCharCountIndicator(e.mode,t)),e.write(o)}));var a=n.getSymbolTotalCodewords(t),s=f.getTotalCodewordsCount(t,e),u=8*(a-s);o.getLengthInBits()+4<=u&&o.put(0,4);while(o.getLengthInBits()%8!==0)o.putBit(0);for(var c=(u-o.getLengthInBits())/8,d=0;d<c;d++)o.put(d%2?17:236,8);return A(o,t,e)}function A(t,e,r){for(var o=n.getSymbolTotalCodewords(e),i=f.getTotalCodewordsCount(e,r),a=o-i,s=f.getBlocksCount(e,r),u=o%s,c=s-u,h=Math.floor(o/s),l=Math.floor(a/s),g=l+1,v=h-l,p=new d(v),w=0,m=new Array(s),y=new Array(s),E=0,C=new Uint8Array(t.buffer),I=0;I<s;I++){var A=I<c?l:g;m[I]=C.slice(w,w+A),y[I]=p.encode(m[I]),w+=A,E=Math.max(E,A)}var B,N,P=new Uint8Array(o),R=0;for(B=0;B<E;B++)for(N=0;N<s;N++)B<m[N].length&&(P[R++]=m[N][B]);for(B=0;B<v;B++)for(N=0;N<s;N++)P[R++]=y[N][B];return P}function B(t,e,r,o){var i;if(Array.isArray(t))i=v.fromArray(t);else{if("string"!==typeof t)throw new Error("Invalid data");var s=e;if(!s){var u=v.rawSplit(t);s=h.getBestVersionForData(u,r)}i=v.fromString(t,s||40)}var f=h.getBestVersionForData(i,r);if(!f)throw new Error("The amount of data is too big to be stored in a QR Code");if(e){if(e<f)throw new Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: "+f+".\n")}else e=f;var d=I(e,r,i),l=n.getSymbolSize(e),g=new a(l);return p(g,e),w(g),m(g,e),E(g,r,0),e>=7&&y(g,e),C(g,d),isNaN(o)&&(o=c.getBestMask(g,E.bind(null,g,r))),c.applyMask(o,g),E(g,r,o),{modules:g,version:e,errorCorrectionLevel:r,maskPattern:o,segments:i}}e.create=function(t,e){if("undefined"===typeof t||""===t)throw new Error("No input text");var r,i,a=o.M;return"undefined"!==typeof e&&(a=o.from(e.errorCorrectionLevel,o.M),r=h.from(e.version),i=c.from(e.maskPattern),e.toSJISFunc&&n.setToSJISFunction(e.toSJISFunc)),B(t,r,a,i)}},6227:function(t,e,r){r(1703),r(1539),r(2472),r(8675),r(2990),r(8927),r(3105),r(5035),r(4345),r(7174),r(2846),r(4731),r(7209),r(6319),r(8867),r(7789),r(3739),r(9368),r(4483),r(2056),r(3462),r(678),r(7462),r(3824),r(5021),r(2974),r(5016);var n=r(9529);function o(t){this.genPoly=void 0,this.degree=t,this.degree&&this.initialize(this.degree)}o.prototype.initialize=function(t){this.degree=t,this.genPoly=n.generateECPolynomial(this.degree)},o.prototype.encode=function(t){if(!this.genPoly)throw new Error("Encoder not initialized");var e=new Uint8Array(t.length+this.degree);e.set(t);var r=n.mod(e,this.genPoly),o=this.degree-r.length;if(o>0){var i=new Uint8Array(this.degree);return i.set(r,o),i}return r},t.exports=o},6945:function(t,e,r){r(4916),r(5306),r(4603),r(8450),r(8386),r(9714),r(7601);var n="[0-9]+",o="[A-Z $%*+\\-./:]+",i="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";i=i.replace(/u/g,"\\u");var a="(?:(?![A-Z0-9 $%*+\\-./:]|"+i+")(?:.|[\r\n]))+";e.KANJI=new RegExp(i,"g"),e.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g"),e.BYTE=new RegExp(a,"g"),e.NUMERIC=new RegExp(n,"g"),e.ALPHANUMERIC=new RegExp(o,"g");var s=new RegExp("^"+i+"$"),u=new RegExp("^"+n+"$"),c=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");e.testKanji=function(t){return s.test(t)},e.testNumeric=function(t){return u.test(t)},e.testAlphanumeric=function(t){return c.test(t)}},6423:function(t,e,r){r(4916),r(2222),r(1249),r(2707),r(1539),r(1703),r(9714);var n=r(3595),o=r(9050),i=r(6105),a=r(5807),s=r(7133),u=r(6945),c=r(51),f=r(5659);function d(t){return unescape(encodeURIComponent(t)).length}function h(t,e,r){var n,o=[];while(null!==(n=t.exec(r)))o.push({data:n[0],index:n.index,mode:e,length:n[0].length});return o}function l(t){var e,r,o=h(u.NUMERIC,n.NUMERIC,t),i=h(u.ALPHANUMERIC,n.ALPHANUMERIC,t);c.isKanjiModeEnabled()?(e=h(u.BYTE,n.BYTE,t),r=h(u.KANJI,n.KANJI,t)):(e=h(u.BYTE_KANJI,n.BYTE,t),r=[]);var a=o.concat(i,e,r);return a.sort((function(t,e){return t.index-e.index})).map((function(t){return{data:t.data,mode:t.mode,length:t.length}}))}function g(t,e){switch(e){case n.NUMERIC:return o.getBitsLength(t);case n.ALPHANUMERIC:return i.getBitsLength(t);case n.KANJI:return s.getBitsLength(t);case n.BYTE:return a.getBitsLength(t)}}function v(t){return t.reduce((function(t,e){var r=t.length-1>=0?t[t.length-1]:null;return r&&r.mode===e.mode?(t[t.length-1].data+=e.data,t):(t.push(e),t)}),[])}function p(t){for(var e=[],r=0;r<t.length;r++){var o=t[r];switch(o.mode){case n.NUMERIC:e.push([o,{data:o.data,mode:n.ALPHANUMERIC,length:o.length},{data:o.data,mode:n.BYTE,length:o.length}]);break;case n.ALPHANUMERIC:e.push([o,{data:o.data,mode:n.BYTE,length:o.length}]);break;case n.KANJI:e.push([o,{data:o.data,mode:n.BYTE,length:d(o.data)}]);break;case n.BYTE:e.push([{data:o.data,mode:n.BYTE,length:d(o.data)}])}}return e}function w(t,e){for(var r={},o={start:{}},i=["start"],a=0;a<t.length;a++){for(var s=t[a],u=[],c=0;c<s.length;c++){var f=s[c],d=""+a+c;u.push(d),r[d]={node:f,lastCount:0},o[d]={};for(var h=0;h<i.length;h++){var l=i[h];r[l]&&r[l].node.mode===f.mode?(o[l][d]=g(r[l].lastCount+f.length,f.mode)-g(r[l].lastCount,f.mode),r[l].lastCount+=f.length):(r[l]&&(r[l].lastCount=f.length),o[l][d]=g(f.length,f.mode)+4+n.getCharCountIndicator(f.mode,e))}}i=u}for(var v=0;v<i.length;v++)o[i[v]].end=0;return{map:o,table:r}}function m(t,e){var r,u=n.getBestModeForData(t);if(r=n.from(e,u),r!==n.BYTE&&r.bit<u.bit)throw new Error('"'+t+'" cannot be encoded with mode '+n.toString(r)+".\n Suggested mode is: "+n.toString(u));switch(r!==n.KANJI||c.isKanjiModeEnabled()||(r=n.BYTE),r){case n.NUMERIC:return new o(t);case n.ALPHANUMERIC:return new i(t);case n.KANJI:return new s(t);case n.BYTE:return new a(t)}}e.fromArray=function(t){return t.reduce((function(t,e){return"string"===typeof e?t.push(m(e,null)):e.data&&t.push(m(e.data,e.mode)),t}),[])},e.fromString=function(t,r){for(var n=l(t,c.isKanjiModeEnabled()),o=p(n),i=w(o,r),a=f.find_path(i.map,"start","end"),s=[],u=1;u<a.length-1;u++)s.push(i.table[a[u]].node);return e.fromArray(v(s))},e.rawSplit=function(t){return e.fromArray(l(t,c.isKanjiModeEnabled()))}},51:function(t,e,r){var n;r(1703);var o=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];e.getSymbolSize=function(t){if(!t)throw new Error('"version" cannot be null or undefined');if(t<1||t>40)throw new Error('"version" should be in range from 1 to 40');return 4*t+17},e.getSymbolTotalCodewords=function(t){return o[t]},e.getBCHDigit=function(t){var e=0;while(0!==t)e++,t>>>=1;return e},e.setToSJISFunction=function(t){if("function"!==typeof t)throw new Error('"toSJISFunc" is not a valid function.');n=t},e.isKanjiModeEnabled=function(){return"undefined"!==typeof n},e.toSJIS=function(t){return n(t)}},7117:function(t,e){e.isValid=function(t){return!isNaN(t)&&t>=1&&t<=40}},5755:function(t,e,r){r(1539),r(4747),r(1703);var n=r(51),o=r(8146),i=r(6747),a=r(3595),s=r(7117),u=7973,c=n.getBCHDigit(u);function f(t,r,n){for(var o=1;o<=40;o++)if(r<=e.getCapacity(o,n,t))return o}function d(t,e){return a.getCharCountIndicator(t,e)+4}function h(t,e){var r=0;return t.forEach((function(t){var n=d(t.mode,e);r+=n+t.getBitsLength()})),r}function l(t,r){for(var n=1;n<=40;n++){var o=h(t,n);if(o<=e.getCapacity(n,r,a.MIXED))return n}}e.from=function(t,e){return s.isValid(t)?parseInt(t,10):e},e.getCapacity=function(t,e,r){if(!s.isValid(t))throw new Error("Invalid QR Code version");"undefined"===typeof r&&(r=a.BYTE);var i=n.getSymbolTotalCodewords(t),u=o.getTotalCodewordsCount(t,e),c=8*(i-u);if(r===a.MIXED)return c;var f=c-d(r,t);switch(r){case a.NUMERIC:return Math.floor(f/10*3);case a.ALPHANUMERIC:return Math.floor(f/11*2);case a.KANJI:return Math.floor(f/13);case a.BYTE:default:return Math.floor(f/8)}},e.getBestVersionForData=function(t,e){var r,n=i.from(e,i.M);if(Array.isArray(t)){if(t.length>1)return l(t,n);if(0===t.length)return 1;r=t[0]}else r=t;return f(r.mode,r.getLength(),n)},e.getEncodedBits=function(t){if(!s.isValid(t)||t<7)throw new Error("Invalid QR Code version");var e=t<<12;while(n.getBCHDigit(e)-c>=0)e^=u<<n.getBCHDigit(e)-c;return t<<12|e}},1173:function(t,e,r){r(1703);var n=r(3717);function o(t,e,r){t.clearRect(0,0,e.width,e.height),e.style||(e.style={}),e.height=r,e.width=r,e.style.height=r+"px",e.style.width=r+"px"}function i(){try{return document.createElement("canvas")}catch(t){throw new Error("You need to specify a canvas element")}}e.render=function(t,e,r){var a=r,s=e;"undefined"!==typeof a||e&&e.getContext||(a=e,e=void 0),e||(s=i()),a=n.getOptions(a);var u=n.getImageWidth(t.modules.size,a),c=s.getContext("2d"),f=c.createImageData(u,u);return n.qrToImageData(f.data,t,a),o(c,s,u),c.putImageData(f,0,0),s},e.renderToDataURL=function(t,r,n){var o=n;"undefined"!==typeof o||r&&r.getContext||(o=r,r=void 0),o||(o={});var i=e.render(t,r,o),a=o.type||"image/png",s=o.rendererOpts||{};return i.toDataURL(a,s.quality)}},2375:function(t,e,r){r(7042),r(6977);var n=r(3717);function o(t,e){var r=t.a/255,n=e+'="'+t.hex+'"';return r<1?n+" "+e+'-opacity="'+r.toFixed(2).slice(1)+'"':n}function i(t,e,r){var n=t+e;return"undefined"!==typeof r&&(n+=" "+r),n}function a(t,e,r){for(var n="",o=0,a=!1,s=0,u=0;u<t.length;u++){var c=Math.floor(u%e),f=Math.floor(u/e);c||a||(a=!0),t[u]?(s++,u>0&&c>0&&t[u-1]||(n+=a?i("M",c+r,.5+f+r):i("m",o,0),o=0,a=!1),c+1<e&&t[u+1]||(n+=i("h",s),s=0)):o++}return n}e.render=function(t,e,r){var i=n.getOptions(e),s=t.modules.size,u=t.modules.data,c=s+2*i.margin,f=i.color.light.a?"<path "+o(i.color.light,"fill")+' d="M0 0h'+c+"v"+c+'H0z"/>':"",d="<path "+o(i.color.dark,"stroke")+' d="'+a(u,s,i.margin)+'"/>',h='viewBox="0 0 '+c+" "+c+'"',l=i.width?'width="'+i.width+'" height="'+i.width+'" ':"",g='<svg xmlns="http://www.w3.org/2000/svg" '+l+h+' shape-rendering="crispEdges">'+f+d+"</svg>\n";return"function"===typeof r&&r(null,g),g}},3717:function(t,e,r){function n(t){if("number"===typeof t&&(t=t.toString()),"string"!==typeof t)throw new Error("Color should be defined as hex string");var e=t.slice().replace("#","").split("");if(e.length<3||5===e.length||e.length>8)throw new Error("Invalid hex color: "+t);3!==e.length&&4!==e.length||(e=Array.prototype.concat.apply([],e.map((function(t){return[t,t]})))),6===e.length&&e.push("F","F");var r=parseInt(e.join(""),16);return{r:r>>24&255,g:r>>16&255,b:r>>8&255,a:255&r,hex:"#"+e.slice(0,6).join("")}}r(1539),r(9714),r(1703),r(4916),r(3123),r(5306),r(7042),r(2222),r(1249),r(9600),e.getOptions=function(t){t||(t={}),t.color||(t.color={});var e="undefined"===typeof t.margin||null===t.margin||t.margin<0?4:t.margin,r=t.width&&t.width>=21?t.width:void 0,o=t.scale||4;return{width:r,scale:r?4:o,margin:e,color:{dark:n(t.color.dark||"#000000ff"),light:n(t.color.light||"#ffffffff")},type:t.type,rendererOpts:t.rendererOpts||{}}},e.getScale=function(t,e){return e.width&&e.width>=t+2*e.margin?e.width/(t+2*e.margin):e.scale},e.getImageWidth=function(t,r){var n=e.getScale(t,r);return Math.floor((t+2*r.margin)*n)},e.qrToImageData=function(t,r,n){for(var o=r.modules.size,i=r.modules.data,a=e.getScale(o,n),s=Math.floor((o+2*n.margin)*a),u=n.margin*a,c=[n.color.light,n.color.dark],f=0;f<s;f++)for(var d=0;d<s;d++){var h=4*(f*s+d),l=n.color.light;if(f>=u&&d>=u&&f<s-u&&d<s-u){var g=Math.floor((f-u)/a),v=Math.floor((d-u)/a);l=c[i[g*o+v]?1:0]}t[h++]=l.r,t[h++]=l.g,t[h++]=l.b,t[h]=l.a}}}}]);