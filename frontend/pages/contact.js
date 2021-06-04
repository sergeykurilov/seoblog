import React from "react"
import {Layout} from "../components/Layout";
import WithoutAuthorEmail from "../components/form/withoutAuthorEmail";
import {PageHeader} from "../components/pagesHeader";

const Contact = () => {

    return (
        <Layout>
            <PageHeader/>
          <div className="container-fluid">
              <div className="row">
                  <div className="col-md-8 offset-md-2 ">
                      {WithoutAuthorEmail()}
                  </div>
              </div>
          </div>
        </Layout>
    )
}

export default Contact
