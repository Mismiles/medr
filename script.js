//Show and hide toggle for doctors review, allergybox, regular meds, acute meds, otc meds, smoking, technician referral, refferal, dosette box, anticoag,     //
const toggle=(id,bool=false)=>document.getElementById(id).style.display= bool? 'block': 'none'

//Highlight source button onclick     //
function sources() {
    var element = document.getElementsByClassName("btn btn-outline-secondary").toggleClass('MyClass');;
 }