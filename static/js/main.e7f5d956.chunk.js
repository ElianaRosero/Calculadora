(this.webpackJsonpcalc=this.webpackJsonpcalc||[]).push([[0],[,,,,,,,function(module,__webpack_exports__,__webpack_require__){"use strict";var D_1_Eliana_Cursos_The_Complete_Full_Stack_JavaScript_Course_Calculator_calc_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),D_1_Eliana_Cursos_The_Complete_Full_Stack_JavaScript_Course_Calculator_calc_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(2),D_1_Eliana_Cursos_The_Complete_Full_Stack_JavaScript_Course_Calculator_calc_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(4),D_1_Eliana_Cursos_The_Complete_Full_Stack_JavaScript_Course_Calculator_calc_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(3),react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__),_components_Button__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(8),_css_style_css__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(15),_css_style_css__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(_css_style_css__WEBPACK_IMPORTED_MODULE_6__),App=function(_Component){Object(D_1_Eliana_Cursos_The_Complete_Full_Stack_JavaScript_Course_Calculator_calc_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__.a)(App,_Component);var _super=Object(D_1_Eliana_Cursos_The_Complete_Full_Stack_JavaScript_Course_Calculator_calc_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__.a)(App);function App(props){var _this;return Object(D_1_Eliana_Cursos_The_Complete_Full_Stack_JavaScript_Course_Calculator_calc_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,App),_this=_super.call(this,props),_this.reset=function(){_this.setState({current:"0",previous:[],nextIsReset:!1})},_this.addToCurrent=function(_){if(console.log("symbol"),["/","-","+","*"].indexOf(_)>-1){var e=_this.state.previous;e.push(_this.state.current+_),_this.setState({previous:e,nextIsReset:!0})}else"0"===_this.state.current&&"."!==_||_this.state.nextIsReset?_this.setState({current:_,nextIsReset:!1}):_this.setState({current:_this.state.current+_})},_this.calculate=function(symbol){var _this$state=_this.state,current=_this$state.current,previous=_this$state.previous,nextIsReset=_this$state.nextIsReset;previous.length>0&&(current=eval(String(previous[previous.length-1]+current))),_this.setState({current:current,previous:[],nextIsReset:!0})},_this.state={current:"",previous:[],nextIsReset:!1},_this}return Object(D_1_Eliana_Cursos_The_Complete_Full_Stack_JavaScript_Course_Calculator_calc_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(App,[{key:"render",value:function(){var _=[{symbol:"C",cols:3,action:this.reset},{symbol:"/",cols:1,action:this.addToCurrent},{symbol:"7",cols:1,action:this.addToCurrent},{symbol:"8",cols:1,action:this.addToCurrent},{symbol:"9",cols:1,action:this.addToCurrent},{symbol:"*",cols:1,action:this.addToCurrent},{symbol:"4",cols:1,action:this.addToCurrent},{symbol:"5",cols:1,action:this.addToCurrent},{symbol:"6",cols:1,action:this.addToCurrent},{symbol:"-",cols:1,action:this.addToCurrent},{symbol:"1",cols:1,action:this.addToCurrent},{symbol:"2",cols:1,action:this.addToCurrent},{symbol:"3",cols:1,action:this.addToCurrent},{symbol:"+",cols:1,action:this.addToCurrent},{symbol:"0",cols:2,action:this.addToCurrent},{symbol:".",cols:1,action:this.addToCurrent},{symbol:"=",cols:1,action:this.calculate}];return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{className:"App"},this.state.previous.length>0?react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{className:"floaty-last"},this.state.previous[this.state.previous.length-1]):null,react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input",{className:"result",type:"text",value:this.state.current}),_.map((function(_,e){return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_Button__WEBPACK_IMPORTED_MODULE_5__.a,{key:e,symbol:_.symbol,cols:_.cols,action:function(e){return _.action(e)}})})))}}]),App}(react__WEBPACK_IMPORTED_MODULE_4__.Component);__webpack_exports__.a=App},function(_,e,t){"use strict";var s=t(1),a=t(2),r=t(4),o=t(3),c=t(0),l=t.n(c),n=function(_){Object(r.a)(t,_);var e=Object(o.a)(t);function t(){return Object(s.a)(this,t),e.apply(this,arguments)}return Object(a.a)(t,[{key:"render",value:function(){var _=this;return l.a.createElement("div",{className:"column-".concat(this.props.cols)},l.a.createElement("button",{className:"calc-button",onClick:function(){return _.props.action(_.props.symbol)}},this.props.symbol))}}]),t}(c.Component);e.a=n},function(_,e,t){_.exports=t(16)},,,,,function(_,e,t){},function(_,e,t){},function(_,e,t){"use strict";t.r(e);var s=t(0),a=t.n(s),r=t(6),o=t.n(r),c=(t(14),t(7));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(c.a,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(_){_.unregister()})).catch((function(_){console.error(_.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.e7f5d956.chunk.js.map