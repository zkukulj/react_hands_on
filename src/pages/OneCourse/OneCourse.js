import React from 'react'
import Header from '../../components/Header/Header'
import SingleCourse from '../../components/SingleCourse/SingleCourse'
import { courses } from '../../utils/data'
import Section from '../../components/Section/Section'
import { useNavigate, useParams } from 'react-router-dom'
import {Button} from "../../utils/style/generalStyles.js";

const OneCourse = () => {
  const {id} = useParams();
  const course = courses.find((course) => course.id === Number(id));
  const navigate=useNavigate();

  return (
    <>
    <Header isSecondary />
    <Section isSecondary
              helperText={course.subtitle} 
              title={course.title} 
              button={<Button isOutline onClick={() => navigate(-1)}>Back</Button>}
              >
              <SingleCourse
                imgSrc={course.img.src}
                imgAlt={course.img.alt}
                key={course.id}
                id={course.id}
              >
               {course.content}
              </SingleCourse>
        </Section>
    </>
  )
}


export default OneCourse