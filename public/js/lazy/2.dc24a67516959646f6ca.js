webpackJsonp([2],{

/***/ 71:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(93)
}
var normalizeComponent = __webpack_require__(8)
/* script */
var __vue_script__ = __webpack_require__(95)
/* template */
var __vue_template__ = __webpack_require__(96)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-add6e1e0"
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
Component.options.__file = "resources/assets/js/components/admin/articleUpload.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-add6e1e0", Component.options)
  } else {
    hotAPI.reload("data-v-add6e1e0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 93:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(94);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(7)("1ec43b2d", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/_css-loader@0.28.11@css-loader/index.js!../../../../../node_modules/_vue-loader@13.7.2@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-add6e1e0\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/_sass-loader@6.0.7@sass-loader/lib/loader.js!../../../../../node_modules/_vue-loader@13.7.2@vue-loader/lib/selector.js?type=styles&index=0!./articleUpload.vue", function() {
     var newContent = require("!!../../../../../node_modules/_css-loader@0.28.11@css-loader/index.js!../../../../../node_modules/_vue-loader@13.7.2@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-add6e1e0\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/_sass-loader@6.0.7@sass-loader/lib/loader.js!../../../../../node_modules/_vue-loader@13.7.2@vue-loader/lib/selector.js?type=styles&index=0!./articleUpload.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 94:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Raleway:300,400,600);", ""]);

// module
exports.push([module.i, "\nhtml[data-v-add6e1e0], body[data-v-add6e1e0] {\n  height: 100%;\n  background-color: #939393;\n  margin: 0;\n  font-family: \"Raleway\", sans-serif;\n  font-size: 14px;\n  line-height: 1.6;\n  color: #636b6f;\n  background-color: #f5f8fa;\n}\na[data-v-add6e1e0] {\n  text-decoration: none;\n}\n.item-ctent[data-v-add6e1e0] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.cy[data-v-add6e1e0] {\n  border-radius: 100%;\n  border-width: 0px;\n  border-style: solid;\n}\n.inline-box[data-v-add6e1e0] {\n  display: inline-block;\n}\n.flex[data-v-add6e1e0] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n.right-content[data-v-add6e1e0] {\n  -webkit-transition: all .5s;\n  transition: all .5s;\n  width: auto;\n  right: 0;\n  left: 330px;\n  position: absolute;\n  z-index: 0;\n}\n.on-cursor[data-v-add6e1e0] {\n  cursor: pointer;\n}\n.content[data-v-add6e1e0] {\n  margin: 15px 40px 0 60px;\n  border: 1px solid #6666;\n  background-color: white;\n  border-radius: 3px;\n  -webkit-box-shadow: #777777 3px 0px 5px 0px;\n          box-shadow: #777777 3px 0px 5px 0px;\n}\n.side-triangle[data-v-add6e1e0] {\n  float: left;\n  display: inline-block;\n  width: 0px;\n  height: 0px;\n  border-style: solid;\n  border-width: 25px;\n  border-color: #606060 transparent transparent #606060;\n  opacity: 0.66;\n}\n.data-box[data-v-add6e1e0] {\n  margin-top: 10px;\n  margin-right: 20px;\n  display: inline-block;\n  float: right;\n}\n.side-hr[data-v-add6e1e0] {\n  border-top: 1px solid #BBBBBB;\n}\n.short-hr[data-v-add6e1e0] {\n  margin-top: 3px;\n  margin-bottom: 15px;\n}\n.border-shadow[data-v-add6e1e0] {\n  border: 1px solid #6666;\n  -webkit-box-shadow: #777777 3px 0px 5px 0px;\n          box-shadow: #777777 3px 0px 5px 0px;\n  border-radius: 3px;\n}\n.article-box[data-v-add6e1e0] {\n  width: 90%;\n  height: auto;\n  margin: 0 auto;\n  margin-top: 30px;\n  margin-bottom: 25px;\n  border: 1px solid #6666;\n  border-radius: 3px;\n  -webkit-box-shadow: #777777 3px 0px 5px 0px;\n          box-shadow: #777777 3px 0px 5px 0px;\n}\n.article-box .head-box[data-v-add6e1e0] {\n    display: inline-block;\n    float: left;\n}\n.article-box .head-box .title[data-v-add6e1e0] {\n      font-size: 25px;\n      font-weight: 600;\n}\n.article-box .icon-box[data-v-add6e1e0] {\n    padding: 0px 45px;\n    margin: 15px 0;\n}\n@media screen and (max-width: 992px) {\n.content[data-v-add6e1e0] {\n    border-radius: 0;\n    margin: 0;\n    border: none;\n    -webkit-box-shadow: none;\n            box-shadow: none;\n}\n.hidden-phone[data-v-add6e1e0] {\n    display: none;\n}\n.show-phone[data-v-add6e1e0] {\n    display: block;\n}\n}\n@media screen and (min-width: 992px) {\n.show-phone[data-v-add6e1e0] {\n    display: none;\n}\n}\n@media screen and (max-width: 992px) {\n.article-box[data-v-add6e1e0] {\n    height: auto;\n    border: none;\n    -webkit-box-shadow: none;\n            box-shadow: none;\n    margin: auto;\n    width: 90%;\n}\n.article-box .head-box[data-v-add6e1e0] {\n      display: block;\n      float: none;\n      margin-top: 10px;\n}\n.article-box .head-box p[data-v-add6e1e0] {\n        margin: 0;\n}\n.article-box .data-box[data-v-add6e1e0] {\n      float: none;\n      margin: 0;\n      display: block;\n}\n.article-box .side-triangle[data-v-add6e1e0] {\n      display: none;\n}\n.article-box .img-box[data-v-add6e1e0] {\n      height: auto;\n      margin-bottom: 20px;\n}\n.article-box .icon-box[data-v-add6e1e0] {\n      padding: 0;\n      margin: 0;\n      margin-top: 15px;\n}\n.article-box .icon-box .like[data-v-add6e1e0] {\n        display: -webkit-inline-box;\n        display: -ms-inline-flexbox;\n        display: inline-flex;\n        -ms-flex-wrap: wrap;\n            flex-wrap: wrap;\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center;\n}\n.article-box .icon-box .like i[data-v-add6e1e0] {\n          line-height: 25px;\n}\n}\n.editor-tool[data-v-add6e1e0] {\n  -ms-flex-wrap: wrap !important;\n      flex-wrap: wrap !important;\n}\n.editor-text[data-v-add6e1e0] {\n  border: 1px solid #bdbdbd77;\n  height: 300px;\n}\n.form-article[data-v-add6e1e0] {\n  margin-top: 20px;\n}\n@media screen and (max-width: 992px) {\n.editor-text[data-v-add6e1e0] {\n    height: 250px;\n}\n}\n@media screen and (min-width: 992px) {\n.form-article[data-v-add6e1e0] {\n    width: 435px;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ 95:
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
//
//
//
//

module.exports = {
	data: function data() {
		return {
			_token: document.getElementsByTagName('meta')['csrf-token'],
			editorContent: '',
			editor: "",
			form: {
				title: '',
				text: this.editorContent,
				tages: [],
				fileList: []
			},
			inputVisible: false,
			inputValue: ''

		};
	},
	mounted: function mounted() {
		var self = this;
		this.$nextTick(function () {
			self.editor = new wangEditor('#editor-tool', '#editor-trigger');
			self.editor.customConfig.onchange = function () {
				self.editorContent = self.editor.txt.html();
			};
			self.editor.create();
		});
	},
	methods: {
		handleClose: function handleClose(tag) {
			this.form.tages.splice(this.form.tages.indexOf(tag), 1);
		},
		showInput: function showInput() {
			var _this = this;

			this.inputVisible = true;
			this.$nextTick(function (_) {
				_this.$refs.saveTagInput.$refs.input.focus();
			});
		},
		handleInputConfirm: function handleInputConfirm() {
			var inputValue = this.inputValue;
			if (inputValue) {
				this.form.tages.push(inputValue);
			}
			this.inputVisible = false;
			this.inputValue = '';
		},
		imgRemove: function imgRemove(file) {
			console.log(file);
		},
		tipLimit: function tipLimit() {
			this.$message('只能上传一张封面文件!');
		},
		resetForm: function resetForm(formName) {
			this.$refs['form'].resetFields();
		},
		submitForm: function submitForm(formName) {
			this.$ajax({
				method: 'post',
				url: '/create/article',
				data: this.form
			}).then(function (response) {
				console.log(response);
			});
		}
	}
};

/***/ }),

/***/ 96:
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: Unexpected token (1:1556)\n    at Parser.pp$4.raise (/var/www/vue-blog/node_modules/_vue-template-es2015-compiler@1.6.0@vue-template-es2015-compiler/buble.js:2610:13)\n    at Parser.pp.unexpected (/var/www/vue-blog/node_modules/_vue-template-es2015-compiler@1.6.0@vue-template-es2015-compiler/buble.js:637:8)\n    at Parser.pp$3.parseExprAtom (/var/www/vue-blog/node_modules/_vue-template-es2015-compiler@1.6.0@vue-template-es2015-compiler/buble.js:2094:10)\n    at Parser.parseExprAtom (/var/www/vue-blog/node_modules/_vue-template-es2015-compiler@1.6.0@vue-template-es2015-compiler/buble.js:4372:24)\n    at Parser.pp$3.parseExprSubscripts (/var/www/vue-blog/node_modules/_vue-template-es2015-compiler@1.6.0@vue-template-es2015-compiler/buble.js:1955:19)\n    at Parser.pp$3.parseMaybeUnary (/var/www/vue-blog/node_modules/_vue-template-es2015-compiler@1.6.0@vue-template-es2015-compiler/buble.js:1932:17)\n    at Parser.pp$3.parseExprOps (/var/www/vue-blog/node_modules/_vue-template-es2015-compiler@1.6.0@vue-template-es2015-compiler/buble.js:1874:19)\n    at Parser.pp$3.parseMaybeConditional (/var/www/vue-blog/node_modules/_vue-template-es2015-compiler@1.6.0@vue-template-es2015-compiler/buble.js:1857:19)\n    at Parser.pp$3.parseMaybeAssign (/var/www/vue-blog/node_modules/_vue-template-es2015-compiler@1.6.0@vue-template-es2015-compiler/buble.js:1832:19)\n    at Parser.pp$3.parsePropertyValue (/var/www/vue-blog/node_modules/_vue-template-es2015-compiler@1.6.0@vue-template-es2015-compiler/buble.js:2310:87)\n    at Parser.parseObj (/var/www/vue-blog/node_modules/_vue-template-es2015-compiler@1.6.0@vue-template-es2015-compiler/buble.js:4472:14)\n    at Parser.pp$3.parseExprAtom (/var/www/vue-blog/node_modules/_vue-template-es2015-compiler@1.6.0@vue-template-es2015-compiler/buble.js:2077:17)\n    at Parser.parseExprAtom (/var/www/vue-blog/node_modules/_vue-template-es2015-compiler@1.6.0@vue-template-es2015-compiler/buble.js:4372:24)\n    at Parser.pp$3.parseExprSubscripts (/var/www/vue-blog/node_modules/_vue-template-es2015-compiler@1.6.0@vue-template-es2015-compiler/buble.js:1955:19)\n    at Parser.pp$3.parseMaybeUnary (/var/www/vue-blog/node_modules/_vue-template-es2015-compiler@1.6.0@vue-template-es2015-compiler/buble.js:1932:17)\n    at Parser.pp$3.parseExprOps (/var/www/vue-blog/node_modules/_vue-template-es2015-compiler@1.6.0@vue-template-es2015-compiler/buble.js:1874:19)\n    at Parser.pp$3.parseMaybeConditional (/var/www/vue-blog/node_modules/_vue-template-es2015-compiler@1.6.0@vue-template-es2015-compiler/buble.js:1857:19)\n    at Parser.pp$3.parseMaybeAssign (/var/www/vue-blog/node_modules/_vue-template-es2015-compiler@1.6.0@vue-template-es2015-compiler/buble.js:1832:19)\n    at Parser.pp$3.parsePropertyValue (/var/www/vue-blog/node_modules/_vue-template-es2015-compiler@1.6.0@vue-template-es2015-compiler/buble.js:2310:87)\n    at Parser.parseObj (/var/www/vue-blog/node_modules/_vue-template-es2015-compiler@1.6.0@vue-template-es2015-compiler/buble.js:4472:14)\n    at Parser.pp$3.parseExprAtom (/var/www/vue-blog/node_modules/_vue-template-es2015-compiler@1.6.0@vue-template-es2015-compiler/buble.js:2077:17)\n    at Parser.parseExprAtom (/var/www/vue-blog/node_modules/_vue-template-es2015-compiler@1.6.0@vue-template-es2015-compiler/buble.js:4372:24)\n    at Parser.pp$3.parseExprSubscripts (/var/www/vue-blog/node_modules/_vue-template-es2015-compiler@1.6.0@vue-template-es2015-compiler/buble.js:1955:19)\n    at Parser.pp$3.parseMaybeUnary (/var/www/vue-blog/node_modules/_vue-template-es2015-compiler@1.6.0@vue-template-es2015-compiler/buble.js:1932:17)\n    at Parser.pp$3.parseExprOps (/var/www/vue-blog/node_modules/_vue-template-es2015-compiler@1.6.0@vue-template-es2015-compiler/buble.js:1874:19)\n    at Parser.pp$3.parseMaybeConditional (/var/www/vue-blog/node_modules/_vue-template-es2015-compiler@1.6.0@vue-template-es2015-compiler/buble.js:1857:19)\n    at Parser.pp$3.parseMaybeAssign (/var/www/vue-blog/node_modules/_vue-template-es2015-compiler@1.6.0@vue-template-es2015-compiler/buble.js:1832:19)\n    at Parser.pp$3.parseExprList (/var/www/vue-blog/node_modules/_vue-template-es2015-compiler@1.6.0@vue-template-es2015-compiler/buble.js:2528:20)\n    at Parser.pp$3.parseSubscripts (/var/www/vue-blog/node_modules/_vue-template-es2015-compiler@1.6.0@vue-template-es2015-compiler/buble.js:1983:29)\n    at Parser.pp$3.parseExprSubscripts (/var/www/vue-blog/node_modules/_vue-template-es2015-compiler@1.6.0@vue-template-es2015-compiler/buble.js:1958:21)");

/***/ })

});