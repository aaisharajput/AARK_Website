import React from "react";
import Video from "./Video.jsx";
import GetRoute from "../../../../Container/server/index.js";
import PressContent from "./PressContent.jsx";

export default function Successfulinauguration() {
  const contentProps = {
    imageSrc: "/press.jpg",
    para: `AARK Global Inc, a Silicon Valley-based Engineering and R&D services provider, is set to open Jammu's first-ever Engineering & Innovation Center.
    This marks a significant milestone for the company as it expands its operations globally.
    More importantly, it will provide global opportunities to local talent in the engineering space and put Jammu on the global map as an Engineering and R&D hub.
    "AARK Global is thrilled to set up its Headquarters in Jammu's blooming community and is looking forward to contributing to its prosperity. We are honoured and excited to be back to our roots in Jammu," said the founder of AARK Global Inc, Amit Kachroo, while addressing a press conference, here today.
    "This is a significant moment for us, and we look forward to building a strong relationship with the local commu-nity. We believe that Jammu has great potential, so we are committed to training and hiring its bright talent to work with us," he added.
    Kachroo informed that AARK Global's new office in Jammu will be fully equipped with state-of-the-art facilities, including world-class amenities, modern workstations, and more.
    The company's team of experienced professionals is looking forward to delivering innovative engineering solutions to its global clientele from its Jammu Centre, he added.
    "With its strong commitment to providing innovative engineering solutions, AARK Global is poised to become an Engineering and R&D services industry leader. The company is dedicated to positively impacting Jammu's community and is excited to begin this new chapter in its history," said Kachroo.`,
  };
  return (
    <>
      <Video
        videoSource={GetRoute("/PressPic.jpg")}
        heading="AARK Global Inc to open Engineering & Innovation Center in Jammu."
      />
      <div>
        <PressContent {...contentProps} />
      </div>
    </>
  );
}
