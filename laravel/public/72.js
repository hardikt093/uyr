(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[72],{

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

/***/ "../coreui/src/views/frontend/about.vue":
/*!**********************************************!*\
  !*** ../coreui/src/views/frontend/about.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _about_vue_vue_type_template_id_dbd9ad4c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about.vue?vue&type=template&id=dbd9ad4c& */ "../coreui/src/views/frontend/about.vue?vue&type=template&id=dbd9ad4c&");
/* harmony import */ var _about_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about.vue?vue&type=script&lang=js& */ "../coreui/src/views/frontend/about.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _laravel_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../laravel/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_laravel_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _about_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _about_vue_vue_type_template_id_dbd9ad4c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _about_vue_vue_type_template_id_dbd9ad4c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "coreui/src/views/frontend/about.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "../coreui/src/views/frontend/about.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ../coreui/src/views/frontend/about.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _laravel_node_modules_babel_loader_lib_index_js_ref_4_0_laravel_node_modules_vue_loader_lib_index_js_vue_loader_options_about_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../laravel/node_modules/babel-loader/lib??ref--4-0!../../../../laravel/node_modules/vue-loader/lib??vue-loader-options!./about.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!../coreui/src/views/frontend/about.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_laravel_node_modules_babel_loader_lib_index_js_ref_4_0_laravel_node_modules_vue_loader_lib_index_js_vue_loader_options_about_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "../coreui/src/views/frontend/about.vue?vue&type=template&id=dbd9ad4c&":
/*!*****************************************************************************!*\
  !*** ../coreui/src/views/frontend/about.vue?vue&type=template&id=dbd9ad4c& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _laravel_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_laravel_node_modules_vue_loader_lib_index_js_vue_loader_options_about_vue_vue_type_template_id_dbd9ad4c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../laravel/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../laravel/node_modules/vue-loader/lib??vue-loader-options!./about.vue?vue&type=template&id=dbd9ad4c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!../coreui/src/views/frontend/about.vue?vue&type=template&id=dbd9ad4c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _laravel_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_laravel_node_modules_vue_loader_lib_index_js_vue_loader_options_about_vue_vue_type_template_id_dbd9ad4c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _laravel_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_laravel_node_modules_vue_loader_lib_index_js_vue_loader_options_about_vue_vue_type_template_id_dbd9ad4c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!../coreui/src/views/frontend/about.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!../coreui/src/views/frontend/about.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "../coreui/node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "../coreui/node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vform */ "../coreui/node_modules/vform/dist/vform.es.js");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header */ "../coreui/src/views/frontend/header.vue");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer */ "../coreui/src/views/frontend/footer.vue");
/* harmony import */ var vue_toast_notification__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue-toast-notification */ "../coreui/node_modules/vue-toast-notification/dist/index.min.js");
/* harmony import */ var vue_toast_notification__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(vue_toast_notification__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var vue_toast_notification_dist_theme_sugar_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue-toast-notification/dist/theme-sugar.css */ "../coreui/node_modules/vue-toast-notification/dist/theme-sugar.css");
/* harmony import */ var vue_toast_notification_dist_theme_sugar_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(vue_toast_notification_dist_theme_sugar_css__WEBPACK_IMPORTED_MODULE_6__);
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








vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(vue_toast_notification__WEBPACK_IMPORTED_MODULE_5___default.a);
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      id: 0,
      faqForm: new vform__WEBPACK_IMPORTED_MODULE_2__["default"]({
        question: '',
        answer: ''
      }),
      accordion: 0
    };
  },
  components: {
    Uheader: _header__WEBPACK_IMPORTED_MODULE_3__["default"],
    Ufooter: _footer__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  created: function created() {
    //this.id = this.$route.params.id;
    // this.accordion = 1;
    //this.FaqList();
    this.homePageData();
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])("Front/HomePage", ["result"])),
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapActions"])("Front/HomePage", ["gethomePageData"]), {
    homePageData: function homePageData() {
      this.gethomePageData().then(function () {//console.log(this.result)
      });
    }
  })
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!../coreui/src/views/frontend/about.vue?vue&type=template&id=dbd9ad4c&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!../coreui/src/views/frontend/about.vue?vue&type=template&id=dbd9ad4c& ***!
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
        "u-animate-container",
        [
          _c("Uheader"),
          _vm._v(" "),
          _c("main", { staticClass: "pts" }, [
            _c("section", { staticClass: "inner-header" }, [
              _c("div", { staticClass: "container" }, [
                _c("div", { staticClass: "row" }, [
                  _c(
                    "div",
                    { staticClass: "col-md-12 sec-title colored text-center" },
                    [_c("h2", [_vm._v("About Us")])]
                  )
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "about_us_section ptb_60 pt-2" }, [
              _c("div", { staticClass: "container" }, [
                _c("div", { staticClass: "row" }, [
                  _c(
                    "div",
                    { staticClass: "col-md-4" },
                    [
                      _c(
                        "u-animate",
                        {
                          staticClass: "about_img",
                          attrs: { name: "zoomIn", duration: "2s" }
                        },
                        [
                          this.result &&
                          this.result.aboutUS &&
                          this.result.aboutUS.image
                            ? _c("img", {
                                attrs: {
                                  src:
                                    "uploads/aboutus/" +
                                    this.result.aboutUS.id +
                                    "/" +
                                    this.result.aboutUS.image
                                }
                              })
                            : _c("img", {
                                attrs: {
                                  src: "images/banner.jpg",
                                  alt: "about img"
                                }
                              })
                        ]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "col-md-8" },
                    [
                      _c(
                        "u-animate",
                        {
                          staticClass: "about_description",
                          attrs: { name: "zoomIn", duration: "2s" }
                        },
                        [
                          this.result.aboutUS
                            ? _c("div", { staticClass: "abt_heading" }, [
                                _c("h2", [
                                  _vm._v(
                                    " " + _vm._s(this.result.aboutUS.title)
                                  )
                                ])
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          this.result && this.result.aboutUS
                            ? _c("p", { staticClass: "text-justify" }, [
                                _c("span", {
                                  domProps: {
                                    innerHTML: _vm._s(
                                      this.result.aboutUS.description
                                    )
                                  }
                                })
                              ])
                            : _vm._e()
                        ]
                      )
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row py-4" }, [
                  _c(
                    "div",
                    { staticClass: "col-md-12" },
                    [
                      _c(
                        "u-animate",
                        {
                          staticClass: "section_heading",
                          attrs: { name: "fadeInUp", duration: "2s" }
                        },
                        [_c("h2", { staticClass: "mb-3" }, [_vm._v("FAQ")])]
                      ),
                      _vm._v(" "),
                      _c(
                        "CCardBody",
                        { staticClass: "py-2 px-0" },
                        _vm._l(_vm.result.faq, function(row, index) {
                          return _c(
                            "div",
                            { staticClass: "accordion" },
                            [
                              _c(
                                "u-animate",
                                {
                                  staticClass: "mb-2 card",
                                  attrs: {
                                    name: "fadeInUp",
                                    duration: "2s",
                                    delay: "0"
                                  }
                                },
                                [
                                  _c(
                                    "CButton",
                                    {
                                      staticClass:
                                        "text-left shadow-none card-header",
                                      class:
                                        _vm.accordion === index ? "active" : "",
                                      attrs: { block: "", color: "link" },
                                      on: {
                                        click: function($event) {
                                          _vm.accordion =
                                            _vm.accordion === index
                                              ? false
                                              : index
                                        }
                                      }
                                    },
                                    [
                                      _c("h5", { staticClass: "m-0" }, [
                                        _vm._v(_vm._s(row.question))
                                      ])
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "CCollapse",
                                    {
                                      attrs: { show: _vm.accordion === index }
                                    },
                                    [
                                      _c("CCardBody", [
                                        _c("p", [_vm._v(_vm._s(row.answer))])
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
                        }),
                        0
                      )
                    ],
                    1
                  )
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("Ufooter")
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