import {Layout} from "../components/Layout";
import {NavLink} from "reactstrap";
import Link from "next/link";

function HomePage() {
    return <Layout>
        <div className="container">
            Welcome to Next.js!
        </div>
    </Layout>
}

export default HomePage