let buttons = Array.from(document.getElementsByClassName('btn'))
let display = document.querySelector(".display")

buttons.forEach((item)=>{
    item.addEventListener("click",()=>{
        if(item.innerHTML == "="){
            display.innerHTML=eval(display.innerHTML)
        }

        else if (item.innerHTML=="Del"){
            display.innerHTML=display.innerHTML.slice(0,-1)
        }
        else if (item.innerHTML=="00"){
            display.innerHTML+= "00"
        }
        else if (item.innerHTML== "AC"){
            display.innerHTML=""
        }
        else if ( item.innerHTML=="%"){
            display.innerHTML = display.innerHTML/100
        }
        else{
            display.innerHTML+= item.innerHTML
        }
})
})