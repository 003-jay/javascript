let hint = document.querySelector(".hint")
let trial = Array.from(document.querySelector(".trials"))
let number = document.getElementById("number")
let input = document.querySelector(".input")
let submit = document.querySelector(".submit")
let restart = document.querySelector(".restart")
let value = document.querySelector(".value")


let options = ["1","2","3","4,","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20"]

let select = ""

select = Number(options[Math.ceil(Math.random() * options.length)])

let trialleft = 3

submit.addEventListener('click',()=>{
    let guess = Number(input.value)


      if (guess == select){
        value.innerHTML = "you won 😉"
        submit.classList.add("remove")
        restart.classList.add("add")
    }
    else if (trialleft <= 1) {
        number.innerHTML = "0"

        value.innerHTML = "you lose!" + " the number is " + select
        submit.classList.add("remove")
        restart.classList.add("add")
    }


    else if (guess == ""){
        value.innerHTML = "input a number 🤥"
    }

    else if (guess >= 21 || guess <= 0 ){
        value.innerHTML = " your input is beyond the range"

    }
    else if (guess < select){
        value.innerHTML = "your number is less than mine 😶"
        trialleft--
        number.innerHTML = trialleft

    }

    else if (guess > select){
        value.innerHTML = "your number is higher than mine 😑"
        trialleft--
        number.innerHTML = trialleft
    }

    

})


restart.addEventListener("click", ()=>{
    value.innerHTML = "Enter a value"

    input.value = ""
    select = Number(options[Math.ceil(Math.random() * options.length) ])
    submit.classList.remove("remove")
    restart.classList.remove("add")

    trialleft = 3
    number.innerHTML = trialleft
})

