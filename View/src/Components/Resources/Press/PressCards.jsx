import React from 'react';
import Card from './Card';
import { Link } from 'react-router-dom';

const cardContents = [
  {
    id: 1,
    date: 'Feb 23, 2023',
    heading: 'AARK Global Inc to open Engineering & Innovation Center in Jammu.',
    para: 'Founder of AARK Global Inc. Amit Kachroo adressing a press conference at jammu on Thrusday.',
    link: '/AARK-Global-Inc-to-open-Engineering&Innovation-Center-in-Jammu'},
  {
    id: 2,
    date: 'July 6, 2023',
    heading: 'AARK Global Inc, a leading Silicon Valley-based Engineering and R&D services provider, celebrated the successful inauguration of its Engineering & Innovation Headquarters in Jammu.',
    para: 'The inauguration ceremony marked a significant milestone for AARK Global Inc as it expands its operations to Jammu.',
    link: '/AARK-Global-Inc,a-leading-Silicon-Valley-based-Engineering-and-R&D-services-provider,celebrated-the-successful-inauguration-of-its-Engineering&Innovation-Headquarters-in-Jammu.'
  
   
  },
  {
    id: 3,
    date: 'Jan 28, 2024',
    heading: 'UDAY STARTUP SUMMIT ~ AWARD',
    para: 'Best Upcoming Startup in Jammu & Kashmir',
    link: '/UDAY-STARTUP-SUMMIT'
  },
  // {
  //   id: 4,
  //   date: '2024-02-05',
  //   heading: 'This is the Title of Card 1.',
  //   para: 'This is the content of Card 1.',
  //   link: '/card4'
  // },
  // {
  //   id: 5,
  //   date: '2024-02-05',
  //   heading: 'This is the Title of Card 1.',
  //   para: 'This is the content of Card 1.',
  //   link: '/card5'
  // },
];

const PressCards = () => {
  return (
    <div className="container py-5">
     {cardContents.reverse().map(content => (
        <Link to={content.link} key={content.id}>
          <Card {...content} />
        </Link>
      ))}
    </div>
  );
};

export default PressCards;
