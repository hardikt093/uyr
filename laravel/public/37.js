(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[37],{

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

/***/ "../coreui/src/views/appointment/checkout.vue":
/*!****************************************************!*\
  !*** ../coreui/src/views/appointment/checkout.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _checkout_vue_vue_type_template_id_321c0580___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkout.vue?vue&type=template&id=321c0580& */ "../coreui/src/views/appointment/checkout.vue?vue&type=template&id=321c0580&");
/* harmony import */ var _checkout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkout.vue?vue&type=script&lang=js& */ "../coreui/src/views/appointment/checkout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _checkout_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checkout.vue?vue&type=style&index=0&lang=css& */ "../coreui/src/views/appointment/checkout.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _laravel_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../laravel/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_laravel_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _checkout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _checkout_vue_vue_type_template_id_321c0580___WEBPACK_IMPORTED_MODULE_0__["render"],
  _checkout_vue_vue_type_template_id_321c0580___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "coreui/src/views/appointment/checkout.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "../coreui/src/views/appointment/checkout.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ../coreui/src/views/appointment/checkout.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _laravel_node_modules_babel_loader_lib_index_js_ref_4_0_laravel_node_modules_vue_loader_lib_index_js_vue_loader_options_checkout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../laravel/node_modules/babel-loader/lib??ref--4-0!../../../../laravel/node_modules/vue-loader/lib??vue-loader-options!./checkout.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!../coreui/src/views/appointment/checkout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_laravel_node_modules_babel_loader_lib_index_js_ref_4_0_laravel_node_modules_vue_loader_lib_index_js_vue_loader_options_checkout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "../coreui/src/views/appointment/checkout.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************!*\
  !*** ../coreui/src/views/appointment/checkout.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _laravel_node_modules_style_loader_index_js_laravel_node_modules_css_loader_index_js_ref_6_1_laravel_node_modules_vue_loader_lib_loaders_stylePostLoader_js_laravel_node_modules_postcss_loader_src_index_js_ref_6_2_laravel_node_modules_vue_loader_lib_index_js_vue_loader_options_checkout_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../laravel/node_modules/style-loader!../../../../laravel/node_modules/css-loader??ref--6-1!../../../../laravel/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../laravel/node_modules/postcss-loader/src??ref--6-2!../../../../laravel/node_modules/vue-loader/lib??vue-loader-options!./checkout.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!../coreui/src/views/appointment/checkout.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _laravel_node_modules_style_loader_index_js_laravel_node_modules_css_loader_index_js_ref_6_1_laravel_node_modules_vue_loader_lib_loaders_stylePostLoader_js_laravel_node_modules_postcss_loader_src_index_js_ref_6_2_laravel_node_modules_vue_loader_lib_index_js_vue_loader_options_checkout_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_laravel_node_modules_style_loader_index_js_laravel_node_modules_css_loader_index_js_ref_6_1_laravel_node_modules_vue_loader_lib_loaders_stylePostLoader_js_laravel_node_modules_postcss_loader_src_index_js_ref_6_2_laravel_node_modules_vue_loader_lib_index_js_vue_loader_options_checkout_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _laravel_node_modules_style_loader_index_js_laravel_node_modules_css_loader_index_js_ref_6_1_laravel_node_modules_vue_loader_lib_loaders_stylePostLoader_js_laravel_node_modules_postcss_loader_src_index_js_ref_6_2_laravel_node_modules_vue_loader_lib_index_js_vue_loader_options_checkout_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _laravel_node_modules_style_loader_index_js_laravel_node_modules_css_loader_index_js_ref_6_1_laravel_node_modules_vue_loader_lib_loaders_stylePostLoader_js_laravel_node_modules_postcss_loader_src_index_js_ref_6_2_laravel_node_modules_vue_loader_lib_index_js_vue_loader_options_checkout_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "../coreui/src/views/appointment/checkout.vue?vue&type=template&id=321c0580&":
/*!***********************************************************************************!*\
  !*** ../coreui/src/views/appointment/checkout.vue?vue&type=template&id=321c0580& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _laravel_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_laravel_node_modules_vue_loader_lib_index_js_vue_loader_options_checkout_vue_vue_type_template_id_321c0580___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../laravel/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../laravel/node_modules/vue-loader/lib??vue-loader-options!./checkout.vue?vue&type=template&id=321c0580& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!../coreui/src/views/appointment/checkout.vue?vue&type=template&id=321c0580&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _laravel_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_laravel_node_modules_vue_loader_lib_index_js_vue_loader_options_checkout_vue_vue_type_template_id_321c0580___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _laravel_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_laravel_node_modules_vue_loader_lib_index_js_vue_loader_options_checkout_vue_vue_type_template_id_321c0580___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!../coreui/src/views/appointment/checkout.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!../coreui/src/views/appointment/checkout.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "../coreui/node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "../coreui/node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vform */ "../coreui/node_modules/vform/dist/vform.es.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "../coreui/node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
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





/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      formData: new vform__WEBPACK_IMPORTED_MODULE_2__["default"]({
        id: "",
        fname: '',
        lname: '',
        phone: '',
        email: '',
        payment_type: '',
        item_order: '',
        appointment_id: '',
        patient_id: ""
      }),
      markers: [],
      doctorData: [],
      appointmentData: [],
      loader_flag: false,
      appointment_id: "",
      isActive: false
    };
  },
  created: function created() {
    if (this.$route.params.appointment_id != '') {
      this.formData.appointment_id = this.$route.params.appointment_id;
      localStorage.setItem('appointment_id', this.$route.params.appointment_id);
      this.getBookingInfo(this.$route.params.appointment_id);
    }

    if (this.$route.params.patient_id != '') {
      this.formData.patient_id = this.$route.params.patient_id;
      localStorage.setItem('patient_id', this.$route.params.patient_id);
    }
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])("Appointment/Index", ["result", "paymentData"])),
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])("Appointment/Index", ["getBookingData", "orderPayment"]), {
    //...mapActions("Payment/Index", ["orderPayment"]),
    getBookingInfo: function getBookingInfo(id) {
      var _this = this;

      this.getBookingData(id).then(function () {
        //this.doctorData =  this.result.doctorData ;
        _this.appointmentData = _this.result.appointmentData;
      });
    },
    goToPaypalWallet: function goToPaypalWallet(payment_type) {
      this.isActive = true;
      this.formData.payment_type = payment_type;

      if (this.formData.fname == '' || this.formData.lname == '' || this.formData.email == '' || this.formData.phone == '') {
        vue__WEBPACK_IMPORTED_MODULE_1___default.a.$toast.open({
          message: 'Please fill out all required fields.',
          type: 'error'
        });
      } else {
        this.submitPaymentForm();
      }
    },
    submitPaymentForm: function submitPaymentForm() {
      var _this2 = this;

      this.isActive = true;
      this.formData.appointment_id = this.$route.params.appointment_id;
      this.orderPayment(this.formData).then(function () {
        if (_this2.paymentData.status == 'success') {
          _this2.isActive = false;

          if (_this2.formData.payment_type == 1) {
            localStorage.setItem('appointment_id', _this2.$route.params.appointment_id);
            localStorage.setItem('patient_id', _this2.$route.params.patient_id);
            window.location.href = _this2.paymentData.url;
          } else {
            _this2.appointment_id = localStorage.getItem("appointment_id");

            _this2.$router.push({
              name: 'booking-success',
              params: {
                "appointment_id": _this2.appointment_id
              }
            }); // this.$router.push({ name: 'booking-success'});

          }
        }
      })["catch"](function (error) {
        _this2.btnDisable = false;
        _this2.paypal_status = 'error';
        $(".option_paypal").removeClass("div_disabled");
        _this2.loader_flag = false;
      });
    }
  })
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!../coreui/src/views/appointment/checkout.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!../coreui/src/views/appointment/checkout.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../laravel/node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.payment-radio {\n   display: block;\n   position: relative;\n   /*padding-left: 35px;*/\n   margin-bottom: 12px;\n   cursor: pointer;\n   font-size: 16px;\n   -webkit-user-select: none;\n      -moz-user-select: none;\n       -ms-user-select: none;\n           user-select: none;\n   font-weight: 600;\n   color: #272b41;\n   text-transform: capitalize;\n   height: 100px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n}\n.payment_widget h4 {\n   font-size: 18px;\n   font-weight: 500;\n}\n.payment-radio input {\n   position: absolute;\n   opacity: 0;\n   cursor: pointer;\n   height: 0;\n   width: 0;\n}\n.pay_icon {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    color: #ccc\n}\n.payment-radio input:checked~.checkmark {\n    border-color: #6dcf8d;\n    -webkit-box-shadow: 0 0 8px 0px #2eb85ca1;\n            box-shadow: 0 0 8px 0px #2eb85ca1;\n    color: #2eb85c;\n    background: #f2fff6;\n}\n.payment-radio input:checked~.pay_icon {\n       color: #2eb85c;\n       z-index: 1;\n}\n   /*.payment-radio input:checked~.checkmark::after {\n   transform: translate(-50%, -50%) scale(1);\n   opacity: 1;\n   visibility: visible;\n   }\n   .payment-radio .checkmark::after {\n   position: absolute;\n   left: 50%;\n   top: 50%;\n   content: '';\n   width: 9px;\n   height: 9px;\n   background-color: #2c449e;\n   opacity: 0;\n   visibility: hidden;\n   transform:  translate(-50%, -50%) scale(.1) ;\n   border-radius: 50%;\n   transition: all .3s;\n   }*/\n.payment-radio .checkmark {\n   position: absolute;\n   top: 0;\n   left: 0;\n   width: 100%;\n   height: 100%;\n   margin: 3px 0 0;\n   border: 2px solid #ddd;\n   border-radius: 8px;\n   -webkit-transition: all .3s;\n   transition: all .3s;\n}\n.card_lable>label {\n   background-color: #fff;\n   color: #959595;\n   display: inline-block;\n   font-size: 13px;\n   font-weight: 500;\n   margin: 6px auto auto 8px;\n   padding: 0 7px;\n}\n.card_lable>input {\n   background-color: #fff;\n   border: 1px solid #dbdbdb;\n   border-radius: 4px;\n   -webkit-box-shadow: 0 1px 3px 0 rgb(0 0 0 / 5%);\n           box-shadow: 0 1px 3px 0 rgb(0 0 0 / 5%);\n   display: block;\n   height: 50px;\n   margin-top: -13px;\n   padding: 5px 15px 0;\n   -webkit-transition: border-color .3s;\n   transition: border-color .3s;\n   width: 100%;\n}\n.terms-accept .custom-checkbox {\n   display: -webkit-box;\n   display: -ms-flexbox;\n   display: flex;\n   -webkit-box-align: center;\n       -ms-flex-align: center;\n           align-items: center;\n}\n.payment-list{\n   margin-bottom: 15px;\n}\n.booking-total {\n   border-top: 1px solid #e4e4e4;\n   margin-top: 20px;\n   padding-top: 20px;\n}\n.booking-fee li,\n   .booking-date li {\n   position: relative;\n   font-size: 14px;\n   font-weight: 500;\n   color: #272b41;\n   text-transform: capitalize;\n   margin-bottom: 15px;\n}\n.booking-fee li span,\n   .booking-date li span {\n   float: right;\n   color: #757575;\n   font-weight: 400;\n   font-size: 15px;\n}\n.booking-total ul li span {\n   font-size: 18px;\n   font-weight: 600;\n   color: #272b41;\n}\n.booking-total ul li .total-cost {\n   color: #2c449e;\n   font-size: 16px;\n   float: right;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!../coreui/src/views/appointment/checkout.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!../coreui/src/views/appointment/checkout.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../laravel/node_modules/css-loader??ref--6-1!../../../../laravel/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../laravel/node_modules/postcss-loader/src??ref--6-2!../../../../laravel/node_modules/vue-loader/lib??vue-loader-options!./checkout.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!../coreui/src/views/appointment/checkout.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!../coreui/src/views/appointment/checkout.vue?vue&type=template&id=321c0580&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!../coreui/src/views/appointment/checkout.vue?vue&type=template&id=321c0580& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
        { staticClass: "mx-0 justify-content-center" },
        [
          _c("CCol", { staticClass: "p-2", attrs: { sm: "12" } }, [
            _c(
              "div",
              {
                staticClass: "d-flex justify-content-between align-items-center"
              },
              [
                _c("h5", { staticClass: "mb-0" }, [_vm._v("Checkout")]),
                _vm._v(" "),
                _vm.result.appointmentData &&
                _vm.result.appointmentData.doctor_informationID
                  ? _c(
                      "router-link",
                      {
                        attrs: {
                          to: {
                            name: "view_doctor_patient",
                            params: {
                              id:
                                _vm.result.appointmentData.doctor_informationID,
                              doctor_suggest_id:
                                _vm.result.appointmentData.doctor_suggest_id
                            }
                          }
                        }
                      },
                      [
                        _c("CButton", { attrs: { color: "light" } }, [
                          _vm._v("\n                  Back\n               ")
                        ])
                      ],
                      1
                    )
                  : _vm._e()
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c(
            "CCol",
            { staticClass: "px-2", attrs: { md: "5" } },
            [
              _c(
                "CCard",
                {},
                [
                  _c("CCardBody", { staticClass: "p-4" }, [
                    _c("div", { staticClass: "payment_widget" }, [
                      _c("h4", { staticClass: "mb-3" }, [
                        _vm._v("Personal Information")
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "payment-list" },
                        [
                          _c(
                            "CRow",
                            [
                              _c("CCol", { attrs: { md: "6" } }, [
                                _c(
                                  "div",
                                  { staticClass: "form-group card_lable" },
                                  [
                                    _c("label", [_vm._v("First Name")]),
                                    _vm._v(" "),
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.formData.fname,
                                          expression: "formData.fname"
                                        }
                                      ],
                                      staticClass: "form-control",
                                      attrs: {
                                        type: "text",
                                        placeholder: "First Name"
                                      },
                                      domProps: { value: _vm.formData.fname },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.formData,
                                            "fname",
                                            $event.target.value
                                          )
                                        }
                                      }
                                    })
                                  ]
                                )
                              ]),
                              _vm._v(" "),
                              _c("CCol", { attrs: { md: "6" } }, [
                                _c(
                                  "div",
                                  { staticClass: "form-group card_lable" },
                                  [
                                    _c("label", [_vm._v("Last Name")]),
                                    _vm._v(" "),
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.formData.lname,
                                          expression: "formData.lname"
                                        }
                                      ],
                                      staticClass: "form-control",
                                      attrs: {
                                        type: "text",
                                        placeholder: "Last Name"
                                      },
                                      domProps: { value: _vm.formData.lname },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.formData,
                                            "lname",
                                            $event.target.value
                                          )
                                        }
                                      }
                                    })
                                  ]
                                )
                              ]),
                              _vm._v(" "),
                              _c("CCol", { attrs: { md: "6" } }, [
                                _c(
                                  "div",
                                  { staticClass: "form-group card_lable" },
                                  [
                                    _c("label", [_vm._v("Email")]),
                                    _vm._v(" "),
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.formData.email,
                                          expression: "formData.email"
                                        }
                                      ],
                                      staticClass: "form-control",
                                      attrs: {
                                        type: "text",
                                        placeholder: "Email"
                                      },
                                      domProps: { value: _vm.formData.email },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.formData,
                                            "email",
                                            $event.target.value
                                          )
                                        }
                                      }
                                    })
                                  ]
                                )
                              ]),
                              _vm._v(" "),
                              _c("CCol", { attrs: { md: "6" } }, [
                                _c(
                                  "div",
                                  { staticClass: "form-group card_lable" },
                                  [
                                    _c("label", [_vm._v("Phone")]),
                                    _vm._v(" "),
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.formData.phone,
                                          expression: "formData.phone"
                                        }
                                      ],
                                      staticClass: "form-control",
                                      attrs: {
                                        type: "text",
                                        placeholder: "Phone"
                                      },
                                      domProps: { value: _vm.formData.phone },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.formData,
                                            "phone",
                                            $event.target.value
                                          )
                                        }
                                      }
                                    })
                                  ]
                                )
                              ]),
                              _vm._v(" "),
                              _c("CCol", { attrs: { md: "12" } }, [
                                _c(
                                  "div",
                                  {
                                    staticClass: "submit_sect mt-3 text-right"
                                  },
                                  [
                                    _c(
                                      "CButton",
                                      {
                                        staticClass: "btn_custom",
                                        attrs: {
                                          type: "button",
                                          disabled: _vm.isActive
                                        },
                                        on: {
                                          click: function($event) {
                                            return _vm.goToPaypalWallet(1)
                                          }
                                        }
                                      },
                                      [_vm._v("Confirm & Pay")]
                                    )
                                  ],
                                  1
                                )
                              ])
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ])
                  ])
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "CCol",
            { staticClass: "px-2", attrs: { md: "4" } },
            [
              _c(
                "CCard",
                {},
                [
                  _c("CCardHeader", { staticClass: "p-3" }, [
                    _c("h6", { staticClass: "m-0" }, [
                      _vm._v("Booking Summary")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("CCardBody", { staticClass: "p-3" }, [
                    _c("div", { staticClass: "doctorlist_card mb-3" }, [
                      _c(
                        "div",
                        { staticClass: "doctor_information pr-2 ml-0" },
                        [
                          _c("h6", [_vm._v("Doctor Info")]),
                          _vm._v(" "),
                          _c("p", [
                            _c(
                              "strong",
                              [
                                _c("vue-fontawesome", {
                                  staticClass: "mr-1 my-0",
                                  attrs: { icon: "user-md", size: "0.9" }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c("span", [
                              _vm._v(_vm._s(_vm.appointmentData.doctorName))
                            ])
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "rating" }, [
                            _c("i", { staticClass: "fa fa-star filled" }),
                            _vm._v(" "),
                            _c("i", { staticClass: "fa fa-star filled" }),
                            _vm._v(" "),
                            _c("i", { staticClass: "fa fa-star filled" }),
                            _vm._v(" "),
                            _c("i", { staticClass: "fa fa-star filled" }),
                            _vm._v(" "),
                            _c("i", { staticClass: "fa fa-star" })
                          ]),
                          _vm._v(" "),
                          _c("p", [
                            _c("strong", [_vm._v("Type:")]),
                            _vm._v(" "),
                            _c("span", [
                              _vm._v(_vm._s(_vm.appointmentData.doctortype))
                            ])
                          ]),
                          _vm._v(" "),
                          _c("p", [
                            _c(
                              "strong",
                              [
                                _c("vue-fontawesome", {
                                  staticClass: "mr-1 my-0",
                                  attrs: { icon: "map-marker", size: "0.9" }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c("span", [_vm._v("Newyork, USA")])
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass:
                            "doctor_information patient_info_che ml-0"
                        },
                        [
                          _c("h6", [_vm._v("Patient Info")]),
                          _vm._v(" "),
                          _c("p", [
                            _c(
                              "strong",
                              [
                                _c("vue-fontawesome", {
                                  staticClass: "mr-1 my-0",
                                  attrs: { icon: "user", size: "0.9" }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c("span", [
                              _vm._v(_vm._s(_vm.appointmentData.patientName))
                            ])
                          ]),
                          _vm._v(" "),
                          _c("p", [
                            _c(
                              "strong",
                              [
                                _c("vue-fontawesome", {
                                  staticClass: "mr-1 my-0",
                                  attrs: { icon: "map-marker", size: "0.9" }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c("span", [_vm._v("Newyork, USA")])
                          ])
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "booking-summary" }, [
                      _c("div", { staticClass: "booking-item-wrap" }, [
                        _c("ul", { staticClass: "booking-date" }, [
                          _c("li", [
                            _vm._v("Date "),
                            _c("span", [
                              _vm._v(
                                _vm._s(_vm.appointmentData.appointment_date)
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c("li", [
                            _vm._v("Time "),
                            _c("span", [
                              _vm._v(
                                _vm._s(_vm.appointmentData.appointment_time)
                              )
                            ])
                          ])
                        ]),
                        _vm._v(" "),
                        _c("ul", { staticClass: "booking-fee" }, [
                          _c("li", [
                            _vm._v("Booking Fee "),
                            _c("span", [
                              _vm._v(
                                _vm._s(_vm.appointmentData.fees_amount) + "/-"
                              )
                            ])
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "booking-total" }, [
                          _c("ul", { staticClass: "booking-total-list" }, [
                            _c("li", [
                              _c("span", [_vm._v("Total")]),
                              _vm._v(" "),
                              _c("span", { staticClass: "total-cost" }, [
                                _vm._v(
                                  _vm._s(_vm.appointmentData.fees_amount) + "/-"
                                )
                              ])
                            ])
                          ])
                        ])
                      ])
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
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);