let input = document.querySelector('.input')
const button = document.querySelector('.button')


// const sample = document.querySelector(".sample");

// button.addEventListener('click', function(evt) {

       // to get input to appear on screen 

//     evt.preventDefault();
    // var paragraph = document.createElement("p")
    // var text = document.createTextNode(input.value);
    // paragraph.appendChild(text);
    // sample.appendChild(paragraph);

// })


// button.addEventListener('click', function(evt) {

//     to target an index in the users word 
//     evt.preventDefault();
//     var word = input.value
//     var one = word.charAt(0);
    
//     var paragraph = document.createElement("p")
//     var text = document.createTextNode(one);
//     paragraph.appendChild(text);
//     sample.appendChild(paragraph);

// })


// button.addEventListener('click', function(evt) {


//        to get length of users word 
//     evt.preventDefault();

//     var word = input.value
//     var wordLength = word.length;
    
//     var paragraph = document.createElement("p")
//     var text = document.createTextNode(wordLength);
//     paragraph.appendChild(text);
//     sample.appendChild(paragraph);

// })




   button.addEventListener('click', function(evt) {
        evt.preventDefault();


//         var  = document.getElementById("foo");
// while (myNode.firstChild) {
//     myNode.removeChild(myNode.firstChild);
// }




        // the users word 
        var word = input.value;
        var i;
        
        for (i = 0; i < word.length; i++) { 

        // create index for each letter 
        let lix = 0

        // first letter of the users word 
        var letter = word.charAt(lix);

        // the container 
        var container = document.querySelector(".container");

        // new div for container 
        var newDiv =  document.createElement("div");

        // add new div as a child for container 
        container.appendChild(newDiv);
        
        // give new div the letter class
        newDiv.classList.add("letter");

        // increment letter index 
        lix++;

}

})




        //get new div out of document and save as variable



        // add letter to div 
        // newDiv.appendChild(letter);
