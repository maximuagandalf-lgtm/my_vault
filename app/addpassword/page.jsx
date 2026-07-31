"use client"
import React from 'react'
import { useRef, Suspense } from 'react'
import Lottie from 'lottie-react'
import crossAnim from "@/public/animations/white-cross-transition.json"
import Link from 'next/link'
import Form from '@/components/Form'
import {useSearchParams} from 'next/navigation'
//useSearchParams() hook is used to access the query parameters from the URL in Next.js. 

//we create a smaller component to read the URL so we can wrap it in Suspense(Next.js requirement) 
const Formcontainer = ()=>{
    const searchParams = useSearchParams();
    const editId = searchParams.get("editId")//accessing the value of editId from the URL

    return <Form editId = {editId} />
}

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

            {/*  We wrap this in Suspense because it reads the URL which can change dynamically */ }
            <Suspense fallback={<div className='loading rounded'>Loading...</div>}>
                <Formcontainer/>
            </Suspense>
            </div>
    </div>
  )
}

export default page
