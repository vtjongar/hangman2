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
 var currentImg = document.getElementById("img").src;
console.log(currentImg)
 if (io < 0) {
    
    if (currentImg === "http://127.0.0.1:5500/imgs/hmone.jpg") {
    document.getElementById("img").src = "../imgs/hmtwo.jpg";
    }
    if (currentImg === "http://127.0.0.1:5500/imgs/hmtwo.jpg") {
    document.getElementById("img").src = "../imgs/hmthree.jpg";
    }
    if (currentImg === "http://127.0.0.1:5500/imgs/hmthree.jpg") {
    document.getElementById("img").src = "../imgs/hmfour.jpg";
    }
    if (currentImg === "http://127.0.0.1:5500/imgs/hmfour.jpg") {
    document.getElementById("img").src = "../imgs/hmfive.jpg";
    }
    if (currentImg === "http://127.0.0.1:5500/imgs/hmfive.jpg") {
    document.getElementById("img").src = "../imgs/hmsix.jpg";
    }
    if (currentImg === "http://127.0.0.1:5500/imgs/hmsix.jpg") {
    document.getElementById("img").src = "../imgs/hmsvn.jpg";
    document.getElementById("status").innerHTML = "GAME OVER";
    document.getElementById("status").style.color = "red";
    document.getElementById("answer").innerHTML = "Player one wins!";
    document.getElementById("answer2").innerHTML = "The word was:";

   
    let z = 0 
    while(z < word.length) {

        let l = word.charAt(z)

        var cont = document.getElementsByClassName("container")[0];
            cont.getElementsByClassName("letter")[z].innerHTML = l;
    z++
    }

    }
  
 }
 var divcontent = document.getElementsByClassName("letter").item(io).innerHTML;


// test to see if letter is even in word 



        if (io >= 0) {
            
            if (divcontent === "?") {
                

                    var cont = document.getElementsByClassName("container")[0];
                    cont.getElementsByClassName("letter")[io].innerHTML = target;

            
            }

            else {
                console.log(target)
                console.log(target)
            
                var lio = splitWord.lastIndexOf(target);
                var cont = document.getElementsByClassName("container")[0];
                cont.getElementsByClassName("letter")[lio].innerHTML = target;

            }
        }
    



})


} 


})