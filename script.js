let input = document.querySelector('.input')


const button = document.querySelector('.button')
const sample = document.querySelector(".sample");

// button.addEventListener('click', function(evt) {

       // to get input to appear on screen 

//     evt.preventDefault();
    // var paragraph = document.createElement("p")
    // var text = document.createTextNode(input.value);
    // paragraph.appendChild(text);
    // sample.appendChild(paragraph);

// })


button.addEventListener('click', function(evt) {
    evt.preventDefault();
    var word = input.value
    var one = word.charAt(0);
    
    var paragraph = document.createElement("p")
    var text = document.createTextNode(one);
    paragraph.appendChild(text);
    sample.appendChild(paragraph);

})

   