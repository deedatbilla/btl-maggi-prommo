(this["webpackJsonpspinning-wheel-game"]=this["webpackJsonpspinning-wheel-game"]||[]).push([[0],{36:function(e,t,a){},43:function(e,t,a){e.exports=a(73)},49:function(e,t,a){},73:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(14),s=a.n(r),o=a(11),c=a.n(o),m=a(15),i=(a(49),a(17)),p=a.n(i),u=a(77);class h extends l.a.Component{constructor(e){var t;super(e),t=this,this.onChange=e=>this.setState({[e.target.name]:e.target.value}),this.output=()=>{this.setState({showform:!0,modalIsOpen:!0})},this.onSubmit=function(){var e=Object(m.a)(c.a.mark((function e(a){var n,l,r,s,o,m,i,u,h,d;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),t.setState({loading:!0}),e.prev=2,n=t.state,l=n.fname,r=n.lname,s=n.age,o=n.phone,m=n.prize,i=n.location,u=n.gender,h={fname:l,lname:r,age:s,recNo:o,p:m.name,gender:u,package_id:m.package_id+"",location:i,region:t.props.region},console.log(h),e.next=8,p.a.post("https://skrillergh.pythonanywhere.com/checkwinnings/",h);case 8:d=e.sent,console.log(d.data),t.setState({loading:!1}),t.props.history.push("/success/".concat(m.name)),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(2),console.log(e.t0),t.setState({loading:!1});case 18:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(t){return e.apply(this,arguments)}}(),this.handleClose=()=>{this.setState({modalIsOpen:!1})},this.modal=()=>{const e=this.state,t=e.fname,a=e.lname,n=e.age,r=e.phone,s=e.location,o=e.modalIsOpen,c=e.gender;return l.a.createElement(u.a,{show:o},l.a.createElement("form",{onSubmit:this.onSubmit,className:"mymodal"},l.a.createElement(u.a.Header,null,l.a.createElement("h5",{className:"modal-title",id:"addOwnerModalText",style:{color:"black"}},"Congratulations on winning your ",l.a.createElement("b",{style:{color:"red",fontWeight:"bold"}},this.state.prize.name),". fill the form below to claim your prize")),l.a.createElement(u.a.Body,null,l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-4 col-sm-4 col-xs-4"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"inputOne",className:"col-form-label"},"First Name:"),l.a.createElement("input",{id:"inputOne",value:t,onChange:this.onChange,name:"fname",type:"text",required:!0,className:"form-control"}))),l.a.createElement("div",{className:"col-md-4 col-sm-4 col-xs-4"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"inputOne",className:"col-form-label"},"Last Name:"),l.a.createElement("input",{id:"inputOne",value:a,onChange:this.onChange,name:"lname",required:!0,type:"text",className:"form-control"}))),l.a.createElement("div",{className:"col-md-4 col-sm-4 col-xs-4"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"inputTwo",className:"col-form-label"},"Phone Number"),l.a.createElement("input",{id:"inputTwo",value:r,onChange:this.onChange,name:"phone",required:!0,type:"text",className:"form-control"})))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"inputThree",className:"col-form-label"},"Age"),l.a.createElement("input",{id:"inputThree",value:n,onChange:this.onChange,name:"age",type:"text",required:!0,className:"form-control"}))),l.a.createElement("div",{className:"col"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"inputFour",className:"col-form-label"},"Location:"),l.a.createElement("input",{id:"inputFour",value:s,onChange:this.onChange,name:"location",required:!0,type:"text",className:"form-control"}))),l.a.createElement("div",{className:"col"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"inputFour",className:"col-form-label"},"Gender"),l.a.createElement("select",{value:c,onChange:this.onChange,name:"gender",required:!0,className:"form-control"},l.a.createElement("option",{value:""},"---Select gender---"),l.a.createElement("option",{value:"male"},"Male"),l.a.createElement("option",{value:"female"},"Female"))))),l.a.createElement("div",{className:"row"}))),l.a.createElement(u.a.Footer,null,l.a.createElement("button",{id:"performSendAction",type:"submit",className:"btn btn-primary"},this.state.loading?l.a.createElement("span",null,"loading"):l.a.createElement("span",null," Submit Claim")))))},this.state={selectedItem:null,showform:!1,lname:"",fname:"",phone:"",age:"",location:"",prize:"",loading:!1,modalIsOpen:!1,gender:""},this.selectItem=this.selectItem.bind(this)}selectItem(){var e=this;return Object(m.a)(c.a.mark((function t(){var a;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(e.props.items.length>0)){t.next=14;break}if(null!==e.state.selectedItem){t.next=10;break}if(a=Math.floor(Math.random()*e.props.items.length),!e.props.onSelectItem){t.next=6;break}return t.next=6,e.props.onSelectItem(a);case 6:e.setState({selectedItem:a,prize:e.props.items[a]}),setTimeout(e.output,4e3),t.next=12;break;case 10:e.setState({selectedItem:null}),setTimeout(e.selectItem,500);case 12:t.next=15;break;case 14:alert("there is no prize to be won");case 15:case"end":return t.stop()}}),t)})))()}render(){const e=this.state.selectedItem,t=this.props.items,a={"--nb-item":t.length,"--selected-item":e},n=null!==e?"spinning":"";return 0!==t.length?l.a.createElement("div",{className:"container "},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12 text-center"},l.a.createElement("h3",{className:"",style:{color:"purple"}},"WIN YOUR MAGGI PROMOTION PRIZE HERE"))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"wheel-container"},l.a.createElement("div",{className:"wheel ".concat(n),style:a,onClick:this.selectItem},t.map((e,t)=>l.a.createElement("div",{className:"wheel-item",key:t,style:{"--item-nb":t}},e.name))))),l.a.createElement("div",{className:"row"},this.modal()),l.a.createElement("div",{className:"row mb-4 "},l.a.createElement("div",{className:"col-12 text-center"},l.a.createElement("h3",{style:{color:"purple"}}," Prizes won"),l.a.createElement("div",{className:"card"},l.a.createElement("table",{class:"table"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"#"),l.a.createElement("th",null,"Prize"))),l.a.createElement("tbody",null,this.props.won.map((e,t)=>l.a.createElement("tr",null,l.a.createElement("td",null,t+1),l.a.createElement("td",null,e.name))))))))):l.a.createElement("div",{className:"container "},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12 text-center"},l.a.createElement("h1",{className:"",style:{color:"purple",marginTop:"100px"}},"There is no ongoing promotion in this region"))),l.a.createElement("div",{className:"row mb-4 "},l.a.createElement("div",{className:"col-12 text-center"},l.a.createElement("h3",{style:{color:"purple"}}," Prizes won"),l.a.createElement("div",{className:"card"},l.a.createElement("table",{class:"table"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"#"),l.a.createElement("th",null,"Prize"))),l.a.createElement("tbody",null,this.props.won.map((e,t)=>l.a.createElement("tr",null,l.a.createElement("td",null,t+1),l.a.createElement("td",null,e.name)))))))))}}a(36);class d extends l.a.Component{constructor(...e){super(...e),this.state={won:[],left:[]}}componentDidMount(){var e=this;return Object(m.a)(c.a.mark((function t(){var a,n,l,r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.props.match.params.region,a=n.includes(" ")?n.replace(" ","/"):n,t.prev=2,t.next=5,p.a.post("https://skrillergh.pythonanywhere.com/allpackages/",{region:a});case 5:l=t.sent,r=l.data,console.log(r),console.log(r.packages),e.setState({left:[...r.left_packages]}),e.setState({won:[...r.won_packages]}),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(2),console.log(t.t0.message);case 16:case"end":return t.stop()}}),t,null,[[2,13]])})))()}render(){return l.a.createElement("div",{className:"App"},l.a.createElement(h,{items:this.state.left,region:this.props.match.params.region,won:this.state.won,history:this.props.history}))}}var E=a(21);class g extends n.Component{render(){return l.a.createElement("div",{className:""},l.a.createElement("nav",{className:"navbar navbar-expand-sm bg-light"},l.a.createElement("ul",{className:"navbar-nav"},l.a.createElement("li",{className:"nav-link"},l.a.createElement(E.b,{to:"/"},l.a.createElement("i",{className:"fa fa-home"}),"Home")))),l.a.createElement("h3",{style:{color:"purple"}},"Congratulations You have won a"," ",l.a.createElement("b",{style:{color:"red",fontWeight:"bold",fontSize:"30px"}},this.props.match.params.item)," "))}}class v extends n.Component{constructor(...e){super(...e),this.state={region:"",regions:[]},this.onSubmit=e=>{this.props.history.push("wheel/".concat(this.state.region))},this.onChange=e=>this.setState({[e.target.name]:e.target.value})}componentDidMount(){var e=this;return Object(m.a)(c.a.mark((function t(){var a;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.get("https://skrillergh.pythonanywhere.com/getregions");case 2:a=t.sent,console.log(a.data),e.setState({regions:[...a.data]});case 5:case"end":return t.stop()}}),t)})))()}render(){this.state.region;return l.a.createElement("div",{className:"container p-4"},l.a.createElement("form",{onSubmit:this.onSubmit},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"Template type",style:{color:"red"}},l.a.createElement("b",null,"Select your region")),l.a.createElement("select",{name:"region",required:!0,onChange:this.onChange,class:"form-control"},l.a.createElement("option",{value:""},"---select region ---"),this.state.regions.map(e=>l.a.createElement("option",{value:e.includes("/")?e.replace("/"," "):e},e))),l.a.createElement("button",{type:"submit",className:"btn btn-primary mt-5"},"Submit"))))}}var b=v,N=a(4);class f extends l.a.Component{render(){return l.a.createElement(E.a,null,l.a.createElement("div",{className:"container"},l.a.createElement(N.c,null,l.a.createElement(N.a,{exact:!0,path:"/",component:b}),l.a.createElement(N.a,{exact:!0,path:"/wheel/:region",component:d}),l.a.createElement(N.a,{exact:!0,path:"/success/:item",component:g}))))}}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(e=>{e.unregister()}).catch(e=>{console.error(e.message)})}},[[43,1,2]]]);
//# sourceMappingURL=main.64425edd.chunk.js.map