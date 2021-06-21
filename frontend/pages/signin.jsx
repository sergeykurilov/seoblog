import React from "react"
import {Layout} from "../components/Layout";
import {NavLink} from "reactstrap";
import Link from "next/link";
import {withRouter} from "next/router";
import {SiginForm} from "../components/SigninForm";
import {SigupForm} from "../components/SignupForm";
import {PageHeader} from "../components/pagesHeader";

const Signin = ({router}) => {
    const ShowRedirectMessage = () => {
        if (router.query.message) {
            return <div className="alert alert-danger">
                {router.query.message}
            </div>
        }
    }
    return (
        <Layout>
            <PageHeader/>
            <div className="container">
                <div className="col-md-6 offset-md-3">
                    {ShowRedirectMessage()}
                </div>
                <SiginForm/>
            </div>
        </Layout>
    )
}


export default withRouter(Signin)
