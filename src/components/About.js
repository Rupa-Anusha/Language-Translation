import React from 'react'

export default function About({mode}) {
  return (
    <div className='container px-2 my-5'>
      <h4 style={{color:mode==='light'?'black':'white'}}>This page is about working with the text given by user and as well translating it to other languages chosen by the customer</h4>
    </div>
  )
}
