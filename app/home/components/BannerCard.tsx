import Image from "next/image"
import Link from "next/link"

const BannerCard = () => {
    return (
        <Link href={'/marketplace/nfts/30'} className="md:w-[50%] block shadow-for-box rounded-[20px]">
            <Image
                src="/images/main-page-img/banner-img.png"
                alt="Storefront"
                width={400}
                height={400}
                className="w-full rounded-t-[20px]"
            />
            <div className="bg-neutral-700 rounded-b-[20px] h-24 flex flex-col justify-center gap-2 pl-4">
                <span className="text-textBig">Cool Fox</span>
                <div className="flex gap-2">
                    <Image
                        src="/images/user-avatars/avatar-18.png"
                        alt="Storefront"
                        width={24}
                        height={24}
                        className="rounded-full"
                    />
                    <span>Mr. Fox</span>
                </div>
            </div>
        </Link>
    )
}

export default BannerCard
