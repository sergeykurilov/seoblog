import React from "react";
import {Layout} from "../../../components/Layout";
import {Admin} from "../../../actions/Admin";
import Link from "next/link";
import Category from "../../../components/crud/Category";
import BlogRead from "../../../components/crud/BlogRead";
import {AdminLayout} from "../../../components/AdminLayout";

function Category1() {
    return (
        <Layout>
            <AdminLayout>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 pt-4 pb-4">
                            <h1 className="font-sans md:font-serif">Manage Blogs</h1>
                        </div>
                        <div className="col-md-12">
                            <li className="list-group-item">
                                <BlogRead />
                            </li>
                        </div>
                    </div>
                </div>
            </AdminLayout>
        </Layout>
    )
}

export default Category1
