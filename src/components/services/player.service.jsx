import httpClient from "../../http-common";

const getAll = () =>{
    return httpClient.get('/player');
}
const create = (data) =>{
    return httpClient.post('/player',data);
}
const get = (id) =>{
    return httpClient.get(`/player/${id}`);
}
const update = (id, data) =>{
    return httpClient.put(`/player/${id}`, data);
}
const remove = (id) =>{
    return httpClient.delete(`/player/${id}`);
}

const playerService = { getAll, create, get, update, remove }
export default playerService