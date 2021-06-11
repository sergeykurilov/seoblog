import React from "react";
import {Admin} from "../../../actions/Admin";
import CreateBlog from "../../../components/crud/blogWebSocket";
import {AdminLayout} from "../../../components/AdminLayout";

function Blog() {
    return (
        <AdminLayout>
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
        </AdminLayout>
    )
}

export default Blog;
