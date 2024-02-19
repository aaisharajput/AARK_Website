import Video from "../../Video/Video"
import GetRoute from "../../../Container/server"
import Intro from "./Intro"
import SoftwareService from "./softwareServices"
export default function Software() {

    return (
      <>
      <Video  videoSource={GetRoute('/software-product-engineering.mp4')} heading=" Software Product Engineering" />
      
      <div >
        <Intro/>
        <div className="container pb-5">
        <SoftwareService />
        </div>
      </div>
     
      </>
    )
  }
  