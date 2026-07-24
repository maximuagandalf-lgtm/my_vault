"use client"
import React from 'react'
import Lottie from 'lottie-react'
import { useRef } from "react";
import searchAnim from "@/public/animations/search-icon-transition.json"

const SearchBar = () => {
    
    const search = useRef()

  return (
    <div>
      <div className="search border border-gray-600 mt-10 mx-4 sm:mx-8 md:mx-16 lg:mx-20 w-[90vw] min-w-fit rounded-md h-[5vh] flex items-center jusitfy-center bg-gray-900"
          onMouseEnter={() => search.current?.play()}
          onMouseLeave={() => search.current?.stop()}
        >
          <Lottie
            className="ml-2"
            animationData={searchAnim}
            style={{ height: 30, width: 30 }}
            lottieRef={search}
            autoplay={false}
            loop={false}
          />
          <input type="text" className="text-gray-300 w-full pl-2 h-full" placeholder="Search vault..." />
        </div>
    </div>
  )
}

export default SearchBar
