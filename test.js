// the hello world program
// console.log('Hello World');

// var const let

// variables and Constants

// variables= cahnge values but const= cannot change values

// console.log("hello javascript")  
// inline javascript , internal javascript, external javascript

// alert("welcome")

// values and variables

// var myName= "ARUP";// this is called camel case convention
// console.log(myName);

// practice
// var _myLastname$="rick";  valid 

// var 123myAge=25; invalid
// var $cityName="Newyork"; valid

// var my@Email="thapa@me.com"; invalid because except dollar symbol we can't use any special character for creating variables



// DATA TYPES
// two types of data types : primitive data types and object data types

// primitive data types :string,number,boolean,undefined,null,bigint,symbol

// Object data types: an object, an array, a date   

// var Name="rick";
// console.log(Name);  //string data type example

// var youare_great=false; 
// var salary_Pending=true;//boolean data type example
// console.log(youare_great);

// var rick;
// console.log(rick); //undefined data type example means if we create a varible we must have to define it with a value.

// var good_triger=null;
// console.log(good_triger); //null data type

//purpose of *type of* operator in js
// var Name_r=98;
// console.log(Name_r);
// console.log(typeof Name_r);

// converting string to number
// var _name="65";
// console.log(_name);
// console.log(typeof +_name); //for converting string to number we have to just add a '+'or 'number' sign at  before the variable name in console

//converting number to string
// var jak_p=5;
// console.log(typeof String(jak_p));

//to check if a non empty string is truthy or false in javascript
// var my_name='';
// if (my_name){
//     console.log("this is truthy value");
    
// }else{
//     console.log("this is falsy value");
    
// }

// let name_ = "Rohit";
// let age = 32;
// let isStudent = false;  // This should be a boolean value

// let sentence = name_ + " is " + age + " years old and is " + (isStudent ? "a student" : "not a student");

// if (isStudent) {
//     sentence += " I am a student";
// } else {
//     sentence += " I am not a student";
// }

// console.log(sentence);

//object example
// const product={
//     name: "ball pen",
//     rating: 4.7,
//     offer: 6,
//     price: 766,

// };
// console.log(product);

// const profile={
//     username:"Arup",
//     isfollow: false,
//     followers:222,
//     following: 23,
// };
// console.log(typeof profile ["isfollow"]);
// console.log(profile.username);

//Arithmetic operator
// let a=12;
// let b= 34;
// console.log("a+b =",a+b);
// console.log("a-b=", a-b);
// console.log("a*b=",a*b);
// console.log("a/b=",a/b);
// console.log("a%b=",a%b);
// console.log("a**b",a**b);//ex: 5^2=25

// unary operator
// let a=2;
// let b=4;
// console.log("a",a, "& b",b);
// a--// a=a+1 or a++
// console.log("a",a);

//assignment operator

// let a=7;
// let c=8;

// a*=5;
// a%=6;
// a+=8;
// a-=4;
// a/=3;
// a**=4;
// console.log("a=", a);

//comparison operator
// let b="45";
// let n="4";
// console.log("b!=n",b!=n); //it returns the output in boolean
// console.log("b==n",b==n); 
// console.log("b>=n",b>=n);
// console.log("b<=n",b<=n);
// console.log("b>n",b>n); 

//logical operator
// let m=43;
// let t=34;

// let cond1 =m>t;
// let cond2 = m===43;
// console.log("cond1 && cond2", m>=t &&m===43 );//logical and


// let a=54;
// let b =76;
// console.log("!(54>76)=", !(a>b));//logical not
// console.log("st1 || st2",a<b||a===54);//logical or
// console.log("!(54>76)=", !(a>b));

//conditional statement
// let mode= "light";
// let color;

// if(mode==="dark"){
//     color ="black";
// }
// if(mode==="light"){
//     color ="white";

// }
// console.log(color);

// let num= 13;
// if(num%2===0){
//     console.log(num,"even");
    
// }else{
//     console.log(num,"odd");
    
// }

//ternary operator
// let age=24;

// let result=age<=18 ? "Adult": "not adult";
// console.log(result);

alert("hello!");











