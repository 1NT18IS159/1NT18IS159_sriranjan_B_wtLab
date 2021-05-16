const btn = document.getElementById("btn");
var str = "";
const fetchJSON = () => {
  fetch(
    "https://www.7timer.info/bin/astro.php?lon=113.2&lat=23.1&ac=0&unit=metric&output=json&tzshift=0"
  )
    .then((result) => result.json())
    .then((parsedjson) => {
      console.log(parsedjson);
      parsedjson.dataseries.forEach((ele) => {
        str += ` <h4> Cloud Cover: ${ele.cloudcover} ;  Time Point: ${ele.timepoint}</h4> `;
        document.getElementById("output").innerHTML = str;
      });
    })
    .catch((e) => console.log(e));
};

btn.addEventListener("click", fetchJSON);
