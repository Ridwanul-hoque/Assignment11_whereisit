import React, { useEffect, useState } from 'react';
import AllitmesCard from './AllitmesCard';

const Allitems = () => {
    const [allitems, setAllItems] = useState([])

    useEffect(() => {
        fetch('https://whereisit-server-side.vercel.app/non-recovered/full')
            .then(res => res.json())
            .then(data => {
                setAllItems(data)

            })
    }, [])

    
    return (
        <div>
            <div className='grid gird-col-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                {
                    allitems.map(allitem => <AllitmesCard key={allitem._id} allitem={allitem}></AllitmesCard>)
                }
            </div>


        </div>
    );
};

export default Allitems;