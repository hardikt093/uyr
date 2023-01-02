(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{827:function(t,s,a){"use strict";a.r(s);var e=a(1),o=a(5),r=a.n(o),i=(a(10),a(34)),l=a.n(i),c=a(199);function d(t,s){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);s&&(e=e.filter((function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable}))),a.push.apply(a,e)}return a}function n(t){for(var s=1;s<arguments.length;s++){var a=null!=arguments[s]?arguments[s]:{};s%2?d(a,!0).forEach((function(s){_(t,s,a[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):d(a).forEach((function(s){Object.defineProperty(t,s,Object.getOwnPropertyDescriptor(a,s))}))}return t}function _(t,s,a){return s in t?Object.defineProperty(t,s,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[s]=a,t}var p={components:{datePicker:l.a,Datepicker:c.a},data:function(){return{center:{lat:0,lng:0},markers:[],doctor_suggest_id:"",appointment_date:"",appointment_time:"",doctor_id:"",disabledDates:{to:new Date(Date.now()-864e5)}}},created:function(){this.getDateTime(),""!=this.$route.params.id&&null!=this.$route.params.id&&(this.getDoctorFormData(this.$route.params.id),this.doctor_id=this.$route.params.id),null!=this.$route.params.doctor_suggest_id&&(this.doctor_suggest_id=this.$route.params.doctor_suggest_id,this.get_doctor_slots())},computed:n({},Object(e.c)("Doctor/Index",["doctorResult","getSlotData"]),{},Object(e.c)("Appointment/Index",["result","returnData"]),{},Object(e.c)("Masters/AvailabilityMaster",["resultDateTime"])),methods:n({},Object(e.b)("Doctor/Index",["getdoctorData","get_doctor_bookSlots"]),{},Object(e.b)("Appointment/Index",["searchDoctor","create_appointment"]),{},Object(e.b)("Masters/AvailabilityMaster",["getDateTime"]),{getDoctorFormData:function(t){var s=this;this.getdoctorData(t).then((function(){s.appointment_date=s.doctorResult.appointment_date;var t={lat:parseFloat(s.doctorResult.latitude),lng:parseFloat(s.doctorResult.longitude)};s.markers.push({position:t}),s.center=t}))},get_doctor_slots:function(){this.get_doctor_bookSlots({appointment_date:this.appointment_date,doctor_id:this.doctor_id}).then((function(){}))},createAppointment:function(){var t=this;console.log(this.appointment_time),""==this.appointment_date||""==this.appointment_time?r.a.$toast.open({message:"Please Select Appointment date time",type:"error",duration:5e3,dismissible:!0}):this.create_appointment({appointment_date:this.appointment_date,appointment_time:this.appointment_time,doctor_suggest_id:this.doctor_suggest_id,doctor_id:this.doctor_id}).then((function(){"success"==t.returnData.status&&(r.a.$toast.open({message:t.returnData.message,type:t.returnData.status}),console.log(t.returnData.pId),console.log(t.returnData.appointment_id),t.$router.push({name:"appointment_checkout",params:{patient_id:t.returnData.pId,appointment_id:t.returnData.appointment_id}}))}))},selected:function(t){this.get_doctor_bookSlots({appointment_date:t,doctor_id:this.doctor_id})}})},m=a(6),u=Object(m.a)(p,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("CRow",{staticClass:"m-0"},[a("CCol",{staticClass:"px-2 btn-sticky",attrs:{sm:"12"}},[a("div",{staticClass:"d-flex justify-content-between py-2 align-items-center"},[a("h5",{staticClass:"mb-0"},[t._v("Doctor "),a("vue-fontawesome",{staticClass:"px-1",attrs:{icon:"caret-right",size:"1"}}),t._v("View")],1),t._v(" "),a("div",{},[t.doctor_suggest_id?a("CButton",{staticClass:"btn_custom",on:{click:function(s){return t.createAppointment()}}},[t._v("Create Appointment\n                  ")]):t._e(),t._v(" "),t.doctor_suggest_id?a("router-link",{attrs:{to:{name:"searchDoctor",params:{id:this.doctor_suggest_id}}}},[a("CButton",{attrs:{color:"light"}},[t._v("Back")])],1):a("router-link",{attrs:{to:{name:"doctor"}}},[a("CButton",{attrs:{color:"light"}},[t._v("Back")])],1)],1)])]),t._v(" "),a("div",{staticClass:"p-2",class:t.doctor_suggest_id?"col-md-9":"col-md-12"},[a("CCard",{staticClass:"mb-0"},[a("CCardHeader",{staticClass:"p-2 px-3 bg_themes"},[a("div",[a("strong",[t._v("Personal / General Info")])])]),t._v(" "),a("CCardBody",{staticClass:"px-1 py-2 view_page"},[a("CForm",{attrs:{method:"POST"}},[a("CRow",{staticClass:"m-0"},[a("CCol",{staticClass:"px-1",attrs:{sm:"12",md:"2"}},[a("div",{staticClass:"form-group"},[a("div",{staticClass:"profile-img align-items-start"},[a("div",{staticClass:"profileimg"},[t.doctorResult.profile_photo?a("img",{attrs:{src:"uploads/profile/"+t.doctorResult.id+"/"+t.doctorResult.profile_photo}}):a("img",{attrs:{src:"/uploads/profile/default-profile.png"}})])])])]),t._v(" "),a("CCol",{staticClass:"px-2",attrs:{sm:"12",md:"10"}},[a("CRow",{staticClass:"m-0"},[a("CCol",{staticClass:"px-2",attrs:{sm:"6",md:"3"}},[a("div",{staticClass:"form-group"},[a("label",[t._v("First Name")]),t._v(" "),a("h6",[t._v(t._s(t.doctorResult.first_name))])])]),t._v(" "),a("CCol",{staticClass:"px-2",attrs:{sm:"6",md:"3"}},[a("div",{staticClass:"form-group"},[a("label",[t._v("Last Name")]),t._v(" "),a("h6",[t._v(t._s(t.doctorResult.last_name))])])]),t._v(" "),a("CCol",{staticClass:"px-2",attrs:{sm:"6",md:"3"}},[a("div",{staticClass:"form-group"},[a("label",[t._v("Email")]),t._v(" "),a("h6",[t._v(t._s(t.doctorResult.email))])])]),t._v(" "),a("CCol",{staticClass:"px-2",attrs:{sm:"6",md:"3"}},[a("div",{staticClass:"form-group"},[a("label",[t._v("Phone No.")]),t._v(" "),a("h6",[t._v(t._s(t.doctorResult.phone_number))])])]),t._v(" "),a("CCol",{staticClass:"px-2",attrs:{sm:"6",md:"3"}},[a("div",{staticClass:"form-group"},[a("label",[t._v("Age")]),t._v(" "),a("h6",[t._v(t._s(t.doctorResult.age)+" Year")])])]),t._v(" "),a("CCol",{staticClass:"px-2",attrs:{sm:"6",md:"3"}},[a("div",{staticClass:"form-group"},[a("label",[t._v("Gender")]),t._v(" "),a("h6",[t._v("Male")])])])],1)],1)],1)],1)],1)],1),t._v(" "),a("CCard",{staticClass:"mb-0"},[a("CCardHeader",{staticClass:"p-2 px-3 bg_themes"},[a("div",[a("strong",[t._v("Location")])])]),t._v(" "),a("CCardBody",{staticClass:"px-1 py-2 view_page"},[a("CForm",{attrs:{method:"POST"}},[a("CRow",{staticClass:"m-0"},[a("CCol",{staticClass:"px-2",attrs:{sm:"6",md:"3"}},[a("div",{staticClass:"form-group"},[a("label",[t._v("Address")]),t._v(" "),a("h6",[t._v(t._s(t.doctorResult.address))])])]),t._v(" "),a("CCol",{staticClass:"px-2",attrs:{sm:"6",md:"3"}},[a("div",{staticClass:"form-group"},[a("label",[t._v("Address 2")]),t._v(" "),a("h6",[t._v(t._s(t.doctorResult.address2))])])]),t._v(" "),a("CCol",{staticClass:"px-2",attrs:{sm:"6",md:"3"}},[a("div",{staticClass:"form-group"},[a("label",[t._v("Area")]),t._v(" "),a("h6",[t._v(t._s(t.doctorResult.area))])])]),t._v(" "),a("CCol",{staticClass:"px-2",attrs:{sm:"6",md:"3"}},[a("div",{staticClass:"form-group"},[a("label",[t._v("City")]),t._v(" "),a("h6",[t._v(t._s(t.doctorResult.city))])])]),t._v(" "),a("CCol",{staticClass:"px-2",attrs:{sm:"6",md:"3"}},[a("div",{staticClass:"form-group"},[a("label",[t._v("State")]),t._v(" "),a("h6",[t._v(t._s(t.doctorResult.state))])])]),t._v(" "),a("CCol",{staticClass:"px-2",attrs:{sm:"6",md:"3"}},[a("div",{staticClass:"form-group"},[a("label",[t._v("Country")]),t._v(" "),a("h6",[t._v(t._s(t.doctorResult.country))])])]),t._v(" "),a("CCol",{staticClass:"px-2",attrs:{sm:"6",md:"3"}},[a("div",{staticClass:"form-group"},[a("label",[t._v("Zip code")]),t._v(" "),a("h6",[t._v(t._s(t.doctorResult.zip_code))])])])],1)],1)],1),t._v(" "),a("gmap-map",{staticStyle:{width:"100%",height:"300px"},attrs:{center:t.center,zoom:17,"data-fullscreen":"true"}},t._l(t.markers,(function(s,e){return a("gmap-marker",{key:e,attrs:{position:s.position},on:{click:function(a){t.center=s.position}}})})),1)],1),t._v(" "),a("CCard",{staticClass:"mb-0"},[a("CCardHeader",{staticClass:"p-2 px-3 bg_themes"},[a("div",[a("strong",[t._v("ID and Licensing Credentials")])])]),t._v(" "),a("CCardBody",{staticClass:"px-1 py-2 view_page"},[a("CForm",{attrs:{method:"POST"}},[a("CRow",{staticClass:"m-0"},[a("CCol",{staticClass:"px-2",attrs:{sm:"6",md:"4"}},[a("div",{staticClass:"form-group"},[a("label",[t._v("Type")]),t._v(" "),a("h6",[t._v(t._s(t.doctorResult.type_name))])])]),t._v(" "),t.doctorResult.certificate_awarding_university?a("CCol",{staticClass:"px-2",attrs:{sm:"6",md:"4"}},[a("div",{staticClass:"form-group"},[a("label",[t._v("Certificate awarding University")]),t._v(" "),a("div",{staticClass:"attch-button"},[a("a",{attrs:{href:"uploads/doctor/"+t.doctorResult.user_id+"/"+t.doctorResult.certificate_awarding_university,download:""}},[t._v(" Download "),a("CIcon",{attrs:{name:"cil-file"}})],1)])])]):t._e(),t._v(" "),t.doctorResult.speciality_diploma?a("CCol",{staticClass:"px-2",attrs:{sm:"6",md:"4"}},[a("div",{staticClass:"form-group"},[a("label",[t._v("Copy of specialty diploma")]),t._v(" "),a("div",{staticClass:"attch-button"},[a("a",{attrs:{href:"uploads/doctor/"+t.doctorResult.user_id+"/"+t.doctorResult.speciality_diploma,download:""}},[t._v(" Download "),a("CIcon",{attrs:{name:"cil-file"}})],1)])])]):t._e(),t._v(" "),t.doctorResult.copy_of_registration?a("CCol",{staticClass:"px-2",attrs:{sm:"6",md:"4"}},[a("div",{staticClass:"form-group"},[a("label",[t._v("Copy of registration in the doctor’s council (Medical council)")]),t._v(" "),a("div",{staticClass:"attch-button"},[a("a",{attrs:{href:"uploads/doctor/"+t.doctorResult.user_id+"/"+t.doctorResult.copy_of_registration,download:""}},[t._v(" Download "),a("CIcon",{attrs:{name:"cil-file"}})],1)])])]):t._e(),t._v(" "),a("CCol",{staticClass:"px-2",attrs:{sm:"6",md:"4"}},[a("div",{staticClass:"form-group"},[a("label",[t._v("Medical License Number")]),t._v(" "),a("h6",[t._v(t._s(t.doctorResult.medical_license_number))])])]),t._v(" "),a("CCol",{staticClass:"px-2",attrs:{sm:"6",md:"4"}},[a("div",{staticClass:"form-group"},[a("label",[t._v("Date of Registration")]),t._v(" "),a("h6",[t._v(t._s(t.doctorResult.date_of_registration))])])]),t._v(" "),a("CCol",{staticClass:"px-2",attrs:{sm:"6",md:"4"}},[a("div",{staticClass:"form-group"},[a("label",[t._v("Registration No.")]),t._v(" "),a("h6",[t._v(t._s(t.doctorResult.registration_no))])])]),t._v(" "),a("CCol",{staticClass:"px-2",attrs:{sm:"6",md:"4"}},[a("div",{staticClass:"form-group"},[a("label",[t._v("Years of Experience")]),t._v(" "),a("h6",[t._v(t._s(t.doctorResult.experience))])])]),t._v(" "),a("CCol",{staticClass:"px-2",attrs:{sm:"6",md:"4"}},[a("div",{staticClass:"form-group"},[a("label",[t._v("Current Clinic/hospital of work")]),t._v(" "),a("h6",[t._v(t._s(t.doctorResult.current_clinic_hospital))])])]),t._v(" "),a("CCol",{staticClass:"px-2",attrs:{sm:"6",md:"4"}},[a("div",{staticClass:"form-group"},[a("label",[t._v("Equipment list")]),t._v(" "),t._l(t.doctorResult.equipmentArr,(function(s,e){return a("ul",{key:e,staticClass:"d-flex justify-content-around m-0 p-0"},[t._v("\n                              "+t._s(s.equipment_name)+"\n                            ")])}))],2)]),t._v(" "),a("CCol",{staticClass:"px-2",attrs:{sm:"6",md:"4"}},[a("div",{staticClass:"form-group"},[a("label",[t._v("Willing to serve as")]),t._v(" "),a("h6",[t._v(t._s(t.doctorResult.service_name))])])]),t._v(" "),a("CCol",{staticClass:"px-2",attrs:{sm:"6",md:"4"}},[a("div",{staticClass:"form-group"},[a("label",[t._v("Area of Coverage")]),t._v(" "),a("h6",[t._v(t._s(t.doctorResult.area_of_coverage))])])]),t._v(" "),a("CCol",{staticClass:"px-2",attrs:{sm:"12"}},[a("div",{staticClass:"form-group"},[a("label",[t._v("Brief summary about yourself (150 words)")]),t._v(" "),a("h6",[t._v("\n                              "+t._s(t.doctorResult.brief_summary)+"     \n                           ")])])]),t._v(" "),a("CCol",{staticClass:"px-2",attrs:{sm:"12"}},[a("div",{staticClass:"form-group"},[a("label",[t._v("Terms and condition (policy and procedure of working together)")]),t._v(" "),a("h6",[t._v("\n                              "+t._s(t.doctorResult.terms_and_conditions)+"\n                           ")])])])],1)],1)],1)],1)],1),t._v(" "),t.doctor_suggest_id?a("CCol",{staticClass:"p-2",attrs:{sm:"3"}},[a("CCard",{staticClass:"doctor_inf_card time_slot_card"},[a("CCardHeader",{staticClass:"p-2 px-3 bg_themes"},[a("h6",{staticClass:"mb-0"},[t._v("Available Time")])]),t._v(" "),a("CCardBody",{staticClass:"p-2"},[a("div",{staticClass:"form-group mt-2 mb-3"},[a("datepicker",{attrs:{type:"date",color:"#2c449e",format:"dd MMMM, yyyy",disabledDates:t.disabledDates,"bootstrap-styling":!0},on:{selected:t.selected},model:{value:t.appointment_date,callback:function(s){t.appointment_date=s},expression:"appointment_date"}})],1),t._v(" "),a("div",{staticClass:"available_time mt-2"},t._l(t.getSlotData.bookslot,(function(s){return a("label",{staticClass:"time-radio",class:{booked:s.status}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.appointment_time,expression:"appointment_time"}],attrs:{type:"radio",name:"radio",checked:"checked",disabled:s.status},domProps:{value:s.time,checked:t._q(t.appointment_time,s.time)},on:{change:function(a){t.appointment_time=s.time}}}),t._v(" "),a("span",{staticClass:"checkmark"},[t._v(" "+t._s(s.time))])])})),0)])],1),t._v(" "),a("CCard")],1):t._e()],1)],1)}),[],!1,null,null,null);s.default=u.exports}}]);