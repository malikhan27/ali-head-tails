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
    if(name1.length>=3 && name2.length>=3){
      if(name1!==name2){
      for(i=0;i<name1.length && i<name2.length;i++){
        if(name1[i]===" " || name2[i]===" "){

          document.getElementById("first").classList.add("d-none")
          document.getElementById("second").classList.remove("d-none")
          Swal.fire({
            title: "Sorry! USER"  , 
          text: "Your Name Can't Contain Space" ,
          icon: "error"
          })
          break
        } 
        else{
          document.getElementById("first").classList.remove("d-none")
          document.getElementById("second").classList.add("d-none")
          document.getElementById("fifth").innerHTML=`<h2 style="color:navy">${name1} to call</h2>`

        }
      }
       
      }
      else{
        document.getElementById("first").classList.add("d-none")
        document.getElementById("second").classList.remove("d-none")
        Swal.fire({
          title: "Sorry! USER"  , 
        text: "Both Names Can't Be Same" ,
        icon: "error"})

      }
     
    }
    else{
      document.getElementById("first").classList.add("d-none")
      document.getElementById("second").classList.remove("d-none")
      Swal.fire({
        title: "Sorry! USER"  , 
      text: "Your Name Should Atleast Have 3 Charachters" ,
      icon: "error"
      })}
 } else{
  document.getElementById("first").classList.add("d-none")
  document.getElementById("second").classList.remove("d-none")
  Swal.fire({
    title: "Sorry! USER"  , 
  text: "please fill and submit the fileds to participate" ,
  icon: "error"
  })
 }
  
}

   


function coinhead(){ 
  coinvalue="heads"
  document.getElementById("user-message").innerHTML=`<span style="color:black;">${coinvalue} is the call from ${name1}</span> <br>
  <span style="color:black;">tails is for ${name2}</span>`
}
function cointail(){
   coinvalue="tails"
  document.getElementById("user-message").innerHTML=`<span style="color:black;">${coinvalue} is the call from ${name1}</span>
  <br><span style="color:black;">heads is for ${name2}</span>`

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
   

function player1(){
  Swal.fire
  ({
    title: "Congratulations! "+name1 , 
    text: "its " + coinvalue +" You Won" ,
    icon: "success"
  });
}

function player2(){
  coinarr=["head","tail"]
  randomvalue
  Swal.fire({
  title: "Congratulations! " + name2 , 
  text: "its "+ coinarr[randomvalue]+" You Won" ,
  icon: "success"
  });
}




function tossthecoin(){ 
  toss()
  coinarr=["heads","tails"]
  randomvalue= Math.floor(Math.random()*2)
  if(coinarr[randomvalue]===coinvalue){
    setTimeout(player1,1200)
   }
    else{
    setTimeout(player2,1200)

    }
setTimeout(stillimage,1500)
    
}









