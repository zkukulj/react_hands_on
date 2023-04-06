import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../utils/style/generalStyles";
import CourseCard from "../../components/CourseCard/CourseCard";
import Grid from "../../components/Grid/Grid";
import Header from "../../components/Header/Header";
import Landing from "../../components/Landing/Landing";
import Section from "../../components/Section/Section";
import Testimonial from "../../components/Testimonial/Testimonial";
import { courses as data } from "../../utils/data";

import TestimonialImg from "../../assets/images/testimonial.jpg";
import Loader from "../../components/Loader/Loader";

const Home = () => {
  const navigate = useNavigate();
  const [courses, setCourses] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setCourses(data.slice(0, 4));
    }, 1500);
  }, []);

  return (
    <>
      <Header />
      <main>
        <Landing />

        <Section
          title="Open your new possibilities"
          actionContainer={
            <Button isOutline onClick={() => navigate("/courses")}>
              More courses
            </Button>
          }
          helperText="Learn something new"
        >
          {courses ? (
            <Grid>
              {courses.map((course) => (
                <CourseCard
                  key={course.id}
                  imgSrc={course.img.src}
                  imgAlt={course.img.alt}
                  title={course.title}
                  subtitle={course.subtitle}
                  url={course.id}
                />
              ))}
            </Grid>
          ) : (
            <Loader />
          )}
        </Section>

        <Section isSecondary={true}>
          <Testimonial imgSrc={TestimonialImg} imgAlt="Testimonial žena">
            At the academy, I learned how to apply technology in practice.
            Frontend education was demanding, it required a lot of time. Upon
            completion, I got my first job as a developer.
          </Testimonial>
        </Section>
      </main>
    </>
  );
};

export default Home;
