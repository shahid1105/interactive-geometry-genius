// Get to the card element
const card = document.getElementById('bg-change-first-card');
changeBg(card);
const card2 = document.getElementById('bg-change-second-card');
changeBg(card2)
const card3 = document.getElementById('bg-change-third-card');
changeBg(card3)
const card4 = document.getElementById('bg-change-fourth-card');
changeBg(card4)
const card5 = document.getElementById('bg-change-fifth-card');
changeBg(card5)
const card6 = document.getElementById('bg-change-sixth-card');
changeBg(card6)

function changeBg(card){
    // Add a mouseover event listener to the card element
card.addEventListener('mouseover', () => {
    // generate random bg color
    const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;

    // Set the background color of the card
    card.style.backgroundColor = randomColor;
});
}



