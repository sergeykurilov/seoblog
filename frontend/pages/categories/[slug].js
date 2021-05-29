import React from 'react';
import {Layout} from '../../components/Layout';
import {getOneCategory} from '../../actions/category';
import Card from "../../components/Blog/Card/Card";


const Category = (props) => {
    return <>
        <Layout>
            <main>
                <div className="container-fluid text-center">
                    <header className="col-md-12 pt-3">
                        <h1 className="display-4 font-weight-bold">Categories</h1>
                        <span className="display-4 font-weight-bold">{props.category.slug}</span>
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


Category.getInitialProps = ({query}) => {
    return getOneCategory(query.slug).then((data) => {
        if (data.error) {
            console.log(data.error)
        } else {
            return {category: data.category, blogs: data.blogs}
        }
    })
}

export default Category
