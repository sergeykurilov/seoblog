import {useEffect} from "react"
import {isAuth} from "./auth";
import {Router} from "next/router";

export const Private = ({children}) => {
    useEffect(() => {
        if(!isAuth() && isAuth().role === 0){
            Router.push("/signin")
        }
    },[])
    return <>
        {children}
    </>
}

