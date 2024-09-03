"use client"
import NftCard from "@/components/common/NftCard"
import React from "react"
import MyLink from "@/components/common/MyLink"
import Timer from "@/components/common/Timer"
import Image from "next/image"
import { useFetchData } from "@/hooks/useFetchData"
import { stringSlice } from "@/helpers/stringSlice"
import Link from "next/link"

const Page = ({ params }: { params: { id: number } }) => {
  const { id } = params;
  const { singleNfts } = useFetchData({ endpoint: `/api/nfts/${id}` })
  const { nfts } = useFetchData({ endpoint: `/api/nfts` })

  console.log(singleNfts)
  const mutedDate = singleNfts?.date ? new Date(singleNfts.date) : new Date()

  const formatedMutedDate = mutedDate.toLocaleDateString('en-Us', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });

  const bannerImg = singleNfts?.main_img
  console.log(bannerImg)
  return (
    <div>
      <div
        style={{ backgroundImage: `url('/images/nft-card-img/${bannerImg}')` }}
        className="w-full h-[320px] md:h-[420px] xl:h-[560px]"></div>
      <div className=" text-white w-[100%] md:w-[690px] xl:w-[1050px] xxl:w-[1450px mx-auto px-5 md:px-0">
        <div className=" flex flex-col gap-10 py-[30px] xl:pt-10 xl:pb-20">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-5">
            <div>
              <h2 className="text-subtitle md:text-headerSec mb-3">{singleNfts?.name}</h2>
              <span className="text-zinc-500">Minted on {formatedMutedDate && formatedMutedDate}</span>
            </div>
            <div className="flex flex-col  justify-center bg-neutral-700 bg-opacity-90 w-full md:w-[295px] h-[245px] rounded-2xl">
              <Timer hoursToEnd={22} />
              <div className="m-auto items-center h-[60px] w-full px-[30px] mb-[30px]">
                <MyLink
                  href="/marketplace"
                  iconSrc="/images/icons/Copy.webp"
                  alt="Eye"
                  text="0xad2w...2eq3e"
                  bg="#A259FF"
                />
              </div>
            </div>
          </div>

          <div>
            <div className="flex flex-col gap-3">
              <span className="text-zinc-500">Created By</span>
              <div className="flex">
                <Image
                  src={`/images/user-avatars/${singleNfts && singleNfts.author_icon}`}
                  alt="Storefront"
                  width={24}
                  height={24}
                  className="rounded-full mr-3"
                />
                <span className="xl:text-textBig">{singleNfts?.author}</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <span className="text-zinc-500">Description</span>
            <span>{singleNfts?.description}</span>

          </div>
          <div className="flex flex-col gap-3">
            <span className="text-zinc-500">Details</span>

            <div className="flex items-center">
              <Image
                src={`/images/icons/Globe.webp`}
                alt="Storefront"
                width={30}
                height={30}
                className="rounded-full mr-3"
              />
              <Link href='https://etherscan.io/' className="xl:text-textBig text-zinc-500 shadow-for-text">View on Etherscan</Link>
            </div>

            <div className="flex items-center">
              <Image
                src="/images/icons/Globe.webp"
                alt="Storefront"
                width={30}
                height={30}
                className="rounded-full mr-3"
              />
              <Link href='https://www.google.com' className="xl:text-textBig text-zinc-500 shadow-for-text">View Original</Link>
            </div>
          </div>

        </div>

        <div className="relative mb-10 xl:mb-20">
          <h2 className="text-subtitleSec md:text-subtitle mb-[30px]">Discover More NFTs</h2>
          <div className="flex flex-col gap-8 md:flex-row">
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
          <div className="h-[60px] w-[100%] mt-10 md:-mt-2 md:w-[244px] md:absolute top-0 right-0 border border-purple-500 rounded-[20px]">
            <MyLink
              href="/marketplace"
              iconSrc="/images/icons/Eye-blue.png"
              alt="rocket icon"
              text="See All"
              bg="transparent"
            />
          </div>
        </div>
      </div>
    </div>

  )
}
export default Page
