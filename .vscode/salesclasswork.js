let numberI= document.getElementById("numberI")
let numberII = document.getElementById("numberII")
let  add = document.querySelector(".add")
let  minus = document.querySelector(".minus")
let  multiply = document.querySelector(".mul")
let  divide = document.querySelector(".divide")
let bill = document.querySelector(".bill")



 function ad() {
    add.value= Number(numberI.value) + Number( numberII.value)
    
    bill.innerHTML= add.value

 }
function amen() {
    minus.value= numberI.value - numberII.value
    
    bill.innerHTML= minus.value

 }
 function min() {
    multiply.value= numberI.value * numberII.value
    
    bill.innerHTML= multiply.value

 }
 function mill() {
    divide.value= numberI.value /  numberII.value
    
    bill.innerHTML= divide.value

 }



