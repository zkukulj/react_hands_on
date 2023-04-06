import React from 'react'
import "./Button.scss"
import PropTypes from 'prop-types'

const Button = ({isSecondary=false,isLanding=false,isOutline=false,children,className}) => {

    let moClass="";

    switch(true){
        case isLanding:
            moClass="Button_landing"
        break;
        case isSecondary:
            moClass="Button_secondary"
        break;
        case isOutline:
            moClass="Button_outline"
        break;
        default:
            moClass="";

    }
  return (
    <button className={`Button ${moClass} ${className}`}>{children}</button>
  )
}

Button.propTypes = {
    children: PropTypes.node,
    isSecondary: PropTypes.bool,
    isLanding: PropTypes.bool,
    isOutline: PropTypes.bool,
    className:PropTypes.string
}

export default Button