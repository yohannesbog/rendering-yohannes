
function renderRestaurants(restaurants) {
    // HINT: You can use <img /> tags that point to these playing card images: 
    // https://commons.wikimedia.org/wiki/Category:SVG_playing_cards
    return `
    ${restaurants.map(rest).join("")}
    `
}
function rest(resttest){
    return `
    <div class="text-center mt-5">

<div class="restaurant">
    <h1 class="name">
     ${resttest.name}
     </h1>
   <span> ${resttest.type}</span></br>
   <span> $$ ${resttest.priceRating}</span>
</div>
</div>
`
}
function restaurants() {
    var content = document.getElementById('content');

    var restaurantsAbstraction = [
        {
            name: "McDonald's",
            type: "Fast Food",
            priceRating: 1
        },
        {
            name: "Gunshow",
            type: "Date Night Dining",
            priceRating: 5
        },
        {
            name: "Iron Age",
            type: "Korean BBQ",
            priceRating: 4
        },
    ];

    content.innerHTML = renderRestaurants(restaurantsAbstraction);

}