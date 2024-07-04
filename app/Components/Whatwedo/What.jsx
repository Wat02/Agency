import React from "react";
import styles from "../Whatwedo/what.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function What() {
  return (
    <div className={`${styles.color}`}>
      <Container className={`${styles.padding}`}>
        <Row>
          <Col xs={12} className="col-md-12">
            <p className={`${styles.WhatP}`}>What we do</p>
            <h3 id={`${styles.WhatH3}`} className={`${styles.WhatH3}`}>
              From conception to launch
              <br />& anywhere in between
            </h3>
            <div>
              <p className={`${styles.WhatText}`}>
                We cover two main aspects of digital storytelling to help you
                scale no matter <br /> what stage of business you are in:
                <span> branding & design</span> and{" "}
                <span>content & engagement.</span> This <br />
                allows us to create targeted work that covers your unique needs:
              </p>
              <div>
                <button
                  id={`${styles.button22}`}
                  className={`${styles.button22}`}
                >
                  Landing page
                </button>
                <button
                  id={`${styles.button22}`}
                  className={`${styles.button22}`}
                >
                  Webflow website
                </button>
                <button
                  id={`${styles.button22}`}
                  className={`${styles.button22}`}
                >
                  UX/UI
                </button>
                <button
                  id={`${styles.button22}`}
                  className={`${styles.button22}`}
                >
                  Design system
                </button>
                <button
                  id={`${styles.button22}`}
                  className={`${styles.button22}`}
                >
                  Branding
                </button>
              </div>
              <div className={`${styles.paddingRes}`}></div>
              <div className={`${styles.padding2}`}>
                <button
                  id={`${styles.button22}`}
                  className={`${styles.button22}`}
                >
                  Social media assets
                </button>
                <button
                  id={`${styles.button22}`}
                  className={`${styles.button22}`}
                >
                  Graphic design
                </button>
                <button
                  id={`${styles.button22}`}
                  className={`${styles.button22}`}
                >
                  Infographic
                </button>
                <button
                  id={`${styles.button22}`}
                  className={`${styles.button22}`}
                >
                  Email templets
                </button>
                <button
                  id={`${styles.button22}`}
                  className={`${styles.button22}`}
                >
                  &more..
                </button>
              </div>
              <button id={`${styles.button1}`}>Save recent work</button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default What;
