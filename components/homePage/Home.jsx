import React from 'react';
import { getUserName, getUserAge } from './helpers';
function Home(props) {
    return (
        <div>
            new home page
            {getUserName()}
            {getUserAge()}
        </div>
    );
}

export default Home;