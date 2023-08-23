import React, { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components';

const VideoDiv = styled.video`
  position: fixed;
  top: 10%;
  left: 25%;
  width: 70%;
`

function VideoPlayer({ key }) {
  const videoRef = useRef();
  const location = useLocation();
  const source = "http://localhost:8080/play/media/?vid_name=" + location.state?.videoUrl;

  useEffect(() => {
    videoRef.current?.load();
  }, [location.state?.videoUrl])

  if (location.state?.videoUrl && location.state?.videoUrl.endsWith(".mp4")) {
    return (
      <>
        <VideoDiv ref={videoRef} autoPlay playsInline controls>
          <source src={source} type="video/mp4" />
        </VideoDiv>
      </>
    )
  } else {
    return (
      <>
        <div>Select a video </div>
      </>
    )
  }
}

export default VideoPlayer