import axios from 'axios';

export const GRAB_CAT = 'GRAB_CAT';
export const GOT_CAT = 'GOT_CAT';

export const grabCat = () => (dispatch) => {
  axios
    .get('https://thatcopy.pw/catapi/rest/')
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      alert(`Hey man your axios call didn't work`);
      console.log(err);
    });
};

export const gotCat = (id, url) => {
  console.log({ id, url });
  return { type: GOT_CAT, id, url };
};
