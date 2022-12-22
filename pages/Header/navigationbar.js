import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React, { useEffect, useState } from 'react';

function NavigationBar() {
  const [textCenter, setTextCenter] = useState('');
  const [marginNavTex, setMarginNavTex] = useState('');
  useEffect(() => {
    if (window.innerWidth > 1000) {
      setTextCenter('text-center');
      setMarginNavTex('2rem');
    } else {
      setTextCenter('');
      setMarginNavTex('0');
    }
  }, []);
  return (
    <>
      <Navbar expand='lg' style={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}>
        <Container style={{ paddingLeft: '0', paddingRight: '0' }}>
          <Navbar.Brand href='#home'>LOGO</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav' className={textCenter}>
            <Nav className='me-auto ' style={{ marginLeft: marginNavTex }}>
              <Nav.Link href='#home'>Home</Nav.Link>
              <Nav.Link href='#link'>Link</Nav.Link>

              <NavDropdown title='Dropdown' id='basic-nav-dropdown'>
                <NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
                <NavDropdown.Item href='#action/3.2'>
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href='#action/3.3'>
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href='#action/3.4'>
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavigationBar;
