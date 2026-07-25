"use client"
import React from 'react'
import Lottie from 'lottie-react'
import { useRef } from 'react'
import refreshAnim from "@/public/animations/refresh-transition.json"
import { useForm } from 'react-hook-form'
import Link from 'next/link'

const special_char = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_"];
const num = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

function checknum(passwordvalue){
    for (const e of passwordvalue) {
        if(num.includes(e)){
            return true;
        }
    }
    return false;
}

function checkspecialchar(passwordvalue){
    for (const e of passwordvalue) {
        if(special_char.includes(e)){
            return true;
        }
    }
    return false;
}



const Form = () => {
    const reenter = useRef()

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        watch,
        setError
    } = useForm();

    const passwordvalue = watch("password", "")
    const hasnum = checknum(passwordvalue)
    const hasspecialchar = checkspecialchar(passwordvalue);
    const isstrong = hasnum && hasspecialchar

    const onSubmit = async (data) => {
        let a = await fetch("http://localhost:8000/addpassword", {
            method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data)
        });

        let res = await a.text()
        console.log(data, res)

        if (!hasnum) {
            setError("password", { message: "password should have atleast one numeral" })
            return;
        }

        if (!hasspecialchar) {
            setError("password", { message: "password should have atleast one special character" })
            return;
        }

    }

    return (
        <div>
            <form className="mx-auto" onSubmit={handleSubmit(onSubmit)}>

                <div className="sitename relative p-2 ml-2.5">
                    <label htmlFor="sitename" className='text-sm text-gray-300'>Site Name</label>
                    <input id="sitename" type="text"
                        {...register("sitename", { required: true })} placeholder="eg:- Amazon" className='border rounded-lg border-gray-600 h-12 w-full px-3' />
                </div>

                <div className="siteurl relative p-2 ml-2.5">
                    <label htmlFor="siteurl" className='text-sm text-gray-300'>Site URL</label>
                    <input id="siteurl" type="text" {...register("siteurl", { required: true })} placeholder="https://amazon.com"
                        className='border rounded-lg border-gray-600 h-12 w-full px-3' />
                </div>

                <div className="username_email relative p-2 ml-2.5">
                    <label htmlFor="username_email" className='text-sm text-gray-300'>Username or email</label>
                    <input id="username_email" type="text" {...register("username_email", { required: true })}
                        placeholder="name@example.com" className='border rounded-lg border-gray-600 h-12 w-full px-3' />
                </div>

                <div className="password relative p-2 ml-2.5">
                    <label htmlFor="password" className='text-sm text-gray-300'>Password</label>
                    <div className="password flex items-center gap-2 shrink-0">
                        <input id="password" type="password"
                            {...register("password", { required: true, maxLength: { value: 50, message: "password should be smaller than 50 characters" } })}
                            placeholder="Enter a secure password" className='border rounded-lg border-gray-600 h-12 w-full flex-1 min-w-0 px-3' />

                        <button type="button" className="refresh border border-gray-600 rounded-lg"
                            onMouseEnter={() => reenter.current?.play()}
                            onMouseLeave={() => reenter.current?.stop()}
                        >
                            <Lottie
                                animationData={refreshAnim}
                                autoplay={false}
                                loop={true}
                                lottieRef={reenter}
                                style={{ width: 45, height: 45 }}
                            />
                        </button>
                    </div>
                </div>

                <div className='container flex items-center p-1 mx-auto w-[65vw] gap-1'>

                    <div className="indicator1 w-1/4 border h-2 rounded ${isstrong? 'bg-green-500' : bg-gray-600' }"></div>
                    <div className="indicator2  w-1/4 border h-2 rounded ${isstrong?'bg-green-500' :'bg-gray-600'}"></div>
                     <div className="indicator3  w-1/4 border h-2 rounded ${isstrong? 'bg-green-500': 'bg-gray-600'}"></div>
                     <div className="indicator4  w-1/4 border h-2 rounded ${isstrong? 'bg-green-500': 'bg-gray-600'}"></div>
                     
                     </div>

                <div className="indicatormessage">

                </div>

                {errors.password && <div className='red rounded'>{errors.password.message}</div>}

                <div className='container flex items-center justify-center'>

                    {isSubmitting && <div className='loading rounded'>Loading...</div>}

                    <Link href="/home">
                        <div className="cancel rounded-lg h-[5vh] w-[30vw] border-gray-600 border flex items-center p-2 justify-center  ml-4 mr-1 cursor-pointer hover:bg-gray-600 transition-colors duration-200 mx-auto min-w-fit min-h-fit my-8">
                            Cancel
                        </div>
                    </Link>

                    <button type="submit" className=" flex items-center justify-center p-2 rounded-lg submit bg-[#4169E1] h-[5vh] w-1/2 mr-4 ml-1 cursor-pointer min-h-fit min-w-fit mx-auto">
                        Save entry
                    </button>
                </div>

            </form>
        </div>
    )
}

export default Form