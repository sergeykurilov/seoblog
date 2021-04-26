import React from "react"
import { Layout } from "../components/Layout";
import { NavLink } from "reactstrap";
import Link from "next/link";
import { SiginForm } from "../components/SigninForm";
import { SigupForm } from "../components/SignupForm";

const Signin = () => {

    return (
        <Layout>
            <div className="container">
                <h2 className={"text-center pt-4 pb-4"}>Singin</h2>
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <SiginForm />
                    </div>
                </div>
            </div>
        </Layout>
    )
}



export default Signin