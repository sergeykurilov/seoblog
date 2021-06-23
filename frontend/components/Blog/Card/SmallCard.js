import Link from 'next/link';
import renderHTML from 'react-render-html';
import moment from 'moment';
import {API} from '../../../config';
import React, {useEffect, useState} from "react";

export default function SmallCards({blog}) {


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


    return (
        <>
            <div className="card">
                <div key={post.title}>
                    <div>
                        <a href={post.category.href} className="inline-block">
                  <span
                      className={classNames(
                          post.category.color,
                          'inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium'
                      )}
                  >
                    {post.category.name}
                  </span>
                        </a>
                    </div>
                    <a href={post.href} className="block mt-4">
                        <p className="text-xl font-semibold text-gray-900">{post.title}</p>
                        <p className="mt-3 text-base text-gray-500">{post.description}</p>
                    </a>
                    <div className="mt-6 flex items-center">
                        <div className="flex-shrink-0">
                            <a href={post.author.href}>
                                <span className="sr-only">{post.author.name}</span>
                                <img className="h-10 w-10 rounded-full" src={post.author.imageUrl} alt=""/>
                            </a>
                        </div>
                        <div className="ml-3">
                            <p className="text-sm font-medium text-gray-900">
                                <a href={post.author.href}>{post.author.name}</a>
                            </p>
                            <div className="flex space-x-1 text-sm text-gray-500">
                                <time dateTime={post.datetime}>{post.date}</time>
                                <span aria-hidden="true">&middot;</span>
                                <span>{post.readingTime} read</span>
                            </div>
                        </div>
                    </div>
                </div>
                <section>
                    <Link href={`/blogs/${blog.slug}`}>
                        <a>
                            <img
                                className="img img-fluid"
                                style={{maxHeight: 'auto', width: '100%'}}
                                src={srcBlob}
                                alt={blog.title}
                            />
                        </a>
                    </Link>
                </section>

                <div className="card-body">
                    <section>
                        <Link href={`/blogs/${blog.slug}`}>
                            <a>
                                <h5 className="card-title">{blog.title}</h5>
                            </a>
                        </Link>
                        <div className="card-text">{renderHTML(blog.excerpt)}</div>
                    </section>
                </div>
                <div className="card-body">
                    Posted {moment(blog.updatedAt).fromNow()} by{' '}
                    <Link href={`/profile/${blog.postedBy.username}`}>
                        <a>{blog.postedBy.username}</a>
                    </Link>
                </div>
            </div>


        </>
    );
};

