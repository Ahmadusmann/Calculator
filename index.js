let inputBox = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = '';

// Add event listener to each button
buttons.forEach(element => {
    element.addEventListener('click', (b) => {

        //* Get the text of the button that was clicked
        if (b.target.innerText === '=') {
            string = String(eval(string));
            inputBox.value = string;
        }

        //* Add the text of the button to the input box
        else if (b.target.innerText == 'AC') {
            string = '';
            inputBox.value = string;
        }

        //* Add the text of the button to the input box
        else if (b.target.innerText == 'DEL') {
            string = string.substring(0, string.length - 1);
            inputBox.value = string;
        }

        //* Add the text of the button to the input box
        else if (b.target.id == 'plusMinus') {
            string = String(-eqal(string));
            inputBox.value = string;
        }

        //* Add the text of the button to the input box
        else {
            string += b.target.innerText;
            inputBox.value = string;
        }

        //* Update the input box with the new string
    });
});