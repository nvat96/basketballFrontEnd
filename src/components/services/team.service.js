import httpClient from "../../http-common";

const getAll = () =>{
    return httpClient.get('/team');
}
const create = (data) =>{
    return httpClient.post('/team',data);
}
const get = (name) =>{
    return httpClient.get(`/team/${name}`);
}
const update = (name, data) =>{
    return httpClient.put(`/team/${name}`, data);
}
const remove = (name) =>{
    return httpClient.delete(`/team/${name}`);
}

const teamService = { getAll, create, get, update, remove }
export default teamService