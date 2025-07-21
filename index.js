let inputBox = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = '';

//* Adjust the font size of the inputBox
function adjustFontSize(value) {
    const length = value.length;
    if (length > 12) {
        inputBox.style.fontSize = '20px';
    } else if (length > 9) {
        inputBox.style.fontSize = '28px';
    } else {
        inputBox.style.fontSize = '40px';
    }
};

//* Add event listener to each button
buttons.forEach(element => {
    element.addEventListener('click', (b) => {

        //* Get the text of the button that was clicked
        if (b.target.innerText === '=') {
            string = String(eval(string));
            inputBox.value = string;
             adjustFontSize(string);
        }

        //* Add the text of the button to the input box
        else if (b.target.innerText == 'AC') {
            string = '';
            inputBox.value = string;
             adjustFontSize(string);
        }

        //* Add the text of the button to the input box
        else if (b.target.innerText == 'DEL') {
            string = string.substring(0, string.length - 1);
            inputBox.value = string;
             adjustFontSize(string);
        }

        //* Add the text of the button to the input box
        else if (b.target.id == 'plusMinus') {
            string = String(-eval(string));
            inputBox.value = string;
             adjustFontSize(string);
        }

        //* Add the text of the button to the input box
        else {
            string += b.target.innerText;
            inputBox.value = string;
             adjustFontSize(string);
        }

        //* Update the input box with the new string
    });
});
