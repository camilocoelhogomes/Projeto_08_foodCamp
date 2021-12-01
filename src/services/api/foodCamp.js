import axios from 'axios';

// const API = 'https://food-camp-cardapio.herokuapp.com';
const API = 'http://localhost:4000';

const createHeaders = (token) => ({ headers: { Authorization: `Bearer ${token}` } });

const signUpApi = ({
  restaurantName,
  restaurantEmail,
  restaurantPassword,
  restaurantConfirmPassword,
  restaurantImg,
  restaurantUrlName,
  restaurantWppNumber,
}) => axios.post(`${API}/sign-up`, {
  restaurantName,
  restaurantEmail,
  restaurantPassword,
  restaurantConfirmPassword,
  restaurantImg,
  restaurantUrlName,
  restaurantWppNumber,
});

const signInApi = ({
  restaurantEmail,
  restaurantPassword,
}) => axios.post(`${API}/sign-in`, {
  restaurantEmail,
  restaurantPassword,
});

const postCategorie = (
  {
    token,
    categorie,
    restaurantUrl,
  },
) => axios.post(`${API}/${restaurantUrl}/categorie`, {
  categorieName: categorie,
}, createHeaders(token));

const foodCampApi = {
  signUpApi,
  signInApi,
  postCategorie,
};

export default foodCampApi;
