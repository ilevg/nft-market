'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import MyButton from '@/components/common/MyButton';

const Page = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');
    const [name, setName] = useState('');
    const [error, setError] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (password !== passwordRepeat) {
            alert('Passwords do not match');
            return;
        }

        const response = await fetch('/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password, name }),
        });

        const data = await response.json();

        if (response.ok) {
            window.location.href = "/auth";
        } else {
            setError(data.error)
            console.error(data.error || 'Registration failed');
        }
    };

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
                <h2 className='text-subtitle'>Create account</h2>
                <span>Welcome! Enter your details and start creating, collecting, and selling NFTs.</span>

                <form onSubmit={handleSubmit} className='flex flex-col gap-[15px] text-black'>
                    <input
                        className='h-[45px] rounded-full pl-12 placeholder:text-black'
                        type="text"
                        name="name"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder='Name'
                        required
                    />
                    <input
                        className='h-[45px] rounded-full pl-12 placeholder:text-black'
                        type="email"
                        name="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder='Email Address'
                        required
                    />
                    <input
                        className='h-[45px] rounded-full pl-12 placeholder:text-black'
                        type="password"
                        name="pass"
                        id="pass"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder='Password'
                        required
                    />
                    <input
                        className='h-[45px] rounded-full pl-12 placeholder:text-black'
                        type="password"
                        name="repeatPass"
                        id="repeatPass"
                        value={passwordRepeat}
                        onChange={(e) => setPasswordRepeat(e.target.value)}
                        placeholder='Confirm Password'
                        required
                    />

                    <div className="w-full h-[45px] mx-auto md:mx-0">
                        <MyButton
                            text="Create account"
                            bg="#A259FF"
                            color="#FFFFFF"
                        />
                    </div>
                    <span className='text-center text-red-500'>
                        {
                            error && 'Registration failed'
                        }
                    </span>
                </form>
            </div>
        </div>
    );
};

export default Page;
