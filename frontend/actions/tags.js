import {API} from "../config";
import fetch from "isomorphic-fetch"
import cookie from "js-cookie"
import {getAllCategories} from "./category";
import {handleResponse} from "./auth";


export const create = (tag, token) => {
    return fetch(`${API}/tag`, {
        "method": "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`

        },
        body: JSON.stringify(tag)
    })
        .then(response => {
            handleResponse(response)
            return response.json()
        })
        .catch(err => console.log(err))
}


export const getAllTags = () => {
    return fetch(`${API}/tags`, {
        "method": "GET",
    })
        .then(res => {
            return res.json()
        })
        .catch(err => console.log(err))
}

export const getSingleTag = (slug) => {
    return fetch(`${API}/tag/${slug}`, {
        "method": "GET",
    })
        .then(res => {
            return res.json()
        })
        .catch(error => console.log(error))
}


export const deleteSingleTag = (slug, token) => {
    return fetch(`${API}/tag/${slug}`, {
        "method": "DELETE",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`

        }
    })
        .then(response => {
            handleResponse(response)
            return response.json()
        })
        .catch(error => console.log(error))
}
