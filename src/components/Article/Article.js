import React from 'react'
import PropTypes from 'prop-types'
import "./Article.scss"

const Article = ({title,subtitle,imgSrc,imgAlt,children}) => {
  return (
    <article className="Course">
              <a href="#">
                <figure className="Course-Figure">
                  <img
                    src={imgSrc}
                    alt={imgAlt}
                    className="Course-Image"
                  />
                </figure>
                <h3 className="Course-Title">{title}</h3>
                <p className="Course-Subtitle">{subtitle}</p>
              </a>
            </article>
  )
}

Article.propTypes = {
    title:PropTypes.string,
    subtitle:PropTypes.string,
    imgSrc:PropTypes.string,
    imgAlt:PropTypes.string,
    children: PropTypes.node
}

export default Article