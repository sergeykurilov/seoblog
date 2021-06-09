import {API} from "../config";
import fetch from "isomorphic-fetch"
import cookie from "js-cookie"


export const handleResponse = (response) => {
    if(response.status === 401){
        signout(() => {
            Router.push({
                pathname: "/signin",
                query: {
                    message: "Your session is expired please sign in"
                }
            })
        })
    }else{
        return false
    }
}

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


export const preSignup = (user) => {
    return fetch(`${API}/pre-signup`, {
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



export const forgotPassword = (email) => {
    return fetch(`${API}/forgot-password`, {
        "method": "PUT",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({email})
    })
        .then(res => {
            return res.json()
        })
        .catch(error => console.log(error))
}


export const resetPassword = (resetInfo) => {
    return fetch(`${API}/reset-password`, {
        "method": "PUT",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(resetInfo)
    })
        .then(res => {
            return res.json()
        })
        .catch(err => console.log(err))
}



export const loginWithGoogle = (user) => {
    return fetch(`${API}/google-login`, {
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




