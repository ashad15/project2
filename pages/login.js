import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useRouter } from 'next/router'; // Import useRouter for navigation
import LoginInfo from '@/components/login/LoginInfo';
function Login() {
    // Get login info from Redux store
    const loginInfo = useSelector((state) => state.init.loginInfo);
    const router = useRouter(); // Access the Next.js router

    useEffect(() => {
        // Check if loginInfo exists and is not empty
        if (loginInfo && Object.keys(loginInfo).length > 0) {
            // Redirect to dashboard if user is logged in
            router.push('/dashboard'); // Navigate to dashboard
        }
    }, [loginInfo, router]); // Add router as dependency to avoid any stale closures

    return (
        <div>
            <LoginInfo />
        </div>
    );
}

export default Login;