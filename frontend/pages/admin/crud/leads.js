import React from "react";
import {Admin} from "../../../actions/Admin";
import {AdminLayout} from "../../../components/AdminLayout";
import Leads from "../../../components/crud/Leads";

function LeadsPage() {
    return (
        <AdminLayout>
            <Admin>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 pt-4 pb-4">
                            <h1>Manage Leads</h1>
                        </div>
                        <div className="col-md-12">
                            <li className="list-group-item">
                                <Leads/>
                            </li>
                        </div>
                    </div>

                </div>
            </Admin>
        </AdminLayout>
    )
}

export default LeadsPage;
