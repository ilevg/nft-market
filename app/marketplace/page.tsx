"use client"
import CollectionCard from "@/components/common/CollectionsCard"
import NftCard from "@/components/common/NftCard"
import Pagination from "@/components/common/Pagination"
import { useCollections } from "@/context"
import { useFetchData } from "@/hooks/useFetchData"
import Image from "next/image"
import React, { useContext, useEffect, useState } from "react"

const Page = () => {
  const [activeTab, setActiveTab] = useState('nfts')
  const [currentPage, setCurrentPage] = useState(1)
  const [searchedNftQuery, setSearchedNftQuery] = useState('')

  const { collectionsArr } = useCollections()
  const { nfts } = useFetchData({ endpoint: '/api/nfts' })

  // search
  const searchedNftsOrColl = activeTab === 'nfts'
    ? (searchedNftQuery.length ? nfts.filter(nft => nft.name.match(searchedNftQuery)) : nfts)
    : (searchedNftQuery.length ? collectionsArr.filter(coll => coll[0].match(searchedNftQuery)) : collectionsArr)

  const activeTabTogglle = (e: React.MouseEvent<HTMLButtonElement>) => {
    const tabText = e.currentTarget.textContent?.toLowerCase()
    if (tabText === 'nfts') {
      setActiveTab(tabText || 'nfts')
      setSearchedNftQuery('')
    } else if (tabText === 'collections') {
      setActiveTab(tabText || 'collections')
      setSearchedNftQuery('')
    }
  }

  // pagination
  const nftsPerPage = 12
  const startIndex = (currentPage - 1) * nftsPerPage
  const endIndex = startIndex + nftsPerPage
  const currentNftsOrColl = searchedNftsOrColl.slice(startIndex, endIndex)

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber)
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
            value={searchedNftQuery}
            onChange={(e) => setSearchedNftQuery(e.target.value)}
          />
          <button type="button" className="absolute top-4 right-5 hover:bg-slate-600">
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
              className="shadow-for-text w-full"
            >NFTs</button>
          </div>

          <span style={{ width: activeTab === 'nfts' ? '100%' : 0 }} className="h-[2px] w-full bg-[rgba(57,255,20,0.9)] transition-opacity duration-300"></span>
        </div>
        <div className="w-1/2 flex flex-col justify-center">
          <div className="py-3 text-center">
            <button
              onClick={activeTabTogglle}
              type="button"
              className="shadow-for-text w-full"
            >Collections</button>
          </div>
          <span style={{ width: activeTab === 'collections' ? '100%' : 0 }} className="h-[2px] w-full bg-[rgba(57,255,20,0.9)] transition-width duration-300"></span>
        </div>
      </div>

      {
        activeTab === 'nfts'
          ?
          <div className="grid grid-cols-1 gap-[30px] md:grid-cols-2 xl:grid-cols-3 my-10 md:my-[60px]">
            {
              currentNftsOrColl.map((nft) => (
                <NftCard
                  key={nft.id}
                  id={nft.id}
                  name={nft.name}
                  author={nft.author}
                  price={nft.price}
                  bid={nft.bid}
                  img={nft.main_img}
                  icon={nft.author_icon}
                  imgAlt={nft.name}
                  iconAlt={nft.logo}
                  href={nft.collection}
                />
              ))
            }
          </div>
          :
          <div className="grid grid-cols-1 gap-[30px] md:grid-cols-2 xl:grid-cols-3 my-10 md:my-[60px]">
            {
              currentNftsOrColl.map(([name, nft], index) => {
                const typedNft = nft as { main_img: string; author_icon: string; author: string }[]
                let nftsQuantity = 0
                const arr = typedNft.map((item) => {
                  nftsQuantity++
                  return item.main_img
                })
                return <CollectionCard
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
      }

      <Pagination currentPage={currentPage} totalItems={searchedNftsOrColl.length} itemsPerPage={nftsPerPage} onPageChange={handlePageChange} />
    </div>
  )
}
export default Page
