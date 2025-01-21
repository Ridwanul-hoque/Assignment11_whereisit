import React, { useState } from 'react';
// import "animate.css";
import { easeInOut, motion } from "framer-motion"
import { Link } from 'react-router-dom';





const Banner = () => {
    const [animationKey, setAnimationKey] = useState(0);
    const handleSlideChange = () => {

        // Increment key to re-trigger animations
        setAnimationKey((prevKey) => prevKey + 1);
    };

    return (
        <div>
            <div>
                <div className="carousel w-full h-96 overflow-hidden snap-none">
                    {/* Slide 1 */}
                    <div id="slide1" className="carousel-item relative w-full">
                        <img
                            src='https://i.ibb.co.com/bbLZF3w/images-5.jpg'
                            className="opacity-30 w-full h-[600px] object-cover"
                        />
                        <div
                            key={`${animationKey}-1`}
                            className="absolute inset-0 flex flex-col gap-8 items-center justify-center text-black"
                        >
                            <motion.h1
                                animate={{ x: 50 }}
                                transition={{ duration: 2, delay: 1, ease: easeInOut, repeat: Infinity }}
                                className="text-5xl font-bold">Lost Your Things!!</motion.h1>
                            <p className="text-2xl font-medium animate__animated animate__fadeInUp">
                                First ever Website To Help you Get your Things back to you
                            </p>
                            <div className="bg-orange-400 p-4 rounded-lg text-white animate__animated animate__zoomIn">
                                <Link to='/seemore'><button> See More</button></Link>
                            </div>
                        </div>
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide3" className="btn btn-circle" onClick={handleSlideChange}>
                                ❮
                            </a>
                            <a href="#slide2" className="btn btn-circle" onClick={handleSlideChange}>
                                ❯
                            </a>
                        </div>
                    </div>

                    {/* Slide 2 */}
                    <div id="slide2" className="carousel-item relative w-full">
                        <img
                            src='https://i.ibb.co.com/gPbSSVc/lost-found-magnifying-glass-search-260nw-1604580745.webp'
                            className="opacity-30 w-full h-[800px] object-cover"
                        />
                        <div
                            key={`${animationKey}-2`}
                            className="absolute inset-0 flex flex-col gap-8 items-center justify-center text-black"
                        >
                            <motion.h1
                                animate={{ x: 50 }}
                                transition={{ duration: 2, delay: 1, ease: easeInOut, repeat: Infinity }}
                                className="text-5xl font-bold">Found Someone else Belongins!!</motion.h1>

                            <p className="text-2xl font-medium animate__animated animate__fadeInUp">
                                Found Someone Else Belonging Put it in the Website to let owner find out
                            </p>
                            <div className="bg-orange-400 p-4 rounded-lg text-white animate__animated animate__zoomIn">
                                <Link to='/addItems'><button> Add Items </button></Link>
                            </div>
                        </div>
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide1" className="btn btn-circle" onClick={handleSlideChange}>
                                ❮
                            </a>
                            <a href="#slide3" className="btn btn-circle" onClick={handleSlideChange}>
                                ❯
                            </a>
                        </div>
                    </div>

                    {/* Slide 3 */}
                    <div id="slide3" className="carousel-item relative w-full">
                        <img
                            src='https://i.ibb.co.com/12s7g4q/the-etiquette-of-finding-and-returning-lost-items.webp'
                            className="opacity-30 w-full h-[800px] object-cover"
                        />
                        <div
                            key={`${animationKey}-3`}
                            className="absolute inset-0 flex flex-col gap-8 items-center justify-center text-black"
                        >
                            <motion.h1
                                animate={{ x: 50 }}
                                transition={{ duration: 2, delay: 1, ease: easeInOut, repeat: Infinity }}
                                className="text-5xl font-bold">Join the Community</motion.h1>

                            <p className="text-2xl font-medium animate__animated animate__fadeInUp">
                                Together, we can transform the lost into found and create meaningful connections!
                            </p>
                            <div className="bg-orange-400 p-4 rounded-lg text-white animate__animated animate__zoomIn">
                                <Link to='/register'><button> Join the Community </button></Link>
                            </div>
                        </div>
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide2" className="btn btn-circle" onClick={handleSlideChange}>
                                ❮
                            </a>
                            <a href="#slide1" className="btn btn-circle" onClick={handleSlideChange}>
                                ❯
                            </a>
                        </div>
                    </div>

                    {/* Slide 4 */}
                    
                </div>
            </div>



        </div>
    );
};

export default Banner;