var imageArray = [
            "img/AS.jpg",
       "img/7cor.png",
       "img/9.jpg",
       "img/8trfl.png",
       "img/10_carreau.gif",
       "img/asCa.jpg",
       "img/J.jpg",
       "img/King.png",
       "img/JTR.png",
       "img/jock.jpg",
       "img/j9alb.jpg",
       "img/quenn.jpg",
       "img/AStr.jpg",
       "img/4C.png",
       "img/4p.png",
       "img/7C.jpg",
       "img/7P.jpg",
       "img/10H.png",
       "img/10p.jpg",
       "img/jk.jpg",
       "img/Qc.jpg",
       "img/qC.png",
       "img/kp.png"
  
];

const image = document.querySelector("img");
var button2 = document.querySelector("#button2");
var button1 = document.querySelector("#button1");

window.onload = () => generateRandomPicture(imageArray);

button2.addEventListener("click", () => generateRandomPicture(imageArray));
button1.addEventListener("click", () => generateRandomPicture(imageArray));
function generateRandomPicture(array){
	
  var randomNum = Math.floor(Math.random() * array.length); 
   image.setAttribute("src", array[randomNum]);
 
  for (var i = 0; i <imageArray.length; i++) {
  
  if(i===randomNum){
    alert ("you guess")
  }else if(i!==randomNum){
     return ("try again you can guess")
  
  }
   
}
}

function validate(){
  console.log('here')
  var username=document.getElementById("username");
  var password=document.getElementById("password");
  if(username.value==="admin" && password.value === 'User'){
    // alert("login succesfully");
    location.href = "jocker.html"
  }else{
    alert("login failed")
    
      }
}