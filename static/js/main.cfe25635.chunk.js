(this["webpackJsonpspin-wheel"]=this["webpackJsonpspin-wheel"]||[]).push([[0],{100:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),c=n(10),s=n.n(c),r=(n(88),n(57)),l=(n(89),n(75)),o=n(43),d=n(44),h=n(15),b=n(51),j=n(50),u=n(11),p=n(68),O=n.n(p),m=n(147),x=n(146),v=n(53),f=n(135),g=n(136),k=n(137),y=n(138),C=n(139),w=n(140),D=n(141),T=n(142),S=n(143),I=n(148),A=n(144),B=n(145),N=n(74),P=n.n(N),F=n(73),K=n.n(F),W=(n(91),n(6)),z=function(e){Object(b.a)(n,e);var t=Object(j.a)(n);function n(e){var a,i;return Object(o.a)(this,n),(i=t.call(this,e)).state={selectedItem:null,nbTurn:0,spinDuration:null!==(a=e.spinDuration)&&void 0!==a?a:10},i.selectItem=i.selectItem.bind(Object(h.a)(i)),i}return Object(d.a)(n,[{key:"selectItem",value:function(){var e=this.state,t=e.nbTurn,n=e.spinDuration,a=Math.floor(Math.random()*this.props.items.length);this.props.onSelectItem&&this.props.onSelectItem(this.props.items[a],n),this.setState({selectedItem:a,nbTurn:t+10})}},{key:"render",value:function(){var e=this.state,t=e.selectedItem,n=e.nbTurn,a=e.spinDuration,i=this.props.items,c={"--nb-item":i.length,"--selected-item":t,"--nb-turn":n,"--spinning-duration":"".concat(a,"s")};return Object(W.jsx)("div",{className:"wheel-container",children:Object(W.jsx)("div",{className:"wheel ".concat("spinning"),style:c,onClick:this.selectItem,children:i.map((function(e,t){return Object(W.jsx)("div",{className:"wheel-item",style:{"--item-nb":t},children:Object(W.jsx)(x.a,{src:"https://cinco.linkedin.biz/api/raw/picture/".concat(e),style:{width:150,height:150},children:Object(W.jsx)(v.a,{variant:"h3",children:e.charAt(0).toUpperCase()})})},t)}))})})}}]),n}(i.a.Component),U=function(e){Object(b.a)(n,e);var t=Object(j.a)(n);function n(e){var a;Object(o.a)(this,n),(a=t.call(this,e)).spinDuration=10;var i=O.a.parse(e.location.search),c={};if(i.u){var s,r=Object(l.a)(i.u.split(","));try{for(r.s();!(s=r.n()).done;){c[s.value]=!0}}catch(d){r.e(d)}finally{r.f()}}return i.spinDuration&&(a.spinDuration=parseInt(i.spinDuration)),a.state={members:c,newName:"",backDropOpen:!1},a.handleToggle=a.handleToggle.bind(Object(h.a)(a)),a.handleAdd=a.handleAdd.bind(Object(h.a)(a)),a.handleDelete=a.handleDelete.bind(Object(h.a)(a)),a.handleTextChange=a.handleTextChange.bind(Object(h.a)(a)),a.handleKeyPress=a.handleKeyPress.bind(Object(h.a)(a)),a.onWheelSelect=a.onWheelSelect.bind(Object(h.a)(a)),a.openBackdrop=a.openBackdrop.bind(Object(h.a)(a)),a.closeBackdrop=a.closeBackdrop.bind(Object(h.a)(a)),a}return Object(d.a)(n,[{key:"handleToggle",value:function(e){var t=this.state.members;t[e]=!t[e],this.setState({members:t})}},{key:"handleAdd",value:function(){var e=this.state,t=e.members,n=e.newName;n&&(t[n]=!0,this.setState({members:t,newName:""}))}},{key:"handleDelete",value:function(e){var t=this.state.members;delete t[e],this.setState({members:t})}},{key:"handleTextChange",value:function(e){this.setState({newName:e.target.value})}},{key:"handleKeyPress",value:function(e){"Enter"===e.key&&this.handleAdd()}},{key:"onWheelSelect",value:function(e,t){clearTimeout(this.timeoutId),this.setState({winner:e}),this.timeoutId=setTimeout(this.openBackdrop,1e3*(t+1))}},{key:"openBackdrop",value:function(){this.setState({backDropOpen:!0})}},{key:"closeBackdrop",value:function(){this.setState({backDropOpen:!1})}},{key:"render",value:function(){var e=this,t=this.state,n=t.members,a=t.newName,i=t.backDropOpen,c=t.winner,s=!1,r=void 0;a?void 0!==n[a]&&(s=!0,r="Already exist"):s=!0;var l=c?Object(W.jsx)(m.a,{style:{zIndex:2,color:"#ffffff",backdropFilter:"blur(10px)"},open:i,onClick:this.closeBackdrop,children:Object(W.jsxs)("div",{children:[Object(W.jsx)(x.a,{src:"https://cinco.linkedin.biz/api/raw/picture/".concat(c),style:{width:400,height:400,left:"calc(50% - 200px)"},children:Object(W.jsx)(v.a,{variant:"h1",children:null===c||void 0===c?void 0:c.charAt(0).toUpperCase()})}),Object(W.jsxs)(v.a,{variant:"h1",component:"h2",style:{marginTop:100},children:["Congratulations, ",c,"!"]})]})}):Object(W.jsx)("div",{});return Object(W.jsx)("div",{style:{padding:"50px"},children:Object(W.jsx)(f.a,{maxWidth:"lg",children:Object(W.jsxs)(g.a,{container:!0,spacing:10,children:[Object(W.jsx)(g.a,{item:!0,lg:4,md:6,xs:12,children:Object(W.jsx)(k.a,{children:Object(W.jsx)(y.a,{children:Object(W.jsxs)(C.a,{component:"nav",children:[Object.keys(n).map((function(t){return Object(W.jsxs)(w.a,{button:!0,onClick:function(){return e.handleToggle(t)},children:[Object(W.jsx)(D.a,{children:Object(W.jsx)(x.a,{src:"https://cinco.linkedin.biz/api/raw/picture/".concat(t),children:t.charAt(0).toUpperCase()})}),Object(W.jsx)(T.a,{primary:t}),Object(W.jsxs)(S.a,{children:[Object(W.jsx)(I.a,{edge:"end",checked:n[t],onChange:function(){return e.handleToggle(t)}}),Object(W.jsx)(A.a,{edge:"end","aria-label":"delete",onClick:function(){return e.handleDelete(t)},children:Object(W.jsx)(K.a,{})})]})]},t)})),Object(W.jsxs)(w.a,{children:[Object(W.jsx)(D.a,{children:Object(W.jsx)(x.a,{children:a.charAt(0).toUpperCase()})}),Object(W.jsx)(B.a,{id:"standard-basic",placeholder:"Add more",onChange:this.handleTextChange,value:a,onKeyPress:this.handleKeyPress,error:void 0!==r,helperText:r}),Object(W.jsx)(S.a,{children:Object(W.jsx)(A.a,{edge:"end","aria-label":"delete",onClick:function(){return e.handleAdd()},disabled:s,children:Object(W.jsx)(P.a,{})})})]})]})})})}),Object(W.jsxs)(g.a,{item:!0,lg:8,md:6,xs:12,children:[Object(W.jsx)(z,{items:Object.keys(n).filter((function(e){return n[e]})),spinDuration:this.spinDuration,onSelectItem:this.onWheelSelect}),l]})]})})})}}]),n}(i.a.Component),M=Object(u.d)(U);var E=function(){return Object(W.jsx)("div",{className:"App",children:Object(W.jsx)(r.a,{children:Object(W.jsx)(M,{})})})},J=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,150)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),i(e),c(e),s(e)}))};s.a.render(Object(W.jsx)(i.a.StrictMode,{children:Object(W.jsx)(E,{})}),document.getElementById("root")),J()},88:function(e,t,n){},89:function(e,t,n){},91:function(e,t,n){}},[[100,1,2]]]);
//# sourceMappingURL=main.cfe25635.chunk.js.map