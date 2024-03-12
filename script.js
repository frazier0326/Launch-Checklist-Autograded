// Write your JavaScript code here!

const { pickPlanet, addDestinationInfo } = require("./scriptHelper");

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

let list = this.document.getElementById("faultyItems");
let form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        let pilot = document.getElementById("input[name=pilotName]");
        let copilot = document.getElementById("input[name=copilotName]");
        let fuelLevel = document.getElementById("input[name=fuelLevel]");
        let cargoLevel = document.getElementById("input[name=cargoMass]");
        formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel)
    });

// event.preventDefault();