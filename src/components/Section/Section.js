import React from "react";
import PropTypes from "prop-types";
import "./Section.scss";

const Section = ({
  helperText,
  title,
  actionContainer,
  isSecondary = false,
  children,
}) => {
  return (
    <section className={`Section ${isSecondary ? "Section_secondary" : ""}`}>
      <div className="Section-Inner">
        {helperText && <p className="Section-HelperText">{helperText}</p>}
        {(title || actionContainer) && (
          <div className="Section-Header">
            {title && <h2 className="Section-Title">{title}</h2>}
            {actionContainer}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

Section.propTypes = {
  helperText: PropTypes.string,
  title: PropTypes.string,
  actionContainer: PropTypes.node,
  isSecondary: PropTypes.bool,
  children: PropTypes.node,
};

export default Section;
