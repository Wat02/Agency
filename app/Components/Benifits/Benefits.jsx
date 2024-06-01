import React from "react";
import styles from "../Benifits/benefits.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Benefits() {
  return (
    <div className={`${styles.color}`}>
      <Container className={`${styles.padding}`}>
        <Row>
          <Col className="col-md-12">
            <p className={`${styles.WhatP}`}>Great Benefits</p>
            <h3 id={`${styles.WhatH3}`} className={`${styles.WhatH3}`}>
              Subscription benefits
            </h3>
            <div className={`${styles.wid}`}>
              <p className={`${styles.WhatText}`}>
                Say goodbye to being ghosted by freelancers or paying over the
                top fees for <br />
                agencies. A Design Tap subscription offers headache free design
                by providing you <br />
                with consistent quality at a consistent price. It's like having
                a design team 'on tap'.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <Container className={`${styles.padding}`}>
        <Row>
          <Col xs={12} className="col-md-4">
            <div className={`${styles.padding3}`}>
              <img className={`${styles.wid2}`} src="/arrow.svg" />
              <h3 className={`${styles.BenefitsH3}`}>Top quality</h3>
              <p className={`${styles.bennesto}`}>
                A dedicated design resource that <br /> provides top quality
                work whenever you <br /> need it.
              </p>
            </div>
          </Col>
          <Col xs={12} className="col-md-4">
            <div className={`${styles.padding3}`}>
              <img className={`${styles.wid2}`} src="infinite.svg" />
              <h3 className={`${styles.BenefitsH3}`}>Unlimited Requests</h3>
              <p className={`${styles.bennesto}`}>
                Queue up as many requests as you <br />
                need. If you don't love the design, <br />
                we'll keep editing until you do.
              </p>
            </div>
          </Col>
          <Col xs={12} className="col-md-4">
            <div className={`${styles.padding3}`}>
              <img className={`${styles.wid2}`} src="light.svg" />
              <h3 className={`${styles.BenefitsH3}`}>
                Lightning fast delivery
              </h3>
              <p className={`${styles.bennesto}`}>
                Sign up and create your first request <be /> in seconds. Receive
                real work in an <br /> average of 3 working days
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <Container className={`${styles.padding}`}>
        <Row>
          <Col xs={12} className="col-md-4">
            <div className={`${styles.padding3}`}>
              <img className={`${styles.wid2}`} src="/stats.svg" />
              <h3 className={`${styles.BenefitsH3}`}>Fixed monthly rate</h3>
              <p className={`${styles.bennesto}`}>
                No nasty surprises or budgeting <br /> cancerns, just the same
                flat fee each <br /> month
              </p>
            </div>
          </Col>
          <Col xs={12} className="col-md-4">
            <div className={`${styles.padding3}`}>
              <img className={`${styles.wid2}`} src="block.svg" />
              <h3 className={`${styles.BenefitsH3}`}>No meetins</h3>
              <p className={`${styles.bennesto}`}>
                Communications is a-sync. This saves <br />
                everyone from fedius meetings and <br /> allows us to focus on
                the work.
              </p>
            </div>
          </Col>
          <Col xs={12} className="col-md-4">
            <div className={`${styles.padding3}`}>
              <img className={`${styles.wid2}`} src="figma.svg" />
              <h3 className={`${styles.BenefitsH3}`}>Flexible requests </h3>
              <p className={`${styles.bennesto}`}>
                Request designs in a way that suits <br />
                you, be it via Google Docs. Figma or <br />
                even a Loom video.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Benefits;
