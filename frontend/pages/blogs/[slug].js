import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import {Layout} from '../../components/Layout';
import {useState, useEffect} from 'react';
import {singleBlog, listRelated, getPhoto} from '../../actions/blog';
import {API, DOMAIN, APP_NAME} from '../../config';
import renderHTML from 'react-render-html';
import moment from 'moment';
import SmallCard from '../../components/Blog/Card/SmallCard';
import SmallCards from "../../components/Blog/Card/SmallCard";
import DisqusThread from "../../components/DisqusThread";
import {CameraIcon} from '@heroicons/react/solid'
import {PageHeader} from "../../components/pagesHeader";


const posts = [
    {
        title: 'Boost your conversion rate',
        href: '#',
        category: {name: 'Article', href: '#', color: 'bg-indigo-100 text-indigo-800'},
        description:
            'Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu.',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        author: {
            name: 'Paul York',
            href: '#',
            imageUrl:
                'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        readingTime: '6 min',
    },
    {
        title: 'How to use search engine optimization to drive sales',
        href: '#',
        category: {name: 'Video', href: '#', color: 'bg-pink-100 text-pink-800'},
        description:
            'Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu.',
        date: 'Mar 10, 2020',
        datetime: '2020-03-10',
        author: {
            name: 'Dessie Ryan',
            href: '#',
            imageUrl:
                'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        readingTime: '4 min',
    },
    {
        title: 'Improve your customer experience',
        href: '#',
        category: {name: 'Case Study', href: '#', color: 'bg-green-100 text-green-800'},
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab iure iusto fugiat commodi sequi.',
        date: 'Feb 12, 2020',
        datetime: '2020-02-12',
        author: {
            name: 'Easer Collins',
            href: '#',
            imageUrl:
                'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        readingTime: '11 min',
    },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


const SingleBlog = React.memo(({blog, query}) => {
    console.log(blog)
    const url = `${API}/blog/photo/${blog.slug}`
    const [{
        srcBlob,
        srcDataUri
    }, setSrc] = useState({
        srcBlob: null,
        srcDataUri: null
    });

    useEffect(() => {
        let isUnmounted = false;

        fetch(url, {})
            .then(response => response.blob())
            .then(blob => blob.arrayBuffer())
            .then(arrayBuffer => {

                if (isUnmounted) {
                    return;
                }

                const blob = new Blob([arrayBuffer])
                const srcBlob = URL.createObjectURL(blob);

                setSrc(state => ({
                    ...state,
                    srcBlob
                }));

            })

        return () => {
            isUnmounted = true;
        }

    }, [])

    const [related, setRelated] = useState([]);

    const loadRelated = () => {
        listRelated({blog}).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setRelated(data);
            }
        });
    };

    useEffect(() => {
        loadRelated();
    }, []);

    const head = () => (
        <Head>
            <title>
                {blog.title} | {APP_NAME}
            </title>
            <meta name="description" content={blog.mdesc}/>
            <link rel="canonical" href={`${DOMAIN}/blogs/${query.slug}`}/>
            <meta property="og:title" content={`${blog.title}| ${APP_NAME}`}/>
            <meta property="og:description" content={blog.mdesc}/>
            <meta property="og:type" content="webiste"/>
            <meta property="og:url" content={`${DOMAIN}/blogs/${query.slug}`}/>
            <meta property="og:site_name" content={srcBlob}/>
            <meta property="og:image" content={srcBlob}/>
            <meta property="og:image:secure_url" content={srcBlob}/>
            <meta property="og:image:type" content="image/jpg"/>
            {/*<meta property="fb:app_id" content={`${FB_APP_ID}`} />*/}
        </Head>
    );

    const showBlogCategories = blog =>
        blog.categories.map((c, i) => (
            <Link key={i} href={`/categories/${c.slug}`}>
                <a className="btn btn-primary mr-1 ml-1 mt-3">{c.name}</a>
            </Link>
        ));

    const showBlogTags = blog =>
        blog.tags.map((t, i) => (
            <Link key={i} href={`/tags/${t.slug}`}>
                <a className="btn btn-outline-primary mr-1 ml-1 mt-3">{t.name}</a>
            </Link>
        ));

    const showComments = () => {
        return (
            <DisqusThread id={blog.id} title={blog.title} path={`/blog/${blog.slug}`}/>
        )
    }


    const showRelatedBlog = () => {
        return (
            <div className="bg-white pt-5 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
                <div className="relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl">
                    <div>
                        <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">Related Publications</h2>
                    </div>
                    <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
                        <div className="absolute inset-0">
                            <div className="bg-white h-1/3 sm:h-2/3" />
                        </div>
                        <div className="relative max-w-7xl mx-auto">
                            <div className="mt-2 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
                                {related.map((post,i) => (
                                    <SmallCards blog={post}/>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>);
    };

    return (
        <>
            {head()}
            <PageHeader/>
            <Layout>
                <div className="bg-white overflow-hidden">
                    <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                        <div className="hidden lg:block bg-gray-50 absolute top-0 bottom-0 left-3/4 w-screen"/>
                        <div className="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
                            <div>
                                <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
                                    Written by <Link href={`/profile/${blog.postedBy.username}`}>
                                    <a>{blog.postedBy.username}</a>
                                </Link> {' '}|
                                    Published {moment(blog.updatedAt).fromNow()}</h2>
                                <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                                    {blog.title}
                                </h3>
                                {showBlogCategories(blog)}
                                {showBlogTags(blog)}
                            </div>
                        </div>
                        <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
                            <div className="relative lg:row-start-1 lg:col-start-2">
                                <svg
                                    className="hidden lg:block absolute top-0 right-0 -mt-20 -mr-20"
                                    width={404}
                                    height={384}
                                    fill="none"
                                    viewBox="0 0 404 384"
                                    aria-hidden="true"
                                >
                                    <defs>
                                        <pattern
                                            id="de316486-4a29-4312-bdfc-fbce2132a2c1"
                                            x={0}
                                            y={0}
                                            width={20}
                                            height={20}
                                            patternUnits="userSpaceOnUse"
                                        >
                                            <rect x={0} y={0} width={4} height={4} className="text-gray-200"
                                                  fill="currentColor"/>
                                        </pattern>
                                    </defs>
                                    <rect width={404} height={384} fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)"/>
                                </svg>
                                <div className="relative text-base mx-auto max-w-prose lg:max-w-none">
                                    <figure>
                                        <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                                            <img
                                                src={srcBlob}
                                                alt={blog.title}
                                                className="rounded-lg shadow-lg object-cover object-center"
                                                width={1184}
                                                height={1376}
                                            />
                                        </div>
                                        <figcaption className="mt-3 flex text-sm text-gray-500">
                                            <CameraIcon className="flex-none w-5 h-5 text-gray-400" aria-hidden="true"/>
                                            <span className="ml-2">Photograph by Marcus O’Leary</span>
                                        </figcaption>
                                    </figure>
                                </div>
                            </div>
                            <div className="mt-8 lg:mt-0">
                                <div className="text-base max-w-prose mx-auto lg:max-w-none">
                                    <p className="text-lg text-gray-500">
                                        Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum urna sed
                                        consectetur neque tristique
                                        pellentesque. Blandit amet, sed aenean erat arcu morbi.
                                    </p>
                                </div>
                                <div
                                    className="mt-5 prose prose-indigo text-gray-500 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">
                                    {renderHTML(blog.body)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {showRelatedBlog()}

                <div className="container pb-5">
                    {showComments()}
                </div>
            </Layout>
        </>
    );
});

SingleBlog.getInitialProps = ({query}) => {
    return singleBlog(query.slug).then(data => {
        if (data.error) {
            console.log(data.error);
        } else {
            console.log('GET INITIAL PROPS IN SINGLE BLOG', data);
            return {blog: data, query};
        }
    });
};

export default SingleBlog;
