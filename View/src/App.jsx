import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Container/header";
import Home from "./Components/Home";
import About from "./Components/AboutUs";
import Service from "./Components/Service/ServiceOffers";
import Engagement from "./Components/EngagementModel";
import Career from "./Components/Carrers";
import ContactUs from "./Components/ContactUs";
import Footer from "./Components/Footer/Index";
import CloudPlatform from "./Components/Service/CloudPlatform";
import Cognitive from "./Components/Service/CognitiveSolutions";
import Hardware from "./Components/Service/HardwareProduct";
import Salesforce from "./Components/Service/SalesforceCRM";
import Software from "./Components/Service/SoftwareProduct";
import SemiConductor from "./Components/Service/SemiConductor";
import DotNetDeveloper from "./Components/Carrers/Viewjob-Pages/DotNetDeveloper";
import JavaDeveloper from './Components/Carrers/Viewjob-Pages/JavaDeveloper'
import LeadMechanicalEngineer from "./Components/Carrers/Viewjob-Pages/LeadMechanicalEngineer";
import PythonDeveloper from "./Components/Carrers/Viewjob-Pages/PythonDeveloper";
import SalesforceLead from "./Components/Carrers/Viewjob-Pages/SalesforceLead";
import UIDeveloper from "./Components/Carrers/Viewjob-Pages/UIDeveloper";
import Advisory from "./Components/Service/SalesforceCRM/Description/Advisory";
import Implementation from "./Components/Service/SalesforceCRM/Description/Implementation";
import Ongoing from "./Components/Service/SalesforceCRM/Description/Ongoing";
import Solution from "./Components/Service/SalesforceCRM/Description/Solution";
import Search from "./Container/search/index.jsx";
import NotFound from "./Components/NotFound404/index.jsx";
import Landing from "./Components/MOU/Landing.jsx";
import Culture from "./Components/Culture/Index.jsx";
import PressPage from './Components/Resources/Press/index.jsx';
import Blog from './Components/Resources/Blogs/index.jsx';
// import Awards from './Components/Resources/Awards/index.jsx';
import Blog1 from './Components/Resources/Blogs/Blogs-pages/Blog1.jsx';
import Blog2 from './Components/Resources/Blogs/Blogs-pages/Blog2.jsx';
import Blog3 from './Components/Resources/Blogs/Blogs-pages/Blog3.jsx';
import Blog4 from './Components/Resources/Blogs/Blogs-pages/Blog4.jsx';
import Press from './Components/Resources/Press/PressContent/Press.jsx';
import Press1 from './Components/Resources/Press/PressContent/Press1.jsx';
import Press2 from './Components/Resources/Press/PressContent/Press2.jsx';
// import Award1 from './Components/Resources/Awards/Awards-Data/Award1.jsx';
 
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
        {/* Public Layout with Header and Footer */}
        <Route path="*" element={<> <Header />
              <Routes>
                <Route index element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/about/culture" element={<Culture />} />
                <Route path="/service" element={<Service />} />
                <Route path="/engagement" element={<Engagement />} />
                <Route path="/careers" element={<Career />} />
                <Route path="/contact" element={<ContactUs />} />
                <Route path="/service/cloud-platform-engineering" element={<CloudPlatform />} />
                <Route path="/service/cognitive-solution" element={<Cognitive />} />
                <Route path="/service/hardware-product-engineering" element={<Hardware />} />
                <Route path="/service/salesforce-crm" element={<Salesforce />} />
                <Route path="/service/software-product-engineering" element={<Software />} />
                <Route path="/service/SemiConductor" element={<SemiConductor />} />
                <Route path="/careers/net-developer" element={<DotNetDeveloper />} />
                <Route path="/careers/java-developer" element={<JavaDeveloper />} />
                <Route path="/careers/lead-mechanical-engineer" element={<LeadMechanicalEngineer />} />
                <Route path="/careers/python-developer" element={<PythonDeveloper />} />
                <Route path="/careers/salesforce-lead" element={<SalesforceLead />} />
                <Route path="/careers/sr-ui-developer" element={<UIDeveloper />} />
                <Route path="/service/advisory-service" element={<Advisory />} />
                <Route path="/service/solution-finalization" element={<Solution />} />
                <Route path="/service/implementation" element={<Implementation />} />
                <Route path="/service/ongoing-support" element={<Ongoing />} />
                <Route path="/search/:id" element={<Search />} />
                <Route path="*" element={<NotFound />} />
                <Route path="/resources/press-releases" element={<PressPage />} />
                <Route path="/resources/blogs" element={<Blog />} />
                {/* <Route path="/resources/awards" element={<Awards />} /> */}
                {/* <Route path="/resources/awards/UDAY-STARTUP-SUMMIT" element={<Award1 />} /> */}
                <Route path="/resources/blogs/Metal-3D-Printing" element={<Blog1 />} />
                <Route path="/resources/blogs/Future-proofingData:Advanced-Strategies-for-Cyber-Resilience-in-the-Cloud" element={<Blog2 />} />
                <Route path="/resources/blogs/Homomorphic-Encryption:Safeguarding-Cloud-Data-Privacy-and-Integrity" element={<Blog3 />} />
                <Route path="/resources/blogs/Revolutionizing-Product-Development" element={<Blog4 />} />
                <Route path="/AARK-Global-Inc-to-open-Engineering&Innovation-Center-in-Jammu" element={<Press />} />
                <Route path="/AARK-Global-Inc,a-leading-Silicon-Valley-based-Engineering-and-R&D-services-provider,celebrated-the-successful-inauguration-of-its-Engineering&Innovation-Headquarters-in-Jammu." element={<Press1 />} />
                <Route path="/UDAY-STARTUP-SUMMIT" element={<Press2 />} />

              </Routes>
              <Footer />
            </>
          }
        />
 
         <Route path="/MOU/*" element={
           <Routes>
             <Route index element={<Landing />} />
           </Routes>
         }
       />
        </Routes>
      </BrowserRouter>
    </>
  );
}
 
export default App;