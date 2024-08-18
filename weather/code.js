
let apiURL = "https://api.openweathermap.org/data/2.5/weather?&appid=1562e118d3a18bf66736e6770b1d2f32&units=metric&q="



const searchbox = document.querySelector(".search input")
const searchbtn = document.querySelector(".search button")
const waethericon = document.querySelector(".weather-icon")



async function checkweather(city) {
    const response = await fetch(apiURL + city)
   
    if(response.status == 404){

        document.querySelector(".error").style.display = "block"
        document.querySelector(".weather1").style.display = "none"

    } else {

   
        const data = await response.json();


    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp ) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    if(data.weather[0].main == "Clouds"){
        weathericon.src = "clouds.png"
    }  
    else if(data.weather[0].main == "Clear"){
        weathericon.src = "clear.png"
    }

    else if(data.weather[0].main == "Rain"){
        weathericon.src = "rain.png"
    }

    else if(data.weather[0].main == "Drizzle"){
        weathericon.src= "drizzle.png"
    }


    else if (data.weather[0].main == "Mist"){
            weathericon.src = "mist.png"
    }
    document.querySelector(".weather1").style.display = "block";
     document.querySelector(".error").style.display = "none"

}
    }

searchbtn.addEventListener("click" , () => {
    checkweather(searchbox.value);
})