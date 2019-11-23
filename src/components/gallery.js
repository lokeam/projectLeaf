import React from "react";
import PropTypes from "prop-types";

const Gallery = () => (
    <div className="Gallery__wrapper"></div>
);
 
Gallery.propTypes = {
    siteTitle: PropTypes.string,
  }
  
Gallery.defaultProps = {
  siteTitle: ``,
}

export default Gallery;
