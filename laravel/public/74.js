(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[74],{

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

/***/ "../coreui/src/views/patient/patientBooking.vue":
/*!******************************************************!*\
  !*** ../coreui/src/views/patient/patientBooking.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _patientBooking_vue_vue_type_template_id_58c17e30___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./patientBooking.vue?vue&type=template&id=58c17e30& */ "../coreui/src/views/patient/patientBooking.vue?vue&type=template&id=58c17e30&");
/* harmony import */ var _patientBooking_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./patientBooking.vue?vue&type=script&lang=js& */ "../coreui/src/views/patient/patientBooking.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _laravel_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../laravel/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_laravel_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _patientBooking_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _patientBooking_vue_vue_type_template_id_58c17e30___WEBPACK_IMPORTED_MODULE_0__["render"],
  _patientBooking_vue_vue_type_template_id_58c17e30___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "coreui/src/views/patient/patientBooking.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "../coreui/src/views/patient/patientBooking.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ../coreui/src/views/patient/patientBooking.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _laravel_node_modules_babel_loader_lib_index_js_ref_4_0_laravel_node_modules_vue_loader_lib_index_js_vue_loader_options_patientBooking_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../laravel/node_modules/babel-loader/lib??ref--4-0!../../../../laravel/node_modules/vue-loader/lib??vue-loader-options!./patientBooking.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!../coreui/src/views/patient/patientBooking.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_laravel_node_modules_babel_loader_lib_index_js_ref_4_0_laravel_node_modules_vue_loader_lib_index_js_vue_loader_options_patientBooking_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "../coreui/src/views/patient/patientBooking.vue?vue&type=template&id=58c17e30&":
/*!*************************************************************************************!*\
  !*** ../coreui/src/views/patient/patientBooking.vue?vue&type=template&id=58c17e30& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _laravel_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_laravel_node_modules_vue_loader_lib_index_js_vue_loader_options_patientBooking_vue_vue_type_template_id_58c17e30___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../laravel/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../laravel/node_modules/vue-loader/lib??vue-loader-options!./patientBooking.vue?vue&type=template&id=58c17e30& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!../coreui/src/views/patient/patientBooking.vue?vue&type=template&id=58c17e30&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _laravel_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_laravel_node_modules_vue_loader_lib_index_js_vue_loader_options_patientBooking_vue_vue_type_template_id_58c17e30___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _laravel_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_laravel_node_modules_vue_loader_lib_index_js_vue_loader_options_patientBooking_vue_vue_type_template_id_58c17e30___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!../coreui/src/views/patient/patientBooking.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!../coreui/src/views/patient/patientBooking.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "../coreui/node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "../coreui/node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vform */ "../coreui/node_modules/vform/dist/vform.es.js");
/* harmony import */ var vue_date_time_picker_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-date-time-picker-js */ "../coreui/node_modules/vue-date-time-picker-js/dist/vue-date-time-picker-js.js");
/* harmony import */ var vue_date_time_picker_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue_date_time_picker_js__WEBPACK_IMPORTED_MODULE_3__);
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





vue__WEBPACK_IMPORTED_MODULE_1___default.a.component("date-picker", vue_date_time_picker_js__WEBPACK_IMPORTED_MODULE_3___default.a);
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      date: "",
      id: "",
      datetime: "",
      recommendation_file: "",
      selectType: 1,
      formData: new vform__WEBPACK_IMPORTED_MODULE_2__["default"]({
        type_specialist: 1,
        date_of_suggest: "",
        to_time: "00.00",
        health_specialist: "",
        visit_type: 0,
        medical_report_attachment: "",
        reason: "",
        medical_history: [],
        description: "",
        medical_recommendation: 1,
        patient_id: "",
        booking_type: "FindMySelf"
      }),
      masterType: [],
      patientData: [],
      doctor_id: "",
      patient_id: ""
    };
  },
  components: {
    datePicker: vue_date_time_picker_js__WEBPACK_IMPORTED_MODULE_3___default.a
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])("Patient/Index", ["result", "returnData", "ajax_error", "patientList", "getFavDoctorResult"])),
  created: function created() {
    var _this = this;

    if (this.$route.params.d_id && this.$route.params.p_id) {
      this.doctor_id = this.$route.params.d_id;
      this.patient_id = this.$route.params.p_id;
      this.getFavDoctorData(this.doctor_id).then(function () {
        _this.formData.type_specialist = _this.getFavDoctorResult.type;
        _this.formData.patient_id = _this.patient_id;
      });
    }

    this.get_PatientsList();
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])("Patient/Index", ["getPatientData", "submitBookingRequestForm", "getPatientsList", "getFavDoctorData"]), {
    get_PatientsList: function get_PatientsList() {
      var _this2 = this;

      this.getPatientsList().then(function () {
        _this2.patientData = _this2.patientList.patient;
        _this2.masterType = _this2.patientList.masterType;
      });
    },
    recommendationfile: function recommendationfile(e) {
      this.recommendation_file = e.target.files[0];
      var reader = new FileReader();

      reader.onload = function (e) {};

      reader.readAsDataURL(this.recommendation_file);
    },
    submitFormData: function submitFormData() {
      var _this3 = this;

      if (this.formData.patient_id == "") {
        vue__WEBPACK_IMPORTED_MODULE_1___default.a.$toast.open({
          message: "Please Select Patient!",
          type: "error",
          duration: 5000,
          dismissible: true
        });
      } else {
        var newData = new FormData();
        newData.append("recommendationfile", this.recommendation_file);
        this.isActive = true;
        newData.append("formData", JSON.stringify(this.formData));
        this.submitBookingRequestForm({
          newData: newData
        }).then(function () {
          if (_this3.returnData.status == "success") {
            if (_this3.doctor_id != "" && _this3.patient_id != "") {
              _this3.$router.push({
                name: "view_doctor_patient",
                params: {
                  id: _this3.doctor_id,
                  doctor_suggest_id: _this3.returnData.id
                }
              });
            } else {
              _this3.$router.push({
                name: "searchDoctor",
                params: {
                  id: _this3.returnData.id,
                  p_id: _this3.formData.patient_id
                }
              });
            }

            _this3.isActive = false;
            vue__WEBPACK_IMPORTED_MODULE_1___default.a.$toast.open({
              message: _this3.returnData.message,
              type: _this3.returnData.status
            });
          }
        })["catch"](function (error) {
          window.scrollTo(0, 0);
          _this3.isActive = false;
        });
      }
    },
    bookingTypeChange: function bookingTypeChange(event) {
      this.formData.booking_type = event.target.value;
    }
  })
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!../coreui/src/views/patient/patientBooking.vue?vue&type=template&id=58c17e30&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!../coreui/src/views/patient/patientBooking.vue?vue&type=template&id=58c17e30& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
      _c("CRow", { staticClass: "m-0" }, [
        _c(
          "form",
          {
            staticClass: "validate-form",
            on: {
              submit: function($event) {
                $event.preventDefault()
                return _vm.submitFormData.apply(null, arguments)
              }
            }
          },
          [
            _c(
              "CCol",
              { staticClass: "px-2 btn-sticky", attrs: { sm: "12" } },
              [
                _c(
                  "div",
                  {
                    staticClass:
                      "d-flex justify-content-between py-2 align-items-center"
                  },
                  [
                    _c(
                      "h5",
                      { staticClass: "mb-0" },
                      [
                        _vm._v("\n            Patient\n            "),
                        _c("vue-fontawesome", {
                          staticClass: "px-1",
                          attrs: { icon: "caret-right", size: "1" }
                        }),
                        _vm._v("\n            Booking\n          ")
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {},
                      [
                        _vm.doctor_id == "" && _vm.patient_id == ""
                          ? _c(
                              "CButton",
                              {
                                staticClass: "btn_custom",
                                attrs: { type: "submit" }
                              },
                              [_vm._v("Next")]
                            )
                          : _c(
                              "CButton",
                              {
                                staticClass: "btn_custom",
                                attrs: { type: "submit" }
                              },
                              [_vm._v("Book Appointment")]
                            )
                      ],
                      1
                    )
                  ]
                )
              ]
            ),
            _vm._v(" "),
            _c(
              "CCol",
              { staticClass: "p-2", attrs: { sm: "9" } },
              [
                _c(
                  "CCard",
                  { staticClass: "mb-0" },
                  [
                    _c("CCardHeader", { staticClass: "p-2 px-3 bg_themes" }, [
                      _c("div", [_c("strong", [_vm._v("Booking request:")])])
                    ]),
                    _vm._v(" "),
                    _c(
                      "CCardBody",
                      { staticClass: "px-1 py-2" },
                      [
                        _c(
                          "CRow",
                          { staticClass: "m-0" },
                          [
                            _c(
                              "CCol",
                              {
                                staticClass: "px-2",
                                staticStyle: { display: "none" },
                                attrs: { sm: "6", md: "4" }
                              },
                              [
                                _c("div", { staticClass: "form-group" }, [
                                  _c("label", [_vm._v("Type")]),
                                  _vm._v(" "),
                                  _c(
                                    "select",
                                    {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.formData.booking_type,
                                          expression: "formData.booking_type"
                                        }
                                      ],
                                      staticClass: "form-control",
                                      on: {
                                        change: [
                                          function($event) {
                                            var $$selectedVal = Array.prototype.filter
                                              .call(
                                                $event.target.options,
                                                function(o) {
                                                  return o.selected
                                                }
                                              )
                                              .map(function(o) {
                                                var val =
                                                  "_value" in o
                                                    ? o._value
                                                    : o.value
                                                return val
                                              })
                                            _vm.$set(
                                              _vm.formData,
                                              "booking_type",
                                              $event.target.multiple
                                                ? $$selectedVal
                                                : $$selectedVal[0]
                                            )
                                          },
                                          function($event) {
                                            return _vm.bookingTypeChange($event)
                                          }
                                        ]
                                      }
                                    },
                                    [
                                      _c(
                                        "option",
                                        { attrs: { value: "FindMySelf" } },
                                        [_vm._v("Find by myself")]
                                      )
                                    ]
                                  )
                                ])
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "CCol",
                              {
                                staticClass: "px-2",
                                attrs: { sm: "6", md: "4" }
                              },
                              [
                                _c("div", { staticClass: "form-group" }, [
                                  _c("label", [_vm._v("Select Patient")]),
                                  _vm._v(" "),
                                  _c(
                                    "select",
                                    {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.formData.patient_id,
                                          expression: "formData.patient_id"
                                        }
                                      ],
                                      staticClass: "form-control",
                                      on: {
                                        change: function($event) {
                                          var $$selectedVal = Array.prototype.filter
                                            .call(
                                              $event.target.options,
                                              function(o) {
                                                return o.selected
                                              }
                                            )
                                            .map(function(o) {
                                              var val =
                                                "_value" in o
                                                  ? o._value
                                                  : o.value
                                              return val
                                            })
                                          _vm.$set(
                                            _vm.formData,
                                            "patient_id",
                                            $event.target.multiple
                                              ? $$selectedVal
                                              : $$selectedVal[0]
                                          )
                                        }
                                      }
                                    },
                                    [
                                      _c("option", { attrs: { value: "" } }, [
                                        _vm._v(" Select Patient")
                                      ]),
                                      _vm._v(" "),
                                      _vm._l(_vm.patientData, function(
                                        row,
                                        index
                                      ) {
                                        return _c(
                                          "option",
                                          {
                                            domProps: { value: row.patient_id }
                                          },
                                          [
                                            _vm._v(
                                              _vm._s(row.first_name) +
                                                " " +
                                                _vm._s(row.last_name)
                                            )
                                          ]
                                        )
                                      })
                                    ],
                                    2
                                  )
                                ])
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "CCol",
                              {
                                staticClass: "px-2",
                                attrs: { sm: "6", md: "4" }
                              },
                              [
                                _c("div", { staticClass: "form-group" }, [
                                  _c("label", [_vm._v("Where to Visit")]),
                                  _vm._v(" "),
                                  _c(
                                    "select",
                                    {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.formData.visit_type,
                                          expression: "formData.visit_type"
                                        }
                                      ],
                                      staticClass: "form-control",
                                      on: {
                                        change: function($event) {
                                          var $$selectedVal = Array.prototype.filter
                                            .call(
                                              $event.target.options,
                                              function(o) {
                                                return o.selected
                                              }
                                            )
                                            .map(function(o) {
                                              var val =
                                                "_value" in o
                                                  ? o._value
                                                  : o.value
                                              return val
                                            })
                                          _vm.$set(
                                            _vm.formData,
                                            "visit_type",
                                            $event.target.multiple
                                              ? $$selectedVal
                                              : $$selectedVal[0]
                                          )
                                        }
                                      }
                                    },
                                    [
                                      _c("option", { attrs: { value: "0" } }, [
                                        _vm._v("Home Visit")
                                      ]),
                                      _vm._v(" "),
                                      _c("option", { attrs: { value: "1" } }, [
                                        _vm._v("Clinic Visit")
                                      ])
                                    ]
                                  )
                                ])
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
                              {
                                staticClass: "px-2",
                                attrs: { sm: "6", md: "4" }
                              },
                              [
                                _c("div", { staticClass: "form-group" }, [
                                  _c("label", [
                                    _vm._v("Select Type of Specialist")
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "select",
                                    {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.formData.type_specialist,
                                          expression: "formData.type_specialist"
                                        }
                                      ],
                                      staticClass: "form-control",
                                      on: {
                                        change: function($event) {
                                          var $$selectedVal = Array.prototype.filter
                                            .call(
                                              $event.target.options,
                                              function(o) {
                                                return o.selected
                                              }
                                            )
                                            .map(function(o) {
                                              var val =
                                                "_value" in o
                                                  ? o._value
                                                  : o.value
                                              return val
                                            })
                                          _vm.$set(
                                            _vm.formData,
                                            "type_specialist",
                                            $event.target.multiple
                                              ? $$selectedVal
                                              : $$selectedVal[0]
                                          )
                                        }
                                      }
                                    },
                                    _vm._l(_vm.masterType, function(
                                      type,
                                      index
                                    ) {
                                      return _c(
                                        "option",
                                        { domProps: { value: type.id } },
                                        [_vm._v(_vm._s(type.type_name))]
                                      )
                                    }),
                                    0
                                  )
                                ])
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "CCol",
                              {
                                directives: [
                                  {
                                    name: "show",
                                    rawName: "v-show",
                                    value: _vm.formData.type_specialist == 4,
                                    expression: "formData.type_specialist == 4"
                                  }
                                ],
                                staticClass: "px-2",
                                attrs: { md: "4" }
                              },
                              [
                                _c("div", { staticClass: "form-group" }, [
                                  _c("label", [
                                    _vm._v("Select required health specialist ")
                                  ]),
                                  _c("br"),
                                  _vm._v(" "),
                                  _c(
                                    "select",
                                    {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.formData.health_specialist,
                                          expression:
                                            "formData.health_specialist"
                                        }
                                      ],
                                      staticClass: "form-control",
                                      on: {
                                        change: function($event) {
                                          var $$selectedVal = Array.prototype.filter
                                            .call(
                                              $event.target.options,
                                              function(o) {
                                                return o.selected
                                              }
                                            )
                                            .map(function(o) {
                                              var val =
                                                "_value" in o
                                                  ? o._value
                                                  : o.value
                                              return val
                                            })
                                          _vm.$set(
                                            _vm.formData,
                                            "health_specialist",
                                            $event.target.multiple
                                              ? $$selectedVal
                                              : $$selectedVal[0]
                                          )
                                        }
                                      }
                                    },
                                    [
                                      _c(
                                        "option",
                                        {
                                          attrs: {
                                            value: "Allergy and immunology"
                                          }
                                        },
                                        [_vm._v("Allergy and immunology")]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "option",
                                        { attrs: { value: "Anaesthesiology" } },
                                        [_vm._v("Anaesthesiology")]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "option",
                                        { attrs: { value: "Dermatology" } },
                                        [_vm._v("Dermatology")]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "option",
                                        {
                                          attrs: {
                                            value: "Diagnostic radiology"
                                          }
                                        },
                                        [_vm._v("Diagnostic radiology")]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "option",
                                        {
                                          attrs: { value: "Emergency medicine" }
                                        },
                                        [_vm._v("Emergency medicine")]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "option",
                                        { attrs: { value: "Family medicine" } },
                                        [_vm._v("Family medicine")]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "option",
                                        {
                                          attrs: { value: "Internal medicine" }
                                        },
                                        [_vm._v("Internal medicine")]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "option",
                                        {
                                          attrs: { value: "Medical genetics" }
                                        },
                                        [_vm._v("Medical genetics")]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "option",
                                        { attrs: { value: "Neurology" } },
                                        [_vm._v("Neurology")]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "option",
                                        {
                                          attrs: { value: "Nuclear medicine" }
                                        },
                                        [_vm._v("Nuclear medicine")]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "option",
                                        {
                                          attrs: {
                                            value: "Obstetrics and gynaecology"
                                          }
                                        },
                                        [_vm._v("Obstetrics and gynaecology")]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "option",
                                        { attrs: { value: "Ophthalmology" } },
                                        [_vm._v("Ophthalmology")]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "option",
                                        { attrs: { value: "Pathology" } },
                                        [_vm._v("Pathology")]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "option",
                                        { attrs: { value: "Paediatrics" } },
                                        [_vm._v("Paediatrics")]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "option",
                                        {
                                          attrs: {
                                            value:
                                              "Physical medicine and rehabilitation"
                                          }
                                        },
                                        [
                                          _vm._v(
                                            "Physical medicine and rehabilitation"
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "option",
                                        {
                                          attrs: {
                                            value: "Preventive medicine"
                                          }
                                        },
                                        [_vm._v("Preventive medicine")]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "option",
                                        { attrs: { value: "Psychiatry" } },
                                        [_vm._v("Psychiatry")]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "option",
                                        {
                                          attrs: { value: "Radiation oncology" }
                                        },
                                        [_vm._v("Radiation oncology")]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "option",
                                        { attrs: { value: "Surgery" } },
                                        [_vm._v("Surgery")]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "option",
                                        { attrs: { value: "Urology" } },
                                        [_vm._v("Urology ")]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "option",
                                        {
                                          attrs: {
                                            value: "Preventive cardiologists"
                                          }
                                        },
                                        [_vm._v("Preventive cardiologists ")]
                                      )
                                    ]
                                  )
                                ])
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "CCol",
                              {
                                staticClass: "px-2",
                                attrs: { sm: "6", md: "4" }
                              },
                              [
                                _c("div", { staticClass: "form-group" }, [
                                  _c("label", [
                                    _vm._v("Add medical recommendation:")
                                  ]),
                                  _c("br"),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "custom-control custom-radio custom-control-inline"
                                    },
                                    [
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value:
                                              _vm.formData
                                                .medical_recommendation,
                                            expression:
                                              "formData.medical_recommendation"
                                          }
                                        ],
                                        staticClass: "custom-control-input",
                                        attrs: {
                                          type: "radio",
                                          value: "0",
                                          id: "customRadioInlines1",
                                          name: "customRadioInlines1"
                                        },
                                        domProps: {
                                          checked: _vm._q(
                                            _vm.formData.medical_recommendation,
                                            "0"
                                          )
                                        },
                                        on: {
                                          change: function($event) {
                                            return _vm.$set(
                                              _vm.formData,
                                              "medical_recommendation",
                                              "0"
                                            )
                                          }
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "label",
                                        {
                                          staticClass: "custom-control-label",
                                          attrs: { for: "customRadioInlines1" }
                                        },
                                        [_vm._v("Yes")]
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "custom-control custom-radio custom-control-inline"
                                    },
                                    [
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value:
                                              _vm.formData
                                                .medical_recommendation,
                                            expression:
                                              "formData.medical_recommendation"
                                          }
                                        ],
                                        staticClass: "custom-control-input",
                                        attrs: {
                                          type: "radio",
                                          value: "1",
                                          id: "customRadioInlines2",
                                          name: "customRadioInlines1"
                                        },
                                        domProps: {
                                          checked: _vm._q(
                                            _vm.formData.medical_recommendation,
                                            "1"
                                          )
                                        },
                                        on: {
                                          change: function($event) {
                                            return _vm.$set(
                                              _vm.formData,
                                              "medical_recommendation",
                                              "1"
                                            )
                                          }
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "label",
                                        {
                                          staticClass: "custom-control-label",
                                          attrs: { for: "customRadioInlines2" }
                                        },
                                        [_vm._v("No")]
                                      )
                                    ]
                                  )
                                ])
                              ]
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _vm.formData.booking_type == "Suggest"
                          ? _c(
                              "CRow",
                              { staticClass: "m-0" },
                              [
                                _c(
                                  "CCol",
                                  {
                                    staticClass: "px-2",
                                    attrs: { sm: "6", md: "4" }
                                  },
                                  [
                                    _c(
                                      "div",
                                      { staticClass: "form-group" },
                                      [
                                        _c("label", [_vm._v("Select Date")]),
                                        _vm._v(" "),
                                        _c("date-picker", {
                                          attrs: {
                                            type: "date",
                                            format: "DD/MM/YYYY",
                                            min: "01/01/1980",
                                            color: "#2c449e",
                                            "auto-submit": true,
                                            editable: true
                                          },
                                          model: {
                                            value: _vm.formData.date_of_suggest,
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.formData,
                                                "date_of_suggest",
                                                $$v
                                              )
                                            },
                                            expression:
                                              "formData.date_of_suggest"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _vm.ajax_error.errors.date_of_suggest
                                          ? _c(
                                              "span",
                                              { staticClass: "text-danger" },
                                              [
                                                _vm._v(
                                                  _vm._s(
                                                    _vm.ajax_error.errors
                                                      .date_of_suggest[0]
                                                  )
                                                )
                                              ]
                                            )
                                          : _vm._e()
                                      ],
                                      1
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "CCol",
                                  {
                                    staticClass: "px-2",
                                    attrs: { sm: "6", md: "4" }
                                  },
                                  [
                                    _c("div", { staticClass: "form-group" }, [
                                      _c("label", [_vm._v("Select Time")]),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "d-flex align-items-center"
                                        },
                                        [
                                          _c("date-picker", {
                                            attrs: {
                                              type: "time",
                                              format: "HH:mm",
                                              editable: true,
                                              jumpMinute: 30,
                                              roundMinute: true,
                                              color: "#2c449e"
                                            },
                                            model: {
                                              value: _vm.formData.to_time,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.formData,
                                                  "to_time",
                                                  $$v
                                                )
                                              },
                                              expression: "formData.to_time"
                                            }
                                          }),
                                          _vm._v(" "),
                                          _vm.ajax_error.errors.to_time
                                            ? _c(
                                                "span",
                                                { staticClass: "text-danger" },
                                                [
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm.ajax_error.errors
                                                        .to_time[0]
                                                    )
                                                  )
                                                ]
                                              )
                                            : _vm._e()
                                        ],
                                        1
                                      )
                                    ])
                                  ]
                                )
                              ],
                              1
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        _c(
                          "CRow",
                          { staticClass: "m-0" },
                          [
                            _vm.formData.medical_recommendation == 0
                              ? _c(
                                  "CCol",
                                  {
                                    staticClass: "px-2",
                                    attrs: { sm: "6", md: "4" }
                                  },
                                  [
                                    _c("div", { staticClass: "form-group" }, [
                                      _c("label", [
                                        _vm._v(
                                          " Upload med report with recommendation if available"
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("input", {
                                        attrs: {
                                          type: "file",
                                          name: "recommendation_file"
                                        },
                                        on: { change: _vm.recommendationfile }
                                      })
                                    ])
                                  ]
                                )
                              : _vm._e(),
                            _vm._v(" "),
                            _c(
                              "CCol",
                              {
                                staticClass: "px-2",
                                attrs: { sm: "6", md: "8" }
                              },
                              [
                                _c("div", { staticClass: "form-group" }, [
                                  _c("label", [
                                    _vm._v(
                                      " Enter details for other reason here"
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("textarea", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.formData.reason,
                                        expression: "formData.reason"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    attrs: { rows: "3" },
                                    domProps: { value: _vm.formData.reason },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.formData,
                                          "reason",
                                          $event.target.value
                                        )
                                      }
                                    }
                                  })
                                ])
                              ]
                            )
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
                _c(
                  "div",
                  [
                    _c(
                      "CCard",
                      { staticClass: "mb-0" },
                      [
                        _c(
                          "CCardHeader",
                          { staticClass: "p-2 px-3 bg_themes" },
                          [
                            _c("div", [
                              _c("strong", [_vm._v("Medical History")])
                            ])
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "CCardBody",
                          { staticClass: "px-1 py-2" },
                          [
                            _c(
                              "CRow",
                              { staticClass: "m-0" },
                              [
                                _c(
                                  "CCol",
                                  {
                                    staticClass: "px-2",
                                    attrs: { sm: "12", md: "12" }
                                  },
                                  [
                                    _c(
                                      "div",
                                      { staticClass: "form-group medi_his" },
                                      [
                                        _c("label", [
                                          _vm._v(
                                            " Do you know if the patient suffers from any of the following conditions?"
                                          )
                                        ]),
                                        _c("br"),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "form-check form-check-inline"
                                          },
                                          [
                                            _c("input", {
                                              directives: [
                                                {
                                                  name: "model",
                                                  rawName: "v-model",
                                                  value:
                                                    _vm.formData
                                                      .medical_history,
                                                  expression:
                                                    "formData.medical_history"
                                                }
                                              ],
                                              staticClass: "form-check-input",
                                              attrs: {
                                                type: "checkbox",
                                                id: "inlineCheckbox2",
                                                value: "Thyroid Problems"
                                              },
                                              domProps: {
                                                checked: Array.isArray(
                                                  _vm.formData.medical_history
                                                )
                                                  ? _vm._i(
                                                      _vm.formData
                                                        .medical_history,
                                                      "Thyroid Problems"
                                                    ) > -1
                                                  : _vm.formData.medical_history
                                              },
                                              on: {
                                                change: function($event) {
                                                  var $$a =
                                                      _vm.formData
                                                        .medical_history,
                                                    $$el = $event.target,
                                                    $$c = $$el.checked
                                                      ? true
                                                      : false
                                                  if (Array.isArray($$a)) {
                                                    var $$v =
                                                        "Thyroid Problems",
                                                      $$i = _vm._i($$a, $$v)
                                                    if ($$el.checked) {
                                                      $$i < 0 &&
                                                        _vm.$set(
                                                          _vm.formData,
                                                          "medical_history",
                                                          $$a.concat([$$v])
                                                        )
                                                    } else {
                                                      $$i > -1 &&
                                                        _vm.$set(
                                                          _vm.formData,
                                                          "medical_history",
                                                          $$a
                                                            .slice(0, $$i)
                                                            .concat(
                                                              $$a.slice($$i + 1)
                                                            )
                                                        )
                                                    }
                                                  } else {
                                                    _vm.$set(
                                                      _vm.formData,
                                                      "medical_history",
                                                      $$c
                                                    )
                                                  }
                                                }
                                              }
                                            }),
                                            _vm._v(" "),
                                            _c(
                                              "label",
                                              {
                                                staticClass: "form-check-label",
                                                attrs: {
                                                  for: "inlineCheckbox2"
                                                }
                                              },
                                              [_vm._v("Thyroid Problems")]
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "form-check form-check-inline"
                                          },
                                          [
                                            _c("input", {
                                              directives: [
                                                {
                                                  name: "model",
                                                  rawName: "v-model",
                                                  value:
                                                    _vm.formData
                                                      .medical_history,
                                                  expression:
                                                    "formData.medical_history"
                                                }
                                              ],
                                              staticClass: "form-check-input",
                                              attrs: {
                                                type: "checkbox",
                                                id: "inlineCheckbox3",
                                                value: "Headaches"
                                              },
                                              domProps: {
                                                checked: Array.isArray(
                                                  _vm.formData.medical_history
                                                )
                                                  ? _vm._i(
                                                      _vm.formData
                                                        .medical_history,
                                                      "Headaches"
                                                    ) > -1
                                                  : _vm.formData.medical_history
                                              },
                                              on: {
                                                change: function($event) {
                                                  var $$a =
                                                      _vm.formData
                                                        .medical_history,
                                                    $$el = $event.target,
                                                    $$c = $$el.checked
                                                      ? true
                                                      : false
                                                  if (Array.isArray($$a)) {
                                                    var $$v = "Headaches",
                                                      $$i = _vm._i($$a, $$v)
                                                    if ($$el.checked) {
                                                      $$i < 0 &&
                                                        _vm.$set(
                                                          _vm.formData,
                                                          "medical_history",
                                                          $$a.concat([$$v])
                                                        )
                                                    } else {
                                                      $$i > -1 &&
                                                        _vm.$set(
                                                          _vm.formData,
                                                          "medical_history",
                                                          $$a
                                                            .slice(0, $$i)
                                                            .concat(
                                                              $$a.slice($$i + 1)
                                                            )
                                                        )
                                                    }
                                                  } else {
                                                    _vm.$set(
                                                      _vm.formData,
                                                      "medical_history",
                                                      $$c
                                                    )
                                                  }
                                                }
                                              }
                                            }),
                                            _vm._v(" "),
                                            _c(
                                              "label",
                                              {
                                                staticClass: "form-check-label",
                                                attrs: {
                                                  for: "inlineCheckbox3"
                                                }
                                              },
                                              [_vm._v("Headaches")]
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "form-check form-check-inline"
                                          },
                                          [
                                            _c("input", {
                                              directives: [
                                                {
                                                  name: "model",
                                                  rawName: "v-model",
                                                  value:
                                                    _vm.formData
                                                      .medical_history,
                                                  expression:
                                                    "formData.medical_history"
                                                }
                                              ],
                                              staticClass: "form-check-input",
                                              attrs: {
                                                type: "checkbox",
                                                id: "inlineCheckbox4",
                                                value: "High/Low Blood Pressure"
                                              },
                                              domProps: {
                                                checked: Array.isArray(
                                                  _vm.formData.medical_history
                                                )
                                                  ? _vm._i(
                                                      _vm.formData
                                                        .medical_history,
                                                      "High/Low Blood Pressure"
                                                    ) > -1
                                                  : _vm.formData.medical_history
                                              },
                                              on: {
                                                change: function($event) {
                                                  var $$a =
                                                      _vm.formData
                                                        .medical_history,
                                                    $$el = $event.target,
                                                    $$c = $$el.checked
                                                      ? true
                                                      : false
                                                  if (Array.isArray($$a)) {
                                                    var $$v =
                                                        "High/Low Blood Pressure",
                                                      $$i = _vm._i($$a, $$v)
                                                    if ($$el.checked) {
                                                      $$i < 0 &&
                                                        _vm.$set(
                                                          _vm.formData,
                                                          "medical_history",
                                                          $$a.concat([$$v])
                                                        )
                                                    } else {
                                                      $$i > -1 &&
                                                        _vm.$set(
                                                          _vm.formData,
                                                          "medical_history",
                                                          $$a
                                                            .slice(0, $$i)
                                                            .concat(
                                                              $$a.slice($$i + 1)
                                                            )
                                                        )
                                                    }
                                                  } else {
                                                    _vm.$set(
                                                      _vm.formData,
                                                      "medical_history",
                                                      $$c
                                                    )
                                                  }
                                                }
                                              }
                                            }),
                                            _vm._v(" "),
                                            _c(
                                              "label",
                                              {
                                                staticClass: "form-check-label",
                                                attrs: {
                                                  for: "inlineCheckbox4"
                                                }
                                              },
                                              [
                                                _vm._v(
                                                  "High/Low Blood Pressure"
                                                )
                                              ]
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "form-check form-check-inline"
                                          },
                                          [
                                            _c("input", {
                                              directives: [
                                                {
                                                  name: "model",
                                                  rawName: "v-model",
                                                  value:
                                                    _vm.formData
                                                      .medical_history,
                                                  expression:
                                                    "formData.medical_history"
                                                }
                                              ],
                                              staticClass: "form-check-input",
                                              attrs: {
                                                type: "checkbox",
                                                id: "inlineCheckbox5",
                                                value: "Heart Condition"
                                              },
                                              domProps: {
                                                checked: Array.isArray(
                                                  _vm.formData.medical_history
                                                )
                                                  ? _vm._i(
                                                      _vm.formData
                                                        .medical_history,
                                                      "Heart Condition"
                                                    ) > -1
                                                  : _vm.formData.medical_history
                                              },
                                              on: {
                                                change: function($event) {
                                                  var $$a =
                                                      _vm.formData
                                                        .medical_history,
                                                    $$el = $event.target,
                                                    $$c = $$el.checked
                                                      ? true
                                                      : false
                                                  if (Array.isArray($$a)) {
                                                    var $$v = "Heart Condition",
                                                      $$i = _vm._i($$a, $$v)
                                                    if ($$el.checked) {
                                                      $$i < 0 &&
                                                        _vm.$set(
                                                          _vm.formData,
                                                          "medical_history",
                                                          $$a.concat([$$v])
                                                        )
                                                    } else {
                                                      $$i > -1 &&
                                                        _vm.$set(
                                                          _vm.formData,
                                                          "medical_history",
                                                          $$a
                                                            .slice(0, $$i)
                                                            .concat(
                                                              $$a.slice($$i + 1)
                                                            )
                                                        )
                                                    }
                                                  } else {
                                                    _vm.$set(
                                                      _vm.formData,
                                                      "medical_history",
                                                      $$c
                                                    )
                                                  }
                                                }
                                              }
                                            }),
                                            _vm._v(" "),
                                            _c(
                                              "label",
                                              {
                                                staticClass: "form-check-label",
                                                attrs: {
                                                  for: "inlineCheckbox5"
                                                }
                                              },
                                              [_vm._v("Heart Condition")]
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "form-check form-check-inline"
                                          },
                                          [
                                            _c("input", {
                                              directives: [
                                                {
                                                  name: "model",
                                                  rawName: "v-model",
                                                  value:
                                                    _vm.formData
                                                      .medical_history,
                                                  expression:
                                                    "formData.medical_history"
                                                }
                                              ],
                                              staticClass: "form-check-input",
                                              attrs: {
                                                type: "checkbox",
                                                id: "inlineCheckbox7",
                                                value: "Varicose Veins"
                                              },
                                              domProps: {
                                                checked: Array.isArray(
                                                  _vm.formData.medical_history
                                                )
                                                  ? _vm._i(
                                                      _vm.formData
                                                        .medical_history,
                                                      "Varicose Veins"
                                                    ) > -1
                                                  : _vm.formData.medical_history
                                              },
                                              on: {
                                                change: function($event) {
                                                  var $$a =
                                                      _vm.formData
                                                        .medical_history,
                                                    $$el = $event.target,
                                                    $$c = $$el.checked
                                                      ? true
                                                      : false
                                                  if (Array.isArray($$a)) {
                                                    var $$v = "Varicose Veins",
                                                      $$i = _vm._i($$a, $$v)
                                                    if ($$el.checked) {
                                                      $$i < 0 &&
                                                        _vm.$set(
                                                          _vm.formData,
                                                          "medical_history",
                                                          $$a.concat([$$v])
                                                        )
                                                    } else {
                                                      $$i > -1 &&
                                                        _vm.$set(
                                                          _vm.formData,
                                                          "medical_history",
                                                          $$a
                                                            .slice(0, $$i)
                                                            .concat(
                                                              $$a.slice($$i + 1)
                                                            )
                                                        )
                                                    }
                                                  } else {
                                                    _vm.$set(
                                                      _vm.formData,
                                                      "medical_history",
                                                      $$c
                                                    )
                                                  }
                                                }
                                              }
                                            }),
                                            _vm._v(" "),
                                            _c(
                                              "label",
                                              {
                                                staticClass: "form-check-label",
                                                attrs: {
                                                  for: "inlineCheckbox7"
                                                }
                                              },
                                              [_vm._v("Varicose Veins")]
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "form-check form-check-inline"
                                          },
                                          [
                                            _c("input", {
                                              directives: [
                                                {
                                                  name: "model",
                                                  rawName: "v-model",
                                                  value:
                                                    _vm.formData
                                                      .medical_history,
                                                  expression:
                                                    "formData.medical_history"
                                                }
                                              ],
                                              staticClass: "form-check-input",
                                              attrs: {
                                                type: "checkbox",
                                                id: "inlineCheckbox8",
                                                value: "Eczema/Psoriasis"
                                              },
                                              domProps: {
                                                checked: Array.isArray(
                                                  _vm.formData.medical_history
                                                )
                                                  ? _vm._i(
                                                      _vm.formData
                                                        .medical_history,
                                                      "Eczema/Psoriasis"
                                                    ) > -1
                                                  : _vm.formData.medical_history
                                              },
                                              on: {
                                                change: function($event) {
                                                  var $$a =
                                                      _vm.formData
                                                        .medical_history,
                                                    $$el = $event.target,
                                                    $$c = $$el.checked
                                                      ? true
                                                      : false
                                                  if (Array.isArray($$a)) {
                                                    var $$v =
                                                        "Eczema/Psoriasis",
                                                      $$i = _vm._i($$a, $$v)
                                                    if ($$el.checked) {
                                                      $$i < 0 &&
                                                        _vm.$set(
                                                          _vm.formData,
                                                          "medical_history",
                                                          $$a.concat([$$v])
                                                        )
                                                    } else {
                                                      $$i > -1 &&
                                                        _vm.$set(
                                                          _vm.formData,
                                                          "medical_history",
                                                          $$a
                                                            .slice(0, $$i)
                                                            .concat(
                                                              $$a.slice($$i + 1)
                                                            )
                                                        )
                                                    }
                                                  } else {
                                                    _vm.$set(
                                                      _vm.formData,
                                                      "medical_history",
                                                      $$c
                                                    )
                                                  }
                                                }
                                              }
                                            }),
                                            _vm._v(" "),
                                            _c(
                                              "label",
                                              {
                                                staticClass: "form-check-label",
                                                attrs: {
                                                  for: "inlineCheckbox8"
                                                }
                                              },
                                              [_vm._v("Eczema/Psoriasis")]
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "form-check form-check-inline"
                                          },
                                          [
                                            _c("input", {
                                              directives: [
                                                {
                                                  name: "model",
                                                  rawName: "v-model",
                                                  value:
                                                    _vm.formData
                                                      .medical_history,
                                                  expression:
                                                    "formData.medical_history"
                                                }
                                              ],
                                              staticClass: "form-check-input",
                                              attrs: {
                                                type: "checkbox",
                                                id: "inlineCheckbox9",
                                                value: "Cancer"
                                              },
                                              domProps: {
                                                checked: Array.isArray(
                                                  _vm.formData.medical_history
                                                )
                                                  ? _vm._i(
                                                      _vm.formData
                                                        .medical_history,
                                                      "Cancer"
                                                    ) > -1
                                                  : _vm.formData.medical_history
                                              },
                                              on: {
                                                change: function($event) {
                                                  var $$a =
                                                      _vm.formData
                                                        .medical_history,
                                                    $$el = $event.target,
                                                    $$c = $$el.checked
                                                      ? true
                                                      : false
                                                  if (Array.isArray($$a)) {
                                                    var $$v = "Cancer",
                                                      $$i = _vm._i($$a, $$v)
                                                    if ($$el.checked) {
                                                      $$i < 0 &&
                                                        _vm.$set(
                                                          _vm.formData,
                                                          "medical_history",
                                                          $$a.concat([$$v])
                                                        )
                                                    } else {
                                                      $$i > -1 &&
                                                        _vm.$set(
                                                          _vm.formData,
                                                          "medical_history",
                                                          $$a
                                                            .slice(0, $$i)
                                                            .concat(
                                                              $$a.slice($$i + 1)
                                                            )
                                                        )
                                                    }
                                                  } else {
                                                    _vm.$set(
                                                      _vm.formData,
                                                      "medical_history",
                                                      $$c
                                                    )
                                                  }
                                                }
                                              }
                                            }),
                                            _vm._v(" "),
                                            _c(
                                              "label",
                                              {
                                                staticClass: "form-check-label",
                                                attrs: {
                                                  for: "inlineCheckbox9"
                                                }
                                              },
                                              [_vm._v("Cancer")]
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "form-check form-check-inline"
                                          },
                                          [
                                            _c("input", {
                                              directives: [
                                                {
                                                  name: "model",
                                                  rawName: "v-model",
                                                  value:
                                                    _vm.formData
                                                      .medical_history,
                                                  expression:
                                                    "formData.medical_history"
                                                }
                                              ],
                                              staticClass: "form-check-input",
                                              attrs: {
                                                type: "checkbox",
                                                id: "inlineCheckbox10",
                                                value: "IBS/Bowel Problems"
                                              },
                                              domProps: {
                                                checked: Array.isArray(
                                                  _vm.formData.medical_history
                                                )
                                                  ? _vm._i(
                                                      _vm.formData
                                                        .medical_history,
                                                      "IBS/Bowel Problems"
                                                    ) > -1
                                                  : _vm.formData.medical_history
                                              },
                                              on: {
                                                change: function($event) {
                                                  var $$a =
                                                      _vm.formData
                                                        .medical_history,
                                                    $$el = $event.target,
                                                    $$c = $$el.checked
                                                      ? true
                                                      : false
                                                  if (Array.isArray($$a)) {
                                                    var $$v =
                                                        "IBS/Bowel Problems",
                                                      $$i = _vm._i($$a, $$v)
                                                    if ($$el.checked) {
                                                      $$i < 0 &&
                                                        _vm.$set(
                                                          _vm.formData,
                                                          "medical_history",
                                                          $$a.concat([$$v])
                                                        )
                                                    } else {
                                                      $$i > -1 &&
                                                        _vm.$set(
                                                          _vm.formData,
                                                          "medical_history",
                                                          $$a
                                                            .slice(0, $$i)
                                                            .concat(
                                                              $$a.slice($$i + 1)
                                                            )
                                                        )
                                                    }
                                                  } else {
                                                    _vm.$set(
                                                      _vm.formData,
                                                      "medical_history",
                                                      $$c
                                                    )
                                                  }
                                                }
                                              }
                                            }),
                                            _vm._v(" "),
                                            _c(
                                              "label",
                                              {
                                                staticClass: "form-check-label",
                                                attrs: {
                                                  for: "inlineCheckbox10"
                                                }
                                              },
                                              [_vm._v("IBS/Bowel Problems")]
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "form-check form-check-inline"
                                          },
                                          [
                                            _c("input", {
                                              directives: [
                                                {
                                                  name: "model",
                                                  rawName: "v-model",
                                                  value:
                                                    _vm.formData
                                                      .medical_history,
                                                  expression:
                                                    "formData.medical_history"
                                                }
                                              ],
                                              staticClass: "form-check-input",
                                              attrs: {
                                                type: "checkbox",
                                                id: "inlineCheckbox11",
                                                value: "Arthritis/Rheumatism"
                                              },
                                              domProps: {
                                                checked: Array.isArray(
                                                  _vm.formData.medical_history
                                                )
                                                  ? _vm._i(
                                                      _vm.formData
                                                        .medical_history,
                                                      "Arthritis/Rheumatism"
                                                    ) > -1
                                                  : _vm.formData.medical_history
                                              },
                                              on: {
                                                change: function($event) {
                                                  var $$a =
                                                      _vm.formData
                                                        .medical_history,
                                                    $$el = $event.target,
                                                    $$c = $$el.checked
                                                      ? true
                                                      : false
                                                  if (Array.isArray($$a)) {
                                                    var $$v =
                                                        "Arthritis/Rheumatism",
                                                      $$i = _vm._i($$a, $$v)
                                                    if ($$el.checked) {
                                                      $$i < 0 &&
                                                        _vm.$set(
                                                          _vm.formData,
                                                          "medical_history",
                                                          $$a.concat([$$v])
                                                        )
                                                    } else {
                                                      $$i > -1 &&
                                                        _vm.$set(
                                                          _vm.formData,
                                                          "medical_history",
                                                          $$a
                                                            .slice(0, $$i)
                                                            .concat(
                                                              $$a.slice($$i + 1)
                                                            )
                                                        )
                                                    }
                                                  } else {
                                                    _vm.$set(
                                                      _vm.formData,
                                                      "medical_history",
                                                      $$c
                                                    )
                                                  }
                                                }
                                              }
                                            }),
                                            _vm._v(" "),
                                            _c(
                                              "label",
                                              {
                                                staticClass: "form-check-label",
                                                attrs: {
                                                  for: "inlineCheckbox11"
                                                }
                                              },
                                              [_vm._v("Arthritis/Rheumatism")]
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "form-check form-check-inline"
                                          },
                                          [
                                            _c("input", {
                                              directives: [
                                                {
                                                  name: "model",
                                                  rawName: "v-model",
                                                  value:
                                                    _vm.formData
                                                      .medical_history,
                                                  expression:
                                                    "formData.medical_history"
                                                }
                                              ],
                                              staticClass: "form-check-input",
                                              attrs: {
                                                type: "checkbox",
                                                id: "inlineCheckbox12",
                                                value: "Epilepsy"
                                              },
                                              domProps: {
                                                checked: Array.isArray(
                                                  _vm.formData.medical_history
                                                )
                                                  ? _vm._i(
                                                      _vm.formData
                                                        .medical_history,
                                                      "Epilepsy"
                                                    ) > -1
                                                  : _vm.formData.medical_history
                                              },
                                              on: {
                                                change: function($event) {
                                                  var $$a =
                                                      _vm.formData
                                                        .medical_history,
                                                    $$el = $event.target,
                                                    $$c = $$el.checked
                                                      ? true
                                                      : false
                                                  if (Array.isArray($$a)) {
                                                    var $$v = "Epilepsy",
                                                      $$i = _vm._i($$a, $$v)
                                                    if ($$el.checked) {
                                                      $$i < 0 &&
                                                        _vm.$set(
                                                          _vm.formData,
                                                          "medical_history",
                                                          $$a.concat([$$v])
                                                        )
                                                    } else {
                                                      $$i > -1 &&
                                                        _vm.$set(
                                                          _vm.formData,
                                                          "medical_history",
                                                          $$a
                                                            .slice(0, $$i)
                                                            .concat(
                                                              $$a.slice($$i + 1)
                                                            )
                                                        )
                                                    }
                                                  } else {
                                                    _vm.$set(
                                                      _vm.formData,
                                                      "medical_history",
                                                      $$c
                                                    )
                                                  }
                                                }
                                              }
                                            }),
                                            _vm._v(" "),
                                            _c(
                                              "label",
                                              {
                                                staticClass: "form-check-label",
                                                attrs: {
                                                  for: "inlineCheckbox12"
                                                }
                                              },
                                              [_vm._v("Epilepsy")]
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "form-check form-check-inline"
                                          },
                                          [
                                            _c("input", {
                                              directives: [
                                                {
                                                  name: "model",
                                                  rawName: "v-model",
                                                  value:
                                                    _vm.formData
                                                      .medical_history,
                                                  expression:
                                                    "formData.medical_history"
                                                }
                                              ],
                                              staticClass: "form-check-input",
                                              attrs: {
                                                type: "checkbox",
                                                id: "inlineCheckbox13",
                                                value: "Claustrophobia"
                                              },
                                              domProps: {
                                                checked: Array.isArray(
                                                  _vm.formData.medical_history
                                                )
                                                  ? _vm._i(
                                                      _vm.formData
                                                        .medical_history,
                                                      "Claustrophobia"
                                                    ) > -1
                                                  : _vm.formData.medical_history
                                              },
                                              on: {
                                                change: function($event) {
                                                  var $$a =
                                                      _vm.formData
                                                        .medical_history,
                                                    $$el = $event.target,
                                                    $$c = $$el.checked
                                                      ? true
                                                      : false
                                                  if (Array.isArray($$a)) {
                                                    var $$v = "Claustrophobia",
                                                      $$i = _vm._i($$a, $$v)
                                                    if ($$el.checked) {
                                                      $$i < 0 &&
                                                        _vm.$set(
                                                          _vm.formData,
                                                          "medical_history",
                                                          $$a.concat([$$v])
                                                        )
                                                    } else {
                                                      $$i > -1 &&
                                                        _vm.$set(
                                                          _vm.formData,
                                                          "medical_history",
                                                          $$a
                                                            .slice(0, $$i)
                                                            .concat(
                                                              $$a.slice($$i + 1)
                                                            )
                                                        )
                                                    }
                                                  } else {
                                                    _vm.$set(
                                                      _vm.formData,
                                                      "medical_history",
                                                      $$c
                                                    )
                                                  }
                                                }
                                              }
                                            }),
                                            _vm._v(" "),
                                            _c(
                                              "label",
                                              {
                                                staticClass: "form-check-label",
                                                attrs: {
                                                  for: "inlineCheckbox13"
                                                }
                                              },
                                              [_vm._v("Claustrophobia")]
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "form-check form-check-inline"
                                          },
                                          [
                                            _c("input", {
                                              directives: [
                                                {
                                                  name: "model",
                                                  rawName: "v-model",
                                                  value:
                                                    _vm.formData
                                                      .medical_history,
                                                  expression:
                                                    "formData.medical_history"
                                                }
                                              ],
                                              staticClass: "form-check-input",
                                              attrs: {
                                                type: "checkbox",
                                                id: "inlineCheckbox14",
                                                value: "Asthma/Lung Problems"
                                              },
                                              domProps: {
                                                checked: Array.isArray(
                                                  _vm.formData.medical_history
                                                )
                                                  ? _vm._i(
                                                      _vm.formData
                                                        .medical_history,
                                                      "Asthma/Lung Problems"
                                                    ) > -1
                                                  : _vm.formData.medical_history
                                              },
                                              on: {
                                                change: function($event) {
                                                  var $$a =
                                                      _vm.formData
                                                        .medical_history,
                                                    $$el = $event.target,
                                                    $$c = $$el.checked
                                                      ? true
                                                      : false
                                                  if (Array.isArray($$a)) {
                                                    var $$v =
                                                        "Asthma/Lung Problems",
                                                      $$i = _vm._i($$a, $$v)
                                                    if ($$el.checked) {
                                                      $$i < 0 &&
                                                        _vm.$set(
                                                          _vm.formData,
                                                          "medical_history",
                                                          $$a.concat([$$v])
                                                        )
                                                    } else {
                                                      $$i > -1 &&
                                                        _vm.$set(
                                                          _vm.formData,
                                                          "medical_history",
                                                          $$a
                                                            .slice(0, $$i)
                                                            .concat(
                                                              $$a.slice($$i + 1)
                                                            )
                                                        )
                                                    }
                                                  } else {
                                                    _vm.$set(
                                                      _vm.formData,
                                                      "medical_history",
                                                      $$c
                                                    )
                                                  }
                                                }
                                              }
                                            }),
                                            _vm._v(" "),
                                            _c(
                                              "label",
                                              {
                                                staticClass: "form-check-label",
                                                attrs: {
                                                  for: "inlineCheckbox14"
                                                }
                                              },
                                              [_vm._v("Asthma/Lung Problems ")]
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "form-check form-check-inline"
                                          },
                                          [
                                            _c("input", {
                                              directives: [
                                                {
                                                  name: "model",
                                                  rawName: "v-model",
                                                  value:
                                                    _vm.formData
                                                      .medical_history,
                                                  expression:
                                                    "formData.medical_history"
                                                }
                                              ],
                                              staticClass: "form-check-input",
                                              attrs: {
                                                type: "checkbox",
                                                id: "inlineCheckbox15",
                                                value: "Back Problems"
                                              },
                                              domProps: {
                                                checked: Array.isArray(
                                                  _vm.formData.medical_history
                                                )
                                                  ? _vm._i(
                                                      _vm.formData
                                                        .medical_history,
                                                      "Back Problems"
                                                    ) > -1
                                                  : _vm.formData.medical_history
                                              },
                                              on: {
                                                change: function($event) {
                                                  var $$a =
                                                      _vm.formData
                                                        .medical_history,
                                                    $$el = $event.target,
                                                    $$c = $$el.checked
                                                      ? true
                                                      : false
                                                  if (Array.isArray($$a)) {
                                                    var $$v = "Back Problems",
                                                      $$i = _vm._i($$a, $$v)
                                                    if ($$el.checked) {
                                                      $$i < 0 &&
                                                        _vm.$set(
                                                          _vm.formData,
                                                          "medical_history",
                                                          $$a.concat([$$v])
                                                        )
                                                    } else {
                                                      $$i > -1 &&
                                                        _vm.$set(
                                                          _vm.formData,
                                                          "medical_history",
                                                          $$a
                                                            .slice(0, $$i)
                                                            .concat(
                                                              $$a.slice($$i + 1)
                                                            )
                                                        )
                                                    }
                                                  } else {
                                                    _vm.$set(
                                                      _vm.formData,
                                                      "medical_history",
                                                      $$c
                                                    )
                                                  }
                                                }
                                              }
                                            }),
                                            _vm._v(" "),
                                            _c(
                                              "label",
                                              {
                                                staticClass: "form-check-label",
                                                attrs: {
                                                  for: "inlineCheckbox15"
                                                }
                                              },
                                              [_vm._v("Back Problems ")]
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "form-check form-check-inline"
                                          },
                                          [
                                            _c("input", {
                                              directives: [
                                                {
                                                  name: "model",
                                                  rawName: "v-model",
                                                  value:
                                                    _vm.formData
                                                      .medical_history,
                                                  expression:
                                                    "formData.medical_history"
                                                }
                                              ],
                                              staticClass: "form-check-input",
                                              attrs: {
                                                type: "checkbox",
                                                id: "inlineCheckbox16",
                                                value: "Fungal Infection"
                                              },
                                              domProps: {
                                                checked: Array.isArray(
                                                  _vm.formData.medical_history
                                                )
                                                  ? _vm._i(
                                                      _vm.formData
                                                        .medical_history,
                                                      "Fungal Infection"
                                                    ) > -1
                                                  : _vm.formData.medical_history
                                              },
                                              on: {
                                                change: function($event) {
                                                  var $$a =
                                                      _vm.formData
                                                        .medical_history,
                                                    $$el = $event.target,
                                                    $$c = $$el.checked
                                                      ? true
                                                      : false
                                                  if (Array.isArray($$a)) {
                                                    var $$v =
                                                        "Fungal Infection",
                                                      $$i = _vm._i($$a, $$v)
                                                    if ($$el.checked) {
                                                      $$i < 0 &&
                                                        _vm.$set(
                                                          _vm.formData,
                                                          "medical_history",
                                                          $$a.concat([$$v])
                                                        )
                                                    } else {
                                                      $$i > -1 &&
                                                        _vm.$set(
                                                          _vm.formData,
                                                          "medical_history",
                                                          $$a
                                                            .slice(0, $$i)
                                                            .concat(
                                                              $$a.slice($$i + 1)
                                                            )
                                                        )
                                                    }
                                                  } else {
                                                    _vm.$set(
                                                      _vm.formData,
                                                      "medical_history",
                                                      $$c
                                                    )
                                                  }
                                                }
                                              }
                                            }),
                                            _vm._v(" "),
                                            _c(
                                              "label",
                                              {
                                                staticClass: "form-check-label",
                                                attrs: {
                                                  for: "inlineCheckbox16"
                                                }
                                              },
                                              [_vm._v("Fungal Infection ")]
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "form-check form-check-inline"
                                          },
                                          [
                                            _c("input", {
                                              directives: [
                                                {
                                                  name: "model",
                                                  rawName: "v-model",
                                                  value:
                                                    _vm.formData
                                                      .medical_history,
                                                  expression:
                                                    "formData.medical_history"
                                                }
                                              ],
                                              staticClass: "form-check-input",
                                              attrs: {
                                                type: "checkbox",
                                                id: "inlineCheckbox17",
                                                value: "Diabetes"
                                              },
                                              domProps: {
                                                checked: Array.isArray(
                                                  _vm.formData.medical_history
                                                )
                                                  ? _vm._i(
                                                      _vm.formData
                                                        .medical_history,
                                                      "Diabetes"
                                                    ) > -1
                                                  : _vm.formData.medical_history
                                              },
                                              on: {
                                                change: function($event) {
                                                  var $$a =
                                                      _vm.formData
                                                        .medical_history,
                                                    $$el = $event.target,
                                                    $$c = $$el.checked
                                                      ? true
                                                      : false
                                                  if (Array.isArray($$a)) {
                                                    var $$v = "Diabetes",
                                                      $$i = _vm._i($$a, $$v)
                                                    if ($$el.checked) {
                                                      $$i < 0 &&
                                                        _vm.$set(
                                                          _vm.formData,
                                                          "medical_history",
                                                          $$a.concat([$$v])
                                                        )
                                                    } else {
                                                      $$i > -1 &&
                                                        _vm.$set(
                                                          _vm.formData,
                                                          "medical_history",
                                                          $$a
                                                            .slice(0, $$i)
                                                            .concat(
                                                              $$a.slice($$i + 1)
                                                            )
                                                        )
                                                    }
                                                  } else {
                                                    _vm.$set(
                                                      _vm.formData,
                                                      "medical_history",
                                                      $$c
                                                    )
                                                  }
                                                }
                                              }
                                            }),
                                            _vm._v(" "),
                                            _c(
                                              "label",
                                              {
                                                staticClass: "form-check-label",
                                                attrs: {
                                                  for: "inlineCheckbox17"
                                                }
                                              },
                                              [_vm._v("Diabetes ")]
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "form-check form-check-inline"
                                          },
                                          [
                                            _c("input", {
                                              directives: [
                                                {
                                                  name: "model",
                                                  rawName: "v-model",
                                                  value:
                                                    _vm.formData
                                                      .medical_history,
                                                  expression:
                                                    "formData.medical_history"
                                                }
                                              ],
                                              staticClass: "form-check-input",
                                              attrs: {
                                                type: "checkbox",
                                                id: "inlineCheckbox18",
                                                value: "Muscular Pain"
                                              },
                                              domProps: {
                                                checked: Array.isArray(
                                                  _vm.formData.medical_history
                                                )
                                                  ? _vm._i(
                                                      _vm.formData
                                                        .medical_history,
                                                      "Muscular Pain"
                                                    ) > -1
                                                  : _vm.formData.medical_history
                                              },
                                              on: {
                                                change: function($event) {
                                                  var $$a =
                                                      _vm.formData
                                                        .medical_history,
                                                    $$el = $event.target,
                                                    $$c = $$el.checked
                                                      ? true
                                                      : false
                                                  if (Array.isArray($$a)) {
                                                    var $$v = "Muscular Pain",
                                                      $$i = _vm._i($$a, $$v)
                                                    if ($$el.checked) {
                                                      $$i < 0 &&
                                                        _vm.$set(
                                                          _vm.formData,
                                                          "medical_history",
                                                          $$a.concat([$$v])
                                                        )
                                                    } else {
                                                      $$i > -1 &&
                                                        _vm.$set(
                                                          _vm.formData,
                                                          "medical_history",
                                                          $$a
                                                            .slice(0, $$i)
                                                            .concat(
                                                              $$a.slice($$i + 1)
                                                            )
                                                        )
                                                    }
                                                  } else {
                                                    _vm.$set(
                                                      _vm.formData,
                                                      "medical_history",
                                                      $$c
                                                    )
                                                  }
                                                }
                                              }
                                            }),
                                            _vm._v(" "),
                                            _c(
                                              "label",
                                              {
                                                staticClass: "form-check-label",
                                                attrs: {
                                                  for: "inlineCheckbox18"
                                                }
                                              },
                                              [_vm._v("Muscular Pain")]
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "form-check form-check-inline"
                                          },
                                          [
                                            _c("input", {
                                              directives: [
                                                {
                                                  name: "model",
                                                  rawName: "v-model",
                                                  value:
                                                    _vm.formData
                                                      .medical_history,
                                                  expression:
                                                    "formData.medical_history"
                                                }
                                              ],
                                              staticClass: "form-check-input",
                                              attrs: {
                                                type: "checkbox",
                                                id: "inlineCheckbox19",
                                                value: "Other"
                                              },
                                              domProps: {
                                                checked: Array.isArray(
                                                  _vm.formData.medical_history
                                                )
                                                  ? _vm._i(
                                                      _vm.formData
                                                        .medical_history,
                                                      "Other"
                                                    ) > -1
                                                  : _vm.formData.medical_history
                                              },
                                              on: {
                                                change: function($event) {
                                                  var $$a =
                                                      _vm.formData
                                                        .medical_history,
                                                    $$el = $event.target,
                                                    $$c = $$el.checked
                                                      ? true
                                                      : false
                                                  if (Array.isArray($$a)) {
                                                    var $$v = "Other",
                                                      $$i = _vm._i($$a, $$v)
                                                    if ($$el.checked) {
                                                      $$i < 0 &&
                                                        _vm.$set(
                                                          _vm.formData,
                                                          "medical_history",
                                                          $$a.concat([$$v])
                                                        )
                                                    } else {
                                                      $$i > -1 &&
                                                        _vm.$set(
                                                          _vm.formData,
                                                          "medical_history",
                                                          $$a
                                                            .slice(0, $$i)
                                                            .concat(
                                                              $$a.slice($$i + 1)
                                                            )
                                                        )
                                                    }
                                                  } else {
                                                    _vm.$set(
                                                      _vm.formData,
                                                      "medical_history",
                                                      $$c
                                                    )
                                                  }
                                                }
                                              }
                                            }),
                                            _vm._v(" "),
                                            _c(
                                              "label",
                                              {
                                                staticClass: "form-check-label",
                                                attrs: {
                                                  for: "inlineCheckbox19"
                                                }
                                              },
                                              [_vm._v("Other")]
                                            )
                                          ]
                                        )
                                      ]
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "CCol",
                                  { staticClass: "px-2", attrs: { md: "12" } },
                                  [
                                    _c("div", { staticClass: "form-group" }, [
                                      _c("label", [
                                        _vm._v(
                                          " If you have ticked any of the above, please give details:"
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("textarea", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.formData.description,
                                            expression: "formData.description"
                                          }
                                        ],
                                        staticClass: "form-control",
                                        attrs: { rows: "3" },
                                        domProps: {
                                          value: _vm.formData.description
                                        },
                                        on: {
                                          input: function($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.$set(
                                              _vm.formData,
                                              "description",
                                              $event.target.value
                                            )
                                          }
                                        }
                                      })
                                    ])
                                  ]
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
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);