import Link from 'next/link';
import renderHTML from 'react-render-html';
import moment from 'moment';
import {API} from '../../../config';
import React, {useEffect, useState} from "react";


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


export default function SmallCards({blog, key}) {

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
            <div key={blog.title} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                <div className="flex-shrink-0">
                    <img
                        className="h-48 w-full object-cover"
                        src={srcBlob}
                        alt={blog.title}
                    />
                </div>
                <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                    <div className="flex-1">
                        {/*<p className="text-sm font-medium text-indigo-600">*/}
                        {/*    <a href={post.category.href} className="hover:underline">*/}
                        {/*        {post.category.name}*/}
                        {/*    </a>*/}
                        {/*</p>*/}
                        <Link href={`/blogs/${blog.slug}`}>
                            <a className="block mt-2">
                                <p className="text-xl font-semibold text-gray-900">{blog.title}</p>
                                <p className="mt-3 text-base text-gray-500">{renderHTML(blog.excerpt)}</p>
                            </a>
                        </Link>
                    </div>
                    <div className="mt-6 flex items-center">
                        {/*<div className="flex-shrink-0">*/}
                        {/*    <a href={post.author.href}>*/}
                        {/*        <span className="sr-only">{post.author.name}</span>*/}
                        {/*        <img className="h-10 w-10 rounded-full" src={post.author.imageUrl} alt=""/>*/}
                        {/*    </a>*/}
                        {/*</div>*/}
                        <div className="ml-3">
                            <p className="text-sm font-medium text-gray-900">
                                <Link href={`/profile/${blog.postedBy.username}`}>
                                    <a className="hover:underline">{blog.postedBy.username}</a>
                                </Link>
                            </p>
                            <div className="flex space-x-1 text-sm text-gray-500">
                                <time dateTime={moment(blog.updatedAt).fromNow()}>{moment(blog.updatedAt).fromNow()}</time>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*<div key={key} className="mt-12 grid gap-16 pt-12 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">*/}
            {/*    <div className="card">*/}
            {/*        <img*/}
            {/*            className="img img-fluid"*/}
            {/*            style={{maxHeight: 'auto', width: '100%'}}*/}
            {/*            src={srcBlob}*/}
            {/*            alt={blog.title}*/}
            {/*        />*/}
            {/*        <Link href={`/blogs/${blog.slug}`}>*/}
            {/*            <a className="block mt-4">*/}
            {/*                <p className="text-xl font-semibold text-gray-900">{blog.title}</p>*/}
            {/*                <p className="mt-3 text-base text-gray-500">{renderHTML(blog.excerpt)}</p>*/}
            {/*            </a>*/}
            {/*        </Link>*/}
            {/*        <div className="mt-6 flex items-center">*/}
            {/*            <div className="ml-3">*/}
            {/*                <p className="text-sm font-medium text-gray-900">*/}
            {/*                    <Link href={`/profile/${blog.postedBy.username}`}>*/}
            {/*                        <a>{blog.postedBy.username}</a>*/}
            {/*                    </Link>*/}
            {/*                </p>*/}
            {/*                <div className="flex space-x-1 text-sm text-gray-500">*/}
            {/*                    <time*/}
            {/*                        dateTime={moment(blog.updatedAt).fromNow()}>{moment(blog.updatedAt).fromNow()}</time>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </>
    )
};

