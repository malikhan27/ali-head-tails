var name1 = document.getElementById("username-1")
var name2 = document.getElementById("username-2")
var coinvalue 

function getvalues(){
  name1 = name1.value
  name2 = name2.value
}



function coinhead(){ 
  coinvalue="head"
  document.getElementById("user-message").innerHTML=`<span style="color:black;">You have chosen ${coinvalue} ${name1}</span>`
}
function cointail(){
   coinvalue="tail"
  document.getElementById("user-message").innerHTML=`<span style="color:black;">You have chosen ${coinvalue} ${name1}</span>`

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






