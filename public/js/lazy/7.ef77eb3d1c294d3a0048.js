webpackJsonp([7],{

/***/ 65:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(79)
}
var normalizeComponent = __webpack_require__(3)
/* script */
var __vue_script__ = __webpack_require__(81)
/* template */
var __vue_template__ = __webpack_require__(82)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-720b7e0f"
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
Component.options.__file = "resources/assets/js/components/Article.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-720b7e0f", Component.options)
  } else {
    hotAPI.reload("data-v-720b7e0f", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 79:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(80);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("9cab7430", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/_css-loader@0.28.11@css-loader/index.js!../../../../node_modules/_vue-loader@13.7.2@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-720b7e0f\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/_sass-loader@6.0.7@sass-loader/lib/loader.js!../../../../node_modules/_vue-loader@13.7.2@vue-loader/lib/selector.js?type=styles&index=0!./Article.vue", function() {
     var newContent = require("!!../../../../node_modules/_css-loader@0.28.11@css-loader/index.js!../../../../node_modules/_vue-loader@13.7.2@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-720b7e0f\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/_sass-loader@6.0.7@sass-loader/lib/loader.js!../../../../node_modules/_vue-loader@13.7.2@vue-loader/lib/selector.js?type=styles&index=0!./Article.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 80:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Raleway:300,400,600);", ""]);

// module
exports.push([module.i, "\nhtml[data-v-720b7e0f], body[data-v-720b7e0f] {\n  height: 100%;\n  background-color: #939393;\n  margin: 0;\n  font-family: \"Raleway\", sans-serif;\n  font-size: 14px;\n  line-height: 1.6;\n  color: #636b6f;\n  background-color: #f5f8fa;\n}\na[data-v-720b7e0f] {\n  text-decoration: none;\n}\n.item-ctent[data-v-720b7e0f] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.cy[data-v-720b7e0f] {\n  border-radius: 100%;\n  border-width: 0px;\n  border-style: solid;\n}\n.inline-box[data-v-720b7e0f] {\n  display: inline-block;\n}\n.flex[data-v-720b7e0f] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n.right-content[data-v-720b7e0f] {\n  -webkit-transition: all .5s;\n  transition: all .5s;\n  width: auto;\n  right: 0;\n  left: 330px;\n  position: absolute;\n  z-index: 0;\n}\n.on-cursor[data-v-720b7e0f] {\n  cursor: pointer;\n}\n.content[data-v-720b7e0f] {\n  margin: 15px 40px 0 60px;\n  border: 1px solid #6666;\n  background-color: white;\n  border-radius: 3px;\n  -webkit-box-shadow: #7777 1px 0px 3px 0px;\n          box-shadow: #7777 1px 0px 3px 0px;\n}\n.side-triangle[data-v-720b7e0f] {\n  float: left;\n  display: inline-block;\n  width: 0px;\n  height: 0px;\n  border-style: solid;\n  border-width: 25px;\n  border-color: #606060 transparent transparent #606060;\n  opacity: 0.66;\n}\n.data-box[data-v-720b7e0f] {\n  margin-top: 10px;\n  margin-right: 20px;\n  display: inline-block;\n  float: right;\n}\n.side-hr[data-v-720b7e0f] {\n  border-top: 1px solid #BBBBBB;\n}\n.short-hr[data-v-720b7e0f] {\n  margin-top: 3px;\n  margin-bottom: 15px;\n}\n.border-shadow[data-v-720b7e0f] {\n  border: 1px solid #6666;\n  -webkit-box-shadow: #777777 3px 0px 5px 0px;\n          box-shadow: #777777 3px 0px 5px 0px;\n  border-radius: 3px;\n}\n.article-box[data-v-720b7e0f] {\n  width: 90%;\n  height: auto;\n  margin: 0 auto;\n  margin-top: 30px;\n  margin-bottom: 25px;\n  border: 1px solid #6666;\n  border-radius: 3px;\n  -webkit-box-shadow: #7777 1px 0px 3px 0px;\n          box-shadow: #7777 1px 0px 3px 0px;\n}\n.article-box .head-box[data-v-720b7e0f] {\n    display: inline-block;\n    float: left;\n}\n.article-box .head-box .title[data-v-720b7e0f] {\n      font-size: 25px;\n      font-weight: 600;\n}\n.article-box .icon-box[data-v-720b7e0f] {\n    padding: 0px 45px;\n    margin: 15px 0;\n}\n@media screen and (max-width: 992px) {\n.content[data-v-720b7e0f] {\n    border-radius: 0;\n    margin: 0;\n    border: none;\n    -webkit-box-shadow: none;\n            box-shadow: none;\n}\n.hidden-phone[data-v-720b7e0f] {\n    display: none;\n}\n.show-phone[data-v-720b7e0f] {\n    display: block;\n}\n}\n@media screen and (min-width: 992px) {\n.show-phone[data-v-720b7e0f] {\n    display: none;\n}\n}\n@media screen and (max-width: 992px) {\n.article-box[data-v-720b7e0f] {\n    height: auto;\n    border: none;\n    -webkit-box-shadow: none;\n            box-shadow: none;\n    margin: auto;\n    width: 90%;\n}\n.article-box .head-box[data-v-720b7e0f] {\n      display: block;\n      float: none;\n      margin-top: 10px;\n}\n.article-box .head-box p[data-v-720b7e0f] {\n        margin: 0;\n}\n.article-box .data-box[data-v-720b7e0f] {\n      float: none;\n      margin: 0;\n      display: block;\n}\n.article-box .side-triangle[data-v-720b7e0f] {\n      display: none;\n}\n.article-box .img-box[data-v-720b7e0f] {\n      height: auto;\n      margin-bottom: 20px;\n}\n.article-box .icon-box[data-v-720b7e0f] {\n      padding: 0;\n      margin: 0;\n      margin-top: 15px;\n}\n.article-box .icon-box .like[data-v-720b7e0f] {\n        display: -webkit-inline-box;\n        display: -ms-inline-flexbox;\n        display: inline-flex;\n        -ms-flex-wrap: wrap;\n            flex-wrap: wrap;\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center;\n}\n.article-box .icon-box .like i[data-v-720b7e0f] {\n          line-height: 25px;\n}\n}\n.article-img-box[data-v-720b7e0f] {\n  height: auto;\n  width: 100%;\n  display: block;\n}\n.article-box[data-v-720b7e0f] {\n  width: 90%;\n  border-radius: 3px;\n  border: 1px solid #6666;\n  margin: 20px auto;\n  padding-bottom: 20px;\n}\n.text-box p[data-v-720b7e0f] {\n  word-break: break-word;\n}\n.article-triangle[data-v-720b7e0f] {\n  border-width: 45px;\n  border-color: black transparent transparent black;\n}\n.title[data-v-720b7e0f] {\n  margin-top: 20px;\n}\n.title font[data-v-720b7e0f] {\n    font-size: 35px;\n}\n.lable-item[data-v-720b7e0f] {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  margin-right: 10px;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.lable-item span[data-v-720b7e0f] {\n    margin-left: 5px;\n}\n.lable-item i[data-v-720b7e0f] {\n    font-size: 20px;\n}\n.comment-box[data-v-720b7e0f] {\n  margin: 0 55px;\n  margin-top: 20px;\n}\n.comment-text[data-v-720b7e0f] {\n  -webkit-box-shadow: #777777 3px 0px 5px 0px;\n          box-shadow: #777777 3px 0px 5px 0px;\n}\n.lable-box[data-v-720b7e0f] {\n  display: inline-block;\n}\n.like-box[data-v-720b7e0f] {\n  display: inline-block;\n}\n.bottom-icon-box[data-v-720b7e0f] {\n  padding: 0px 100px;\n}\n@media screen and (max-width: 992px) {\n.article-box[data-v-720b7e0f] {\n    height: auto;\n    border: none;\n    -webkit-box-shadow: none;\n            box-shadow: none;\n    margin: auto;\n    width: 90%;\n}\n.comment-box[data-v-720b7e0f] {\n    margin: 0px;\n    margin-top: 20px;\n}\n.side-triangle[data-v-720b7e0f] {\n    display: none;\n}\n.bottom-icon-box[data-v-720b7e0f] {\n    padding: 0;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ 81:
/***/ (function(module, exports) {

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
			data: ''
		};
	},
	methods: {
		getData: function getData() {
			var self = this;
			this.$ajax.get("/article/get/" + this.$route.params.id).then(function (response) {
				self.data = response.data;
			});
		}
	},
	mounted: function mounted() {
		var self = this;
		this.$nextTick(function () {
			self.getData();
			console.log(self.data);
		});
	},
	beforeMount: function beforeMount() {
		(function () {
			var appid = 'cytMq1XyR';
			var conf = 'prod_8abf39185ea6bc48f81b87e55d3de736';
			var width = window.innerWidth || document.documentElement.clientWidth;
			console.log(width);
			if (width < 960) {
				window.document.write('<script id="changyan_mobile_js" charset="utf-8" type="text/javascript" src="https://changyan.sohu.com/upload/mobile/wap-js/changyan_mobile.js?client_id=' + appid + '&conf=' + conf + '"><\/script>');
			} else {
				var loadJs = function loadJs(d, a) {
					var c = document.getElementsByTagName("head")[0] || document.head || document.documentElement;var b = document.createElement("script");b.setAttribute("type", "text/javascript");b.setAttribute("charset", "UTF-8");b.setAttribute("src", d);if (typeof a === "function") {
						if (window.attachEvent) {
							b.onreadystatechange = function () {
								var e = b.readyState;if (e === "loaded" || e === "complete") {
									b.onreadystatechange = null;a();
								}
							};
						} else {
							b.onload = a;
						}
					}c.appendChild(b);
				};loadJs("https://changyan.sohu.com/upload/changyan.js", function () {
					window.changyan.api.config({ appid: appid, conf: conf });
				});
			}
		})();
	}
};

/***/ }),

/***/ 82:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "content" }, [
    _c(
      "div",
      { staticClass: "article-box" },
      [
        _c(
          "el-row",
          [
            _c("el-col", { attrs: { span: 4, lg: { span: 2 } } }, [
              _c("div", { staticClass: "side-triangle article-triangle" })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "head-box" }, [
              _c("p", { staticClass: "title" }, [
                _vm._v(
                  "\n\t\t\t\t\t\t" + _vm._s(_vm.data.title) + "\n\t\t\t\t\t"
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "data-box" }, [
              _c("i", { staticClass: "fa fa-calendar-plus-o" }),
              _vm._v(" "),
              _c("span", [
                _vm._v(
                  "\n\t\t\t\t\t\t" +
                    _vm._s(_vm.data.created_at) +
                    "\n\t\t\t\t\t"
                )
              ])
            ])
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "el-row",
          [
            _c("el-col", { attrs: { md: { span: 18, offset: 3 } } }, [
              _c("img", {
                staticClass: "article-img-box",
                attrs: { src: _vm.data.img_url }
              })
            ])
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "el-row",
          [
            _c("el-col", {
              staticClass: "text-box",
              attrs: {
                md: { span: 18, offset: 3 },
                xs: { span: 24, offset: 0 }
              },
              domProps: { innerHTML: _vm._s(_vm.data.text) }
            })
          ],
          1
        ),
        _vm._v(" "),
        _c("el-row", [_c("el-col", [_c("hr", { staticClass: "side-hr" })])], 1),
        _vm._v(" "),
        _c(
          "el-row",
          {
            staticClass: "bottom-icon-box",
            attrs: { type: "flex", justify: "space-between" }
          },
          [
            _c(
              "div",
              { staticClass: "lable-box" },
              _vm._l(_vm.data.tages, function(tag) {
                return _c("div", { staticClass: "tag-item" }, [
                  _c("i", { staticClass: "fa fa-tag" }),
                  _vm._v(" "),
                  _c("span", [_vm._v(_vm._s(tag.name))])
                ])
              })
            ),
            _vm._v(" "),
            _c("div", { staticClass: "like-box" }, [
              _c("div", { staticClass: "lable-item" }, [
                _c("i", { staticClass: "fa fa-thumbs-o-up" }),
                _vm._v(" "),
                _c("span", [_vm._v(_vm._s(_vm.data.assent))])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "lable-item" }, [
                _c("i", { staticClass: "fa fa-share-alt" })
              ])
            ])
          ]
        ),
        _vm._v(" "),
        _vm._m(0)
      ],
      1
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "comment-box" }, [
      _c("div", { attrs: { id: "SOHUCS", sid: "7" } })
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-720b7e0f", module.exports)
  }
}

/***/ })

});