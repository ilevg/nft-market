import Image from "next/image"

interface NftCard {
    id: string
    text: string
    img: string
    icon: string
    imgAlt: string
    iconAlt: string
    href: string
}
const NftCard: React.FC<NftCard> = ({ id, text, img, icon, imgAlt, iconAlt, href }) => {
    return (
        <div key={id} className="w-[100%] m-auto">
            <div className="w-full  h-auto relative">
                <Image
                    src={'/images/nft-card-img/Image-1.webp'}
                    alt={imgAlt}
                    width={150}
                    height={150}
                    className=" flex w-full h-auto rounded-t-[20px]"
                />
            </div>

            <div className="bg-neutral-700 rounded-b-[20px] px-[20px] py-[20px]">
                <div className="flex flex-col justify-center gap-2 mb-6">
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

                <div className="flex justify-between text-[12px]">
                    <div className="flex  flex-col gap-2">
                        <span className="text-zinc-500">Price</span>
                        <span>1.63 ETH</span>
                    </div>
                    <div className="flex flex-col gap-2">
                        <span className="text-zinc-500">Highest Bid</span>
                        <span>0.33 wETH</span>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default NftCard
