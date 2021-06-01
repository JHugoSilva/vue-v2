/**
 * file:src/services/Api.js
 * data:06/01/21
 * description: arquivo responsável por inicializar o 'axios' e as requisições da url base dos HTTP's
 * author:Hugo Silva
 */

import axios from 'axios';

export default () => axios.create({
    baseURL: 'http://localhost:3000/api',
});