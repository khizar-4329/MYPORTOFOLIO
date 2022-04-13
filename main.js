function validate(frm1){
    return valid(frm1);
}

function valid(frm1){
    var ps = frm1.postal.value;
    var rgx = "^(?!.*[DFIOQU])[A-VXY][0-9][A-Z] ?[0-9][A-Z][0-9]$";

    if(/^[ABCEGHJKLMNPRSTVXY]{1}\d{1}[A-Z]{1} *\d{1}[A-Z]{1}\d{1}$/.test(ps)){

        clearErr("postal","ps");

        return true;

    }

    else

    {

        errMsg= "The Postal code is in the format XXX XXX or XXXXXX";

        displayError("postal", "ps", errMsg);

        return false;

    }

}

function displayError(fieldId,errId, errMsg){

 /* get the field object with invalid input */

    var fieldObj = document.getElementById(fieldId);

 /* hightlight the error field with red border */
    fieldObj.style.border="solid 1px red";

/* error field gets focus and selected, ready to reinput */

     fieldObj.focus();

    fieldObj.select();


/* display error message beside the error field in red */

    var errObj = document.getElementById(errId);
     errObj.innerHTML = errMsg;
     errObj.style.color = "red";
    errObj.style.fontSize = "12px";
}

     /* if valid, clear Error message, reset the focused field border */

 function clearErr(fieldId, errId){
    var fieldObj = document.getElementById(fieldId);
    fieldObj.style.border=""; // back to original setting
    var errObj = document.getElementById(errId);
    errObj.innerHTML = "";// empty the error message
 }

 const h = document.querySelector('#sfs');
 const hir = document.querySelector('#hire');
 const ah = document.querySelector('#sps');
 const cs = document.querySelector('#cs');
 const btncon = document.querySelector('.btn2');
 const myform = document.querySelector('.MyForm');

 
 const txt = document.createElement('input');

 h.addEventListener('click', function(){
    txt.style.display="block";
   txt.type = "number";
   txt.min = "15";
   hir.insertAdjacentElement("afterend",txt); 
 })
 cs.addEventListener('click',function(){
     
     txt.style.display ="none";
 })
 ah.addEventListener('click',function(){
     
     txt.style.display ="none";
 })
btncon.addEventListener('click',function(){
    myform.style.display ="block";
})