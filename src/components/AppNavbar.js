import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';
import '../style/navbar.css';

function AppNavbar() {
    const navLinks = [
        { href: '/', label: 'Home' },
        { href: '/movies', label: 'Movies' },
        { href: '/series', label: 'Series' },
    ]

    return (
        <Navbar expand="md">
            <Container fluid>
                <Link to="/" className='navbar-brand'>
                    <Image
                        src='/imgs/netflix_logo.png'
                        alt='Netflix Logo'
                        width='100'
                    />
                </Link>
                <Navbar.Collapse id="basic-navbar-nav" className='order-1 order-md-0'>
                    <Nav className="ms-auto me-2">
                        {
                            navLinks.map(link => (<NavLink to={link.href} className='nav-link' key={link.href}>{link.label}</NavLink>))
                        }
                    </Nav>
                </Navbar.Collapse>
                <div className='box_container d-flex align-items-center column-gap-2'>
                    <Link to='search' className='p-2'>
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </Link>
                    <Link to='notifications' className='p-2'>
                        <i className="fa-solid fa-bell"></i>
                    </Link>
                    <Link to='profile' className='p-2'>
                        <i className="fa-solid fa-user"></i>
                    </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" className='border-0 shadow-none text-white fs-2'>
                        <i className="fa-solid fa-bars"></i>
                    </Navbar.Toggle>
                </div>
            </Container>
        </Navbar>
    )
}

export default AppNavbar;