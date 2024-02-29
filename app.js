"use strict"

document.addEventListener('DOMContentLoaded', () => {
    // Classlist
    const btns = document.querySelectorAll("button")
    console.log(btns)
    console.log(btns[0].classList)
    console.log(btns[0].classList.item(0))
    btns[0].classList.add("lime")
    btns[0].classList.remove("red")
    btns[0].classList.toggle("blue")
    if (btns[0].classList.contains("red")) {
        console.log("There is Red")
    } else {
        console.log("There is no red")
    }

//     Delegirovaniye
//     Delegirovaniyeda dinamichniy qoshilgan elementni ham target qilsa boladi
    const wrapper = document.querySelector(".wrapper")

    wrapper.addEventListener("click", (e) => {
        if (e.target && e.target.tagName === "BUTTON") {
            console.log("Button")
        } else {
            console.log('Wrapper')
        }
    })

    const newBtn = document.createElement("button")
    newBtn.textContent = "new button"
    wrapper.append(newBtn)

})