const canvas = document.querySelector('canvas')
const body = document.querySelector('body')
let color = 0
let x = 0
let checked = false

window.addEventListener('mousemove',(e)=>{
move(e)
})
window.addEventListener('touchmove',(e)=>{
    move(e)
    })

window.addEventListener('mousedown',()=>{
    checked = true
})
window.addEventListener('mouseup',()=>{
    checked = false
})
window.addEventListener('touchstart',()=>{
    checked = true
})
window.addEventListener('touchend',()=>{
    checked = false
})

window.addEventListener('touc')


function move(e){
    if(checked == true){
        const newtictac = document.createElement('div')
        newtictac.classList.add('tictac')
        newtictac.setAttribute('style', `position : absolute; top : ${e.y}px; left: ${e.x}px; border : 2px solid hsl(${color},100%,50%)`)
        body.append(newtictac)
        color++
    }
}