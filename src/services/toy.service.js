
import Axios from 'axios'
const axios = Axios.create({
    withCredentials: true
});


export const toyService = {
    query,
    getById,
    remove,
    add,
    update,
    addReview
}

async function query(filterBy = {}) {
    const res = await axios.get('http://localhost:3030/api/toy', { params: filterBy })
    return res.data
}

async function getById(toyId) {
    const res = await axios.get(`http://localhost:3030/api/toy/${toyId}`)
    return res.data
}

async function remove(toyId) {
    await axios.delete(`http://localhost:3030/api/toy/${toyId}`)
}

async function add(toy) {
    const res = await axios.post('http://localhost:3030/api/toy', toy)
    return res.data
}
async function update(toy) {
    const res = await axios.put('http://localhost:3030/api/toy', toy)
    return res.data
}
async function addReview(toyId, review) {
    const res = await axios.post('http://localhost:3030/api/toy/review', { toyId, review })
    return res.data
}
