import React from 'react';
import Banner from './Banner';
import Allitems from './Allitems';
import FindItems from './FindItems';
import LostItems from './LostItems';
import { Link } from 'react-router-dom';

const Home = () => {
    
    
    return (
        <div>
            <Banner></Banner>
            
            <h1>All Items</h1>
            <Allitems></Allitems>
            <h1>Found Items</h1>
            <FindItems></FindItems>
            <h1>Lost Items</h1>
            <LostItems></LostItems>

            <Link to='/seemore'><button className="btn bg-[#C57478] ml-4 my-4">SEE More</button></Link>
        </div>
    );
};

export default Home;