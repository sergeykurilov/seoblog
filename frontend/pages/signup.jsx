import React from "react"
import {Layout} from "../Components/Layout";
import {NavLink} from "reactstrap";
import Link from "next/link";
import {SigupForm} from "../Components/SignupForm";

 const Signup = () => {
    return (
        <Layout>
            <Link href="/">
                <NavLink>Home</NavLink>
            </Link>
            Singup

            <SigupForm/>
        </Layout>
    )
}

export default Signup