import React from 'react';
import {Layout} from '../../components/Layout';
import Card from "../../components/Blog/Card/Card";
import {getSingleTag} from "../../actions/tags";


const Tags = (props) => {
    console.log(props)
    return <>
        <Layout>
            <main>
                <div className="container-fluid text-center">
                    <header className="col-md-12 pt-3">
                        <h1 className="display-4 font-weight-bold">Tags</h1>
                        <span className="display-4 font-weight-bold">{props.tags.slug}</span>
                        {props.blogs.map((b, i) => (
                            <>
                                <Card key={i} blog={b}/>
                                <hr/>
                            </>
                        ))}
                    </header>
                </div>
            </main>
        </Layout>
    </>
}


Tags.getInitialProps = ({query}) => {
    return getSingleTag(query.slug).then((data) => {
        if (data.error) {
            console.log(data.error)
        } else {
            return {tags: data.tags, blogs: data.blogs}
        }
    })
}

export default Tags
