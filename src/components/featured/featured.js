import React from "react";
import PropTypes from "prop-types";
import styles from "./featured.scss";

const Featured = () => (
  <div className="featured__wrapper">
    <div className="featured__background">Featured background here</div>
    <div className="featured__hero grid">
      <div className="featured__eyebrow">Featured eyebrow</div>
      <div className="featured__heading">Featured heading</div>
      <div className="featured__body">Featured body</div>
    </div>
  </div>
);

Featured.propTypes = {
  title: PropTypes.string
}

Featured.defaultProps = {
  titles: ``
}

export default Featured;
