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
import {isAuth, Signout} from "../actions/auth";
import {APP_NAME} from "../config";

Router.onRouteChangeStart = url => NProgress.start();
Router.onRouteChangeComplete = url => NProgress.done();
Router.onRouteChangeError = url => NProgress.done();


const Example = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="light" light expand="md">
                <div className="container">
                    <Link href="/">
                       <h5><NavLink style={{color: "black", cursor: "pointer"}} className="font-weight-bold">{APP_NAME}</NavLink></h5>
                    </Link>
                    <NavbarToggler onClick={toggle}/>
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            {/*{isAuth() ?  useEffect(() => {*/}
                            {/*    const {pathname} = Router*/}
                            {/*    if(pathname == '/signin' || pathname == '/signup'){*/}
                            {/*        Router.replace('/')*/}
                            {/*    }*/}
                            {/*}) :  <>*/}
                            {/*    <NavItem style={{cursor: "pointer"}}>*/}
                            {/*        <Link href="/signin">*/}
                            {/*            <NavLink>Signin</NavLink>*/}
                            {/*        </Link>*/}
                            {/*    </NavItem>*/}
                            {/*    <NavItem style={{cursor: "pointer"}}>*/}
                            {/*        <Link href="/signup">*/}
                            {/*            <NavLink>Signup</NavLink>*/}
                            {/*        </Link>*/}
                            {/*    </NavItem>*/}

                            {/*</>}*/}
                            {!isAuth() && <>
                                <NavItem style={{cursor: "pointer"}}>
                                    <Link href="/signin">
                                        <NavLink>Signin</NavLink>
                                    </Link>
                                </NavItem>
                                <NavItem style={{cursor: "pointer"}}>
                                    <Link href="/signup">
                                        <NavLink>Signup</NavLink>
                                    </Link>
                                </NavItem>
                            </>}


                            {isAuth() && isAuth().role !== 1 &&  <NavItem style={{cursor: "pointer"}}>
                                <Link href="/user">
                                    <NavLink>{isAuth().name}'s Dashboard</NavLink>
                                </Link>
                            </NavItem> }
                            {isAuth() && isAuth().role !== 0 &&  <NavItem style={{cursor: "pointer"}}>
                                <Link href="/admin">
                                    <NavLink>{isAuth().name}'s Admin Dashboard</NavLink>
                                </Link>
                            </NavItem> }

                            {isAuth() &&   <NavItem style={{cursor: "pointer"}}>   <NavLink onClick={() => {
                                Signout(() => Router.replace("/signin"))
                            }}>Signout</NavLink> </NavItem>}


                        </Nav>
                    </Collapse>
                </div>
            </Navbar>
        </div>
    );
}

export default Example;