 
 var mony1=0;
  var mony= $("#text");
var imageArray = [
        // {name:"kkk",color:"blue",image:"img/download.png"},
        {name:"ASh",color:"red",image:"img/ASh.jpg"},
        {name:"cor",color:"red",image:"img/7cor.png"},
        {name:"tref",color:"black",image:"img/9.jpg"},
        {name:"tr",color:"black",image:"img/8trfl.png"},
        {name:"AS",color:"black",image:"img/AS.jpg"},
        {name:"10_carreau",color:"red",image:"img/10_carreau.jpg"},
        {name:"asCa",color:"red",image:"img/asCa.jpg"},
        {name:"J",color:"black",image:"img/J.jpg"},
        {name:"King",color:"black",image:"img/KT.jpg"},
        {name:"JTR",color:"black",image:"img/JTR.png"},
        {name:"jock",color:"black",image:"img/jock.jpg"},
        {name:"j9alb",color:"red",image:"img/j9alb.jpg"},
        {name:"quenn",color:"red",image:"img/quenn.jpg"},
        {name:"AStr",color:"black",image:"img/AStr.jpg"},
        {name:"4C",color:"red",image:"img/4C.png"},
        {name:"4p",color:"black",image:"img/4p.png"},
        {name:"9C",color:"red",image:"img/9C.jpg"},
        {name:"7C",color:"red",image:"img/7C.jpg"},
        {name:"10H",color:"red",image:"img/10H.png"},
        {name:"10p",color:"black",image:"img/10p.jpg"},
        {name:"jk",color:"red",image:"img/jk.jpg"},
        {name:"Qc",color:"red",image:"img/Qc.jpg"},
        {name:"Qh",color:"red",image:"img/Qh.jpg"},
        {name:"kp",color:"black",image:"img/kp.jpg"},
         {name:"KC",color:"red",image:"img/KC.jpg"},
         {name:"Kh",color:"red",image:"img/Kh.jpg"}
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
 window.onload = () =>generateRandomPicture(imageArray);

button1.addEventListener("click", () => generateRandomPicture(imageArray));
button2.addEventListener("click", () => generateRandomPicture(imageArray));

function generateRandomPicture(array){
  console.log(array[2].image)
  var randomNum = Math.floor(Math.random() * array.length); 
   image.setAttribute("src", array[randomNum].image);
 var i=0 
 // while(i<array.length && mony1!==0){
 //  if (array[randomNum].color!=="red" ){
 //    mony1=mony1-5
 //  mony.text(mony1)
 //  }
  
 // }
 // alert ( "you don't have money")
 

  if(array[randomNum].color==="red"){
    console.log (array[randomNum])
    mony1=mony1+40
mony.text(mony1)
    alert ("you guess "+40+" $");
  }
// if(array[randomNum].color==="black"){
//   // alert ("you guess "+mony1+ " $")
// }
  if(array[randomNum].color!=="red") {
    mony1=mony1-10
    mony.text(mony1)
    
    alert (" you lost repeat again you can win")
  }
if (mony1===0){
   alert("your don't have enough money")
}


// function generateRandomPicture(array){
//   console.log(array[2].image)
//   var randomNum = Math.floor(Math.random() * array.length); 
//    image.setAttribute("src", array[randomNum].image);
//  var i=0 
//   if(array[randomNum].color==="black"){
//     console.log (array[randomNum])
//     mony1=mony1+40
//     mony.text(mony1)
//     alert ("you guess "+30+" $");
//   }
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

   

   
    
    
  