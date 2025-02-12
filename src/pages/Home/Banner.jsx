import React, { useState } from 'react';
import { easeInOut, motion } from "framer-motion";
import { Link } from 'react-router-dom';

const Banner = () => {
    const [animationKey, setAnimationKey] = useState(0);

    const handleSlideChange = () => {
        // Increment key to re-trigger animations
        setAnimationKey((prevKey) => prevKey + 1);
    };

    return (
        <div className="relative w-full h-[60vh] sm:h-[50vh] md:h-[60vh] overflow-hidden">
            <div className="carousel w-full h-full snap-none">
                {/* Slide 1 */}
                <div id="slide1" className="carousel-item relative w-full h-full">
                    <img
                        src='https://i.ibb.co.com/MkgtdB6x/3298067.jpg'
                        alt="Lost Your Things"
                        className="w-full h-full object-cover opacity-80"
                    />
                    <div
                        key={`${animationKey}-1`}
                        className="absolute inset-0 flex flex-col gap-8 items-center justify-center text-center text-white bg-black bg-opacity-50"
                    >
                        <motion.h1
                            animate={{ x: 50 }}
                            transition={{ duration: 2, delay: 1, ease: easeInOut, repeat: Infinity }}
                            className="text-4xl sm:text-5xl font-bold"
                        >
                            Lost Your Things!!
                        </motion.h1>
                        <p className="text-xl sm:text-2xl font-medium animate__animated animate__fadeInUp">
                            First ever Website To Help you Get your Things back to you
                        </p>
                        <div className="bg-[#C57478] p-4 rounded-lg text-white animate__animated animate__zoomIn">
                            <Link to='/seemore'>
                                <button className="py-2 px-4 text-lg"> See More</button>
                            </Link>
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
                <div id="slide2" className="carousel-item relative w-full h-full">
                    <img
                        src='https://i.ibb.co.com/KcyZ23g4/47575.jpg'
                        alt="Found Belongings"
                        className="w-full h-[] object-cover opacity-80"
                    />
                    <div
                        key={`${animationKey}-2`}
                        className="absolute inset-0 flex flex-col gap-8 items-center justify-center text-center text-white bg-black bg-opacity-50"
                    >
                        <motion.h1
                            animate={{ x: 50 }}
                            transition={{ duration: 2, delay: 1, ease: easeInOut, repeat: Infinity }}
                            className="text-4xl sm:text-5xl font-bold"
                        >
                            Found Someone Else's Belongings!!
                        </motion.h1>
                        <p className="text-xl sm:text-2xl font-medium animate__animated animate__fadeInUp">
                            Found Someone Else's Belonging? Put it on the Website to Help the Owner.
                        </p>
                        <div className="bg-[#C57478] p-4 rounded-lg text-white animate__animated animate__zoomIn">
                            <Link to='/addItems'>
                                <button className="py-2 px-4 text-lg"> Add Items</button>
                            </Link>
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
                <div id="slide3" className="carousel-item relative w-full h-full">
                    <img
                        src='https://i.ibb.co.com/12s7g4q/the-etiquette-of-finding-and-returning-lost-items.webp'
                        alt="Join the Community"
                        className="w-full h-full object-cover opacity-80"
                    />
                    <div
                        key={`${animationKey}-3`}
                        className="absolute inset-0 flex flex-col gap-8 items-center justify-center text-center text-white bg-black bg-opacity-50"
                    >
                        <motion.h1
                            animate={{ x: 50 }}
                            transition={{ duration: 2, delay: 1, ease: easeInOut, repeat: Infinity }}
                            className="text-4xl sm:text-5xl font-bold"
                        >
                            Join the Community
                        </motion.h1>
                        <p className="text-xl sm:text-2xl font-medium animate__animated animate__fadeInUp">
                            Together, we can transform the lost into found and create meaningful connections!
                        </p>
                        <div className="bg-[#C57478] p-4 rounded-lg text-white animate__animated animate__zoomIn">
                            <Link to='/register'>
                                <button className="py-2 px-4 text-lg"> Join the Community</button>
                            </Link>
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
            </div>
        </div>
    );
};

export default Banner;
