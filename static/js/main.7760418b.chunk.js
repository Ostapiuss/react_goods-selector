(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),c=n(3),s=n.n(c),r=n(6),l=n(4),i=n(5),u=n(8),d=n(7),m=n(1),p=n.n(m),g=(n(14),n(15),["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"]),f=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(l.a)(this,n);for(var o=arguments.length,a=new Array(o),c=0;c<o;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={goods:["Jam"]},e.addItem=function(t){e.setState((function(e){return{goods:[].concat(Object(r.a)(e.goods),[t])}}))},e.removeGood=function(t){e.setState((function(e){return{goods:e.goods.filter((function(e){return e!==t}))}}))},e.resetGood=function(){e.setState({goods:[]})},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this,t=this.state.goods;return a.a.createElement("div",{className:"App"},a.a.createElement("h1",{className:"App__title"},t.length>0?"Goods : ":"No goods selected",t.join(",")),t.length>0?a.a.createElement("button",{type:"button",onClick:this.resetGood,className:"App__button"},"X"):null,a.a.createElement("ul",{className:"list"},g.map((function(n,o){return a.a.createElement(a.a.Fragment,null,a.a.createElement("li",{className:"list__item",key:"".concat(o+1)},n,e.state.goods.includes(n)?a.a.createElement("button",{type:"button",className:p()("list__button",{hidden:t.includes(g[o])}),onClick:function(){e.removeGood(n)}},"delete"):a.a.createElement("button",{type:"button",className:p()("list__button",{hidden:t.includes(g[o])}),onClick:function(){e.addItem(n)}},"select")))}))))}}]),n}(a.a.Component);s.a.render(a.a.createElement(f,null),document.getElementById("root"))},9:function(e,t,n){e.exports=n(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.7760418b.chunk.js.map