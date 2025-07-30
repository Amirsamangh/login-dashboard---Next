'use client'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import styles from '../../styles/dashboard.module.scss'

const DashboardPage = () => {
    const router = useRouter();

    useEffect(() => {
        if (!localStorage.getItem('loginToken')) {
            router.replace('/login');
        }
    }, [router]);

    const handleLogout = () => { localStorage.removeItem('loginToken'); router.push('/login'); };

    return (
        <div className={styles.container}>
            <h1>Dashboard</h1>
            <p>Welcome, Admin!</p>
            <button
                className={styles.button}
                onClick={handleLogout}>
                Logout
            </button>
        </div>
    );
}

export default DashboardPage;