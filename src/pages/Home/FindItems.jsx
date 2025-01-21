import React, { useEffect, useState } from 'react';
import FindItemsCard from './FindItemsCard';

const FindItems = () => {
    const [finditems, setFindItems] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/non-recovered/found')
            .then(res => res.json())
            .then(data => {
                setFindItems(data)

            })
    }, [])
    return (
        <div>
            <div className='grid gird-col-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                {
                    finditems.map(finditem => <FindItemsCard key={finditem._id} finditem={finditem}></FindItemsCard>)
                }
            </div>

        </div >
    );
};

export default FindItems;