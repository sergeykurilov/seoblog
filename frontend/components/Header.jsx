import Router from "next/router";
import NProgress from 'nprogress';
import React, {useState, useEffect, Fragment} from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';
import Link from "next/link";
import {isAuth, signout} from "../actions/auth";
import {APP_NAME} from "../config";
import {Popover, Transition} from "@headlessui/react";
import {MenuIcon, XIcon} from "@heroicons/react/outline";

Router.onRouteChangeStart = url => NProgress.start();
Router.onRouteChangeComplete = url => NProgress.done();
Router.onRouteChangeError = url => NProgress.done();
const navigation = [
    {name: 'Blog', href: '/blogs'},
    {name: 'Contact Us', href: '/contact'},
    {name: 'About us', href: '/about'},
]

const Example = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <Popover>
                {({open}) => (
                    <>
                        <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
                            <nav
                                className="relative flex items-center justify-between sm:h-10 lg:justify-start"
                                aria-label="Global"
                            >
                                <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                                    <div className="flex items-center justify-between w-full md:w-auto">
                                        <a href="#">
                                            <span className="sr-only">Workflow</span>
                                            <img
                                                className="h-8 w-auto sm:h-10"
                                                src="https://res.cloudinary.com/dbdtcrbpz/image/upload/v1622655344/usertesting-u-logo-02_gjfdwd.svg"
                                            />
                                        </a>
                                        <div className="-mr-2 flex items-center md:hidden">
                                            <Popover.Button
                                                className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                                <span className="sr-only">Open main menu</span>
                                                <MenuIcon className="h-6 w-6" aria-hidden="true"/>
                                            </Popover.Button>
                                        </div>
                                    </div>
                                </div>
                                <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                                    {navigation.map((item) => (
                                        <>
                                            <Link key={item.name} href={item.href}
                                                  className="text-base font-medium text-gray-500 hover:text-gray-900">
                                                <a>  {item.name}</a>
                                            </Link>
                                        </>
                                    ))}
                                    {isAuth() && (
                                        <NavLink style={{cursor: 'pointer'}}
                                                 className="text-base font-medium text-gray-500 hover:text-gray-900"
                                                 onClick={() => signout(() => Router.replace(`/signin`))}>
                                            Signout
                                        </NavLink>
                                    )}
                                </div>
                            </nav>

                        </div>


                        <Transition
                            show={open}
                            as={Fragment}
                            enter="duration-150 ease-out"
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
                                    className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                                    <div className="px-5 pt-4 flex items-center justify-between">
                                        <div>
                                            <img
                                                className="h-8 w-auto"
                                                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                                                alt=""
                                            />
                                        </div>
                                        <div className="-mr-2">
                                            <Popover.Button
                                                className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                                <span className="sr-only">Close main menu</span>
                                                <XIcon className="h-6 w-6" aria-hidden="true"/>
                                            </Popover.Button>
                                        </div>
                                    </div>
                                    <div className="px-2 pt-2 pb-3 space-y-1">
                                        {navigation.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                                            >
                                                {item.name}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </Popover.Panel>
                        </Transition>
                    </>
                )}
            </Popover>
            {/*<Navbar color="light" light expand="md">*/}
            {/*    <Link href="/">*/}
            {/*        <NavLink className="font-weight-bold">{APP_NAME}</NavLink>*/}
            {/*    </Link>*/}
            {/*    <NavbarToggler onClick={toggle} />*/}
            {/*    <Collapse isOpen={isOpen} navbar>*/}
            {/*        <Nav className="ml-auto" navbar>*/}
            {/*            <>*/}
            {/*                <NavItem>*/}
            {/*                    <Link href="/blogs">*/}
            {/*                        <NavLink>Blogs</NavLink>*/}
            {/*                    </Link>*/}
            {/*                </NavItem>*/}
            {/*                <NavItem>*/}
            {/*                    <Link href="/contact">*/}
            {/*                        <NavLink>Contact</NavLink>*/}
            {/*                    </Link>*/}
            {/*                </NavItem>*/}
            {/*            </>*/}

            {/*            {!isAuth() && (*/}
            {/*                <>*/}
            {/*                    <NavItem>*/}
            {/*                        <Link href="/signin">*/}
            {/*                            <NavLink>Signin</NavLink>*/}
            {/*                        </Link>*/}
            {/*                    </NavItem>*/}
            {/*                    <NavItem>*/}
            {/*                        <Link href="/signup">*/}
            {/*                            <NavLink>Signup</NavLink>*/}
            {/*                        </Link>*/}
            {/*                    </NavItem>*/}
            {/*                </>*/}
            {/*            )}*/}

            {/*            {isAuth() && isAuth().role === 0 && (*/}
            {/*                <NavItem>*/}
            {/*                    <Link href="/user">*/}
            {/*                        <NavLink>{`${isAuth().name}'s Dashboard`}</NavLink>*/}
            {/*                    </Link>*/}
            {/*                </NavItem>*/}
            {/*            )}*/}

            {/*            {isAuth() && isAuth().role === 1 && (*/}
            {/*                <NavItem>*/}
            {/*                    <Link href="/admin">*/}
            {/*                        <NavLink>{`${isAuth().name}'s Dashboard`}</NavLink>*/}
            {/*                    </Link>*/}
            {/*                </NavItem>*/}
            {/*            )}*/}

            {/*            {isAuth() && (*/}
            {/*                <NavItem>*/}
            {/*                    <NavLink style={{ cursor: 'pointer' }} onClick={() => signout(() => Router.replace(`/signin`))}>*/}
            {/*                        Signout*/}
            {/*                    </NavLink>*/}
            {/*                </NavItem>*/}
            {/*            )}*/}

            {/*            <NavItem>*/}
            {/*                <Link href="/user/crud/blog">*/}
            {/*                    <NavLink className="btn btn-primary text-white" >Write a blog</NavLink>*/}
            {/*                </Link>*/}
            {/*            </NavItem>*/}
            {/*        </Nav>*/}
            {/*    </Collapse>*/}
            {/*</Navbar>*/}

        </>
    );
}

export default Example;
