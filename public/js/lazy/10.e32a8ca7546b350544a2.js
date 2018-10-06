webpackJsonp([10],{

/***/ 63:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(77)
}
var normalizeComponent = __webpack_require__(3)
/* script */
var __vue_script__ = __webpack_require__(79)
/* template */
var __vue_template__ = __webpack_require__(80)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-62df897e"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/IndexContent.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-62df897e", Component.options)
  } else {
    hotAPI.reload("data-v-62df897e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 77:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(78);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("fa5fc52c", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/_css-loader@0.28.11@css-loader/index.js!../../../../node_modules/_vue-loader@13.7.3@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-62df897e\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/_sass-loader@6.0.7@sass-loader/lib/loader.js!../../../../node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=styles&index=0!./IndexContent.vue", function() {
     var newContent = require("!!../../../../node_modules/_css-loader@0.28.11@css-loader/index.js!../../../../node_modules/_vue-loader@13.7.3@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-62df897e\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/_sass-loader@6.0.7@sass-loader/lib/loader.js!../../../../node_modules/_vue-loader@13.7.3@vue-loader/lib/selector.js?type=styles&index=0!./IndexContent.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 78:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Raleway:300,400,600);", ""]);

// module
exports.push([module.i, "\nhtml[data-v-62df897e], body[data-v-62df897e] {\n  height: 100%;\n  background-color: #939393;\n  margin: 0;\n  font-family: \"Raleway\", sans-serif;\n  font-size: 14px;\n  line-height: 1.6;\n  color: #636b6f;\n  background-color: #f5f8fa;\n}\na[data-v-62df897e] {\n  text-decoration: none;\n}\n.item-ctent[data-v-62df897e] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.cy[data-v-62df897e] {\n  border-radius: 100%;\n  border-width: 0px;\n  border-style: solid;\n}\n.inline-box[data-v-62df897e] {\n  display: inline-block;\n}\n.flex[data-v-62df897e] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n.right-content[data-v-62df897e] {\n  -webkit-transition: all .5s;\n  transition: all .5s;\n  width: auto;\n  right: 0;\n  left: 330px;\n  position: absolute;\n  z-index: 0;\n}\n.on-cursor[data-v-62df897e] {\n  cursor: pointer;\n}\n.content[data-v-62df897e] {\n  margin: 15px 40px 0 60px;\n  border: 1px solid #6666;\n  background-color: white;\n  border-radius: 3px;\n  -webkit-box-shadow: #7777 1px 0px 3px 0px;\n          box-shadow: #7777 1px 0px 3px 0px;\n}\n.side-triangle[data-v-62df897e] {\n  float: left;\n  display: inline-block;\n  width: 0px;\n  height: 0px;\n  border-style: solid;\n  border-width: 25px;\n  border-color: #606060 transparent transparent #606060;\n  opacity: 0.66;\n}\n.data-box[data-v-62df897e] {\n  margin-top: 10px;\n  margin-right: 20px;\n  display: inline-block;\n  float: right;\n}\n.side-hr[data-v-62df897e] {\n  border-top: 1px solid #BBBBBB;\n}\n.short-hr[data-v-62df897e] {\n  margin-top: 3px;\n  margin-bottom: 15px;\n}\n.border-shadow[data-v-62df897e] {\n  border: 1px solid #6666;\n  -webkit-box-shadow: #777777 3px 0px 5px 0px;\n          box-shadow: #777777 3px 0px 5px 0px;\n  border-radius: 3px;\n}\n.article-box[data-v-62df897e] {\n  width: 90%;\n  height: auto;\n  margin: 0 auto;\n  margin-top: 30px;\n  margin-bottom: 25px;\n  border: 1px solid #6666;\n  border-radius: 3px;\n  -webkit-box-shadow: #7777 1px 0px 3px 0px;\n          box-shadow: #7777 1px 0px 3px 0px;\n}\n.article-box .head-box[data-v-62df897e] {\n    display: inline-block;\n    float: left;\n}\n.article-box .head-box .title[data-v-62df897e] {\n      font-size: 25px;\n      font-weight: 600;\n}\n.article-box .icon-box[data-v-62df897e] {\n    padding: 0px 45px;\n    margin: 15px 0;\n}\n.table-img[data-v-62df897e] {\n  width: 100%;\n  max-width: 200px;\n  height: auto;\n}\n@media screen and (max-width: 992px) {\n.content[data-v-62df897e] {\n    border-radius: 0;\n    margin: 0;\n    border: none;\n    -webkit-box-shadow: none;\n            box-shadow: none;\n}\n.hidden-phone[data-v-62df897e] {\n    display: none;\n}\n.show-phone[data-v-62df897e] {\n    display: block;\n}\n}\n@media screen and (min-width: 992px) {\n.show-phone[data-v-62df897e] {\n    display: none;\n}\n}\n@media screen and (max-width: 992px) {\n.article-box[data-v-62df897e] {\n    height: auto;\n    border: none;\n    -webkit-box-shadow: none;\n            box-shadow: none;\n    margin: auto;\n    width: 90%;\n}\n.article-box .head-box[data-v-62df897e] {\n      display: block;\n      float: none;\n      margin-top: 10px;\n}\n.article-box .head-box p[data-v-62df897e] {\n        margin: 0;\n}\n.article-box .data-box[data-v-62df897e] {\n      float: none;\n      margin: 0;\n      display: block;\n}\n.article-box .side-triangle[data-v-62df897e] {\n      display: none;\n}\n.article-box .img-box[data-v-62df897e] {\n      height: auto;\n      margin-bottom: 20px;\n}\n.article-box .icon-box[data-v-62df897e] {\n      padding: 0;\n      margin: 0;\n      margin-top: 15px;\n}\n.article-box .icon-box .like[data-v-62df897e] {\n        display: -webkit-inline-box;\n        display: -ms-inline-flexbox;\n        display: inline-flex;\n        -ms-flex-wrap: wrap;\n            flex-wrap: wrap;\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center;\n}\n.article-box .icon-box .like i[data-v-62df897e] {\n          line-height: 25px;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ 79:
/***/ (function(module, exports) {

//
//
//
//
//
//
//
//

module.exports = {
	data: function data() {
		return {
			data: "",
			loading: true
		};
	},
	methods: {
		getData: function getData() {
			var self = this;
			this.$ajax.get("/article/overview").then(function (response) {
				self.data = response.data;
				self.loading = false;
			});
		}
	},
	mounted: function mounted() {
		var self = this;
		this.$nextTick(function () {
			self.getData();
		});
	}
};

/***/ }),

/***/ 80:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "content", attrs: { id: "yhy" } },
    [
      _vm._l(_vm.data, function(article) {
        return _c("article-over", {
          directives: [
            {
              name: "loading",
              rawName: "v-loading",
              value: _vm.loading,
              expression: "loading"
            }
          ],
          attrs: { article: article }
        })
      }),
      _vm._v(" "),
      _c("hr", { staticClass: "hidden-md-and-up" })
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-62df897e", module.exports)
  }
}

/***/ })

});