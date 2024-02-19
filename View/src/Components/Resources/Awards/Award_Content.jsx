import React from 'react'
import { Link } from 'react-router-dom';
import AwardCard from './AwardCard';

const cardContents = [
    {
      id: 1,
      imgSrc:'/Award.jpeg',
      date:'Jan 28, 2024',
      title:'UDAY STARTUP SUMMIT',
      link:'/resources/awards/UDAY-STARTUP-SUMMIT'
    },
      
    // {
    //     id: 2,
    //     imgSrc:'/',
    //     date:'',
    //     title:'',
    // },
    // {
    //   id: 3,
    //   imgSrc:'/',
    //   date:'',
    //   title:'',
    // },
    
  ];
export default function Award_Content() {
  return (
    
      <div className="container py-5">
     {cardContents.map(content => (
        <Link to={content.link} key={content.id}>
          <AwardCard {...content} />
        </Link>
      ))}
    </div>
  )
}
