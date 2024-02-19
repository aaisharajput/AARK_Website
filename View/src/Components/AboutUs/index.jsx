import React from 'react'
import Video from '../Video/Video.jsx'

import Location from '../Location/location.jsx'
import GetRoute from '../../Container/server/index.js'
import Whoweare from './Whoweare.jsx'
import CoreValue from './CoreValue.jsx'
import Message from './Message.jsx'
import Keypeople from './Keypeople.jsx'
import FAQ from './FAQ.jsx'
import Timeline from './Timeline/index.jsx'

export default function About() {
  return (
    <>
      <Video videoSource={GetRoute('/about-us.mp4')} heading='About Us' />
      
        <div  >
          <Whoweare />
          <CoreValue />
          <Message />
          <Timeline/>
          <Keypeople />
          <FAQ />
          
        </div>
      <Location heading=" OUR LOCATIONS AND GEOGRAPHIC REACH " para="While AARK Global has a strong presence in U.S.A, India, Australia, and Canada, our experience of working with clients extends beyond these geographies to include Latin America, Europe, and Far East Asia" />
    </>
  )
}
