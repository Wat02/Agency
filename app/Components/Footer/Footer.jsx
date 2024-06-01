import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../Footer/footer.module.css";
import Nav from "../Nav/Nav";

function Footer() {
  return (
    <div className={`${styles.color}`}>
      <Container className={`${styles.color2}`}>
        <Row>
          <Col className="col-md-6">
            <div>
              <p className={`${styles.footerPFirst}`}>
                2023 DesignTop. All rights rreserved <br />
                Based in the UK. availible worldwide
              </p>
            </div>
          </Col>
          <Col className="col-md-6">
            <div>
              <p className={`${styles.footerP}`}>
                Terms & conditions <br />
                Privacy Policy
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <Nav />
    </div>
  );
}

export default Footer;
