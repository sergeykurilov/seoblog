import React from "react";
import {Layout} from "../../../components/Layout";
import {Admin} from "../../../actions/Admin";
import CreateBlog from "../../../components/crud/Blog";
import {Private} from "../../../actions/Private";
import {AdminLayout} from "../../../components/AdminLayout";

function Blog() {
    return (
        <AdminLayout>
            <Private>
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
            </Private>
        </AdminLayout>
    )
}

export default Blog;
