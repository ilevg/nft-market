import Image from "next/image"

const InfoCard = () => {
    return (
        <div className="flex md:flex-col justify-between md:justify-start items-center gap-5 md:gap-8 w-[100%] h-[140px] md:h-[335px] xl:h-[440px] bg-neutral-700 rounded-[20px] p-5">
            <Image
                src="/images/main-page-img/info-icon-1.webp"
                alt="Storefront"
                width={80}
                height={80}
                className=" rounded-full w-[80px] h-[80px] md:w-[130px] md:h-[130px] xl:w-[205px] xl:h-[205px]"
            />

            <div className="flex flex-col gap-2 md:items-center">
                <span className="xl:text-textBig">Setup Your wallet</span>
                <span className="text-zinc-500 text-[12px] xl:text-base md:text-center">Upload your work and setup your collection. Add a description, social links and floor price.</span>
            </div>
        </div>
    )
}

export default InfoCard
