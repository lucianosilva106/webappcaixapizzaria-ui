import axios from 'axios';

const apiFuncionario = axios.create({
    baseURL: 'https://localhost:44331/api/funcionarios'
});

export default apiFuncionario;
