import React from 'react'
import Image from '../../Image/Image.jsx'
import GetRoute from '../../../Container/server/index.js'
import BlogsList from './BlogsList.jsx'


export default function index() {
  return (
    <>
      <Image ImageSource={GetRoute('/BlogMain.jpg')} heading='Blogs' />
      <div className='container py-5'>
      <BlogsList />
      </div>
    </>
  )
}
