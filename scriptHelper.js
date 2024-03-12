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
 
 function formSubmission(document, list, pilotStatus, copilotStatus, fuelLevel, cargoLevel) {
    let fuel = document.getElementByID("fuelStatus");
    let cargo = document.getElementByID("cargoStatus");
    //change innerHTML?
    if (validateInput(pilotStatus) === "Empty" || validateInput(copilotStatus) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty") {
        alert("Input must be valid")
    }
    else if (validateInput(copilotStatus) === "Is a Number" || validateInput(pilotStatus) === "Is a Number" || validateInput(fuelLevel) !== "Is a Number" || validateInput(cargoLevel) !== "Is a Number") {
        alert("Input must be valid")
    } else {
        list.style.visibility = "visible";
        pilotStatus.innerHTML = `Pilot ${pilotName} is ready for launch`;
        copilotStatus.innerHTML = `Co-pilot ${copilotName} is ready for launch`;
        //
        //
    }
    if (validateInput(fuelLevel) < 10000 && cargoLevel < 10000) {
        fuel.innerHTML = "Fuel level too low for launch";
        cargo.innerHTML = "Cargo mass low enough for launch";
        //launchStatus
        //visibility
        //color change

    } 
    else if (validateInput(cargoLevel) > 10000 && fuelLevel < 10000 && cargoLevel > 10000) {
       //similar to above 
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