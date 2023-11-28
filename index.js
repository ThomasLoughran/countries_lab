const getCountryByName = async (countryName) => {
    // get country from api
    const url = 'https://restcountries.com/v3.1/name/' + countryName;
    const response = await fetch(url);
    const data = await response.json();
    const country = data[0];

    // pass country information into a div and display it
    const countryContainer = document.createElement('div');
    countryContainer.innerText = country.name.common;
    console.log(countryContainer);
    document.querySelector('#foundCountry').appendChild(countryContainer);
}

getCountryByName('Brazil');