
function fn() {
    var username= document.getElementById("username");
    var password = document.getElementById("password");
    var repassword = document.getElementById("repassword");
    var mobile = document.getElementById("mobile");
    var mobileregex = /^[6-9]\d{9}$/;
    var eregex=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/;
    var validation=true;
    var eye=document.getElementById("eyeicon");
    if (!mobileregex.test(mobile.value)) {
        mobile.style.border="2px solid rgb(255,0,0)"
        validation=false;
    }
    if(!eregex.test(password.value)){
        password.style.border="2px solid rgb(255,0,0)"
        validation=false;
    }
    if(password.value!=repassword.value || password.value==''){
        repassword.style.border="2px solid rgb(255,0,0)"
        validation= false;
    }
    return validation;

}
    function formvalidation() {
        var fname = document.getElementById("fname");
        var lname = document.getElementById("lname");
        var email = document.getElementById("email");
        var mobile = document.getElementById("mobile");
        var dob = document.getElementById("dob");
        var state = document.getElementById('state');
        var zip = document.getElementById('zip');
        var university = document.getElementById('university');
        var major=document.getElementById("major");
        var degree = document.getElementById('degree');
        var gradyear = document.getElementById('gradyear');
        var cgpa = document.getElementById('cgpa');
        var paragraph=document.getElementById('para');
        var addressline=document.getElementById('address');
        var city=document.getElementById('city');
        var country=document.getElementById('country')
        var mobileregex=/^[6-9]\d{9}$/;
    
        var validation=true;
        if (fname.value.trim() == "") {
            fname.style.border="2px solid rgb(255,0,0)"
            validation=false;
        }
        if (lname.value.trim() == "") {
            lname.style.border="2px solid rgb(255,0,0)"
            validation=false;
        }
        if (email.value.trim() == "") {
            email.style.border="2px solid rgb(255,0,0)"
            validation=false;
        }
        if (!mobileregex.test(mobile) || mobile.trim()=="") {
            mobile.style.border="2px solid rgb(255,0,0)"
            validation=false;
        }
        if (dob.value.trim() == "") {
            dob.style.border="2px solid rgb(255,0,0)"
            validation=false;
        }
        if (addressline.value.trim() == "") {
            addressline.style.border="2px solid rgb(255,0,0)"
            validation=false;
        }
        if (state.value.trim() == "") {
            state.style.border="2px solid rgb(255,0,0)"
            validation=false;
        }
    
    
        if (country.value.trim() == "") {
            country.style.border="2px solid rgb(255,0,0)"
            validation=false;
        }
        if (city.value.trim() == "") {
            city.style.border="2px solid rgb(255,0,0)"
            validation=false;
        }
    
        if (zip.value.trim() == "" || isNaN(zip.value)) {
            zip.style.border="2px solid rgb(255,0,0)"
            validation=false;
        }
    
        if (university.value.trim() == "") {
            university.style.border="2px solid rgb(255,0,0)";
            validation=false;
        }
    
        if (degree.value.trim() == "") {
           degree.style.border="2px solid rgb(255,0,0)";
           validation=false;
        }
        if (major.value.trim() == "") {
            major.style.border="2px solid rgb(255,0,0)";
            validation=false;
         }
    
        if (gradyear.value.trim() == "" || isNaN(gradyear.value)) {
            gradyear.style.border="2px solid rgb(255,0,0)";
            validation=false;
        }
    
        if (cgpa.value.trim() == "") {
            cgpa.style.border="2px solid rgb(255,0,0)";
            validation=false;
        }
        if(validation==false){
            paragraph.style.display="flex";
            paragraph.style.color="rgb(255,0,0)";
            
        }
        return validation;  
    }