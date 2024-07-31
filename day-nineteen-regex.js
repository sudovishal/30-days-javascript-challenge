// Activity 1
// Task 1
const matchWordString = function(str){
    const regex = /JavaScript/gi;
    const matches = str.match(regex)
    return matches
}
const str1 = `JavaScript (JS) is a lightweight interpreted (or just-in-time compiled) programming language with first-class functions. While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat. JavaScript is a prototype-based, multi-paradigm, single-threaded, dynamic language, supporting object-oriented, imperative, and declarative (e.g. functional programming) styles"
JavaScript's dynamic capabilities include runtime object construction, variable parameter lists, function variables, dynamic script creation (via eval), object introspection (via for...in and Object utilities), and source-code recovery (JavaScript functions store their source text and can be retrieved through toString()).`
console.log(matchWordString(str1))

// Task 2
const matchAllDigits = function(str) {
    const regex = /\d+/g
    return str.match(regex)
}
const str2 = `I lives 2 km away from my friend. My girlfriend lives 100 light years away from me :(.`
console.log(matchAllDigits(str2))

// Activity 2
// Task 3
const matchWordswithCapitalLetters = function(text) {
    let capitalWords = text.match(/\b[A-Z][a-z]*\b/g);
    console.log(capitalWords);
}
let text1 = "The Quick Brown Fox Jumps Over The Lazy Dog";
matchWordswithCapitalLetters(text1)

const matchSeqOfDigits = function(text) {
    let digitSequences = text.match(/\d+/g);
    return digitSequences
}
let text2 = "There are 30 guys and 69 bitches.";
console.log(matchSeqOfDigits(text2))

// Activity 3
const decodePhoneNumber = function(phoneNo) {
    const regex = /\((.*?)\)\s(.*?)-(.*)/;
    const captures = phoneNo.match(regex);
console.log(captures[1], captures[2], captures[3]);
}
decodePhoneNumber("(123) 456-7890");

const captureEmailDetails = function(email) {
    const regex = /([^@]+)@(.*)/;
const captures = email.match(regex);
console.log(captures[1], captures[2]);
}
captureEmailDetails("vishal@gmail.com")

// Activity 4
const matchAtTheBeginning = function(str) {
    const regex = /^\w+/;
    return str.match(regex);
}
const str = "Hello, world!"
console.log(matchAtTheBeginning(str))

const matchAtTheEndOfTheString = function(str) {
    const regex = /\b\w+\b$/;
    return str.match(regex)
}
const str3 = "Hello, world!"
console.log(matchAtTheEndOfTheString(str3))

// activity 5

const password = "R8$uqX*K@9";
const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{8,}$/;

if (regex.test(password)) {
    console.log("Valid password");
} else {
    console.log("Invalid password");
}

const validEmailOrNot = function(email) {
    const regex = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
    
    if (regex.test(url)) {
        console.log("Valid URL");
    } else {
        console.log("Invalid URL");
}
}
const url = "https://www.example.com";
validEmailOrNot(url)