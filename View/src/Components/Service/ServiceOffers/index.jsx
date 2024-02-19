import Title from "../Content/title";
import Video from "../../Video/Video";
import Intro from "./intro";
import Offers from "./offers";
import GetRoute from "../../../Container/server";

export default function Service() {
  return (
    <>
      <Video
        videoSource={GetRoute("/serving-offering.mp4")}
        heading="Service Offerings"
      />

      <div>
        <Intro />

        <div className="container pb-5">
          <Title title="SERVICES WE PROVIDE" />
          <Offers color="#fff" />
        </div>
      </div>
    </>
  );
}
