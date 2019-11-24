import React from "react";
import PropTypes from "prop-types";
import styles from "./footer.scss";

const Footer = () => (
  <footer className="footer__wrapper">
    <div className="footer__copy">
      <p>Hand crafted by Ahn Ming Loke</p>
    </div>
    <ul className="footer__social">
      {/*map social items into <li className="footer__social__item">gitHub</li> */}
    </ul>
  </footer>
);

Footer.propTypes = {
  gitHub: PropTypes.string,
  linkedIn: PropTypes. string,
  cv: PropTypes.string
}

Footer.defaultProps = {
  gitHub: ``,
  linkedIn: ``,
  cv: ``
}

export default Footer;
