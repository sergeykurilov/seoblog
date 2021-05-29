import React from "react"
import { Layout } from "../components/Layout";
import { NavLink } from "reactstrap";
import Link from "next/link";
import {withRouter} from "next/router";
import { SiginForm } from "../components/SigninForm";
import { SigupForm } from "../components/SignupForm";

const Signin = ({router}) => {
    const ShowRedirectMessage = () => {
        if(router.query.message){
            return <div className="alert alert-danger">
                {router.query.message}
            </div>
        }
    }
    return (
        <Layout>
            <div className="container">
                <h2 className={"text-center pt-4 pb-4"}>Singin</h2>
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        {ShowRedirectMessage()}
                    </div>
                    <div className="col-md-6 offset-md-3">
                        <SiginForm />
                    </div>
                </div>
            </div>
        </Layout>
    )
}



export default withRouter(Signin)
