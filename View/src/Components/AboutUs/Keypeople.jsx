import React from 'react'
import KeyPeopleCard from './KeyPeopleCard';
import style from './About.module.css'


export default function Keypeople() {

    const card1Props = {
        Name: 'Hemant Ajbani',
        Occ: 'CSM',
        imgSrc: '/Hemant.jpeg',
        linkedIn:"https://www.linkedin.com/in/hemantajbani/"
    };

    const card2Props = {
        Name: 'Ashok Thorali',
        Occ: 'CTO',
        imgSrc: '/Ashok.jpeg',
        linkedIn:"https://www.linkedin.com/in/ashok-thorali-85b998b/"
    };

    const card3Props = {
        Name: 'Sudhakar Chougale',
        Occ: 'Director of communications',
        imgSrc: '/sudhakar.png',
        linkedIn:"https://www.linkedin.com/in/sudhakar-r-chougale-78931a23/"
    };
    const card4Props = {
        Name: 'Vinay Sharma',
        Occ: 'Head of operations',
        imgSrc: '/vinay.png',
        linkedIn:"https://www.linkedin.com/in/vinay-sharma-8775871a/"
    };


    return (
        <>
           <div className='container my-5'>
            <h2 className={`text-center ${style.KeyPeople} title`}>Key People</h2>
                <div className='row mt-5 '>
                    <div className='col-lg-3 col-md-6 col-sm-6 mb-3 d-flex justify-content-center'>
                        <KeyPeopleCard {...card1Props} />
                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-6 mb-3 d-flex justify-content-center'>
                        <KeyPeopleCard {...card2Props} />
                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-6 mb-3 d-flex justify-content-center'>
                        <KeyPeopleCard {...card3Props} />
                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-6 mb-3 d-flex justify-content-center'>
                        <KeyPeopleCard {...card4Props} />
                    </div>
                </div>
            </div>
        </>
    )
}
