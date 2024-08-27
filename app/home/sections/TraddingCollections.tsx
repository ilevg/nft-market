"use client"
import { useCollections } from "@/context"
import CollectionsCard from "../../../components/common/CollectionsCard"

const TraddingCollections = () => {
    const { collectionsArr } = useCollections()

    console.log(collectionsArr)
    return (
        <div>
            <h2 className="text-subtitleSec md:text-subtitle">Trending Collection</h2>
            <span className="flex mt-[10px] mb-[40px] md:mb-[60px]">Checkout our weekly updated trending collection.</span>
            <div className="flex flex-col md:justify-between gap-7">
                {
                    collectionsArr.map(([name, nft], index) => {
                        if (index >= 3) return
                        const typedNft = nft as { main_img: string; author_icon: string; author: string }[]
                        let nftsQuantity = 0
                        const arr = typedNft.map((item) => {
                            nftsQuantity++
                            return item.main_img
                        })

                        return <CollectionsCard
                            key={name + index}
                            collectionName={name}
                            image_1={arr[0]}
                            image_2={arr[1]}
                            image_3={arr[2]}
                            nftsQuantity={nftsQuantity}
                            authorIcon={typedNft[0].author_icon}
                            author={typedNft[0].author} />
                    })
                }

            </div>
        </div>
    )
}

export default TraddingCollections
