import {Navbar, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap'
import logo from "../images/logo.png";
import React from "react";
const MyNavbar = () => {
        return (
            <div>
             <Navbar color="light" light expand="md" style={{backgroundColor:"#000"}}>
                <NavbarBrand><img src={logo} alt={"logo"}/></NavbarBrand>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink href="#">Products</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">Customers</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">News+Events</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">About Us</NavLink>
                    </NavItem>
                </Nav>
             </Navbar>
          </div>
        )
}

export  default  MyNavbar