(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{38:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},39:function(e,t,a){e.exports=a(72)},46:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(12),l=a.n(c),i=(a(44),a(46),a(20)),s=a.n(i),o=a(32),m=a(6),u=a(7),d=a(10),p=a(8),h=a(11),v=a(3),E=a(9),g="SET_MOVIES",b="SET_TOGGLE";function f(e){return{type:g,movies:e}}function k(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return{type:b,active:e,action:t}}var j=a(22),O=a.n(j),y=a(5),w=function(e){function t(){return Object(m.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.res,a=e.index,n=e.setToggle,c=t.Title.replace(/[^A-Za-z0-9 ]/g,"").toLowerCase().split(" ").map(function(e){return e.charAt(0).toUpperCase()+e.substring(1)}).join(" ");return r.a.createElement(v.j,{className:"col-12 col-md-6 col-lg-4"},r.a.createElement(v.c,{className:"m-3"},r.a.createElement(v.f,null,r.a.createElement(y.a,{icon:"film"}),"  Id: ",a),r.a.createElement(v.d,null,r.a.createElement(v.i,null,"Title: ",c),r.a.createElement(v.g,null,"Year: ",t.Year),r.a.createElement(v.h,null,"Runtime: ",t.Runtime,r.a.createElement("br",null),"Genre: ",t.Genre,r.a.createElement("br",null),"Director: ",t.Director)),r.a.createElement(v.e,{className:"bg-transparent text-center"},r.a.createElement(v.b,{color:"success",onClick:function(){return n(a,"edit")}},r.a.createElement(y.a,{icon:"edit"})," Edit"),r.a.createElement(v.b,{color:"danger",onClick:function(){return n(a,"delete")}},r.a.createElement(y.a,{icon:"trash"})," Delete"))))}}]),t}(n.Component),T=Object(E.b)(null,{setToggle:k})(w),N=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).delete=function(){var e=a.props,t=e.active,n=e.list;n.splice(t,1),a.props.setMovies(n),a.props.setToggle()},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.active,a=e.action,n=e.setToggle;return r.a.createElement(v.o,{isOpen:null!==t&&"delete"===a,toggle:n},r.a.createElement(v.r,{toggle:n},"Delete Movie"),r.a.createElement(v.p,null,"Are you sure that you want to delete this movie ?"),r.a.createElement(v.q,null,r.a.createElement(v.b,{color:"success",onClick:this.delete.bind(this)},r.a.createElement(y.a,{icon:"check"})," Ok")," ",r.a.createElement(v.b,{color:"danger",onClick:n},r.a.createElement(y.a,{icon:"times"})," Cancel")))}}]),t}(n.Component),C=Object(E.b)(null,{setMovies:f,setToggle:k})(N),D=a(37),M=a(13),x=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).input=function(e){a.setState(Object(D.a)({},e.target.name,e.target.value))},a.submit=function(){var e=a.props,t=e.list,n=e.action,r=e.active,c=a.state,l=c.Title,i=c.Year,s=c.Runtime,o=c.Genre,m=c.Director,u=a.state,d=!1,p=[],h=(new Date).getFullYear();for(var v in u)""===u[v]&&"errorMessage"!==v&&(d=!0);if(d&&p.push("All fields are mandatory."),(!/^[0-9]+$/.test(i)||parseInt(i)>h||4!==i.length)&&(d=!0,p.push("Invalid year.")),"new"===n&&t.map(function(e){return e.Title.toLowerCase()===l.toLowerCase()&&(d=!0,p.push("The same movie name is already exist.")),!0}),d)a.setState({error:d,errorMessage:p});else{var E={imdbID:Math.random().toString(32).slice(2),Title:l,Year:i,Runtime:s,Genre:o,Director:m};"new"===n?t.push(E):t[r]=E,a.props.setMovies(t),a.close()}},a.close=function(){a.setState({Title:"",Year:"",Runtime:"",Genre:"",Director:"",error:!1,errorMessage:""}),a.props.setToggle()},console.log(e),a.state={Title:"undefined"!==typeof e.selected?e.selected.Title:"",Year:"undefined"!==typeof e.selected?e.selected.Year:"",Runtime:"undefined"!==typeof e.selected?e.selected.Runtime:"",Genre:"undefined"!==typeof e.selected?e.selected.Genre:"",Director:"undefined"!==typeof e.selected?e.selected.Director:"",error:!1,errorMessage:""},a.submit=a.submit.bind(Object(M.a)(Object(M.a)(a))),a.input=a.input.bind(Object(M.a)(Object(M.a)(a))),a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.action,t="new"===e?"Add New Movie":"Edit Movie",a=this.state,n=a.error,c=a.errorMessage,l=null;return c.length>0&&(l=c.map(function(e,t){return r.a.createElement("p",{key:t},e)})),r.a.createElement(v.o,{isOpen:"new"===e||"edit"===e,toggle:this.close},r.a.createElement(v.r,{toggle:this.close},t),r.a.createElement(v.p,null,r.a.createElement(v.m,null,r.a.createElement(v.n,{addonType:"prepend"},"Title"),r.a.createElement(v.l,{name:"Title",onChange:this.input,value:this.state.Title})),r.a.createElement(v.m,null,r.a.createElement(v.n,{addonType:"prepend"},"Year"),r.a.createElement(v.l,{name:"Year",onChange:this.input,value:this.state.Year})),r.a.createElement(v.m,null,r.a.createElement(v.n,{addonType:"prepend"},"Runtime"),r.a.createElement(v.l,{name:"Runtime",onChange:this.input,value:this.state.Runtime})),r.a.createElement(v.m,null,r.a.createElement(v.n,{addonType:"prepend"},"Genre"),r.a.createElement(v.l,{name:"Genre",onChange:this.input,value:this.state.Genre})),r.a.createElement(v.m,null,r.a.createElement(v.n,{addonType:"prepend"},"Director"),r.a.createElement(v.l,{name:"Director",onChange:this.input,value:this.state.Director})),n&&r.a.createElement(v.a,{color:"danger text-center error"},l)),r.a.createElement(v.q,null,r.a.createElement(v.b,{color:"success",onClick:this.submit},r.a.createElement(y.a,{icon:"check"})," Save")," ",r.a.createElement(v.b,{color:"danger",onClick:this.close},r.a.createElement(y.a,{icon:"times"})," Cancel")))}}]),t}(n.Component),G=Object(E.b)(null,{setToggle:k,setMovies:f})(x),R=function(e){function t(){return Object(m.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(v.j,{className:"text-center"},r.a.createElement("div",{className:"sk-circle"},r.a.createElement("div",{className:"sk-circle1 sk-child"}),r.a.createElement("div",{className:"sk-circle2 sk-child"}),r.a.createElement("div",{className:"sk-circle3 sk-child"}),r.a.createElement("div",{className:"sk-circle4 sk-child"}),r.a.createElement("div",{className:"sk-circle5 sk-child"}),r.a.createElement("div",{className:"sk-circle6 sk-child"}),r.a.createElement("div",{className:"sk-circle7 sk-child"}),r.a.createElement("div",{className:"sk-circle8 sk-child"}),r.a.createElement("div",{className:"sk-circle9 sk-child"}),r.a.createElement("div",{className:"sk-circle10 sk-child"}),r.a.createElement("div",{className:"sk-circle11 sk-child"}),r.a.createElement("div",{className:"sk-circle12 sk-child"}),r.a.createElement("span",{className:"loading"},"Loading...")))}}]),t}(n.Component),Y=a(38),S=a.n(Y),A=a(17),I=a(14);A.b.add(I.c,I.d,I.b,I.f,I.e,I.a);var L=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={loading:!0},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=[];O.a.get("http://www.omdbapi.com/?s=Batman&apiKey=e8dc217a").then(function(a){var n=a.data.Search.map(function(){var e=Object(o.a)(s.a.mark(function e(a){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("http://www.omdbapi.com/?apiKey=e8dc217a&i=".concat(a.imdbID)).then(function(e){return t.push(e.data),e.data});case 2:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}());Promise.all(n).then(function(){e.props.setMovies(t),e.setState({loading:!1})})})}},{key:"render",value:function(){var e=this,t=this.props.list,a=this.props.toggle,n=a.active,c=a.action,l=this.state.loading,i=null;return i=t.length>0&&!l?t.map(function(e,t){return r.a.createElement(T,{key:e.imdbID,res:e,index:t})}):l?r.a.createElement(R,null):r.a.createElement(v.j,null,r.a.createElement(v.a,{color:"info text-center mt-3 mb-3"},"No Result")),r.a.createElement("div",{className:"mt-3 mb-3"},r.a.createElement("header",null,r.a.createElement("h1",{className:"text-center"},r.a.createElement("img",{className:"logo",src:S.a,alt:"React"})," Herolo Cinema")),r.a.createElement(v.k,{className:"mt-3 mb-3"},r.a.createElement(v.s,null,r.a.createElement(v.j,{className:"text-center"},!l&&r.a.createElement(v.b,{color:"primary",onClick:function(){return e.props.setToggle(null,"new")}},r.a.createElement(y.a,{icon:"plus"})," Add new movie"))),r.a.createElement(v.s,null,i)),("delete"===c||"edit"===c||"new"===c)&&r.a.createElement("div",null,r.a.createElement(C,{active:n,action:c,list:t}),r.a.createElement(G,{active:n,action:c,list:t,selected:t[n]})))}}]),t}(n.Component);var B=Object(E.b)(function(e){return e},{setMovies:f,setToggle:k})(L);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var q=a(15);var J=Object(q.b)({list:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return t.movies;default:return e}},toggle:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return{active:t.active,action:t.action};default:return e}}}),K=Object(q.c)(J);l.a.render(r.a.createElement(E.a,{store:K},r.a.createElement(B,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[39,2,1]]]);
//# sourceMappingURL=main.5295d299.chunk.js.map