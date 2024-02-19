import React from 'react'
import { Tooltip as ReactTooltip } from "react-tooltip";

function CarouselIndicator({number,tabId,tooltip}) {
    return (
        <>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={tabId} aria-current="true" className={tabId==0?"active":""} data-tooltip-id={`"my-tooltip-${tabId}`}>
                <h5 className='heading4'></h5>
                <i className='fa fa-bullseye'></i>
            </button>
            <ReactTooltip id={`"my-tooltip-${tabId}`} place="bottom" content={tooltip}/>
        </>
    )
}

export default CarouselIndicator
