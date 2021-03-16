var updateCityDropDown = document.querySelector('#city-type')
updateCityDropDown.addEventListener('change', newImage)

// 2.) extract input from page and convert to lowercase
function newImage (event) {
    event.preventDefault() // prevents both sending data to server and page reload
    var city = document.querySelector('#city-type')
    var cityName = city.value.toLowerCase();
    var body = document.querySelector('body')
        body.classList.remove('nyc','sf','sydney','la','austin')

    // 3.) Use JS if statement to compare user input to a city name (I'd probably use a case statement here)
    if (cityName == 'nyc' ||
    cityName == 'new york city') {
        // clear any previous className added to the classList
        body.classList.add('nyc') // change to the nyc.jpg background
    } else if (cityName == 'la' ||
    cityName == 'los angeles') {
        console.log(cityName)
        // clear any previous className added to the classList
        body.classList.add('la') // change to the la.jpg background
    } else if (cityName == 'sf' ||
    cityName == 'san francisco') {
        console.log(cityName)
        body.classList.add('sf') // change to the sf.jpg background
    } else if (cityName == 'austin') {      
// clear any previous className added to the body.classList ---   body.className = ''; 
        body.classList.add('austin') // change to the austin.jpg background
    } else if (cityName == 'sydney') {
        body.classList.add('sydney') //// change to the sydney.jpg background
    } else {
        // if not a city in the list of images give an alert to the user (a dropdown list of city backgrounds might be better than an input box here)
        body.className = '';
        alert(`The city you selected doesn't have a background image associated wth instanceof. Please select another!`)
    }
} 