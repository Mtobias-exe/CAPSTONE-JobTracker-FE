const axios = require('axios')

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

