const list = async (signal) => {
    try {
        let response = await fetch('/api/contacts/', {
            method: 'GET',
            signal: signal,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('jwt')
            }
        });
        return await response.json();
    } catch (err) {
        console.log(err);
    }
};

const read = async (params, credentials, signal) => {
    try {
        let response = await fetch('/api/contacts/' + params.contactId, {
            method: 'GET',
            signal: signal,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + credentials.t
            }
        });
        return await response.json();
    } catch (err) {
        console.log(err);
    }
};

const create = async (contact) => {
    try {
        let response = await fetch('/api/contacts/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(contact)
        });
        return await response.json();
    } catch (err) {
        console.log(err);
    }
};

const update = async (params, contact) => {
    try {
        let response = await fetch('/api/contacts/' + params.contactId, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('jwt')
            },
            body: JSON.stringify(contact)
        });
        return await response.json();
    } catch (err) {
        console.log(err);
    }
};

const remove = async (params) => {
    try {
        let response = await fetch('/api/contacts/' + params.contactId, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('jwt')
            }
        });
        return await response.json();
    } catch (err) {
        console.log(err);
    }
};

const listByUser = async (params, signal) => {
    try {
        let response = await fetch('/api/contacts/by/' + params.userId, {
            method: 'GET',
            signal: signal,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('jwt')
            }
        });
        return await response.json();
    } catch (err) {
        console.log(err);
    }
};

export { create, list, read, update, remove, listByUser };
