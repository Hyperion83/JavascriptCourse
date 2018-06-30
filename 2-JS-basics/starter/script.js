var markMass = prompt('How is Mark Mass?');
var markHeight = prompt('How is Mark Height?');

var johnMass = prompt('How is John Mass?');
var johnHeight = prompt('How is John Height?');

var markBMI = markMass / (markHeight * markHeight) ;  
var johnBMI = johnMass / (johnHeight * johnHeight) ;  

console.log('markMass:' + markBMI);
console.log('johnMass:' + johnBMI);

var winner = 'Mark';
if(johnBMI > markBMI){
    winner = 'John'
}

console.log('The winner is '+winner); 

fdfd