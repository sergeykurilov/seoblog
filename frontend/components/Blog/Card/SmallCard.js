import Link from 'next/link';
import renderHTML from 'react-render-html';
import moment from 'moment';
import {API} from '../../../config';
import React, {useEffect, useState} from "react";

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
            <div key={key} className="mt-12 grid gap-16 pt-12 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
                <div className="card">
                    <img
                        className="img img-fluid"
                        style={{maxHeight: 'auto', width: '100%'}}
                        src={srcBlob}
                        alt={blog.title}
                    />
                    <Link href={`/blogs/${blog.slug}`}>
                        <a className="block mt-4">
                            <p className="text-xl font-semibold text-gray-900">{blog.title}</p>
                            <p className="mt-3 text-base text-gray-500">{renderHTML(blog.excerpt)}</p>
                        </a>
                    </Link>
                    <div className="mt-6 flex items-center">
                        <div className="ml-3">
                            <p className="text-sm font-medium text-gray-900">
                                <Link href={`/profile/${blog.postedBy.username}`}>
                                    <a>{blog.postedBy.username}</a>
                                </Link>
                            </p>
                            <div className="flex space-x-1 text-sm text-gray-500">
                                <time
                                    dateTime={moment(blog.updatedAt).fromNow()}>{moment(blog.updatedAt).fromNow()}</time>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
};

