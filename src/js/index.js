import { DOMSelectors } from "./DOM";
import { genres } from "./genre";

const key = "156577b197f89908dd404604e807fba3";


const query = async function () {
    try {
        const response = await fetch(`https://dog.ceo/api/breed/shiba/images/random/10`);
        const data = await response.json();
        console.log(data);
        data.results.forEach((dog)=>{
            DOMSelectors.grid.insertAdjacentHTML("beforeend", `
            <div class="movie-card">
            <div class="movie-card-front">
              <img
                src="https://image.tmdb.org/t/p/w300/r7vmZjiyZw9rpJMQJdXpjgiCOk9.jpg"
                alt=""
                class="poster"
              />
            </div>
            <div class="movie-card-back">
              <h3 class="movie-card-header">The Dark Knight</h3>
              <div class="score-box">
                <p class="user-score">Community Score</p>
                <p class="user-score">8.4</p>
              </div>
    
              <div class="release-box">
                <p class="release-date">Released</p>
                <p class="release-date">2020-06-12</p>
              </div>
    
              <div class="movie-genres">
                <li class="movie-genre">Sci-Fi</li>
                <li class="movie-genre">Fantasy</li>
                <li class="movie-genre">Horror</li>
              </div>
            </div>
          </div>`);
        })
    } catch (error) {
        console.log(error);
        alert("SOMETHING WRONG BOSS")
    }

};
query();