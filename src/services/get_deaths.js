import axios from 'axios';

const getDeaths = async () => {
  const response = await axios({
    method: 'GET',
    url: 'https://c19downloads.azureedge.net/downloads/json/coronavirus-deaths_latest.json',
  })
  return response.data;
}

export default getDeaths;
