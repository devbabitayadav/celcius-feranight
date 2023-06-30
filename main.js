let celsiusInput = document.querySelector('input')
let fahrenheitInput = document.querySelector('#freinp')
let btn = document.querySelector('button')

function roundNumber(number){
    return Math.round(number*100)/100
}

/* Celcius to Fahrenheit */

celsiusInput.addEventListener('input', function(){
    let cTemp = parseFloat(celsiusInput.value)
    let fTemp = (cTemp*(9/5)) + 32
      fahrenheitInput.value = roundNumber(fTemp)
 
})


btn.addEventListener('click', ()=>{
    celsiusInput.value = ""
    fahrenheitInput.value = ""
})