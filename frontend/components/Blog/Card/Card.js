import Link from 'next/link';
import renderHTML from 'react-render-html';
import moment from 'moment';
import {API} from '../../../config';
import React from "react";

export const BlogCard = ({blog}) => {
    const showBlogCategories = blog =>
        blog.categories.map((c, i) => {
            console.log(c)
            return (
                <Link key={i} href={`/categories/${c.slug}`}>
                    <a className="btn btn-primary mr-1 ml-1 mt-3">{c.name}</a>
                </Link>
            )
        })

    const showBlogTags = blog =>
        blog.tags.map((t, i) => (
            <Link key={i} href={`/tags/${t.slug}`}>
                <a className="btn btn-outline-primary mr-1 ml-1 mt-3">{t.name}</a>
            </Link>
        ));

    return (
        <>
            <div  className="max-w-4xl px-10 py-6 mx-auto bg-white rounded-lg shadow-md">
                <div className="flex items-center justify-between"><span
                    className="font-light text-gray-600">mar 4,
                                2019</span><a href="#"
                                              className="px-2 py-1 font-bold text-gray-100 bg-gray-600 rounded hover:bg-gray-500">Design</a>
                </div>
                <div className="mt-2"><a href="#"
                                         className="text-2xl font-bold text-gray-700 hover:underline">Accessibility
                    tools for
                    designers and developers</a>
                    <p className="mt-2 text-gray-600">Lorem ipsum dolor sit, amet
                        consectetur adipisicing elit.
                        Tempora expedita dicta totam aspernatur doloremque. Excepturi iste
                        iusto eos enim
                        reprehenderit nisi, accusamus delectus nihil quis facere in modi
                        ratione libero!</p>
                </div>
                <div className="flex items-center justify-between mt-4"><a href="#"
                                                                           className="text-blue-500 hover:underline">Read
                    more</a>
                    <div><a href="#" className="flex items-center"><img
                        src="https://images.unsplash.com/photo-1464863979621-258859e62245?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=333&amp;q=80"
                        alt="avatar"
                        className="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block"/>
                        <h1 className="font-bold text-gray-700 hover:underline">Jane
                            Doe</h1>
                    </a></div>
                </div>
            </div>


            {/*<div*/}
            {/*    className="my-6 px-6 min-w-min w-full overflow-hidden sm:my-8 sm:px-8 sm:w-1/3 md:my-8 md:px-8 md:w-full lg:w-full lg:px-6 lg:w-full xl:my-5 xl:px-5 xl:w-full">*/}
            {/*    <div className="lead">*/}
            {/*        <div className="p-15">*/}
            {/*            <div className="rounded-lg shadow-lg flex h-auto">*/}
            {/*                <div*/}
            {/*                    className=" h-50 bg-cover bg-center rounded-tl-lg rounded-bl-lg overflow-hidden w-1/1 bg-blue-400 text-center"*/}
            {/*                    style={{*/}
            {/*                        background: `url(${API}/blog/photo/${blog.slug})`,*/}
            {/*                        height: "25em !important",*/}
            {/*                        width: "100%",*/}
            {/*                        backgroundSize: "cover",*/}
            {/*                        minWidth: "20em",*/}
            {/*                        backgroundPosition: "95% 100%"*/}
            {/*                    }}>*/}

            {/*                </div>*/}
            {/*                <div className="flex-grow">*/}
            {/*                    <div className="p-4 text-gray-600">*/}
            {/*                        <p className="mark ml-1 pt-2 pb-2">*/}
            {/*                            Written by <Link href={`/profile/${blog.postedBy.username}`}>*/}
            {/*                            <a>{blog.postedBy.username}</a>*/}
            {/*                        </Link> {' '} | Published {moment(blog.updatedAt).fromNow()}*/}
            {/*                        </p>*/}
            {/*                        <Link href={`/blogs/${blog.slug}`}>*/}
            {/*                            <a>*/}
            {/*                                <h2 className="text-3xl font-sans md:font-serif font-bold text-gray-800 mb-4">{blog.title}</h2>*/}
            {/*                            </a>*/}
            {/*                        </Link>*/}
            {/*                        <p className="text-2md mb-2">{renderHTML(blog.excerpt)}</p>*/}
            {/*                    </div>*/}
            {/*                    <Link href={`/blogs/${blog.slug}`}>*/}
            {/*                        <div className="py-4 px-4 text-xs text-blue-500 bg-blue-100 w-full rounded-br-lg">*/}
            {/*                            <h3>Read more</h3>*/}
            {/*                        </div>*/}
            {/*                    </Link>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </>
    );
};


const Card = ({blog}) => {
    const showBlogCategories = blog =>
        blog.categories.map((c, i) => {
            console.log(c)
            return (
                <Link key={i} href={`/categories/${c.slug}`}>
                    <a className="btn btn-primary mr-1 ml-1 mt-3">{c.name}</a>
                </Link>
            )
        })

    const showBlogTags = blog =>
        blog.tags.map((t, i) => (
            <Link key={i} href={`/tags/${t.slug}`}>
                <a className="btn btn-outline-primary mr-1 ml-1 mt-3">{t.name}</a>
            </Link>
        ));

    return (
        <div className="lead pb-4">
            <header>
                <Link href={`/blogs/${blog.slug}`}>
                    <a>
                        <h2 className="pt-3 pb-3 font-weight-bold">{blog.title}</h2>
                    </a>
                </Link>
            </header>

            <section>

            </section>
            <section>
                {showBlogCategories(blog)}
                {showBlogTags(blog)}
                <br/>
                <br/>
            </section>

            <div className="row">
                <div className="col-md-4">
                    <section>
                        <img
                            className="img img-fluid"
                            style={{maxHeight: 'auto', width: '100%'}}
                            src={`${API}/blog/photo/${blog.slug}`}
                            alt={blog.title}
                        />
                    </section>
                </div>
                <div className="col-md-8">
                    <section>
                        <div className="pb-3">{renderHTML(blog.excerpt)}</div>
                        <Link href={`/blogs/${blog.slug}`}>
                            <a className="btn btn-primary pt-2">Read more</a>
                        </Link>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Card;
