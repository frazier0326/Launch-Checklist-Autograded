// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    /*
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: ${name}</li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">
    */
 }
 
 function validateInput(testInput) {
    if (testInput === "") {
        return "Empty";
    }else if (isNaN(testInput)) {
        return "Not a Number";
    } else if (!isNaN(testInput)) {
    return "Is a Number";
    }
 }
 
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {

    //change innerHTML?
    if (validateInput(pilot) === "Empty") {
        alert("Input must be valid")
    }
    if (validateInput(copilot) === "Is a Number") {
        alert("Input must be valid")
    }
    if (validateInput(fuelLevel) < 10000) {
        alert("Fuel level too low for launch")
    }
    if (validateInput(cargoLevel) > 10000) {
        alert("Cargo mass low enough for launch")
    }
 }
 
 async function myFetch() {

    // fetch("https://handlers.education.launchcode.org/static/weather.json").then( function(response) {
    //     // Access the JSON in the response
    //     response.json().then( function(json) {
    //     console.log(json);
    //     });
     let planetsReturned;


    //  console.log(JSON.stringify(planetsReturned, null,2))
 
     planetsReturned = await fetch().then( function(response) {
         });
 
     return planetsReturned;
     
 }
 
 function pickPlanet(planets) {
// get random number
// return planets[randomNumber];
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;