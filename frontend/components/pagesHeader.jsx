import React, {useState, useEffect,} from 'react';
import {Fragment} from 'react'
import {Popover, Transition} from '@headlessui/react'
import {
    ChartBarIcon,
    CursorClickIcon,
    DocumentReportIcon,
    MenuIcon,
    RefreshIcon,
    ShieldCheckIcon,
    ViewGridIcon,
    XIcon,
} from '@heroicons/react/outline'
import {ChevronDownIcon} from '@heroicons/react/solid'

const resources = [
    {
        name: 'Help Center',
        description: 'Get all of your questions answered in our forums or contact support.',
        href: '#',
    },
    {name: 'Guides', description: 'Learn how to maximize our platform to get the most out of it.', href: '#'},
    {name: 'Events', description: 'See what meet-ups and other events we might be planning near you.', href: '#'},
    {name: 'Security', description: 'Understand how we take your privacy seriously.', href: '#'},
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

import Search from "./Blog/Search";
import Link from "next/link";


export const PageHeader = () => {
    return (
        <>
            <nav className="px-6 py-4 bg-white shadow">
                <div
                    className="container flex flex-col mx-auto md:flex-row md:items-center md:justify-between">
                    <div className="flex items-center justify-between">
                        <a href="#"
                           className="flex items-center justify-center text-xl font-bold text-gray-800 md:text-2xl">
                            <img
                                className="h-8 w-auto pr-4"
                                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                                alt="Workflow"
                            />
                            Logo
                        </a>
                        <div>
                            <button type="button"
                                    className="block text-gray-800 hover:text-gray-600 focus:text-gray-600 focus:outline-none md:hidden">
                                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                                    <path
                                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z">
                                    </path>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="ml-auto">
                        <Search/>
                    </div>
                    <div className="flex-col hidden md:flex md:flex-row md:-mx-4">
                        <Link href="/"

                        >
                            <a className="my-1 text-gray-800 hover:text-blue-500 md:mx-4 md:my-0">Home</a>
                        </Link>
                        <Link href="/blogs"

                        >
                            <a className="my-1 text-gray-800 hover:text-blue-500 md:mx-4 md:my-0">Blog</a>
                        </Link>
                        <Link href="/about"

                        >
                            <a className="my-1 text-gray-800 hover:text-blue-500 md:mx-4 md:my-0">About Us</a>
                        </Link>

                        <Link href="/contact"
                        >
                            <a className="my-1 text-gray-800 hover:text-blue-500 md:mx-4 md:my-0">Contact</a>
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    );
}

