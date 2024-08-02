"use client"
import CollectionCard from "@/components/common/CollectionsCard"
import NftCard from "@/components/common/NftCard"
import Image from "next/image"
import React, { useState } from "react"

const Page = () => {
  const [activeTab, setActiveTab] = useState('nfts')

  const activeTabTogglle = (e: React.MouseEvent<HTMLButtonElement>) => {
    const tabText = e.currentTarget.textContent?.toLowerCase()
    if (tabText === 'nfts') {
      setActiveTab(tabText)
    } else if (tabText === 'collections') {
      setActiveTab(tabText)
    }
  }

  return (
    <div className="text-white w-[100%] md:w-[690px] xl:w-[1050px] xxl:w-[1450px mx-auto px-5 md:px-0 bg-bg">
      <div className="py-10 md:py-[60px] xl:py-20">
        <h2 className="text-subtitleSec md:text-subtitle">Browse Marketplace</h2>
        <span className="flex mt-[10px] mb-[20px]">Browse through more than 50k NFTs on the NFT Marketplace.</span>
        <div className="relative">
          <input
            className="w-full bg-transparent border border-zinc-500 rounded-[20px] p-3"
            type="text"
            placeholder="Search your favourite NFTs"
          />
          <button type="button" className="absolute top-4 right-5">
            <Image
              src="/images/icons/MagnifyingGlass.webp"
              alt="Storefront"
              width={17}
              height={17}
            />
          </button>
        </div>
        <span className="border-b border-zinc-500 w-full absolute left-0 mt-10 md:mt-[60px] xl:mt-20"></span>
      </div>
      <div className="flex text-zinc-500">
        <div className="w-1/2 flex flex-col justify-center">
          <div className="py-3 text-center">
            <button
              onClick={(e) => activeTabTogglle(e)}
              type="button"
            >NFTs</button>
          </div>

          <span style={{ width: activeTab === 'nfts' ? '100%' : 0 }} className="h-[2px] w-full bg-zinc-500 transition-opacity duration-300"></span>
        </div>
        <div className="w-1/2 flex flex-col justify-center">
          <div className="py-3 text-center">
            <button
              onClick={activeTabTogglle}
              type="button"
            >Collections</button>
          </div>

          <span style={{ width: activeTab === 'collections' ? '100%' : 0 }} className="h-[2px] w-full bg-zinc-500 transition-width duration-300"></span>
        </div>
      </div>

      {
        activeTab === 'nfts'
          ?
          <div className="grid grid-cols-1 gap-[30px] md:grid-cols-2 xl:grid-cols-3 my-10 md:my-[60px]">
            <NftCard />
            <NftCard />
            <NftCard />
            <NftCard />
            <NftCard />
            <NftCard />
            <NftCard />
            <NftCard />
            <NftCard />
            <NftCard />
            <NftCard />
            <NftCard />
          </div>
          :
          <div className="grid grid-cols-1 gap-[30px] md:grid-cols-2 xl:grid-cols-3 my-10 md:my-[60px]">
            <CollectionCard />
            <CollectionCard />
            <CollectionCard />
            <CollectionCard />
            <CollectionCard />
            <CollectionCard />
            <CollectionCard />
            <CollectionCard />
            <CollectionCard />
            <CollectionCard />
            <CollectionCard />
            <CollectionCard />
          </div>
      }





    </div>
  )
}
export default Page
