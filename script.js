//Show and hide toggle for doctors review, allergybox, regular meds, acute meds, otc meds, smoking, technician referral, refferal, dosette box, anticoag,     //
const toggle=(id,bool=false)=>document.getElementById(id).style.display= bool? 'block': 'none'

//Highlight source button onclick     //
//  function sources(e) {
//     const className = e.getAttribute("class");
//     if(className=="btn btn-outline-secondary") {
//       e.className = "btn btn-secondary";
//     }
//     else{
//       e.className = "btn btn-outline-secondary";
//     }
//   }

const sources = (e) => (e.getAttribute("class") == "btn btn-outline-dark") ? e.className = "btn btn-dark" : e.className = "btn btn-outline-dark";


  
 //Show/hide date box    //
//  function SCRdate() {
//   let change = document.getElementById("SCR-box")
//   if(change.style.display=="block") {
//     change.style.display = "none";
//   }
//   else{
//     change.style.display = "block";
//   }
// }

const SCRdate = () => { let change = document.getElementById("SCR-box"); change.style.display == "block" ? change.style.display = "none" : change.style.display = "block"; }
