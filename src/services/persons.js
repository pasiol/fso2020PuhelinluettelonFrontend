import axios from 'axios';

const baseURL = '/api/persons';

const getAll = () => axios.get(baseURL);

const create = (newObject) => axios.post(baseURL, newObject);

const remove = (id) => axios.delete(`${baseURL}/${id}`);

const update = (id, newObject) => {
  console.log('put: ', id, newObject);
  return axios.put(`${baseURL}/${id}`, newObject);
};

export default {
  getAll,
  create,
  remove,
  update,
};
