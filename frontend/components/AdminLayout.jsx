import {Dialog, Transition} from "@headlessui/react";
import React, {Fragment, useState} from "react";
import Link from "next/link";
import {
    ClockIcon,
    CogIcon,
    CreditCardIcon,
    DocumentReportIcon,
    HomeIcon,
    QuestionMarkCircleIcon,
    ScaleIcon,
    XIcon,
} from '@heroicons/react/outline'
import {isAuth} from "../actions/auth";
const navigationAdmin = [
    {name: 'Home', href: '/admin', icon: HomeIcon, current: true},
    {name: 'Create Category', href: '/admin/crud/category', icon: ClockIcon, current: false},
    {name: 'Create Tag', href: '/admin/crud/tag', icon: ScaleIcon, current: false},
    {name: 'Create Blog', href: '/admin/crud/blog', icon: CreditCardIcon, current: false},
    {name: 'Update/Delete Blog', href: '/admin/crud/blogs', icon: DocumentReportIcon, current: false},
    {name: 'Leads', href: '/admin/crud/leads', icon: DocumentReportIcon, current: false},
]
const navigationUser = [
    {name: 'Home', href: '/user', icon: HomeIcon, current: true},
    {name: 'Create Blog', href: '/user/crud/blog', icon: CreditCardIcon, current: false},
    {name: 'Update/Delete Blog', href: '/user/crud/blogs', icon: DocumentReportIcon, current: false},
]

const nav = isAuth().role === 1 ? navigationAdmin : navigationUser

const secondaryNavigation = [
    {name: 'Update profile', href: '/user/update', icon: CogIcon},
    {name: 'Help', href: '#', icon: QuestionMarkCircleIcon},
]


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export const AdminLayout = ({children}) => {
    const [sidebarOpen, setSidebarOpen] = useState(false)
    return (
        <>
            <div className="h-screen flex overflow-x-hidden overflow-scroll bg-gray-100">
                <Transition.Root show={sidebarOpen} as={Fragment}>
                    <Dialog
                        as="div"
                        static
                        className="fixed inset-0 flex z-40 lg:hidden"
                        open={sidebarOpen}
                        onClose={setSidebarOpen}
                    >
                        <Transition.Child
                            as={Fragment}
                            enter="transition-opacity ease-linear duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition-opacity ease-linear duration-300"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75"/>
                        </Transition.Child>
                        <Transition.Child
                            as={Fragment}
                            enter="transition ease-in-out duration-300 transform"
                            enterFrom="-translate-x-full"
                            enterTo="translate-x-0"
                            leave="transition ease-in-out duration-300 transform"
                            leaveFrom="translate-x-0"
                            leaveTo="-translate-x-full"
                        >
                            <div className="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-gray-900">
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-in-out duration-300"
                                    enterFrom="opacity-0"
                                    enterTo="opacity-100"
                                    leave="ease-in-out duration-300"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                    <div className="absolute top-0 right-0 -mr-12 pt-2">
                                        <button
                                            className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                            onClick={() => setSidebarOpen(false)}
                                        >
                                            <span className="sr-only">Close sidebar</span>
                                            <XIcon className="h-6 w-6 text-white" aria-hidden="true"/>
                                        </button>
                                    </div>
                                </Transition.Child>
                                <div className="flex-shrink-0 flex items-center px-4">
                                    <img
                                        className="h-8 w-auto"
                                        src="https://tailwindui.com/img/logos/easywire-logo-cyan-300-mark-white-text.svg"
                                        alt="Easywire logo"
                                    />
                                </div>
                                <nav className="mt-5 flex-shrink-0 h-full divide-y divide-cyan-800 overflow-y-auto"
                                     aria-label="Sidebar">
                                    <div className="px-2 space-y-1">
                                        {nav.map((item) => (
                                            <Link href={item.href}>
                                                <a
                                                    key={item.name}
                                                    className={classNames(
                                                        item.current ? 'bg-cyan-800 text-white' : 'text-white hover:text-white hover:bg-cyan-600',
                                                        'group flex items-center px-2 py-2 text-base font-medium rounded-md'
                                                    )}
                                                >
                                                    <item.icon className="mr-4 flex-shrink-0 h-6 w-6 text-cyan-200"
                                                               aria-hidden="true"/>
                                                    {item.name}
                                                </a>
                                            </Link>
                                        ))}
                                    </div>
                                    <div className="mt-6 pt-6">
                                        <div className="px-2 space-y-1">
                                            {secondaryNavigation.map((item) => (
                                                <Link href={item.href}>
                                                    <a
                                                        key={item.name}
                                                        className="group flex items-center px-2 py-2 text-base font-medium rounded-md text-white hover:text-white hover:bg-cyan-600"
                                                    >
                                                        <item.icon className="mr-4 h-6 w-6 text-cyan-200"
                                                                   aria-hidden="true"/>
                                                        {item.name}
                                                    </a>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </nav>
                            </div>
                        </Transition.Child>
                        <div className="flex-shrink-0 w-14" aria-hidden="true">
                            {/* Dummy element to force sidebar to shrink to fit close icon */}
                        </div>
                    </Dialog>
                </Transition.Root>
                {/* Static sidebar for desktop */}
                <div className="hidden lg:flex lg:flex-shrink-0">
                    <div className="flex flex-col w-64">
                        {/* Sidebar component, swap this element with another sidebar if you like */}
                        <div className="flex flex-col flex-grow bg-gray-900 pt-5 pb-4 overflow-y-auto">
                            <div className="flex items-center flex-shrink-0 px-4">
                                <img
                                    className="h-8 w-auto"
                                    src="https://tailwindui.com/img/logos/easywire-logo-cyan-300-mark-white-text.svg"
                                    alt="Easywire logo"
                                />
                            </div>
                            <nav className="mt-5 flex-1 flex flex-col divide-y divide-cyan-800 overflow-y-auto"
                                 aria-label="Sidebar">
                                <div className="px-2 space-y-1">
                                    {nav.map((item) => (
                                        <Link href={item.href}>
                                            <a
                                                key={item.name}
                                                className={classNames(
                                                    item.current ? 'bg-gray-900 text-white' : 'text-white hover:text-white hover:bg-cyan-600',
                                                    'group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md'
                                                )}
                                                aria-current={item.current ? 'page' : undefined}
                                            >
                                                <item.icon className="mr-4 flex-shrink-0 h-6 w-6 text-cyan-200"
                                                           aria-hidden="true"/>
                                                {item.name}
                                            </a>
                                        </Link>
                                    ))}
                                </div>
                                <div className="mt-6 pt-6">
                                    <div className="px-2 space-y-1">
                                        {secondaryNavigation.map((item) => (
                                            <Link href={item.href}>
                                                <a
                                                    key={item.name}
                                                    className="group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md text-white hover:text-white hover:bg-cyan-600"
                                                >
                                                    <item.icon className="mr-4 h-6 w-6 text-cyan-200"
                                                               aria-hidden="true"/>
                                                    {item.name}
                                                </a>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
                {children}
            </div>
        </>
    )
}
