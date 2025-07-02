let random= parseInt(Math.random() * 100 +1)
console.log(random)

const userInput=document.querySelector('#guessField')
const submit=document.querySelector('#subt')
const guessSlot=document.querySelector('.guesses')
const remaining =document.querySelector('.lastResult')
const loworHi =document.querySelector('.lowOrHi')
const startover =document.querySelector('.resultParas')

let p= document.createElement('p')

let prevguess=[]
let numattempts=1

let playgame= true

submit.addEventListener('click',function(e){
    e.preventDefault()
    const userInputVal= parseInt(userInput.value)
    console.log(userInputVal)
    validateguess(userInputVal)

})

function validateguess(guess){
if(isNaN(guess)){
    alert(`Please enter a validate number`)
}
if(guess<1){
    alert(`Please enter a number greater than 1`)
}
if(guess>100){
    alert(`Please enter a number lesser than 100`)
}
else{
  prevguess.push(guess)
  if(numattempts===11){
    displaymessage(`Game Over. The random number was ${random}`)
    endgame()
  }
  else{
    displayguess(guess)
    checkguess(guess)
  }

}
}

function checkguess(guess){
if(guess==random){
    displaymessage(`You guessed right!!`)
    endgame()
}
else if(guess<random){
    displaymessage(`Guess was little low`)
}
else{
    displaymessage(`Guess is too high`)
}
}

function displayguess(guess){
     userInput.value=''
     guessSlot.innerHTML=`${prevguess}`
     numattempts++
    remaining.innerHTML=`${11- numattempts}`
     
    }
function displaymessage(message){
  loworHi.innerHTML=`${message}`
}

function endgame(){
   userInput.value=''
   userInput.setAttribute('disabled','')
   p.classList.add('button')
   p.innerHTML=`<h2 id="newgame">Start new Game. </h2>`
   startover.appendChild(p)
   newgame()

}

function newgame(){
    const newgameButton= document.querySelector('#newgame')
    newgameButton.addEventListener('click',function(e){
        random= parseInt(Math.random() * 100 +1)
        prevguess=[]
        numattempts=1
       guessSlot.innerHTML=''
       loworHi.innerHTML=''
       remaining.innerHTML=`${11- numattempts}`
       userInput.removeAttribute('disabled')
       startover.removeChild(p)
       playgame= true

    })
   
}
