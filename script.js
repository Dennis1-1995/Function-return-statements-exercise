// Checking if a number is big:

function checkNumber(number){
    if (number > 100){
        return true;
    }else{
        return false;
    }
};

console.log(checkNumber(101));
// This function does something.

//=========================================================================

// Bouncer at a club:

function bouncerClub (age, people){
    if(age >=18 && people > 100){
        return "it's too busy now, come back later";
    }else if (age >=18 && people <= 100){
        return "come in";
    }else if(age <18){
        return "this is a club for adults";
    }
};

console.log(bouncerClub(17,99));
// This function does something.

//=========================================================================

// Calculating the average:

function calculateAvarage (numbers){
    return numbers.reduce((a, b) => (a + b)) / numbers.length;
}

console.log(calculateAvarage([10,21,43,14,5]));
// Bonus:
console.log(Math.round(calculateAvarage([10,21,43,14,5])));
// This function is producing something.





