import React from "react";
import Video from "./Video.jsx";
import GetRoute from "../../../../Container/server/index.js";
import Award_content from "./Award_content.jsx";

export default function Award1() {
  let content = {
    imgSrc: "/Award.jpeg",
    para: `We're thrilled to share that AARK Global Inc. recently took center stage at the UDAY STARTUP SUMMIT organized by FICCI FLO JK&L and SCHEAM India Holdings at Model Institute of Engineering and Technology, Jammu.

Our team showcased innovation and entrepreneurial spirit at its finest by setting up an engaging booth at the event. 

The highlight of the summit was AARK Global being awarded the "Best Upcoming Startup in Jammu & Kashmir" by the chief guest of the event, Sh. Rajeev Rai BHATNAGAR, Advisor to Hon’ble LG Jammu & Kashmir. Recognizing the outstanding efforts towards transforming the Jammu office into a vibrant hub for local talent and solidifying Jammu & Kashmir's position as a global Engineering and R&D hub. 

A big shoutout to everyone who visited our booth and engaged in insightful conversations! Your support fuels our passion for innovation, and we can't wait to continue this journey of growth and collaboration.

Thank you, UDAY STARTUP SUMMIT, FICCI FLO JK&L, Scheam India, and MIET, for providing a platform that fosters innovation and celebrates the spirit of entrepreneurship.
`,
  };
  return (
    <>
      <Video
        videoSource={GetRoute("/Awards.mp4")}
        heading="UDAY STARTUP SUMMIT"
      />
      <div>
        <Award_content {...content}/>
      </div>
    </>
  );
}
