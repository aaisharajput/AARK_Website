// CoreValue.jsx

import Corevaluescard from './Corevaluescard';

export default function CoreValue() {
    const card1Props = {
        title: 'Mission',
        items: ['Holistic solution approach.', 'Transparent business transactions.', 'Work life alignment.'],
        imgSrc: '/mission.png',
    };

    const card2Props = {
        title: 'Vision',
        items: ['Be a partner of choice.', 'Be an employer of choice.', 'Provide high-end engineering and R&D services that fulfill client expectations.'],
        imgSrc: '/vision.png',
    };

    const card3Props = {
        title: 'Values',
        items: ['Integrity.', 'Client focused.', 'Collaboration.', 'Innovation.', 'Continuous learning.'],
        imgSrc: '/values.png',
    };

    return (
        <>
            <div className='container my-5 '>
                <div className='row '>
                    <div className='col-sm-12 col-md-6 col-lg-4 mb-3 d-flex justify-content-center'>
                        <Corevaluescard {...card1Props} />
                    </div>
                    <div className='col-sm-12 col-md-6 col-lg-4 mb-3 d-flex justify-content-center'>
                        <Corevaluescard {...card2Props} />
                    </div>
                    <div className='col-sm-12 col-md-6 col-lg-4 mb-3 d-flex justify-content-center'>
                        <Corevaluescard {...card3Props} />
                    </div>
                </div>
            </div>
        </>
    );
}
