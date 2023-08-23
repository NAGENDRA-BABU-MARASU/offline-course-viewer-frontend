import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const CourseDiv = styled.div`
  width: 40%;
  background-color: #FDDBDB;
  text-align: center;
  font-size: 2rem;
  margin: 20px;
  padding: 20px;
  filter: drop-shadow(0px 5px 12px #E3E3E3);
  border-radius: 10px;
`

const CourseWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 80%;
  padding: 20px;
  margin: 0 auto;
  flex-wrap: wrap;
`

function HomePage() {

  const [courses, setCourses] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:8080/media/getCourses/");
      const jsonResponse = await response.json();
      console.log(jsonResponse);
      setCourses(jsonResponse);
    }
    fetchData();
  }, [])

  return (
    <>
      <CourseWrap>
        {
          courses['courses']?.map((courseName, index) => {
            return (
              <CourseDiv key={index}>
                {courseName} <br></br>
                <Link to={`${courses['encodedCoursesNames'][index]}`} > CLICK </Link>
              </CourseDiv>
            )
          })
        }
      </CourseWrap>
    </>

  )
}

export default HomePage