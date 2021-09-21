import { httpService } from './http.service.js'

import Axios from 'axios'
const axios = Axios.create({
    withCredentials: true
});
const BASE_URL = (process.env.NODE_ENV == 'production')
    ? '/api/toy'
    : 'http://localhost:3030/api/toy';

export const toyService = {
    query,
    getById,
    remove,
    add,
    update,
    addReview
}

//function query(filterBy) {
//    console.log(filterBy,'filterByfilterByfilterByfilterByfilterByfilterBy');
//    var queryStr = `name=${filterBy.name}&inStock=${filterBy.inStock}&lable=${filterBy.lable}&sort=${filterBy.sort}`
//    //var queryStr = (!filterBy) ? `name=${filterBy.name}` : `?name=${filterBy.name}&sort=anaAref`
//    return httpService.get(`toy${queryStr}`)
//  }

async function query(filterBy = {}) {
    //const res = await axios.get('http://localhost:3030/api/toy', { params: filterBy })
    const res = await axios.get(`${BASE_URL}`, { params: filterBy })
    return res.data
}

async function getById(toyId) {
    const res = await axios.get(`${BASE_URL}/${toyId}`)
    return res.data
}


async function remove(toyId) {
    await axios.delete(`${BASE_URL}/${toyId}`)
}


async function add(toy) {
    const res = await axios.post(`${BASE_URL}`, toy)
    return res.data
}
async function update(toy) {
    const res = await axios.put(`${BASE_URL}`, toy)
    return res.data
}
async function addReview(toyId, review) {
    //const res = await axios.post('http://localhost:3030/api/toy/review', { toyId, review })
    const res = await axios.post(`${BASE_URL}/review`, { toyId, review })
    return res.data
}

//async function query(filterBy = {}) {
//    const res = await axios.get('http://localhost:3030/api/toy', { params: filterBy })
//    return res.data
//}

//async function getById(toyId) {
//    const res = await axios.get(`http://localhost:3030/api/toy/${toyId}`)
//    return res.data
//}

//async function remove(toyId) {
//    await axios.delete(`http://localhost:3030/api/toy/${toyId}`)
//}

//async function add(toy) {
//    const res = await axios.post('http://localhost:3030/api/toy', toy)
//    return res.data
//}
//async function update(toy) {
//    const res = await axios.put('http://localhost:3030/api/toy', toy)
//    return res.data
//}
//async function addReview(toyId, review) {
//    const res = await axios.post('http://localhost:3030/api/toy/review', { toyId, review })
//    return res.data
//}
