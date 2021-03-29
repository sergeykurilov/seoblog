import {Layout} from "../../Components/Layout";
import {Private} from "../../actions/Private";
import {Admin} from "../../actions/Admin";

 function UserPage() {
    return(
        <Layout>
            <Private>
                <div className="container">
                    <h1>User Page</h1>
                </div>
            </Private>
        </Layout>
    )
}

export default UserPage