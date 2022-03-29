"use strict";

// Elementos que necesitamos de HTML

const playButton = document.querySelector(".js-button");
const selectNumber = document.querySelector(".js-number");
const textPlay = document.querySelector(".js-play");
const randomNumber = getRandomNumber(6);



    function getRandomNumber(max) { 
    return Math.ceil(Math.random() * max); 
  } 

    function chooseNumber(){
      const number = parseInt(selectNumber.value);


   if (number === randomNumber){
      textPlay.innerHTML = "Has ganado el doble de lo apostado";
    } 
    else {textPlay.innerHTML = "Has perdido lo apostado";
    }
   }

    function handleButton (event){
       event.preventDefault();
       chooseNumber();
   }

    playButton.addEventListener("click", handleButton);
 
   

  


