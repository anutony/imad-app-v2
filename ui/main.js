//counter code
var button = document.getElementById('counter');
var counter = 0;

button.onclick = function () {
  
    
    
    //create a request object 
    var request = new XMLhttprequest();
    
    
    //capture the response and store it in a variable 
    request.onreadystatechange = function() {
        if (request.readyState == XMLhttprequest.DONE){
            //Take some action
            if (request.status == 200) {
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.InnerHTML = counter;
            }
        }
        //not done yet
    };
    //make the req
    request.open('GET', 'http://anutony.imad.hasura-app.io/counter', true);
    request.send(null);

};


