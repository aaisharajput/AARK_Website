// Corevaluescard.jsx

import React from 'react';
import style from './About.module.css';
import GetRoute from '../../Container/server';

function Corevaluescard({ title, items, imgSrc }) {
    return (

        <div className={`mt-3 mb-4 ${style.card}`}>
            <div className={style.cardinner}>
                <div className={style.cardfront}>
                    <img src={GetRoute(imgSrc)} alt="" />
                    <p className='mt-4 subTitle2'>{title}</p>
                </div>
                <div className={style.cardback}>
                    <ul className='para1'>
                        {items.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>

    );
}

export default Corevaluescard;
