//counter code
var button = document.getElementById('counter');
var counter = 0;

button.onclick = function () {
    counter = counter + 1;
    //make a request to counter endpoint 
    
    //capture the response and store it in a variable 
    
    //render the variable in the correct span
    
var span = document.getElementById('count');  
span.innerHTML = counter;
};


