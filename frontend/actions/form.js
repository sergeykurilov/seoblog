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
