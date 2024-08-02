import Image from "next/image"

const BannerCard = () => {
    return (
        <div className="md:w-[50%]">
            <Image
                src="/images/main-page-img/AnyConv.com__Image Placeholder.webp"
                alt="Storefront"
                width={400}
                height={400}
                className="w-full rounded-t-[20px]"
            />
            <div className="bg-neutral-700 rounded-b-[20px] h-24 flex flex-col justify-center gap-2 pl-4">
                <span className="text-textBig">Space Walking</span>
                <div className="flex gap-2">
                    <Image
                        src="/images/main-page-img/AnyConv.com__Image Placeholder.webp"
                        alt="Storefront"
                        width={24}
                        height={24}
                        className="rounded-full"
                    />
                    <span>Animakid</span>
                </div>
            </div>
        </div>
    )
}

export default BannerCard
