import axios from 'axios';

export const GRAB_AXOLOTL = 'GRAB_AXOLOTL';

export const grabAxolotl = () => (dispatch) => {
  axios
    .get(
      'https://api.openweathermap.org/data/2.5/weather?q=alabama&appid=aa2aefc95ab3fbbaaf699eea4a115eaf'
    )
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      alert(`Hey man your axios call didn't work`);
      console.log(err);
    });
};
