//Get dom elements
const container = document.querySelector('.containerr'); //get container element
const seats =  document.querySelectorAll('.row .seat:not(.occupied');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

let ticketPrice = +movieSelect.value;

function updateSelectedCount(){
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    const selectedSeatsCount =  selectedSeats.length;
    count.innerText =  selectedSeatsCount;
    total.innerText = ticketPrice * selectedSeatsCount;
}
// Event listener for clicking on seats
container.addEventListener('click', e =>{
    if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')){
        e.target.classList.toggle('selected');
        updateSelectedCount();
    };
})
//Event listener for selecting movie
movieSelect.addEventListener('change', e=>{
    ticketPrice = +e.target.value;
    updateSelectedCount();
})