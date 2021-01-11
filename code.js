 
 var mony1=110;
  var mony= $("#text");
var imageArray = [
       "img/7cor.png",
       "img/9.jpg",
       "img/8trfl.png",
       "img/AS.jpg",
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
var ammount1= document.getElementById("ammount1")
var text=document.getElementById("text")
var Withdraw=document.getElementById("Withdraw")
Withdraw.addEventListener("click",function(){
      mony.text(mony1-=(ammount1.value-""))

})

const image = document.querySelector("img");
var button2 = document.querySelector("#button2");
var button1 = document.querySelector("#button1");
 window.onload = () => generateRandomPicture(imageArray);
button2.addEventListener("click", () => generateRandomPicture(imageArray));

button1.addEventListener("click", () => generateRandomPicture(imageArray));
 var randomNum=0
function generateRandomPicture(array){
  
  var randomNum = Math.floor(Math.random() * array.length); 
   image.setAttribute("src", array[randomNum]);
 var i=0
  while (mony1!==0 && i<array.length){
  
  if(i===Math.floor(randomNum/2)){
    mony1=mony1+40
mony.text(mony1)
    //text.innerHTML=mony1+40
    alert ("you guess");
  }
  else{
    mony1=mony1-5
    mony.text(mony1)
    //text.innerHTML=mony1-10
    return ("repeat again")
  }
i++
  }
   alert("your don't have enough money")
}

var ammount = document.getElementById("ammount")

var text=document.getElementById("text")
var Diposit=document.getElementById("Diposit")
Diposit.addEventListener("click",function(){
  console.log('ammount',typeof ammount.value )
      mony.text(mony1 += (ammount.value-"") )

})

function validate(){typeof
  console.log('here')
  var username=document.getElementById("username");
  var password=document.getElementById("password");
  if(username.value==="admin" && password.value === 'User'){
    // alert("login succesfully");
    location.href = "jocker.html"
  }else{
    alert("username or password wrong")
    
      }
}

   

   
    
    
  