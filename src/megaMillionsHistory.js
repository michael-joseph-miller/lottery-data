import axios from 'axios';

const megaMillionsHistory = async () => {
  let data = await axios
    .get('https://data.ny.gov/resource/5xaw-6ayf.json?$limit=4000')
    .then((response) => response.data)
    .catch((error) => console.log(error.response.data));
  return data;
};

export { megaMillionsHistory };
