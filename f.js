
var numbers = [1, 2, 8, 9, 15, 7, 5, 4, 6, 10, 12 ,14 ,11 ,13]

function missing(numbers){
    var miss = -1;

    for(var i=0; i <= numbers.length; i++){
        if(numbers.indexOf(i) === -1){
            miss = i
        }
    }
    return miss
}

console.log(missing(numbers))