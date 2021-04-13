import {API} from "../config";
import fetch from "isomorphic-fetch"
import cookie from "js-cookie"


export const createBlog = (blog, token) => {
    return fetch(`${API}/blog`, {
        "method": "POST",
        headers: {
            "Accept": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: blog
    })
        .then(res => {
            return res.json()
        })
        .catch(err => console.log(err))
}

