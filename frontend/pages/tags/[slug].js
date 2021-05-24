import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import {Layout} from '../../components/Layout';
import {useState, useEffect} from 'react';
import {getAllCategories, getOneCategory} from '../../actions/category';
import {API, DOMAIN, APP_NAME} from '../../config';
import renderHTML from 'react-render-html';
import moment from 'moment';
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
