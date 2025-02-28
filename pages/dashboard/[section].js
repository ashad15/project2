import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import LoginInfo from '@/components/login/LoginInfo';
import DashboardPage from '@/components/dashboard/DashboardPage';
function Section() {
    const router = useRouter();
    useEffect(() => {
        console.log(router, router.query);
        const { section } = router.query;
        console.log(section);
        if (section === 'lens') {
            return <LoginInfo />;
        } else if (section !== 'lens') {
            return <DashboardPage />;
        }
    }, []);

    return <div>abc</div>;
}

export default Section;
