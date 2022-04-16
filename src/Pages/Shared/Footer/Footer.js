import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faPinterest,
  faTwitter,
  
} from "@fortawesome/free-brands-svg-icons";
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'
import React from "react";
import { Col, Container, Nav, Row } from "react-bootstrap";
import "./Footer.css";
import { HashLink } from "react-router-hash-link";
const Footer = () => {
  const fac = <FontAwesomeIcon icon={faFacebookF} />;
  const twitter = <FontAwesomeIcon icon={faTwitter} />;
  const pinterest = <FontAwesomeIcon icon={faPinterest} />;
  const angle = <FontAwesomeIcon icon={faAngleDoubleRight} />;
  

  return (
    <div className="bg-dark text-white">
      <Container fluid className='footer mx-3'>
        <Row>
          <Col xs={12} md={4} className='my-3'>
            <div className="footer-title">
                <h3 className='titleDesign'>King Laptop Park</h3>
            </div>

            <p>
              King laptop park is the leading laptop provider company all over the world. We have a most exclusive brand and supliers.
            </p>
          </Col>
          <Col xs={12} md={4} className='my-3'>
            <div className="footerNav">
              <h3>Useful links</h3>
              <li>
                <Nav.Link as={HashLink} to="/home#home"><i>{angle}</i>Home</Nav.Link>
              </li>
              <li>
                <Nav.Link as={HashLink} to="/home#products"><i>{angle}</i>Products</Nav.Link>
              </li>
              <li>
                <Nav.Link as={HashLink} to="/home#reviews"><i>{angle}</i>Reviews</Nav.Link>
              </li>
              <li>
                <Nav.Link as={HashLink} to="/home#contact"><i>{angle}</i>Contact</Nav.Link>
              </li>
            </div>
          </Col>
          <Col xs={12} md={4} className='footer-social my-3'>
            <h3 className="mb-4">Social links</h3>
            <a href='https://www.facebook.com/%E0%A6%A8%E0%A6%B0%E0%A6%B8%E0%A6%BF%E0%A6%82%E0%A6%A6%E0%A7%80-%E0%A6%B8%E0%A7%8D%E0%A6%AA%E0%A7%87%E0%A6%B6%E0%A6%BE%E0%A6%B2%E0%A6%BE%E0%A6%87%E0%A6%9C%E0%A6%A1-%E0%A6%A1%E0%A6%BE%E0%A7%9F%E0%A6%BE%E0%A6%AC%E0%A7%87%E0%A6%9F%E0%A6%BF%E0%A6%95-%E0%A6%8F%E0%A6%A8%E0%A7%8D%E0%A6%A1-%E0%A6%A1%E0%A6%BE%E0%A7%9F%E0%A6%BE%E0%A6%97%E0%A6%A8%E0%A6%B8%E0%A7%8D%E0%A6%9F%E0%A6%BF%E0%A6%95-%E0%A6%B8%E0%A7%87%E0%A6%A8%E0%A7%8D%E0%A6%9F%E0%A6%BE%E0%A6%B0-Nsddc-104570345278357/?view_public_for=104570345278357' target='_blank' rel="noreferrer"><span>{fac}</span></a>
           
            <span>{twitter}</span>
            <span>{pinterest}</span>
          </Col>
        </Row>
        <p className='text-center'>&copy;All rights reserved by King Laptop Park</p>
      </Container>
    </div>
  );
};

export default Footer;
