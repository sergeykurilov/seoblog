import {API} from "../config";
import fetch from "isomorphic-fetch"

export const signup = (user) => {
    return fetch(`${API}/signup`, {
        "method": "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user)
    })
        .then(res => {
            return res.json()
        })
        .catch(err => console.log(err))
}