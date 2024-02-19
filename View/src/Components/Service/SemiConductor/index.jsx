import React from 'react'
import Image from "../../Image/Image.jsx"
import GetRoute from "../../../Container/server"
import Section from './Section.jsx'




export default function SemiConductor() {
  return (
    <>
      <Image  ImageSource={GetRoute('/SemiconPic.png')} heading=" Semi-Conductor" />
      <Section />
    </>
  )
}
