import React, { useState } from 'react';
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

const NavbarComp = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">Latihan React</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="/">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/about">About</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/mahasiswa">Mahasiswa</NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Options
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    Option 1
                            </DropdownItem>
                                <DropdownItem>
                                    Option 2
                            </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>
                                    Reset
                             </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                    <NavbarText>Bismillah Diterima Kerja</NavbarText>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default NavbarComp