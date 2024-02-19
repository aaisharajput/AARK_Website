import React from "react";
import Video from "../Video.jsx";
import GetRoute from "../../../../Container/server/index.js";
import Blogs_structure from "../Blogs-Content/Blogs_structure.jsx";

const content = {
  ul: [
    {
      highlightTitle: "Metal 3D Printing Advancements: ",
      highlightContent:
        "Metal 3D printing, utilizing technologies like SLM and DMLS, offers precise construction using varying metal powders. Innovations like the 3D Systems Pro X DMP 320 and Farsoon FS421M showcase enhanced build volumes and finer minimum thicknesses, catering to diverse industrial needs.",
    },
    {
      highlightTitle: "Self-Healing Materials Innovations: ",
      highlightContent:
        "Inspired by nature, self-healing materials like hydrogels and automobile coatings are revolutionizing infrastructure durability. Developments like the self-healing hydrogel from the University of Cambridge and the sunlight-activated automobile coating by the Korean Research Institute of Chemical Technology promise resilient infrastructure solutions.",
    },
    {
      highlightTitle: "Advancements in 3D Bioprinting: ",
      highlightContent:
        "3D Bioprinting utilizes living cells and bio-ink to fabricate intricate biological structures for medical applications. With developments like self-healing concrete from Worcester Polytechnic Institute and ongoing research in tissue engineering, this technology holds immense promise for regenerative medicine and drug development.",
    },
  ],
  heading1: "Introduction",
  para1: `3D printing is a process of converting a digital design into a three-dimensional tangible solid by laying thin layers of a material one over another. 3D printing became popular due to its accessibility, setup size and cost of operation. 3D printing is used in various industries, such as automotive, fashion, healthcare, and aerospace. Some of the latest technologies in 3D printing are discussed below.`,
  introimg: "/blog3img.png",
  heading2: "Latest technologies in 3D printing ",
  para2: "",
  ul2: [
    {
      title: "Metal 3D Printing",
      content:
        "This process involves melting metal powder to create a solid object layer by layer. This technology is categorized into two parts, which are SLM (selective laser melting) and DMLS (direct metal laser sintering). These technologies belong to the same family of powder bed fusion 3D printing. They share a lot of similarities, one of which is that both use lasers for melting metal powder, but the difference lies in the metal components used for construction. SLM involves using metal powders having the same melting point, whereas, in the case of DMLS, powders have a variable melting point. Some of the latest technologies in metal 3D printing are discussed below. ",
      subItems: [
        {
          title: "3D Systems Pro X DMP 320",
          content:
            "Having a build volume of 275 X 275 X 420 mm, this machine uses an alloy of nickel, steel, and titanium and can print a minimum thickness of 30 microns.",
        },
        {
          title: "Farsoon FS421M ",
          content:
            "Having a build volume of 425 X 425 X 420 and equipped with a 500 W fiber laser, this printer can print a minimum thickness of 20 microns.",
        },
        {
          title: "HBD E500",
          content:
            "This printer has a build volume of 430 X 520 X 520. It can be used for high-volume production and is recommended for medical, aerospace, and automobile applications.",
        },
        
      ],
    },
    {
      title: "Self Healing Materials",
      content:
        "As the name implies, self-healing materials can heal nano to micro-size cracks without compromising any of their physical and chemical properties. These materials are inspired by nature and can be used as covering for structures that go through daily wear and tear, such as bridges and dams. These materials are categorized into autonomic (doesn't require any external stimuli to start healing) and non-autonomic (requires external stimuli). Some of the advancements in self-healing materials are discussed below.",
      subItems: [
        {
          title: "Hydrogels ",
          content:
            "Researchers at the University of Cambridge have developed a self-healing hydrogel that can heal without the application of heat.",
        },
        {
          title: "Automobile coating ",
          content:
            "Developed by the Korean Research Institute of Chemical Technology, this coating uses near-infrared light from sunlight to heal in around 30 minutes.",
        },
        {
          title: "3D Bioprinting",
          content:
            "Developed by the Korean Research Institute of Chemical Technology, this coating uses near-infrared light from sunlight to heal in around 30 minutes.",
        },
        
      ],
    },
     {
      title: "3D Bioprinting",
      content:
        "This 3D printing technology uses biological components like living cells and nutrition to form natural 3D tissue-like structures. This technology can produce anything ranging from blood vessels and bone tissues to living tissues. 3D Bioprinting uses bio-ink, which is mainly composed of living cells in a carrier material such as collagen. Bioink is discharged from a needle to create layers. This technology is widely used for medical applications such as tissue engineering, drug development, and regenerative medicine therapies.",
     
    },
    {
      title: "Construction 3D Printing",
      content:
        "Construction 3D printing is a rapidly growing technology that has the potential to disrupt the entire construction industry as it can cut labor costs. This technology uses large 3D printers (up to 10 meters high) to extrude materials such as cement from the nozzle. This technology is used for the construction of homes and architectural features. Dozens of homes are 3D printed across the U.S. and Europe, and further research is underway to develop technology that will use materials from the moon and Mars for building habitats as a part of the future expedition.",
     
    },
  ],
  heading3: "Conclusion",
  para3: `3D printing is a rapidly evolving technology that has its roots spread into almost every sector, whether it is fashion, construction, or medicine. The future scope of 3D printing looks quite promising. Even though 3D printing has evolved to such heights as no individual might have imagined, it still requires unquestionable research to make it more economical, efficient, and a go-to option for designing.`,
  para4:`Embark on Your Journey Now!<br /><br />
  Experience the future of manufacturing and design with 3D printing. Don't miss out on the chance to be at the forefront of innovation!
  `,
  blogType: "Hardware Engineering Blog",
};

export default function Blog1() {
  return (
    <>
      <Video
        videoSource={GetRoute("/BlogPic.jpg")}
        heading="Beyond Plastic: Exploring the Latest Frontiers of Metal 3D Printing."
        blogType="Hardware Engineering Blog"
      />
      <div>
        <Blogs_structure {...content} />
      </div>
    </>
  );
}
