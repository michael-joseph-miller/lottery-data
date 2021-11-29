import axios from 'axios';

const powerballHistory = async () => {
  let data = await axios
    .get('https://data.ny.gov/resource/d6yy-54nr.json?$limit=4000')
    .then((response) => response.data)
    .catch((error) => console.log(error));
  return data;
};

export { powerballHistory };
