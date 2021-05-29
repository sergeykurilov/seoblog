import React from "react";
import {Layout} from "../../../components/Layout";
import {Admin} from "../../../actions/Admin";
import Link from "next/link";
import Category from "../../../components/crud/Category";
import BlogRead from "../../../components/crud/BlogRead";

function Category1() {
    return (
        <Layout>
            <Admin>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 pt-4 pb-4">
                            <h1>Manage Blogs</h1>
                        </div>
                        <div className="col-md-12">
                            <li className="list-group-item">
                                <BlogRead />
                            </li>
                        </div>
                    </div>
                </div>
            </Admin>
        </Layout>
    )
}

export default Category1
