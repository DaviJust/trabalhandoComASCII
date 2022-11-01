// const button = document.getElementById("button")
// button.onclick = function() {
// const input = document.getElementById("input").value;
//     var texto = input2.charCodeAt().value
//     input.innerHTML = texto;
// }

// Codigo no stackoverflow https://stackoverflow.com/questions/94037/convert-character-to-ascii-code-in-javascript

const button = document.getElementById("button")
button.onclick = function() {
    alert("ASCII")
    var str = document.getElementById("input");
    if (str.value=="") {
       str.focus();
       return;
       
    }
document.getElementById("exampleFormControlTextarea1").innerText = str.value.charCodeAt(0);
}

//Nao havia funcionado antes por causa do innerhtml, era para ter sido innertext e tambem ao em vez do output ser a tag input, precisa ser <textarea>