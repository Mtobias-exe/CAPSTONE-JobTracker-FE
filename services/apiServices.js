import axios from 'axios';

export const ACTIONS = {
    create: 'create',
    read: 'read',
    update: 'update',
    delete: 'delete', 
}

export default async function serviceCall(action, formData, id) {
    const url = 'http://localhost:3001/api/jobtracker';

    switch (action){
        case ACTIONS.create:
            return createJob(url, formData);
        case ACTIONS.read:
            return readJob(url);
        case ACTIONS.update:
            return updateJob(url, id, formData);
        case ACTIONS.delete:
            return deleteJob(url, id); 
    }
}

async function readJob(url) {
    try {
       let res = await axios.get(url);
       return res.data; 
    } catch (err) {
       console.error(err);
    }
}

async function createJob(url, formData) {
    try {
        const res = await axios.post(url, formData);
        return res.data;
    } catch (err) {
        console.error(err);  
    }
}

async function updateJob(url, id, formData) {
    try {
        let res = await axios.put(`${url}/${id}` , formData);
        return res.data;
    } catch (err) {
        console.error(err);  
    }
}

async function deleteJob(url, id) {
    try {
        let res = await axios.delete(`${url}/${id}`);
        return res.data;
    } catch (err) {
        console.error(err);  
    }
}
