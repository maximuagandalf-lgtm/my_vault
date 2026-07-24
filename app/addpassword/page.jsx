"use client"
import React from 'react'
import { useRef } from 'react'
import Lottie from 'lottie-react'
import crossAnim from "@/public/animations/white-cross-transition.json"
import Link from 'next/link'
import Form from '@/components/Form'
import Bottombuttons from '@/components/Bottombuttons'
import PasswordStrengthIndicator from '@/components/PasswordStrengthIndicator'

const page = () => {

    const cross = useRef()

  return (
    <div>

        <div className="container w-[70vw] h-68vh] relative top-15 mx-auto my-auto p-2 bg-[#2C2C2A] rounded-2xl">
            <div className="title flex justify-between items-center jusitfy-center mx-auto p-5">
                <span className='font-extrabold'>Add Password</span>

                <Link href="/home">
                <button className="cross rounded-lg border border-gray-600 p-2 h-9 w-9 flex items-center cursor-pointer">
                    <Lottie 
                    animationData={crossAnim}
                    autoplay={false}
                    loop={true}
                    lottieRef={cross}
                    style={{height:20, width:20}}
                    onMouseEnter={()=> cross.current?.play()}
                    onMouseLeave={()=> cross.current?.stop()}
                    />
                </button>
                </Link>

                
            </div>

            <Form></Form>

            <PasswordStrengthIndicator></PasswordStrengthIndicator>

            <Bottombuttons></Bottombuttons>

            </div>
    </div>
  )
}

export default page
