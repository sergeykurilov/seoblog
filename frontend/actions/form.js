import {API} from "../config";
import fetch from "isomorphic-fetch"

export const emailContactForm = (data) => {
    let emailEndpoint;
    if (data.authorEmail) {
        emailEndpoint = `${API}/contact-blog-author`
    } else {
        emailEndpoint = `${API}/contact`
    }
    console.log(JSON.stringify(emailEndpoint))
    return fetch(`${emailEndpoint}`, {
        method: 'POST',
        headers: {
            "Accept": 'application/json',
            "Content-Type": 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const leadList = () => {

    return fetch(`${API}/get-form-data`, {
        method: 'GET'
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};


export const removeFormData = (id) => {
    return fetch(`${API}remove-form-data`, {
        method: 'DELETE',
        body: id
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};
