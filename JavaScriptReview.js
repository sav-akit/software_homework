/*How do we assign a value to a variable?
let or const var = Some
How do we change the value of a variable?
var = any
How do we assign an existing variable to a new variable?
let var2 = var
let var; var = 10; let test =10;
What is pseudocoding and why should you do it?
Detailed discription of what program should do and it is easy to understand by anyone

What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it? 
*/
console.log('******************');
/*

G. Monkey in the Middle
Write an if ... else if ... elsestatement:

console.log()little numberif the number entered is less than 5.
If the number entered is more than 10, log big number.
Otherwise, log "monkey".

*/
let num = 4;
if(num < 5){
    console.log('little number')
}else if(num > 10) {
    console.log('big number')
}else {
    console.log('monkey');
}
console.log('******************');
/*
H. What's in Your Closet?
Below, we've given you examples of Kristyn and Thom's closets modeled as data in JavaScript.
*/

const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "Per Scholas hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];
  
  // Thom's closet is more complicated. Check out this nested data structure!!
  const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];
 /* What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset, log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.
  */
 console.log(`Kristyn is rocking that ${kristynsCloset[2]} today!`);

 /*
 Kristyn just bought some sweet shades! Add "raybans"to her closet after "yellow knit hat"
 */

 kristynsCloset.splice(6,0,'raybans')
 console.log(kristynsCloset);
/*
Kristyn spilled coffee on her hat... modify this item to read "stained knit hat"instead of yellow.
*/
kristynsCloset[5] = 'stained knit hat';
console.log(kristynsCloset);
/*
Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirtsarray.
*/
console.log(thomsCloset[0][0]);
//In the same way, access one item from Thom's pants array.
console.log(thomsCloset[1][0]);
// Access one item from Thom's accessories array.
console.log(thomsCloset[2][0]);
//Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"

console.log(`Thom is looking fierce in a ${thomsCloset[0][0]}, ${thomsCloset[1][1]}, ${thomsCloset[2][1]}!`)
/*
Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.
*/
thomsCloset[1][2] = 'Footie Pajamas';
console.log(thomsCloset[1]);
console.log('******************');
/*
IV. Functions
A. printGreeting
Do you think you could write a function called printGreetingwith a parameter namethat returns a greeting with the argument interpolated into the greeting?

=> Hello there, Slimer!
*/
function printGreeting(string) {
    console.log(`Hello there, ${string}!`)
}
printGreeting('Slimer');

/*B. printCool
Write a function printCoolthat accepts one parameter, name as an argument. The function should print the name and a message saying that that person is cool.
*/
function printCool(name) {
    return `${name} is cool`;
}
console.log(printCool("Captain Reynolds"));
/*
C. calculateCube
Write a function calculateCubethat takes a single number and prints the volume of a cube made from that number.
*/
function calculateCube(num) {
    return num**3
}
console.log(calculateCube(5));

/* 
D. isVowel
Write a function isVowelthat takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise. The vowel could be upper or lower case. Test your function on every vowel and make sure it's working. In general, when you write functions, take a minute to test them with different values to make sure they behave the way you want.
*/
let str = "aeiouAEIOU"; 
function isVowel(char) {
    return str.includes(char);
}
console.log(isVowel("e"));
/*
E. getTwoLengths
Write a function getTwoLengthsthat accepts two parameters (strings). The function should return an array of numbers where each number is the length of the corresponding string.
*/
function getTwoLengths(str1,str2) {
    return [str1.length,str2.length]
}
console.log(getTwoLengths("Hank", "Hippopopalous"));
/*
F. getMultipleLengths
Write a function getMultipleLengthsthat accepts a single parameter as an argument: an array of strings. The function should return an array of numbers where each number is the length of the corresponding string.
*/
function getMultipleLengths(arr) {
    arrnum = []
    for(let str of arr) {
        arrnum.push(str.length);
    }
    return arrnum;
}
console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));
/*
G. maxOfThree
Define a function maxOfThreethat takes three numbers as arguments and returns the largest of them. If all numbers are the same, it doesn't matter which one is returned. If the two largest numbers are the same, one of them should be returned. Be sure to test it with larger values in each of the three locations.
*/
function maxOfThree(num1,num2,num3) {
    if(num1 >= num2 && num1 >= num3) {
        return num1;
    }else if (num2 >= num1 && num2 >= num3) {
        return num2;
    }else {
        return num3;
    }
}
console.log(maxOfThree(6, 9, 1));
/*
H. printLongestWord
Write a function printLongestWordthat accepts a single argument, an array of strings. The method should return the longest word in the array. In case of a tie, the method should return the word that appears first in the array.
*/
function printLongestWord(arr) {
    word = ' ';
    wordlength = 0;
    for(item of arr) {
        if(item.length > wordlength) {
            wordlength = item.length;
            word = item;
        }
    }
    return word;
}
console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));

console.log('******************');
/* 
Objects
Let's set up an object data structure. Let's say we have a website that sells products, and we have a user of our website, and we want to store that user's data. The object data structure is a good way to organize the data from our user.
A. Make a user object
Create an object called user.
Write in to the object the key-value pairs for name, email, age, and purchased. Set the value of purchasedto an empty array []. Set the other values to whatever you would like.

*/
const user = {name: 'emily',email: 'emily@gamil.com', age : 30, purchased :[],gende : 'female'};
console.log(user);
/*
B. Update the user
Our user has changed his or her email address. Without changing the original userobject, update the emailvalue to a new email address.
Our user has had a birthday! Without changing the original userobject, increment the agevalue using the postfix operator. Hint: age++
*/
user.email = 'emily123@gmail.com';
console.log(user);
user.age++;
console.log(user);
/*
C. Adding keys and values
You have decided to add your user's location to the data that you want to collect.
Without changing the original userobject, add a new key locationto the object, and give it a value or some-or-other location (a string).
*/
user.location = 'virginia';
console.log(user);
/*
D. Shopaholic!
Our user has purchased an item! They have purchased some "carbohydrates". Using .push(), add the string "carbohydrates" to the purchasedarray.
*/
user.purchased.push('carbohydrates');
console.log(user);
//Our user has purchased an item! They have purchased some "peace of mind". Using .push(), add the string "peace of mind" to the purchasedarray.
user.purchased.push('peace of mind');
console.log(user);
user.purchased.push('Merino jodhpurs');
console.log(user.purchased[2]);
/*
E. Object-within-object
Remember that you can add an object to an existing object in the same way that you can add any new property/value pair.
If we want to give our user a friendwith a nameand age, we could write:
Write a friendobject into your userobject and give the friend a name, age, location, and purchased array (empty for now)

*/
user.friend = {
    name: "Grace Hopper",
    age: 85,
    location: 'Maryland',
    purchased: [] 
}
console.log(user);
//Console.log just the friend's name
console.log(user.friend.name);
//Console.log just the friend's location
console.log(user.friend.location);
//CHANGE the friend's age to 55
user.friend.age = 55;
console.log(user.friend.age);
/*
The friendhas purchased "The One Ring". Use .push()to add "The One Ring" to the friend's purchasedarray.
*/
user.friend.purchased.push('The One Ring');
console.log(user.friend);
//The friendhas purchased "A latte". Use .push()to add "A latte" to the friend's purchasedarray.
user.friend.purchased.push('A latte');
console.log(user.friend);
//Console.log just "A latte" from the friend's purchasedarray.
console.log(user.friend.purchased[1]);

/*
F. Loops
Write a for loop that iterates over the User's purchasedarray (NOT the friend's purchased array), and prints each element to the console.
*/
for(let item of user.purchased) {
    console.log(item);
}

/*
Write a for loop that iterates over the Friend's purchasedarray, and prints each element to the console.
*/
for(let item of user.friend.purchased) {
    console.log(item);
}
/*
G. Functions can operate on objects
Write a single function updateUserthat takes no parameters. When the function is run, it should:
it should increment the user's age by 1
make the user's name uppercase
*/
function updateUser(){
    user.age++
    user.name = user.name.toUpperCase();
}
updateUser();
console.log(user);
//Write a function oldAndLoudthat performs the exact same tasks as updateUser, but instead of hard-coding it to only work on our userobject, make it take a parameter person, and have it modify the object that is passed in as an argument when the function is called. Call your oldAndLoudfunction with useras the argument.

function oldAndLoud(person) {
    person.age++
    person.name = person.name.toUpperCase();
}
oldAndLoud(user);
console.log(user);

//Cat Combinator
const mamaCat = {name:'Luna',breed: 'Manchukin',age: 10};
const papaCat = {name: 'Simba',breed: 'Persian', age: 12};
// console.log(mamaCat);
// console.log(papaCat);
/*
3. Combine Cats!
The cats are multiplying!

Write a function combineCatsthat has two parameters mama, and papa. The function will take two arguments -- each a cat object.

Pass cat1and cat2as arguments to the combineCatsfunction. The function should console.log them.

// */
// function combineCats(cat1,cat2) {
//     return {name :cat1.name+cat2.name, age:1, breed: cat1.breed+'-'+cat2.breed};
// }
// console.log(combineCats(mamaCat, papaCat));
// console.log(combineCats(combineCats(mamaCat, papaCat), combineCats(mamaCat, papaCat)));
// const cat1 = { name: "Joe", age: 19, breed: "Mog" };
// const cat2 = { name: "Jam", age: 45, breed: "Siamese" }
// // console.log(combineCats(cat1, cat2));
// // console.log(combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2)));
// console.log(combineCats(combineCats(combineCats(combineCats(cat1, cat2),combineCats(cat1, cat2)),combineCats(cat1, cat2)), combineCats(cat1, cat2)));


// console.log('++++++++++++++');

// console.log(combineCats(combineCats(combineCats(mamaCat, papaCat),combineCats(mamaCat, papaCat)), combineCats(mamaCat, papaCat)));

















