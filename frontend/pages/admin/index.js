import {Layout} from "../../components/Layout";
import {Admin} from "../../actions/Admin";

 function AdminPage() {
    return(
        <Layout>
            <Admin>
                <div className="container">
                    <h1>Admin Page</h1>
                </div>
            </Admin>
        </Layout>
    )
}

export default AdminPage