"use client"
import NftCard from "@/components/common/NftCard"
import React from "react"
import MyButton from "@/components/common/MyButton"
import Timer from "@/components/common/Timer"
import Image from "next/image"

const Page = () => {
  return (
    <div>
      <div className="w-full h-[320px] md:h-[420px] xl:h-[560px] bg-[url('/images/nft-page.png')] bg-cover bg-top"></div>
      <div className=" text-white w-[100%] md:w-[690px] xl:w-[1050px] xxl:w-[1450px mx-auto px-5 md:px-0">
        <div className=" flex flex-col gap-10 py-[30px] xl:pt-10 xl:pb-20">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-5">
            <div>
              <h2 className="text-subtitle md:text-headerSec mb-3">The Orbitians</h2>
              <span className="text-zinc-500">Minted on Sep 30, 2022</span>
            </div>
            <div className="flex flex-col  justify-center bg-neutral-700 bg-opacity-90 w-full md:w-[295px] h-[245px] rounded-2xl">
              <Timer hoursToEnd={22} />
              <div className="m-auto items-center h-[60px] w-full px-[30px] mb-[30px]">
                <MyButton
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
                  src="/images/main-page-img/AnyConv.com__Image Placeholder.webp"
                  alt="Storefront"
                  width={24}
                  height={24}
                  className="rounded-full mr-3"
                />
                <span className="xl:text-textBig">Animakid</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <span className="text-zinc-500">Description</span>
            <span>The Orbitians is a collection of 10,000 unique NFTs on the Ethereum blockchain</span>
            <span>There are all sorts of beings in the NFT Universe. The most advanced and friendly of the bunch are Orbitians.</span>
            <span>They live in a metal space machines, high up in the sky and only have one foot on Earth.
              These Orbitians are a peaceful race, but they have been at war with a group of invaders for many generations. The invaders are called Upside-Downs, because of their inverted bodies that live on the ground, yet do not know any other way to be. Upside-Downs believe that they will be able to win this war if they could only get an eye into Orbitian territory, so they&apos;ve taken to make human beings their target.</span>
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-zinc-500">Details</span>

            <div className="flex items-center">
              <Image
                src="/images/icons/Globe.webp"
                alt="Storefront"
                width={30}
                height={30}
                className="rounded-full mr-3"
              />
              <span className="xl:text-textBig text-zinc-500">View on Etherscan</span>
            </div>

            <div className="flex items-center">
              <Image
                src="/images/icons/Globe.webp"
                alt="Storefront"
                width={30}
                height={30}
                className="rounded-full mr-3"
              />
              <span className="xl:text-textBig text-zinc-500">View Original</span>
            </div>
          </div>

        </div>

        <div className="relative mb-10 xl:mb-20">
          <h2 className="text-subtitleSec md:text-subtitle mb-[30px]">Discover More NFTs</h2>
          <div className="flex flex-col gap-8 md:flex-row">
            <NftCard
              id="string"
              text="string"
              img="string"
              icon="string"
              imgAlt="string"
              iconAlt="string"
              href="string"
            /><NftCard
              id="string"
              text="string"
              img="string"
              icon="string"
              imgAlt="string"
              iconAlt="string"
              href="string"
            /><NftCard
              id="string"
              text="string"
              img="string"
              icon="string"
              imgAlt="string"
              iconAlt="string"
              href="string"
            />
          </div>
          <div className="h-[60px] w-[100%] mt-10 md:-mt-2 md:w-[244px] md:absolute top-0 right-0 border border-purple-500 rounded-[20px]">
            <MyButton
              href="/rankings"
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
