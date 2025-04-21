//? create a variable and assign it a numberica; value

let number = 5; 

//? Implement conditional logic to check the number

//?if (number > 0) {
 //?   console.log('Positive')
//?} else if (number < 0) {
//?    console.log('Negative')
//?}else {
 //?   console.log('Zero')
//?}

//? Problem 2 Grading system


//? creating a variable score and assign a numerical value (0-100)

let score = 85

let grade;
if (score >= 90 && score <= 100) {
    console.log('A')
} else if (score >= 80 && score < 90) {
    console.log('B')
} else if (score >= 70 && score < 80) {
    console.log('C')
} else if (score >= 60 && score < 70) {
    console.log('D')
} else if (score >= 0 && score < 60) {
   console.log('F')
} else {
    grade = 'Invalid score (must be between 0 and 100)';
}


//? creating variable age and assign a numnber

let age = 46
let SCD;
if (age >= 65) {
    console.log('Senior Citezen Discount.')
} else if (age <= 65) {
    console.log('Not eligible for senior citizen discount.')
} else {
    age = 'Null'
}


//? creating a variable time and assign number 
let hour = 14;

if (hour >=5 && hour <12) {
    console.log('Good Morning.');
} else if (hour >= 12 && hour <17) {
    console.log('Good Afternoon');
} else if (hour >=17 && hour <21) {
    console.log('Good Evening');
} else {
    console.log('Good night.');
}

//? creating a variable price and assign number

let Age = 70

if (Age <12) {
    console.log('Price is $5.');
} else if (Age >=12 && Age <=64) {
    console.log('Price is $12');
} else (Age >= 65) 
    console.log('Price is $8');


    //? creating body mass index

    let weightkg = 70;
    let height = 1.75;
    let bmi =(weightkg/height*height)

    if (bmi <18.5) {
        console.log('Underweight.');
    } else if (bmi <25) {
        console.log('Normal Weight');
    } else if (bmi <30) {
        console.log('Overweight');
} else {
    console.log('Obese');
}