(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(e,t,a){e.exports=a(56)},54:function(e,t,a){},56:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),l=a(6),r=a.n(l),i=a(18),c=a(19),s=a(23),u=a(20),d=a(24),p=a(5),g=a(21),f=a.n(g),h=a(25),m=a(4),b={Container:m.d,Row:m.i,Col:m.c,Alert:m.a,Button:m.b,Modal:m.e,ModalHeader:m.h,ModalBody:m.f,ModalFooter:m.g};function O(e){var t,a=e.tag,n=e.handler,l=e.modal;if("undefined"===typeof a||!("Type"in a))return o.a.createElement("p",null,"Loading....");if(!y(a.Props.onClick)&&"onClick"in a.Props){var r=a.Props.onClick;a.Props.onClick=function(){return n(r)}}if(!y(a.Props.toggle)&&"toggle"in a.Props){r=a.Props.toggle;a.Props.toggle=function(){return n("toggleModal")}}return"isOpen"in a.Props&&(a.Props.isOpen=l),t=o.a.createElement(b[a.Type]||a.Type,Object(h.a)({className:a.Props.className},a.Props),a.Content,a.Childerns.map(function(e){return o.a.createElement(O,{key:Math.random(),tag:e,handler:n,modal:l})})),o.a.createElement(o.a.Fragment,null,t)}var y=function(e){return"function"===typeof e},M=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={Layout:{},modal:!1},a.changeLayout=function(){},a.alertx=function(){alert("hello")},a.toggleModal=function(){a.setState({modal:!a.state.modal})},a.isOpenModal=function(){return a.state.modal},a.Callhandler=function(e){switch(e){case"UpdateLayout":a.changeLayout();break;case"alertx":a.alertx();break;case"toggleModal":a.toggleModal();break;case"isOpenModal":a.isOpenModal()}},a.Callhandler=a.Callhandler.bind(Object(p.a)(Object(p.a)(a))),a.toggleModal=a.toggleModal.bind(Object(p.a)(Object(p.a)(a))),a.isOpenModal=a.isOpenModal.bind(Object(p.a)(Object(p.a)(a))),a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.state.Layout.lenth>0||f.a.get("http://localhost:52752/api/ui/Getx6").then(function(t){var a=t.data;e.setState({Layout:a})})}},{key:"render",value:function(){return o.a.createElement(O,{tag:this.state.Layout.Components,handler:this.Callhandler,modal:this.state.modal})}}]),t}(o.a.Component);a(52),a(54);var C=document.getElementById("root");r.a.render(o.a.createElement(function(){return o.a.createElement(M,null)},null),C)}},[[26,2,1]]]);
//# sourceMappingURL=main.94ba4230.chunk.js.map