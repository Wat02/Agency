import React from "react";
import styles from "../Text/text.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Text() {
  return (
    <div className={`${styles.color}`}>
      <Container>
        <Row>
          <Col xs={12} className="col-md-12">
            <p id={`${styles.TextP}`} className={`${styles.TextP}`}>
              In <span className={`${styles.color2}`}> DesignTop</span>{" "}
              everything is made with Blocks that come with pixel perfect
              design, interactivity and motion out of the box. Instead of
              designing from scratch, simply choose the right one from our
              library of blocks and see the magic unfold.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Text;
