// app/auth/profile/page.tsx
'use client';

import { useSession } from 'next-auth/react';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation'; // Обновленный импорт

export default function ProfilePage() {
    const { data: session, status } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (status === 'unauthenticated') {
            router.push('/auth/profile');
        }
    }, [status, router]);

    if (status === 'loading') {
        return <p>Loading...</p>;
    }

    if (!session) {
        return <p>Waaaaaait, whaaatt!</p>;
    }

    return (
        <div>
            <h1>Welcome, {session.user?.name}</h1>
            <p>Email: {session.user?.email}</p>
        </div>
    );
}
