import React from 'react';

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
    DropdownItem
} from 'reactstrap';

export default class Navdoc extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div>
                <div className="container-fluid fixed-top">
                    <Navbar className="row" color="light" light expand="md">

                        <NavbarBrand href="/">
                            <img className="img-fluid"
                                src="https://www.docplanner.com/img/logo-default-group-en.svg?v=1" width=" 35%"
                                alt="Docplanner Group" />
                        </NavbarBrand>

                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink  style={{color: '#33b39b'}} href="#">about us</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="hover-nav" href="#">Career</NavLink>
                                </NavItem>
                                <UncontrolledDropdown className="text-muted" nav inNavbar>
                                    <DropdownToggle className="hover-nav" nav caret>
                                        Departements
                </DropdownToggle>
                                    <DropdownMenu right>
                                        <DropdownItem className="hover-nav">
                                            Marketing & PR
                  </DropdownItem>
                                        <DropdownItem className="hover-nav">
                                            Customer Success & Sales
                  </DropdownItem>
                  
                                        <DropdownItem className="hover-nav">
                                            IT, Product, Design & UIX
                  </DropdownItem>
                  
                                        <DropdownItem className="hover-nav">
                                            Finance & Administration
                  </DropdownItem>
                
                                        <DropdownItem className="hover-nav">
                                            HR & more
                  </DropdownItem>
                                        
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                            </Nav>
                        </Collapse>
                    </Navbar>
                </div>
            </div>
        );
    }
}

