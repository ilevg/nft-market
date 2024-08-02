import Link from "next/link"
import InfoCard from "../components/InfoCard"
import Image from "next/image"
import MyButton from "@/components/common/MyButton"

const Info = () => {
    return (
        <>
            <div className="mb-10 md:mb-20">
                <h2 className="text-subtitleSec md:text-subtitle">How it works</h2>
                <span className="flex mt-[10px] mb-[40px] md:mb-[60px]">Find out how to get started</span>
                <div className="flex flex-col gap-5 md:flex-row">
                    <InfoCard />
                    <InfoCard />
                    <InfoCard />
                </div>
            </div>

            <div className="rounded-[20px] mb-10 md:bg-neutral-700 md:flex md:flex-row md:justify-between md:gap-[30px] md:px-[30px] md:py-[40px] md:mb-20 xl:gap-20 xl:p-[60px]">
                <Image
                    src="/images/main-page-img/Cosmo.webp"
                    alt="Storefront"
                    width={200}
                    height={165}
                    className="w-full h-auto md:w-[300px] md:h-[280px] xl:w-[425px] xl:h-[310px] mr-2 mb-8 md:mb-0"
                />

                <div className="flex flex-col gap-5 ">
                    <h2 className="text-subtitleSec md:text-xl font-bold text-white xl:text-subtitle">Join our weekly digest</h2>
                    <span className="xl:text-textBig">Get exclusive promotions & updates straight to your inbox.</span>
                    <div className="relative xl:w-[420px] mt-3">
                        <input
                            type="text"
                            placeholder="Enter Your Email Address"
                            className="w-full h-[46px] xl:h-[60px] rounded-[20px] px-5 placeholder:text-black"
                        />
                        <div className="w-[100%] h-[46px] mt-5 xl:mt-0 xl:absolute xl:top-0 xl:right-0 xl:w-[178px] xl:h-[60px]">
                            <MyButton
                                href=''
                                iconSrc="/images/icons/EnvelopeSimple.webp"
                                alt='join us icon'
                                text={'Subscribe'}
                                bg={'#A259FF'}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Info
