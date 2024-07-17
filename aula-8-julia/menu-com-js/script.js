 document.querySelector("#menu-opener").addEventListener('click',() =>{
   if(document.querySelector("#menu-area").style.width == "0px"){
      document.querySelector("#menu-area").style.width = "200px"
  }
 else{
   document.querySelector("#menu-area").style.width = "0px"
   }
  })


