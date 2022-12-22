(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[70],{

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

/***/ "../coreui/src/views/doctors/addPrescription.vue":
/*!*******************************************************!*\
  !*** ../coreui/src/views/doctors/addPrescription.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _addPrescription_vue_vue_type_template_id_51c6e3e6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addPrescription.vue?vue&type=template&id=51c6e3e6& */ "../coreui/src/views/doctors/addPrescription.vue?vue&type=template&id=51c6e3e6&");
/* harmony import */ var _addPrescription_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addPrescription.vue?vue&type=script&lang=js& */ "../coreui/src/views/doctors/addPrescription.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _laravel_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../laravel/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_laravel_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _addPrescription_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _addPrescription_vue_vue_type_template_id_51c6e3e6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _addPrescription_vue_vue_type_template_id_51c6e3e6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "coreui/src/views/doctors/addPrescription.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "../coreui/src/views/doctors/addPrescription.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ../coreui/src/views/doctors/addPrescription.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _laravel_node_modules_babel_loader_lib_index_js_ref_4_0_laravel_node_modules_vue_loader_lib_index_js_vue_loader_options_addPrescription_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../laravel/node_modules/babel-loader/lib??ref--4-0!../../../../laravel/node_modules/vue-loader/lib??vue-loader-options!./addPrescription.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!../coreui/src/views/doctors/addPrescription.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_laravel_node_modules_babel_loader_lib_index_js_ref_4_0_laravel_node_modules_vue_loader_lib_index_js_vue_loader_options_addPrescription_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "../coreui/src/views/doctors/addPrescription.vue?vue&type=template&id=51c6e3e6&":
/*!**************************************************************************************!*\
  !*** ../coreui/src/views/doctors/addPrescription.vue?vue&type=template&id=51c6e3e6& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _laravel_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_laravel_node_modules_vue_loader_lib_index_js_vue_loader_options_addPrescription_vue_vue_type_template_id_51c6e3e6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../laravel/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../laravel/node_modules/vue-loader/lib??vue-loader-options!./addPrescription.vue?vue&type=template&id=51c6e3e6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!../coreui/src/views/doctors/addPrescription.vue?vue&type=template&id=51c6e3e6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _laravel_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_laravel_node_modules_vue_loader_lib_index_js_vue_loader_options_addPrescription_vue_vue_type_template_id_51c6e3e6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _laravel_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_laravel_node_modules_vue_loader_lib_index_js_vue_loader_options_addPrescription_vue_vue_type_template_id_51c6e3e6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!../coreui/src/views/doctors/addPrescription.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!../coreui/src/views/doctors/addPrescription.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
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




/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      doctorPatientData: [],
      appointment_id: "",
      items: [{
        title: '',
        qty: '',
        days: '',
        morning: '',
        afternoon: '',
        evening: '',
        night: ''
      }]
    };
  },
  created: function created() {
    if (this.$route.params.id != '' && this.$route.params.id != undefined) {
      this.getPatientDoctorinfo(this.$route.params.id);
      this.appointment_id = this.$route.params.id;
    }
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])("Doctor/Index", ["result", "returnData", "PatientDoctor"])),
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])("Doctor/Index", ["getPatientDoctorinfoAppointment", "submitPrescriptionForm"]), {
    getPatientDoctorinfo: function getPatientDoctorinfo(id) {
      var _this = this;

      this.getPatientDoctorinfoAppointment(id).then(function () {
        _this.doctorPatientData = _this.PatientDoctor.doctorPatientData;
      });
    },
    addPrescription: function addPrescription() {
      var _this2 = this;

      if (this.items[0].title != '' && this.items[0].qty != '' && this.items[0].days != '') {
        var newData = new FormData();
        newData.append('formData', JSON.stringify(this.items));
        this.submitPrescriptionForm({
          newData: newData,
          appointment_id: this.appointment_id
        }).then(function () {
          if (_this2.returnData.status == 'success') {
            vue__WEBPACK_IMPORTED_MODULE_1___default.a.$toast.open({
              message: _this2.returnData.message,
              type: _this2.returnData.status
            });

            _this2.$router.push({
              name: 'doctor_appointment_patient_view',
              params: {
                id: _this2.appointment_id
              }
            });
          }
        })["catch"](function (error) {});
      } else {
        vue__WEBPACK_IMPORTED_MODULE_1___default.a.$toast.open({
          message: "Please Update data!",
          type: 'error',
          duration: 5000,
          dismissible: true
        });
      }
    },
    addItem: function addItem() {
      this.items.push({
        title: '',
        qty: '',
        days: '',
        morning: '',
        afternoon: '',
        evening: '',
        night: ''
      });
    },
    removeItem: function removeItem(index) {
      this.items.splice(index, 1);
    }
  })
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!../coreui/src/views/doctors/addPrescription.vue?vue&type=template&id=51c6e3e6&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!../coreui/src/views/doctors/addPrescription.vue?vue&type=template&id=51c6e3e6& ***!
  \********************************************************************************************************************************************************************************************************************/
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
          _c("CCol", { staticClass: "px-2 btn-sticky", attrs: { sm: "12" } }, [
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
                    _vm._v("\n               Patient \n               "),
                    _c("vue-fontawesome", {
                      staticClass: "px-1",
                      attrs: { icon: "caret-right", size: "1" }
                    }),
                    _vm._v("\n               Add Prescription\n            ")
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {},
                  [
                    _c(
                      "CButton",
                      {
                        staticClass: "btn_custom",
                        attrs: { size: "sm" },
                        on: { click: _vm.addPrescription }
                      },
                      [_vm._v("Save")]
                    ),
                    _vm._v(" "),
                    _c(
                      "router-link",
                      {
                        attrs: {
                          to: {
                            name: "doctor_appointment_patient_view",
                            params: { id: _vm.appointment_id }
                          }
                        }
                      },
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
            { staticClass: "px-2 mx-auto", attrs: { sm: "9" } },
            [
              _c(
                "CCard",
                [
                  _c(
                    "CCardBody",
                    { staticClass: "p-3" },
                    [
                      _c(
                        "CRow",
                        { staticClass: "mx-0" },
                        [
                          _c(
                            "CCol",
                            { staticClass: "px-2", attrs: { md: "6" } },
                            [
                              _c("div", { staticClass: "dr_infom" }, [
                                _c("img", {
                                  attrs: {
                                    src: "images/uyr_logo.png",
                                    width: "120px"
                                  }
                                })
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "CCol",
                            {
                              staticClass: "px-2 mt-3 text-right",
                              attrs: { md: "6" }
                            },
                            [
                              _c("div", { staticClass: "dr_infom" }, [
                                _c("span", [
                                  _vm._v(_vm._s(_vm.doctorPatientData.date))
                                ]),
                                _vm._v(" "),
                                _c("span", [_vm._v("#INV001")])
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "CCol",
                            { staticClass: "px-2 mt-3", attrs: { md: "6" } },
                            [
                              _c("div", { staticClass: "dr_infom" }, [
                                _c("h4", [_vm._v("Docotor Info")]),
                                _vm._v(" "),
                                _c("span", [
                                  _vm._v(
                                    "Dr." +
                                      _vm._s(_vm.doctorPatientData.doctorName)
                                  )
                                ]),
                                _vm._v(" "),
                                _c("span", [
                                  _vm._v(
                                    _vm._s(_vm.doctorPatientData.Speciality)
                                  )
                                ]),
                                _vm._v(" "),
                                _c("span", [
                                  _vm._v(
                                    _vm._s(_vm.doctorPatientData.doctorAddress)
                                  )
                                ])
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "CCol",
                            {
                              staticClass: "px-2 mt-3 text-right",
                              attrs: { md: "6" }
                            },
                            [
                              _c("div", { staticClass: "dr_infom" }, [
                                _c("h4", [_vm._v("Patient Info")]),
                                _vm._v(" "),
                                _c("span", [
                                  _vm._v(
                                    _vm._s(_vm.doctorPatientData.patientName)
                                  )
                                ]),
                                _vm._v(" "),
                                _c("span", [
                                  _vm._v(
                                    _vm._s(_vm.doctorPatientData.patientAddress)
                                  )
                                ])
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "CCol",
                            { staticClass: "px-2", attrs: { md: "12" } },
                            [
                              _c("div", { staticClass: "Prescription_table" }, [
                                _c("table", { staticClass: "table" }, [
                                  _c("thead", [
                                    _c("tr", [
                                      _c("th", [_vm._v("Name")]),
                                      _vm._v(" "),
                                      _c("th", { attrs: { width: "150" } }, [
                                        _vm._v("Quantity")
                                      ]),
                                      _vm._v(" "),
                                      _c("th", { attrs: { width: "150" } }, [
                                        _vm._v("Days")
                                      ]),
                                      _vm._v(" "),
                                      _c("th", [_vm._v("Time")]),
                                      _vm._v(" "),
                                      _c("th", [_vm._v("Action")])
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "tbody",
                                    _vm._l(_vm.items, function(item, index) {
                                      return _c("tr", [
                                        _c("td", [
                                          _c("input", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value: item.title,
                                                expression: "item.title"
                                              }
                                            ],
                                            staticClass: "form-control",
                                            attrs: {
                                              type: "text",
                                              id: "title"
                                            },
                                            domProps: { value: item.title },
                                            on: {
                                              input: function($event) {
                                                if ($event.target.composing) {
                                                  return
                                                }
                                                _vm.$set(
                                                  item,
                                                  "title",
                                                  $event.target.value
                                                )
                                              }
                                            }
                                          })
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _c("input", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value: item.qty,
                                                expression: "item.qty"
                                              }
                                            ],
                                            staticClass: "form-control",
                                            attrs: { type: "number" },
                                            domProps: { value: item.qty },
                                            on: {
                                              input: function($event) {
                                                if ($event.target.composing) {
                                                  return
                                                }
                                                _vm.$set(
                                                  item,
                                                  "qty",
                                                  $event.target.value
                                                )
                                              }
                                            }
                                          })
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _c("input", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value: item.days,
                                                expression: "item.days"
                                              }
                                            ],
                                            staticClass: "form-control",
                                            attrs: { type: "number" },
                                            domProps: { value: item.days },
                                            on: {
                                              input: function($event) {
                                                if ($event.target.composing) {
                                                  return
                                                }
                                                _vm.$set(
                                                  item,
                                                  "days",
                                                  $event.target.value
                                                )
                                              }
                                            }
                                          })
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "d-flex align-items-center"
                                            },
                                            [
                                              _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "Prescription_checkbox"
                                                },
                                                [
                                                  _c("input", {
                                                    directives: [
                                                      {
                                                        name: "model",
                                                        rawName: "v-model",
                                                        value: item.morning,
                                                        expression:
                                                          "item.morning"
                                                      }
                                                    ],
                                                    attrs: {
                                                      type: "checkbox",
                                                      name: "morning",
                                                      id: "morning" + index
                                                    },
                                                    domProps: {
                                                      checked: Array.isArray(
                                                        item.morning
                                                      )
                                                        ? _vm._i(
                                                            item.morning,
                                                            null
                                                          ) > -1
                                                        : item.morning
                                                    },
                                                    on: {
                                                      change: function($event) {
                                                        var $$a = item.morning,
                                                          $$el = $event.target,
                                                          $$c = $$el.checked
                                                            ? true
                                                            : false
                                                        if (
                                                          Array.isArray($$a)
                                                        ) {
                                                          var $$v = null,
                                                            $$i = _vm._i(
                                                              $$a,
                                                              $$v
                                                            )
                                                          if ($$el.checked) {
                                                            $$i < 0 &&
                                                              _vm.$set(
                                                                item,
                                                                "morning",
                                                                $$a.concat([
                                                                  $$v
                                                                ])
                                                              )
                                                          } else {
                                                            $$i > -1 &&
                                                              _vm.$set(
                                                                item,
                                                                "morning",
                                                                $$a
                                                                  .slice(0, $$i)
                                                                  .concat(
                                                                    $$a.slice(
                                                                      $$i + 1
                                                                    )
                                                                  )
                                                              )
                                                          }
                                                        } else {
                                                          _vm.$set(
                                                            item,
                                                            "morning",
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
                                                      attrs: {
                                                        for: "morning" + index
                                                      }
                                                    },
                                                    [_vm._v("Morning")]
                                                  )
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "Prescription_checkbox"
                                                },
                                                [
                                                  _c("input", {
                                                    directives: [
                                                      {
                                                        name: "model",
                                                        rawName: "v-model",
                                                        value: item.afternoon,
                                                        expression:
                                                          "item.afternoon"
                                                      }
                                                    ],
                                                    attrs: {
                                                      type: "checkbox",
                                                      name: "afternoon",
                                                      id: "afternoon" + index
                                                    },
                                                    domProps: {
                                                      checked: Array.isArray(
                                                        item.afternoon
                                                      )
                                                        ? _vm._i(
                                                            item.afternoon,
                                                            null
                                                          ) > -1
                                                        : item.afternoon
                                                    },
                                                    on: {
                                                      change: function($event) {
                                                        var $$a =
                                                            item.afternoon,
                                                          $$el = $event.target,
                                                          $$c = $$el.checked
                                                            ? true
                                                            : false
                                                        if (
                                                          Array.isArray($$a)
                                                        ) {
                                                          var $$v = null,
                                                            $$i = _vm._i(
                                                              $$a,
                                                              $$v
                                                            )
                                                          if ($$el.checked) {
                                                            $$i < 0 &&
                                                              _vm.$set(
                                                                item,
                                                                "afternoon",
                                                                $$a.concat([
                                                                  $$v
                                                                ])
                                                              )
                                                          } else {
                                                            $$i > -1 &&
                                                              _vm.$set(
                                                                item,
                                                                "afternoon",
                                                                $$a
                                                                  .slice(0, $$i)
                                                                  .concat(
                                                                    $$a.slice(
                                                                      $$i + 1
                                                                    )
                                                                  )
                                                              )
                                                          }
                                                        } else {
                                                          _vm.$set(
                                                            item,
                                                            "afternoon",
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
                                                      attrs: {
                                                        for: "afternoon" + index
                                                      }
                                                    },
                                                    [_vm._v("Afternoon")]
                                                  )
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "Prescription_checkbox"
                                                },
                                                [
                                                  _c("input", {
                                                    directives: [
                                                      {
                                                        name: "model",
                                                        rawName: "v-model",
                                                        value: item.evening,
                                                        expression:
                                                          "item.evening"
                                                      }
                                                    ],
                                                    attrs: {
                                                      type: "checkbox",
                                                      name: "evening",
                                                      id: "evening" + index
                                                    },
                                                    domProps: {
                                                      checked: Array.isArray(
                                                        item.evening
                                                      )
                                                        ? _vm._i(
                                                            item.evening,
                                                            null
                                                          ) > -1
                                                        : item.evening
                                                    },
                                                    on: {
                                                      change: function($event) {
                                                        var $$a = item.evening,
                                                          $$el = $event.target,
                                                          $$c = $$el.checked
                                                            ? true
                                                            : false
                                                        if (
                                                          Array.isArray($$a)
                                                        ) {
                                                          var $$v = null,
                                                            $$i = _vm._i(
                                                              $$a,
                                                              $$v
                                                            )
                                                          if ($$el.checked) {
                                                            $$i < 0 &&
                                                              _vm.$set(
                                                                item,
                                                                "evening",
                                                                $$a.concat([
                                                                  $$v
                                                                ])
                                                              )
                                                          } else {
                                                            $$i > -1 &&
                                                              _vm.$set(
                                                                item,
                                                                "evening",
                                                                $$a
                                                                  .slice(0, $$i)
                                                                  .concat(
                                                                    $$a.slice(
                                                                      $$i + 1
                                                                    )
                                                                  )
                                                              )
                                                          }
                                                        } else {
                                                          _vm.$set(
                                                            item,
                                                            "evening",
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
                                                      attrs: {
                                                        for: "evening" + index
                                                      }
                                                    },
                                                    [_vm._v("Evening")]
                                                  )
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "Prescription_checkbox"
                                                },
                                                [
                                                  _c("input", {
                                                    directives: [
                                                      {
                                                        name: "model",
                                                        rawName: "v-model",
                                                        value: item.night,
                                                        expression: "item.night"
                                                      }
                                                    ],
                                                    attrs: {
                                                      type: "checkbox",
                                                      name: "night",
                                                      id: "night" + index
                                                    },
                                                    domProps: {
                                                      checked: Array.isArray(
                                                        item.night
                                                      )
                                                        ? _vm._i(
                                                            item.night,
                                                            null
                                                          ) > -1
                                                        : item.night
                                                    },
                                                    on: {
                                                      change: function($event) {
                                                        var $$a = item.night,
                                                          $$el = $event.target,
                                                          $$c = $$el.checked
                                                            ? true
                                                            : false
                                                        if (
                                                          Array.isArray($$a)
                                                        ) {
                                                          var $$v = null,
                                                            $$i = _vm._i(
                                                              $$a,
                                                              $$v
                                                            )
                                                          if ($$el.checked) {
                                                            $$i < 0 &&
                                                              _vm.$set(
                                                                item,
                                                                "night",
                                                                $$a.concat([
                                                                  $$v
                                                                ])
                                                              )
                                                          } else {
                                                            $$i > -1 &&
                                                              _vm.$set(
                                                                item,
                                                                "night",
                                                                $$a
                                                                  .slice(0, $$i)
                                                                  .concat(
                                                                    $$a.slice(
                                                                      $$i + 1
                                                                    )
                                                                  )
                                                              )
                                                          }
                                                        } else {
                                                          _vm.$set(
                                                            item,
                                                            "night",
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
                                                      attrs: {
                                                        for: "night" + index
                                                      }
                                                    },
                                                    [_vm._v("Night")]
                                                  )
                                                ]
                                              )
                                            ]
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c(
                                          "td",
                                          [
                                            _vm.items.length - 1 <= index
                                              ? _c(
                                                  "a",
                                                  {
                                                    staticClass:
                                                      "btn btn-success",
                                                    class: {
                                                      disabled:
                                                        item.title.length ===
                                                          0 ||
                                                        item.qty.length == 0 ||
                                                        item.days.length == 0
                                                    },
                                                    on: { click: _vm.addItem }
                                                  },
                                                  [_vm._v("Add More")]
                                                )
                                              : _vm._e(),
                                            _vm._v(" "),
                                            _vm.items.length - 1 >= index &&
                                            _vm.items.length - 1 != index
                                              ? _c(
                                                  "CButton",
                                                  {
                                                    staticClass:
                                                      "btn-outline-danger",
                                                    attrs: {
                                                      size: "sm",
                                                      color: "",
                                                      title: "Delete"
                                                    },
                                                    on: {
                                                      click: function($event) {
                                                        return _vm.removeItem(
                                                          index
                                                        )
                                                      }
                                                    }
                                                  },
                                                  [
                                                    _c("vue-fontawesome", {
                                                      attrs: {
                                                        icon: "trash",
                                                        size: "0.8"
                                                      }
                                                    })
                                                  ],
                                                  1
                                                )
                                              : _vm._e()
                                          ],
                                          1
                                        )
                                      ])
                                    }),
                                    0
                                  )
                                ])
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "doctor_signature" }, [
                                _c("br"),
                                _c("br"),
                                _vm._v(" "),
                                _c("br"),
                                _vm._v(" "),
                                _c("p", { staticClass: "mb-0" }, [
                                  _vm._v(
                                    "Dr. " +
                                      _vm._s(_vm.doctorPatientData.doctorName)
                                  )
                                ]),
                                _vm._v(" "),
                                _c("span", [
                                  _vm._v(
                                    _vm._s(_vm.doctorPatientData.Speciality)
                                  )
                                ])
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
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);