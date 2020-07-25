let btn = document.querySelector(".btn");
btn.onclick = function(){
   // alert("here");
    let result = 0;
    let val1 = document.querySelector("#inlineFormInputName1").value;
    let val2 = document.querySelector("#inlineFormInputName2").value;

    //alert(val1);
   // alert(val2);
    result = Number(val1) + Number(val2);
   // result = val1 + val2;
    document.querySelector("#displayLabel").innerHTML = result;
}