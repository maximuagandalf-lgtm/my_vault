"use client"
import React, { useRef } from 'react'
import Lottie from 'lottie-react'
import githubAnim from "@/public/animations/github-transition.json"
import xAnim from "@/public/animations/x-transition.json"
import instagramAnim from "@/public/animations/instagram-transition.json"

const Footer = () => {
    const github = useRef()
    const x = useRef()
    const insta = useRef()

    return (
        <div className='flex items-center justify-center gap-45 border-t p-2 border-gray-600 relative mt-auto w-full h-[7vh]'>

            <div className="bottombar"><span className='text-gray-600'>AyushChauhan © 2026 VaultKey | All rights reserved.</span></div>

            <div className="socials flex justify-center items-center gap-4">
                <a href="https://github.com/maximuagandalf-lgtm">
                    <button className="rounded-full cursor-pointer"
                        onMouseEnter={() => github.current?.play()}
                        onMouseLeave={() => github.current?.stop()}
                    >
                        <Lottie
                            animationData={githubAnim}
                            style={{ height: 40, width: 40 }}
                            lottieRef={github}
                            autoplay={false}
                            loop={false}
                        />
                    </button>
                </a>

                <a href="https://x.com/AyushChauh2076">
                    <button className="rounded-full cursor-pointer"
                        onMouseEnter={() => x.current?.play()}
                        onMouseLeave={() => x.current?.stop()}
                    >
                        <Lottie animationData={xAnim}
                            style={{ height: 40, width: 40 }}
                            lottieRef={x}
                            autoplay={false}
                            loop={false}
                        />
                    </button>
                </a>

                <a href="https://www.instagram.com/ayush426884/">
                    <button className="rounded-full cursor-pointer"
                        onMouseEnter={() => insta.current?.play()}
                        onMouseLeave={() => insta.current?.stop()}
                    >
                        <Lottie animationData={instagramAnim}
                            style={{ height: 40, width: 40 }}
                            lottieRef={insta}
                            autoplay={false}
                            loop={false}
                        />
                    </button>
                </a>
            </div>

        </div>
    )
}

export default Footer
