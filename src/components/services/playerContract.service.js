import httpClient from "../../http-common"

const getAll = () => {
    return httpClient.get('/playerContract');
}

const get = (id) => {
    return httpClient.get(`/playerContract/${id}`);
}

const create = (data) => {
    return httpClient.post(`/playerContract`, data);
}

const update = (id, data) => {
    return httpClient.put(`/playerContract/${id}`, data);
}

const remove = (id) => {
    return httpClient.delete(`/playerContract/${id}`);
}

const playerContractService = {getAll, get, create, update, remove};
export default playerContractService;
