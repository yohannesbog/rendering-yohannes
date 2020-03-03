
function renderPokerHand(pokerHand) {
    // HINT: You can use <img /> tags that point to the card images in the /cards folder
    return `
  ${pokerHand.map(yon).join('')}
    `
}

function yon(yon) {
    return     `
    <img  class="poker-img" src=cards/${yon.value}${yon.suit}.png >
    `
}
function pokerHand() {
    var content = document.getElementById('content');

    var pokerHandAbstraction = [
        {
            value: "K",
            suit: "C"
        },
        {
            value: "K",
            suit: "D"
        },
        {
            value: "9",
            suit: "s"
        },
        {
            value: "2",
            suit: "H"
        },
        {
            value: "9",
            suit: "H"
        },
    ];

    content.innerHTML = renderPokerHand(pokerHandAbstraction);

}