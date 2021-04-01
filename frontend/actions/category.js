import {API} from "../config";
import fetch from "isomorphic-fetch"
import cookie from "js-cookie"


export const create = (category, token) => {
    return fetch(`${API}/category`, {
        "method": "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`

        },
        body: JSON.stringify(category)
    })
        .then(res => {
            return res.json()
        })
        .catch(err => console.log(err))
}


export const getAllCategories = () => {
    return fetch(`${API}/categories`, {
        "method": "GET",
    })
        .then(res => {
            return res.json()
        })
        .catch(err => console.log(err))
}

export const getOneCategory = (slug) => {
    return fetch(`${API}/category/${slug}`, {
        "method": "GET",
    })
        .then(res => {
            return res.json()
        })
        .catch(err => console.log(err))
}

export const deleteCategory = (category, token) => {
    return fetch(`${API}/category/${category}`, {
        "method": "DELETE",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`

        },
        body: JSON.stringify(category)
    })
        .then(res => {
            return res.json()
        })
        .catch(err => console.log(err))
}