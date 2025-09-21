const car = document.getElementById("car"); // Знаходимо елемент
let img= document.getElementsByTagName("img")
let leftPosition = 0; // Початкова позиція
let thepicturechangesizewidth =0
let thepicturechangesizeheight =0
function moveperson(){
leftPosition += 5;
thepicturechangesizeheight +=10;
thepicturechangesizewidth +=10;
car.style.left = leftPosition + "px";
//img.style.width=thepicturechangesizewidth+"px";
//img.style.height=thepicturechangesizeheight+"px";
requestAnimationFrame(moveperson);
}
requestAnimationFrame(moveperson); 
let admin = 'Maxim'

let userName = prompt('tell me your name')
let userStatus = prompt('tell me your status')

function validateName(name, status){
         if(name !== admin && status !== 'admin'){
                  alert('ти не адмін Максим 😦')
         }else{
                  alert('вітаю, Максим')
         }
}

validateName(userName,userStatus) 