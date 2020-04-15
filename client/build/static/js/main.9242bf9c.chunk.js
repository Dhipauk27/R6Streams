(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{248:function(e,t,a){e.exports=a(406)},406:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(37),c=a.n(i),s=a(24),o=a(18),l=a(213),u=a(57),m=a(22),p=a(23),d=a(25),f=a(26),h=a(38),g=a.n(h),v=a(47),E=a(76),b=a(32),y=Object(b.a)(),S=a(77),O=a.n(S),j=function(e){return function(){var t=Object(E.a)(g.a.mark(function t(a){var n;return g.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.a.get("/streams/edit/".concat(e));case 2:n=t.sent,a({type:"FETCH_STREAM",payload:n});case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},x=a(419),I=a(418),w=function(e){Object(f.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).renderInput=function(t){var a=t.input,n=t.label,i=t.meta;console.log("input",a);var c="field ".concat(i.error&&i.touched?"error":"");return r.a.createElement("div",{className:c},r.a.createElement("label",null,n),r.a.createElement("input",Object.assign({},a,{autoComplete:"off"})),e.renderError(i))},e.onSubmit=function(t){e.props.onSubmit(t)},e}return Object(p.a)(a,[{key:"renderError",value:function(e){var t=e.error;if(e.touched&&t)return r.a.createElement("div",{className:"ui error message"},r.a.createElement("div",{className:"header"},t))}},{key:"render",value:function(){return r.a.createElement("div",{style:{marginLeft:"25px",marginTop:"10px",marginRight:"900px"}},r.a.createElement("form",{onSubmit:this.props.handleSubmit(this.onSubmit),className:"ui form error"},r.a.createElement(x.a,{name:"title",component:this.renderInput,label:"Enter title"}),r.a.createElement(x.a,{name:"description",component:this.renderInput,label:"Enter description"}),r.a.createElement("button",{className:"ui button primary"},"Submit")))}}]),a}(r.a.Component),C=Object(I.a)({form:"StreamForm",validate:function(e){var t={};return e.title||(t.title="Title required"),e.description||(t.description="Description required"),t}})(w),N=function(e){Object(f.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).onSubmit=function(t){e.props.createStream(t)},e}return Object(p.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{style:{fontSize:"16px",marginLeft:"25px",marginTop:"10px",fontFamily:"verdana"}},"Create a Stream"),r.a.createElement(C,{onSubmit:this.onSubmit}))}}]),a}(r.a.Component),k=Object(s.b)(null,{createStream:function(e){return function(){var t=Object(E.a)(g.a.mark(function t(a,n){var r,i;return g.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=n().auth.userId,t.next=3,O.a.post("/streams",Object(v.a)({},e,{userId:r}));case 3:i=t.sent,a({type:"CREATE_STREAM",payload:i}),y.push("/");case 6:case"end":return t.stop()}},t)}));return function(e,a){return t.apply(this,arguments)}}()}})(N),A=a(214),T=(a(347),function(e){Object(f.a)(a,e);var t=Object(d.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(A.FilePond,{name:"stream-file",server:"/upload/".concat(this.props.match.params.id)}))}}]),a}(r.a.Component)),_=function(e){return c.a.createPortal(r.a.createElement("div",{onClick:e.onDismiss,className:"ui dimmer modals visible active"},r.a.createElement("div",{onClick:function(e){return e.stopPropagation()},className:"ui standard modal visible active"},r.a.createElement("div",{className:"header"},e.title),r.a.createElement("div",{className:"content"},e.content),r.a.createElement("div",{className:"actions"},e.actions))),document.querySelector("#modal"))},M=a(45),R=function(e){Object(f.a)(a,e);var t=Object(d.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"componentDidMount",value:function(){this.props.fetchStream(this.props.match.params.id)}},{key:"renderActions",value:function(){var e=this,t=this.props.match.params.id;return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{onClick:function(){return e.props.deleteStream(t)},className:"ui button negative"},"Delete"),r.a.createElement(M.a,{to:"/",className:"ui button"},"Cancel"))}},{key:"renderContent",value:function(){return"Are you sure you want to delete the stream?"}},{key:"render",value:function(){return r.a.createElement(_,{title:"Delete Stream",content:this.renderContent(),actions:this.renderActions(),onDismiss:function(){return y.push("/")}})}}]),a}(r.a.Component),D=Object(s.b)(function(e,t){return{stream:e.streams.stream}},{fetchStream:j,deleteStream:function(e){return function(){var t=Object(E.a)(g.a.mark(function t(a){return g.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.a.delete("/streams/".concat(e));case 2:a({type:"DELETE_STREAM",payload:e}),y.push("/");case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()}})(R),L=a(58),F=a(422),z=a(414),U=function(e){Object(f.a)(a,e);var t=Object(d.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"componentDidMount",value:function(){this.props.fetchStreams()}},{key:"renderAdmin",value:function(e){if(e.userId===this.props.currentUserId)return r.a.createElement("div",{style:{marginRight:"8px"}},r.a.createElement("div",{className:"right floated content",style:{marginTop:"10px"}},r.a.createElement(M.a,{to:"/streams/edit/".concat(e._id),style:{marginRight:"5px"}},r.a.createElement(L.a,{name:"cloud upload",size:"large",color:"teal"})),r.a.createElement(M.a,{to:"/streams/delete/".concat(e._id)},r.a.createElement(L.a,{name:"trash alternate outline",size:"large",color:"grey"}))))}},{key:"renderList",value:function(){var e=this;if(console.log("streams",this.props),this.props.streams.streams)return this.props.streams.streams.map(function(t){if(t._id)return r.a.createElement("div",{className:"item",key:t._id,style:{marginTop:"5px"}},e.renderAdmin(t),r.a.createElement("i",{className:"large middle aligned icon camera"}),r.a.createElement("div",{className:"content",style:{marginTop:"10px",marginLeft:"5px"}},r.a.createElement(M.a,{to:"/streams/".concat(t._id),className:"header"},t.title),r.a.createElement("div",{className:"description"},t.description)))})}},{key:"renderCreate",value:function(){if(this.props.isSignedIn)return r.a.createElement("div",{style:{textAlign:"right",marginRight:"10px"}},r.a.createElement(M.a,{to:"/streams/new"},r.a.createElement(F.a,{primary:!0},"Create")))}},{key:"render",value:function(){return r.a.createElement("div",{style:{marginTop:"15px",marginLeft:"20px"}},r.a.createElement("div",{style:{fontSize:"15px",marginBottom:"-5px"}},r.a.createElement(L.a.Group,{size:"large",style:{marginTop:"3px",marginLeft:"8px"}},r.a.createElement(L.a,{name:"list ul",size:"small"})),"\xa0 Video List"),r.a.createElement("div",{className:"ui divided middle aligned list",style:{marginTop:"20px",marginLeft:"8px"}},this.renderList()),r.a.createElement(z.a,{style:{marginTop:"-10px"}}),this.renderCreate())}}]),a}(r.a.Component),G=Object(s.b)(function(e){return{streams:e.streams,currentUserId:e.auth.userId,isSignedIn:e.auth.isSignedIn}},{fetchStreams:function(){return function(){var e=Object(E.a)(g.a.mark(function e(t){var a;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("/streams");case 2:a=e.sent,t({type:"FETCH_STREAMS",payload:a});case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()}})(U),B=a(220),H=a.n(B),P=a(424),q=a(425),J=a(421),Y=a(416),V=a(420),W=a(234),X=a(233),K=a(417),Q=a(415),Z=function(e){Object(f.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={message:""},e}return Object(p.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(K.a,{action:".",onSubmit:function(t){t.preventDefault(),e.props.onSubmitMessage(e.state.message),e.setState({message:""})}},r.a.createElement(K.a.Field,{style:{marginLeft:"-8px",fontSize:"12px",fontFamily:"verdana"},control:Q.a,placeholder:"Type a message",value:this.state.message,onChange:function(t){return e.setState({message:t.target.value})}}),r.a.createElement(F.a,{animated:!0,size:"small",type:"submit",value:"Send",style:{marginLeft:"3px"}},r.a.createElement(F.a.Content,{visible:!0},"Send"),r.a.createElement(F.a.Content,{hidden:!0},r.a.createElement(L.a,{name:"arrow right"}))))}}]),a}(n.Component),$=a(114),ee=function(e){var t=e.avatar,a=e.message;return r.a.createElement("div",null,r.a.createElement(V.a,null,r.a.createElement(V.a.Item,null,r.a.createElement($.a,{circular:!0,size:"large",style:{marginLeft:"-12px",marginRight:"10px"}},t),a)))},te=(a(398),window.location.origin.replace(/^http/,"ws"));console.log("url in chat",te);var ae=function(e){Object(f.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={name:e.props.user.userName,messages:[]},e.ws=new WebSocket(te),e.addMessage=function(t){e.setState(function(e){return{messages:[t].concat(Object(X.a)(e.messages))}})},e.submitMessage=function(t){var a={avatar:e.props.user.userAvatar,message:t};e.ws.send(JSON.stringify(a)),e.addMessage(a)},e}return Object(p.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.ws.onopen=function(){console.log("connected")},this.ws.onmessage=function(t){var a=JSON.parse(t.data);e.addMessage(a)},this.ws.onclose=function(){console.log("disconnected"),e.setState({ws:new WebSocket(te)})}}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(V.a,null,r.a.createElement(V.a.Item,null,r.a.createElement(V.a.Icon,{name:"users"}),r.a.createElement(V.a.Content,null,this.props.user.userName)),r.a.createElement(V.a.Item,{style:{marginLeft:"1px"}},r.a.createElement(V.a.Icon,{name:"mail"}),r.a.createElement(V.a.Content,null,r.a.createElement(Z,{ws:this.ws,onSubmitMessage:function(t){return e.submitMessage(t)}}))),r.a.createElement(V.a.Item,{style:{marginTop:"14px"}},this.state.messages.map(function(e,t){return r.a.createElement(ee,{key:t,message:e.message,avatar:e.avatar})}))))}}]),a}(n.Component),ne=Object(s.b)(function(e,t){return{user:e.auth}})(ae),re=a(231),ie=a.n(re),ce=function(e){Object(f.a)(a,e);var t=Object(d.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.match.params.id;this.props.fetchStream(e)}},{key:"render",value:function(){if(this.props.stream.stream){var e=this.props.stream.stream[0],t=e.title,a=e.description,n=e.stream_url,i=e.createdAt;return r.a.createElement("div",null,r.a.createElement(P.a,{placeholder:!0},r.a.createElement(q.a,{columns:2,stackable:!0,textAlign:"left"},r.a.createElement(q.a.Row,{stretched:!0},r.a.createElement(q.a.Column,{computer:11,textAlign:"left"},!!n&&r.a.createElement("div",null,r.a.createElement(ie.a,{controls:!0,url:n,className:"react-player",playing:!1,width:"100%",height:"99%"})),!n&&r.a.createElement(J.a,{active:!0,inverted:!0},r.a.createElement(Y.a,{inverted:!0},"Stream Loading"))),r.a.createElement(z.a,{vertical:!0}),r.a.createElement(q.a.Column,{computer:3},r.a.createElement(ne,null)))),r.a.createElement(V.a,null,r.a.createElement(V.a.Item,null,r.a.createElement(W.a,{avatar:!0,src:"https://i.pinimg.com/originals/8c/c4/92/8cc492be438c76b99371d691d23cff8f.jpg"}),r.a.createElement(V.a.Content,null,r.a.createElement(V.a.Header,{as:"a"},t),r.a.createElement(V.a.Description,null,a),r.a.createElement("div",{style:{fontSize:"10px"}},H()(i).format("MM-DD-YYYY")))))))}return r.a.createElement("div",null,r.a.createElement(J.a,{active:!0,inverted:!0},r.a.createElement(Y.a,{inverted:!0},"Fetching stream details")))}}]),a}(r.a.Component),se=Object(s.b)(function(e,t){return{stream:e.streams,user:e.auth}},{fetchStream:j})(ce),oe=function(e){Object(f.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).onAuthChange=function(t){if(t){var a=e.auth.currentUser.get().getId(),n=e.auth.currentUser.get().getBasicProfile().getName(),r=e.generateAvatar(n);e.props.signIn(a,n,r)}else e.props.signOut()},e.generateAvatar=function(e){var t=e.charAt(0),a=e.indexOf(" ");return t+e.charAt(a+1)},e.onSignInClick=function(){e.auth.signIn()},e.onSignOutClick=function(){e.auth.signOut()},e}return Object(p.a)(a,[{key:"componentDidMount",value:function(){var e=this;window.gapi.load("client:auth2",function(){window.gapi.client.init({clientId:"707277215236-p95mf7bmdvbptj68dnj6tpa9thfptrdf.apps.googleusercontent.com",scope:"email"}).then(function(){e.auth=window.gapi.auth2.getAuthInstance(),e.onAuthChange(e.auth.isSignedIn.get()),e.auth.isSignedIn.listen(e.onAuthChange)})})}},{key:"renderAuthButton",value:function(){return null===this.props.isSignedIn?null:this.props.isSignedIn?r.a.createElement("button",{onClick:this.onSignOutClick,className:"ui red google button"},r.a.createElement("i",{className:"google icon"}),"Sign Out"):r.a.createElement("button",{onClick:this.onSignInClick,className:"ui red google button"},r.a.createElement("i",{className:"google icon"}),"Sign In with Google")}},{key:"render",value:function(){return r.a.createElement("div",{style:{marginTop:"5px",marginBottom:"5px"}},this.renderAuthButton())}}]),a}(r.a.Component),le=Object(s.b)(function(e){return{isSignedIn:e.auth.isSignedIn}},{signIn:function(e,t,a){return{type:"SIGN_IN",payloadId:e,payloadName:t,payloadAvatar:a}},signOut:function(){return{type:"SIGN_OUT"}}})(oe),ue=function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"ui secondary pointing menu"},r.a.createElement(M.a,{to:"/",className:"item",style:{marginLeft:"10px",fontSize:"16px",fontFamily:"verdana"}},"R6Streams"),r.a.createElement("div",{className:"right menu",style:{marginRight:"10px"}},r.a.createElement(le,null))))},me=function(){return r.a.createElement("div",null,r.a.createElement(u.b,{history:y},r.a.createElement(ue,null),r.a.createElement("div",null,r.a.createElement(u.c,null,r.a.createElement(u.a,{path:"/",exact:!0,component:G}),r.a.createElement(u.a,{path:"/streams/new",exact:!0,component:k}),r.a.createElement(u.a,{path:"/streams/edit/:id",exact:!0,component:T}),r.a.createElement(u.a,{path:"/streams/delete/:id",exact:!0,component:D}),r.a.createElement(u.a,{path:"/streams/:id",exact:!0,component:se})))))},pe=a(423),de={isSignedIn:null,userId:null},fe=a(232),he=a.n(fe),ge=Object(o.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:de,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SIGN_IN":return Object(v.a)({},e,{isSignedIn:!0,userId:t.payloadId,userName:t.payloadName,userAvatar:t.payloadAvatar});case"SIGN_OUT":return Object(v.a)({},e,{isSignedIn:!1,userId:null});default:return e}},form:pe.a,streams:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_STREAMS":return Object(v.a)({},e,{streams:t.payload.data});case"FETCH_STREAM":return Object(v.a)({},e,{stream:t.payload.data});case"CREATE_STREAM":return Object(v.a)({},e,{stream:"stream created"});case"EDIT_STREAM":return Object(v.a)({},e,{stream:"stream edited"});case"DELETE_STREAM":return he.a.omit(e,t.payload.data);default:return e}}}),ve=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||o.d,Ee=Object(o.e)(ge,ve(Object(o.a)(l.a)));c.a.render(r.a.createElement(s.a,{store:Ee},r.a.createElement(me,null)),document.querySelector("#root"))}},[[248,1,2]]]);
//# sourceMappingURL=main.9242bf9c.chunk.js.map