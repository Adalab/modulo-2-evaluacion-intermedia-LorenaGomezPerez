"use strict";

// Elementos que necesitamos de HTML

const playButton = document.querySelector(".js-button");
const selectNumber = document.querySelector(".js-number");
const textPlay = document.querySelector(".js-play");
const balance = document.querySelector(".js-money-balance");


// Funciones y eventos


    // Números aleatorios
    function getRandomNumber(max) { 
    return Math.ceil(Math.random() * max); 
  } 

    function chooseNumber(){
      const randomNumber = getRandomNumber(6);
      const number = parseInt(selectNumber.value);

   if (number === randomNumber){
      textPlay.innerHTML = "Has ganado el doble de lo apostado";
    } 
    else {textPlay.innerHTML = "Has perdido lo apostado";
    }
   }

   // Función cuando hago "click"

    function handleButton (event){
       event.preventDefault();
       getRandomNumber();
       chooseNumber();
   } 

    playButton.addEventListener("click", handleButton);


 
   

  


