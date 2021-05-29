import React from "react";
import {Layout} from "../../../components/Layout";
import {Admin} from "../../../actions/Admin";
import BlogUpdate from "../../../components/crud/BlogUpdate";

function Blog() {
    return (
        <Layout>
            <Admin>
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
            </Admin>
        </Layout>
    )
}

export default Blog;
