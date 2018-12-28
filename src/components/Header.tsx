/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, NavbarToggler, Collapse, Nav, NavItem } from 'reactstrap';

type HeaderProps = {};

type HeaderState = {
  isOpen: boolean;
};

/**
 * Displays a header, which collapses on mobile devices.
 */
class Header extends Component<HeaderProps, HeaderState> {

  public state = {
    isOpen: false,
  };

  public render() {
    const { isOpen } = this.state;

    return (
      <div>
        <Navbar color="light" light expand="md">

          <NavLink to="/" className="navbar-brand">GoWeather</NavLink>
          <NavbarToggler onClick={() => this.toggle()} />

          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>

              <NavItem>
                <NavLink to="/history" className="nav-link">History</NavLink>
              </NavItem>

              { /* fake link */ }
              <NavItem>
                <NavLink to="#" className="nav-link disabled">About</NavLink>
              </NavItem>

              { /* fake link */ }
              <NavItem>
                <NavLink to="#" className="nav-link disabled">Log in</NavLink>
              </NavItem>

            </Nav>
          </Collapse>

        </Navbar>
      </div>
    );
  }

  private toggle() {
    this.setState({ isOpen: !this.state.isOpen });
  }

}

export default Header;
