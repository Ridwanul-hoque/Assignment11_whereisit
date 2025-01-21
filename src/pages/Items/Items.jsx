import React, { useEffect, useState } from 'react';
import ItemsCard from './ItemsCard';

const Items = () => {
    const [items, setItems] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/non-recovered')
            .then(res => res.json())
            .then(data => {
                setItems(data)

            })
    }, [])
    return (
        <div>
            <div className='grid gird-col-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                {
                    items.map(item => <ItemsCard key={item._id} item={item}></ItemsCard>)
                }
            </div>


        </div>
    );
};

export default Items;