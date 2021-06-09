import Head from 'next/head';
import Link from 'next/link';
import {withRouter} from 'next/router';
import {Layout} from '../../components/Layout';
import React, {useState} from 'react';
import {listBlogsWithCategoriesAndTags} from '../../actions/blog';
import Card, {BlogCard} from '../../components/Blog/Card/Card';
import {API, DOMAIN, APP_NAME, FB_APP_ID} from '../../config';
import Search from "../../components/Blog/Search";
import {PageHeader} from "../../components/pagesHeader";
import MailIcon from "@heroicons/react/outline/MailIcon";

const Blogs = ({blogs, categories, tags, totalBlogs, blogsLimit, blogSkip, router}) => {
        const head = () => (
            <Head>
                <title>Programming blogs | {APP_NAME}</title>
                <meta
                    name="description"
                    content="Programming blogs and tutorials on react node next vue php laravel and web developoment"
                />
                <link rel="canonical" href={`${DOMAIN}${router.pathname}`}/>
                <meta property="og:title" content={`Latest web developoment tutorials | ${APP_NAME}`}/>
                <meta
                    property="og:description"
                    content="Programming blogs and tutorials on react node next vue php laravel and web developoment"
                />
                <meta property="og:type" content="webiste"/>
                <meta property="og:url" content={`${DOMAIN}${router.pathname}`}/>
                <meta property="og:site_name" content={`${APP_NAME}`}/>

                <meta property="og:image" content={`${DOMAIN}/static/images/seoblog.jpg`}/>
                <meta property="og:image:secure_url" content={`${DOMAIN}/static/images/seoblog.jpg`}/>
                <meta property="og:image:type" content="image/jpg"/>
                <meta property="fb:app_id" content={`${FB_APP_ID}`}/>
            </Head>
        );

        const [limit, setLimit] = useState(blogsLimit);
        const [skip, setSkip] = useState(0);
        const [size, setSize] = useState(totalBlogs);
        const [loadedBlogs, setLoadedBlogs] = useState([]);

        const loadMore = () => {
            let toSkip = skip + limit;
            listBlogsWithCategoriesAndTags(toSkip, limit).then(data => {
                if (data.error) {
                    console.log(data.error);
                } else {
                    setLoadedBlogs([...loadedBlogs, ...data.blogs]);
                    setSize(data.size);
                    setSkip(toSkip);
                }
            });
        };

        const loadMoreButton = () => {
            return (
                size > 0 &&
                size >= limit && (
                    <button
                        onClick={loadMore}
                        type="button"
                        className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Load more
                        <MailIcon className="ml-3 -mr-1 h-5 w-5" aria-hidden="true" />
                    </button>
                )
            );
        };

        const showAllBlogs = () => {

            return blogs.map((blog, i) => {
                console.log(blog)
                return (
                    <div className="max-w-7xl mx-auto bg-red">
                        <div key={i} className="flex flex-wrap -mx-6 overflow-hidden sm:-mx-8 md:-mx-8 lg:-mx-6 xl:-mx-5">
                            <BlogCard blog={blog}/>
                            <hr/>
                        </div>
                    </div>
                );
            });
        };

        const showAllCategories = () => {

            return categories.map((c, i) => {
                console.log(c.slug)
                return <Link href={`/categories/${c.slug}`} key={i}>
                    <a className="btn btn-primary mr-1 ml-1 mt-3">{c.name}</a>
                </Link>
            });
        };

        const showAllTags = () => {
            return tags.map((t, i) => (
                <Link href={`/tags/${t.slug}`} key={i}>
                    <a className="btn btn-outline-primary mr-1 ml-1 mt-3">{t.name}</a>
                </Link>
            ));
        };

        const showLoadedBlogs = () => {
            return loadedBlogs.map((blog, i) => (
                <div className="max-w-7xl mx-auto bg-red">
                    <div key={i} className="flex flex-wrap -mx-6 overflow-hidden sm:-mx-8 md:-mx-8 lg:-mx-6 xl:-mx-5">
                        <BlogCard blog={blog}/>
                        <hr/>
                    </div>
                </div>
            ));
        };

        return (
            <>
                {head()}
                <Layout>
                    <PageHeader/>
                    <div className="max-w-7xl mx-auto bg-red">
                        <main>
                            <div className="container-fluid">
                                <header>
                                    <div className="col-md-12 pt-3">
                                        <h1 className="display-4 font-weight-bold text-center">
                                            Company Blog
                                        </h1>
                                    </div>
                                    {/*<section>*/}
                                    {/*    <div className="pb-5 text-center">*/}
                                    {/*        {showAllCategories()}*/}
                                    {/*        <br/>*/}
                                    {/*        {showAllTags()}*/}
                                    {/*    </div>*/}
                                    {/*</section>*/}
                                </header>
                            </div>
                            {showAllBlogs()}
                            {showLoadedBlogs()}
                            <div className="text-center pt-5 pb-5">{loadMoreButton()}</div>
                        </main>
                    </div>
                </Layout>
            </>
        );
    }
;

Blogs.getInitialProps = () => {
    let skip = 0;
    let limit = 2;
    return listBlogsWithCategoriesAndTags(skip, limit).then(data => {
        if (data.error) {
            console.log(data.error);
        } else {
            return {
                blogs: data.blogs,
                blogsLimit: limit,
                blogSkip: skip
            };
        }
    });
};

export default withRouter(Blogs);
