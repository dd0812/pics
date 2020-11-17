import axios from'axios';

export default axios.create({
    baseURL : 'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID ZMuwaIm3QvC1d5l2ic89pA8dmPDtilI5lE8bSizhEsI'
    }
});