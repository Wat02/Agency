import React from "react";
import styles from "../Howworks/howworks.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Howworks() {
  return (
    <div className={`${styles.color}`}>
      <Container className={`${styles.padding}`}>
        <Row>
          <Col className="col-md-12">
            <p className={`${styles.WhatP}`}>How it works</p>
            <h3 id={`${styles.WhatH3}`} className={`${styles.WhatH3}`}>
              Working with us is as simple <br />
              as 1, 2, 3!
            </h3>
            <div className={`${styles.wid}`}>
              <p className={`${styles.WhatText}`}>
                Easily add, manage, and track your requests using your own
                private Trello board
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col xs={12} className="col-md-6">
            <div className={`${styles.right}`}>
              <p className={`${styles.WhatP}`}>One</p>
              <h3>Sign up, make requests</h3>
              <p className={`${styles.WhatText}`}>
                Once signed up, you'll receive your own Trello board <br />{" "}
                where you can submit unlimited design requests
              </p>
              <p></p>
            </div>
          </Col>
          <Col className="col-md-6">
            <img className={`${styles.img}`} src="/digital.png" />
          </Col>
          <Col xs={12} className="col-md-6">
            <div>
              <img className={`${styles.img2}`} src="digital.png" />
            </div>
          </Col>
          <Col className="col-md-6">
            <div className={`${styles.right}`}>
              <p className={`${styles.WhatP2}`}>One</p>
              <h3>Sign up, make requests</h3>
              <p className={`${styles.WhatText}`}>
                Once signed up, you'll receive your own Trello board <br />
                where you can submite unlimited design requests
              </p>
            </div>
          </Col>
          <Col xs={12} className="col-md-6">
            <div className={`${styles.right}`}>
              <p className={`${styles.WhatP2}`}>One</p>
              <h3>Sign up, make requests</h3>
              <p className={`${styles.WhatText}`}>
                Once signed up, you'll receive your own Trello board <br />
                where you can submite unlimited design requests
              </p>
              <p></p>
            </div>
          </Col>
          <Col className="col-md-6">
            <img className={`${styles.img2}`} src="/grabe.png" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Howworks;
