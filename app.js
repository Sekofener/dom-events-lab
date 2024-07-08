/*-------------------------------- Constants --------------------------------*/
const buttons = document.querySelectorAll('.button');
const calculator = document.querySelector('#calculator');



/*-------------------------------- Variables --------------------------------*/
// 



/*------------------------ Cached Element References ------------------------*/



/*----------------------------- Event Listeners -----------------------------*/
buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    if (e.target.innerText === '') {
      string = eval('string');
      display.value = string
    }
    

    // This log is for testing purposes to verify we're getting the correct value
    console.log(event.target.innerText);
    // Future logic to capture the button's value would go here...
  });
});


/*-------------------------------- Functions --------------------------------*/
