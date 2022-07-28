let square_numbers = 0;
let grid_container = document.querySelector(".drawing-area");
let empty_squares;
let btn_grid = document.querySelector('#btn-grid');

function createGrid () {
    let input_number = prompt("How many squares? 100 max");
    square_numbers = input_number * input_number; // Number of pixels in the square
    let canva_size = input_number * 10; // Determine the size of the canva, with each pixel being 10px squares
    if (input_number <= 100) { // limit the consumption of resources
    grid_container.style.height = canva_size + 'px';
    grid_container.style.width = canva_size + 'px';
    
    let existing_grid = document.querySelectorAll('.empty-square') // Selects and removes all the component of the existing canva
    existing_grid.forEach( element => element.remove());

        for (let i = 0; i < square_numbers; i++) {
            let divs = document.createElement('div'); // Creates a square with the necessary amount of div elements
            grid_container.appendChild(divs);
            divs.setAttribute('class', 'empty-square');
            divs.addEventListener('mouseover', function(){ // Creates a function which will turn the div elements black on mouseover
                divs.setAttribute('id', 'drawing-square');
            });
        }
    } else {
        alert("Please select a number inferior to 100")
    }
}

btn_grid.addEventListener('click', createGrid);