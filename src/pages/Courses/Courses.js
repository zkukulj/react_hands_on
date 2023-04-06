import React, { useEffect, useState } from "react";
import CourseCard from "../../components/CourseCard/CourseCard";
import Grid from "../../components/Grid/Grid";
import Header from "../../components/Header/Header";
import Loader from "../../components/Loader/Loader";
import { SearchBar } from "../../utils/style/generalStyles";
import Section from "../../components/Section/Section";
import { courses as data } from "../../utils/data";

const Courses = () => {
  const [courses, setCourses] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setCourses(data);
    }, 1000);
  }, []);

  const handleSearch = (e) => {
    const courseTitle = e.target.value.toLowerCase();

    const filteredCourses = data.filter((course) =>
      course.title.toLowerCase().includes(courseTitle)
    );

    setCourses(filteredCourses);
  };

  return (
    <>
      <Header isSecondary />
      <main>
        <Section
          title="All courses"
          actionContainer={
            <SearchBar placeholder={"Search courses"} onChange={handleSearch} />
          }
        >
          {courses ? (
            <Grid>
              {courses.map((course) => (
                <CourseCard
                  key={course.id}
                  title={course.title}
                  subtitle={course.subtitle}
                  imgSrc={course.img.src}
                  imgAlt={course.img.alt}
                  url={course.id}
                />
              ))}
            </Grid>
          ) : (
            <Loader />
          )}
        </Section>
      </main>
    </>
  );
};

export default Courses;
