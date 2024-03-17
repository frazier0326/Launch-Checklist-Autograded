// Write your helper functions here!

require('cross-fetch/polyfill');


function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    let missionTarget = document.getElementById("missionTarget");

    missionTarget.innerHTML = `
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: ${name}</li>
                     <li>Diameter:${diameter}</li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: ${distance}</li>
                     <li>Number of Moons:${moons} </li>
                 </ol>
                 <img src="${imageUrl}">`
    
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
    let fuel = document.getElementById("fuelStatus");
    let cargo = document.getElementById("cargoStatus");
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let launchStatus = document.getElementById("launchStatus");
    if (validateInput(pilotStatus) === "Empty" || validateInput(copilotStatus) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty") {
        alert("Input must be valid")
    }
    else if (validateInput(copilotStatus) === "Is a Number" || validateInput(pilotStatus) === "Is a Number" || validateInput(fuelLevel) !== "Is a Number" || validateInput(cargoLevel) !== "Is a Number") {
        alert("Input must be valid")
    } else {
        list.style.visibility = "visible";
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
        copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
        fuel.innerHTML = "Fuel level high enough for launch";
        cargo.innerHTML = "Cargo mass low enough for launch";
        launchStatus.innerHTML = "Shuttle is Ready for Launch";
        launchStatus.style.color = "green";

    }
    if (fuelLevel < 10000) {
        fuel.innerHTML = "Fuel level too low for launch";
        // cargo.innerHTML = "Cargo mass low enough for launch";
        // list.style.visibility = "visible";
        launchStatus.style.color = 'red';
        launchStatus.innerHTML = "Shuttle Not Ready for Launch";
    } 
    if(cargoLevel > 10000) {
        // list.style.visibility = "visible";
    //    fuel.innerHTML = "Fuel level high enough for launch";
       cargo.innerHTML = "Cargo mass too heavy for launch";
       launchStatus.style.color = 'red';
        launchStatus.innerHTML = "Shuttle Not Ready for Launch";
    }
    // else if (cargoLevel > 10000 && fuelLevel > 10000) {
    //     list.style.visibility = "visible";
    //     launchStatus.style.color = 'red';
    //     launchStatus.innerHTML = "Shuttle Not Ready for Launch";
    //     fuel.innerHTML = "Fuel level too low for launch";
    //     cargo.innerHTML = "Cargo mass too heavy for launch"
    // }
    // else if (cargoLevel < 10000 && fuelLevel > 10000) {
    //     list.style.visibility = "visible";
    //     fuel.innerHTML = "Fuel level high enough for launch";
    //     cargo.innerHTML = "Cargo mass low enough for launch";
    //     launchStatus.innerHTML = "Shuttle is Ready for Launch";
    //     launchStatus.style.color = "green";
    // }
 }
 
 async function myFetch() {

    // fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
        // Access the JSON in the response
        // response.json().then( function(json) {
        //     response.json().then( function(json) {
        //         });
        // });
     let planetsReturned ;
    //  console.log(JSON.stringify(planetsReturned, null,2))
     planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
            return response.json();
         });
     return planetsReturned;
 }
 
 function pickPlanet(planets) {
// get random number
// return planets[randomNumber];
    let randomNumber = Math.floor(Math.random()*planets.length);
    return planets[randomNumber];
 }

 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;