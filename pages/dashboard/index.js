// pages/dashboard/index.js
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

function DashboardIndex() {
    const router = useRouter();
    useEffect(() => {
        console.log('dashboard index');
        doIntialCheck();
    }, []);

    const doIntialCheck = async () => {
        //do checks
        proceedToSubRoutes();
    };

    const proceedToSubRoutes = () => {
        router.push('/dashboard/lens');
    };

    return <div>loading</div>;
}

export default DashboardIndex;
