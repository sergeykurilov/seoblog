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

const solutions = [
    {
        name: 'Analytics',
        description: 'Get a better understanding of where your traffic is coming from.',
        href: '#',
        icon: ChartBarIcon,
    },
    {
        name: 'Engagement',
        description: 'Speak directly to your customers in a more meaningful way.',
        href: '#',
        icon: CursorClickIcon,
    },
    {name: 'Security', description: "Your customers' data will be safe and secure.", href: '#', icon: ShieldCheckIcon},
    {
        name: 'Integrations',
        description: "Connect with third-party tools that you're already using.",
        href: '#',
        icon: ViewGridIcon,
    },
    {
        name: 'Automations',
        description: 'Build strategic funnels that will drive your customers to convert',
        href: '#',
        icon: RefreshIcon,
    },
    {
        name: 'Reports',
        description: 'Get detailed reports that will help you make more informed decisions ',
        href: '#',
        icon: DocumentReportIcon,
    },
]
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


export const PageHeader = (props) => {


    return (
        <>
            <div className="max-w-7xl mx-auto dark:text-white">
                <Popover className="relative">
                    {({open}) => (
                        <>
                            <div
                                className="flex justify-between items-center px-4 py-6 sm:px-6 md:justify-start md:space-x-10">
                                <div>
                                    <a href="#" className="flex">
                                        <span className="sr-only">Workflow</span>
                                        <img
                                            className="h-8 w-auto sm:h-10"
                                            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                                            alt=""
                                        />
                                    </a>
                                </div>
                                <div className="-mr-2 -my-2 md:hidden">
                                    <Popover.Button
                                        className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                        <span className="sr-only">Open menu</span>
                                        <MenuIcon className="h-6 w-6" aria-hidden="true"/>
                                    </Popover.Button>
                                </div>
                                <div className="hidden md:flex-1 md:flex md:items-center md:justify-between">
                                    <Popover.Group as="nav" className="flex space-x-10">


                                        <Link href="/"
                                              className="text-base font-medium text-gray-500 hover:text-gray-900">
                                            <a>Home</a>
                                        </Link>

                                        <Link href="/blogs"
                                              className="text-base font-medium text-gray-500 hover:text-gray-900">
                                            <a>Blog</a>
                                        </Link>

                                        <Link href="/about"
                                              className="text-base font-medium text-gray-500 hover:text-gray-900">
                                            <a>About Us</a>
                                        </Link>

                                        <Link href="/contact"
                                              className="text-base font-medium text-gray-500 hover:text-gray-900">
                                            <a>Contact</a>
                                        </Link>



                                    </Popover.Group>
                                    <div className="flex items-center md:ml-12">
                                        <Search/>
                                    </div>
                                </div>
                            </div>

                            <Transition
                                show={open}
                                as={Fragment}
                                enter="duration-200 ease-out"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="duration-100 ease-in"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Popover.Panel
                                    focus
                                    static
                                    className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                                >
                                    <div
                                        className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                                        <div className="pt-5 pb-6 px-5">
                                            <div className="flex items-center justify-between">
                                                <div>
                                                    <img
                                                        className="h-8 w-auto"
                                                        src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                                                        alt="Workflow"
                                                    />
                                                </div>
                                                <div className="-mr-2">
                                                    <Popover.Button
                                                        className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                                        <span className="sr-only">Close menu</span>
                                                        <XIcon className="h-6 w-6" aria-hidden="true"/>
                                                    </Popover.Button>
                                                </div>
                                            </div>
                                            <div className="mt-6">
                                                <nav className="grid gap-6">
                                                    {solutions.map((item) => (
                                                        <a
                                                            key={item.name}
                                                            href={item.href}
                                                            className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50"
                                                        >
                                                            <div
                                                                className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white">
                                                                <item.icon className="h-6 w-6" aria-hidden="true"/>
                                                            </div>
                                                            <div
                                                                className="ml-4 text-base font-medium text-gray-900">{item.name}</div>
                                                        </a>
                                                    ))}
                                                </nav>
                                            </div>
                                        </div>
                                        <div className="py-6 px-5">
                                            <div className="grid grid-cols-2 gap-4">
                                                <a href="#"
                                                   className="text-base font-medium text-gray-900 hover:text-gray-700">
                                                    Pricing
                                                </a>

                                                <a href="#"
                                                   className="text-base font-medium text-gray-900 hover:text-gray-700">
                                                    Docs
                                                </a>

                                                    <Link href="/"
                                                          className="text-base font-medium text-gray-500 hover:text-gray-900">
                                                        <p>Home</p>
                                                    </Link>

                                                <a href="#"
                                                   className="text-base font-medium text-gray-900 hover:text-gray-700">
                                                    Enterprise
                                                </a>
                                                {resources.map((item) => (
                                                    <a
                                                        key={item.name}
                                                        href={item.href}
                                                        className="text-base font-medium text-gray-900 hover:text-gray-700"
                                                    >
                                                        {item.name}
                                                    </a>
                                                ))}
                                            </div>
                                            <div className="mt-6">
                                                <Search/>
                                            </div>
                                        </div>
                                    </div>
                                </Popover.Panel>
                            </Transition>
                        </>
                    )}
                </Popover>
            </div>
        </>
    );
}

