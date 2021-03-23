import React, {useState,useEffect} from 'react';
import {APP_NAME} from "../config";
import Router from "next/router";

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
} from 'reactstrap';
import Link from "next/link";
import {isAuth, Signout} from "../actions/auth";



const Example = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="light" light expand="md">
                <div className="container">
                    <Link href="/">
                        <NavLink className="text-muted font-weight-bold">{APP_NAME}</NavLink>
                    </Link>
                    <NavbarToggler onClick={toggle}/>
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            {isAuth() ?  useEffect(() => {
                                const {pathname} = Router
                                if(pathname == '/signin' || pathname == '/signup'){
                                    Router.replace('/')
                                }
                            }) :  <>
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