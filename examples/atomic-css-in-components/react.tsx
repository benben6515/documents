import React, { useState } from "react"

// import global utils css string
import { globalSectionStyle } from "@/styles/global"

// utils css string
const localTitleStyle = "text-red-400 p-2"
const flexCenter = "flex justify-center items-center"

// TIPS: also you using atomic css like style components, but just put they in `className`.
const buttonStyle = `
  text-teal-400
  text-bold
  ${true ? flexCenter : ""}
`

const Component = () => (
  <div>
    {/* global css with some class names */}
    <section className='`${globalSectionStyle} bg-red-400 flex-col`'>
      {/* local css */}
      <h3 className='${localTitleStyle}'>Section 1</h3>
    </section>

    {/* global css with some class names */}
    <section className='`${globalSectionStyle} bg-red-400`'>
      {/* local css with some class names */}
      <h3 className='`${localTitleStyle} bg-blue-300`'>Section 2</h3>
      <button className='${buttonStyle}'></button>
    </section>
  </div>
)
