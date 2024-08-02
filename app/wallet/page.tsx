import MyButton from '@/components/common/MyButton'
import Image from 'next/image'
import React from 'react'

const page = () => {
    return (
        <div className='mx-5 md:mx-0 md:pr-20 mb-10 md:grid md:grid-cols-2 md:gap-10 items-center'>
            <Image
                src="/images/wallet-sm.png"
                alt="ufo-img"
                width={150}
                height={110}
                className='w-full mb-10 md:mb-0 md:hidden'
            />
            <Image
                src="/images/wallet-md.png"
                alt="ufo-img"
                width={150}
                height={110}
                className='w-full mb-10 md:mb-0 hidden md:block xl:hidden'
            />
            <Image
                src="/images/wallet-xl.png"
                alt="ufo-img"
                width={150}
                height={110}
                className='w-full mb-10 md:mb-0 hidden xl:block'
            />

            <div className='flex flex-col gap-[30px] text-white w-full md:max-w-[320px] xl:max-w-[460px]'>
                <h2 className='text-subtitle'>Connect Wallet</h2>
                <span>Choose a wallet you want to connect. There are several wallet providers. </span>
                <form action="" className='flex flex-col gap-[15px] text-textBig'>
                    <div className="w-full h-[60px] xl:h-[72px] mx-auto md:mx-0 border-[2px] rounded-[20px] border-purple-500">
                        <MyButton
                            href="https://metamask.io/"
                            text="Metamask"
                            iconSrc={"/images/icons/Metamask.webp"}
                            alt={"icon"}
                            bg="#3B3B3B"
                            color="#FFFFFF"
                        />
                    </div>
                    <div className="w-full h-[60px] xl:h-[72px] mx-auto md:mx-0 border-[2px] rounded-[20px] border-purple-500">
                        <MyButton
                            href="https://walletconnect.com/"
                            text="Wallet Connect"
                            iconSrc={"/images/icons/walletconnect.webp"}
                            alt={"icon"}
                            bg="#3B3B3B"
                            color="#FFFFFF"
                        />
                    </div>
                    <div className="w-full h-[60px] xl:h-[72px] mx-auto md:mx-0 border-[2px] rounded-[20px] border-purple-500">
                        <MyButton
                            href="https://www.coinbase.com/"
                            text="Coinbase"
                            iconSrc={"/images/icons/coinbase.webp"}
                            alt={"icon"}
                            bg="#3B3B3B"
                            color="#FFFFFF"
                        />
                    </div>
                </form>
            </div>
        </div>

    )
}

export default page
