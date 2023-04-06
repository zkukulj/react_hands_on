import React from "react";
import { Button } from "../../utils/style/generalStyles";
import Header from "../../components/Header/Header";
import Section from "../../components/Section/Section";
import SingleCourse from "../../components/SingleCourse/SingleCourse";
import { useNavigate, useParams } from "react-router-dom";
import { courses } from "../../utils/data";

const Course = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const course = courses.find((course) => course.id === Number(id));

  return (
    <>
      <Header isSecondary />
      <main>
        <Section
          title={course.title}
          actionContainer={
            <Button isOutline onClick={() => navigate(-1)}>
              Back
            </Button>
          }
          helperText={course.subtitle}
        >
          <SingleCourse imgSrc={course.img.src} imgAlt={course.img.alt}>
            {course.content}
          </SingleCourse>
        </Section>
      </main>
    </>
  );
};

export default Course;
