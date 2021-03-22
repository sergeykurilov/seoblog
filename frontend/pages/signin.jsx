import React from "react"
import {Layout} from "../Components/Layout";
import {NavLink} from "reactstrap";
import Link from "next/link";
import {SiginForm} from "../Components/SigninForm";
import {SigupForm} from "../Components/SignupForm";

const Signin = () => {
//commentsnjnjnj asdasd
    return (
        <Layout>
            <div className="container">
                <h2 className={"text-center pt-4 pb-4"}>Singin</h2>
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <SiginForm/>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Signin