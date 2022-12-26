(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[71],{

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

/***/ "../coreui/src/views/mediator/view.vue":
/*!*********************************************!*\
  !*** ../coreui/src/views/mediator/view.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view_vue_vue_type_template_id_ba45eab2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view.vue?vue&type=template&id=ba45eab2& */ "../coreui/src/views/mediator/view.vue?vue&type=template&id=ba45eab2&");
/* harmony import */ var _view_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view.vue?vue&type=script&lang=js& */ "../coreui/src/views/mediator/view.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _laravel_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../laravel/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_laravel_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _view_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _view_vue_vue_type_template_id_ba45eab2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _view_vue_vue_type_template_id_ba45eab2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "coreui/src/views/mediator/view.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "../coreui/src/views/mediator/view.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ../coreui/src/views/mediator/view.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _laravel_node_modules_babel_loader_lib_index_js_ref_4_0_laravel_node_modules_vue_loader_lib_index_js_vue_loader_options_view_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../laravel/node_modules/babel-loader/lib??ref--4-0!../../../../laravel/node_modules/vue-loader/lib??vue-loader-options!./view.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!../coreui/src/views/mediator/view.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_laravel_node_modules_babel_loader_lib_index_js_ref_4_0_laravel_node_modules_vue_loader_lib_index_js_vue_loader_options_view_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "../coreui/src/views/mediator/view.vue?vue&type=template&id=ba45eab2&":
/*!****************************************************************************!*\
  !*** ../coreui/src/views/mediator/view.vue?vue&type=template&id=ba45eab2& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _laravel_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_laravel_node_modules_vue_loader_lib_index_js_vue_loader_options_view_vue_vue_type_template_id_ba45eab2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../laravel/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../laravel/node_modules/vue-loader/lib??vue-loader-options!./view.vue?vue&type=template&id=ba45eab2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!../coreui/src/views/mediator/view.vue?vue&type=template&id=ba45eab2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _laravel_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_laravel_node_modules_vue_loader_lib_index_js_vue_loader_options_view_vue_vue_type_template_id_ba45eab2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _laravel_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_laravel_node_modules_vue_loader_lib_index_js_vue_loader_options_view_vue_vue_type_template_id_ba45eab2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!../coreui/src/views/mediator/view.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!../coreui/src/views/mediator/view.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      center: {
        lat: 0,
        lng: 0
      },
      markers: []
    };
  },
  created: function created() {
    if (this.$route.params.id != '') {
      this.getDoctorFormData(this.$route.params.id);
    }
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])("Mediator/Index", ["doctorResult"])),
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])("Mediator/Index", ["getMediatorData"]), {
    getDoctorFormData: function getDoctorFormData(id) {
      var _this = this;

      this.getMediatorData(id).then(function () {
        var lat = parseFloat(_this.doctorResult.latitude);
        var lng = parseFloat(_this.doctorResult.longitude);
        var marker = {
          lat: lat,
          lng: lng
        }; //console.log(marker);

        _this.markers.push({
          position: marker
        });

        _this.center = marker;
      });
    }
  })
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!../coreui/src/views/mediator/view.vue?vue&type=template&id=ba45eab2&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!../coreui/src/views/mediator/view.vue?vue&type=template&id=ba45eab2& ***!
  \**********************************************************************************************************************************************************************************************************/
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
                    _vm._v(" Mediator Doctor "),
                    _c("vue-fontawesome", {
                      staticClass: "px-1",
                      attrs: { icon: "caret-right", size: "1" }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {},
                  [
                    _c(
                      "router-link",
                      { attrs: { to: { name: "mediator" } } },
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
            { staticClass: "p-2", attrs: { sm: "12" } },
            [
              _c(
                "CCard",
                { staticClass: "mb-0" },
                [
                  _c("CCardHeader", { staticClass: "p-2 px-3 bg_themes" }, [
                    _c("div", [
                      _c("strong", [_vm._v("Personal / General Info")])
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "CCardBody",
                    { staticClass: "px-1 py-2 view_page" },
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
                                  staticClass: "px-1",
                                  attrs: { sm: "12", md: "2" }
                                },
                                [
                                  _c("div", { staticClass: "form-group" }, [
                                    _c("div", { staticClass: "profile-img" }, [
                                      _c("div", { staticClass: "profileimg" }, [
                                        _vm.doctorResult.profile_photo
                                          ? _c("img", {
                                              attrs: {
                                                src:
                                                  "uploads/profile/" +
                                                  _vm.doctorResult.id +
                                                  "/" +
                                                  _vm.doctorResult.profile_photo
                                              }
                                            })
                                          : _c("img", {
                                              attrs: {
                                                src:
                                                  "/uploads/profile/default-profile.png"
                                              }
                                            })
                                      ])
                                    ])
                                  ])
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "CCol",
                                {
                                  staticClass: "px-2",
                                  attrs: { sm: "12", md: "10" }
                                },
                                [
                                  _c(
                                    "CRow",
                                    { staticClass: "m-0" },
                                    [
                                      _c(
                                        "CCol",
                                        {
                                          staticClass: "px-2",
                                          attrs: { sm: "6", md: "3" }
                                        },
                                        [
                                          _c(
                                            "div",
                                            { staticClass: "form-group" },
                                            [
                                              _c("label", [
                                                _vm._v("First Name")
                                              ]),
                                              _vm._v(" "),
                                              _c("h6", [
                                                _vm._v(
                                                  _vm._s(
                                                    _vm.doctorResult.first_name
                                                  )
                                                )
                                              ])
                                            ]
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "CCol",
                                        {
                                          staticClass: "px-2",
                                          attrs: { sm: "6", md: "3" }
                                        },
                                        [
                                          _c(
                                            "div",
                                            { staticClass: "form-group" },
                                            [
                                              _c("label", [
                                                _vm._v("Last Name")
                                              ]),
                                              _vm._v(" "),
                                              _c("h6", [
                                                _vm._v(
                                                  _vm._s(
                                                    _vm.doctorResult.last_name
                                                  )
                                                )
                                              ])
                                            ]
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "CCol",
                                        {
                                          staticClass: "px-2",
                                          attrs: { sm: "6", md: "3" }
                                        },
                                        [
                                          _c(
                                            "div",
                                            { staticClass: "form-group" },
                                            [
                                              _c("label", [_vm._v("Email")]),
                                              _vm._v(" "),
                                              _c("h6", [
                                                _vm._v(
                                                  _vm._s(_vm.doctorResult.email)
                                                )
                                              ])
                                            ]
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "CCol",
                                        {
                                          staticClass: "px-2",
                                          attrs: { sm: "6", md: "3" }
                                        },
                                        [
                                          _c(
                                            "div",
                                            { staticClass: "form-group" },
                                            [
                                              _c("label", [
                                                _vm._v("Phone No.")
                                              ]),
                                              _vm._v(" "),
                                              _c("h6", [
                                                _vm._v(
                                                  _vm._s(
                                                    _vm.doctorResult
                                                      .phone_number
                                                  )
                                                )
                                              ])
                                            ]
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "CCol",
                                        {
                                          staticClass: "px-2",
                                          attrs: { sm: "6", md: "3" }
                                        },
                                        [
                                          _c(
                                            "div",
                                            { staticClass: "form-group" },
                                            [
                                              _c("label", [_vm._v("Age")]),
                                              _vm._v(" "),
                                              _c("h6", [
                                                _vm._v(
                                                  _vm._s(_vm.doctorResult.age)
                                                )
                                              ])
                                            ]
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "CCol",
                                        {
                                          staticClass: "px-2",
                                          attrs: { sm: "6", md: "3" }
                                        },
                                        [
                                          _c(
                                            "div",
                                            { staticClass: "form-group" },
                                            [
                                              _c("label", [_vm._v("Gender")]),
                                              _vm._v(" "),
                                              _c("h6", [_vm._v("Male")])
                                            ]
                                          )
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
              ),
              _vm._v(" "),
              _c(
                "CCard",
                { staticClass: "mb-0" },
                [
                  _c("CCardHeader", { staticClass: "p-2 px-3 bg_themes" }, [
                    _c("div", [_c("strong", [_vm._v("Location")])])
                  ]),
                  _vm._v(" "),
                  _c(
                    "CCardBody",
                    { staticClass: "px-1 py-2 view_page" },
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
                                  staticClass: "px-2",
                                  attrs: { sm: "6", md: "3" }
                                },
                                [
                                  _c("div", { staticClass: "form-group" }, [
                                    _c("label", [_vm._v("Select Address")]),
                                    _vm._v(" "),
                                    _c("h6", [
                                      _vm._v(
                                        _vm._s(_vm.doctorResult.full_address)
                                      )
                                    ])
                                  ])
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "CCol",
                                {
                                  staticClass: "px-2",
                                  attrs: { sm: "6", md: "3" }
                                },
                                [
                                  _c("div", { staticClass: "form-group" }, [
                                    _c("label", [_vm._v("Address")]),
                                    _vm._v(" "),
                                    _c("h6", [
                                      _vm._v(_vm._s(_vm.doctorResult.address))
                                    ])
                                  ])
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "CCol",
                                {
                                  staticClass: "px-2",
                                  attrs: { sm: "6", md: "3" }
                                },
                                [
                                  _c("div", { staticClass: "form-group" }, [
                                    _c("label", [_vm._v("Address 2")]),
                                    _vm._v(" "),
                                    _c("h6", [
                                      _vm._v(_vm._s(_vm.doctorResult.address2))
                                    ])
                                  ])
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "CCol",
                                {
                                  staticClass: "px-2",
                                  attrs: { sm: "6", md: "3" }
                                },
                                [
                                  _c("div", { staticClass: "form-group" }, [
                                    _c("label", [_vm._v("Area")]),
                                    _vm._v(" "),
                                    _c("h6", [
                                      _vm._v(_vm._s(_vm.doctorResult.area))
                                    ])
                                  ])
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "CCol",
                                {
                                  staticClass: "px-2",
                                  attrs: { sm: "6", md: "3" }
                                },
                                [
                                  _c("div", { staticClass: "form-group" }, [
                                    _c("label", [_vm._v("City")]),
                                    _vm._v(" "),
                                    _c("h6", [
                                      _vm._v(_vm._s(_vm.doctorResult.city))
                                    ])
                                  ])
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "CCol",
                                {
                                  staticClass: "px-2",
                                  attrs: { sm: "6", md: "3" }
                                },
                                [
                                  _c("div", { staticClass: "form-group" }, [
                                    _c("label", [_vm._v("State")]),
                                    _vm._v(" "),
                                    _c("h6", [
                                      _vm._v(_vm._s(_vm.doctorResult.state))
                                    ])
                                  ])
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "CCol",
                                {
                                  staticClass: "px-2",
                                  attrs: { sm: "6", md: "3" }
                                },
                                [
                                  _c("div", { staticClass: "form-group" }, [
                                    _c("label", [_vm._v("Country")]),
                                    _vm._v(" "),
                                    _c("h6", [
                                      _vm._v(_vm._s(_vm.doctorResult.country))
                                    ])
                                  ])
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "CCol",
                                {
                                  staticClass: "px-2",
                                  attrs: { sm: "6", md: "3" }
                                },
                                [
                                  _c("div", { staticClass: "form-group" }, [
                                    _c("label", [_vm._v("Zip code")]),
                                    _vm._v(" "),
                                    _c("h6", [
                                      _vm._v(_vm._s(_vm.doctorResult.zip_code))
                                    ])
                                  ])
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "CCol",
                                {
                                  staticClass: "px-2",
                                  attrs: { sm: "6", md: "3" }
                                },
                                [
                                  _c("div", { staticClass: "form-group" }, [
                                    _c("label", [_vm._v("latitude")]),
                                    _vm._v(" "),
                                    _c("h6", [
                                      _vm._v(_vm._s(_vm.doctorResult.latitude))
                                    ])
                                  ])
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "CCol",
                                {
                                  staticClass: "px-2",
                                  attrs: { sm: "6", md: "3" }
                                },
                                [
                                  _c("div", { staticClass: "form-group" }, [
                                    _c("label", [_vm._v("longitude")]),
                                    _vm._v(" "),
                                    _c("h6", [
                                      _vm._v(_vm._s(_vm.doctorResult.longitude))
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
                  ),
                  _vm._v(" "),
                  _c(
                    "gmap-map",
                    {
                      staticStyle: { width: "100%", height: "300px" },
                      attrs: {
                        center: _vm.center,
                        zoom: 17,
                        "data-fullscreen": "true"
                      }
                    },
                    _vm._l(_vm.markers, function(m, index) {
                      return _c("gmap-marker", {
                        key: index,
                        attrs: { position: m.position },
                        on: {
                          click: function($event) {
                            _vm.center = m.position
                          }
                        }
                      })
                    }),
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "CCard",
                { staticClass: "mb-0" },
                [
                  _c("CCardHeader", { staticClass: "p-2 px-3 bg_themes" }, [
                    _c("div", [
                      _c("strong", [_vm._v("ID and Licensing Credentials")])
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "CCardBody",
                    { staticClass: "px-1 py-2 view_page" },
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
                                  staticClass: "px-2",
                                  attrs: { sm: "6", md: "4" }
                                },
                                [
                                  _c("div", { staticClass: "form-group" }, [
                                    _c("label", [_vm._v("Type")]),
                                    _vm._v(" "),
                                    _c("h6", [
                                      _vm._v(_vm._s(_vm.doctorResult.type))
                                    ])
                                  ])
                                ]
                              ),
                              _vm._v(" "),
                              _vm.doctorResult.certificate_awarding_university
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
                                            "Certificate awarding University"
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          { staticClass: "attch-button" },
                                          [
                                            _c(
                                              "a",
                                              {
                                                attrs: {
                                                  href:
                                                    "uploads/doctor/" +
                                                    _vm.doctorResult.user_id +
                                                    "/" +
                                                    _vm.doctorResult
                                                      .certificate_awarding_university,
                                                  download: ""
                                                }
                                              },
                                              [
                                                _vm._v(" Download "),
                                                _c("CIcon", {
                                                  attrs: { name: "cil-file" }
                                                })
                                              ],
                                              1
                                            )
                                          ]
                                        )
                                      ])
                                    ]
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.doctorResult.speciality_diploma
                                ? _c(
                                    "CCol",
                                    {
                                      staticClass: "px-2",
                                      attrs: { sm: "6", md: "4" }
                                    },
                                    [
                                      _c("div", { staticClass: "form-group" }, [
                                        _c("label", [
                                          _vm._v("Copy of specialty diploma")
                                        ]),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          { staticClass: "attch-button" },
                                          [
                                            _c(
                                              "a",
                                              {
                                                attrs: {
                                                  href:
                                                    "uploads/doctor/" +
                                                    _vm.doctorResult.user_id +
                                                    "/" +
                                                    _vm.doctorResult
                                                      .speciality_diploma,
                                                  download: ""
                                                }
                                              },
                                              [
                                                _vm._v(" Download "),
                                                _c("CIcon", {
                                                  attrs: { name: "cil-file" }
                                                })
                                              ],
                                              1
                                            )
                                          ]
                                        )
                                      ])
                                    ]
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.doctorResult.copy_of_registration
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
                                            "Copy of registration in the doctor’s council (Medical council)"
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          { staticClass: "attch-button" },
                                          [
                                            _c(
                                              "a",
                                              {
                                                attrs: {
                                                  href:
                                                    "uploads/doctor/" +
                                                    _vm.doctorResult.user_id +
                                                    "/" +
                                                    _vm.doctorResult
                                                      .copy_of_registration,
                                                  download: ""
                                                }
                                              },
                                              [
                                                _vm._v(" Download "),
                                                _c("CIcon", {
                                                  attrs: { name: "cil-file" }
                                                })
                                              ],
                                              1
                                            )
                                          ]
                                        )
                                      ])
                                    ]
                                  )
                                : _vm._e(),
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
                                      _vm._v("Medical License Number")
                                    ]),
                                    _vm._v(" "),
                                    _c("h6", [
                                      _vm._v(
                                        _vm._s(
                                          _vm.doctorResult
                                            .medical_license_number
                                        )
                                      )
                                    ])
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
                                      _vm._v("Date of Registration")
                                    ]),
                                    _vm._v(" "),
                                    _c("h6", [
                                      _vm._v(
                                        _vm._s(
                                          _vm.doctorResult.date_of_registration
                                        )
                                      )
                                    ])
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
                                    _c("label", [_vm._v("Registration No.")]),
                                    _vm._v(" "),
                                    _c("h6", [
                                      _vm._v(
                                        _vm._s(_vm.doctorResult.registration_no)
                                      )
                                    ])
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
                                      _vm._v("Years of Experience")
                                    ]),
                                    _vm._v(" "),
                                    _c("h6", [
                                      _vm._v(
                                        _vm._s(_vm.doctorResult.experience)
                                      )
                                    ])
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
                                      _vm._v("Current Clinic/hospital of work")
                                    ]),
                                    _vm._v(" "),
                                    _c("h6", [
                                      _vm._v(
                                        _vm._s(
                                          _vm.doctorResult
                                            .current_clinic_hospital
                                        )
                                      )
                                    ])
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
                                      _vm._v("Radius of Dr's availability")
                                    ]),
                                    _vm._v(" "),
                                    _c("h6", [
                                      _vm._v(
                                        _vm._s(
                                          _vm.doctorResult
                                            .availability_time_from
                                        )
                                      )
                                    ])
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
                                      _vm._v("Service(s) provided")
                                    ]),
                                    _vm._v(" "),
                                    _c("h6", [
                                      _vm._v(
                                        _vm._s(
                                          _vm.doctorResult.service_provided
                                        )
                                      )
                                    ])
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
                                  _c(
                                    "div",
                                    { staticClass: "form-group" },
                                    [
                                      _c("label", [_vm._v("Equipment list")]),
                                      _vm._v(" "),
                                      _vm._l(
                                        _vm.doctorResult.equipmentArr,
                                        function(row, index) {
                                          return _c(
                                            "ul",
                                            {
                                              key: index,
                                              staticClass:
                                                "d-flex justify-content-around m-0 p-0"
                                            },
                                            [
                                              _vm._v(
                                                "\n                              " +
                                                  _vm._s(row.equipment_name) +
                                                  "\n                            "
                                              )
                                            ]
                                          )
                                        }
                                      )
                                    ],
                                    2
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
                                    _c("label", [
                                      _vm._v("Willing to serve as")
                                    ]),
                                    _vm._v(" "),
                                    _c("h6", [
                                      _vm._v(
                                        _vm._s(
                                          _vm.doctorResult.willing_to_serve
                                        )
                                      )
                                    ])
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
                                    _c("label", [_vm._v("Area of Coverage")]),
                                    _vm._v(" "),
                                    _c("h6", [
                                      _vm._v(
                                        _vm._s(
                                          _vm.doctorResult.area_of_coverage
                                        )
                                      )
                                    ])
                                  ])
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "CCol",
                                { staticClass: "px-2", attrs: { sm: "12" } },
                                [
                                  _c("div", { staticClass: "form-group" }, [
                                    _c("label", [
                                      _vm._v(
                                        "Brief summary about yourself (150 words)"
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("h6", [
                                      _vm._v(
                                        "\n                              " +
                                          _vm._s(
                                            _vm.doctorResult.brief_summary
                                          ) +
                                          "     \n                           "
                                      )
                                    ])
                                  ])
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "CCol",
                                { staticClass: "px-2", attrs: { sm: "12" } },
                                [
                                  _c("div", { staticClass: "form-group" }, [
                                    _c("label", [
                                      _vm._v(
                                        "Terms and condition (policy and procedure of working together)"
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("h6", [
                                      _vm._v(
                                        "\n                              " +
                                          _vm._s(
                                            _vm.doctorResult
                                              .terms_and_conditions
                                          ) +
                                          "\n                           "
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
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);