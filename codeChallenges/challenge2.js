// // Below are 3 code challenges, increasing in complexity. You are required to complete 1 (of your choice) and encouraged to complete 2. If you are ahead on your schedule and have the time, you can absolutely complete all 3! For each challenge you want to work on, create a new JavaScript file inside this `codeChallenges` directory and choose a name that makes sense.

// After completing your selected challenge(s), create a short video to share with your Slack small group as part of your deliverable for this lesson. In your video, please:
// - Introduce the challenge
// - Demonstrate how to live-code the solution
// - Explain each line of code (this can be done while live-coding or after)
// - Show that the program works as intended by running the code (you should run the code more than once to prove it works for all logic paths)
// - Share a challenge or question you had when you solved it the first time


// Using the following variables:

// ```javascript
// var goodDrivingRecord = true;
// var age = 24;
// ```

// Write a program that evaluates the status of the variables above, and uses logic to print one of three possible messages:
// - If the driving record is good and user is over 25 years old, they should get a discount on the car rental
// - If the user either has a good record or is over 25 years old, they should pay full price
// - If the user is not over 25 and has a bad driving record, they need to have someone else sign for the rental

var goodDrivingRecord = true;
var age = 12; 

if (goodDrivingRecord === true && age >= 25){
    console.log("they should get a discount")
} else if (age >= 25) {
    console.log("pay full price")
} else {
    console.log ("need someone else to sign");
}



// var goodDrivingRecord = false;
// var age = 24; 

// if (goodDrivingRecord === true && age >= 25){
//     console.log("they should get a discount")
// } else if (age >= 25 || goodDrivingRecord === false) {
//     console.log("pay full price")
// } else {  
//     console.log ("need someone else to sign");
// }
