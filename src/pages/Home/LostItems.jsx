import React, { useEffect, useState } from 'react';
import LostItemsCard from './LostItemsCard';

const LostItems = () => {
    const [lostitems, setLostItems] = useState([])

    useEffect(() => {
        fetch('https://whereisit-server-side.vercel.app/non-recovered/lost')
            .then(res => res.json())
            .then(data => {
                setLostItems(data)

            })
    }, [])

    
    return (
        <div>
            <div className='grid gird-col-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                {
                    lostitems.map(lostitem => <LostItemsCard key={lostitem._id} lostitem={lostitem}></LostItemsCard>)
                }
            </div>
        </div>
    );
};

export default LostItems;