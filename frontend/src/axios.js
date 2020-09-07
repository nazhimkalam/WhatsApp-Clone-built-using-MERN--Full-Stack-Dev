import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://whatsapp-mern-stack.herokuapp.com/',
});

export default instance;
