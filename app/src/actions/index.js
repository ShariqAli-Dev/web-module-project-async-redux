import axios from 'axios';

export const GRAB_AXOLOTL = 'GRAB_AXOLOTL';

export const grabAxolotl = () => (dispatch) => {
  axios
    .get('https://axoltlapi.herokuapp.com/')
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      alert(`Hey man your axios call didn't work`);
      console.log(err);
      debugger;
    });
};
