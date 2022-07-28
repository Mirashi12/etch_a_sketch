let square_numbers = 0;
let grid_container = document.querySelector(".drawing-area");
let empty_squares;

let btn_16 = document.querySelector('#btn-16');
let btn_50 = document.querySelector('#btn-50');

function createGrid () {
    square_numbers = this.square_numbers
    for (let i = 0; i < square_numbers; i++) {
        let divs = document.createElement('div');
        grid_container.appendChild(divs);
        divs.setAttribute('class', 'empty-square');
        divs.addEventListener('mouseover', function(){
            divs.setAttribute('id', 'drawing-square');
        });
    }
}

btn_16.square_numbers = 16 * 16;
btn_16.addEventListener('click', createGrid);

btn_50.square_numbers = 50 * 50;
btn_50.addEventListener('click', createGrid);
