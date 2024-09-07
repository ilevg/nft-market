'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation'
import MyButton from '@/components/common/MyButton';
import Link from 'next/link';
import Image from 'next/image';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);

        const response = await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        const data = await response.json();

        console.log(data)

        if (response.ok) {
            localStorage.setItem('token', data.token); // Сохранение токена в локальном хранилище
            router.push('/auth/profile'); // Перенаправление на страницу профиля
        } else {
            setError(data.error || 'Login failed');
        }
    }

    return (
        <div className='mx-5 md:mx-0 md:pr-20 mb-10 md:grid md:grid-cols-2 md:gap-10 items-center'>
            <Image
                src="/images/auth-sm.png"
                alt="ufo-img"
                width={150}
                height={110}
                className='w-full mb-10 md:mb-0 md:hidden'
            />
            <Image
                src="/images/auth-md.png"
                alt="ufo-img"
                width={150}
                height={110}
                className='w-full mb-10 md:mb-0 hidden md:block xl:hidden'
            />
            <Image
                src="/images/auth-xl.png"
                alt="ufo-img"
                width={150}
                height={110}
                className='w-full mb-10 md:mb-0 hidden xl:block'
            />

            <div className='flex flex-col gap-[30px] text-white w-full md:max-w-[460px]'>
                <h2 className='text-subtitle'>Log in</h2>
                <span>Welcome! Enter your details and start creating, collecting, and selling NFTs.</span>

                <form onSubmit={handleSubmit} className='flex flex-col gap-[15px] text-black'>
                    <input
                        className='h-[45px] rounded-full pl-12 placeholder:text-black'
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        id="email"
                        placeholder='Email Address'
                        required
                    />
                    <input
                        className='h-[45px] rounded-full pl-12 placeholder:text-black'
                        type="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        id="pass"
                        placeholder='Password'
                        required
                    />
                    <div className="w-full h-[45px] mx-auto md:mx-0">
                        <MyButton
                            text="Log in"
                            bg="#A259FF"
                            color="#FFFFFF"
                        />
                    </div>
                </form>

                <div>
                    <span>Do You have an account?</span>
                    <Link href="/auth/register" className='text-[#A259FF] ml-3 shadow-for-text'>Sign up</Link>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
