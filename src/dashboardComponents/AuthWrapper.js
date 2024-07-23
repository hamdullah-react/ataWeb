// app/components/AuthWrapper.js
"use client"
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const AuthWrapper = ({ children }) => {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      const res = await fetch('/api/auth/check', { credentials: 'include' });
      if (res.ok) {
        setIsAuthenticated(true);
      } else {
        router.push('/login');
      }
    };
    checkAuth();
  }, [router]);

//   if (isAuthenticated === null) {
//     return <div>Loading...</div>
//   }

  return children;
};

export default AuthWrapper;
