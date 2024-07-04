import React from "react";
import styles from "../Pricing/pricing.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import WhiteB from "../WhiteButton/WhiteB";

function Pricing() {
  return (
    <div className={`${styles.color}`}>
      <Container>
        <Row>
          <Col>
            <div>
              <p className={`${styles.WhatP}`}>Pricing</p>
              <h3 id={`${styles.WhatH3}`} className={`${styles.WhatH3}`}>
                One simple price:
                <br />
                all kinds of design
              </h3>
            </div>
          </Col>
        </Row>
      </Container>
      <Container className={`${styles.center}`}>
        <Row>
          <Col xs={12} id={`${styles.color22}`} className="col-md-5">
            <div>
              <p id={`${styles.firstP}`} className={`${styles.firstP}`}>
                Design Subscription
              </p>
              <p className={`${styles.secondP}`}>$1,995/m</p>
              <h5 className={`${styles.thirdP}`}>$955/m</h5>
              <p className={`${styles.colorp}`}>
                $955 for first month, 1,995 thereafter. Use code <br />
                'LAUNC1000' at checkout{" "}
              </p>
              <div className={`${styles.oadding}`}>
                {" "}
                <button id={`${styles.button1}`}>Save recent work</button>
              </div>
              <div id={`${styles.width}`} className={`${styles.width}`}>
                <p className={`${styles.first}`}>Whats included:</p>
                <p className={`${styles.second}`}>Unlimited requests</p>
                <p className={`${styles.second}`}>Unlimited revisions</p>
                <p className={`${styles.second}`}>Unlimited brands</p>
                <p className={`${styles.second}`}>Pause or cancle anytime</p>
                <p className={`${styles.second}`}>
                  72 hour average turnaround time
                </p>
              </div>
            </div>
          </Col>
          <Col className="col-md-7">
            <div id={`${styles.color24}`}>
              <h3 className={`${styles.h3pricing}`}>Book a call</h3>
              <p className={`${styles.ppricng}`}>
                Learn mor about how Design Top works <br />
                and how it can benefit you.
              </p>
              <button id={`${styles.button}`}>Book a call</button>
            </div>
            <div id={`${styles.color23}`}>
              <h3 className={`${styles.h3pricing}`}>Refer & earn</h3>
              <p className={`${styles.ppricng}`}>
                Earn 5% monthly recurring communication for <br />
                each paying customer you refer.
              </p>
              <button id={`${styles.button}`}>Join now</button>
            </div>
          </Col>
        </Row>
      </Container>
      <Container id={`${styles.H5pricing}`} className={`${styles.padding}`}>
        <Row>
          <Col xs={12} className="col-md-3">
            <div className={`${styles.padding2}`}>
              <h5 id={`${styles.H5pricing}`} className={`${styles.H5pricing}`}>
                Compare plans
              </h5>
              <p className={`${styles.ppricing}`}>
                Find one that's right for you
              </p>
            </div>
            <div>
              <p className={`${styles.lisitng}`}>Encrypts included</p>
              <p className={`${styles.lisitng}`}>Decrypts incleded</p>
              <p className={`${styles.lisitng}`}>Cage runs included</p>
              <p className={`${styles.lisitng}`}>Multy users per team</p>
              <p className={`${styles.lisitng}`}>Multipl teams</p>
              <p className={`${styles.lisitng}`}>Email support</p>
              <p className={`${styles.lisitng}`}>Advanced Support Scope</p>
              <p className={`${styles.lisitng}`}>Deadecet Account Manager</p>
            </div>
          </Col>
          <Col xs={12} className="col-md-3">
            <div>
              <h5>Free</h5>
              <WhiteB title="Get Started" />
              <p className={`${styles.pricingP}`}>500 p/m</p>
              <p className={`${styles.pricingP}`}>500 p/m</p>
              <p className={`${styles.pricingP}`}>250 p/m</p>
            </div>
          </Col>
          <Col xs={12} className="col-md-3">
            <div>
              <h5>Pro</h5>
              <WhiteB title="Get Started" />
              <p className={`${styles.pricingP}`}>Unlimited</p>
              <p className={`${styles.pricingP}`}>5000 p/m</p>
              <p className={`${styles.pricingP}`}>2500 p/m</p>
            </div>
          </Col>
          <Col xs={12} className="col-md-3">
            <div>
              <h5>Enteprise</h5>
              <WhiteB title="Get Started" />
              <p className={`${styles.pricingP}`}>Unlimited</p>
              <p className={`${styles.pricingP}`}>Custom </p>
              <p className={`${styles.pricingP}`}>Custom</p>
              <p className={`${styles.paddings}`}>✔</p>
              <p className={`${styles.paddings}`}>✔</p>
              <p className={`${styles.paddings}`}>✔</p>
              <p className={`${styles.paddings}`}>✔</p>
              <p className={`${styles.paddings}`}>✔</p>
              <p className={`${styles.paddings}`}>✔</p>
              <p className={`${styles.paddings}`}>✔</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Pricing;
