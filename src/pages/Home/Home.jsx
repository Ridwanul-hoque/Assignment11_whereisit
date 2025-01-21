import React from 'react';
import Banner from './Banner';
import Allitems from './Allitems';
import FindItems from './FindItems';
import LostItems from './LostItems';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Home = () => {


    return (
        <div>
            <Helmet>
                <title>Whereisit || Home</title>
            </Helmet>
            <Banner></Banner>

            <h1 className="text-4xl font-extrabold text-[#C57478] mb-4 mt-8 border-b-4 border-[#C57478] pb-2 transform transition-all duration-300 hover:text-[#F9F9F9] hover:bg-[#C57478] hover:bg-opacity-20 hover:scale-105 hover:shadow-lg">
                All Items
            </h1>
            <Allitems></Allitems>
            <h1 className="text-4xl font-extrabold text-[#C57478] mb-4 mt-8 border-b-4 border-[#C57478] pb-2 transform transition-all duration-300 hover:text-[#F9F9F9] hover:bg-[#C57478] hover:bg-opacity-20 hover:scale-105 hover:shadow-lg">
                Found Items
            </h1>
            <FindItems></FindItems>
            <h1 className="text-4xl font-extrabold text-[#C57478] mb-4 mt-8 border-b-4 border-[#C57478] pb-2 transform transition-all duration-300 hover:text-[#F9F9F9] hover:bg-[#C57478] hover:bg-opacity-20 hover:scale-105 hover:shadow-lg">
                Lost Items
            </h1>
            <LostItems></LostItems>

            <Link to='/seemore'><button className="btn bg-[#C57478] ml-4 my-4">SEE More</button></Link>
        </div>
    );
};

export default Home;