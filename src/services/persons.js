import axios from 'axios'

const baseURL='/api/persons'

const getAll = () => {
    return axios.get(baseURL)
}

const create = newObject => {
    return axios.post(baseURL, newObject)
}

const remove = id => {
    return axios.delete(`${baseURL}/${id}`)
}

const update = (id, newObject) => {
    console.log("put: ", id, newObject)
    return axios.put(`${baseURL}/${id}`, newObject)
}

export default {
    getAll,
    create,
    remove,
    update
}