import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaGithub, FaLinkedinIn, FaMailBulk } from 'react-icons/fa';

function Footer() {
  let date = new Date();
  let year = date.getFullYear();

  return (

    <Container fluid className="color-nav black">
      <Row>
        <Col md="4" className="footer-body">
          <h3 className='footerText'>By Vinay Katta</h3>
        </Col>

        <Col md="4" className="footer-copyright">
          <h3 className='footerText'>Copyright © {year}</h3>
        </Col>

        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a className='footerText'
                href="https://github.com/vkatta316"
                
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
            </li>
            <li className="social-icons">
              <a className='footerText'
                href="https://www.linkedin.com/"
                
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a className='footerText'
                href="mailto:vinaykatta316@gmail.com"
                
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaMailBulk/>
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>

  )
}

export default Footer