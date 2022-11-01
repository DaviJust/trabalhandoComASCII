
const button = document.getElementById("button")
const input = document.getElementById("input").value;
button.onclick = function() {
    var texto = input2.charCodeAt().value
    input.innerHTML = texto;
}

// Codigo no stackoverflow https://stackoverflow.com/questions/94037/convert-character-to-ascii-code-in-javascript
// function myFunction(){
//     var str=document.getElementById("id1");
//     if (str.value=="") {
//        str.focus();
//        return;
//     }
//     var a="ASCII Code is == >  ";
// document.getElementById("demo").innerHTML =a+str.value.charCodeAt(0);
// }