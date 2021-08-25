import axios from 'axios';

export const GRAB_CAT = 'GRAB_CAT';
export const GOT_CAT = 'GOT_CAT';

export const grabCat = () => (dispatch) => {
  axios
    .get('https://thatcopy.pw/catapi/rest/')
    .then((res) => {
      dispatch(gotCat(res.data.id, res.data.url));
    })
    .catch((err) => {
      alert(`Hey man your axios call didn't work`);
      console.log(err);
    });
};

export const gotCat = (id, url) => {
  return { type: GOT_CAT, payload: { id, url } };
};
