import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://antoni0o-todo-app-api.herokuapp.com'
})