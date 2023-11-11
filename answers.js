// //Write a for loop that will log the numbers 1 through 20.
// // for(let i =1; i <= 20; i++) {
// //     console.log(i);
// // }

// //Write a for loop that will log only the even numbers in 0 through 200.

// // for(let i = 2; i <= 200; i += 2) {
// //     console.log(i);
// // }

// ///////////////////////////////////////////////
// //////////Fizz Buzz
// ///////////////////////////////////////////////
// // for(let i =1; i <= 100; i++) {
// //     if(i % 3 === 0 && i % 5 === 0) {
// //         console.log('FizzBuzz');
// //     }else if(i % 3 === 0) {
// //         console.log('Fizz');
// //     }else if(i % 5 ===0) {
// //         console.log('Buzz');
// //     }
// // }

// //////////////////////////////
// //////////Wild Wild Life
// //////////////////////////////
// // const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
// // const sharky = ["Sharky", "shark", 20, "Left Coast"]
// // const plantee = ["Plantee", "plant",  5000 , "Mordor"]
// // const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
// // const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]
// // //Plantee just had her birthday; change Plantee's array to reflect her being a year older.
// // plantee[2] += 1
// // console.log(plantee[2]);
// // //Change Wolfy's hometown from "Yukon Territory" to "Gotham City".
// // wolfy[3] = 'Gotham City';
// // console.log(wolfy[3]);
// // //Give D'Art a second hometown by adding "Hawkins"
// // dart.push('Hawkins');
// // console.log(dart);
// // //Porgee decides that Wolfy can't be named "Wolfy" anymore. Remove "Wolfy" from the wolfyarray and replace it with "Gameboy".
// // wolfy[0] = 'Gameboy';
// // console.log(wolfy);
// ///////////////////////////////////////////////////////////
// /////////////////////Yell at the Ninja Turtles
// ///////////////////////////////////////////////////////////
// //Create an array with the members of the ninja turtles (Donatello, Leonardo, Raphael, Michaelangelo)

// // ninjaturtles = ['Donatello','Leonardo','Raphael','Michaelangelo'];
// // console.log(ninjaturtles);

// // //Use a for of loop(not a typo - try it out! Try a for ofloop) to call toUpperCase()on each of them and print out the result.

// // for(let item of ninjaturtles) {
// //     console.log(item.toUpperCase());
// // }

// //////////////////////////////////////////
// /////////////Methods, Revisited
// /////////////////////////////////////////
// const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];

// //Console log: the index of Titanic
// // console.log(favMovies.indexOf('Titanic'));
// // favMovies.sort();
// // //console.log(favMovies);

// // //use the .sortmethod Thought question: what did this do to the array? Did it permanently alter it?
// // //Yes
// // //Use the method pop
// // console.log(favMovies.pop());
// // //console.log(favMovies);
// // //push"Guardians of the Galaxy"

// // favMovies.push('Guardians of the Galaxy');
// // //console.log(favMovies);
// // //Reverse the array
// // favMovies.reverse();
// // //console.log(favMovies);
// // //Use the shiftmethod
// // console.log(favMovies.shift());
// // //console.log(favMovies);

// // //unshift- what does it return?
// // ///length of the array

// // console.log(favMovies.unshift('Black Panther'));

// //splice"Django Unchained" and add "Avatar" (try finding the index of "Django Unchained", instead of counting it yourself) Thought question: did this permanently alter our array?======> Yes

// console.log(favMovies.indexOf('Django Unchained'));
// favMovies.splice(3,1,'Avatar');
// console.log(favMovies);

// //slicethe last half of the array (challenge yourself and try to programatically determine the middle of the array rather than counting it and hard coding it) - Thought question: did this permanently alter our array? ===> No

// //store the value of your slicein a variable, console.log it - Thought question: what is going on here?
// // ====> return shollow copy

// console.log(favMovies.length/2);

// const copySlice = favMovies.slice(9);
// console.log(copySlice);

// console.log(copySlice.indexOf('Fast and Furious'));
// copySlice.pop();
// console.log(copySlice.indexOf('Fast and Furious'));

// console.log(favMovies.indexOf('Fast and Furious'));
// //After running the above tasks, console.log the index of "Fast and Furious" -We removed it from the array, what value do we get when we look for the index of something that is not in the array?======> -1

// //Thought question: that we declared the variable favMovieswith const, and yet, we were allowed to change the array. Weird? Should we have used let?
// //====> You can change the array but you can not reassign it

// ////////////////////////////////////////////////////////
// //////////////Where is Waldo
// ////////////////////////////////////////////////////////
const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
                    ["Lucinda", "Jacc", "Neff", "Snoop"],
                    ["Petunia", ["Baked Goods", "Waldo"]]];

//Remove Eggbert (hint look at the slice/splice method(s))
console.log(whereIsWaldo.indexOf('Eggbert'));
whereIsWaldo.splice(1,1);
console.log(whereIsWaldo);
console.log(whereIsWaldo[1].indexOf('Neff'));
(whereIsWaldo[1]).splice(2,1,'No One');
console.log(whereIsWaldo);
console.log(whereIsWaldo[2][1][1]);



