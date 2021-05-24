import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import {Layout} from '../../components/Layout';
import {useState, useEffect} from 'react';
import {getAllCategories, getOneCategory} from '../../actions/category';
import {API, DOMAIN, APP_NAME} from '../../config';
import renderHTML from 'react-render-html';
import moment from 'moment';


const Category = ({category}) => {
    console.log(category)
   return <>
        <Layout>
            <main>
                <div className="container-fluid text-center">
                    <header className="col-md-12 pt-3">
                        <h1 className="display-4 font-weight-bold">Categories</h1>
                        <h1 className="display-4 font-weight-bold">{category.slug}</h1>
                    </header>
                </div>
            </main>
        </Layout>
    </>
}


Category.getInitialProps = ({query}) => {
    return getOneCategory(query.slug).then((data) => {
        if(data.error){
            console.log(data.error)
        }else{
            return {category: data}
        }
    })
}

export default Category
