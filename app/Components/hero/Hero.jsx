import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../hero/hero.module.css";
import Nav from "../Nav/Nav";

function Hero() {
  return (
    <div className={`${styles.color}`}>
      <Col className="col-md-12">
        <Nav />
      </Col>
      <div className={`${styles.center}`}> </div>
      <Container id={`${styles.color2}`} className={`${styles.color2}`}>
        <Row>
          <Col className="col-md-12">
            <div className={`${styles.center}`}></div>
            <h1 id={`${styles.HeroH1}`} className={`${styles.HeroH1}`}>
              All your design needs,
              <br />
              <span className={`${styles.FirstSpan}`}> one subscription</span>
            </h1>
            <p id={`${styles.HeroP}`} className={`${styles.HeroP}`}>
              A flexible, no-fuss design subscription that puts top-tier design{" "}
              <br />
              at your fingertips. Pause or cancel anytime
            </p>
            <div className={`${styles.Flex}`}>
              <p id={`${styles.pHero}`} className={`${styles.pHero}`}>
                {" "}
                😦 Unlimited tasks
              </p>
              <p className={`${styles.pHero}`}> 📝 Results in just 3 days</p>
              <p className={`${styles.pHero}`}> 😢 Cancel anytime</p>
            </div>
          </Col>
        </Row>
        <p id={`${styles.nesto}`}>See pricing</p>
      </Container>
    </div>
  );
}

export default Hero;
