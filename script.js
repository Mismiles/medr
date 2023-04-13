//Show and hide toggle for doctors review, allergybox, regular meds, acute meds, otc meds, smoking, technician referral, refferal, dosette box, anticoag,     //
const toggle=(id,bool=false)=>document.getElementById(id).style.display= bool? 'block': 'none'

//Highlight source button onclick     //
const highlight=(id,bool=false)=>document.getElementById(id).className = bool? 'btn btn-secondary': 'btn btn-outline-secondary'