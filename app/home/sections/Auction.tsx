import MyLink from "@/components/common/MyLink"
import Image from "next/image"
import Timer from "../../../components/common/Timer"

const Auction = () => {
    return (
        <div className="w-full h-[590px] md:h-[640px] mb-10 md:mb-20">
            <div className="absolute w-full left-0 h-[590px] md:h-[640px] bg-[url('/images/main-page-img/NFT-Highlight-mobile.png')] md:bg-[url('/images/main-page-img/NFT-Highlight-middle.png')] xl:bg-[url('/images/main-page-img/NFT_Highlight.png')] bg-cover bg-top">
                <span className="absolute w-full h-[590px] md:h-[640px] bg-cover bg-center overflow-hidden bg-gradient-to-t from-purple-500 to-transparent"></span>
            </div>
            <div className="relative flex flex-col md:flex-row md:justify-between gap-8 pt-28 md:pt-96">
                <div className="flex flex-col gap-8">
                    <div className="bg-neutral-700 w-[150px] h-[45px] rounded-[20px] flex flex-col justify-center gap-2 pl-4">
                        <div className="flex gap-3">
                            <Image
                                src="/images/user-avatars/avatar-11.png"
                                alt="Storefront"
                                width={24}
                                height={24}
                                className="rounded-full"
                            />
                            <span>Shroomie</span>
                        </div>
                    </div>
                    <h1 className="text-subtitle">Magic Mashrooms</h1>

                    <div className="md:hidden">
                        <Timer hoursToEnd={44} />
                    </div>

                    <div className="h-[60px] w-full md:w-[200px]">
                        <MyLink
                            href="/marketplace/nfts/5"
                            iconSrc="/images/icons/Eye-blue.png"
                            alt="Eye"
                            text="See NFT"
                            bg="#FFFFFF"
                            color="black"
                        />
                    </div>
                </div>
                <div className="hidden md:flex absolute bottom-0 right-0">
                    <Timer hoursToEnd={44} />
                </div>
            </div>
        </div>
    )
}

export default Auction
