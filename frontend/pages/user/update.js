import {Layout} from "../../components/Layout";
import {Private} from "../../actions/Private";
import ProfileUpdate from "../../components/auth/ProfileUpdate";
import {AdminLayout} from "../../components/AdminLayout";

function UserUpdate() {
    return(
        <AdminLayout>
            <Private>
                <div className="container-fluid">
                    <div className="row">
                        <ProfileUpdate/>
                    </div>
                </div>
            </Private>
        </AdminLayout>
    )
}

export default UserUpdate
