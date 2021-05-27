import {Layout} from "../../components/Layout";
import {Private} from "../../actions/Private";
import ProfileUpdate from "../../components/auth/ProfileUpdate";

function UserUpdate() {
    return(
        <Layout>
            <Private>
                <div className="container-fluid">
                    <div className="row">
                        <ProfileUpdate/>
                    </div>
                </div>
            </Private>
        </Layout>
    )
}

export default UserUpdate
