import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h1>Hola, I am from terms and condition page</h1>
            <p>Back to <Link to="/register">Register</Link></p>
        </div>
    );
};

export default Terms;