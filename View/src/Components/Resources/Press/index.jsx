import React from 'react'
import Image from '../../Image/Image.jsx'
import GetRoute from '../../../Container/server/index.js'
import PressCards from './PressCards.jsx'
import style from './style.module.css'

export default function index() {
  return (
    <>
        <Image ImageSource={GetRoute('/PressMain.jpg')} heading='Press Releases' />
        <div className={style.Bg}>
            <PressCards />
        </div>
    </>
  )
}
