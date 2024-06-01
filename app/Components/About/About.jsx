import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../About/about.module.css";
import Image from "next/image";

function About() {
  return (
    <div className={`${styles.color}`}>
      <Container>
        <Row>
          <Col className="col-md-12">
            <h2 className={`${styles.Abouth1}`}>Featured and seen in</h2>
            <div className={`${styles.Flex}`}>
              <Image
                width={90}
                height={90}
                alt="image of forbes logo"
                src={"/forbes.svg"}
              />
              <Image
                width={90}
                height={90}
                alt="image of coca cola logo"
                src={"/cola.svg"}
              />
              <Image
                width={90}
                height={90}
                alt="image of forbes logo"
                src={"/sportify.svg"}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
