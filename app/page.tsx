'use client'

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {

    const isLoggedIn = !!localStorage.getItem('token');
    router.replace(isLoggedIn ? '/dashboard' : '/login');

  }, [router]);

  return null;
}
