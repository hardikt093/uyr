(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[51],{

/***/ "../coreui/node_modules/vform/dist/vform.es.js":
/*!*****************************************************!*\
  !*** ../coreui/node_modules/vform/dist/vform.es.js ***!
  \*****************************************************/
/*! exports provided: default, Errors, Form */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Errors", function() { return y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Form", function() { return g; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "../coreui/node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
var e=Object.defineProperty,t=Object.prototype.hasOwnProperty,s=Object.getOwnPropertySymbols,r=Object.prototype.propertyIsEnumerable,o=(t,s,r)=>s in t?e(t,s,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[s]=r,i=(e,i)=>{for(var a in i||(i={}))t.call(i,a)&&o(e,a,i[a]);if(s)for(var a of s(i))r.call(i,a)&&o(e,a,i[a]);return e};const n=e=>void 0===e,c=e=>Array.isArray(e),l=e=>e&&"number"==typeof e.size&&"string"==typeof e.type&&"function"==typeof e.slice,u=(e,t,s,r)=>((t=t||{}).indices=!n(t.indices)&&t.indices,t.nullsAsUndefineds=!n(t.nullsAsUndefineds)&&t.nullsAsUndefineds,t.booleansAsIntegers=!n(t.booleansAsIntegers)&&t.booleansAsIntegers,t.allowEmptyArrays=!n(t.allowEmptyArrays)&&t.allowEmptyArrays,s=s||new FormData,n(e)||(null===e?t.nullsAsUndefineds||s.append(r,""):(e=>"boolean"==typeof e)(e)?t.booleansAsIntegers?s.append(r,e?1:0):s.append(r,e):c(e)?e.length?e.forEach(((e,o)=>{const i=r+"["+(t.indices?o:"")+"]";u(e,t,s,i)})):t.allowEmptyArrays&&s.append(r+"[]",""):(e=>e instanceof Date)(e)?s.append(r,e.toISOString()):!(e=>e===Object(e))(e)||(e=>l(e)&&"string"==typeof e.name&&("object"==typeof e.lastModifiedDate||"number"==typeof e.lastModified))(e)||l(e)?s.append(r,e):Object.keys(e).forEach((o=>{const i=e[o];if(c(i))for(;o.length>2&&o.lastIndexOf("[]")===o.length-2;)o=o.substring(0,o.length-2);u(i,t,s,r?r+"["+o+"]":o)}))),s);var h={serialize:u};function d(e){if(null===e||"object"!=typeof e)return e;const t=Array.isArray(e)?[]:{};return Object.keys(e).forEach((s=>{t[s]=d(e[s])})),t}function f(e){return Array.isArray(e)?e:[e]}function p(e){return e instanceof File||e instanceof Blob||e instanceof FileList||"object"==typeof e&&null!==e&&void 0!==Object.values(e).find((e=>p(e)))}class y{constructor(){this.errors={},this.errors={}}set(e,t){"object"==typeof e?this.errors=e:this.set(i(i({},this.errors),{[e]:f(t)}))}all(){return this.errors}has(e){return Object.prototype.hasOwnProperty.call(this.errors,e)}hasAny(...e){return e.some((e=>this.has(e)))}any(){return Object.keys(this.errors).length>0}get(e){if(this.has(e))return this.getAll(e)[0]}getAll(e){return f(this.errors[e]||[])}only(...e){const t=[];return e.forEach((e=>{const s=this.get(e);s&&t.push(s)})),t}flatten(){return Object.values(this.errors).reduce(((e,t)=>e.concat(t)),[])}clear(e){const t={};e&&Object.keys(this.errors).forEach((s=>{s!==e&&(t[s]=this.errors[s])})),this.set(t)}}class g{constructor(e={}){this.originalData={},this.busy=!1,this.successful=!1,this.recentlySuccessful=!1,this.recentlySuccessfulTimeoutId=void 0,this.errors=new y,this.progress=void 0,this.update(e)}static make(e){return new this(e)}update(e){this.originalData=Object.assign({},this.originalData,d(e)),Object.assign(this,e)}fill(e={}){this.keys().forEach((t=>{this[t]=e[t]}))}data(){return this.keys().reduce(((e,t)=>i(i({},e),{[t]:this[t]})),{})}keys(){return Object.keys(this).filter((e=>!g.ignore.includes(e)))}startProcessing(){this.errors.clear(),this.busy=!0,this.successful=!1,this.progress=void 0,this.recentlySuccessful=!1,clearTimeout(this.recentlySuccessfulTimeoutId)}finishProcessing(){this.busy=!1,this.successful=!0,this.progress=void 0,this.recentlySuccessful=!0,this.recentlySuccessfulTimeoutId=setTimeout((()=>{this.recentlySuccessful=!1}),g.recentlySuccessfulTimeout)}clear(){this.errors.clear(),this.successful=!1,this.recentlySuccessful=!1,this.progress=void 0,clearTimeout(this.recentlySuccessfulTimeoutId)}reset(){Object.keys(this).filter((e=>!g.ignore.includes(e))).forEach((e=>{this[e]=d(this.originalData[e])}))}get(e,t={}){return this.submit("get",e,t)}post(e,t={}){return this.submit("post",e,t)}patch(e,t={}){return this.submit("patch",e,t)}put(e,t={}){return this.submit("put",e,t)}delete(e,t={}){return this.submit("delete",e,t)}submit(e,t,s={}){return this.startProcessing(),s=i({data:{},params:{},url:this.route(t),method:e,onUploadProgress:this.handleUploadProgress.bind(this)},s),"get"===e.toLowerCase()?s.params=i(i({},this.data()),s.params):(s.data=i(i({},this.data()),s.data),p(s.data)&&!s.transformRequest&&(s.transformRequest=[e=>h.serialize(e)])),new Promise(((e,t)=>{(g.axios||axios__WEBPACK_IMPORTED_MODULE_0___default.a).request(s).then((t=>{this.finishProcessing(),e(t)})).catch((e=>{this.handleErrors(e),t(e)}))}))}handleErrors(e){this.busy=!1,this.progress=void 0,e.response&&this.errors.set(this.extractErrors(e.response))}extractErrors(e){return e.data&&"object"==typeof e.data?e.data.errors?i({},e.data.errors):e.data.message?{error:e.data.message}:i({},e.data):{error:g.errorMessage}}handleUploadProgress(e){this.progress={total:e.total,loaded:e.loaded,percentage:Math.round(100*e.loaded/e.total)}}route(e,t={}){let s=e;return Object.prototype.hasOwnProperty.call(g.routes,e)&&(s=decodeURI(g.routes[e])),"object"!=typeof t&&(t={id:t}),Object.keys(t).forEach((e=>{s=s.replace(`{${e}}`,t[e])})),s}onKeydown(e){const t=e.target;t.name&&this.errors.clear(t.name)}}g.routes={},g.errorMessage="Something went wrong. Please try again.",g.recentlySuccessfulTimeout=2e3,g.ignore=["busy","successful","errors","progress","originalData","recentlySuccessful","recentlySuccessfulTimeoutId"];/* harmony default export */ __webpack_exports__["default"] = (g);


/***/ }),

/***/ "../coreui/src/views/roles/EditRole.vue":
/*!**********************************************!*\
  !*** ../coreui/src/views/roles/EditRole.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EditRole_vue_vue_type_template_id_68013fdc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditRole.vue?vue&type=template&id=68013fdc& */ "../coreui/src/views/roles/EditRole.vue?vue&type=template&id=68013fdc&");
/* harmony import */ var _EditRole_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditRole.vue?vue&type=script&lang=js& */ "../coreui/src/views/roles/EditRole.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _EditRole_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EditRole.vue?vue&type=style&index=0&lang=css& */ "../coreui/src/views/roles/EditRole.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _laravel_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../laravel/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_laravel_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _EditRole_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EditRole_vue_vue_type_template_id_68013fdc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EditRole_vue_vue_type_template_id_68013fdc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "coreui/src/views/roles/EditRole.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "../coreui/src/views/roles/EditRole.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ../coreui/src/views/roles/EditRole.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _laravel_node_modules_babel_loader_lib_index_js_ref_4_0_laravel_node_modules_vue_loader_lib_index_js_vue_loader_options_EditRole_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../laravel/node_modules/babel-loader/lib??ref--4-0!../../../../laravel/node_modules/vue-loader/lib??vue-loader-options!./EditRole.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!../coreui/src/views/roles/EditRole.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_laravel_node_modules_babel_loader_lib_index_js_ref_4_0_laravel_node_modules_vue_loader_lib_index_js_vue_loader_options_EditRole_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "../coreui/src/views/roles/EditRole.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************!*\
  !*** ../coreui/src/views/roles/EditRole.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _laravel_node_modules_style_loader_index_js_laravel_node_modules_css_loader_index_js_ref_6_1_laravel_node_modules_vue_loader_lib_loaders_stylePostLoader_js_laravel_node_modules_postcss_loader_src_index_js_ref_6_2_laravel_node_modules_vue_loader_lib_index_js_vue_loader_options_EditRole_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../laravel/node_modules/style-loader!../../../../laravel/node_modules/css-loader??ref--6-1!../../../../laravel/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../laravel/node_modules/postcss-loader/src??ref--6-2!../../../../laravel/node_modules/vue-loader/lib??vue-loader-options!./EditRole.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!../coreui/src/views/roles/EditRole.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _laravel_node_modules_style_loader_index_js_laravel_node_modules_css_loader_index_js_ref_6_1_laravel_node_modules_vue_loader_lib_loaders_stylePostLoader_js_laravel_node_modules_postcss_loader_src_index_js_ref_6_2_laravel_node_modules_vue_loader_lib_index_js_vue_loader_options_EditRole_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_laravel_node_modules_style_loader_index_js_laravel_node_modules_css_loader_index_js_ref_6_1_laravel_node_modules_vue_loader_lib_loaders_stylePostLoader_js_laravel_node_modules_postcss_loader_src_index_js_ref_6_2_laravel_node_modules_vue_loader_lib_index_js_vue_loader_options_EditRole_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _laravel_node_modules_style_loader_index_js_laravel_node_modules_css_loader_index_js_ref_6_1_laravel_node_modules_vue_loader_lib_loaders_stylePostLoader_js_laravel_node_modules_postcss_loader_src_index_js_ref_6_2_laravel_node_modules_vue_loader_lib_index_js_vue_loader_options_EditRole_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _laravel_node_modules_style_loader_index_js_laravel_node_modules_css_loader_index_js_ref_6_1_laravel_node_modules_vue_loader_lib_loaders_stylePostLoader_js_laravel_node_modules_postcss_loader_src_index_js_ref_6_2_laravel_node_modules_vue_loader_lib_index_js_vue_loader_options_EditRole_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "../coreui/src/views/roles/EditRole.vue?vue&type=template&id=68013fdc&":
/*!*****************************************************************************!*\
  !*** ../coreui/src/views/roles/EditRole.vue?vue&type=template&id=68013fdc& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _laravel_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_laravel_node_modules_vue_loader_lib_index_js_vue_loader_options_EditRole_vue_vue_type_template_id_68013fdc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../laravel/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../laravel/node_modules/vue-loader/lib??vue-loader-options!./EditRole.vue?vue&type=template&id=68013fdc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!../coreui/src/views/roles/EditRole.vue?vue&type=template&id=68013fdc&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _laravel_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_laravel_node_modules_vue_loader_lib_index_js_vue_loader_options_EditRole_vue_vue_type_template_id_68013fdc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _laravel_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_laravel_node_modules_vue_loader_lib_index_js_vue_loader_options_EditRole_vue_vue_type_template_id_68013fdc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!../coreui/src/views/roles/EditRole.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!../coreui/src/views/roles/EditRole.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "../coreui/node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "../coreui/node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vform */ "../coreui/node_modules/vform/dist/vform.es.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      formData: new vform__WEBPACK_IMPORTED_MODULE_2__["default"]({
        name: "",
        slug: "",
        parent_id: "",
        is_parent: '0'
      })
    };
  },
  created: function created() {
    this.fetchData(this.$route.params.id);
    this.setMenus({
      id: this.$route.params.id
    });
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])("Roles/Index", ["item", "result", 'returnData', "menuTabs", "ajax_error"])),
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])("Roles/Index", ["updateData", "setMenus", "checkAllData", "checkData", "setFormStates", "fetchData"]), {
    submitForm: function submitForm() {
      var _this = this;

      this.updateData().then(function () {
        vue__WEBPACK_IMPORTED_MODULE_1___default.a.$toast.open({
          message: 'Role updated successfully',
          type: 'success'
        });

        _this.$router.push({
          name: "roles"
        });

        window.scrollTo(0, 0);
      })["catch"](function (error) {
        window.scrollTo(0, 0);
      });
    },
    checkAll: function checkAll(e) {
      var pid = e.target.getAttribute("pid");

      if (e.target.checked) {
        this.checkAllData({
          pid: pid,
          temp: 1
        });
      } else {
        this.checkAllData({
          pid: pid,
          temp: 0
        });
      }
    },
    updatePermissions: function updatePermissions(e) {
      var pid = e.target.getAttribute("pid");
      var cid = e.target.getAttribute("cid");

      if (e.target.checked) {
        this.checkData({
          pid: pid,
          cid: cid,
          temp: 1
        });
      } else {
        this.checkData({
          pid: pid,
          cid: cid,
          temp: 0
        });
      }
    },
    updateStates: function updateStates(e) {
      var fieldSet = e.target.getAttribute("name");
      var fieldValue = e.target.value;
      this.setFormStates(_defineProperty({}, fieldSet, fieldValue));
    }
  })
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!../coreui/src/views/roles/EditRole.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!../coreui/src/views/roles/EditRole.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../laravel/node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.role_flex{\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    margin-left: 30px;\n    margin-top: 10px;\n}\n.role_div h6 {\n    margin: 0;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    font-size: 13px;\n}\n.role_div h6 label {\n    margin: 0;\n}\nul.role_flex li label {\n    margin: 0;\n}\n.role_div h6 input {\n    margin-right: 7px;\n}\nul.role_flex li {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    margin-right: 25px;\n}\nul.role_flex li input {\n      margin-right: 7px;\n}\n.role_div {\n    padding: 8px 0;\n    border-bottom: 1px solid #ccc;\n}\n.role_div:last-child {\n    border-bottom: 0;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!../coreui/src/views/roles/EditRole.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!../coreui/src/views/roles/EditRole.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../laravel/node_modules/css-loader??ref--6-1!../../../../laravel/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../laravel/node_modules/postcss-loader/src??ref--6-2!../../../../laravel/node_modules/vue-loader/lib??vue-loader-options!./EditRole.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!../coreui/src/views/roles/EditRole.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../laravel/node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!../coreui/src/views/roles/EditRole.vue?vue&type=template&id=68013fdc&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!../coreui/src/views/roles/EditRole.vue?vue&type=template&id=68013fdc& ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "CRow",
        { staticClass: "m-0" },
        [
          _c("CCol", { staticClass: "p-2", attrs: { sm: "12" } }, [
            _c(
              "div",
              {
                staticClass: "d-flex justify-content-between align-items-center"
              },
              [
                _c(
                  "h5",
                  { staticClass: "mb-0" },
                  [
                    _vm._v("Role "),
                    _c("vue-fontawesome", {
                      staticClass: "px-1",
                      attrs: { icon: "caret-right", size: "1" }
                    }),
                    _vm._v("Update")
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  [
                    _c(
                      "CButton",
                      {
                        staticClass: "btn_custom",
                        on: { click: _vm.submitForm }
                      },
                      [_vm._v("Submit")]
                    ),
                    _vm._v(" "),
                    _c(
                      "router-link",
                      { attrs: { to: { name: "roles" } } },
                      [
                        _c("CButton", { attrs: { color: "light" } }, [
                          _vm._v("Back")
                        ])
                      ],
                      1
                    )
                  ],
                  1
                )
              ]
            )
          ]),
          _vm._v(" "),
          _c(
            "CCol",
            { staticClass: "px-2", attrs: { sm: "12" } },
            [
              _c(
                "CCard",
                [
                  _c("CCardHeader", { staticClass: "p-2 bg_themes" }, [
                    _c("strong", [_vm._v("Update Role")])
                  ]),
                  _vm._v(" "),
                  _c(
                    "CCardBody",
                    [
                      _c(
                        "CForm",
                        { attrs: { method: "POST" } },
                        [
                          _c(
                            "CRow",
                            { staticClass: "m-0" },
                            [
                              _c(
                                "CCol",
                                {
                                  staticClass: "form-group pt-2 px-2",
                                  attrs: { sm: "6", lg: "4", md: "6" }
                                },
                                [
                                  _c("label", [_vm._v("Role Name")]),
                                  _vm._v(" "),
                                  _c("input", {
                                    staticClass: "form-control",
                                    attrs: {
                                      type: "text",
                                      placeholder: "Enter Role Name",
                                      name: "title"
                                    },
                                    domProps: { value: _vm.item.title },
                                    on: { input: _vm.updateStates }
                                  })
                                ]
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "CRow",
                            { staticClass: "m-0" },
                            [
                              _c(
                                "CCol",
                                { staticClass: "px-2", attrs: { sm: "12" } },
                                [
                                  _c(
                                    "label",
                                    { staticClass: "font-weight-bold mb-0" },
                                    [_vm._v("Permissions")]
                                  ),
                                  _vm._v(" "),
                                  _c("hr", { staticClass: "mt-0 mb-2" }),
                                  _vm._v(" "),
                                  _vm._l(_vm.menuTabs.data, function(
                                    row,
                                    index
                                  ) {
                                    return _c(
                                      "div",
                                      { staticClass: "role_div" },
                                      [
                                        _c("h6", [
                                          _c("input", {
                                            attrs: {
                                              type: "checkbox",
                                              id: "chk" + row.parent.slug,
                                              name: "permission[]",
                                              pid: index
                                            },
                                            domProps: {
                                              value: row.parent.id,
                                              checked: row.parent.temp == 1
                                            },
                                            on: { change: _vm.checkAll }
                                          }),
                                          _vm._v(" "),
                                          _c(
                                            "label",
                                            {
                                              attrs: {
                                                for: "chk" + row.parent.slug
                                              }
                                            },
                                            [
                                              _vm._v(
                                                " " + _vm._s(row.parent.name)
                                              )
                                            ]
                                          )
                                        ]),
                                        _vm._v(" "),
                                        row.child.length > 0
                                          ? _c(
                                              "ul",
                                              { staticClass: "role_flex" },
                                              _vm._l(row.child, function(
                                                key,
                                                index1
                                              ) {
                                                return _c("li", [
                                                  _c("input", {
                                                    attrs: {
                                                      type: "checkbox",
                                                      id: "chk" + key.slug,
                                                      name: "permission[]",
                                                      pid: index,
                                                      cid: index1
                                                    },
                                                    domProps: {
                                                      value: key.id,
                                                      checked: key.temp == 1
                                                    },
                                                    on: {
                                                      change:
                                                        _vm.updatePermissions
                                                    }
                                                  }),
                                                  _vm._v(" "),
                                                  _c(
                                                    "label",
                                                    {
                                                      attrs: {
                                                        for: "chk" + key.slug
                                                      }
                                                    },
                                                    [
                                                      _vm._v(
                                                        " " + _vm._s(key.name)
                                                      )
                                                    ]
                                                  )
                                                ])
                                              }),
                                              0
                                            )
                                          : _vm._e()
                                      ]
                                    )
                                  })
                                ],
                                2
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);