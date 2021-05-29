import {API} from "../config";
import fetch from "isomorphic-fetch"
import cookie from "js-cookie"
import queryString from "querystring";
import {handleResponse, isAuth} from "./auth";

export const emailContactForm = (data) => {
    let emailEndpoint;
    if (data.authorEmail) {
        emailEndpoint = `${API}/contact-blog-author`
    } else {
        emailEndpoint = `${API}/contact`
    }

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
