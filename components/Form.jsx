"use client"
import React from 'react'
import Lottie from 'lottie-react'
import { useRef } from 'react'
import refreshAnim from "@/public/animations/refresh-transition.json"
import { useForm } from 'react-hook-form'


const Form = () => {

    const reenter = useRef()

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        setError
    } = useForm();

    const onSubmit = async () => {
        // simulating a loader for the time data is submitted to server

        let a = await fetch("http://localhost:8000", {
            method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data)
        });

        let res = a.text()
        console.log(data, res)

        //write logic for credentials checking
    }


    return (
        <div>

            {isSubmitting && <div className='loading'>Loading...</div>}

            <form className="mx-auto" action="" method="post" onSubmit={handleSubmit(onSubmit)}>

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

                        <button className="refresh border border-gray-600 rounded-lg"
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

                {errors.password && <div className='red'>{errors.password.message}</div>}

            </form>
        </div>
    )
}

export default Form

