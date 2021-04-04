'use strict'

let userName = prompt( "What is your name?");
console.log(typeof userName);

let livingAt = prompt( "Where do you live?");
console.log(typeof livingAt);

let workFor = prompt( "What is your company name?");
console.log(typeof workFor);

let favLanguage = prompt( "What is your favourite programming language?");
console.log(typeof favLanguage);

let message = "Your name is " +userName + ", you live in "+livingAt+ ", your company name is "+workFor+ ", and your favourite programming language is "+favLanguage;
alert(message);