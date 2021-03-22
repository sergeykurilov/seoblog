import React from "react"
import {Layout} from "../Components/Layout";
import {Navbar, NavLink} from "reactstrap";
import Link from "next/link";
import {SigupForm} from "../Components/SignupForm";

const Signup = () => {
    return (
        <Layout>
            <div className="container">
                <h2 className={"text-center pt-4 pb-4"}>Singup</h2>
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <SigupForm/>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Signup