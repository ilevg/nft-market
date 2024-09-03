"use client"
import MyLink from "@/components/common/MyLink"
import NftCard from "@/components/common/NftCard"
import { stringSlice } from "@/helpers/stringSlice"
import { useFetchData } from "@/hooks/useFetchData"

const DiscoverNft = () => {
    const { nfts } = useFetchData({ endpoint: '/api/nfts' })


    return (
        <div className="relative mb-[40px] xl:mb-[80px]">
            <h2 className="text-subtitleSec md:text-subtitle">Discover More NFTs</h2>
            <span className="flex mt-[10px] mb-[40px] md:mb-[60px]">Explore new trending NFTs</span>
            <div className="flex flex-col gap-5 md:flex-row md:gap-7">
                {
                    nfts.map((nft, index) => {
                        if (index >= 3) return
                        const name = stringSlice(nft.name)
                        return <div className="w-[100%] m-auto" key={nft.id}>
                            <NftCard
                                id={nft.id}
                                name={name}
                                author={nft.author}
                                price={nft.price}
                                bid={nft.bid}
                                img={nft.main_img}
                                icon={nft.author_icon}
                                imgAlt={nft.name}
                                iconAlt={nft.logo}
                                href={nft.collection}
                            />
                        </div>
                    })
                }
            </div>
            <div className="h-[60px] w-[100%] mt-10 md:mt-0 md:w-[244px] md:absolute top-5 right-0 border border-purple-500 rounded-[20px]">
                <MyLink
                    href='/marketplace'
                    iconSrc='/images/icons/Eye-blue.png'
                    alt='rocket icon'
                    text='See All'
                    bg='transparent'
                />
            </div>
        </div>
    )
}

export default DiscoverNft
