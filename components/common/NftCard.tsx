import Image from "next/image"
import Link from "next/link"

interface NftCard {
    id?: number
    name?: string
    author?: string
    price?: number
    bid?: number
    img?: string
    icon?: string
    imgAlt: string
    iconAlt: string
    href?: string
}
const NftCard: React.FC<NftCard> = ({ id, name, author, price, bid, img, icon, imgAlt, iconAlt, href }) => {
    return (
        <Link className="rounded-[20px] block w-[100%] m-auto shadow-for-box" href={`/marketplace/nfts/${id}`}>
            <div className="w-full  h-auto relative">
                <Image
                    src={`/images/nft-card-img/${img}`}
                    alt={imgAlt}
                    width={150}
                    height={150}
                    className=" flex w-full h-auto rounded-t-[20px]"
                />
            </div>

            <div className="bg-neutral-700 rounded-b-[20px] px-[20px] py-[20px]">
                <div className="flex flex-col justify-center gap-2 mb-6">
                    <span className="text-textBig">{name}</span>
                    <div className="flex gap-2">
                        <Image
                            src={`/images/user-avatars/${icon}`}
                            alt={iconAlt}
                            width={24}
                            height={24}
                            className="rounded-full"
                        />
                        <span className="shadow-for-text">{author}</span>
                    </div>
                </div>

                <div className="flex justify-between text-[12px]">
                    <div className="flex  flex-col gap-2">
                        <span className="text-zinc-500">Price</span>
                        <span>{price} ETH</span>
                    </div>
                    <div className="flex flex-col gap-2">
                        <span className="text-zinc-500">Highest Bid</span>
                        <span>{bid} wETH</span>
                    </div>
                </div>
            </div>
        </Link>

    )
}

export default NftCard
