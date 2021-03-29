import {Layout} from "../../Components/Layout";
import {Private} from "../../actions/Private";

 function UserPage() {
    return(
        <Layout>
            <Private>
                <h1>User Page</h1>
            </Private>
        </Layout>
    )
}

export default UserPage