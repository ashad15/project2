import { useEffect } from 'react'; // ... existing code ...
import { useRouter } from 'next/router'; // ... existing code ...
import { useSelector } from 'react-redux';

export default function MainApp({}) {
    const loginInfo = useSelector((state) => state.init.loginInfo);
    const router = useRouter(); // {{ edit_1 }}

    useEffect(() => {
        if (loginInfo && Object.keys(loginInfo).length > 0) {
            router.push('/dashboard'); // {{ edit_2 }}
        } else {
            router.push('/login'); // {{ edit_3 }}
        }
    }, [JSON.stringify(loginInfo)]);

    return <div>asjad</div>;
}