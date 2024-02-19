import React from 'react';
import Card from './Card.jsx';
import { Link } from 'react-router-dom';

const blogsListData = [
  {
    id: 1,
    title: 'Beyond Plastic: Exploring the Latest Frontiers of Metal 3D Printing.',
    imageSrc: '/blog1.jpg',
    description: '3D printing is a process of converting a digital design into a three-dimensional tangible solid by laying thin layers of a material one over another. 3D printing...',
    linkTo: '/resources/blogs/Metal-3D-Printing',
  },
  {
    id: 2,
    title: 'Future-proofing Data: Advanced Strategies for Cyber Resilience in the Cloud',
    imageSrc: '/blog2.jpg',
    description: 'The adoption of advanced techniques for eliminating cyber threats in an organization, particularly in the context of cloud computing...',
    linkTo: '/resources/blogs/Future-proofingData:Advanced-Strategies-for-Cyber-Resilience-in-the-Cloud',
  },
  {
    id: 3,
    title: 'Homomorphic Encryption: Safeguarding Cloud Data Privacy and Integrity',
    imageSrc: '/blog3.jpg',
    description: 'Data security is becoming a top concern for everyone in the modern world, including people, corporations, and governments. The demand for strong.... ',
    linkTo: '/resources/blogs/Homomorphic-Encryption:Safeguarding-Cloud-Data-Privacy-and-Integrity',
  },
  {
    id: 4,
    title: 'Revolutionizing Product Development',
    imageSrc: '/blog4.jpg',
    description: 'In todays fast-paced industrial market, companies are under immense pressure to innovate and bring new products to market quickly....',
    linkTo: '/resources/blogs/Revolutionizing-Product-Development',
  },
  // {
  //   id: 5,
  //   title: 'LATEST TECHNOLOGIES IN 3D PRINTING',
  //   imageSrc: '/blog4.jpg',
  //   description: '3D printing is a process of converting a digital design into a three-dimensional tangible solid by laying thin layers of a material one over another.3D printing....',
  //   linkTo: '/resources/blogs/LATEST-TECHNOLOGIES-IN-3D-PRINTING',
  // },
  // {
  //   id: 6,
  //   title: 'The Rise of Low-Code Development Platforms',
  //   imageSrc: '/blog6.jpg',
  //   description: 'With the rise of digital transformation and the demand for fast, efficient software development, a new category of software....',
  //   linkTo: '/resources/blogs/The-Rise-of-Low-Code-Development-Platforms',
  // },

];

export default function BlogsList() {
  return (
    <>
      {blogsListData.map(blogData => (
        <Link to={blogData.linkTo} key={blogData.id}>

            <Card {...blogData} />
        </Link>
      ))}
    </>
  );
}
