(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{10:function(t,e,s){"use strict";var r=s(4),a=s.n(r),n=Object.defineProperty,i=Object.prototype.hasOwnProperty,o=Object.getOwnPropertySymbols,l=Object.prototype.propertyIsEnumerable,c=(t,e,s)=>e in t?n(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s,u=(t,e)=>{for(var s in e||(e={}))i.call(e,s)&&c(t,s,e[s]);if(o)for(var s of o(e))l.call(e,s)&&c(t,s,e[s]);return t};const p=t=>void 0===t,d=t=>Array.isArray(t),h=t=>t&&"number"==typeof t.size&&"string"==typeof t.type&&"function"==typeof t.slice,f=(t,e,s,r)=>((e=e||{}).indices=!p(e.indices)&&e.indices,e.nullsAsUndefineds=!p(e.nullsAsUndefineds)&&e.nullsAsUndefineds,e.booleansAsIntegers=!p(e.booleansAsIntegers)&&e.booleansAsIntegers,e.allowEmptyArrays=!p(e.allowEmptyArrays)&&e.allowEmptyArrays,s=s||new FormData,p(t)||(null===t?e.nullsAsUndefineds||s.append(r,""):(t=>"boolean"==typeof t)(t)?e.booleansAsIntegers?s.append(r,t?1:0):s.append(r,t):d(t)?t.length?t.forEach((t,a)=>{const n=r+"["+(e.indices?a:"")+"]";f(t,e,s,n)}):e.allowEmptyArrays&&s.append(r+"[]",""):(t=>t instanceof Date)(t)?s.append(r,t.toISOString()):!(t=>t===Object(t))(t)||(t=>h(t)&&"string"==typeof t.name&&("object"==typeof t.lastModifiedDate||"number"==typeof t.lastModified))(t)||h(t)?s.append(r,t):Object.keys(t).forEach(a=>{const n=t[a];if(d(n))for(;a.length>2&&a.lastIndexOf("[]")===a.length-2;)a=a.substring(0,a.length-2);f(n,e,s,r?r+"["+a+"]":a)})),s);var m={serialize:f};function b(t){if(null===t||"object"!=typeof t)return t;const e=Array.isArray(t)?[]:{};return Object.keys(t).forEach(s=>{e[s]=b(t[s])}),e}function g(t){return Array.isArray(t)?t:[t]}class y{constructor(){this.errors={},this.errors={}}set(t,e){"object"==typeof t?this.errors=t:this.set(u(u({},this.errors),{[t]:g(e)}))}all(){return this.errors}has(t){return Object.prototype.hasOwnProperty.call(this.errors,t)}hasAny(...t){return t.some(t=>this.has(t))}any(){return Object.keys(this.errors).length>0}get(t){if(this.has(t))return this.getAll(t)[0]}getAll(t){return g(this.errors[t]||[])}only(...t){const e=[];return t.forEach(t=>{const s=this.get(t);s&&e.push(s)}),e}flatten(){return Object.values(this.errors).reduce((t,e)=>t.concat(e),[])}clear(t){const e={};t&&Object.keys(this.errors).forEach(s=>{s!==t&&(e[s]=this.errors[s])}),this.set(e)}}class v{constructor(t={}){this.originalData={},this.busy=!1,this.successful=!1,this.recentlySuccessful=!1,this.recentlySuccessfulTimeoutId=void 0,this.errors=new y,this.progress=void 0,this.update(t)}static make(t){return new this(t)}update(t){this.originalData=Object.assign({},this.originalData,b(t)),Object.assign(this,t)}fill(t={}){this.keys().forEach(e=>{this[e]=t[e]})}data(){return this.keys().reduce((t,e)=>u(u({},t),{[e]:this[e]}),{})}keys(){return Object.keys(this).filter(t=>!v.ignore.includes(t))}startProcessing(){this.errors.clear(),this.busy=!0,this.successful=!1,this.progress=void 0,this.recentlySuccessful=!1,clearTimeout(this.recentlySuccessfulTimeoutId)}finishProcessing(){this.busy=!1,this.successful=!0,this.progress=void 0,this.recentlySuccessful=!0,this.recentlySuccessfulTimeoutId=setTimeout(()=>{this.recentlySuccessful=!1},v.recentlySuccessfulTimeout)}clear(){this.errors.clear(),this.successful=!1,this.recentlySuccessful=!1,this.progress=void 0,clearTimeout(this.recentlySuccessfulTimeoutId)}reset(){Object.keys(this).filter(t=>!v.ignore.includes(t)).forEach(t=>{this[t]=b(this.originalData[t])})}get(t,e={}){return this.submit("get",t,e)}post(t,e={}){return this.submit("post",t,e)}patch(t,e={}){return this.submit("patch",t,e)}put(t,e={}){return this.submit("put",t,e)}delete(t,e={}){return this.submit("delete",t,e)}submit(t,e,s={}){return this.startProcessing(),s=u({data:{},params:{},url:this.route(e),method:t,onUploadProgress:this.handleUploadProgress.bind(this)},s),"get"===t.toLowerCase()?s.params=u(u({},this.data()),s.params):(s.data=u(u({},this.data()),s.data),function t(e){return e instanceof File||e instanceof Blob||e instanceof FileList||"object"==typeof e&&null!==e&&void 0!==Object.values(e).find(e=>t(e))}(s.data)&&!s.transformRequest&&(s.transformRequest=[t=>m.serialize(t)])),new Promise((t,e)=>{(v.axios||a.a).request(s).then(e=>{this.finishProcessing(),t(e)}).catch(t=>{this.handleErrors(t),e(t)})})}handleErrors(t){this.busy=!1,this.progress=void 0,t.response&&this.errors.set(this.extractErrors(t.response))}extractErrors(t){return t.data&&"object"==typeof t.data?t.data.errors?u({},t.data.errors):t.data.message?{error:t.data.message}:u({},t.data):{error:v.errorMessage}}handleUploadProgress(t){this.progress={total:t.total,loaded:t.loaded,percentage:Math.round(100*t.loaded/t.total)}}route(t,e={}){let s=t;return Object.prototype.hasOwnProperty.call(v.routes,t)&&(s=decodeURI(v.routes[t])),"object"!=typeof e&&(e={id:e}),Object.keys(e).forEach(t=>{s=s.replace(`{${t}}`,e[t])}),s}onKeydown(t){const e=t.target;e.name&&this.errors.clear(e.name)}}v.routes={},v.errorMessage="Something went wrong. Please try again.",v.recentlySuccessfulTimeout=2e3,v.ignore=["busy","successful","errors","progress","originalData","recentlySuccessful","recentlySuccessfulTimeoutId"],e.a=v},170:function(t,e,s){var r=s(424);"string"==typeof r&&(r=[[t.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};s(16)(r,a);r.locals&&(t.exports=r.locals)},423:function(t,e,s){"use strict";s(170)},424:function(t,e,s){(t.exports=s(15)(!1)).push([t.i,"\n.role_flex{\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    margin-left: 30px;\n    margin-top: 10px;\n}\n.role_div h6 {\n    margin: 0;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    font-size: 13px;\n}\n.role_div h6 label {\n    margin: 0;\n}\nul.role_flex li label {\n    margin: 0;\n}\n.role_div h6 input {\n    margin-right: 7px;\n}\nul.role_flex li {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    margin-right: 25px;\n}\nul.role_flex li input {\n      margin-right: 7px;\n}\n.role_div {\n    padding: 8px 0;\n    border-bottom: 1px solid #ccc;\n}\n.role_div:last-child {\n    border-bottom: 0;\n}\n",""])},855:function(t,e,s){"use strict";s.r(e);var r=s(1),a=s(5),n=s.n(a),i=s(10);function o(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,r)}return s}function l(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?o(s,!0).forEach((function(e){c(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):o(s).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}function c(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}var u={data:function(){return{formData:new i.a({name:"",slug:"",parent_id:"",is_parent:"0"})}},created:function(){this.fetchData(this.$route.params.id),this.setMenus({id:this.$route.params.id})},computed:l({},Object(r.c)("Roles/Index",["item","result","returnData","menuTabs","ajax_error"])),methods:l({},Object(r.b)("Roles/Index",["updateData","setMenus","checkAllData","checkData","setFormStates","fetchData"]),{submitForm:function(){var t=this;this.updateData().then((function(){n.a.$toast.open({message:"Role updated successfully",type:"success"}),t.$router.push({name:"roles"}),window.scrollTo(0,0)})).catch((function(t){window.scrollTo(0,0)}))},checkAll:function(t){var e=t.target.getAttribute("pid");t.target.checked?this.checkAllData({pid:e,temp:1}):this.checkAllData({pid:e,temp:0})},updatePermissions:function(t){var e=t.target.getAttribute("pid"),s=t.target.getAttribute("cid");t.target.checked?this.checkData({pid:e,cid:s,temp:1}):this.checkData({pid:e,cid:s,temp:0})},updateStates:function(t){var e=t.target.getAttribute("name"),s=t.target.value;this.setFormStates(c({},e,s))}})},p=(s(423),s(6)),d=Object(p.a)(u,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("CRow",{staticClass:"m-0"},[s("CCol",{staticClass:"p-2",attrs:{sm:"12"}},[s("div",{staticClass:"d-flex justify-content-between align-items-center"},[s("h5",{staticClass:"mb-0"},[t._v("Role "),s("vue-fontawesome",{staticClass:"px-1",attrs:{icon:"caret-right",size:"1"}}),t._v("Update")],1),t._v(" "),s("div",[s("CButton",{staticClass:"btn_custom",on:{click:t.submitForm}},[t._v("Submit")]),t._v(" "),s("router-link",{attrs:{to:{name:"roles"}}},[s("CButton",{attrs:{color:"light"}},[t._v("Back")])],1)],1)])]),t._v(" "),s("CCol",{staticClass:"px-2",attrs:{sm:"12"}},[s("CCard",[s("CCardHeader",{staticClass:"p-2 bg_themes"},[s("strong",[t._v("Update Role")])]),t._v(" "),s("CCardBody",[s("CForm",{attrs:{method:"POST"}},[s("CRow",{staticClass:"m-0"},[s("CCol",{staticClass:"form-group pt-2 px-2",attrs:{sm:"6",lg:"4",md:"6"}},[s("label",[t._v("Role Name")]),t._v(" "),s("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"Enter Role Name",name:"title"},domProps:{value:t.item.title},on:{input:t.updateStates}})])],1),t._v(" "),s("CRow",{staticClass:"m-0"},[s("CCol",{staticClass:"px-2",attrs:{sm:"12"}},[s("label",{staticClass:"font-weight-bold mb-0"},[t._v("Permissions")]),t._v(" "),s("hr",{staticClass:"mt-0 mb-2"}),t._v(" "),t._l(t.menuTabs.data,(function(e,r){return s("div",{staticClass:"role_div"},[s("h6",[s("input",{attrs:{type:"checkbox",id:"chk"+e.parent.slug,name:"permission[]",pid:r},domProps:{value:e.parent.id,checked:1==e.parent.temp},on:{change:t.checkAll}}),t._v(" "),s("label",{attrs:{for:"chk"+e.parent.slug}},[t._v(" "+t._s(e.parent.name))])]),t._v(" "),e.child.length>0?s("ul",{staticClass:"role_flex"},t._l(e.child,(function(e,a){return s("li",[s("input",{attrs:{type:"checkbox",id:"chk"+e.slug,name:"permission[]",pid:r,cid:a},domProps:{value:e.id,checked:1==e.temp},on:{change:t.updatePermissions}}),t._v(" "),s("label",{attrs:{for:"chk"+e.slug}},[t._v(" "+t._s(e.name))])])})),0):t._e()])}))],2)],1)],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=d.exports}}]);