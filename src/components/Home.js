import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './common/Button';

export default function Home({title, handleAction}) {
    const handleLogout = () => {
        sessionStorage.removeItem('Auth Token');
        navigate('/login')
    }
    let navigate = useNavigate();
    useEffect(() => {
        let authToken = sessionStorage.getItem('Auth Token')

        if (authToken) {
            navigate('/home')
        }

        if(!authToken) {
            navigate('/login')
        }
    }, [])
    return (
        <div>
            Home Page
            <button onClick={handleLogout}>Log out</button>
        </div>
    )
}