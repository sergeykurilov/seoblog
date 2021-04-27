import {useEffect} from "react"
import {isAuth} from "./auth";
import Router from "next/router";

export const Admin = ({children}) => {


    useEffect(() => {
        if(!isAuth()){
            Router.push("/signin")
        } else if(isAuth().role !== 1){
            Router.push(`/`)
        }
    },[])
    return <>
        {children}
    </>
}