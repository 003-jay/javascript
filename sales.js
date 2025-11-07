const phone = document.getElementById('phone')
const qty1 = document.getElementById('qty1')
const price1 = document.getElementById('price1')
const cost1 = document.getElementById('cost1')

// NB:When you want to send a value into an input, use 'inputName.value'
let forPrice1 =()=>{
    if (phone.checked) {
        price1.value = 10000 
    } else {
        price1.value = null
    }
}

let forCost1 =()=>{
    cost1.value = qty1.value * price1.value
}

const pen = document.getElementById('pen')
const qty2 = document.getElementById('qty2')
const price2 = document.getElementById('price2')
const cost2 = document.getElementById('cost2')

let forprice2 =()=>{
    if (pen.checked) {
        price2.value = 2000
    } else {
        price2.value = null
    }
}

let forcost2 =()=>{
    cost2.value = qty2.value * price2.value
}

const car = document.getElementById('car')
const qty3 = document.getElementById('qty3')
const price3 = document.getElementById('price3')
const cost3 = document.getElementById('cost3')

let forprice3 =()=>{
    if (car.checked){
        price3.value =40000000
    } else {
        price3.value= null
    }
}
let forcost3=()=>{
    cost3.value=qty3.value * price3.value
}


 let me = document.getElementById('me')

 function calculate() {
    me.value= Number(cost1.value) +Number( cost2.value) + Number(cost3.value)
    
    me.innerHTML= me.value

 }




