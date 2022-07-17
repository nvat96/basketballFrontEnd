import httpClient from "../../http-common";

const getAll = () =>{
    return httpClient.get('/agent');
}

const create = (data) =>{
    return httpClient.post('/agent' , data);
}

const get = (id )=>{
    return httpClient.get(`/agent/${id}`);
}

const update = (id, data) => {
    return httpClient.put(`/agent/${id}`,data);
}

const remove = (id )=> {
    return httpClient.delete(`/agent/${id}`)
}

const agentService = { getAll , create , get , update , remove};
export default agentService ;