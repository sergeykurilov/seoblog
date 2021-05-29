import React from "react";
import {Layout} from "../../../components/Layout";
import BlogRead from "../../../components/crud/BlogRead";
import {Private} from "../../../actions/Private";
import {isAuth} from "../../../actions/auth";

function Category1() {
    const username = isAuth() && isAuth().username
    console.log(username)
    return (
        <Layout>
            <Private>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 pt-4 pb-4">
                            <h1>Manage Blogs</h1>
                        </div>
                        <div className="col-md-12">
                            <li className="list-group-item">
                                <BlogRead username={username} />
                            </li>
                        </div>
                    </div>

                </div>
            </Private>
        </Layout>
    )
}

export default Category1
