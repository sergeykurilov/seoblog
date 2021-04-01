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
