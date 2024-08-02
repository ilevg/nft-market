import MyButton from '@/components/common/MyButton'
import Image from 'next/image'
import React from 'react'

const page = () => {
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
                <span>Welcome! enter your details and start creating, collecting and selling NFTs.</span>
                <form action="" className='flex flex-col gap-[15px]'>
                    <input className='h-[45px] rounded-full pl-12 placeholder:text-black' type="text" name="" id="" placeholder='Username' />
                    <input className='h-[45px] rounded-full pl-12 placeholder:text-black' type="email" name="" id="" placeholder='Email Address' />
                    <input className='h-[45px] rounded-full pl-12 placeholder:text-black' type="password" name="" id="" placeholder='Password' />
                    <input className='h-[45px] rounded-full pl-12 placeholder:text-black' type="password" name="" id="" placeholder='Confirm Password' />

                    <div className="w-full h-[45px] mx-auto md:mx-0">
                        <MyButton
                            href="/marketplace"
                            text="Create account"
                            bg="#A259FF"
                            color="#FFFFFF"
                        />
                    </div>
                </form>
            </div>
        </div>

    )
}

export default page
