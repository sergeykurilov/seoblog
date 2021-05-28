import {API} from "../config";
import fetch from "isomorphic-fetch"
import cookie from "js-cookie"


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


export const signin = (user) => {
    return fetch(`${API}/signin`, {
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


//set cookie
const setCookie = (key, value) => {
    if (process.browser) {
        cookie.set(key, value, {
            expires: 1
        })
    }
}
const removeCookie = (key) => {
    if (process.browser) {
        cookie.remove(key, {
            expires: 1
        });
    }
}
//get cookie

export const getCookie = (key) => {
    if (process.browser) {
       return cookie.get(key);
    }
}



//localstorage

const setLocalStorage = (key,value) => {
    if (process.browser) {
        localStorage.setItem(key, JSON.stringify(value))
    }
}
//signout



const  removeLocalStorage = (key) => {
    if (process.browser) {
        localStorage.removeItem(key)
    }
}
export const signout = next => {
    removeCookie('token');
    removeLocalStorage('user');
    next();

    return fetch(`${API}/signout`, {
        method: 'GET'
    })
        .then(response => {
            console.log('signout success');
        })
        .catch(err => console.log(err));
};

//authenticate user by pass data to localstorage and cookie


export const authenticate = (data, next) => {
    setCookie("token", data.token)
    setLocalStorage("user", data.user)
    next()
}


export const isAuth = () => {
    if (process.browser) {
       const checkedCookie = getCookie("token")
        if(checkedCookie){
            if(localStorage.getItem("user")){
                return JSON.parse(localStorage.getItem("user"))
            }
        }
    } else {
        return false;
    }
}




