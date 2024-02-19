import React from "react";
import Video from "./Video.jsx";
import GetRoute from "../../../../Container/server/index.js";
import PressContent from "./PressContent.jsx";

export default function Press1() {
  const contentProps = {
    imageSrc: "/Press1.jpeg",
    para: `The inauguration ceremony marked a significant milestone for AARK Global Inc as it expands its operations to Jammu, contributing to the region's prosperity and positioning it as a growing Engineering and R&D hub. The company is delighted to establish its headquarters in Jammu's vibrant community and is committed to nurturing local talent by creating employment opportunities and fostering innovation. Founder and CEO of AARK Global Inc, Amit Kachroo, expressed his enthusiasm, stating, "We are humbled and thrilled to return to our roots in Jammu. This is a defining moment for us, and we are excited to forge a strong bond with the local community. Recognizing Jammu's immense potential, we are dedicated to training and employing the brightest talent from the region." AARK Global Inc's new office in Jammu is fully equipped with state-of-the-art facilities, fostering a collaborative environment for the team to excel. With its unwavering dedication to providing cutting-edge engineering solutions, the company aims to emerge as an industry leader in Engineering and R&D services. The inauguration ceremony showcased AARK Global Inc's commitment to Jammu's development and highlighted the region's potential as a thriving technology and innovation hub. The company's presence in Jammu will not only fuel economic growth but also create a platform for collaboration and knowledge exchange among industry stakeholders.`,
  };
  return (
    <>
      <Video
        videoSource={GetRoute("/PressPic.jpg")}
        heading="AARK Global Inc, a leading Silicon Valley-based Engineering and R&D services provider, celebrated the successful inauguration of its Engineering & Innovation Headquarters in Jammu."
      />
      <div>
        <PressContent {...contentProps} />
      </div>
    </>
  );
}
