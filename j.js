
var msg = "YOUR PHONE IS HACKED.THANK YOU";

var age = 25;
var myage = 25.82;

alert(msg);
//alert(age + myage);

console.log("My age this year is " + age);
age = 26;

console.log("My age next year is " + age);
//if loop
if(age < 1){
    console.log("You are a baby");
}else if(age < 3){
    console.log("You are a child");
}else{
    console.log("you are a adult");
}
//for loop is same as that of java
//functions
function printname(name){
    console.log("Hello ",name);
}
printname("Elson");
printname("Ganesh");
var btn = document.getElementById("but");
function buttonClicked(){
    console.log("Button clicked")
    btn.removeEventListener("click",buttonClicked)//This facilitates only one click
    document.getElementById("els").innerHTML = "YOU ARE A FOOL";
}
btn.addEventListener("click",buttonClicked)

var hobbies= ["Archery","Music","cricket"]

console.log(hobbies);

hobbies.pop();

hobbies.push("Football")

/*To shift the things from the left use shift and unshift operation,if you want to shift to the right we have
push and pop operations*/
/*Hobbies.spice(2,4) method deleted element from index 2 to 4
Hobbies.indexOf("Archery") returns the index number*/

console.log(hobbies)

hobbies.forEach(function(item,index){
    console.log("I like",item,index)
})


