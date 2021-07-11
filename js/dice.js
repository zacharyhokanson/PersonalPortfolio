


////////////////////////////////////////////VARIABLES////////////////////////////////////////////


//grabs elements from webpage
let submitButton = document.querySelector('.test')
let dieTypeField = document.querySelector('.dieType')
let modifierField = document.querySelector('.modifier')
let counter = document.querySelector('.counter')
let result = document.querySelector('.result')


////////////////////////////////////////////FUNCTIONS////////////////////////////////////////////

function randomNumber(min, max) {  //generates random number in range min-max
    return Math.floor(Math.random() * (max - min) + min + 1 ) //+1 gives the proper range for a die roll
}  




function displayNumber(dieType, roll, total){ //Runs the animated display 
    let start = 0
    

    function counterAnimation() { //Runs the animated display 
    
        if (start < 25) { //controls how many numbers are shown
            start ++
            
            counter.innerText = randomNumber(1, dieType) //displays a valid number that could be rolled
            
            setTimeout(counterAnimation, 65) //reruns counterAnimation after 65 milliseconds

        }else{ 
            counter.innerText = roll //dislpays the final number as the predetermined roll
            result.innerText = total //displays the total value in result
        }
    }

    counterAnimation()

}

function inputCheck(){ //Checks that the input fields are valid


    let dieType = parseInt(document.querySelector('.dieType').value)
    let modifier = parseInt(document.querySelector('.modifier').value) //gets values entered into text boxes


    if (Number.isInteger(modifier) != true) {  //makes sure modifier is and INT
        modifier = 0 //sets modifier to default value
    }

    if (Number.isInteger(dieType)) { //makes sure dieType is an INT

        let roll = randomNumber(1, dieType) 
        let total = roll + modifier
        

        displayNumber(dieType, roll, total)
        console.log(total) //for bug testing

    }else{
        console.log('not a number') // for bug testing
    }

}













////////////////////////////////////////////BUTTON LISTENERS////////////////////////////////////////////
submitButton.addEventListener('click', () => {
    inputCheck()
})


dieTypeField.addEventListener("keyup", () => { // Execute a function when the user releases a key on the keyboard
  
  if (event.keyCode === 13) { // Number 13 is the "Enter" key on the keyboard
    
    event.preventDefault(); // Cancel the default action, if needed
    
    submitButton.click(); // Trigger the button element with a click
  }
})

modifierField.addEventListener("keyup", () => { // Execute a function when the user releases a key on the keyboard
  
    if (event.keyCode === 13) { // Number 13 is the "Enter" key on the keyboard
      
      event.preventDefault(); // Cancel the default action, if needed
      
      submitButton.click(); // Trigger the button element with a click
    }
  })

