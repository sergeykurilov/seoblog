import React from "react"
import {Layout} from "../Components/Layout";
import {NavLink} from "reactstrap";
import Link from "next/link";

const Signin = () => {
//comments
    return (
        <Layout>
            <Link href="/">
                <NavLink>Home</NavLink>
            </Link>
            Signin
        </Layout>
    )
}

export default Signin