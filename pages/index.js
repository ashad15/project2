import { useState, useEffect } from 'react';
import Home from '../components/homePage/Home';
import Login from '../components/login/Login';
import '../scss/index.scss';


export default function MainApp({ initialPage }) {
    const [currentPage, setCurrentPage] = useState(initialPage);

    useEffect(() => {
        const handlePopState = () => {
            setCurrentPage(window.location.pathname);
        };
        window.addEventListener('popstate', handlePopState);
        return () => window.removeEventListener('popstate', handlePopState);
    }, []);

    const navigate = (event, path) => {
        event.preventDefault();
        window.history.pushState({}, '', path);
        setCurrentPage(path);
    };

    const renderPage = () => {
        if (currentPage === '/') return <Home />;
        if (currentPage === '/login') return <Login />;
        if (currentPage === '/home') return <Home />;
        return <h1>404 - Page Not Found</h1>;
    };

    return (
        <div>
            <nav>
                <a href="/home" onClick={(e) => navigate(e, '/')}>
                    Home
                </a>
                <a href="/login" onClick={(e) => navigate(e, '/login')}>
                    Login
                </a>
            </nav>
            <div>{renderPage()}</div>
        </div>
    );
}

// Enable SSR for Initial Page Load
export async function getServerSideProps(context) {
    return {
        props: { initialPage: context.req.url }, // Get the initial page from the server
    };
}
