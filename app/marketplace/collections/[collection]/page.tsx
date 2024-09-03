"use client"
import AnimatedNumb from "@/components/common/AnimatedNumb"
import NftCard from "@/components/common/NftCard"
import Image from "next/image"
import React, { useState } from "react"
import MyLink from "@/components/common/MyLink"
import { countNumbData } from "@/app/home/data"
import { useFetchData } from "@/hooks/useFetchData"
import Pagination from "@/components/common/Pagination"

const Page = ({ params }: { params: { collection: string; id: number } }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const collection = decodeURIComponent(params.collection);
  const { nfts } = useFetchData({ endpoint: '/api/nfts' })
  const collections = nfts.filter(nft => nft.collection === collection)
  const author = collections[0]?.author
  const collectionInfo = collections[0]?.collection_info
  const bannerImg = collections[0]?.main_img

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber)
  }
  const nftsPerPage = 6
  const startIndex = (currentPage - 1) * nftsPerPage
  const endIndex = startIndex + nftsPerPage
  const currentNfts = collections.slice(startIndex, endIndex)

  return (
    <div className="relative">
      <div
        style={{ backgroundImage: `url('/images/nft-card-img/${bannerImg}')` }}
        className={`w-full h-[250px] md:h-[280px] xl:h-[320px]  bg-cover bg-center`}
      ></div>
      <div className=" text-white w-[100%] md:w-[690px] xl:w-[1050px] xxl:w-[1450px mx-auto px-5 md:px-0 mt-10 ">
        <div className="relative flex flex-col gap-10 py-10 md:py-[60px] xl:py-20">
          <div className="flex justify-between items-center">
            <h2 className="text-subtitleSec md:text-subtitle">{collection}</h2>
            <div className="h-[60px] w-[200px]">
              <MyLink
                href="/marketplace"
                iconSrc="/images/icons/User.webp"
                alt="Eye"
                text="Artist page"
                bg="#A259FF"
              />
            </div>
          </div>
          <div>
            <span className="text-zinc-500 ">Author</span>

            <div className="flex gap-2 mt-3">
              <Image
                src="/images/main-page-img/cosmo.png"
                alt="Storefront"
                width={24}
                height={24}
                className="rounded-full"
              />
              <span>{author}</span>
            </div>
          </div>

          <div className="flex justify-between w-[100%] md:w-[510px] gap-[30px] text-base xl:text-textBig">
            {countNumbData.map((item) => (
              <div key={item.id} className="flex flex-col md:justify-center">
                <span className="text-textBig xl:text-subtitleSec font-bold ">
                  <AnimatedNumb endValue={item.endValue} />
                  k+
                </span>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
          <div>
            <span className="text-zinc-500">Information</span>
            <span className="flex mt-[10px]">{collectionInfo}</span>
          </div>
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
          <span className="border-b border-zinc-500 w-full absolute left-0 bottom-0 mt-10 md:mt-[60px] xl:mt-20"></span>
        </div>
        <div className="grid grid-cols-1 gap-[30px] md:grid-cols-2 xl:grid-cols-3 my-10 md:my-[60px]">
          {
            currentNfts.map(nft => (
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
      </div>
      < Pagination currentPage={currentPage} totalItems={collections.length} itemsPerPage={nftsPerPage} onPageChange={handlePageChange} />

    </div>

  )
}
export default Page
