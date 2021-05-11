import { DOMSelectors } from "./DOM";
import { genres } from "./genre";

const key = "b2e5f5f9-a41f-4466-833d-a09cd17f4fd7";


const query = async function () {
    try {
        const response = await fetch(`https://holidayapi.com/v1/holidays?pretty&key=b2e5f5f9-a41f-4466-833d-a09cd17f4fd7&country=US&year=2020`);
        const data = await response.json();
        console.log(data);
        data.holidays.forEach((holiday)=>{
            DOMSelectors.grid.insertAdjacentHTML("beforeend", `
            <div class="movie-card">
            <div class="movie-card-front">
              <img
                src="https://image.tmdb.org/t/p/w300/r7vmZjiyZw9rpJMQJdXpjgiCOk9.jpg"
                alt=""
                class="poster"
              />
              <h3 class="movie-card-header">${holiday.name}</h3>
            </div>
            <div class="movie-card-back">
              
              <div class="score-box">
                <p class="user-score">Public Holiday</p>
                <p class="user-score">${holiday.public}</p>
              </div>
    
              <div class="release-box">
                <p class="release-date">Date</p>
                <p class="release-date">${holiday.date}</p>
                <p class="release-date">${holiday.weekday.date.name}</p>
              </div>

            </div>
          </div>`);
        })
    } catch (error) {
        console.log(error);
        alert("SOMETHING WRONG BOSS");
    }

};
query();