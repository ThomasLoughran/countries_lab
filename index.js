const getCountryByName = async (countryName) => {
    const url = 'https://restcountries.com/v3.1/name/' + countryName;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data[0]);
    

}

getCountryByName('Brazil');