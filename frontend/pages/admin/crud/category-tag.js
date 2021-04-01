import React from "react";
import {Layout} from "../../../components/Layout";
import {Admin} from "../../../actions/Admin";
import Link from "next/link";
import Category from "../../../components/crud/Category";
import Tag from "../../../components/crud/Tag";

function CategoryTag() {
    return (
        <Layout>
            <Admin>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 pt-4 pb-4">
                            <h1>Manage Tags and Categories</h1>
                        </div>
                        <div className="col-md-6">
                            <ul className="list-group">
                                <li className="list-group-item">
                                   <Category/>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-6">
                            <li className="list-group-item">
                                <Tag/>
                            </li>
                        </div>
                    </div>

                </div>
            </Admin>
        </Layout>
    )
}

export default CategoryTag