import React from "react";
import PropTypes from "prop-types";
import "./CourseCard.scss";
import { Link } from "react-router-dom";

const CourseCard = ({ imgSrc, imgAlt, title, subtitle, url }) => {
  return (
    <article className="CourseCard">
      <Link to={`/course/${url}`}>
        <figure className="CourseCard-Figure">
          <img src={imgSrc} alt={imgAlt} className="CourseCard-Image" />
        </figure>
        <h3 className="CourseCard-Title">{title}</h3>
        <p className="CourseCard-Subtitle">{subtitle}</p>
      </Link>
    </article>
  );
};

CourseCard.propTypes = {
  imgSrc: PropTypes.string,
  imgAlt: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  url: PropTypes.number,
};

export default CourseCard;
