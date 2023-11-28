const getCountryByName = async (countryName) => {
    // get country from api
    const url = 'https://restcountries.com/v3.1/name/' + countryName;
    const response = await fetch(url);
    const data = await response.json();
    const country = data[0];

    // pass country information into a div and display it
    const countryContainer = document.createElement('div');

    const nameContainer = document.createElement('div');
    nameContainer.innerText = 'Name: ' + country.name.common;
    countryContainer.appendChild(nameContainer);

    const capitalContainer = document.createElement('div');
    capitalContainer.innerText = 'Capital(s): ' + country.capital;
    countryContainer.appendChild(capitalContainer);

    const languagesContainer = document.createElement('div');
    languagesContainer.innerText = 'Language(s): ' + Object.values(country.languages);
    countryContainer.appendChild(languagesContainer);

    const populationContainer = document.createElement('div');
    populationContainer.innerText = 'population: ' + country.population;
    countryContainer.appendChild(populationContainer);

    document.querySelector('#foundCountry').appendChild(countryContainer);
}

getCountryByName('Spain');