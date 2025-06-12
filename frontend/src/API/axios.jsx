import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://reservation-website-kappa.vercel.app/'
});

export default instance;
