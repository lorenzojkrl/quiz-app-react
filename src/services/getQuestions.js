import axios from 'axios'
const baseUrl = '/api/questions'

// Use jsonServerUrl if you intend to run the json server
const jsonServerUrl = 'http://localhost:3001/api/questions'



const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

export default { getAll }