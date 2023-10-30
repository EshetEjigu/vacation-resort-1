"use strict"

window.onload = function (event) {
    constreservationForm = document.getElementById("reservation-form")
    reservation-Form.onsubmit = handleReservation

}
function handleReservation (event) {
    event.preventDefault()

    const name = event.target.elements.name.value
    const email = event.target.elements.email.value
    const checkInDate = event.target.elements["check-in-date"].valueAsDate
    const duration = event.target.elements.duration.valueAsNumber

    const kingRoomRadio = event.target.elements["room-type"] [0].checked
    const queenRoomRadio = event.target.elements["room-type"] [1].checked
    const suitRoomRadio = event.target.elements["room-type"] [2].checked
    

    let roomRate = 0
    if (kingRoomChecked) {
        roomRate = 250
    } else if (queenRoomSelected) {
        roomRate = 250
    } else if (suitRoomSelected) {
        roomRate = 350
    }

    const noDiscout = document.getElementById("no-discount").checked
    const militaryDiscount = document.getElementById("military-discount").checked
    const seniorDiscount = document.getElementById("senior-discount").checked

    let appliedDiscount =0 
    if (militryDiscountChecked){
        appliedDiscount = 0.2
    } else if (seniorDiscountChecked) {
        appliedDiscount = 0.1
    }
    
    const total = duration * roomRate * (1-)
}


const taxRate = 0.12
const subtotal = duration *roomRate * appliedDiscount
const total  = subtotal - (subtotal * taxRate)

const resultDiv = document.getElementById("result")
resultDiv.innerHTML = "$" + total.toFixed(2)


// console.dir(event.target.element["room-type"])