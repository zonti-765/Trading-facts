let buttonIncrease = document.getElementById("increase")
let buttonChange = document.getElementById("change")

let textSize = 16
buttonIncrease.onclick = function(){
         textSize += 2
         document.body.style.fontSize = textSize + 'px'
}

buttonChange.onclick = function(){
         document.body.style.backgroundColor = 'black'
         document.body.style.color = 'white'
} 