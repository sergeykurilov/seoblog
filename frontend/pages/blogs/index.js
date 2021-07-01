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
                        <MailIcon className="ml-3 -mr-1 h-5 w-5" aria-hidden="true"/>
                    </button>
                )
            );
        };

        const showAllBlogs = () => {
            return blogs.map((blog, i) => {
                return (
                    <>
                        <div key={i} className="mt-6">
                            <BlogCard blog={blog}/>
                        </div>
                    </>
                );
            });
        };

        const showAllCategories = () => {

            return categories.map((c, i) => {
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
                    <div className="overflow-x-hidden bg-gray-100">
                        <div className="px-6 py-8">
                            <div className="container flex justify-between mx-auto">
                                <div className="w-full lg:w-8/12">
                                    <div className="flex items-center justify-between">
                                        <h1 className="text-xl font-bold text-gray-700 md:text-2xl">Company Blog</h1>
                                        <div>
                                            <select
                                                className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                                                <option>Latest</option>
                                                <option>Last Week</option>
                                            </select>
                                        </div>
                                    </div>
                                    {showAllBlogs()}
                                    {showLoadedBlogs()}
                                    <div>{loadMoreButton()}</div>
                                    <div className="mt-8">
                                        <div className="flex">
                                            <a href="#"
                                               className="px-3 py-2 mx-1 font-medium text-gray-500 bg-white rounded-md cursor-not-allowed">
                                                previous
                                            </a>

                                            <a href="#"
                                               className="px-3 py-2 mx-1 font-medium text-gray-700 bg-white rounded-md hover:bg-blue-500 hover:text-black">
                                                1
                                            </a>

                                            <a href="#"
                                               className="px-3 py-2 mx-1 font-medium text-gray-700 bg-white rounded-md hover:bg-blue-500 hover:text-black">
                                                2
                                            </a>

                                            <a href="#"
                                               className="px-3 py-2 mx-1 font-medium text-gray-700 bg-white rounded-md hover:bg-blue-500 hover:text-black">
                                                3
                                            </a>

                                            <a href="#"
                                               className="px-3 py-2 mx-1 font-medium text-gray-700 bg-white rounded-md hover:bg-blue-500 hover:text-black">
                                                Next
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="hidden w-4/12 -mx-8 lg:block">
                                    <div className="px-8">
                                        <h1 className="mb-4 text-xl font-bold text-gray-700">Authors</h1>
                                        <div
                                            className="flex flex-col max-w-sm px-6 py-4 mx-auto bg-white rounded-lg shadow-md">
                                            <ul className="-mx-4">
                                                <li className="flex items-center"><img
                                                    src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=731&amp;q=80"
                                                    alt="avatar" className="object-cover w-10 h-10 mx-4 rounded-full"/>
                                                    <p><a href="#"
                                                          className="mx-1 font-bold text-gray-700 hover:underline">Alex
                                                        John</a><span
                                                        className="text-sm font-light text-gray-700">Created 23 Posts</span>
                                                    </p>
                                                </li>
                                                <li className="flex items-center mt-6"><img
                                                    src="https://images.unsplash.com/photo-1464863979621-258859e62245?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=333&amp;q=80"
                                                    alt="avatar" className="object-cover w-10 h-10 mx-4 rounded-full"/>
                                                    <p><a href="#"
                                                          className="mx-1 font-bold text-gray-700 hover:underline">Jane
                                                        Doe</a><span
                                                        className="text-sm font-light text-gray-700">Created 52 Posts</span>
                                                    </p>
                                                </li>
                                                <li className="flex items-center mt-6"><img
                                                    src="https://images.unsplash.com/photo-1531251445707-1f000e1e87d0?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=281&amp;q=80"
                                                    alt="avatar" className="object-cover w-10 h-10 mx-4 rounded-full"/>
                                                    <p><a href="#"
                                                          className="mx-1 font-bold text-gray-700 hover:underline">Lisa
                                                        Way</a><span
                                                        className="text-sm font-light text-gray-700">Created 73 Posts</span>
                                                    </p>
                                                </li>
                                                <li className="flex items-center mt-6"><img
                                                    src="https://images.unsplash.com/photo-1500757810556-5d600d9b737d?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=735&amp;q=80"
                                                    alt="avatar" className="object-cover w-10 h-10 mx-4 rounded-full"/>
                                                    <p><a href="#"
                                                          className="mx-1 font-bold text-gray-700 hover:underline">Steve
                                                        Matt</a><span
                                                        className="text-sm font-light text-gray-700">Created 245 Posts</span>
                                                    </p>
                                                </li>
                                                <li className="flex items-center mt-6"><img
                                                    src="https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=373&amp;q=80"
                                                    alt="avatar" className="object-cover w-10 h-10 mx-4 rounded-full"/>
                                                    <p><a href="#"
                                                          className="mx-1 font-bold text-gray-700 hover:underline">Khatab
                                                        Wedaa</a><span className="text-sm font-light text-gray-700">Created 332 Posts</span>
                                                    </p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="px-8 mt-10">
                                        <h1 className="mb-4 text-xl font-bold text-gray-700">Categories</h1>
                                        <div
                                            className="flex flex-col max-w-sm px-4 py-6 mx-auto bg-white rounded-lg shadow-md">
                                            <ul>
                                                <li><a href="#"
                                                       className="mx-1 font-bold text-gray-700 hover:text-gray-600 hover:underline">-
                                                    AWS</a></li>
                                                <li className="mt-2"><a href="#"
                                                                        className="mx-1 font-bold text-gray-700 hover:text-gray-600 hover:underline">-
                                                    Laravel</a></li>
                                                <li className="mt-2"><a href="#"
                                                                        className="mx-1 font-bold text-gray-700 hover:text-gray-600 hover:underline">-
                                                    Vue</a>
                                                </li>
                                                <li className="mt-2"><a href="#"
                                                                        className="mx-1 font-bold text-gray-700 hover:text-gray-600 hover:underline">-
                                                    Design</a></li>
                                                <li className="flex items-center mt-2"><a href="#"
                                                                                          className="mx-1 font-bold text-gray-700 hover:text-gray-600 hover:underline">-
                                                    Django</a></li>
                                                <li className="flex items-center mt-2"><a href="#"
                                                                                          className="mx-1 font-bold text-gray-700 hover:text-gray-600 hover:underline">-
                                                    PHP</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
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
                categories: data.categories,
                tags: data.tags,
                totalBlogs: data.size,
                blogsLimit: limit,
                blogSkip: skip
            };
        }
    });
};

export default withRouter(Blogs);
