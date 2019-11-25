import React from "react";
import PropTypes from "prop-types";
import styles from "./gallery.scss";

const Gallery = () => (
    <div className="gallery__wrapper">
      <div className="gallery__hero">
        <h2 className="gallery__eyebrow">Gallery Eyebrow</h2>
        <h3 className="gallery__heading">Gallery Heading</h3>
        <div className="gallery__copy">
          <p>Gallery copy here</p>
        </div>
      </div>
      <div className="gallery__project-list-wrapper">
        <ul className="gallery__project-list">
          <li className="gallery__project">Gallery Project 1</li>
          <li className="gallery__project">Gallery Project 2</li>
          <li className="gallery__project">Gallery Project 3</li>
          <li className="gallery__project">Gallery Project 4</li>
        </ul>
      </div>
    </div>
);
 
Gallery.propTypes = {
    siteTitle: PropTypes.string,
  }
  
Gallery.defaultProps = {
  siteTitle: ``,
}

export default Gallery;
