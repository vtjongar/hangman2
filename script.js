let input = document.querySelector('.input')
const button = document.querySelector('.button')
var word = input.value;
const buttons = document.querySelectorAll('.letterb')
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
    // add empty string to div
    var questionMark = document.createTextNode("?") 
    newDiv.appendChild(questionMark)
    // increment letter index 
    lix++;
    }

    var splitWord = word.split("")

    // var lettersCount = splitWord.length


    // when a letter button is clicked do this 
for (let index = 0; index < buttons.length; index++) {

    buttons[index].addEventListener('click', function(evt) {

        evt.preventDefault();

        var target = event.target.innerText

 // console.log(lettersCount)


 var io = splitWord.indexOf(target);

 console.log(io)

 var divcontent = document.getElementsByClassName("letter").item(io).innerHTML;

 if (divcontent === "?") {
    if (io >= 0) {

        var cont = document.getElementsByClassName("container")[0];
        cont.getElementsByClassName("letter")[io].innerHTML = target;

    }
 }

 else {
    console.log(target)
    console.log(target)
  
    var lio = splitWord.lastIndexOf(target);
    var cont = document.getElementsByClassName("container")[0];
    cont.getElementsByClassName("letter")[lio].innerHTML = target;

 }


})


} 


})