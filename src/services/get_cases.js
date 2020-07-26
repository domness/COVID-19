import axios from 'axios';

const getCases = async () => {
  const response = await axios({
    method: 'GET',
    url: 'https://c19downloads.azureedge.net/downloads/json/coronavirus-cases_latest.json',
  })
  return response.data;
}

export default getCases;
