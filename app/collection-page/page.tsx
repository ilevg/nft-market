"use client"
import AnimatedNumb from "@/components/common/AnimatedNumb"
import CollectionCard from "@/components/common/CollectionsCard"
import NftCard from "@/components/common/NftCard"
import Image from "next/image"
import React, { useState } from "react"
import { countNumbData } from "../home/data"
import MyButton from "@/components/common/MyButton"
import Link from "next/link"

const Page = () => {
  return (
    <div className="relative">
      <div className="w-full h-[250px] md:h-[280px] xl:h-[320px] bg-[url('/images/main-page-img/NFT-Highlight-middle.webp')] bg-cover bg-top"></div>


      <div className=" text-white w-[100%] md:w-[690px] xl:w-[1050px] xxl:w-[1450px mx-auto px-5 md:px-0 mt-10 ">
        <div className="relative flex flex-col gap-10 py-10 md:py-[60px] xl:py-20">
          <div className="flex justify-between items-center">
            <h2 className="text-subtitleSec md:text-subtitle">Magic Mushroom</h2>
            <div className="h-[60px] w-[200px]">
              <MyButton
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
                src="/images/main-page-img/AnyConv.com__Image Placeholder.webp"
                alt="Storefront"
                width={24}
                height={24}
                className="rounded-full"
              />
              <span>Animakid</span>
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
            <span className="flex mt-[10px]">Browse through more than 50k NFTs on the NFT Marketplace.</span>
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
      </div>
    </div>

  )
}
export default Page
