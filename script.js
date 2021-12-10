'use strict'

const frage = [];

const input = document.getElementById('input-box');
const btn = document.getElementById('input-btn');

btn.addEventListener('click', addTodo);
holeBtn.addEventListener('click', fillArrayFromLocalStorage);

/**
 * Push user input to array.
 * Clear input-field
 * Write frage array into localStorage
 */
function addFrage() {
    frage.push(input.value); // Push element into array
    input.value = ''; // Clear input-field
    
    localStorage.setItem("unserArray", frage); // Write array into localstorage
}

/**
 * Populate frage Array with information from localStorage
 */
function fillArrayFromLocalStorage() {
    let info = localStorage.getItem("unserArray"); // Get item
    
    const newArray = info.split(','); // Convert into array

    // Fill frage array
    newArray.forEach(element => {
        frage.push(element);
    })
}


    function zufall() {
        return Math.floor(Math.random() * max);
    }

    function Antwort(frage) {

        let antwort = function zufall(5);
        
        console.log(antwort);

        switch (antwort) {
            case '0':
                console.log(frage.concat('','Antwort 0'));
                break;
            case '1':
                console.log(frage.concat('','Antwort 1'))
                break;
            case '2':
                console.log(frage.concat('','Antwort 2'))
                break;
            case '3':
                console.log(frage.concat('','Antwort 3'))
                break;
            case '4':
                console.log(frage.concat('','Antwort 4'))
                break;
            default:
                console.log(`Antwort 5`);
        }
        localStorage.setItem("unserArray", frage); // Write array into localstorage
        console.log("Hast du noch eine Frage?");
    }
}
