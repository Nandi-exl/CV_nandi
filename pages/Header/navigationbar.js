import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

function NavigationBar() {
  const [marginNavTex, setMarginNavTex] = useState('');

  const router = useRouter();

  useEffect(() => {
    if (window.innerWidth > 1000) {
      setMarginNavTex('2rem');
    } else {
      setMarginNavTex('0rem');
    }
  }, []);

  return (
    <>
      <Navbar expand='lg' style={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}>
        <Container style={{ paddingLeft: '1rem', paddingRight: '0' }}>
          <Navbar.Brand href='#home'>LOGO</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto ' style={{ marginLeft: marginNavTex }}>
              <Nav.Link href='/'>Home</Nav.Link>
              <Nav.Link href='/component/about'>About</Nav.Link>
              <Nav.Link href='/component/solution'>Solution</Nav.Link>
              <Nav.Link href='/component/promotion'>Promotion</Nav.Link>
              <Nav.Link href='/component/news'>News</Nav.Link>
              <Nav.Link href='/component/recipe'>Recipe</Nav.Link>
              <Nav.Link href='/component/contact'>Contact Us</Nav.Link>
              <Nav.Link href='/component/online_shop'>Online Shop</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavigationBar;
