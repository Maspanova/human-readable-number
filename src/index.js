module.exports = function toReadable (number) {
       let key = number.length;
    let numbers = "";
    let units = number % 10 
    let dozens= "";
    if (number == 0) {
        numbers = "zero"
    };
    if (number==1 || units == 1){
        numbers = "one"
    };
    if (number==2 || units == 2) {
        numbers = "two"
    };
    if (number==3 || units == 3) {
        numbers = "three"
    };
    if (number==4 || units == 4) {
        numbers = "four"
    };
    if (number==5 || units == 5) {
        numbers = "five"
    };
    if (number==6 || units == 6) {
        numbers = "six"
    };
    if (number==7 || units == 7) {
        numbers = "seven"
    };
    if (number==8 || units == 8) {
        numbers = "eight"
    };
    if (number==9 || units == 9) {
        numbers = "nine"
    };
    if (number==10) {
        numbers = "ten"
    };
    if (number==11) {
        numbers = "eleven"
    };
    if (number==12) {
        numbers = "twelve"
    };
    if (number==13) {
        numbers = "thirteen"
    };
    if (number==14) {
        numbers = "fourteen"
    };
    if (number==15) {
        numbers = "fifteen"
    };
    if (number==16) {
        numbers = "sixteen"
    };
    if (number==17) {
        numbers = "seventeen"
    };
    if (number==18) {
        numbers = "eighteen"
    };
    if (number==19) {
        numbers = "nineteen"
    };

    if (number < 20 ) {
    return numbers; 
};

 
 if (number >= 20 && number <= 99) {
    if (Math.trunc(number / 10) == 2) {
    dozens = "twenty"
    };
   if (Math.trunc(number / 10)  == 3) {
    dozens = "thirty"
   };
   if (Math.trunc(number / 10) == 4) {
    dozens = "forty"
   };
   if (Math.trunc(number / 10)  == 5) {
    dozens = "fifty"
   };
   if (Math.trunc(number / 10)  == 6) {
    dozens = "sixty"
   };
   if (Math.trunc(number / 10)  == 7) {
    dozens = "seventy"
   };
   if (Math.trunc(number / 10)  == 8) {
    dozens = "eighty"
   };
   if (Math.trunc(number / 10)  == 9) {
    dozens = "ninety"
   };
   if (number >= 20 && number <= 99 && number % 10 === 0) {
   return dozens;
   }
   else {
    return dozens + " " + numbers
   }
};
}
