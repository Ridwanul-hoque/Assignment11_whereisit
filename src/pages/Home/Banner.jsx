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
                            src='https://i.ibb.co.com/HPfJx4d/top-down-aerial-view-professional-260nw-2506054649.jpg'
                            className="opacity-30 w-full h-[600px] object-cover"
                        />
                        <div
                            key={`${animationKey}-1`}
                            className="absolute inset-0 flex flex-col gap-8 items-center justify-center text-black"
                        >
                            <motion.h1
                                animate={{ x: 50 }}
                                transition={{ duration: 2, delay: 1, ease: easeInOut, repeat: Infinity }}
                                className="text-5xl font-bold">Latest <motion.span animate={{ color: ['#ecff33', '#33ffe3', '#ffa233'] }} transition={{ duration: 1.5, repeat: Infinity }}>Books</motion.span> For You!</motion.h1>
                            <p className="text-2xl font-medium animate__animated animate__fadeInUp">
                                Join millions in supporting innovative projects and making dreams a reality.
                            </p>
                            <div className="bg-orange-400 p-4 rounded-lg text-white animate__animated animate__zoomIn">
                                <Link to='/newCampaign'><button> Start Your Campaign</button></Link>
                            </div>
                        </div>
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide4" className="btn btn-circle" onClick={handleSlideChange}>
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
                            src='https://i.ibb.co.com/XJg7r9S/checklist-survey-assessment-quality-control-260nw-2193891539.jpg'
                            className="opacity-30 w-full h-[800px] object-cover"
                        />
                        <div
                            key={`${animationKey}-2`}
                            className="absolute inset-0 flex flex-col gap-8 items-center justify-center text-black"
                        >
                            <motion.h1
                                animate={{ x: 50 }}
                                transition={{ duration: 2, delay: 1, ease: easeInOut, repeat: Infinity }}
                                className="text-5xl font-bold">Latest <motion.span animate={{ color: ['#ecff33', '#33ffe3', '#ffa233'] }} transition={{ duration: 1.5, repeat: Infinity }}>Books</motion.span> For You!</motion.h1>

                            <p className="text-2xl font-medium animate__animated animate__fadeInUp">
                                Explore how Crowdcube has transformed ideas into impactful ventures.
                            </p>
                            <div className="bg-orange-400 p-4 rounded-lg text-white animate__animated animate__zoomIn">
                                <Link to='/allCampaign'><button> View Campaigns </button></Link>
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
                            src='https://i.ibb.co.com/yYfjTCB/good-job-asian-manager-business-260nw-2423837477.jpg'
                            className="opacity-30 w-full h-[800px] object-cover"
                        />
                        <div
                            key={`${animationKey}-3`}
                            className="absolute inset-0 flex flex-col gap-8 items-center justify-center text-black"
                        >
                            <motion.h1
                                animate={{ x: 50 }}
                                transition={{ duration: 2, delay: 1, ease: easeInOut, repeat: Infinity }}
                                className="text-5xl font-bold">Latest <motion.span animate={{ color: ['#ecff33', '#33ffe3', '#ffa233'] }} transition={{ duration: 1.5, repeat: Infinity }}>Books</motion.span> For You!</motion.h1>

                            <p className="text-2xl font-medium animate__animated animate__fadeInUp">
                                Support projects you believe in and be part of the change.
                            </p>
                            <div className="bg-orange-400 p-4 rounded-lg text-white animate__animated animate__zoomIn">
                                <Link to='/allCampaign'><button> Explore Campaigns </button></Link>
                            </div>
                        </div>
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide2" className="btn btn-circle" onClick={handleSlideChange}>
                                ❮
                            </a>
                            <a href="#slide4" className="btn btn-circle" onClick={handleSlideChange}>
                                ❯
                            </a>
                        </div>
                    </div>

                    {/* Slide 4 */}
                    <div id="slide4" className="carousel-item relative w-full">
                        <img
                            src=''
                            className="opacity-30 w-full h-[800px] object-cover"
                        />
                        <div
                            key={`${animationKey}-4`}
                            className="absolute inset-0 flex flex-col gap-8 items-center justify-center text-black"
                        >
                            <motion.h1
                                animate={{ x: 50 }}
                                transition={{ duration: 2, delay: 1, ease: easeInOut, repeat: Infinity }}
                                className="text-5xl font-bold">Latest <motion.span animate={{ color: ['#ecff33', '#33ffe3', '#ffa233'] }} transition={{ duration: 1.5, repeat: Infinity }}>Books</motion.span> For You!</motion.h1>
                            

                            <p className="text-2xl font-medium animate__animated animate__fadeInUp">
                                Contribute to the Drive!
                            </p>
                            <div className="bg-cyan-400 p-6 rounded-lg text-white animate__animated animate__zoomIn">
                                <button> Learn More</button>
                            </div>
                        </div>
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide3" className="btn btn-circle" onClick={handleSlideChange}>
                                ❮
                            </a>
                            <a href="#slide1" className="btn btn-circle" onClick={handleSlideChange}>
                                ❯
                            </a>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default Banner;