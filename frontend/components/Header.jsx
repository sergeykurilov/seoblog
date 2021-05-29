import Router from "next/router";
import NProgress from 'nprogress';
import React, {useState,useEffect} from 'react';
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
import Search from "./Blog/Search";

Router.onRouteChangeStart = url => NProgress.start();
Router.onRouteChangeComplete = url => NProgress.done();
Router.onRouteChangeError = url => NProgress.done();


const Example = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <Navbar color="light" light expand="md">
                <Link href="/">
                    <NavLink className="font-weight-bold">{APP_NAME}</NavLink>
                </Link>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <>
                            <NavItem>
                                <Link href="/blogs">
                                    <NavLink>Blogs</NavLink>
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link href="/contact">
                                    <NavLink>Contact</NavLink>
                                </Link>
                            </NavItem>
                        </>

                        {!isAuth() && (
                            <>
                                <NavItem>
                                    <Link href="/signin">
                                        <NavLink>Signin</NavLink>
                                    </Link>
                                </NavItem>
                                <NavItem>
                                    <Link href="/signup">
                                        <NavLink>Signup</NavLink>
                                    </Link>
                                </NavItem>
                            </>
                        )}

                        {isAuth() && isAuth().role === 0 && (
                            <NavItem>
                                <Link href="/user">
                                    <NavLink>{`${isAuth().name}'s Dashboard`}</NavLink>
                                </Link>
                            </NavItem>
                        )}

                        {isAuth() && isAuth().role === 1 && (
                            <NavItem>
                                <Link href="/admin">
                                    <NavLink>{`${isAuth().name}'s Dashboard`}</NavLink>
                                </Link>
                            </NavItem>
                        )}

                        {isAuth() && (
                            <NavItem>
                                <NavLink style={{ cursor: 'pointer' }} onClick={() => signout(() => Router.replace(`/signin`))}>
                                    Signout
                                </NavLink>
                            </NavItem>
                        )}

                        <NavItem>
                            <Link href="/user/crud/blog">
                                <NavLink className="btn btn-primary text-white" >Write a blog</NavLink>
                            </Link>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
            <Search/>
        </>
    );
}

export default Example;
