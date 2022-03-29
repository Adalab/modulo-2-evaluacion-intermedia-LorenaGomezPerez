"use strict";

// Elementos que necesitamos de HTML

const playButton = document.querySelector(".js-button");
const selectNumber = document.querySelector(".js-number");
const textPlay = document.querySelector(".js-play");
const randomNumber = getRandomNumber(6);
const balance = document.querySelector(".js-money-balance");


// Funciones y eventos


    // Números aleatorios
    function getRandomNumber(max) { 
    return Math.ceil(Math.random() * max); 
  } 

    function chooseNumber(){
      const number = parseInt(selectNumber.value);


      // Condicional


   if (number === randomNumber){
      textPlay.innerHTML = "Has ganado el doble de lo apostado";
    } 
    else {textPlay.innerHTML = "Has perdido lo apostado";
    }
   }

   // Función cuando hago "click"

    function handleButton (event){
       event.preventDefault();
       chooseNumber();
   }

    playButton.addEventListener("click", handleButton);

    // Cambiar saldo (soy incapaz de hacer el Bonus)

    function balanceChange (balance){
        return balance;

    if (number === randomNumber){
            balance.innerHTML = "saldo $(amount*2)";
        }



    } 


 
   

  


