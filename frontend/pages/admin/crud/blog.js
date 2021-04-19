import React from "react";
import {Layout} from "../../../components/Layout";
import {Admin} from "../../../actions/Admin";
import Link from "next/link";
import Category from "../../../components/crud/Category";
import CreateBlog from "../../../components/crud/Blog";

function Category1() {
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
                                <CreateBlog/>
                            </li>
                        </div>
                    </div>

                </div>
            </Admin>
        </Layout>
    )
}

export default Category1