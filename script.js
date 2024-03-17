// Write your JavaScript code here!

const { pickPlanet, addDestinationInfo, formSubmission } = require("./scriptHelper");

window.addEventListener("load", function() {

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse;
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);

        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        planet = pickPlanet(listedPlanets);
        addDestinationInfo(document, planet.name, diameter, star, distance, moons, imageUrl)
    })
    
});


 //task 2


//  let launch = document.getElementById("launchStatusCheck");
//  let form2 = document.querySelector("form");
//     form2.addEventListener("submit", function(event) {
//         let launchStatus = document.getElementById("launchStatus")
//         formSubmission(launch);
//     });

let list = document.getElementById("faultyItems");
list.style.visibility = "hidden";
let form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        let pilot = document.querySelector("input[name=pilotName]").value;
        let copilot = document.querySelector("input[name=copilotName]").value;
        let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
        let cargoLevel = document.querySelector("input[name=cargoMass]").value;
        formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel)
    });