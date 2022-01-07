import React from "react";
import styled from "styled-components";
import lab from "../media/med.mp4";

const BgVideo = () => {
  return (
    <VideoWrap>
      <video className="videoTag" autoPlay loop muted>
        <source src={lab} type="video/mp4" />
      </video>
    </VideoWrap>
  );
};

const VideoWrap = styled.div`
  position: absolute;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  object-fit: cover;
  z-index: -1;
`;

export default BgVideo;
