import {API} from "../config";
import fetch from "isomorphic-fetch"

export const userPublicProfile = username => {
    return fetch(`${API}/user/${username}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json'
        }
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const getProfile = (token) => {
    return fetch(`${API}/user/profile`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        },
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
}


export const updateProfile = (user, token) => {


    return fetch(`${API}/user/update`, {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: user
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const update = (user, next) => {
    if(process.browser){
        if(localStorage.getItem('user')){
            let auth = JSON.parse(localStorage.getItem('user'))
            auth = user
            localStorage.setItem('user',JSON.stringify(auth))
            next()
        }
    }
}
