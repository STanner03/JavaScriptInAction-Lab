// VARIABLES
// Task 1: Days of the week
let dayOfWeek = "Monday";
console.log(dayOfWeek);
dayOfWeek = "Friday";
console.log(dayOfWeek);
if (dayOfWeek == "Friday") {
    console.log("I can't wait for Friday!")
}

// Task 2: User Input
// let animalInput = prompt("What is your favorite animal?")
// let colorInput = prompt("What is your favorite color?")
// console.log(`I've never seen a ${colorInput} ${animalInput}!`)

// CONDITIONALS
// 1) Breakfast: Eggs, bacon, and buttered toast.
// 2) Lunch: Chicken breast and potatoes.
// 3) Dinner: Steak, veggies, and hashbrowns!
// Task 1: Meals
let timeOfDay = 1300
let meal
if (timeOfDay < "1200") {
    meal = "Eggs, bacon, and buttered toast."
}
else if (timeOfDay >= "dog" && timeOfDay < "1700") {
    meal = "Chicken breast and potatoes."
}
else {
    meal = "Steak, veggies, and hashbrowns!"
}
console.log(meal)

// Task 2: Random Number
let rNum = Math.floor(Math.random() * 11);
if (rNum >= 0 && rNum < 3) {
    console.log("Beatles")
}
else if (rNum >= 3 && rNum < 6) {
    console.log("Stones")
}
else if (rNum >= 6 && rNum < 9) {
    console.log("Floyd")
}
else {
    console.log("Hendrix")
}

// "FOR" LOOPS
// Task 1
for (i = 0; i < 7 ; i++) { (n = i + 1)
    console.log(`${n} JavaScript is cool!`)
}

// Task 2
for (i = 0; i < 11; i++) {
    console.log(i)
}

// Task 3
let list = ["hello", "goodbye"]
let a = 0
while(a < 5) {
    for (let item of list) {
        console.log(item)
    }
    a++
}