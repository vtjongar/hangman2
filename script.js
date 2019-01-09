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

    
  


for (let index = 0; index < buttons.length; index++) {
    
    buttons[index].addEventListener('click', function(evt) {

        evt.preventDefault();

        var target = event.target.innerText
        var divcontent = document.getElementsByClassName("letter").item(0).innerHTML;
            
        for (let num = 0; num < word.length; num++) {

       
            if (splitWord[num] === target && divcontent === "?" ) { 

                
                var cont = document.getElementsByClassName("container")[0];
                cont.getElementsByClassName("letter")[num].innerHTML = target;
            } 

        
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

   // the test below works
        //     if (target === target) {
        //         console.log(letter) 
        //     }
        //     else {
        //         console.log("")
        //     }
        // }

// the test below works 
                // if (target === target) {
                // console.log(splitWord)
                // }


// // the test below works
// if (target === letter) {
//     console.log(letter) 
// }
// else {
//     console.log(letter)
// }


