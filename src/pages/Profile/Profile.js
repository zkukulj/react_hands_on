import React from "react";
import { Button } from "../../utils/style/generalStyles";
import Header from "../../components/Header/Header";
import Section from "../../components/Section/Section";
import { useNavigate, useParams } from "react-router-dom";
import PropTypes from "prop-types";

const Profile = () => {
  const navigate = useNavigate();


  return (
    <>
      <Header isSecondary />
      <main>
        <Section
          actionContainer={
            <Button isOutline onClick={() => navigate(-1)}>
              Back
            </Button>
          }
        >
        </Section>
      </main>
    </>
  );
};
Profile.propTypes = {
  isLoggedIn: PropTypes.bool,
};
export default Profile;
