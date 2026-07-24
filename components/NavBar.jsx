"use client"
import React from 'react'

import { useRef } from 'react'
import Lottie from 'lottie-react'
import addAnimation from "@/public/animations/plus.json"
import lockAnimation from "@/public/animations/iconlogo.json"
import Link from 'next/link'


const NavBar = () => {
  const addref = useRef()
  const lockref = useRef()

  const handleaddpassword = () => {
    console.log("Password is added")
  }


  return (
    <div>
      <div className="navbar flex justify-between relative top-4 left-4 right-4">
        <Link href="/home">
          <button className='homebutton rounded-md flex items-center jusitfy-center cursor-pointer hover:bg-gray-800 duration-200 transition-colors p-2 min-h-fit min-w-fit'
            onMouseEnter={() => lockref.current?.play()}
            onMouseLeave={() => lockref.current?.stop()}
          >
            <Lottie
              lottieRef={lockref}
              animationData={lockAnimation} autoplay={false}
              loop={true}
              style={{ width: 40, height: 40 }}
            />
            <span className='title text-white p-2 text-lg font-semibold'>VaultKey</span></button>
        </Link>


        <Link href="/addpassword">
          <button className="addpassword rounded-lg flex items-center justify-center min-h-[4vh] min-w-fit w-[15vw] border-gray-600 border bg-black cursor-pointer hover:bg-gray-800 duration-200 transition-colors p-2 mr-8"
            onMouseEnter={() => addref.current?.play()}
            onMouseLeave={() => addref.current?.stop()}
            onClick={handleaddpassword}
          >
            <Lottie
              lottieRef={addref}
              animationData={addAnimation} autoplay={false}
              loop={true} style={{ width: 24, height: 24 }} />
            <p className='title text-white mx-auto my-auto'>Add Password</p>
          </button>
        </Link>
      </div>
    </div>
  )
}

export default NavBar
