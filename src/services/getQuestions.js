import axios from 'axios'
const baseUrl = '/api/questions'
const jsonServerUrl = 'http://localhost:3001/questions'



const getAll = () => {
    const request = axios.get(jsonServerUrl)
    return request.then(response => response.data)
}

export default { getAll }