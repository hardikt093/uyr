(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[59],{

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

/***/ "../coreui/src/global_helper/helpers.js":
/*!**********************************************!*\
  !*** ../coreui/src/global_helper/helpers.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  //Get Slug
  onlyNumric: function onlyNumric(evt) {
    evt = evt ? evt : window.event;
    var charCode = evt.which ? evt.which : evt.keyCode;

    if (charCode > 31 && (charCode < 48 || charCode > 57) && charCode !== 46) {
      evt.preventDefault();
    } else {
      return true;
    }
  },
  hashkey: function hashkey() {
    var randomstring = Math.random().toString(36).slice(-8);
    return randomstring;
  },
  isMobile: function isMobile() {
    var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || width < 768) {
      return true;
    } else {
      return false;
    }
  },
  VueMetaData: function VueMetaData(metaData) {},
  getPrice: function getPrice(val) {
    if (val >= 10000000) {
      val = (val / 10000000).toFixed(2);
      var num1 = val.split('.');

      if (num1[1] > 0) {
        var val = val + ' Cr';
      } else {
        var val = num1[0] + ' Cr';
      }
    } else if (val >= 100000) {
      var val = (val / 100000).toFixed(2);
      var num1 = val.split('.');

      if (num1[1] > 0) {
        var val = val + ' Lacs';
      } else {
        var val = num1[0] + ' Lacs';
      } //val = (val/100000).toFixed(2) + ' Lacs';

    } else if (val >= 1000) {
      var val = (val / 1000).toFixed(2);
      var num1 = val.split('.');

      if (num1[1] > 0) {
        var val = val + ' K';
      } else {
        var val = num1[0] + ' K';
      } //val = (val/1000).toFixed(2) + ' K';

    }

    return val;
  },
  isPhone: function isPhone(val) {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      return true;
    } else {
      return false;
    }
  }
};

/***/ }),

/***/ "../coreui/src/views/auth/doctorRegister.vue":
/*!***************************************************!*\
  !*** ../coreui/src/views/auth/doctorRegister.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _doctorRegister_vue_vue_type_template_id_2a5fc40f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./doctorRegister.vue?vue&type=template&id=2a5fc40f& */ "../coreui/src/views/auth/doctorRegister.vue?vue&type=template&id=2a5fc40f&");
/* harmony import */ var _doctorRegister_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./doctorRegister.vue?vue&type=script&lang=js& */ "../coreui/src/views/auth/doctorRegister.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _laravel_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../laravel/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_laravel_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _doctorRegister_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _doctorRegister_vue_vue_type_template_id_2a5fc40f___WEBPACK_IMPORTED_MODULE_0__["render"],
  _doctorRegister_vue_vue_type_template_id_2a5fc40f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "coreui/src/views/auth/doctorRegister.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "../coreui/src/views/auth/doctorRegister.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ../coreui/src/views/auth/doctorRegister.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _laravel_node_modules_babel_loader_lib_index_js_ref_4_0_laravel_node_modules_vue_loader_lib_index_js_vue_loader_options_doctorRegister_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../laravel/node_modules/babel-loader/lib??ref--4-0!../../../../laravel/node_modules/vue-loader/lib??vue-loader-options!./doctorRegister.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!../coreui/src/views/auth/doctorRegister.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_laravel_node_modules_babel_loader_lib_index_js_ref_4_0_laravel_node_modules_vue_loader_lib_index_js_vue_loader_options_doctorRegister_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "../coreui/src/views/auth/doctorRegister.vue?vue&type=template&id=2a5fc40f&":
/*!**********************************************************************************!*\
  !*** ../coreui/src/views/auth/doctorRegister.vue?vue&type=template&id=2a5fc40f& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _laravel_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_laravel_node_modules_vue_loader_lib_index_js_vue_loader_options_doctorRegister_vue_vue_type_template_id_2a5fc40f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../laravel/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../laravel/node_modules/vue-loader/lib??vue-loader-options!./doctorRegister.vue?vue&type=template&id=2a5fc40f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!../coreui/src/views/auth/doctorRegister.vue?vue&type=template&id=2a5fc40f&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _laravel_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_laravel_node_modules_vue_loader_lib_index_js_vue_loader_options_doctorRegister_vue_vue_type_template_id_2a5fc40f___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _laravel_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_laravel_node_modules_vue_loader_lib_index_js_vue_loader_options_doctorRegister_vue_vue_type_template_id_2a5fc40f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!../coreui/src/views/auth/doctorRegister.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!../coreui/src/views/auth/doctorRegister.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "../coreui/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "../coreui/node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vform */ "../coreui/node_modules/vform/dist/vform.es.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "../coreui/node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuex */ "../coreui/node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _global_helper_helpers_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../global_helper/helpers.js */ "../coreui/src/global_helper/helpers.js");
/* harmony import */ var _global_helper_helpers_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_global_helper_helpers_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var vue_toast_notification__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue-toast-notification */ "../coreui/node_modules/vue-toast-notification/dist/index.min.js");
/* harmony import */ var vue_toast_notification__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(vue_toast_notification__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var vue_toast_notification_dist_theme_sugar_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vue-toast-notification/dist/theme-sugar.css */ "../coreui/node_modules/vue-toast-notification/dist/theme-sugar.css");
/* harmony import */ var vue_toast_notification_dist_theme_sugar_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(vue_toast_notification_dist_theme_sugar_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _frontend_header__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../frontend/header */ "../coreui/src/views/frontend/header.vue");
/* harmony import */ var _frontend_footer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../frontend/footer */ "../coreui/src/views/frontend/footer.vue");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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









vue__WEBPACK_IMPORTED_MODULE_1___default.a.use(vue_toast_notification__WEBPACK_IMPORTED_MODULE_6___default.a);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Regiter",
  data: function data() {
    return {
      form: new vform__WEBPACK_IMPORTED_MODULE_2__["default"]({
        last_name: "",
        first_name: "",
        user_name: "",
        email: "",
        password: "",
        password_confirmation: "",
        phone_number: "",
        type: "doctor"
      }),
      status: "",
      message: "",
      isbtnDisabled: false,
      isSpinner: false,
      otpSentFlag: false,
      Custloader: "none",
      position: "right top",
      remember: false
    };
  },
  components: {
    Uheader: _frontend_header__WEBPACK_IMPORTED_MODULE_8__["default"],
    Ufooter: _frontend_footer__WEBPACK_IMPORTED_MODULE_9__["default"]
  },
  created: function created() {
    this.ajax_error.errors = [];
    this.fetchUser();
    setInterval(function () {
      $(".alertDiv").hide();
    }.bind(this), 20000);
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_4__["mapGetters"])("auth", ["returnData", "ajax_error", "userData"])),
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_4__["mapActions"])("auth", ["registerDoctor", "resetState", "fetchUser"]), {
    onlyNumric: function onlyNumric(evt) {
      return _global_helper_helpers_js__WEBPACK_IMPORTED_MODULE_5___default.a.onlyNumric(evt);
    },
    acceptNumber: function acceptNumber() {
      var x = this.form.phone_number.replace(/\D/g, "").match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
      this.form.phone_number = !x[2] ? x[1] : "" + x[1] + "-" + x[2] + (x[3] ? "-" + x[3] : "");
    },
    register: function () {
      var _register = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _this = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.isbtnDisabled = true;
                this.isSpinner = true;
                this.registerDoctor(this.form).then(function () {
                  if (_this.returnData.data.status == "success") {
                    vue__WEBPACK_IMPORTED_MODULE_1___default.a.$toast.open({
                      message: _this.returnData.data.message,
                      type: _this.returnData.data.status,
                      position: "top-right"
                    });

                    _this.$router.push({
                      name: "login"
                    })["catch"](function () {}); // if(this.returnData.data.isOtpSent == true){
                    //    this.otpSentFlag = true;
                    //    this.resetForm();
                    //    setTimeout(() => {
                    //       this.$router.push({ name : "verify-otp", params: { id: this.returnData.data.otpToken }}).catch(() => {});
                    //    }, 5000)
                    // }

                  }

                  _this.isbtnDisabled = false;
                  _this.isSpinner = false;
                })["catch"](function (error) {
                  _this.isbtnDisabled = false;
                  _this.isSpinner = false;
                });

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function register() {
        return _register.apply(this, arguments);
      }

      return register;
    }(),
    fetchUser: function () {
      var _fetchUser = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var _ref, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get("/api/get_user");

              case 3:
                _ref = _context2.sent;
                data = _ref.data;
                this.user = data;

                if (this.user != "") {
                  this.$router.push({
                    path: "dashboard"
                  });
                }

                _context2.next = 11;
                break;

              case 9:
                _context2.prev = 9;
                _context2.t0 = _context2["catch"](0);

              case 11:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 9]]);
      }));

      function fetchUser() {
        return _fetchUser.apply(this, arguments);
      }

      return fetchUser;
    }(),
    saveTokenUser: function () {
      var _saveTokenUser = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(token) {
        var self;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                self = this;
                this.$store.dispatch("auth/saveToken", {
                  token: token,
                  remember: this.remember
                });
                this.$store.dispatch("auth/fetchUser");
                this.$router.push({
                  path: "dashboard"
                });

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function saveTokenUser(_x) {
        return _saveTokenUser.apply(this, arguments);
      }

      return saveTokenUser;
    }()
  })
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!../coreui/src/views/auth/doctorRegister.vue?vue&type=template&id=2a5fc40f&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!../coreui/src/views/auth/doctorRegister.vue?vue&type=template&id=2a5fc40f& ***!
  \****************************************************************************************************************************************************************************************************************/
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
    {},
    [
      _c("Uheader"),
      _vm._v(" "),
      _c(
        "main",
        { staticClass: "pts" },
        [
          _c(
            "CContainer",
            { attrs: { fluid: "" } },
            [
              _c(
                "CRow",
                [
                  _c("CCol", { attrs: { lg: "6" } }, [
                    _c("div", { staticClass: "login_logoo" }, [
                      _c("img", {
                        attrs: {
                          src: "images/uyr_logo.png",
                          alt: "Logo",
                          width: "200px"
                        }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("CCol", { attrs: { lg: "6" } }, [
                    _c(
                      "div",
                      { staticClass: "log_head" },
                      [
                        _c(
                          "CButton",
                          { attrs: { to: "register", size: "sm" } },
                          [
                            _c("vue-fontawesome", {
                              staticClass: "mr-2 my-0",
                              attrs: { icon: "user-md", size: "1.1" }
                            }),
                            _vm._v("for user")
                          ],
                          1
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _vm.otpSentFlag
                      ? _c(
                          "div",
                          {
                            staticClass:
                              "register_section justify-content-center"
                          },
                          [
                            _c("div", { staticClass: "gif_check_animation" }, [
                              _c(
                                "svg",
                                {
                                  staticClass: "checkmark",
                                  attrs: {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    viewBox: "0 0 52 52"
                                  }
                                },
                                [
                                  _c("circle", {
                                    staticClass: "checkmark__circle",
                                    attrs: {
                                      cx: "26",
                                      cy: "26",
                                      r: "25",
                                      fill: "none"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("path", {
                                    staticClass: "checkmark__check",
                                    attrs: {
                                      fill: "none",
                                      d: "M14.1 27.2l7.1 7.2 16.7-16.8"
                                    }
                                  })
                                ]
                              ),
                              _vm._v(" "),
                              _c("h2", [_vm._v("OTP Sent")]),
                              _vm._v(" "),
                              _c("p", { staticClass: "text-center" }, [
                                _vm._v(
                                  "A One Time Password(OTP) has been sent to your registered Email Id"
                                )
                              ])
                            ])
                          ]
                        )
                      : _c("div", { staticClass: "register_section" }, [
                          _c(
                            "div",
                            { staticClass: "register_form login_form" },
                            [
                              _c("div", { staticClass: "text-center" }, [
                                _c("h2", [_vm._v("Doctor Register Form")])
                              ]),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "l_form" },
                                [
                                  _c(
                                    "CForm",
                                    {
                                      staticClass: "validate-form",
                                      on: {
                                        submit: function($event) {
                                          $event.preventDefault()
                                          return _vm.register.apply(
                                            null,
                                            arguments
                                          )
                                        },
                                        keydown: function($event) {
                                          return _vm.form.onKeydown($event)
                                        }
                                      }
                                    },
                                    [
                                      _c(
                                        "CRow",
                                        [
                                          _c("CCol", { attrs: { sm: "6" } }, [
                                            _c(
                                              "div",
                                              { staticClass: "pos_relative" },
                                              [
                                                _c("CInput", {
                                                  staticClass:
                                                    "cust-form-cont mb-0",
                                                  class: [
                                                    _vm.ajax_error.errors
                                                      .first_name
                                                      ? "formError"
                                                      : ""
                                                  ],
                                                  attrs: {
                                                    label: "First Name*",
                                                    type: "text",
                                                    placeholder: "First Name",
                                                    autocomplete: ""
                                                  },
                                                  model: {
                                                    value: _vm.form.first_name,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        _vm.form,
                                                        "first_name",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "form.first_name"
                                                  }
                                                }),
                                                _vm._v(" "),
                                                _vm.ajax_error.errors.first_name
                                                  ? _c(
                                                      "small",
                                                      {
                                                        staticClass:
                                                          "text-danger mb-0"
                                                      },
                                                      [
                                                        _vm._v(
                                                          "\n                        " +
                                                            _vm._s(
                                                              _vm.ajax_error
                                                                .errors
                                                                .first_name[0]
                                                            ) +
                                                            "\n                      "
                                                        )
                                                      ]
                                                    )
                                                  : _vm._e()
                                              ],
                                              1
                                            )
                                          ]),
                                          _vm._v(" "),
                                          _c("CCol", { attrs: { sm: "6" } }, [
                                            _c(
                                              "div",
                                              { staticClass: "pos_relative" },
                                              [
                                                _c("CInput", {
                                                  staticClass:
                                                    "cust-form-cont mb-0",
                                                  class: [
                                                    _vm.ajax_error.errors
                                                      .last_name
                                                      ? "formError"
                                                      : ""
                                                  ],
                                                  attrs: {
                                                    label: "Last Name*",
                                                    type: "text",
                                                    placeholder: "Last Name",
                                                    autocomplete: ""
                                                  },
                                                  model: {
                                                    value: _vm.form.last_name,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        _vm.form,
                                                        "last_name",
                                                        $$v
                                                      )
                                                    },
                                                    expression: "form.last_name"
                                                  }
                                                }),
                                                _vm._v(" "),
                                                _vm.ajax_error.errors.last_name
                                                  ? _c(
                                                      "small",
                                                      {
                                                        staticClass:
                                                          "text-danger mb-0"
                                                      },
                                                      [
                                                        _vm._v(
                                                          "\n                        " +
                                                            _vm._s(
                                                              _vm.ajax_error
                                                                .errors
                                                                .last_name[0]
                                                            ) +
                                                            "\n                      "
                                                        )
                                                      ]
                                                    )
                                                  : _vm._e()
                                              ],
                                              1
                                            )
                                          ]),
                                          _vm._v(" "),
                                          _c("CCol", { attrs: { sm: "6" } }, [
                                            _c(
                                              "div",
                                              { staticClass: "pos_relative" },
                                              [
                                                _c("CInput", {
                                                  staticClass:
                                                    "cust-form-cont mb-0",
                                                  class: [
                                                    _vm.ajax_error.errors.email
                                                      ? "formError"
                                                      : ""
                                                  ],
                                                  attrs: {
                                                    label: "Email ID*",
                                                    placeholder:
                                                      "test@exmaple.com",
                                                    type: "email",
                                                    autocomplete: ""
                                                  },
                                                  model: {
                                                    value: _vm.form.email,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        _vm.form,
                                                        "email",
                                                        $$v
                                                      )
                                                    },
                                                    expression: "form.email"
                                                  }
                                                }),
                                                _vm._v(" "),
                                                _vm.ajax_error.errors.email
                                                  ? _c(
                                                      "small",
                                                      {
                                                        staticClass:
                                                          "text-danger mb-0"
                                                      },
                                                      [
                                                        _vm._v(
                                                          "\n                        " +
                                                            _vm._s(
                                                              _vm.ajax_error
                                                                .errors.email[0]
                                                            ) +
                                                            "\n                      "
                                                        )
                                                      ]
                                                    )
                                                  : _vm._e()
                                              ],
                                              1
                                            )
                                          ]),
                                          _vm._v(" "),
                                          _c("CCol", { attrs: { sm: "6" } }, [
                                            _c(
                                              "div",
                                              { staticClass: "pos_relative" },
                                              [
                                                _c("CInput", {
                                                  staticClass:
                                                    "cust-form-cont mb-0",
                                                  class: [
                                                    _vm.ajax_error.errors
                                                      .phone_number
                                                      ? "formError"
                                                      : ""
                                                  ],
                                                  attrs: {
                                                    label: "Phone No.*",
                                                    maxlength: "12",
                                                    placeholder: "9876543210",
                                                    type: "tel",
                                                    autocomplete: ""
                                                  },
                                                  on: {
                                                    blur: _vm.acceptNumber,
                                                    input: _vm.acceptNumber,
                                                    keypress: function($event) {
                                                      return _vm.onlyNumric(
                                                        $event
                                                      )
                                                    }
                                                  },
                                                  model: {
                                                    value:
                                                      _vm.form.phone_number,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        _vm.form,
                                                        "phone_number",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "form.phone_number"
                                                  }
                                                }),
                                                _vm._v(" "),
                                                _vm.ajax_error.errors
                                                  .phone_number
                                                  ? _c(
                                                      "small",
                                                      {
                                                        staticClass:
                                                          "text-danger mb-0"
                                                      },
                                                      [
                                                        _vm._v(
                                                          "\n                        " +
                                                            _vm._s(
                                                              _vm.ajax_error
                                                                .errors
                                                                .phone_number[0]
                                                            ) +
                                                            "\n                      "
                                                        )
                                                      ]
                                                    )
                                                  : _vm._e()
                                              ],
                                              1
                                            )
                                          ]),
                                          _vm._v(" "),
                                          _c("CCol", { attrs: { sm: "6" } }, [
                                            _c(
                                              "div",
                                              { staticClass: "pos_relative" },
                                              [
                                                _c("CInput", {
                                                  staticClass:
                                                    "cust-form-cont mb-0",
                                                  class: [
                                                    _vm.ajax_error.errors
                                                      .password
                                                      ? "formError"
                                                      : ""
                                                  ],
                                                  attrs: {
                                                    name: "password",
                                                    label: "Password*",
                                                    placeholder: "*******",
                                                    type: "password",
                                                    autocomplete: ""
                                                  },
                                                  model: {
                                                    value: _vm.form.password,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        _vm.form,
                                                        "password",
                                                        $$v
                                                      )
                                                    },
                                                    expression: "form.password"
                                                  }
                                                }),
                                                _vm._v(" "),
                                                _vm.ajax_error.errors.password
                                                  ? _c(
                                                      "small",
                                                      {
                                                        staticClass:
                                                          "text-danger mb-0"
                                                      },
                                                      [
                                                        _vm._v(
                                                          "\n                        " +
                                                            _vm._s(
                                                              _vm.ajax_error
                                                                .errors
                                                                .password[0]
                                                            ) +
                                                            "\n                      "
                                                        )
                                                      ]
                                                    )
                                                  : _vm._e()
                                              ],
                                              1
                                            )
                                          ]),
                                          _vm._v(" "),
                                          _c("CCol", { attrs: { sm: "6" } }, [
                                            _c(
                                              "div",
                                              { staticClass: "pos_relative" },
                                              [
                                                _c("CInput", {
                                                  staticClass:
                                                    "cust-form-cont mb-0",
                                                  class: [
                                                    _vm.ajax_error.errors
                                                      .password_confirmation
                                                      ? "formError"
                                                      : ""
                                                  ],
                                                  attrs: {
                                                    name:
                                                      "password_confirmation",
                                                    label: "Confirm Password*",
                                                    placeholder: "*******",
                                                    type: "password",
                                                    autocomplete: ""
                                                  },
                                                  model: {
                                                    value:
                                                      _vm.form
                                                        .password_confirmation,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        _vm.form,
                                                        "password_confirmation",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "form.password_confirmation"
                                                  }
                                                }),
                                                _vm._v(" "),
                                                _vm.ajax_error.errors
                                                  .password_confirmation
                                                  ? _c(
                                                      "small",
                                                      {
                                                        staticClass:
                                                          "text-danger mb-0"
                                                      },
                                                      [
                                                        _vm._v(
                                                          "\n                        " +
                                                            _vm._s(
                                                              _vm.ajax_error
                                                                .errors
                                                                .password_confirmation[0]
                                                            ) +
                                                            "\n                      "
                                                        )
                                                      ]
                                                    )
                                                  : _vm._e()
                                              ],
                                              1
                                            )
                                          ])
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "CRow",
                                        [
                                          _c(
                                            "CCol",
                                            {
                                              staticClass: "text-center",
                                              attrs: { col: "12" }
                                            },
                                            [
                                              _c(
                                                "CButton",
                                                {
                                                  staticClass: "submitbtn btn",
                                                  attrs: {
                                                    disabled: _vm.isbtnDisabled,
                                                    type: "submit"
                                                  }
                                                },
                                                [
                                                  _vm.isSpinner
                                                    ? _c("span", {
                                                        staticClass:
                                                          "spinner-border spinner-border-sm",
                                                        attrs: {
                                                          role: "status",
                                                          "aria-hidden": "true"
                                                        }
                                                      })
                                                    : _vm._e(),
                                                  _vm._v(" Register")
                                                ]
                                              )
                                            ],
                                            1
                                          )
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c("CRow")
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                            ]
                          )
                        ])
                  ])
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("Ufooter")
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);