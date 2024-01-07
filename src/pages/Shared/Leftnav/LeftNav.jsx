import React, { useEffect, useState } from 'react';

const LeftNav = () => {
    const [categories, setCategories] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/categories')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[]);
    return (
        <div>

        </div>
    );
};

export default LeftNav;