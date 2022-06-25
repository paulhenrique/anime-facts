import axios from 'axios';

export const animeApi = axios.create({
  baseURL: 'https://anime-facts-rest-api.herokuapp.com/api/v1'
})

export default animeApi;