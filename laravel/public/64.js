(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[64],{

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

/***/ "../coreui/src/views/patient/edit.vue":
/*!********************************************!*\
  !*** ../coreui/src/views/patient/edit.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _edit_vue_vue_type_template_id_f3a16d44___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit.vue?vue&type=template&id=f3a16d44& */ "../coreui/src/views/patient/edit.vue?vue&type=template&id=f3a16d44&");
/* harmony import */ var _edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit.vue?vue&type=script&lang=js& */ "../coreui/src/views/patient/edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _laravel_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../laravel/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_laravel_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _edit_vue_vue_type_template_id_f3a16d44___WEBPACK_IMPORTED_MODULE_0__["render"],
  _edit_vue_vue_type_template_id_f3a16d44___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "coreui/src/views/patient/edit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "../coreui/src/views/patient/edit.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ../coreui/src/views/patient/edit.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _laravel_node_modules_babel_loader_lib_index_js_ref_4_0_laravel_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../laravel/node_modules/babel-loader/lib??ref--4-0!../../../../laravel/node_modules/vue-loader/lib??vue-loader-options!./edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!../coreui/src/views/patient/edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_laravel_node_modules_babel_loader_lib_index_js_ref_4_0_laravel_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "../coreui/src/views/patient/edit.vue?vue&type=template&id=f3a16d44&":
/*!***************************************************************************!*\
  !*** ../coreui/src/views/patient/edit.vue?vue&type=template&id=f3a16d44& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _laravel_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_laravel_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_template_id_f3a16d44___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../laravel/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../laravel/node_modules/vue-loader/lib??vue-loader-options!./edit.vue?vue&type=template&id=f3a16d44& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!../coreui/src/views/patient/edit.vue?vue&type=template&id=f3a16d44&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _laravel_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_laravel_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_template_id_f3a16d44___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _laravel_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_laravel_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_template_id_f3a16d44___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!../coreui/src/views/patient/edit.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!../coreui/src/views/patient/edit.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "../coreui/node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "../coreui/node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vform */ "../coreui/node_modules/vform/dist/vform.es.js");
/* harmony import */ var _global_helper_helpers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../global_helper/helpers.js */ "../coreui/src/global_helper/helpers.js");
/* harmony import */ var _global_helper_helpers_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_global_helper_helpers_js__WEBPACK_IMPORTED_MODULE_3__);
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





/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      user_id: '',
      lable: 'Add',
      address: '',
      autocompleteOptions: {
        componentRestrictions: {// country:  'UK',
        }
      },
      ADDRESS_COMPONENTS: {
        subpremise: 'short_name',
        street_number: 'short_name',
        route: 'long_name',
        locality: 'long_name',
        administrative_area_level_1: 'long_name',
        administrative_area_level_2: 'long_name',
        sublocality_level_2: 'long_name',
        sublocality_level_1: 'long_name',
        area: 'long_name',
        country: 'long_name',
        postal_code: 'short_name'
      },
      center: {
        lat: 0,
        lng: 0
      },
      markers: [],
      places: [],
      formData: new vform__WEBPACK_IMPORTED_MODULE_2__["default"]({
        id: '',
        first_name: '',
        last_name: '',
        email: '',
        phone_number: '',
        password: '',
        password_confirmation: '',
        gender: '',
        address: '',
        address2: '',
        area: '',
        city: '',
        country: '',
        state: '',
        zip_code: '',
        symptoms: '',
        medical_history: '',
        date_of_birth: '',
        full_address: '',
        status: '',
        blood_group: '',
        age: '',
        nickname: ''
      }),
      profile_picture: '',
      imageDoc: [],
      isActive: false
    };
  },
  created: function created() {
    this.autocompleteOptions = {
      componentRestrictions: {// country:  'UK'
      }
    };
  },
  mounted: function mounted() {
    this.ajax_error.errors = [];

    if (this.$route.params.id != '' && this.$route.params.id != undefined) {
      this.getFormData(this.$route.params.id);
    }
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])("Patient/Index", ["returnData", "ajax_error", "editData"]), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])("auth", ["user"])),
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])("Patient/Index", ["submitPatientsUpdateForm", "edit"]), {
    onlyNumric: function onlyNumric(evt) {
      return _global_helper_helpers_js__WEBPACK_IMPORTED_MODULE_3___default.a.onlyNumric(evt);
    },
    acceptNumber: function acceptNumber() {
      var x = this.formData.phone_number.replace(/\D/g, "").match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
      this.formData.phone_number = !x[2] ? x[1] : "" + x[1] + "-" + x[2] + (x[3] ? "-" + x[3] : "");
    },
    getFormData: function getFormData(id) {
      var _this = this;

      this.user_id = id;
      this.lable = 'Edit';
      this.edit(id).then(function () {
        _this.formData.keys().forEach(function (key) {
          _this.formData[key] = _this.editData[key];
        });

        var lat = parseFloat(_this.editData.latitude);
        var lng = parseFloat(_this.editData.longitude);
        var marker = {
          lat: lat,
          lng: lng
        };

        _this.markers.push({
          position: marker
        });

        _this.center = marker;
        _this.formData.latitude = lat;
        _this.formData.longitude = lng;
      });
      this.ajax_error.errors = [];
    },
    onImageChange: function onImageChange(e) {
      var _this2 = this;

      this.profile_picture = e.target.files[0];
      var reader = new FileReader();

      reader.onload = function (e) {
        _this2.imageDoc = e.target.result;
      };

      reader.readAsDataURL(this.profile_picture);
    },
    submitFormData: function submitFormData() {
      var _this3 = this;

      var newData = new FormData();
      newData.append('profilefile', this.profile_picture);
      this.isActive = true;
      console.log(this.formData);
      newData.append('formData', JSON.stringify(this.formData));
      this.submitPatientsUpdateForm({
        newData: newData,
        id: this.formData.id
      }).then(function () {
        if (_this3.returnData.status == 'success') {
          _this3.$router.push({
            name: "patient"
          });

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
    },
    //google data 
    setPlace: function setPlace(place) {
      var singleValues = $("#google_autosearch_address").val();
      this.formData.full_address = singleValues;
      this.markers = [];
      this.currentPlace = place;
      this.addMarker();
    },
    addMarker: function addMarker() {
      if (this.currentPlace) {
        var marker = {
          lat: this.currentPlace.geometry.location.lat(),
          lng: this.currentPlace.geometry.location.lng()
        };
        this.markers.push({
          position: marker
        });
        this.places.push(this.currentPlace);
        this.center = marker;
        var returnData = {};

        for (var i = 0; i < this.currentPlace.address_components.length; i++) {
          var addressType = this.currentPlace.address_components[i].types[0];

          if (this.ADDRESS_COMPONENTS[addressType]) {
            var val = this.currentPlace.address_components[i][this.ADDRESS_COMPONENTS[addressType]];
            returnData[addressType] = val;
          }
        }

        this.formData.address = this.currentPlace.formatted_address;
        var city,
            state = '';
        city = returnData.locality;

        if (city == undefined || city == null) {
          city = returnData.administrative_area_level_1;
        }

        if (returnData.sublocality_level_2) this.formData.state = returnData.sublocality_level_2;else if (returnData.sublocality_level_1) this.formData.state = returnData.sublocality_level_1;else if (returnData.locality) this.formData.state = returnData.locality;
        if (returnData.route) this.formData.address2 = returnData.route;
        if (returnData.sublocality_level_1) this.formData.area = returnData.sublocality_level_1;
        if (returnData.country) this.formData.country = returnData.country;
        if (returnData.administrative_area_level_1) this.formData.state = returnData.administrative_area_level_1;
        if (returnData.locality) this.formData.city = returnData.locality;
        if (returnData.postal_code) this.formData.zip_code = returnData.postal_code;
        this.formData.latitude = this.currentPlace.geometry.location.lat();
        this.formData.longitude = this.currentPlace.geometry.location.lng(); //End

        this.currentPlace = null;
        var location = this.formData.state + ', ' + this.formData.city;
      }
    },
    updateCoordinates: function updateCoordinates(location) {
      this.center = {
        lat: location.latLng.lat(),
        lng: location.latLng.lng()
      };
      this.getReverseGeocodingData(location.latLng.lat(), location.latLng.lng());
      this.formData.latitude = location.latLng.lat();
      this.formData.longitude = location.latLng.lng();
    },
    getReverseGeocodingData: function getReverseGeocodingData(lat, lng) {
      var _this4 = this;

      var latlng = new google.maps.LatLng(lat, lng);
      var geocoder = new google.maps.Geocoder();
      geocoder.geocode({
        'latLng': latlng
      }, function (results, status) {
        if (status !== google.maps.GeocoderStatus.OK) {}

        if (status == google.maps.GeocoderStatus.OK) {
          var address = results[0].formatted_address;
          console.log(results[0]);
          _this4.formData.full_address = address;
          _this4.markers = [];
          _this4.currentPlace = results[0];

          _this4.addMarker();

          _this4.formData.address = address;
        }
      });
    },
    getLocation: function getLocation() {
      var options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      };
      var geolocation = navigator.geolocation;

      if (geolocation) {
        geolocation.getCurrentPosition(this.onGeoSuccess, this.onGeoError, options);
      } else {
        console.log("Geolocation is not supported by this browser.");
      }
    },
    onGeoSuccess: function onGeoSuccess(position) {
      this.getReverseGeocodingData(position.coords.latitude, position.coords.longitude);
    },
    onGeoError: function onGeoError(error) {}
  })
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!../coreui/src/views/patient/edit.vue?vue&type=template&id=f3a16d44&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!../coreui/src/views/patient/edit.vue?vue&type=template&id=f3a16d44& ***!
  \*********************************************************************************************************************************************************************************************************/
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
                        _vm._v("Patient "),
                        _c("vue-fontawesome", {
                          staticClass: "px-1",
                          attrs: { icon: "caret-right", size: "1" }
                        }),
                        _vm._v(_vm._s(this.lable))
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
                            attrs: {
                              size: "sm",
                              type: "submit",
                              disabled: _vm.isActive
                            }
                          },
                          [_vm._v("Submit")]
                        ),
                        _vm._v(" "),
                        _c(
                          "router-link",
                          { attrs: { to: { name: "patient" } } },
                          [
                            _c(
                              "CButton",
                              { attrs: { size: "sm", color: "light" } },
                              [_vm._v("Back")]
                            )
                          ],
                          1
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
                                        _c("label", [
                                          _vm._v("First Name "),
                                          _c(
                                            "span",
                                            { staticClass: "text-danger" },
                                            [_vm._v("*")]
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("CInput", {
                                          attrs: { placeholder: "" },
                                          model: {
                                            value: _vm.formData.first_name,
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.formData,
                                                "first_name",
                                                $$v
                                              )
                                            },
                                            expression: "formData.first_name"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _vm.ajax_error.errors.first_name
                                          ? _c(
                                              "span",
                                              { staticClass: "text-danger" },
                                              [
                                                _vm._v(
                                                  _vm._s(
                                                    _vm.ajax_error.errors
                                                      .first_name[0]
                                                  )
                                                )
                                              ]
                                            )
                                          : _vm._e()
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "CCol",
                                      {
                                        staticClass: "px-2",
                                        attrs: { sm: "6", md: "4" }
                                      },
                                      [
                                        _c("label", [
                                          _vm._v("Last Name "),
                                          _c(
                                            "span",
                                            { staticClass: "text-danger" },
                                            [_vm._v("*")]
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("CInput", {
                                          attrs: { placeholder: "" },
                                          model: {
                                            value: _vm.formData.last_name,
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.formData,
                                                "last_name",
                                                $$v
                                              )
                                            },
                                            expression: "formData.last_name"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _vm.ajax_error.errors.last_name
                                          ? _c(
                                              "span",
                                              { staticClass: "text-danger" },
                                              [
                                                _vm._v(
                                                  _vm._s(
                                                    _vm.ajax_error.errors
                                                      .last_name[0]
                                                  )
                                                )
                                              ]
                                            )
                                          : _vm._e()
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "CCol",
                                      {
                                        staticClass: "px-2",
                                        attrs: { sm: "6", md: "4" }
                                      },
                                      [
                                        _c("label", [
                                          _vm._v("Also Known as (Name)"),
                                          _c("span", {
                                            staticClass: "text-danger"
                                          })
                                        ]),
                                        _vm._v(" "),
                                        _c("CInput", {
                                          attrs: {
                                            placeholder: "Also Known as (Name)"
                                          },
                                          model: {
                                            value: _vm.formData.nickname,
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.formData,
                                                "nickname",
                                                $$v
                                              )
                                            },
                                            expression: "formData.nickname"
                                          }
                                        })
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "CCol",
                                      {
                                        staticClass: "px-2",
                                        attrs: { sm: "6", md: "4" }
                                      },
                                      [
                                        _c("label", [
                                          _vm._v("Email"),
                                          _c(
                                            "span",
                                            { staticClass: "text-danger" },
                                            [_vm._v("*")]
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("CInput", {
                                          attrs: { placeholder: "" },
                                          model: {
                                            value: _vm.formData.email,
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.formData,
                                                "email",
                                                $$v
                                              )
                                            },
                                            expression: "formData.email"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _vm.ajax_error.errors.email
                                          ? _c(
                                              "span",
                                              { staticClass: "text-danger" },
                                              [
                                                _vm._v(
                                                  _vm._s(
                                                    _vm.ajax_error.errors
                                                      .email[0]
                                                  )
                                                )
                                              ]
                                            )
                                          : _vm._e()
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "CCol",
                                      {
                                        staticClass: "px-1",
                                        attrs: { sm: "3", md: "2" }
                                      },
                                      [
                                        _c("label", [
                                          _vm._v("Phone No"),
                                          _c(
                                            "span",
                                            { staticClass: "text-danger" },
                                            [_vm._v("*")]
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("CInput", {
                                          attrs: {
                                            maxlength: "12",
                                            placeholder: ""
                                          },
                                          on: {
                                            blur: _vm.acceptNumber,
                                            input: _vm.acceptNumber,
                                            keypress: function($event) {
                                              return _vm.onlyNumric($event)
                                            }
                                          },
                                          model: {
                                            value: _vm.formData.phone_number,
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.formData,
                                                "phone_number",
                                                $$v
                                              )
                                            },
                                            expression: "formData.phone_number"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _vm.ajax_error.errors.phone_number
                                          ? _c(
                                              "span",
                                              { staticClass: "text-danger" },
                                              [
                                                _vm._v(
                                                  _vm._s(
                                                    _vm.ajax_error.errors
                                                      .phone_number[0]
                                                  )
                                                )
                                              ]
                                            )
                                          : _vm._e()
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _vm.user_id == ""
                                      ? _c(
                                          "CCol",
                                          {
                                            staticClass: "px-2",
                                            attrs: { sm: "6", md: "4" }
                                          },
                                          [
                                            _c("label", [
                                              _vm._v("Password"),
                                              _c(
                                                "span",
                                                { staticClass: "text-danger" },
                                                [_vm._v("*")]
                                              )
                                            ]),
                                            _vm._v(" "),
                                            _c("CInput", {
                                              attrs: {
                                                placeholder: "",
                                                type: "password"
                                              },
                                              model: {
                                                value: _vm.formData.password,
                                                callback: function($$v) {
                                                  _vm.$set(
                                                    _vm.formData,
                                                    "password",
                                                    $$v
                                                  )
                                                },
                                                expression: "formData.password"
                                              }
                                            }),
                                            _vm._v(" "),
                                            _vm.ajax_error.errors.password
                                              ? _c(
                                                  "span",
                                                  {
                                                    staticClass: "text-danger"
                                                  },
                                                  [
                                                    _vm._v(
                                                      _vm._s(
                                                        _vm.ajax_error.errors
                                                          .password[0]
                                                      )
                                                    )
                                                  ]
                                                )
                                              : _vm._e()
                                          ],
                                          1
                                        )
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _vm.user_id == ""
                                      ? _c(
                                          "CCol",
                                          {
                                            staticClass: "px-2",
                                            attrs: { sm: "6", md: "4" }
                                          },
                                          [
                                            _c("label", [
                                              _vm._v("Confirm Password"),
                                              _c(
                                                "span",
                                                { staticClass: "text-danger" },
                                                [_vm._v("*")]
                                              )
                                            ]),
                                            _vm._v(" "),
                                            _c("CInput", {
                                              attrs: {
                                                placeholder: "",
                                                type: "password"
                                              },
                                              model: {
                                                value:
                                                  _vm.formData
                                                    .password_confirmation,
                                                callback: function($$v) {
                                                  _vm.$set(
                                                    _vm.formData,
                                                    "password_confirmation",
                                                    $$v
                                                  )
                                                },
                                                expression:
                                                  "formData.password_confirmation"
                                              }
                                            }),
                                            _vm._v(" "),
                                            _vm.ajax_error.errors
                                              .password_confirmation
                                              ? _c(
                                                  "span",
                                                  {
                                                    staticClass: "text-danger"
                                                  },
                                                  [
                                                    _vm._v(
                                                      _vm._s(
                                                        _vm.ajax_error.errors
                                                          .password_confirmation[0]
                                                      )
                                                    )
                                                  ]
                                                )
                                              : _vm._e()
                                          ],
                                          1
                                        )
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _c(
                                      "CCol",
                                      {
                                        staticClass: "px-1",
                                        attrs: { sm: "3", md: "2" }
                                      },
                                      [
                                        _c("label", [
                                          _vm._v("Date of Birth "),
                                          _c(
                                            "span",
                                            { staticClass: "text-danger" },
                                            [_vm._v("*")]
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("input", {
                                          directives: [
                                            {
                                              name: "model",
                                              rawName: "v-model",
                                              value: _vm.formData.date_of_birth,
                                              expression:
                                                "formData.date_of_birth"
                                            }
                                          ],
                                          staticClass: "form-control",
                                          attrs: { type: "date", name: "" },
                                          domProps: {
                                            value: _vm.formData.date_of_birth
                                          },
                                          on: {
                                            input: function($event) {
                                              if ($event.target.composing) {
                                                return
                                              }
                                              _vm.$set(
                                                _vm.formData,
                                                "date_of_birth",
                                                $event.target.value
                                              )
                                            }
                                          }
                                        }),
                                        _vm._v(" "),
                                        _vm.ajax_error.errors.date_of_birth
                                          ? _c(
                                              "span",
                                              { staticClass: "text-danger" },
                                              [
                                                _vm._v(
                                                  _vm._s(
                                                    _vm.ajax_error.errors
                                                      .date_of_birth[0]
                                                  )
                                                )
                                              ]
                                            )
                                          : _vm._e()
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "CCol",
                                      {
                                        staticClass: "px-1",
                                        attrs: { sm: "3", md: "2" }
                                      },
                                      [
                                        _c("label", [_vm._v("Select Status ")]),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          { staticClass: "form-group" },
                                          [
                                            _c(
                                              "select",
                                              {
                                                directives: [
                                                  {
                                                    name: "model",
                                                    rawName: "v-model",
                                                    value: _vm.formData.status,
                                                    expression:
                                                      "formData.status"
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
                                                      "status",
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
                                                  { attrs: { value: "0" } },
                                                  [_vm._v("Active ")]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "option",
                                                  { attrs: { value: "1" } },
                                                  [_vm._v("IN-Active")]
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
                                              _vm._v("Gender"),
                                              _c("span", [_vm._v("*")])
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
                                                        _vm.formData.gender,
                                                      expression:
                                                        "formData.gender"
                                                    }
                                                  ],
                                                  staticClass:
                                                    "custom-control-input",
                                                  attrs: {
                                                    type: "radio",
                                                    value: "0",
                                                    id: "customRadioInline1",
                                                    name: "gender"
                                                  },
                                                  domProps: {
                                                    checked: _vm._q(
                                                      _vm.formData.gender,
                                                      "0"
                                                    )
                                                  },
                                                  on: {
                                                    change: function($event) {
                                                      return _vm.$set(
                                                        _vm.formData,
                                                        "gender",
                                                        "0"
                                                      )
                                                    }
                                                  }
                                                }),
                                                _vm._v(" "),
                                                _c(
                                                  "label",
                                                  {
                                                    staticClass:
                                                      "custom-control-label",
                                                    attrs: {
                                                      for: "customRadioInline1"
                                                    }
                                                  },
                                                  [_vm._v("Male")]
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
                                                        _vm.formData.gender,
                                                      expression:
                                                        "formData.gender"
                                                    }
                                                  ],
                                                  staticClass:
                                                    "custom-control-input",
                                                  attrs: {
                                                    type: "radio",
                                                    value: "1",
                                                    name: "gender",
                                                    id: "customRadioInline2"
                                                  },
                                                  domProps: {
                                                    checked: _vm._q(
                                                      _vm.formData.gender,
                                                      "1"
                                                    )
                                                  },
                                                  on: {
                                                    change: function($event) {
                                                      return _vm.$set(
                                                        _vm.formData,
                                                        "gender",
                                                        "1"
                                                      )
                                                    }
                                                  }
                                                }),
                                                _vm._v(" "),
                                                _c(
                                                  "label",
                                                  {
                                                    staticClass:
                                                      "custom-control-label",
                                                    attrs: {
                                                      for: "customRadioInline2"
                                                    }
                                                  },
                                                  [_vm._v("Female")]
                                                )
                                              ]
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _vm.ajax_error.errors.gender
                                          ? _c(
                                              "span",
                                              { staticClass: "text-danger" },
                                              [
                                                _vm._v(
                                                  _vm._s(
                                                    _vm.ajax_error.errors
                                                      .gender[0]
                                                  )
                                                )
                                              ]
                                            )
                                          : _vm._e()
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
                                attrs: { sm: "6", md: "3" }
                              },
                              [
                                _c("label", [
                                  _vm._v("Select Address"),
                                  _c("span", { staticClass: "text-danger" }, [
                                    _vm._v("*")
                                  ])
                                ]),
                                _vm._v(" "),
                                _c(
                                  "a",
                                  {
                                    staticClass: "font-weight-bold text-danger",
                                    attrs: { href: "javascript:void(0)" },
                                    on: { click: _vm.getLocation }
                                  },
                                  [
                                    _c("vue-fontawesome", {
                                      staticClass: " ml-2",
                                      attrs: { icon: "compass", size: "1" }
                                    }),
                                    _vm._v(
                                      "\n                           Get Current location"
                                    )
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c("gmap-autocomplete", {
                                  staticClass: "form-control",
                                  attrs: {
                                    autocomplete: "off",
                                    id: "google_autosearch_address",
                                    options: _vm.autocompleteOptions
                                  },
                                  on: { place_changed: _vm.setPlace }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "CCol",
                              {
                                staticClass: "px-2",
                                attrs: { sm: "6", md: "6" }
                              },
                              [
                                _c("label", [
                                  _vm._v("Address"),
                                  _c("span", { staticClass: "text-danger" }, [
                                    _vm._v("*")
                                  ])
                                ]),
                                _vm._v(" "),
                                _c("CInput", {
                                  attrs: { placeholder: "" },
                                  model: {
                                    value: _vm.formData.address,
                                    callback: function($$v) {
                                      _vm.$set(_vm.formData, "address", $$v)
                                    },
                                    expression: "formData.address"
                                  }
                                }),
                                _vm._v(" "),
                                _vm.ajax_error.errors.address
                                  ? _c("span", { staticClass: "text-danger" }, [
                                      _vm._v(
                                        _vm._s(_vm.ajax_error.errors.address[0])
                                      )
                                    ])
                                  : _vm._e()
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "CCol",
                              {
                                staticClass: "px-2",
                                attrs: { sm: "6", md: "3" }
                              },
                              [
                                _c("label", [
                                  _vm._v("City"),
                                  _c("span", { staticClass: "text-danger" }, [
                                    _vm._v("*")
                                  ])
                                ]),
                                _vm._v(" "),
                                _c("CInput", {
                                  attrs: { placeholder: "" },
                                  model: {
                                    value: _vm.formData.city,
                                    callback: function($$v) {
                                      _vm.$set(_vm.formData, "city", $$v)
                                    },
                                    expression: "formData.city"
                                  }
                                }),
                                _vm._v(" "),
                                _vm.ajax_error.errors.city
                                  ? _c("span", { staticClass: "text-danger" }, [
                                      _vm._v(
                                        _vm._s(_vm.ajax_error.errors.city[0])
                                      )
                                    ])
                                  : _vm._e()
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "CCol",
                              {
                                staticClass: "px-2",
                                attrs: { sm: "6", md: "3" }
                              },
                              [
                                _c("label", [
                                  _vm._v("Country"),
                                  _c("span", { staticClass: "text-danger" }, [
                                    _vm._v("*")
                                  ])
                                ]),
                                _vm._v(" "),
                                _c("CInput", {
                                  attrs: { placeholder: "" },
                                  model: {
                                    value: _vm.formData.country,
                                    callback: function($$v) {
                                      _vm.$set(_vm.formData, "country", $$v)
                                    },
                                    expression: "formData.country"
                                  }
                                }),
                                _vm._v(" "),
                                _vm.ajax_error.errors.country
                                  ? _c("span", { staticClass: "text-danger" }, [
                                      _vm._v(
                                        _vm._s(_vm.ajax_error.errors.country[0])
                                      )
                                    ])
                                  : _vm._e()
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "CCol",
                              {
                                staticClass: "px-2",
                                attrs: { sm: "6", md: "3" }
                              },
                              [
                                _c("label", [
                                  _vm._v("State"),
                                  _c("span", { staticClass: "text-danger" }, [
                                    _vm._v("*")
                                  ])
                                ]),
                                _vm._v(" "),
                                _c("CInput", {
                                  attrs: { placeholder: "" },
                                  model: {
                                    value: _vm.formData.state,
                                    callback: function($$v) {
                                      _vm.$set(_vm.formData, "state", $$v)
                                    },
                                    expression: "formData.state"
                                  }
                                }),
                                _vm._v(" "),
                                _vm.ajax_error.errors.state
                                  ? _c("span", { staticClass: "text-danger" }, [
                                      _vm._v(
                                        _vm._s(_vm.ajax_error.errors.state[0])
                                      )
                                    ])
                                  : _vm._e()
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "CCol",
                              {
                                staticClass: "px-2",
                                attrs: { sm: "6", md: "3" }
                              },
                              [
                                _c("label", [
                                  _vm._v("Zip code"),
                                  _c("span", { staticClass: "text-danger" }, [
                                    _vm._v("*")
                                  ])
                                ]),
                                _vm._v(" "),
                                _c("CInput", {
                                  attrs: { placeholder: "" },
                                  model: {
                                    value: _vm.formData.zip_code,
                                    callback: function($$v) {
                                      _vm.$set(_vm.formData, "zip_code", $$v)
                                    },
                                    expression: "formData.zip_code"
                                  }
                                }),
                                _vm._v(" "),
                                _vm.ajax_error.errors.zip_code
                                  ? _c("span", { staticClass: "text-danger" }, [
                                      _vm._v(
                                        _vm._s(
                                          _vm.ajax_error.errors.zip_code[0]
                                        )
                                      )
                                    ])
                                  : _vm._e()
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "CCol",
                              {
                                staticClass: "px-2",
                                attrs: { sm: "6", md: "3" }
                              },
                              [
                                _c("label", [_vm._v("latitude")]),
                                _vm._v(" "),
                                _c("CInput", {
                                  attrs: { placeholder: "" },
                                  model: {
                                    value: _vm.formData.latitude,
                                    callback: function($$v) {
                                      _vm.$set(_vm.formData, "latitude", $$v)
                                    },
                                    expression: "formData.latitude"
                                  }
                                }),
                                _vm._v(" "),
                                _vm.ajax_error.errors.latitude
                                  ? _c("span", { staticClass: "text-danger" }, [
                                      _vm._v(
                                        _vm._s(
                                          _vm.ajax_error.errors.latitude[0]
                                        )
                                      )
                                    ])
                                  : _vm._e()
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "CCol",
                              {
                                staticClass: "px-2",
                                attrs: { sm: "6", md: "3" }
                              },
                              [
                                _c("label", [_vm._v("longitude")]),
                                _vm._v(" "),
                                _c("CInput", {
                                  attrs: { placeholder: "" },
                                  model: {
                                    value: _vm.formData.longitude,
                                    callback: function($$v) {
                                      _vm.$set(_vm.formData, "longitude", $$v)
                                    },
                                    expression: "formData.longitude"
                                  }
                                }),
                                _vm._v(" "),
                                _vm.ajax_error.errors.longitude
                                  ? _c("span", { staticClass: "text-danger" }, [
                                      _vm._v(
                                        _vm._s(
                                          _vm.ajax_error.errors.longitude[0]
                                        )
                                      )
                                    ])
                                  : _vm._e()
                              ],
                              1
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _vm.markers.length > 0
                          ? _c(
                              "div",
                              { staticClass: "col-md-12" },
                              [
                                _c(
                                  "gmap-map",
                                  {
                                    staticStyle: {
                                      width: "100%",
                                      height: "400px"
                                    },
                                    attrs: { center: _vm.center, zoom: 12 }
                                  },
                                  _vm._l(_vm.markers, function(m, index) {
                                    return _c("gmap-marker", {
                                      key: index,
                                      attrs: {
                                        position: m.position,
                                        draggable: true,
                                        clickable: true
                                      },
                                      on: {
                                        click: function($event) {
                                          _vm.center = m.position
                                        },
                                        dragend: _vm.updateCoordinates
                                      }
                                    })
                                  }),
                                  1
                                )
                              ],
                              1
                            )
                          : _vm._e()
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
                      _c("div", [_c("strong", [_vm._v("Patient History")])])
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
                              { staticClass: "px-2", attrs: { sm: "12" } },
                              [
                                _c("div", { staticClass: "form-group" }, [
                                  _c("label", [_vm._v("Medical History")]),
                                  _vm._v(" "),
                                  _c("textarea", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.formData.medical_history,
                                        expression: "formData.medical_history"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    attrs: { rows: "6" },
                                    domProps: {
                                      value: _vm.formData.medical_history
                                    },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.formData,
                                          "medical_history",
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
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);