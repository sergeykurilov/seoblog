import React from "react";
import {Layout} from "../../../components/Layout";
import {Admin} from "../../../actions/Admin";
import Link from "next/link";
import Category from "../../../components/crud/Category";
import BlogUpdate from "../../../components/crud/BlogUpdate";
import {Private} from "../../../actions/Private";

function Blog() {
    return (
        <Layout>
            <Private>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 pt-4 pb-4">
                            <h1>Manage Blog</h1>
                        </div>
                        <div className="col-md-12">
                            <li className="list-group-item">
                                <BlogUpdate/>
                            </li>
                        </div>
                    </div>

                </div>
            </Private>
        </Layout>
    )
}

export default Blog;
