"use strict";
//Develop a program that determines the day of the week. 
function weekofday() {
    var dayofweek = 5;
    if (dayofweek == 1) {
        console.log("monday");
        return "monday";
    }
    else if (dayofweek == 2) {
        console.log("tuesday");
        return "tuesday";
    }
    else if (dayofweek == 3) {
        console.log("wednesday");
        return "wednesday";
    }
    else if (dayofweek == 4) {
        console.log("thursayy");
        return "thursday";
    }
    else if (dayofweek == 5) {
        console.log("friday");
        return "friday";
    }
    else {
        console.log("weekand");
        return "weekand";
    }
}
weekofday();
//Write a ts program that prints message like "Good Morning" etc
function message() {
    var currenthour = 6;
    if (currenthour > 9 && currenthour < 12) {
        console.log("Good morning");
        return "Good morning";
    }
    else if (currenthour > 12 && currenthour < 6) {
        console.log("Good afternon");
        return "Good afternoon";
    }
    else {
        console.log("Good evening");
        return "Good evening";
    }
}
message();
// write a program that prints the name of study of a person for instance education
function educationforaperson(classnumber) {
    if (classnumber == 1) {
        console.log("playgroup");
        return "playgroup";
    }
    else if (classnumber == 2) {
        console.log("Nursey");
        return "Nursey";
    }
    else if (classnumber == 3) {
        console.log("kindergarton");
        return "kindergarton";
    }
    else if (classnumber == 4) {
        console.log("Elementary school");
        return "Elementary school";
    }
    else if (classnumber == 5) {
        console.log("Middle school");
        return "Middle school";
    }
    else if (classnumber == 6) {
        console.log("High school");
        return "High school";
    }
    else if (classnumber == 7) {
        console.log("intermediate");
        return "intermediate";
    }
    else if (classnumber == 8) {
        console.log("Undergraduate");
        return "undergraduate";
    }
    else if (classnumber == 5) {
        console.log("Graduate");
        return "Graduate";
    }
    else {
        console.log("Invalid class number");
        return "Invalid class room";
    }
}
educationforaperson(8);
// write a program that simulates a simple ATM . ask the user for balance
function ATMMoney(accountbalance, pinnumber, withdrawabalance, accountnumber) {
    if (accountnumber == 5463 && pinnumber == 432) {
        if (accountbalance >= withdrawabalance) {
            accountbalance -= withdrawabalance;
            console.log(`you have withdraw ${accountbalance}`);
        }
        else {
            console.log(`you have not enough money to withdraw`);
        }
    }
    else {
        console.log(`Account number and Pin number are wrong`);
    }
}
ATMMoney(45000, 432, 25000, 5463);
// write a program that check ms weather if the is positive ,negative or zero
function checkcondition(Num) {
    if (Num > 0) {
        console.log("Positive");
        return "positive";
    }
    else if (Num < 0) {
        console.log("Negative");
        return "negative";
    }
    else {
        console.log("Zero");
    }
}
checkcondition(12);
checkcondition(-0.5);
// write a program that 5 diferent number check is greatest and smallest
// ist check greatest value
function greatestvaluecheck(num1, num2, num3, num4, num5) {
    if (num1 > num2 && num1 > num3 && num1 > num4 && num1
        > num5) {
        console.log("Number 1 is Max number");
        return "Number 1 is Max number";
    }
    else if (num2 > num1 && num2 > num3 && num2 > num4 && num2
        > num5) {
        console.log("Number 2 is Max number");
        return "Number 2 is Max number";
    }
    else if (num3 > num1 && num3 > num2 && num3 > num4 && num3
        > num5) {
        console.log("Number 3 is Max number");
        return "Number 3 is Max number";
    }
    else if (num4 > num1 && num4 > num2 && num4 > num3 && num4
        > num5) {
        console.log("Number 4 is Max number");
        return "Number 4 is Max number";
    }
    else {
        console.log("Number 5 is Max number");
        return "Number 5 is Max number";
    }
}
greatestvaluecheck(0, 10, 45, 20, 28);
//check smallest value
function smallestvalue(number1, number2, number3, number4, number5) {
    if (number1 < number2 && number1 < number3 && number1 < number4 && number1
        < number5) {
        console.log("Number 1 is Min number");
        return "Number 1 is Min number";
    }
    else if (number2 < number1 && number2 < number3 && number2 < number4 && number2
        < number5) {
        console.log("Number 2 is Min number");
        return "Number 2 is Min number";
    }
    else if (number3 < number1 && number3 < number2 && number3 < number4 && number3
        < number5) {
        console.log("Number 3 is Min number");
        return "Number 3 is Min number";
    }
    else if (number4 < number1 && number4 < number2 && number4 < number3 && number4
        < number5) {
        console.log("Number 4 is Min number");
        return "Number 4 is Min number";
    }
    else {
        console.log("Number 5 is Min number");
    }
}
smallestvalue(0, 10, 45, 20, 28);
//calculate the percentage 
function calculatepercentage(givenvalue, totalvalue) {
    var percentagecalculate = givenvalue / totalvalue * 100;
    console.log("percentage =", percentagecalculate);
}
calculatepercentage(45, 50);
////write a program that calculates the discount for a product based on its price
function percentagecalculate(pricevalue) {
    if (pricevalue >= 100) {
        var discount = 0.1; // 10 %
        console.log("Discountprice =", discount);
        return "discount";
    }
    else {
        var discount = 0.05;
    }
    ; // 5 %)
    var discount = pricevalue - (pricevalue * discount);
    console.log("Discountprice =", discount);
    return "discount";
}
percentagecalculate(45);
// create a program that determines the category
function categoryperson(ageofperson) {
    if (ageofperson >= 0 && ageofperson <= 12) {
        console.log("child");
    }
    else if (ageofperson >= 13 && ageofperson <= 19) {
        console.log("teenager");
    }
    else {
        console.log("adult");
    }
}
categoryperson(14);
// write a program that takes temperature and check
const temperaturechange = (fahrenheit) => {
    const celciustofahrenheit = fahrenheit - 32 * 5 / 9;
    if (celciustofahrenheit >= 11 && celciustofahrenheit <= 17) {
        console.log("wear a warm clothes");
    }
    else
        (celciustofahrenheit >= 25 && celciustofahrenheit <= 45);
    {
        console.log("according to season weather");
    }
};
temperaturechange(47);
temperaturechange(33);
// write a program that the given number is divisible 3 or 5 
function divisible(givennumber) {
    if (givennumber % 3 == 0 && givennumber % 5 == 0) {
        console.log("Divisible by both 3 & 5");
    }
    else if (givennumber % 3 == 0) {
        console.log("Divisible by 3");
    }
    else if (givennumber % 5 == 0) {
        console.log("Divisible by 5");
    }
    else
        (givennumber % 3 !== 0 && givennumber % 5 !== 0);
    {
        console.log("not divisible by 3 & 5");
    }
}
divisible(19);
// write a program check given year leap or not 
const yeargiven = (givenyear) => {
    if (givenyear % 4 == 0) {
        return "given year is leap year";
    }
    else {
        return "given year is not leap year";
    }
};
const givenyear = 2003;
const value = yeargiven(givenyear);
console.log(value);
// write a program that determines the day of week 
function numberday(daynumber) {
    if (daynumber >= 1 && daynumber <= 7) {
        console.log("thursday");
    }
    else {
        console.log("wrong invalid number");
    }
}
numberday(8);
// write a program that takes the number of unit 
function totalunits(numberunits, billamount) {
    //var numberunits = 250;
    //var billamount = 45000;
    if (numberunits <= 100) {
        var taxdiscount = 0.1; // 10%
        var total = billamount + billamount * taxdiscount;
        console.log(total);
    }
    else if (numberunits <= 200) {
        taxdiscount = 0.15;
        var total = billamount + billamount * taxdiscount;
        console.log(total);
    }
    else
        (numberunits <= 500);
    {
        taxdiscount = 0.25;
    }
    var total = billamount + billamount * taxdiscount;
    console.log(total);
}
totalunits(250, 45000);
