const myinput = document.getElementById('myinput')
const btn = document.querySelector('.btn')
const bar = document.querySelector('.bar')
const strength = document.querySelector('.strength')
const weak = document.querySelector|('.weak')

btn.addEventListener('click',()=>{
    if (myinput.type == 'password') {
        myinput.type = 'text'
    } else {
      myinput.type = 'password'
    }
})


myinput.addEventListener('input',()=>{
    if (myinput.value.length <= 4 ) {
        bar.classList.add('we')
        bar.classList.remove('md')
        bar.classList.remove('mi')
        strength.innerHTML="weak"
        
    }else if(myinput.value.length <= 7){
        bar.classList.add('md')
        bar.classList.remove('we')
        bar.classList.remove('mi')
        strength.innerHTML="fair"

    } else if  (myinput.value.length <=9){
        bar.classList.add('mi')
        bar.classList.remove('md')
        bar.classList.remove('we')
        strength.innerHTML="strong"
    }
})

// myinput.addEventListener('input',()=>{
//     if(myinput.value.lenght <= 4){
//         strength.innerHTML= ('strengt')
    
//     } else  {
//         strength.innerHTML=('weak')
//     }
// })

