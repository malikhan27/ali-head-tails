var name1 = "admin"
var name2 = "admin"
var coinvalue ="xyz"

function getvalues(){
  name1 = document.getElementById("username-1")
  name2 = document.getElementById("username-2")
  name1=name1.value
  name2=name2.value
}


function divrevive(){
  if(name1!=="" && name2!=="" && name1!==undefined){
    
    document.getElementById("first").classList.remove("d-none")
    document.getElementById("second").classList.add("d-none")
    
 }
  else{
    Swal.fire({
      title: "Sorry! USER"  , 
    text: "please fill and submit the fileds to participate" ,
    icon: "error"
    })
    

}
}

   


function coinhead(){ 
  coinvalue="head"
  document.getElementById("user-message").innerHTML=`<span style="color:black;">You have chosen ${coinvalue} ${name1}</span>`
}
function cointail(){
   coinvalue="tail"
  document.getElementById("user-message").innerHTML=`<span style="color:black;">You have chosen ${coinvalue} ${name1}</span>`

}

function buttonrevive(){
  if(coinvalue!=="xyz"||coinvalue!=="xyz"){
    document.getElementById("third").classList.remove("d-none")
  }
  
}

function stillimage(){

  document.getElementById("image").src="assets/still-pic.png"
  
}

function toss(){
  document.getElementById("image").src="assets/giphy.gif"
}
   

function tossthecoin(){ 
  toss()
  var coinarr=["head","tail"]
  var randomvalue= Math.floor(Math.random()*2)
  if(coinarr[randomvalue]===coinvalue){
    Swal.fire({
      title: "Congratulations! "+name1 , 
      text: "its "+coinvalue+" You Won" ,
      icon: "success"
    });}
    else{
      Swal.fire({
        title: "Congratulations! " +name2 , 
      text: "its "+coinarr[randomvalue]+" You Won" ,
      icon: "success"
      });
    }
setTimeout(stillimage,2000)
    
}







