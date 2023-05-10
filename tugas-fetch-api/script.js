let genre = document.getElementById("genres")
let listmovie = document.getElementById("listmovies")

// Authorization API the movie
const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZTdjNDk3NjE4ZGFhYzUxNTk2MDRiYTcyYmQ0ZGZmMiIsInN1YiI6IjY0NThkOTA3MWI3MGFlMDBlMmFiZWUxYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zZf4xMmNRzEvnz725ap0EF-uvPfYg6zANNUpJ-VOuXQ'
    }
};
    //Pengambilan API Genre
    fetch('https://api.themoviedb.org/3/genre/movie/list?language=en', options)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        data.genres.forEach(showGenre)
    })

    function showGenre(val,idx){
        genre.innerHTML +=` <div class="d-grid gap-2 col-6 mx-auto mt-4">
                            <button onclick="getGenre(${val.id})" class="btn btn-primary" type="button">${val.name}</button>
                            </div>`
    }

    function getGenre(id){
    //Pengambilan API List Movie
    console.log(id)
    fetch ('https://api.themoviedb.org/3/discover/movie?with_genres='+JSON.stringify(id),options)
    .then(response => response.json())
    .then(data => {
        listmovie.innerHTML = ""
        console.log(data);  
        data.results.forEach(showListMovie)
    })
}
    

    function showListMovie(val,idx){
        listmovie.innerHTML += `<div class="card mb-3 me-4" style="max-width: 540px;">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="https://image.tmdb.org/t/p/original/${val.poster_path}" class="img-fluid rounded-3 mt-2">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${val.original_title}</h5>
              <p class="card-text">User Score : ${val.vote_average}<br>Release Date : ${val.release_date}<br>Sinopsis : <br>${val.overview}</p> 
            </div>
          </div>
        </div>
      </div>`
    }


