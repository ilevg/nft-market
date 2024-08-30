"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import { signIn } from 'next-auth/react'
import Link from 'next/link'
import MyButton from '@/components/common/MyButton'

const Page = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        const result = await signIn("credential", {
            redirect: false,
            email,
            password,
        })

        if (result?.error) {
            console.error(result.error)
        } else {
            window.location.href = '/auth/profile'
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

                <div className="">
                    <span>Do You have an account?</span>
                    <Link href="/auth/register" className='text-[#A259FF] ml-3 shadow-for-text'>Sing up</Link>
                </div>

                {/* auth GitHub */}
                {/* <div className='flex flex-col gap-[15px]'>
                    <span>Or sign up with</span>
                    <button
                        onClick={() => signIn('github')}
                        className='h-[45px] rounded-full pl-12 placeholder:text-black bg-gray-800 text-white flex items-center justify-center'
                    >
                        Sign up with GitHub
                    </button>
                </div> */}
            </div>
        </div>
    )
}

export default Page
