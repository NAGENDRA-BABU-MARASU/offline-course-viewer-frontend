import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import { Outlet, useParams } from 'react-router';

export function CoursePage() {
  let { courseName } = useParams();
  // console.log("courseName:", encodeURI(courseName));
  courseName = encodeURI(courseName);
  const [sidebarData, setSidebarData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      console.log(`http://localhost:8080/media/getFiles/${courseName}`);
      const folderDataResponse = await fetch("http://localhost:8080/media/getFiles/" + courseName, {
        mode: 'no-cors'
      });
      const folderData = await folderDataResponse.json();
      console.log(folderData);
      setSidebarData(folderData);
    };

    fetchData();
  }, []);

  return (
    <>
      <Sidebar sidebarData={sidebarData} />
      <Outlet />
      {/* <VideoPlayer /> */}
    </>
  );
}
