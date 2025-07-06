

const randomcolour=function(){
    let code='#'
    for(let i=0;i<6;i++){
    let hex=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
    code += hex[Math.floor(Math.random() * 16)]
    }
    return code
}

const colorchange= function(){
    const body= document.querySelector('body')
    body.style.backgroundColor= randomcolour()
}
const startchangecolour=function(){
    if(!interval){
        interval= setInterval(colorchange,1000)
        console.log('started')
    } 
}

const stopchangecolour= function(){
    clearInterval(interval)
    interval=null
    console.log('stopped')
}

const start = document.getElementById('start')
const stopp = document.getElementById('stop')
let interval
start.addEventListener('click',startchangecolour)

stopp.addEventListener('click',stopchangecolour)
