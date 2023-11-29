console.log("Hello World");
console.log("Goodbye Malaysia");

//window.alert("Hello My name is Afif");

//this is comment

/* 
this is multiline comment 

*/

//variable
let age = 23;
let firstName = "Afif";
let boolean = true;

console.log("My name is "+ firstName +". My age is " + age +" and I am still student which is " + boolean);
console.log("Hello ", age , "My name is ", firstName);

document.getElementById("p1").innerHTML = "Hello " + firstName;
document.getElementById("p2").innerHTML = "You are " + age + "Years old";
document.getElementById("p3").innerHTML = "You are still student which is " + boolean;

//arithmetic operations

let num = 20;
num += 1;
console.log(num);

num *= 1;
console.log(num);

num /= 1;
console.log(num);

num %= 1;
console.log(num);


//window prompt 
// let username = window.prompt("What's your name? ");
// console.log(username);

//get userinput using js from html form

newLabel = "Enter Your Username Here";
document.getElementById("myLabel").innerHTML = newLabel;


let username;

document.getElementById("btn").onclick = function (){
    username = document.getElementById("username").value;
    console.log(username);
}


//const = A variable that cannot be changed
const PI = 3.14;

document.getElementById("radBtn").onclick = function(){
    let radius=document.getElementById("radius").value;
    let circum = radius * PI;
    
    document.getElementById("result").innerHTML = "The totla circum of the circle is "+ circum;
}

//math function
let x = 6.99;
let y = 9;
let z = 3;

let maximum = Math.max(x, y, z);
let minimum = Math.min(x,y,z);

//x= Math.round(x)
//x= Math.floor(x);
x = Math.ceil(x);


console.log(x);
console.log(maximum);
console.log(minimum);


document.getElementById("hypoBtn").onclick = function(){

    let a = document.getElementById("aValue").value;
    let b = document.getElementById("bValue").value;
    
    a = Math.pow(a, 2);
    b = Math.pow(b, 2);

    let res = Math.sqrt(a + b);

    console.log(res);
    document.getElementById("hypoRes").innerHTML = res;
}


//count program starts here
let count =0;

document.getElementById("decrease").onclick = function (){

    count -=1;
    document.getElementById("countLabel").innerHTML = count;

}

document.getElementById("reset").onclick = function (){

    count =0;
    document.getElementById("countLabel").innerHTML = count;

}

document.getElementById("increase").onclick = function (){

    count +=1;
    document.getElementById("countLabel").innerHTML = count;

}


//Generate Random number
let radNum = Math.floor(Math.random() *6) + 1;
console.log(radNum);

//string
let usrname = "Afif Ahamed";

console.log("Lenght " +usrname.length);
console.log(usrname.toUpperCase());
console.log(usrname.toLowerCase());

let phoneNum = "123-456-987";

phoneNum = phoneNum.replaceAll("-", "/");
console.log(phoneNum);

phoneNum = phoneNum.replaceAll("/", "**");
console.log(phoneNum);

//slice method
let fullname = "Afif Ahamed";

let fName = fullname.slice(0, fullname.indexOf(" "));
let lName = fullname.slice(fullname.indexOf(" ") + 1);

console.log(fName);
console.log(lName);

//check box 

document.getElementById("myBtn").onclick = function (){
   
   const myCheckBox = document.getElementById("myCheckBox");
   const visaBtn = document.getElementById("visa");
   const masterBtn = document.getElementById("master");
   const paypalBtn = document.getElementById("paypal");


   if(myCheckBox.checked){
        console.log("You are subscribed");
    } else{
        console.log("You are NOT subscribed");
    }

    if(visaBtn.checked){
        console.log("You have selected Visa Payment option");
    } else if(masterBtn.checked ){
        console.log("You have selected Master Card Payment option");
    } else if (paypalBtn.checked){
        console.log("You have selected Paypal Card Payment option")
    } else{
        console.log("You must select a payment option");
    }

}

//while loop

// let xname = "";

// while (xname == "" || xname ==null){
//     xname = window.prompt("Enter your username");
// }
// console.log(xname);

//for loop
for(let i=0; i<=10; i++){
    console.log(i);
}

for(i=10; i>0; i--){
    console.log("Happy New Year "+i);
}

//continue or break
for(let i = 1; i<=20; i++){
    if(i==15){
        break;
    }
    console.log(i);
}

//function 
startProgram();

function startProgram(){
    let usernaame = "Afif";
    let agge = 23;

    helloWorld(usernaame, agge);
}



function helloWorld(usernaame, agge){
    console.log("Hello World!! " + usernaame);
    console.log("My Age is " + agge);
}


//return 

let area;
let width;
let height;

//width = window.prompt("Enter Width");
//height = window.prompt("Enter Height");

area = getArea(width, height);
console.log(area);

function getArea(width, height){
    return width * height;
}


//ternary operator
//it's a short cut of if-else statement
//condition ? ExprIfTrue : ExprIfFalse

let aggge = checkAge(21);

console.log(aggge);

function checkAge(aggge){
    return aggge>=18 ? true : false;
}

//another ternary

Win(false);

function Win(check){
    check? console.log("You Win") : console.log("You Lose");
}

//var vs let

//let variable is limited to block scope
for(let i=1; i<=4; i++){
    //we cannot access i outside this block code
}
//from here if i console.log(i) it won't get it and will show error

//var variable is limited to a function
for(var e=1; e<4; e++){

}
//here we can print the i outside of the block 
console.log(e);

//template literals 
let uni= "UCSI University";
let id = 1001957171;

let text = `My Uni name is ${uni}<br> and my student id is ${id}`;

document.getElementById("myTemplate").innerHTML = text;

let numm = 12345.56;
let numm2 = 12345.56;

numm = numm.toLocaleString("en-US");
console.log(numm);
numm2 = numm2.toLocaleString("en-US", {style: "currency", currency:"USD"});
console.log(numm2);

//array
let fruits = ["apple", "orange", "banana"];

fruits.push("Coconut"); //add element add the end
fruits.pop(); //remove element from the end
fruits.unshift("mango"); //add element at the beginning
fruits.shift(); //remove element at the beginning

let length = fruits.length;
let index = fruits.indexOf("apple");

//console.log(index);

//loop through an array
let sum = 0;

let nuums = [13,25,37,34,58];

for(let i = 0; i<nuums.length; i++){
    sum += nuums[i];
    //console.log("" +nuum[i]);
}
 console.log("Sum of Num is " +sum);

//shorter version
let num2 = [13, 25, 37, 34, 58];
for (let num of num2) {
    console.log("Nums " + num);
}

//sort an array of string
let names = ["Gabi", "Bryan", "Rashed", "Afif"];
//names = names.sort(); //sort an array
names = names.sort().reverse(); //reverse an array

for(let name of names){
    console.log(name);
}

//spread operator
/*In JavaScript, the spread operator (...) is a syntax that allows you to spread the elements of an iterable (like an array or a string) into individual elements. 
It's a concise way to expand elements 
in places where multiple elements or values are expected.
*/

let rolls = [22,2,55,6,7,988,9,4];

let max = Math.max(...rolls);
console.log(max);

//another example of spread operator in an array

function addNums(a,b,c){
    return a+b+c;
}

let addNum = [1,2,3];

console.log(addNums(...addNum));

//marge two arrays using spread operator
let class1 = ["Mugdho", "Naim", "Shakil"];
let class2 = ["Afif", "Turag", "Ashik"];

class1.push(...class2);
console.log(...class1);

//rest parameters = 
//represents an indefinite number of parameters
//packs arguments into an array

let a = 12; 
let b = 15;
let c = 20;
let d = 25; 
let ee = 30;

console.log("Sum of the nums " +sumNum(a,b,c,d))

function sumNum(...numbers){
    let sum = 0;
    for(num of numbers){
        sum += num;
    }
    return sum;
}

//forEach method in Js
/*It provides a way to execute a function once for 
each element in the array, allowing you to perform 
some operation on each element.*/

const ids= [1,2,3,4,5,6];

ids.forEach(function (id){
    console.log(id*2);
})

//array.map()

/*executes a provided callback function 
once for each array element AND
creates a new array */

let numbers1 = [1,2,3,4,5];
let squares = numbers1.map(square);
squares.forEach(print);

function square(element){
    return Math.pow(element,2);
}

function print(element){
    console.log(element);
}

/*array.filter() = creates a new array with all 
elements that pass the test provided by a function */
let ages = [18,16,31,44,55,66,78];
let adults = ages.filter(checkAge);

adults.forEach(print);

function checkAge(element){
    return element>=18;
}

function print(element){
    console.log(element);
}

//array.reduce = reduces an array to a single value
let prices = [5,10,15,20,25,30];
let total = prices.reduce(checkout);

console.log(`Total price is ${total}`)

//create a callback function
function checkout(total, element){
    return total + element;
}


//sort an array
let grades = [100, 50, 90, 60, 80, 70];
grades = grades.sort(assendingSort);

grades.forEach(print);

//call back function
function decendingSort(x, y){
    return y-x;
}

function assendingSort(x, y){
    return x-y;
}

function print(element){
    console.log(element);
}

//callback = a function passed as an argument to another function

let totall = sumNums(2,4);
Print(totall);

function sumNums(x, y){
    return x+y;
}

function Print(element){
    console.log("Sum of Totla num is " +element);
}


//function expression
//a function without a name
const annoFunc = function (){
    console.log("Hello");
}
annoFunc();

//arrow function
const arrowFunc = (nama) => console.log( `Hi ${nama}`);

arrowFunc("Afif");

const arrowFunc2= (x,y) => console.log(x+y);
arrowFunc2(2,8);

//call back using arrow function
const addTwoNum = (x,y) =>{
    return x+y;
}

let res = addTwoNum(2,4);

const printtt = (element)=> console.log(element);

printtt(res);

//another example
const percent = (x,y) => (x/y)*100;


console.log(`percent: ${percent(75,100)}`);

//another example of function expression
let gradesss = [100, 50, 90, 60, 80, 70];
grades.sort((x, y) => x-y);

grades.forEach((element) => console.log(element));

//another example of function expression
let gradess = [100, 50, 90, 60, 80, 70];
grades.sort(function(x, y){
    return y-x;
});
grades.forEach(function (element){
    console.log(element);
});


//nested functions - functions inside an another function
let usernamee = "Afif";
let newMess = 0;

login();

function login(){
    displayUserName();
    displayMessage();

    function displayUserName(){
        console.log(`Hi ${usernamee}. Welcome here`);
    }

    function displayMessage(){
        console.log(`You have ${newMess} new number of messages`);
    }
}

//map: object that holds key-value pairs of any data type
const store = new Map([
    ["t-shirt", 20],
    ["Umbrella", 10],
    ["Coke", 15], 
    ["Suger", 10]
]);

let shoppingCart =0;
shoppingCart +=store.get("Coke");
shoppingCart +=store.get("Suger");
console.log("Total Cart: "+shoppingCart);

//to add key and value inside the map use set
store.set("hat", 90);
//we can also delete map element
store.delete("hat");
//we can also check if a key is in the map
console.log(store.has("Suger"));
//size of the map
console.log("The size of the map is " +store.size);

store.forEach((value, key)=> console.log(`${value} ${key}`))

//another example of map
//square of the array elements
const numbers2 = [1,2,3,4,5];
const squareNums = numbers2.map(num => num * num);

squareNums.forEach(value => console.log(value))

//console.log(squareNums);


/*object = A group of properties and methods 
**Properties are what an object has
**methods are what an object can do 
**use . to access properties/methods*/

const car ={
    //properties
    model:"Mustang",
    color:"black",
    year: 2023,

    //methods
    drive: function (){
        console.log("You drive the car");
    },
    break: function (){
        console.log("You step on the breaks");
    } 
}

//to access object properties use .
console.log(car.model);
console.log(car.color);
console.log(car.year);
//to print function of an object
car.drive();
car.break();

//this keyword - ref to a particular object
//the object depends on the immediate context


const car1 ={
    //properties
    model:"Mustang",
    color:"black",
    year: 2023,

    //methods
    drive: function (){
        console.log(`You drive the ${this.model}`);
    }
}

const car2 ={
    //properties
    model:"Corvette",
    color:"Blue",
    year: 2024,

    //methods
    drive: function (){
        console.log(`You drive the ${this.model}`);
    }
}

car1.drive();
car2.drive();

//another example of this
this.name = "My name is Afif";
console.log(this.name);

//class = a blueprint for creating objects
//        define what properties and methods they
//        have use a constructor for unique properties

class Player{
    //properties
    score = 10;

    //methods
    pause(){
        console.log("You have paused the game");
    }

    exit(){
        console.log("You have exit the game");
    }
}

const player1 = new Player();
const player2 = new Player();
const player3 = new Player();
const player4 = new Player();

player1.score +=1;
console.log(player1.score);

player1.pause();
player2.pause();
player1.exit();

//constuctors = a special method of a class,
//              accepts arguments and assigns properties

class Students{
    id;
    name;

    //constructor
    constructor(id, name){
        this.id = id;
        this.name = name;
    }

    pause(name){
        console.log(`Hi ${this.name}`);
    }
}

const stdn1 = new Students(1001957171, "Afif");
const stdn2 = new Students(1001956789, "Fahim");
const stdn3 = new Students(100195432, "Iftiaj");

console.log(stdn1.name);
console.log(stdn1.id);
stdn1.pause();

//static = belongs to the class, not the objects
//         properties: useful for caches, fixed-configuration
//         methods: useful for utility functions

class Schools{

    static numberOfSchools = 0;
    constructor(name){
        this.name = name;
        Schools.numberOfSchools += 1;
    }

    static openSchool(){
        console.log("3..2..1..GO!");
    }

}

const schls1 = new Schools();
const schls2 = new Schools();
const schls3 = new Schools();

console.log(Schools.numberOfSchools);
//anything that is static belongs to the class not the object
Schools.openSchool();


//inheritance = a child class can inherit all the 
//              methods and properties from another class

//parent
class Animal{
    alive = true;

    eat(){
        console.log(`This ${this.name} is eating`);
    }

    sleep(){
        console.log(`This ${this.name} is sleeping`);
    }
}

//child

class Rabbit extends Animal {

    name = "Rabbit";

    run(){
        console.log(`This ${this.name} is running`);
    }
}

class Fish extends Animal {

    name = "Fish";

    swim(){
        console.log(`This ${this.name} is swimming`);
    }
}

class Hawk extends Animal {

    name = "Hawk";

    fly(){
        console.log(`This ${this.name} is flying`)
    }
}

const rabbit = new Rabbit();
const fish = new Fish();
const hawk = new Hawk();

console.log(rabbit.alive);
rabbit.eat();
rabbit.sleep();
rabbit.run();
fish.swim();
hawk.fly();



//super = Refers to the parent class
//        commonly used to invoke constructor of  parent class

//parent class
class Human{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

//child classes
class Afif extends Human{
    constructor(name, age, uni){
        //super
        super(name, age);
        this.uni = uni;
    }
}

class Fahim extends Human{
    constructor(name, age, company){
        //super
        super(name, age);
        this.company = company;
    }
}

class Iftiaj extends Human{
    constructor(name, age, gpa){
        //super
        super(name, age);
        this.gpa = gpa;
    }
}

const afif = new Afif("Afif", 23, "UCSI");
const fahim = new Fahim("Fahim", 24, "SystemSage");
const ifti = new Iftiaj("Iftiaj", 25, 3.71);

console.log(afif.name);
console.log(afif.age);
console.log(afif.uni);

console.log(fahim.name);
console.log(fahim.age);
console.log(fahim.company);

console.log(ifti.name);
console.log(ifti.age);
console.log(ifti.gpa);

//get = bind an object property to a function
//      what that property is accessed
//set = binds an object property to a function
//      when that property is assigned a value

class Plane {
    constructor(power){
        //._power means protected and shouldn't mess with it
        this._power = power;
        this._gas = 45;
    }

    get power(){
        return `${this._power} hp`;
    }

    get gas(){
        return `${this._gas}L`
    }

    set gas(value){
        if(value>100){
            value = 100;
        }else if(value <0){
            value =0;
        } else{
            this._gas = value; 
        }
        
    }

}


let plane = new Plane(500);
console.log(plane.power);

plane.gas = 5000;
console.log(plane.gas);

//Pass Objects as arguments in a function

class Counties{
    constructor(name, age, langu){
        this.name = name;
        this.age = age;
        this.langu = langu
    }

    bangla(){
        console.log(`I love ${this.name}`);
    }

    malay(){
        console.log("I love my malay-land");
    }

    india(){
        console.log("I love my india");
    }

}

const c1 = new Counties("BD", 50, "Bangla");
const c2 = new Counties("MY", 75, "Malay");
const c3 = new Counties("IND", 80, "Hindi");

myCountry(c1);

function myCountry(c1){
    console.log(c1.name);
    console.log(c1.age);
    console.log(c1.langu);
}

myCountry(c2);

function myCountry(c2){
    console.log(c2.name);
    console.log(c2.age);
    console.log(c2.langu);
}


changeInfo(c3, "Varat");
//chnage properties
function changeInfo(c3, name){
    c3.name = name;
    console.log(c3.name);
}

//array of objects
const countriess = [c1, c2, c3];
console.log(countriess[0].name);
console.log(countriess[1].age);
console.log(countriess[2].langu);

//access methods
countriess[0].bangla();
countriess[1].malay();

loopCountry(countriess);
//loop through array of objects
function loopCountry(countriess){
    for(country of countriess){
        country.bangla();
    }
}

//annoymous objects = Objects without a name
//                    Not directly referenced
//                    Less syntax. No need for unique names

class Card{
    constructor(value, suit){
        this.value = value;
        this.suit = suit;
    }

}

// let card1 = new Card("A", "hearts");
// let card2 = new Card("A", "Spades");
// let card3 = new Card("A", "Diamonds");
// let card4 = new Card("A", "Clubs");
// let card5 = new Card("2", "hearts");
// let card6 = new Card("2", "Spades");
// let card7 = new Card("2", "Diamonds");
// let card8 = new Card("2", "Clubs");

//instated of doing that make the object annoymous


// let  cards = [card1, card2, card3, card4, card5, 
//     card6, card7, card8];
let  cards = [
              new Card("A", "hearts"), 
              new Card("A", "Spades"), 
              new Card("A", "Diamonds"), 
              new Card("A", "Clubs"), 
              new Card("2", "hearts"), 
              new Card("2", "Spades"),
              new Card("2", "Diamonds"),
              new Card("2", "Clubs")
            ];


//access object values
//console.log(card1.value + card1.suit);
//or 
console.log(cards[0].value + cards[0].suit);

cards.forEach(card => console.log(card.value, card.suit));

//try-catch
try{
    //consol.log()
}catch(error){
    console.log(error);
}


//another error which wont show to anything
try{
   // let x = window.prompt("Enter a #");
    x= Number(x);

    if(isNaN(x)) throw "That wasn't a number";
    if(x=="") throw "that was empty!!";
    
    console.log(`${x} is a number`);

}catch(error){
    console.log(error);
}
finally{
    console.log("This always execuites");
}


//setTimeout() = invokes a function after a number of
//              milleseconds 
//              asynchronous function 

setTimeout(firstMessage, 3000);
setTimeout(secondMessage, 6000);
setTimeout(secondMessage, 9000);

function firstMessage(){
    console.log("I need to earn moneyyyy!!!");
}

function secondMessage(){
    console.log("We need to establish systemsage!!");
}

function thridMessage(){
    console.log("I need to leave this country");
}

//setIntervals = invokes a function repeatedly after
//              a number of milliseconds 
// asynchronous function (doesn't pause execution)

let countt=0;
//let maxx = window.prompt("Enter Num to count till");
let maxx = 7;

let timer =setInterval(countFunc, 1000);

function countFunc(){
    countt +=1;
    console.log(countt);

    if(countt>=maxx){
        clearInterval(timer);
    }
}

//date object
let date = new Date();

console.log(date);

console.log(formatDate(date));
console.log(formatTime(date));

function formatDate(date){
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    return `${day}/${month}/${year}`;
}

function formatTime(date){
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let amOrPm = hours >= 12 ? "pm" : "am";

    //convert military hours to standard
    hours = (hours % 12) || 12;

    return `${hours}:${minutes}:${seconds}:${amOrPm}`;
}



//synchronous code = In an ordered sequence.
        //              Step-by-step linear instructions
        //              (start now, finish now)
        console.log("START");
        console.log("This step is synchronous");
        console.log("END");

        //asynchronous code = out of sequence.
        //                  Ex. Access a database
        //                  Fetch a file
        //                  Tasks that take time
        //                  (start now. finish sometime later)

        console.log("START");
        setTimeout(() => console.log("This step is asynchronous"), 3000);
        console.log("END");

//console.time() => starts a timer you can use to
//              track how long an operation takes 
//              give each timer a unique name.

//start
console.time("start");
alert("Click the ok button");

//end
console.timeEnd("Response Time");

//Promise = Object that encapsulates the result of an 
//          asynchronous operation
//          let asynchronous methods return values like synchronous methods
//          "I promise to return something in future"

//          the state is 'pending' then: fulfilled or rejected
//          the Result is what caan be returned
//          2 parts producing & consuming

const promise = new Promise((resolve, reject) =>{
    let fileLoaded = false;

    if(fileLoaded){
        resolve("File loaded");
    }else {
        reject("File not loaded");
    }
})

promise.then(value => console.log(value))
                .catch(error => console.log(error));




//Promise 2
const promise2 = new Promise(resolve =>{
    setTimeout(resolve, 5000);
})

promise2.then(()=> console.log("Thanks for waiting***************"));


