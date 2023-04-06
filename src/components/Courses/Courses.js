import React, { useEffect, useState } from "react";
import CourseCard from "../CourseCard/CourseCard";
import Grid from "../Grid/Grid";
import Header from "../Header/Header";
import Section from "../Section/Section";
import { courses as data } from "../../utils/data";
import Loader from "../Loader/Loader";
import {SearchBar} from "../../utils/style/generalStyles.js";

const Courses = () => {
  const [courses, setCourses] = useState(null);

  useEffect(() => {
    setTimeout(()=>{
      setCourses(data);
    },3000)
  }, []);

  // useEffect(() => {
  //   if(courses){
  //     setTimeout(()=>{
  //       setCourses(null);
  //     },2000)
  //   } else {
  //   setTimeout(()=>{
  //     setCourses(data);
  //   },2000)
  //   }
  // }, [courses]);

  const handleSearch = (e) => {
    const courseTitle = e.target.value.toLowerCase();
    const filteredCourses = data.filter((course) => course.title.toLowerCase().includes(courseTitle));
    setCourses(filteredCourses);
  }

  return (
    <>
      <Header isSecondary />
      <main>
        <Section title="All Courses" button={<SearchBar onChange={handleSearch} placeholder={"Search this box.."}/>}>
            {
            courses
              ? 
              <Grid>
              {courses.map((course) => (
                  <CourseCard
                    key={course.id}
                    title={course.title}
                    subtitle={course.subtitle}
                    imgSrc={course.img.src}
                    imgAlt={course.img.alt}
                    url={course.id}
                    id={course.id}
                  />
                ))
              }
              </Grid>
              : <Loader/>
            }
        </Section>
      </main>
    </>
  );
};

export default Courses;