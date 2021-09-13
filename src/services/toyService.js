
import Axios from 'axios'
const axios = Axios.create({
    withCredentials: true
});


const STORAGE_KEY = 'toy'
export const toyService = {
    query,
    getById,
    remove,
    add,
    update
}




function query(filterBy = {}) {
    return axios.get('http://localhost:3030/api/toy', { params: filterBy }).then(res => res.data)
}

function getById(toyId) {
    return axios.get(`http://localhost:3030/api/toy/${toyId}`).then(res => res.data)
}

function remove(toyId) {
    debugger
    return axios.delete(`http://localhost:3030/api/toy/${toyId}`)
}

function add(toy) {
    return axios.post('http://localhost:3030/api/toy', toy).then(res => res.data)
}
function update(toy) {
    return axios.put('http://localhost:3030/api/toy', toy).then(res => res.data)
}
