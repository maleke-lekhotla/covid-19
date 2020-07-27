import axios from "axios";

const url = "https://covid19.mathdro.id/api";

export const fetchData = async (country) => {
  let changeableURL = url;
  if (country) {
    changeableURL = `${url}/countries/${country}`
  }
  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(changeableURL);
    // console.log(recovered)
    return { confirmed, recovered, deaths, lastUpdate };
  } catch (error) {
    console.log(error)
  }
};

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`); //template string is because we are getting two parts of the url and it is going to come as an array
    // console.log(data)

    const modifiedData = data.map((dailyData) => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate,
    }));
    // console.log(modifiedData)
    return modifiedData;
  } catch (error) {
    console.log(error)
  }
};

export const fetchCountries = async () => {
  try {
    const {data: {countries}} = await axios.get(`${url}/countries`);
    // console.log(countries)
   const mappedCountries =  countries.map((country) => country.name)
    // console.log(mappedCountries)
    return mappedCountries
  } catch (error) {
    console.log(error);
  }
};
