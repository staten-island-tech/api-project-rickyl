import { DOMSelectors } from "./DOM";

const key = "b2e5f5f9-a41f-4466-833d-a09cd17f4fd7";

const query = async function () {
  try {
    const response = await fetch(
      `https://holidayapi.com/v1/holidays?pretty&key=${key}&country=US&year=2020`
    );
    const data = await response.json();
    console.log(data.holidays);
    data.holidays.forEach((holiday) => {
      DOMSelectors.grid.insertAdjacentHTML(
        "beforeend",
        `<div class="holiday-card">
            <div class="holiday-card-front">
              
              <h3 class="holiday-card-header">${holiday.name}</h3>
            </div>
            <div class="holiday-card-back">
              
              <div class="info-box">
              
                <p class="public-info">Holiday for all?</p>
                <p class="public-info">${holiday.public}</p>
              </div>
    
              <div class="date-box">
                <p class="date">Date</p>
                <p class="date">${holiday.date}</p>
                <p class="date">${holiday.weekday.date.name}</p>
              </div>

            </div>
          </div>`
      );
    });
  } catch (error) {
    console.log(error);
    alert("SOMETHING WRONG BOSS");
  }
};
query();

const listen = function () {
  DOMSelectors.searchForm.addEventListener("submit", function (e) {
    e.preventDefault();
    DOMSelectors.grid.innerHTML = "";
    const searchParams = DOMSelectors.searchArea.value;
    const searchQuery = async function () {
      try {
        const response = await fetch(
          `https://holidayapi.com/v1/holidays?pretty&key=${key}&country=US&year=2020&search=${searchParams}`
        );
        const data = await response.json();
        data.holidays.forEach((holiday) => {
          DOMSelectors.grid.insertAdjacentHTML(
            "beforeend",
            `<div class="holiday-card">
            <div class="holiday-card-front">
              
              <h3 class="holiday-card-header">${holiday.name}</h3>
            </div>
            <div class="holiday-card-back">
              
              <div class="info-box">
              
                <p class="public-info">Holiday for all?</p>
                <p class="public-info">${holiday.public}</p>
              </div>
    
              <div class="date-box">
                <p class="date">Date</p>
                <p class="date">${holiday.date}</p>
                <p class="date">${holiday.weekday.date.name}</p>
              </div>

            </div>
          </div>`
          );
        });
      } catch (error) {
        console.log(error);
        alert("SOMETHING WRONG BOSS2");
      }
    };
    searchQuery();
  });
};
listen();
