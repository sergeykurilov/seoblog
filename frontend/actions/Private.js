import {useEffect} from "react"
import {isAuth} from "./auth";
import {Router} from "next/router";

export const Private = ({children}) => {
    useEffect(() => {
        if(!isAuth()){
            Router.push("/signin")
        }
    },[])
    return <>
        {children}
    </>
}

