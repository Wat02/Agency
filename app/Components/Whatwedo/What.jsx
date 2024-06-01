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
                scale no matter what <br />
                stage of business you are in:
                <span> branding & design</span> and{" "}
                <span>content & engagement.</span> This <br />
                allows us to create targeted work that covers your unique needs:
              </p>
              <div>
                <button className={`${styles.button22}`}>Landing page</button>
                <button className={`${styles.button22}`}>
                  Webflow website
                </button>
                <button className={`${styles.button22}`}>UX/UI</button>
                <button className={`${styles.button22}`}>Design system</button>
                <button className={`${styles.button22}`}>Branding</button>
              </div>
              <div className={`${styles.paddingRes}`}></div>
              <div className={`${styles.padding2}`}>
                <button className={`${styles.button22}`}>
                  Social media assets
                </button>
                <button className={`${styles.button22}`}>Graphic design</button>
                <button className={`${styles.button22}`}>Infographic</button>
                <button className={`${styles.button22}`}>Email templets</button>
                <button className={`${styles.button22}`}>&more..</button>
              </div>
              <button id={`${styles.button1}`}>Save recent work</button>
            </div>
          </Col>
        </Row>
      </Container>

      <Container className={`${styles.padding4}`}>
        <Row>
          <Col xs={12} className="col-md-6">
            <div className={`${styles.color22}`}>
              <h5 className={`${styles.H5}`}>Branding & design</h5>
              <p className={`${styles.p}`}>
                Whether you are looking for an app mockup within a few days or a
                branding package that will last you for years to come; we have
                you covered.
              </p>
              <img className={`${styles.img}`} src="/fiance.png" />
            </div>
          </Col>
          <Col className="col-md-6">
            <div className={`${styles.color22}`}>
              <h5 className={`${styles.H5}`}>Content & Engagement</h5>
              <p className={`${styles.p}`}>
                Be it social media assets, short form video content or email
                templates, we can help establish your digital presence via
                engaging content creation.
              </p>
              <img className={`${styles.img}`} src="/fiance.png" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default What;
