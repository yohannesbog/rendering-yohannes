
function renderNametags(nametags) {
    return `
            ${nametags.map(names).join("")}

        
        
    `
}

function names(names){
    return `
    <div class="name-tags">
    <div class="names">
    <h2 class="hello">Hello, my name is: </h3>
    <h3 class="name-get">
     ${names}
     </h3>
     </div>
     </div>
    `
 
}
function nametags() {
    var content = document.getElementById('content');

    var nametagsAbstraction = [
       "Kamilah",
       "Kim",
       "Stuart",
       "Ron",
       "Krissy"
    ]

    content.innerHTML = renderNametags(nametagsAbstraction);

}