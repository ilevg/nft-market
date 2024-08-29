import Image from "next/image"
import Link from "next/link"

interface CollectionsCardProps {
    collectionName: string
    image_1: string
    image_2?: string
    image_3?: string
    nftsQuantity: number
    authorIcon: string
    author: string
}

const CollectionsCard: React.FC<CollectionsCardProps> = ({ collectionName, image_1, image_2, image_3, nftsQuantity, authorIcon, author }) => {
    return (
        <Link href={`/marketplace/collections/${collectionName}`} className="block w-[100%] shadow-for-box rounded-[20px] p-1">
            <Image
                src={`/images/nft-card-img/${image_1}`}
                alt="Storefront"
                width={315}
                height={315}
                className="w-full h-auto md:h-[315px] md:w-[315px] rounded-[20px] mb-4"
            />
            <div className="flex gap-4">
                {image_2
                    ? <Image
                        src={`/images/nft-card-img/${image_2}`}
                        alt="Storefront"
                        width={100}
                        height={100}
                        className="w-full h-auto rounded-[20px]"
                    />
                    : <div className="w-full h-auto md:w-[100px] md:h-[100px] bg-black rounded-[20px]"></div>
                }
                {image_3
                    ? <Image
                        src={`/images/nft-card-img/${image_3}`}
                        alt="Storefront"
                        width={100}
                        height={100}
                        className="w-full h-auto rounded-[20px]"
                    />
                    : <div className="w-full h-auto md:w-[100px] md:h-[100px] bg-black rounded-[20px]"></div>
                }

                <div className="w-full h-auto md:w-[100px] md:h-[100px] rounded-[20px] bg-purple-500 flex justify-center items-center">{nftsQuantity}+</div>
            </div>
            <div className="h-24 flex flex-col justify-center gap-2 pl-4">
                <span className="text-textBig ">{collectionName}</span>
                <div className="flex gap-2">
                    <Image
                        src={`/images/user-avatars/${authorIcon}`}
                        alt="Storefront"
                        width={24}
                        height={24}
                        className="rounded-full"
                    />
                    <span className="shadow-for-text">{author}</span>
                </div>
            </div>
        </Link>
    )
}

export default CollectionsCard

