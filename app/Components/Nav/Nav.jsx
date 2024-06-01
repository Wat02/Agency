import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../Nav/nav.module.css";

function Nav() {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <div className={`${styles.Flex2}`}>
              <p className={`${styles.Padiing}`}> Work </p>
              <p className={`${styles.Padiing}`}>Process</p>
              <p className={`${styles.Padiing}`}>Contant</p>
              <button id={`${styles.button2}`}>See pricing</button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Nav;
