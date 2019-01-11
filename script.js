let input = document.querySelector('.input') // this holds the user input box
const button = document.querySelector('.button') // this holds the button in the form 
var word = input.value; // this holds the users word 
const buttons = document.querySelectorAll('.letterb') // this holds all the letter buttons on the page 
                                                            
var wrongGuesses = []




 
button.addEventListener('click', function(evt) { // this event listener is for the enter button
    evt.preventDefault(); // this prevents page from refreshing when button is clicked 
    

    var container = document.querySelector(".container"); // this holds the container that will hold the letter spaces 



    while (container.firstChild) {
        container.removeChild(container.firstChild);  // this deletes the letter spaces from previous word 
    }
    



    var word = input.value;   // this holds the users word 





    var i;
    for (i = 0; i < word.length; i++) { // this loop iterates through each letter in the users word and creates a letter space for it 

        var letter = word.charAt(i); // this holds a letter in the users word 
        var newDiv =  document.createElement("div");     // this holds the new div for the container 
        container.appendChild(newDiv); // this adds the new div as a child of the container
        newDiv.classList.add("letter"); // this gives the new div the class "letter" for styling
        var questionMark = document.createTextNode("?") // this creates a text node with the value of "?"
        newDiv.appendChild(questionMark) // this adds the "?" to the new div 

    }



    var splitWord = word.split("") // this puts each letter from the users word into an array 




        
    for (let index = 0; index < buttons.length; index++) { // this loop iterates through to each letter button on the page 

        buttons[index].addEventListener('click', function(evt) { // this adds an event listener to whatever button the loop is on 
            evt.preventDefault();

            var target = event.target.innerText // this holds the text inside the element that triggered the event 




            var io = splitWord.indexOf(target); // this holds the index of whatever letter target is equal to 
            // test
            // console.log(io)


            var currentImg = document.getElementById("img").src; // this holds the image that is currently on the page 

            // test 
            // console.log(currentImg)
            
                
    
                if (io < 0) {           // if the target is not in the array its index will be less than zero 
                                        // so statement says if this is true, do the following 
                                        
                 console.log(wrongGuesses)
                                        
                    if (wrongGuesses.length === 0) {  // this changes the current image to image two if the source says image one 
                    document.getElementById("img").src = "./imgs/hmtwo.JPG";
                    
                    }
                    if (wrongGuesses.length === 1) { // this changes the current image to image three if the source says image two 
                    document.getElementById("img").src = "./imgs/hmthree.JPG";
             
                    }
                    if (wrongGuesses.length === 2) { // this changes the current image to image four if the source says image three
                    document.getElementById("img").src = "./imgs/hmfour.JPG";
    
                    }
                    if (wrongGuesses.length === 3) { // this changes the current image to image five if the source says image four 
                    document.getElementById("img").src = "./imgs/hmfive.JPG";
                    
                    }
                    if (wrongGuesses.length === 4) { // this changes the current image to image six if the source says image five 
                    document.getElementById("img").src = "./imgs/hmsix.JPG";
                    
                    }
                    if (wrongGuesses.length === 5) { 
                    document.getElementById("img").src = "./imgs/hmsvn.jpg";    // this changes the current image to image seven if the source says image six
                    document.getElementById("status").innerHTML = "GAME OVER";   // this adds game over message to the page 
                    document.getElementById("status").style.color = "#B80000";       // this makes the game over messages red 
                    document.getElementById("answer").innerHTML = "Player one wins!"; // this adds the player one wins message to the page 
                    document.getElementById("answer2").innerHTML = "The word was:";   // this adds the word reveal message to the page 

                    
                        let z = 0 
                        while(z < word.length) { // this loop reveals the player ones word 

                            let l = word.charAt(z) // this holds a letter from player ones word depending on the index 

                            var cont = document.getElementsByClassName("container")[0]; // this holds the container 

                            cont.getElementsByClassName("letter")[z].innerHTML = l; // this changes the inner text of whatever div the loop is in to the corresponding letter in the users word 

                            z++
                        }
                  
                    }
                    wrongGuesses.push(target);
                    console.log(wrongGuesses)
                }

                
            var divcontent = document.getElementsByClassName("letter").item(io).innerHTML; // this holds the content of whatever div we're in 


        // test to see if letter is even in word 



                if (io >= 0) { // this tests to see if the target button letter is in the users word 
                    
                    if (divcontent === "?") { // this tests to see if the div is empty so we can add the target button letter 
                        

                            var cont = document.getElementsByClassName("container")[0]; // this holds the container 
                            cont.getElementsByClassName("letter")[io].innerHTML = target; // this changes the inner text of whatever div the loop is in to the corresponding letter in the users word 

                    
                    }

                    else { // this else is in case the same letter is already occupying that space 
                        
                        // test 
                        // console.log(target)
                        // console.log(target)
                    
                        var lio = splitWord.lastIndexOf(target); // this finds the last occurence of this letter 
                        var cont = document.getElementsByClassName("container")[0]; 
                        cont.getElementsByClassName("letter")[lio].innerHTML = target; // this changes the inner text of whatever div the loop is in to the corresponding letter index in the users word 

                    }
                }


var array = []
for (let t = 0; t < word.length; t++) {

    var c = document.getElementsByClassName("container")[0]; 
    var cs = c.getElementsByClassName("letter")[t].innerHTML;

    
        if (word.charAt(t) === cs) {
            
            array.push(word.charAt(t))
            
            
           
    }
    if (array.length === word.length) {
        document.getElementById("status").innerHTML = "GOOD JOB!";   // this adds game over message to the page 
            document.getElementById("status").style.color = "green";       // this makes the game over messages red 
            document.getElementById("answer").innerHTML = "Player two wins!"; 
            document.getElementById("answer").style.color = "green";       
        
    }
    
    
    
    
    }
    


    })


    } 



})


function reloadPage() {
    location.reload();
  }







// test 
// console.log(cs)