// Question: 58

// Calculate the sum of all scores

function averageScore(...scores: number[]): number {
    
// Calculate the average score

let total = scores.reduce((sum, score) => sum + score, 0);
    return total / scores.length;
}
// Example
console.log(averageScore(84, 92, 88, 75, 93) );

// Question 59

// make a function

function createAdder(specialNumber: number) {

    return function(number: number) {
        return number + specialNumber;
    };
}

// Question: 60

 // The user's details are kept inside
let userProfile = (function() {
    // The user's details are kept inside
    let name = "Urooj";
    let age = 25;

    // This part shares the user's details
    return {
        displayInfo: function() {
            console.log(`Name: ${name}, Age: ${age}`);
        }
    };
})();

// It says the user's name and age
userProfile.displayInfo(); 
   