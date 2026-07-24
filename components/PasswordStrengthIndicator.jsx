"use client"
import React from 'react'

const PasswordStrengthIndicator = () => {
  return (
    <div className='container flex items-center p-1 mx-auto w-[65vw] gap-1'>
      <div className="indicator1 bg-gray-600 w-1/4 border h-2 rounded"></div>
      <div className="indicator2  bg-gray-600 w-1/4 border h-2 rounded"></div>
      <div className="indicator3  bg-gray-600 w-1/4 border h-2 rounded"></div>
      <div className="indicator4  bg-gray-600 w-1/4 border h-2 rounded"></div>

    </div>
  )
}

export default PasswordStrengthIndicator
