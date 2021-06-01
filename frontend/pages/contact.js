import React from "react"
import {Layout} from "../components/Layout";
import WithoutAuthorEmail from "../components/form/withoutAuthorEmail";

const Contact = (props) => {
    console.log(props)
    return (
        <Layout>
          <div className="container-fluid">
              <div className="row">
                  <div className="col-md-8 offset-md-2 ">
                      <h2>Contact form</h2>
                      <hr/>
                      {WithoutAuthorEmail()}
                  </div>
              </div>
          </div>
        </Layout>
    )
}

export default Contact
