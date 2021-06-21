import React from "react"
import {Layout} from "../components/Layout";
import {PageHeader} from "../components/pagesHeader";
import {SigupForm} from "../components/SignupForm";

const Signup = () => {
    return (
        <Layout>
            <PageHeader/>
            <div className="container">
                <SigupForm/>
            </div>
        </Layout>
    )
}

export default Signup
