import React, { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar'
import { Outlet, useParams } from 'react-router'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';

function CoursePage() {
  let { courseName } = useParams();
  courseName = encodeURI(courseName);
  const [sidebarData, setSidebarData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const folderDataResponse = await fetch("http://localhost:8080/media/getFiles/" + courseName);
      const folderData = await folderDataResponse.json();


      let sidebarDataPopulated = folderData["folders"].map((folder, index) => {
        const fileName = folderData['encodedUrls'][index];
        const lastIndex = fileName.lastIndexOf("\\");
        const folderName = fileName.substring(lastIndex);
        const subNavs = [];
        for (let i = 0; i < folder['files'].length; i++) {
          const file = folder['files'][i];
          const encodedPath = folder['encodedUrls'][i];
          const lastIndex = file.lastIndexOf("\\");
          const fileName = file.substring(lastIndex);
          if (!fileName.endsWith(".srt") && !fileName.endsWith(".vtt")) {
            let icon = "";
            if (fileName.endsWith(".mp4")) {
              icon = <FaIcons.FaVideo />
            }
            else if (fileName.endsWith(".html")) {
              icon = <FaIcons.FaHtml5 />
            }

            subNavs.push({
              title: fileName,
              path: encodedPath,
              icon: icon
            })
          }
        }
        return {
          title: folderName,
          subNav: subNavs,
          icon: <AiIcons.AiOutlineFolder />

        }
      })

      setSidebarData(sidebarDataPopulated);
      
    }

    fetchData();
  }, [courseName])

  if (sidebarData) {

    console.log(sidebarData);
    return (
      <>
        <Sidebar sidebarData={sidebarData} />
        <Outlet />
      </>
    )

  }

}

export default CoursePage