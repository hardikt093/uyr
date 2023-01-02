(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{14:function(t,a,e){"use strict";e(1);var s=e(5),o=e.n(s),i=(e(10),e(17)),r=e.n(i);o.a.component("paginate",r.a);var n={props:["result","page"],data:function(){return{}},methods:{paginateHandle:function(t){this.$emit("paginateHandle",t)}}},l=e(6),c=Object(l.a)(n,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"row m-0 align-items-center paginationPanel"},[t.result.data&&t.result.data.length>0&&t.result.total>0?e("div",{staticClass:"col px-2"},[t._v("\n      Showing "+t._s(t.result.from)+" to "+t._s(t.result.to)+" of\n      "+t._s(t.result.total)+" Entries\n   ")]):t._e(),t._v(" "),t.result.data&&t.result.data.length>0&&t.result.last_page>1?e("div",{staticClass:"col-aut px-2"},[e("paginate",{attrs:{value:t.page,"page-count":t.result.last_page,"page-range":3,"margin-pages":2,"click-handler":t.paginateHandle,"prev-text":"←","next-text":"→","container-class":"pagination","page-class":"page-item"}})],1):t._e()])}),[],!1,null,null,null);a.a=c.exports},164:function(t,a,e){var s=e(412);"string"==typeof s&&(s=[[t.i,s,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};e(16)(s,o);s.locals&&(t.exports=s.locals)},411:function(t,a,e){"use strict";e(164)},412:function(t,a,e){(t.exports=e(15)(!1)).push([t.i,"\n.span_lable{\n    white-space: nowrap;\n    margin: 0 6px;\n}\n",""])},806:function(t,a,e){"use strict";e.r(a);var s=e(1),o=e(5),i=e.n(o),r=e(17),n=e.n(r),l=e(12),c=e.n(l),m=e(14),d=e(42),u=(e(83),e(10));function p(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);a&&(s=s.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,s)}return e}function v(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?p(e,!0).forEach((function(a){_(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):p(e).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function _(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}var f={props:["appointmentID"],data:function(){return{myModal:!1,appointmentid:this.appointmentID,formData:new u.a({id:"",medicalHistory:[],noneof:"",describeSituation:"",describeAnswers:"",pastHistory:"",occupation:"",maritalStatus:"",alcohol:"",athleticActivities:"",tobacco:"",additionalInformation:"",medication:[],type:"Consultation"}),items:[{medication:""}]}},created:function(){this.getMedicalHistory()},computed:v({},Object(s.c)("Appointment/Index",["medicalhistoryData","consaltionData"])),methods:v({},Object(s.b)("Appointment/Index",["getMedicalHistory","submitConsultationForm"]),{submitFormData:function(){var t=this;this.formData.appointmentID=this.appointmentID,this.formData.medication=this.items,this.submitConsultationForm(this.formData).then((function(){t.$emit("closeModal",!1)})).catch((function(a){window.scrollTo(0,0),t.isActive=!1}))},closeModal:function(){this.myModal=!1},addItem:function(){this.items.push({medication:""})},removeItem:function(t){this.items.splice(t,1)}})},C=e(6),h=Object(C.a)(f,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"medical_report"},[e("CRow",{staticClass:"m-0"},[e("CCol",{staticClass:"p-2",attrs:{sm:"12"}},[e("CCard",{staticClass:"mb-0"},[e("CCardHeader",{staticClass:"p-2 px-3 bg_themes"},[e("div",[e("strong",[t._v("Medical History")])])]),t._v(" "),e("CCardBody",{staticClass:"px-1 py-2"},[e("CRow",{staticClass:"m-0"},[e("CCol",{staticClass:"px-2",attrs:{sm:"12",md:"12"}},[e("div",{staticClass:"form-group medi_his"},[e("label",[t._v("Have you ever had or do you have now a problem with :")]),e("br"),t._v(" "),t._l(t.medicalhistoryData.medicalhistory,(function(a,s){return t.medicalhistoryData&&t.medicalhistoryData.medicalhistory?e("div",{key:s,staticClass:"form-check form-check-inline"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.medicalHistory,expression:"formData.medicalHistory"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"inlineCheckbox1"},domProps:{value:s,checked:Array.isArray(t.formData.medicalHistory)?t._i(t.formData.medicalHistory,s)>-1:t.formData.medicalHistory},on:{change:function(a){var e=t.formData.medicalHistory,o=a.target,i=!!o.checked;if(Array.isArray(e)){var r=s,n=t._i(e,r);o.checked?n<0&&t.$set(t.formData,"medicalHistory",e.concat([r])):n>-1&&t.$set(t.formData,"medicalHistory",e.slice(0,n).concat(e.slice(n+1)))}else t.$set(t.formData,"medicalHistory",i)}}}),t._v(" "),e("label",{staticClass:"form-check-label",attrs:{for:"inlineCheckbox1"}},[t._v(t._s(s)+" ")])]):t._e()}))],2)]),t._v(" "),e("CCol",{staticClass:"px-2",attrs:{md:"12"}},[e("div",{staticClass:"form-group"},[e("div",{staticClass:"form-check form-check-inline"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.noneof,expression:"formData.noneof"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"inlineCheckbox41",value:"Yes"},domProps:{checked:Array.isArray(t.formData.noneof)?t._i(t.formData.noneof,"Yes")>-1:t.formData.noneof},on:{change:function(a){var e=t.formData.noneof,s=a.target,o=!!s.checked;if(Array.isArray(e)){var i=t._i(e,"Yes");s.checked?i<0&&t.$set(t.formData,"noneof",e.concat(["Yes"])):i>-1&&t.$set(t.formData,"noneof",e.slice(0,i).concat(e.slice(i+1)))}else t.$set(t.formData,"noneof",o)}}}),t._v(" "),e("label",{staticClass:"form-check-label",attrs:{for:"inlineCheckbox41"}},[t._v("If none of the above applies, check here: ")])])])]),t._v(" "),e("CCol",{staticClass:"px-2",attrs:{md:"12"}},[e("div",{staticClass:"form-group"},[e("label",[t._v(" Describe the situation below:")]),t._v(" "),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.formData.describeSituation,expression:"formData.describeSituation"}],staticClass:"form-control",attrs:{rows:"3"},domProps:{value:t.formData.describeSituation},on:{input:function(a){a.target.composing||t.$set(t.formData,"describeSituation",a.target.value)}}})])]),t._v(" "),e("CCol",{staticClass:"px-2",attrs:{md:"12"}},[e("div",{staticClass:"form-group"},[e("label",[t._v("Describe answers above with dates: ")]),t._v(" "),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.formData.describeAnswers,expression:"formData.describeAnswers"}],staticClass:"form-control",attrs:{rows:"3"},domProps:{value:t.formData.describeAnswers},on:{input:function(a){a.target.composing||t.$set(t.formData,"describeAnswers",a.target.value)}}})])]),t._v(" "),e("CCol",{staticClass:"px-2",attrs:{md:"12"}},[e("div",{staticClass:"form-group"},[e("label",[t._v("PAST MEDICAL HISTORY: ")]),t._v(" "),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.formData.pastHistory,expression:"formData.pastHistory"}],staticClass:"form-control",attrs:{rows:"3"},domProps:{value:t.formData.pastHistory},on:{input:function(a){a.target.composing||t.$set(t.formData,"pastHistory",a.target.value)}}})])]),t._v(" "),e("CCol",{staticClass:"px-2 form-group",attrs:{md:"12"}},[e("label",[t._v("Current Medication List: ")]),t._v(" "),e("table",{staticClass:"table table-borderless"},[e("tbody",t._l(t.items,(function(a,s){return e("tr",{key:s,staticClass:"m-0"},[e("td",[e("input",{directives:[{name:"model",rawName:"v-model",value:a.medication,expression:"item.medication"}],staticClass:"form-control",attrs:{type:"text",name:""},domProps:{value:a.medication},on:{input:function(e){e.target.composing||t.$set(a,"medication",e.target.value)}}})]),t._v(" "),e("td",{attrs:{width:"120"}},[t.items.length-1<=s?e("a",{staticClass:"btn btn-success text-white",on:{click:t.addItem}},[t._v("Add More")]):t._e(),t._v(" "),t.items.length-1>=s&&t.items.length-1!=s?e("CButton",{staticClass:"btn-outline-danger",attrs:{size:"sm",color:"",title:"Delete"},on:{click:function(a){return t.removeItem(s)}}},[e("vue-fontawesome",{attrs:{icon:"trash",size:"0.8"}})],1):t._e()],1)])})),0)])])],1)],1)],1),t._v(" "),e("CCard",{staticClass:"mb-0"},[e("CCardHeader",{staticClass:"p-2 px-3 bg_themes"},[e("div",[e("strong",[t._v("SOCIAL HISTORY: ")])])]),t._v(" "),e("CCardBody",{staticClass:"px-1 py-2"},[e("CRow",{staticClass:"m-0"},[e("CCol",{staticClass:"px-2",attrs:{md:"4"}},[e("div",{staticClass:"form-group"},[e("label",[t._v("Occupation")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.occupation,expression:"formData.occupation"}],staticClass:"form-control",attrs:{type:"text",name:""},domProps:{value:t.formData.occupation},on:{input:function(a){a.target.composing||t.$set(t.formData,"occupation",a.target.value)}}})])]),t._v(" "),e("CCol",{staticClass:"px-2",attrs:{md:"4"}},[e("div",{staticClass:"form-group"},[e("label",[t._v("Marital status")]),e("br"),t._v(" "),e("div",{staticClass:"custom-control custom-radio custom-control-inline"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.maritalStatus,expression:"formData.maritalStatus"}],staticClass:"custom-control-input",attrs:{type:"radio",id:"customRadioInlineg1",name:"customRadioInlineg1",value:"Single"},domProps:{checked:t._q(t.formData.maritalStatus,"Single")},on:{change:function(a){return t.$set(t.formData,"maritalStatus","Single")}}}),t._v(" "),e("label",{staticClass:"custom-control-label",attrs:{for:"customRadioInlineg1"}},[t._v("Single")])]),t._v(" "),e("div",{staticClass:"custom-control custom-radio custom-control-inline"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.maritalStatus,expression:"formData.maritalStatus"}],staticClass:"custom-control-input",attrs:{type:"radio",id:"customRadioInlineg2",name:"customRadioInlineg1",value:"Married"},domProps:{checked:t._q(t.formData.maritalStatus,"Married")},on:{change:function(a){return t.$set(t.formData,"maritalStatus","Married")}}}),t._v(" "),e("label",{staticClass:"custom-control-label",attrs:{for:"customRadioInlineg2"}},[t._v("Married")])])])]),t._v(" "),e("CCol",{staticClass:"px-2",attrs:{md:"4"}},[e("div",{staticClass:"form-group"},[e("label",[t._v("Alcohol "),e("small",[t._v(" oz/day/week")])]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.alcohol,expression:"formData.alcohol"}],staticClass:"form-control",attrs:{type:"text",name:""},domProps:{value:t.formData.alcohol},on:{input:function(a){a.target.composing||t.$set(t.formData,"alcohol",a.target.value)}}})])]),t._v(" "),e("CCol",{staticClass:"px-2",attrs:{md:"4"}},[e("div",{staticClass:"form-group"},[e("label",[t._v("Athletic Activities")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.athleticActivities,expression:"formData.athleticActivities"}],staticClass:"form-control",attrs:{type:"text",name:""},domProps:{value:t.formData.athleticActivities},on:{input:function(a){a.target.composing||t.$set(t.formData,"athleticActivities",a.target.value)}}})])]),t._v(" "),e("CCol",{staticClass:"px-2",attrs:{md:"4"}},[e("div",{staticClass:"form-group"},[e("label",[t._v("Tobacco")]),t._v(" "),e("div",{staticClass:"d-flex align-items-center"},[e("input",{staticClass:"form-control",attrs:{type:"text",name:""}}),t._v(" "),e("span",{staticClass:"span_lable"},[t._v("pks/d for ")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.tobacco,expression:"formData.tobacco"}],staticClass:"form-control",attrs:{type:"text",name:""},domProps:{value:t.formData.tobacco},on:{input:function(a){a.target.composing||t.$set(t.formData,"tobacco",a.target.value)}}}),t._v(" "),e("span",{staticClass:"span_lable"},[t._v("yrs")])])])]),t._v(" "),e("CCol",{staticClass:"px-2",attrs:{sm:"12",md:"12"}},[e("div",{staticClass:"form-group"},[e("label",[t._v("Additional Information")]),t._v(" "),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.formData.additionalInformation,expression:"formData.additionalInformation"}],staticClass:"form-control",attrs:{rows:"3"},domProps:{value:t.formData.additionalInformation},on:{input:function(a){a.target.composing||t.$set(t.formData,"additionalInformation",a.target.value)}}})])])],1)],1)],1)],1),t._v(" "),e("CCol",{staticClass:"p-2",attrs:{sm:"12"}},[e("div",{staticClass:"form-group mb-0 border-top pt-2 mt-3 text-right"},[e("CButton",{staticClass:"btn_custom",attrs:{size:"sm"},on:{click:function(a){return t.submitFormData()}}},[t._v("Submit")]),t._v(" "),e("CButton",{attrs:{size:"sm",color:"light"},on:{click:function(a){return t.closeModal()}}},[t._v("Close")])],1)])],1)],1)}),[],!1,null,null,null).exports;function g(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);a&&(s=s.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,s)}return e}function b(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?g(e,!0).forEach((function(a){y(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):g(e).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function y(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}i.a.component("paginate",n.a);var w={components:{pagination:m.a,VueTabs:d.VueTabs,VTab:d.VTab,consultation:h},data:function(){return{myModal:!1,user_id:"",keyword:"",disabled:!1,position:"right bottom",modal_title:"Add User",tokenData:"",appointmentID:"",items:[{medication1:"",medication2:"",medication3:""}]}},created:function(){this.page},computed:b({page:function(){if(""==this.keyword){var t=1;return null!=this.$route.params.page&&(t=this.$route.params.page),this.doctorAppointment({page:t,keyword:this.keyword}),Number(t)||1}}},Object(s.c)("Appointment/Index",["result","returnData"])),methods:b({},Object(s.b)("Appointment/Index",["doctorAppointment","changeAppointmentStatus"]),{paginateHandle:function(t){this.$router.push({name:"paginate_doctor_appointment",params:{page:t}}),this.doctorAppointment({page:t,keyword:this.keyword})},searchData:function(){this.keyword.length>=3?(1!=this.$route.params.page&&this.$router.push({name:"paginate_doctor_appointment",params:{page:1}}),this.doctorAppointment({page:1,keyword:this.keyword})):this.doctorAppointment({page:1,keyword:this.keyword})},MultiAction:function(t,a,e,s,o){var r=this;c.a.fire({title:"Are you sure",text:"Do you really want to "+o+" This record",type:"warning",showCancelButton:!0,confirmButtonText:o,confirmButtonColor:"#dd4b39",cancelButtonText:"Cancel",icon:"warning",reverseButtons:!0}).then((function(n){n.value&&r.changeAppointmentStatus({id:t,patient_id:a,appointment_date:e,appointment_time:s,action:o}).then((function(){"success"==r.returnData.status&&(i.a.$toast.open({message:r.returnData.message,type:r.returnData.status}),r.doctorAppointment({page:r.result.current_page}))}))}))},showmodel:function(t){this.appointmentID=t},closeModal:function(){this.myModal=!1;var t=1;null!=this.$route.params.page&&(t=this.$route.params.page),this.doctorAppointment({page:t,keyword:this.keyword})}})},D=(e(411),Object(C.a)(w,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("CRow",{staticClass:"m-0"},[e("CCol",{staticClass:"p-2",attrs:{sm:"12"}},[e("div",{staticClass:"d-flex justify-content-between align-items-center"},[e("h5",{staticClass:"mb-0"},[t._v("My Appointments")]),t._v(" "),e("div",{staticClass:"d-flex"},[e("CCol",[e("div",{staticClass:"form-group"},[e("select",{staticClass:"form-control"},[e("option",[t._v("All")]),t._v(" "),e("option",[t._v("Pending")]),t._v(" "),e("option",[t._v("Accepted")]),t._v(" "),e("option",[t._v("Completed")]),t._v(" "),e("option",[t._v("Rejected")])])])]),t._v(" "),e("div",{staticClass:"search_box"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.keyword,expression:"keyword"}],staticClass:"form-control",attrs:{type:"search",placeholder:"Search...",name:""},domProps:{value:t.keyword},on:{keyup:t.searchData,input:function(a){a.target.composing||(t.keyword=a.target.value)}}}),t._v(" "),e("CButton",[e("vue-fontawesome",{staticClass:"mr-1",attrs:{icon:"search",size:"0.9"}})],1)],1)],1)])])],1),t._v(" "),e("CRow",{staticClass:"m-0"},[e("CCol",{staticClass:"px-2 pb-2",attrs:{md:"12"}},[e("vue-tabs",{staticClass:"pateint_view_tab"},[e("v-tab",{attrs:{title:"All Appointment"}},[e("CCard",[e("CCardBody",[e("div",{staticClass:"table-responsive"},[e("table",{staticClass:"table table-striped table-hover"},[e("thead",[e("tr",[e("th",{attrs:{width:"40","data-name":"r-checkbox"}},[e("div",{staticClass:"select-all"},[e("input",{attrs:{type:"checkbox",name:""}}),t._v(" "),e("CDropdown",{attrs:{"toggler-text":"",color:"light"}},[e("CDropdownItem",[t._v("Select All Results")])],1)],1)]),t._v(" "),e("th",[t._v("Appointment ID")]),t._v(" "),e("th",[t._v("Date / Time")]),t._v(" "),e("th",[t._v("Patient Name")]),t._v(" "),e("th",[t._v("Fees")]),t._v(" "),e("th",{staticClass:"text-center"},[t._v("Status")]),t._v(" "),e("th",[t._v("Payment Status")]),t._v(" "),e("th",{attrs:{width:"200"}},[t._v("Actions")])])]),t._v(" "),e("tbody",t._l(t.result.data,(function(a,s){return t.result&&t.result.data&&"Approved mediator"==a.dr_status?e("tr",{key:s},[e("td",{attrs:{width:"40","data-name":"r-checkbox"}},[e("div",{staticClass:"select-all"},[e("input",{attrs:{type:"checkbox",name:""}})])]),t._v(" "),e("td",[t._v(t._s(t.result.from+s))]),t._v(" "),e("td",[t._v(t._s(a.appointment_Date)+" "+t._s(a.appointment_Time))]),t._v(" "),e("td",[t._v(t._s(a.patientName))]),t._v(" "),e("td",[t._v(t._s(a.fees_amount)+"/-")]),t._v(" "),e("td",{staticClass:"text-center"},["Pending"==a.status?e("CBadge",{attrs:{color:"warning"}},[t._v(t._s(a.status))]):t._e(),t._v(" "),"Accept"==a.status?e("CBadge",{attrs:{color:"success"}},[t._v(t._s(a.status))]):t._e(),t._v(" "),"Reject"==a.status?e("CBadge",{attrs:{color:"danger"}},[t._v(t._s(a.status))]):t._e()],1),t._v(" "),e("td",[t._v(t._s(a.paypal_status))]),t._v(" "),"Pending"==a.status?e("CButtonGroup",{attrs:{size:"sm"}},[e("CButton",{staticClass:"btn-outline-success d-flex align-items-center",attrs:{size:"sm",color:""},on:{click:function(e){return t.MultiAction(a.id,a.patient_id,a.appointment_date,a.appointment_time,"Accept")}}},[e("vue-fontawesome",{staticClass:"mr-1",attrs:{icon:"check",size:"0.8"}}),t._v("Accept\n                                   ")],1),t._v(" "),e("CButton",{staticClass:"btn-outline-warning d-flex align-items-center",attrs:{size:"sm",color:""}},[t._v("\n                                      Amend\n                                   ")]),t._v(" "),e("CButton",{staticClass:"btn-outline-danger d-flex align-items-center",attrs:{size:"sm",color:""}},[e("vue-fontawesome",{staticClass:"mr-1",attrs:{icon:"times",size:"0.8"}}),t._v("Reject\n                                   ")],1)],1):"Accept"==a.status?e("CButtonGroup",{attrs:{size:"sm"}},[e("a",{attrs:{href:a.direction_location,target:"_blank"}},[e("CButton",{staticClass:"btn-flex",attrs:{color:"danger",title:"Direction Map"}},[e("vue-fontawesome",{attrs:{icon:"map-marker",size:"1"}})],1)],1),t._v(" "),e("CButton",{staticClass:"btn-flex btn_custom",attrs:{title:"Consultation form"},on:{click:function(e){t.myModal=!0,t.showmodel(a.id)}}},[e("vue-fontawesome",{attrs:{icon:"file-text-o",size:"1"}})],1),t._v(" "),e("router-link",{attrs:{to:{name:"doctor_appointment_patient_view",params:{id:a.id}}}},[e("CButton",{attrs:{color:"info"}},[e("vue-fontawesome",{attrs:{icon:"eye",size:"1"}})],1)],1)],1):e("CButtonGroup",{attrs:{size:"sm"}},[t._v("\n                                       -\n                                ")])],1):t._e()})),0)])])])],1)],1),t._v(" "),e("v-tab",{attrs:{title:"Completed"}},[e("CCard",[e("CCardBody",[e("div",{staticClass:"table-responsive"},[e("table",{staticClass:"table table-striped table-hover"},[e("thead",[e("tr",[e("th",{attrs:{width:"40","data-name":"r-checkbox"}},[e("div",{staticClass:"select-all"},[e("input",{attrs:{type:"checkbox",name:""}}),t._v(" "),e("CDropdown",{attrs:{"toggler-text":"",color:"light"}},[e("CDropdownItem",[t._v("Select All Results")])],1)],1)]),t._v(" "),e("th",[t._v("Appointment ID")]),t._v(" "),e("th",[t._v("Date / Time")]),t._v(" "),e("th",[t._v("Patient Name")]),t._v(" "),e("th",[t._v("Fees")]),t._v(" "),e("th",{staticClass:"text-center"},[t._v("Status")]),t._v(" "),e("th",[t._v("Payment Status")])])]),t._v(" "),e("tbody",t._l(t.result.data,(function(a,s){return t.result&&t.result.data&&"Approved mediator"==a.dr_status?e("tr",{key:s},[e("td",{attrs:{width:"40","data-name":"r-checkbox"}},[e("div",{staticClass:"select-all"},[e("input",{attrs:{type:"checkbox",name:""}})])]),t._v(" "),e("td",[t._v(t._s(t.result.from+s))]),t._v(" "),e("td",[t._v(t._s(a.appointment_Date)+" "+t._s(a.appointment_Time))]),t._v(" "),e("td",[t._v(t._s(a.patientName))]),t._v(" "),e("td",[t._v(t._s(a.fees_amount)+"/-")]),t._v(" "),e("td",{staticClass:"text-center"},["Pending"==a.status?e("CBadge",{attrs:{color:"warning"}},[t._v(t._s(a.status))]):t._e(),t._v(" "),"Accept"==a.status?e("CBadge",{attrs:{color:"success"}},[t._v(t._s(a.status))]):t._e(),t._v(" "),"Reject"==a.status?e("CBadge",{attrs:{color:"danger"}},[t._v(t._s(a.status))]):t._e(),t._v(" "),"Completed"==a.status?e("CBadge",{attrs:{color:"success"}},[t._v(t._s(a.status))]):t._e()],1),t._v(" "),e("td",[t._v(t._s(a.paypal_status))])]):t._e()})),0)])])])],1)],1),t._v(" "),e("v-tab",{attrs:{title:"Close Order"}},[e("CCard",[e("CCardBody",[e("div",{staticClass:"table-responsive"},[e("table",{staticClass:"table table-striped table-hover"},[e("thead",[e("tr",[e("th",{attrs:{width:"40","data-name":"r-checkbox"}},[e("div",{staticClass:"select-all"},[e("input",{attrs:{type:"checkbox",name:""}}),t._v(" "),e("CDropdown",{attrs:{"toggler-text":"",color:"light"}},[e("CDropdownItem",[t._v("Select All Results")])],1)],1)]),t._v(" "),e("th",[t._v("Appointment ID")]),t._v(" "),e("th",[t._v("Date / Time")]),t._v(" "),e("th",[t._v("Patient Name")]),t._v(" "),e("th",[t._v("Fees")]),t._v(" "),e("th",{staticClass:"text-center"},[t._v("Status")]),t._v(" "),e("th",[t._v("Payment Status")])])]),t._v(" "),e("tbody",t._l(t.result.data,(function(a,s){return t.result&&t.result.data&&"Close"==a.dr_status&&"Completed"==a.status?e("tr",{key:s},[e("td",{attrs:{width:"40","data-name":"r-checkbox"}},[e("div",{staticClass:"select-all"},[e("input",{attrs:{type:"checkbox",name:""}})])]),t._v(" "),e("td",[t._v(t._s(t.result.from+s))]),t._v(" "),e("td",[t._v(t._s(a.appointment_Date)+" "+t._s(a.appointment_Time))]),t._v(" "),e("td",[t._v(t._s(a.patientName))]),t._v(" "),e("td",[t._v(t._s(a.fees_amount)+"/-")]),t._v(" "),e("td",{staticClass:"text-center"},["Pending"==a.status?e("CBadge",{attrs:{color:"warning"}},[t._v(t._s(a.status))]):t._e(),t._v(" "),"Accept"==a.status?e("CBadge",{attrs:{color:"success"}},[t._v(t._s(a.status))]):t._e(),t._v(" "),"Reject"==a.status?e("CBadge",{attrs:{color:"danger"}},[t._v(t._s(a.status))]):t._e(),t._v(" "),"Completed"==a.status?e("CBadge",{attrs:{color:"success"}},[t._v(t._s(a.status))]):t._e()],1),t._v(" "),e("td",[t._v(t._s(a.paypal_status))])]):t._e()})),0)])])])],1)],1)],1)],1)],1),t._v(" "),e("pagination",{attrs:{page:t.page,result:t.result},on:{paginateHandle:t.paginateHandle}}),t._v(" "),e("CModal",{attrs:{title:"Consultation form",show:t.myModal,closeOnBackdrop:!1,addContentClasses:"medical_report_card",size:"xl"},on:{"update:show":function(a){t.myModal=a}}},[e("consultation",{attrs:{appointmentID:t.appointmentID},on:{closeModal:t.closeModal}})],1)],1)}),[],!1,null,null,null));a.default=D.exports}}]);