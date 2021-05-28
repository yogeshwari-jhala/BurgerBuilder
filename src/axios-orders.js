import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burgerbuilder-b74a2-default-rtdb.firebaseio.com/'
    
});
export default instance;