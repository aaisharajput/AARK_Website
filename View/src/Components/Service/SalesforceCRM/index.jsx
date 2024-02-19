import Video from "../../Video/Video";
import Intro from "./intro";
import GetRoute from "../../../Container/server";
import SalesforceService from "./salesforceService";

export default function Salesforce() {
    return (
      <>
      <Video videoSource={GetRoute('/salesforce-crm.mp4')} heading="Salesforce CRM" />

    <div >
     <Intro/>
     <div className="container pb-5">

      <SalesforceService />
     </div>
    </div>
      </>
    )
  }
  