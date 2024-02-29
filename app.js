"use strict"

document.addEventListener('DOMContentLoaded',()=>{
const btns = document.querySelectorAll("button")
    console.log(btns)
    console.log(btns[0].classList)
    console.log(btns[0].classList.item(0))
    btns[0].classList.add("lime")
    btns[0].classList.remove("red")
    btns[0].classList.toggle("blue")

})