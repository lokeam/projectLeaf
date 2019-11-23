import React from "react";
import PropTypes from "prop-types";

const Masthead = () => (
    <div className="masthead__wrapper">
      <div className="masthead__hero">
        <h1>Masthead title</h1>
        <div className="masthead__copy">Masthead copy</div>
      </div>
      <div className="masthead__background"></div>
    </div>
);
 
Masthead.propTypes = {
    siteTitle: PropTypes.string,
  }
  
Masthead.defaultProps = {
  siteTitle: ``,
}

export default Masthead;
