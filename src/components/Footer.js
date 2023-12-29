import { Col, Container, Row } from 'react-bootstrap'
import '../style/footer.css';

function Footer() {
    return (
        <footer className='py-5 position-relative'>
            <Container>
                <a href='/' className='d-block py-2 text-decoration-underline'>Questions? Contact us.</a>
                <Row className='py-3'>
                    <Col className='col-12 col-sm-6 col-md-4 col-lg-3'>
                        <ul>
                            <li>
                                <a href='/' target='_blank' className='d-block py-1 mb-1 text-decoration-underline'>FAQ</a>
                            </li>
                            <li>
                                <a href='/' target='_blank' className='d-block py-1 mb-1 text-decoration-underline'>Investor Relations</a>
                            </li>
                            <li>
                                <a href='/' target='_blank' className='d-block py-1 mb-1 text-decoration-underline'>Privacy</a>
                            </li>
                            <li>
                                <a href='/' target='_blank' className='d-block py-1 mb-1 text-decoration-underline'>Speed Test</a>
                            </li>
                        </ul>
                    </Col>
                    <Col className='col-12 col-sm-6 col-md-4 col-lg-3'>
                        <ul>
                            <li>
                                <a href='/' target='_blank' className='d-block py-1 mb-1 text-decoration-underline'>Help Center</a>
                            </li>
                            <li>
                                <a href='/' target='_blank' className='d-block py-1 mb-1 text-decoration-underline'>Jobs</a>
                            </li>
                            <li>
                                <a href='/' target='_blank' className='d-block py-1 mb-1 text-decoration-underline'>Cookie Preferences</a>
                            </li>
                            <li>
                                <a href='/' target='_blank' className='d-block py-1 mb-1 text-decoration-underline'>Legal Notices</a>
                            </li>
                        </ul>
                    </Col>
                    <Col className='col-12 col-sm-6 col-md-4 col-lg-3'>
                        <ul>
                            <li>
                                <a href='/' target='_blank' className='d-block py-1 mb-1 text-decoration-underline'>Account</a>
                            </li>
                            <li>
                                <a href='/' target='_blank' className='d-block py-1 mb-1 text-decoration-underline'>Ways to Watch</a>
                            </li>
                            <li>
                                <a href='/' target='_blank' className='d-block py-1 mb-1 text-decoration-underline'>Corporate Information</a>
                            </li>
                            <li>
                                <a href='/' target='_blank' className='d-block py-1 mb-1 text-decoration-underline'>Only on Netflix</a>
                            </li>
                        </ul>
                    </Col>
                    <Col className='col-12 col-sm-6 col-md-4 col-lg-3'>
                        <ul>
                            <li>
                                <a href='/' target='_blank' className='d-block py-1 mb-1 text-decoration-underline'>Media Center</a>
                            </li>
                            <li>
                                <a href='/' target='_blank' className='d-block py-1 mb-1 text-decoration-underline'>Terms of use</a>
                            </li>
                            <li>
                                <a href='/' target='_blank' className='d-block py-1 mb-1 text-decoration-underline'>contact us</a>
                            </li>
                        </ul>
                    </Col>
                </Row>
                <p className='opacity-50'>Netflix Egypt</p>
            </Container>
        </footer>
    )
}

export default Footer;