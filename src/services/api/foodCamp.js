import axios from 'axios';

// const API = 'https://food-camp-cardapio.herokuapp.com';
const API = 'http://localhost:4000';
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

const foodCampApi = {
  signUpApi,
  signInApi,
};

export default foodCampApi;
