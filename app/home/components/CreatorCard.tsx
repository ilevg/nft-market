import Image from "next/image"

const CreatorCard = () => {
    return (
        <div className="flex xl:flex-col justify-between items-center w-[100%] h-[100px] xl:h-[238px] bg-neutral-700 rounded-[20px] p-5">
            <div className="relative">
                <span className="absolute -top-2 -left-2 xl:-left-12 xxl:-left-24  bg-zinc-800 text-zinc-500 w-[30px] h-[30px] rounded-full text-center leading-[30px]">1</span>
                <Image
                    src="/images/main-page-img/AnyConv.com__Image Placeholder.webp"
                    alt="Storefront"
                    width={60}
                    height={60}
                    className=" rounded-full w-[60px] h-[60px] xl:w-[120px] xl:h-[120px]"
                />
            </div>

            <div className="xl:flex xl:flex-col xl:items-center">
                <span className="text-textBig">Keepitreal</span>
                <div className="mt-3">
                    <span className="text-zinc-500 mr-3">Total Sales:</span>
                    <span>34.53 ETH</span>
                </div>
            </div>
        </div>
    )
}

export default CreatorCard
