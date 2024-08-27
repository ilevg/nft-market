"use client"
import AnimatedNumb from "@/components/common/AnimatedNumb"
import CollectionCard from "@/components/common/CollectionsCard"
import NftCard from "@/components/common/NftCard"
import Image from "next/image"
import React, { useState } from "react"
import { countNumbData } from "../../home/data"
import MyButton from "@/components/common/MyButton"
import Link from "next/link"
import { useFetchData } from "@/hooks/useFetchData"
import { useCollections } from "@/context"

const Page = ({ params }: { params: { id: number } }) => {
  const [activeTab, setActiveTab] = useState('created')
  const { id } = params
  const { collectionsArr } = useCollections()
  const { singleAuthor } = useFetchData({ endpoint: `/api/authors/${id}` })
  const { nfts } = useFetchData({ endpoint: '/api/nfts' })
  const createdNfts = nfts.filter(nft => nft.author === singleAuthor?.name)
  const filteredCollections = collectionsArr.filter(collection => collection[1][0].author === singleAuthor?.name)

  const activeTabTogglle = (e: React.MouseEvent<HTMLButtonElement>) => {
    const tabText = e.currentTarget.textContent?.toLowerCase()
    if (tabText === 'created') {
      setActiveTab(tabText)
    } else if (tabText === 'collection') {
      setActiveTab(tabText)
    }
  }
  return (
    <div className="relative">
      <div className="w-full h-[250px] md:h-[280px] xl:h-[320px] bg-[url('/images/artist-page.png')] bg-cover bg-top"></div>
      <div className="relative flex justify-center md:justify-start w-[100%] md:w-[690px] xl:w-[1050px] xxl:w-[1450px] mx-auto px-5 md:px-0 ">
        <Image
          src={`/images/user-avatars/${singleAuthor?.icon}`}
          alt="Storefront"
          width={120}
          height={120}
          className="absolute -bottom-[60px] rounded-full border-[2px] border-black"
        />
      </div>
      <div className=" text-white w-[100%] md:w-[690px] xl:w-[1050px] xxl:w-[1450px mx-auto px-5 md:px-0 mt-10 ">
        <div className="relative flex flex-col gap-10 py-10 md:py-[60px] xl:py-20">
          <div className="flex flex-col xl:flex-row xl:justify-between xl:items-center gap-5">
            <h2 className="text-subtitleSec md:text-subtitle">{singleAuthor?.name}</h2>
            <div className="h-[60px] w-full md:w-[200px]">
              <MyButton
                href="/"
                iconSrc="/images/icons/Copy.webp"
                alt="Eye"
                text="0xad2w...2eq3e"
                bg="#A259FF"
              />
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
            <span className="text-zinc-500">Bio</span>
            <span className="flex mt-[10px]">{singleAuthor?.bio}</span>
          </div>
          <div>
            <span className="text-zinc-500">Links</span>
            <div className="flex gap-3 mt-[10px]">
              <Link className="shadow-for-box rounded-[10px]" href='https://www.discord.com/'>
                <Image
                  src="/images/icons/DiscordLogo.webp"
                  alt="discord"
                  width={24}
                  height={32}
                />

              </Link>
              <Link className="shadow-for-box rounded-[10px]" href='https://www.youtube.com/'>
                <Image
                  src="/images/icons/YoutubeLogo.webp"
                  alt="youtube"
                  width={24}
                  height={24}
                />
              </Link>
              <Link className="shadow-for-box rounded-[10px]" href='https://www.twitter.com/'>
                <Image
                  src="/images/icons/TwitterLogo.webp"
                  alt="twitter"
                  width={24}
                  height={24}
                />
              </Link>
              <Link className="shadow-for-box rounded-[10px]" href='https://www.instagram.com'>
                <Image
                  src="/images/icons/InstagramLogo.webp"
                  alt="instagram"
                  width={24}
                  height={24}
                />
              </Link>
            </div>
          </div>
          <span className="border-b border-zinc-500 w-full absolute left-0 bottom-0 mt-10 md:mt-[60px] xl:mt-20"></span>
        </div>
        <div className="flex justify-between text-zinc-500">
          <div className="w-1/2 flex flex-col justify-center">
            <div className="flex gap-3 py-3 justify-center">
              <button
                onClick={(e) => activeTabTogglle(e)}
                type="button"
                className="xl:text-[18px] w-full shadow-for-text"
              >
                Created
              </button>
              <span className="flex items-center justify-center w-[50px] h-8 bg-neutral-700 rounded-full text-white text-center text-[12px] xl:text-base">{createdNfts.length}</span>
            </div>
            <span style={{ width: activeTab === 'created' ? '100%' : 0 }} className="h-[2px] w-full bg-[rgba(57,255,20,0.9)] transition-all duration-300 rounded-full"></span>
          </div>

          <div className="w-1/2 flex flex-col justify-center">
            <div className="flex gap-3 py-3 justify-center">
              <button
                onClick={(e) => activeTabTogglle(e)}
                type="button"
                className="xl:text-[18px] w-full shadow-for-text"
              >
                Collection
              </button>
              <span className="flex items-center justify-center w-[50px] h-8 bg-neutral-700 rounded-full text-white text-center text-[12px] xl:text-base">{filteredCollections.length}</span>
            </div>
            <span style={{ width: activeTab === 'collection' ? '100%' : 0 }} className="h-[2px] w-full bg-[rgba(57,255,20,0.9)] transition-all duration-300"></span>
          </div>
        </div>
        {
          activeTab === 'created'
            ?
            <div className="grid grid-cols-1 gap-[30px] md:grid-cols-2 xl:grid-cols-3 my-10 md:my-[60px]">
              {
                createdNfts.map(nft => (
                  <NftCard
                    key={nft.id}
                    id={nft.id}
                    name={singleAuthor?.name}
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
                filteredCollections.map(([name, nft], index) => {

                  const typedNft = nft as { main_img: string; author_icon: string; author: string }[]
                  console.log(nft)
                  let nftsQuantity = 0
                  const arr = typedNft.map((item) => {
                    nftsQuantity++
                    return item.main_img
                  })

                  return <CollectionCard
                    key={name}
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
      </div>
    </div>
  )
}
export default Page
