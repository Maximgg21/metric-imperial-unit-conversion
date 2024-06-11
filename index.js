const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");
const lengthConversion = document.getElementById("length-conversion");
const volumeCoversion = document.getElementById("volume-conversion");
const massConversion = document.getElementById("mass-conversion");
const changeModeBtn = document.getElementById("change-mode-btn");
const metersToFeet = 3.281;
const litersToGallons = 0.264;
const kilogramsToPounds = 2.204;

numberInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        convertBtn.click();
    }
})

convertBtn.addEventListener("click", function() {
    const number = numberInput.value;
    lengthConversion.textContent = convertUnits("length", number);
    volumeCoversion.textContent = convertUnits("volume", number);
    massConversion.textContent = convertUnits("mass", number);
})

function convertUnits(quanity, number, fixed=3) {
    /*
    1 meter = 3.281 feet
    1 liter = 0.264 gallon
    1 kilogram = 2.204 pound
    */
    if (quanity === "length") {               
        const feet = (number*metersToFeet).toFixed(fixed)
        const meters = (number/metersToFeet).toFixed(fixed)
        return `${number} meters = ${feet} feet | ${number} feet = ${meters} meters`
    } else if (quanity === "volume") {
        const gallons = (number*litersToGallons).toFixed(fixed)
        const liters = (number/litersToGallons).toFixed(fixed)
        return `${number} liters = ${gallons} gallons | ${number} gallons = ${liters} liters`
    } else if (quanity === "mass") {
        const pounds = (number*kilogramsToPounds).toFixed(fixed)
        const kilograms = (number/kilogramsToPounds).toFixed(fixed)
        return `${number} kilos = ${pounds} pounds | ${number} pounds = ${kilograms} kilos`
    }
}

const main = document.getElementById("main-section");
const mainContainer = document.getElementsByClassName("main-container");
const mainContainerHeading = document.getElementsByClassName("main-container-heading");
const body = document.getElementById("body");

let isBright = true;
if ((localStorage.getItem("isBright") && JSON.parse(localStorage.getItem("isBright")) === false) || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    changeModes();
}

changeModeBtn.addEventListener("click", function() {
    changeModes();
})

function changeModes() {
    if (isBright) {
        isBright = false;
        localStorage.setItem("isBright", "false");
        changeModeBtn.style.background = "hsla(215, 28%, 17%, 1)";
        main.style.background = "hsla(215, 28%, 17%, 1)";
        body.style.background = "#121212";
        for (let i = 0; i < mainContainer.length; i++) {
            mainContainer[i].style.background = "hsla(215, 30%, 22%, 1)";
            mainContainer[i].style.color = "white";
            mainContainerHeading[i].style.color = "hsla(250, 100%, 88%, 1)";
        }
    } else {
        isBright = true;
        localStorage.setItem("isBright", "true");
        changeModeBtn.style.background = "white";
        main.style.background = "hsla(0, 0%, 96%, 1)";
        body.style.background = "white";
        for (let i = 0; i < mainContainer.length; i++) {
            mainContainer[i].style.background = "white";
            mainContainer[i].style.color = "hsla(0, 0%, 21%, 1)";
            mainContainerHeading[i].style.color = "hsla(250, 19%, 40%, 1)"
        }
    }
}
