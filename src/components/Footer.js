import { Container, Row, Col } from "react-bootstrap";

import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
            <a href="https://github.com/Yuan0317"><img src={navIcon1} alt='github'/></a>
                <a href="https://www.linkedin.com/in/yuan-tang-55ab5628b/"><img src={navIcon2} alt='linkedln'/></a>
                <a href="https://www.youtube.com/channel/UCIEgoXctMieqqMU1MBsAsIg"><img src={navIcon3} alt='youtube'/></a>
            </div>
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
