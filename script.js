let input = document.querySelector('.input')
const button = document.querySelector('.button')
const buttons = document.querySelectorAll('.letterb')
var word = input.value;
// event listener to make spaces appear after user puts their word in    

button.addEventListener('click', function(evt) {
    evt.preventDefault();

    var container = document.querySelector(".container");

    // deletes spaces from previous word 
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }


    // the users word 
    var word = input.value;

    // incrementer 
    var i;
    


    for (i = 0; i < word.length; i++) { 

    // create index for each letter 
    let lix = 0

    // first letter of the users word 
    var letter = word.charAt(lix);


    // new div for container 
    var newDiv =  document.createElement("div");

    // add new div as a child for container 
    container.appendChild(newDiv);
    
    // give new div the letter class
    newDiv.classList.add("letter");

    // increment letter index 
    lix++;
    }




for (let index = 0; index < buttons.length; index++) {


    var container = document.querySelector(".container");
    
    buttons[index].addEventListener('click', function(evt) {

        evt.preventDefault();

        var target = event.target.firstChild
        var instr = document.querySelector("ptwoinstr")
        if (target === target) {
            console.log(word)
        }

    

    })

    
} 

   





})









// test 
// var divcontent = document.getElementsByClassName("letterb")[0].innerText;       
// console.log(divcontent)


// test 
  // const sample = document.querySelector(".sample");
                    // var paragraph = document.createElement("p")
                    // var text = document.createTextNode("hi");
                    // paragraph.appendChild(text);
                    // sample.appendChild(paragraph);

