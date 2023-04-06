import React from 'react'
import "./LandingSection.scss"
import LandingImg from "../../assets/images/landing.jpg"
import {Button} from "../../utils/style/generalStyles.js";
import { Link } from "react-router-dom";

const LandingSection = () => {
  return (
    <>
    <section className="Landing">
        <figure className="Landing-Figure">
          <img
            src={LandingImg}
            alt="Landing visual"
            className="Landing-Image"
          />
        </figure>
        <div className="Landing-Overlay Landing-Overlay_left"></div>
        <div className="Landing-Overlay Landing-Overlay_right"></div>
        <div className="Landing-Content">
          <div className="Landing-ContentInner">
            <h1 className="Landing-Title">
              Learn what matters with Algebra
            </h1>
            <p className="Landing-Subtitle">
              Make a turnaround in your career or upgrade your current skill set
              with knowledge-based lessons from IT practice.
            </p>
            <p className="Landing-Subtitle">
              Ya sam yako pametan
            </p>
            <Link to="/course"><Button isLanding >Explore courses</Button></Link>
          </div>
        </div>
      </section>
    </>
  )
}


export default LandingSection