// 1.
// alert( “I’m JavaScript!’); Double quotes missing inside string
// instead we can use escape charecters to make it run as in.
alert("I\'m JavaScript!");


// 2. Find the culprit and invoke the alert
// alert(“I’m invoked!”); Double quotes missing inside string
// instead we can use escape charecters to make it run as in.
alert("I\'m invoked!");

// 3.Explain the below how it works
alert("I'm JavaScript!");
// A semicolon may be omitted in most cases when a line break exists.JavaScript
// interprets the line break as an “implicit” semicolon.Also called as automatic
// semicolon insertion.
alert('Hello') // this line is not having semicolon
alert(`Wor
 ld`)
alert(3 +
1
+ 2); // this is multiple line code and its working. JavaScript does not insert semicolons here. It is intuitively obvious that if the
// line ends with a plus "+", then it is an “incomplete expression”, no semicolon
// required. And in this case that works as intended.


// Explanation : We can have as many statements in the code as we want. Another
// statement can be separated with a semicolon.


// 4.Fix the below to alert Guvi geek
let admin=9, fname=10.5; 
fname = "Guvi";
lname = "geek"
admin = fname+lname; // we need to replace this statement with admin = fname+ " " +lname
alert( admin ); // "Guvi geek"


// 5.Fix the below to alert hello Guvi geek
let fname=10.5; 
fname = "Guvi";
lname = "geek"
let name = fname+lname;
alert( 'hello ${name}' ); // to get "Guvi geek" we need to use `` instead of ''
// alert(`hello ${name})


// 6.Fix the below to alert sum of two numbers.
// to fix this code we need to convert the values in a and b to number type
let a = prompt("First number?"); // let a = +prompt("First number?")
let b = prompt("Second number?"); // let b = +prompt("Second number?");
alert(a + b);


// 7.If you run the below scritpt you will get “Code is
// Blasted”
// Explain Why the Code is blasted and how to diffuse it and
// get “Diffused”.

var a = "2" < "12";
//Don't touch below this
if (a) {
console.log("Code is Blasted")
}
else
{
console.log("Diffused")
}
// Solution : Here 2 is not greater than 12 that why its
// diffused here. Change the condition and in string it will
// compare “2” vs “12” i.e 2 vs 1 then 2.


// 8.How to get the success in console.
let a = prompt("Enter a number?");
//Don't modify any code below this
if (a) {
 console.log( 'OMG it works for any number inc 0' ); // to get this output enter a value in prompt
}
else
{
 console.log( "Success" ); // to get success in console leave the prompt null or undefined
}


// 9.How to get the correct score in console.
// Solution here:
let value = +prompt('How many runs you scored in this ball');
if (value === 4) {
console.log("You hit a Four");
} else if (value === 6) {
console.log("You hit a Six");
} else {
console.log("I couldn't figure out");
}

// 10.Fix the code to welcome the Employee.
// let login = 'Employee';
// let message = (login == 'Employee') ? :
//   (login == 'Director') ? 'Greetings' :
//   (login == '') ? 'No login' :
//   '';
// console.log(message);

// fixed code.
let login = 'Employee';
let message = (login === 'Employee') ? 'Welcome the':
(login == 'Director') ? 'Greetings' :
(login == '') ? 'No login' :
'';
console.log(message,`${login}`);


// 11.Fix the code to welcome the boss.
// You cant change the value of the msg
let message;
if (null || 2 || undefined )
{
 let message = "welcome boss"; // replace this statement with let message = "Go away";
}
else
{
 let message = "Go away";// replace this statement with let message = "welcome boss";
}
  console.log(message);

// 12.Fix the code to welcome the boss.
// You cant change the value of the msg
let message;
let lock;
//Dont change any code below this
if (null || lock || undefined )
{
message = "Go away";
}
else
{
message = "welcome";
}
console.log(message);


// 13.Fix the code to welcome the boss.
let message;
let lock;
//Dont change any code below this
if (lock && " " || undefined )
{
message = "Go away";
}
else
{
message = "welcome";
}
console.log(message);


// 14.Change the code to print
// 3
// 2
// 1
//You can change only 2 characters
let i = 3;
while (i) {
  console.log( --i ); // we can use post decrement which will print value first and then decrement (i--)
}


// 15. Change the code to print 1 to 10 in 4 lines
let num = 1
console.log(num)
num += 1
console.log(num)
num += 1
console.log(num)
num += 1
console.log(num)
num += 1
console.log(num)
num += 1
console.log(num)
num += 1
console.log(num)
num += 1
console.log(num)
num += 1
console.log(num)
num += 1
console.log(num)
// this can be modified in following way.
for(let i=1; i<=10; i++){
    console.log(i);
}


// 16.Change the code to print even numbers.
//You are allowed to modify only one character 
for (let num = 2; num <= 20; num += 1) { // we can increment the value of num by 2 instead of 1
    console.log(num)
  }
  for (let num = 2; num <= 20; num += 2) { 
    console.log(num)
  }

// 17. Change the code to print all the gifts.
let gifts = ["teddy bear", "drone", "doll"];
for (let i = 0; i < 3; i++) {
//   console.log('Wrapped ${'gifts[i]'} and added a bow!'); // we should use `` instead of ''
  console.log(`Wrapped ${gifts[i]} and added a bow!`);
}

// 18.Fix the code to disarm the bomb.
// Solution here..Change the condition and count ++

let countdown = 100;
while (countdown > 0) {
  countdown--; // we can write it as countdown++
  if(countdown == 0)
  {
   console.log("bomb triggered");
  }
}

// 19.Whats the msg printed and why?
var lemein = "0";
var lemeout = 0;
var msg = "";
if (lemein) {
 msg += "hi";
 }
if (lemeout) {
 msg += 'Hello';
}
console.log(msg);// The output is "hi" and it is because the string 0 is passed inside if statement
// becomes true and the number 0 is false.