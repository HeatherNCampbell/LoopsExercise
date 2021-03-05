// LOOPS EXERCISE
// 1
for (i = 1; i<= 7; i++) {
    console.log(i);
}
console.log("======");

// 2
for (i = 5; i <=25; i+=4){
    console.log(i);
}

console.log("======");
// 3a. 
const wizards = [
    "Harry Potter", "Hermione Granger", "Ron Weasley" 
];
console.log(wizards);

console.log("======");

// 3b. Use a For Of Loop to have each name display in the console/terminal (You will need a console log for this)

for (char of  wizards) {
    console.log(char);
}
console.log("======");

// 4a. 

let harryPotterMovies = 0

//4b. Create a While Loop that adds 1 to the harryPotterMovies variable each time through the while loop until the harryPotterMovies variable has a value of 8.
while (harryPotterMovies <8 ) {
    harryPotterMovies++;
}
console.log(harryPotterMovies);
    



