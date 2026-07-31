"use client"
import React from 'react'
import { useRef,useState } from 'react'
import Lottie from 'lottie-react'
import copyAnim from "@/public/animations/copy-transition.json"
import eyeAnim from "@/public/animations/eye-transition.json"
import deleteAnim from "@/public/animations/delete-transition.json"
import editAnim from "@/public/animations/edit-transition.json"
import Link from 'next/link'

//returns sitedomain to be used in favicon service under img tag
function sitedomain(siteurl){
    try{
        return new URL(siteurl).hostname.replace("www.", '')
    } catch {
            return siteurl;
        }
}

const EntryCard = ({_id, sitename, siteurl, username_email, onDelete}) => {

    const copy = useRef()
    const eye = useRef()
    const del = useRef()
    const edit = useRef()

const handlecopy = async (id)=>{
    try{
        let res = await fetch(`http://localhost:8000/vault/${_id}`, {method: 'GET', headers:{'Content-Type': 'application/json'}});
        if(!res.ok){throw new error("Could not fetch password.")}
        let pass = await res.json();

        //this will copy password to clipboard
        await navigator.clipboard.writeText(pass.password);

             alert("Copied to clipboard")

    }catch(err){
        console.log(err.message)
    }
}

const handledelete = async(_id, sitename)=>{
         try{
            let a = await fetch('http://localhost:8000/vault', {method: 'DELETE', headers:{'Content-Type': 'application/json'}, body: JSON.stringify({_id, sitename})
        });

            onDelete(_id); //call the onDelete function to update the UI state after deletion

            let res = await a.json()
            console.log(res.message)

         }catch(err){
            console.log(err.message)
         }
    }

  return (

    <div className='container rounded-lg flex justify-between items-center border border-gray-600 mt-10 mx-4 sm:mx-8 md:mx-16 lg:mx-20 p-2 min-h-fit min-w-fit w-[90vw] h-[9vh]'>

        <div className="credentials flex items-center justify-center gap-5">
            
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
            onClick={()=> handlecopy(_id)}
            >
                <Lottie
                animationData = {copyAnim}
                autoplay={false}
                loop={false}
                style={{height: 30, width: 30}}
                lottieRef={copy}
                />
            </button>

            <Link href={`/showpassword/${_id}`}>
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
            </Link>

            <Link href={`/addpassword?editId=${_id}`}//passing the _id of the entry as a url if addpassword is opened
            >
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
            </Link>

            <button className="delete border border-gray-600 rounded-lg p-1 mx-auto hover:bg-gray-600 transition-colors duration-200 cursor-pointer"
            onMouseEnter={()=> del.current?.play()}
            onMouseLeave={()=> del.current?.stop()}
            onClick={()=> handledelete(_id,sitename)}
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
