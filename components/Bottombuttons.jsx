"use client"
import React from 'react'
import Link from 'next/link'

const Bottombuttons = () => {

    const handleSaveEntry = ()=>{
        console.log("your password is saved")
    }


  return (
    <div className='container flex items-center justify-center'>
      <Link href="/home">
        <div className="cancel rounded-lg h-[5vh] w-[30vw] border-gray-600 border flex items-center p-2 justify-center  ml-4 mr-1 cursor-pointer hover:bg-gray-600 transition-colors duration-200 mx-auto min-w-fit min-h-fit my-8">
            Cancel
        </div>
       </Link>

      <div className=" flex items-center justify-center p-2 rounded-lg submit bg-[#4169E1] h-[5vh] w-1/2 mr-4 ml-1 cursor-pointer min-h-fit min-w-fit mx-auto"
      onClick={handleSaveEntry}
      >
        Save entry
      </div>
    </div>
  )
}

export default Bottombuttons