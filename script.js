const button = document.getElementById(button)
const input = document.getElementById(input)
button.onclick = function() {
    let texto = input.charCodeAt(0)
    input.innerHTML = texto
}

