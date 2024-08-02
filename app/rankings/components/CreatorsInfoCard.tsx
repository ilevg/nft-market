"use client"

import Image from "next/image"

const CreatorsInfoCard = () => {
    return (
        <div className="flex justify-between items-center w-[100%] h-[50px] md:h-[60px] xl:h-[85px] bg-neutral-700 rounded-[20px] p-5 text-[12px]">
            <div className="flex gap-4 items-center md:w-[30%]">
                <span className="bg-zinc-800 text-zinc-500 w-[30px] h-[30px] rounded-full text-center leading-[30px]">1</span>

                <Image
                    src="/images/main-page-img/AnyConv.com__Image Placeholder.webp"
                    alt="Storefront"
                    width={24}
                    height={24}
                    className=" rounded-full w-[24px] h-[24px] md:w-[40px] md:h-[40px] xl:w-[60px] xl:h-[60px]"
                />
                <span className="text-[12px] xl:text-textBig">Keepitreal Ase</span>
            </div>


            <span className="text-green-600 hidden md:block">+1.41%</span>
            <span className="hidden xl:block">320</span>


            <span>34.53 ETH</span>
        </div>
    )
}

export default CreatorsInfoCard
