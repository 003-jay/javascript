const myinput = document.getElementById('myinput')
const copybtn = document.getElementById('copybtn')
const genbtn = document.getElementById('genbtn')

let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let lower = "abcdefghijklmnopqrstuvwxyz"
let number = "0123456789"
let symbol = "\'.,/-|><?_+*&$#@!"

let picker = ""

genbtn.addEventListener('click',()=>{
    picker = upper[Math.floor(Math.random() * upper.length)]
    picker += lower[Math.floor(Math.random() * lower.length)]
    picker += number[Math.floor(Math.random() * number.length)]
    picker += symbol[Math.floor(Math.random() * symbol.length)]

    myinput.value = picker
})

copybtn.addEventListener('click',()=>{
    myinput.select()
    document.execCommand('copy')
})