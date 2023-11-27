const convertBtn = document.getElementById("convert-btn")
const inputEl = document.getElementById("input-el")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")
const errorEl = document.getElementById("error-el")

const metersToFeet = 3.281
const litersToGallons = 0.264
const kilosToPounds = 2.204

convertBtn.addEventListener("click", function () {
    const value = inputEl.value
    errorEl.textContent = ""
    if (value !== '' && value >= 0 && value !== '0') {
        inputEl.value = ""
        convert(value, metersToFeet, lengthEl, 'meters', 'feet')
        convert(value, litersToGallons, volumeEl, 'liters', 'gallons')
        convert(value, kilosToPounds, massEl, 'kilos', 'pounds')
    } else {
        errorEl.textContent = "Only enter positive numbers"
    }
})

function convert(value, conversionFactor, resultEl, firstUnit, secondUnit) {
    const firstTotal = value * conversionFactor
    const secondTotal = value / conversionFactor
    resultEl.textContent = `${value} ${firstUnit} = ${firstTotal.toFixed(3)} ${secondUnit} | 
                            ${value} ${secondUnit} = ${secondTotal.toFixed(3)} ${firstUnit}`
}