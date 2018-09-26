var btn = document.getElementById("go-button");
function buttonClicked(){
    console.log("Button clicked")
    var customText = document.getElementsByClassName("my-input")
    var textarea = document.getElementsByClassName("my-textarea")
    var results = document.getElementById("text")
    results.innerHTML = "Hello, " + customText[0].value + "<br />"
    results.innerHTML += "Message: " + textarea[0].value
}
btn.addEventListener("click",buttonClicked)

/*we can have nested functions, however the scope of nested function is within the funtion were it is defined 
and not outside it*/ 

function getLength(params){
    console.log(params.v1.length)
    console.log(params.v2.length)
}


var1 = "my name is elson"
var2 = "programming"

getLength((v1: var1, v2: var2));
