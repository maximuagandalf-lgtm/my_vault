"use client"
import React from 'react'
import { useRef } from 'react'
import Lottie from 'lottie-react'
import copyAnim from "@/public/animations/copy-transition.json"
import eyeAnim from "@/public/animations/eye-transition.json"
import deleteAnim from "@/public/animations/delete-transition.json"
import editAnim from "@/public/animations/edit-transition.json"

//returns sitedomain to be used in favicon service unde img tag
function sitedomain(siteurl){
    try{
        return new URL(siteurl).hostname.replace("www.", '')
    } catch {
            return siteurl;
        }
}

const EntryCard = ({sitename, siteurl, username_email, password}) => {

    const copy = useRef()
    const eye = useRef()
    const del = useRef()
    const edit = useRef()

  return (

    <div className='container rounded-lg flex justify-between items-center border border-gray-600 mt-10 mx-4 sm:mx-8 md:mx-16 lg:mx-20 p-2 min-h-fit min-w-fit w-[90vw] h-[9vh]'>

        <div className="credentials flex items-center jusitfy-center gap-5">
            
            {/* img tag uses favicon service by google to fetch the respective icon of siteurl entered by user */}

            <img src={`https://www.google.com/s2/favicons?domain=${sitedomain(siteurl)}&sz=63`} alt={sitename} className='w-[30] h-[30] min-h-fit min-w-fit'/>

            <div className="textcredentials">
                <p className="accountname font-bold text-lg">{sitename}</p>

                <p className="usernamemail text-sm">{username_email}</p>
            </div>
            
        </div>

        <div className="options flex items-center justify-center gap-3">
            <button className="copy border border-gray-600 rounded-lg p-1 mx-auto hover:bg-gray-600 transition-colors duration-200 cursor-pointer" 
            onMouseEnter={()=> copy.current?.play()} 
            onMouseLeave={()=> copy.current?.stop()}
            >
                <Lottie
                animationData = {copyAnim}
                autoplay={false}
                loop={false}
                style={{height: 30, width: 30}}
                lottieRef={copy}
                />
            </button>
            <button className="see border border-gray-600 rounded-lg p-1 mx-auto hover:bg-gray-600 transition-colors duration-200 cursor-pointer"
            onMouseEnter={()=> eye.current?.play()}
            onMouseLeave={()=> eye.current?.stop()}
            >
                <Lottie
                animationData = {eyeAnim}
                autoplay={false}
                loop={false}
                style={{height: 30, width: 30}}
                lottieRef={eye}
                />
            </button>
            <button className="edit border border-gray-600 rounded-lg p-1 mx-auto hover:bg-gray-600 transition-colors duration-200 cursor-pointer"
            onMouseEnter={()=> edit.current?.play()}
            onMouseLeave={()=> edit.current?.stop()}
            >
                <Lottie
                animationData={editAnim}
                autoplay={false}
                loop={false}
                style={{height: 30, width: 30}}
                lottieRef={edit}
                />
            </button>
            <button className="delete border border-gray-600 rounded-lg p-1 mx-auto hover:bg-gray-600 transition-colors duration-200 cursor-pointer"
            onMouseEnter={()=> del.current?.play()}
            onMouseLeave={()=> del.current?.stop()}
            >
                <Lottie
                animationData={deleteAnim}
                autoplay={false}
                loop={false}
                style={{height: 30, width: 30}}
                lottieRef={del}
                />
            </button>
        </div>
    </div>
  )
}

export default EntryCard
