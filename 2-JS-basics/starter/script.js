//var markMass = prompt('How is Mark Mass?');
//var markHeight = prompt('How is Mark Height?');
//
//var johnMass = prompt('How is John Mass?');
//var johnHeight = prompt('How is John Height?');
//
//var markBMI = markMass / (markHeight * markHeight) ;  
//var johnBMI = johnMass / (johnHeight * johnHeight) ;  
//
//console.log('markMass:' + markBMI);
//console.log('johnMass:' + johnBMI);
//
//var winner = 'Mark';
//if(johnBMI > markBMI){
//    winner = 'John'
//}
//
//console.log('The winner is '+winner);

//var whatJobDoYouDoing = function (job, firstName) {
//    switch (job) {
//        case 'Teacher': return firstName + 'teah to the kid';
//        case 'Developer' : return firstName + 'Develop code';
//    }
//}
//
//console.log(whatJobDoYouDoing('Teacher','Carlo'));

//var bills = [124,48,268]; 
//var tips = [tipCalculator(bills[0]),tipCalculator(bills[1]),tipCalculator(bills[2])]; 
//var finalValue = [tips[0] + bills[0],
//                  tips[1] + bills[1],
//                  tips[2] + bills[2]];
//console.log(bills);
//console.log(tips);
//console.log(finalValue);
//
//function tipCalculator(bill) {
//    var percentage;
//        
//            if (bill<=50) {
//                percentage = .2;             
//            }
//          
//            if  (bill>50 && bill<=200 ) { 
//                 percentage = .15;   
//            }
//        
//            if  (bill>200){
//                percentage = .1;   
//            }
//        
//        return percentage * bill;
//}
// 

//Challenge four

//var John = {
//     fullName : 'John',
//    mass : 60,
//    heigth : 1.60,
//    calcBMI : function (){ this.bmi=this.mass/(this.heigth*this.heigth);
//                     }
// };
//
//var Mark = {
//     fullName : 'Mark',
//    mass : 70,
//    heigth : 1.60,
//    calcBMI : function (){ this.bmi=this.mass/(this.heigth*this.heigth);
//                          return this.bmi;
//                     }
// };
//John.calcBMI();
//Mark.calcBMI();
//console.log(John);
//console.log(Mark);

var tipsCalculate = {
    bills : [42, 48, 124, 180, 268],
    tips : function() {
        var tipsLocal = new Array ;
        for(var i = 0; i<this.bills.length; i++){
            if(this.bills[i] < 50){tipsLocal[i] = this.bills[i] * 0.20;}
            if(this.bills[i] >= 50 && this.bills[i] <= 200){tipsLocal[i] =this.bills[i] * 0.20;}
            if(this.bills[i] > 200){tipsLocal[i] = this.bills[i] * 0.20;}
        
}
        return tipsLocal;
    }
}
 
tipsCalculate.tips();
console.log(tipsCalculate);
 
