(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{"6S3V":function(e,t,n){"use strict";var a=n("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("+L6B");var o=a(n("2/Rp"));n("2qtc");var r=a(n("kLXV"));n("miYZ");var i=a(n("tsqr")),l=a(n("lwsE")),u=a(n("W8MJ")),c=a(n("a1gu")),s=a(n("Nsbk")),d=a(n("7W2i")),f=a(n("q1tI")),h=(a(n("17x9")),a(n("dPBl"))),m=n("MuoO"),v=n("4/jj"),p=n("Zyja"),y=a(n("i+bE")),g=a(n("a0/Y")),w=function(e){function t(e){var n;return(0,l.default)(this,t),n=(0,c.default)(this,(0,s.default)(t).call(this,e)),n._onCodeChange=function(e,t){n.setState({code:e});var a=t.contentValidator(e);if(!a)return i.default.warn("The problem");try{new Function("return ".concat((0,p.removeComments)(e)))();var o=t.contentIntegrityValidator(e);o||i.default.warn("you cannot add")}catch(e){e&&e.name&&"SyntaxError"===e.name?i.default.warn("You have a SyntaxError!"):i.default.warn("What is wrong with your code!")}},n.state={visible:!1,code:""},n}return(0,d.default)(t,e),(0,u.default)(t,[{key:"componentDidMount",value:function(){this.hello=r.default.info({title:"Let start cracking",content:f.default.createElement(f.default.Fragment,null,f.default.createElement("br",null),f.default.createElement("br",null),f.default.createElement("img",{src:g.default,alt:"",style:{width:"265px"}})),okText:"Go"})}},{key:"componentWillUnmount",value:function(){this.hello.destroy()}},{key:"render",value:function(){var e=this,t=this.props,n=t.locationPathname,a=t.screenHeight,r=v.routes.find(function(e){return e.path===n});if(!r)return f.default.createElement(h.default,{to:{pathname:"/exam1"}});var i=r.content,l=r.testCase,u=a-64-10;return f.default.createElement("div",{className:y.default.content,style:{height:"".concat(u,"px")},ref:this.container},f.default.createElement(o.default,{shape:"circle",icon:"eye",className:y.default.verifyBtn,onClick:function(){return e.setState({visible:!0})}}),f.default.createElement(i,{value:this.state.code,onChange:function(t){return e._onCodeChange(t,r)}}),f.default.createElement(l,{visible:this.state.visible,onClose:function(){return e.setState({visible:!1})},code:this.state.code,inputFuncName:r.inputFuncName,height:u}))}}]),t}(f.default.Component),b=(0,m.connect)(function(e){var t=e.app;return{locationPathname:t.locationPathname,locationQuery:t.locationQuery,screenHeight:t.screenHeight}})(w);t.default=b},"a0/Y":function(e,t,n){e.exports=n.p+"static/fight.055edb74.gif"},"i+bE":function(e,t,n){e.exports={content:"content___3dwyH",verifyBtn:"verifyBtn___2oot-"}}}]);