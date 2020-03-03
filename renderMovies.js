
function renderMovies(movies) {
   
    return  `
    ${movies.map(test).join('')};
    `
}

function test(new2){
return `
<div class="main-moviebox">
<div class="movie-box">
<img class="movie-img" src="${new2.poster}">
</div>
<div class="movie-description">
<h1>Title: ${new2.title} </h1>
<p> Released: ${new2.year}</p> </span>
<p> ID: ${new2.imdbID}</p>
<p> Rating:${new2.rottenTomatoesRating}</p>
<p> IMBDRating: ${new2.imdbRating}</p>
</div>
</div>
`
}



 function movies() {
    var content = document.getElementById('content');

    var moviesAbstraction = [
        {
            title: "The Dark Knight",
            year: 2008,
            imdbID: "tt0468569",
            poster: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
            imdbRating: 9,
            rottenTomatoesRating: 0.94
        },
        {
            title: "The Dark Knight Rises",
            year: 2012,
            imdbID: "tt1345836",
            poster: "https://m.media-amazon.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_SX300.jpg",
            imdbRating: 8,
            rottenTomatoesRating: 0.82
        },
        {
            title: "The Incredibles",
            year: 2004,
            imdbID: "tt0317705",
            poster: "https://m.media-amazon.com/images/M/MV5BMTY5OTU0OTc2NV5BMl5BanBnXkFtZTcwMzU4MDcyMQ@@._V1_SX300.jpg",
            imdbRating: 9,
            rottenTomatoesRating: 0.91
        }
    ]

    content.innerHTML = renderMovies(moviesAbstraction);

 }

