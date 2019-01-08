let input = document.querySelector('.input')


const button = document.querySelector('.button')
const sample = document.querySelector(".sample");

button.addEventListener('click', function(evt) {

    // var inputValue = input.value
    console.log("hello!")
    evt.preventDefault();
    var paragraph = document.createElement("p")
    var text = document.createTextNode(input.value);
    paragraph.appendChild(text);
    sample.appendChild(paragraph);


})