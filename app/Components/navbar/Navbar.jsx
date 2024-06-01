import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "next/image";
import styles from "../navbar/navbar.module.css";

function navbar() {
  return (
    <div className={`${styles.color}`}>
      <div className={`${styles.container}`}>
        <div className={`${styles.horizontalscrollingitems}`}>
          <div className={`${styles.horizontalscrollingitemsitem}`}>
            <p className={`${styles.NavbarP}`}>
              Web App . Design System . Email Templates . Branding . Social
              Media Marketing . Graphic . Web Design
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default navbar;
