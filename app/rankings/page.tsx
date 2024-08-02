"use client"
import React, { useState } from "react"
import CreatorsInfoCard from "./components/CreatorsInfoCard"

const Page = () => {
  const [activeTab, setActiveTab] = useState('1d')
  console.log(activeTab)
  const activeTabTogglle = (e: React.MouseEvent<HTMLButtonElement>) => {
    const tabText = e.currentTarget.textContent?.toLowerCase()
    if (tabText === '1d') {
      setActiveTab(tabText)
    } else if (tabText === '7d') {
      setActiveTab(tabText)
    } else if (tabText === '30d') {
      setActiveTab(tabText)
    } else if (tabText === 'all time') {
      setActiveTab(tabText)
    }
  }

  return (
    <div className=" text-white w-[100%] md:w-[690px] xl:w-[1050px] xxl:w-[1450px mx-auto mb-10 px-5 md:px-0 bg-bg">
      <div className="py-10 md:py-[60px] xl:py-20" >
        <h2 className="text-subtitleSec md:text-subtitle">Top Creators</h2>
        <span className="flex mt-[10px] mb-[20px]">Check out top ranking NFT artists on the NFT Marketplace.</span>
      </div>
      <div className="flex text-zinc-500">
        <div className="w-1/2 flex flex-col justify-center">
          <div className="py-3 text-center">
            <button
              onClick={(e) => activeTabTogglle(e)}
              type="button"
            >1d</button>
          </div>

          <span style={{ width: activeTab === '1d' ? '100%' : 0 }} className="h-[2px] w-full bg-zinc-500 transition-opacity duration-300"></span>
        </div>
        <div className="w-1/2 flex flex-col justify-center">
          <div className="py-3 text-center">
            <button
              onClick={activeTabTogglle}
              type="button"
            >7d</button>
          </div>
          <span style={{ width: activeTab === '7d' ? '100%' : 0 }} className="h-[2px] w-full bg-zinc-500 transition-width duration-300"></span>
        </div>
        <div className="w-1/2 flex flex-col justify-center">
          <div className="py-3 text-center">
            <button
              onClick={activeTabTogglle}
              type="button"
            >30d</button>
          </div>
          <span style={{ width: activeTab === '30d' ? '100%' : 0 }} className="h-[2px] w-full bg-zinc-500 transition-width duration-300"></span>
        </div>
        <div className="w-1/2 flex flex-col justify-center">
          <div className="py-3 text-center">
            <button
              onClick={activeTabTogglle}
              type="button"
            >All Time</button>
          </div>
          <span style={{ width: activeTab === 'all time' ? '100%' : 0 }} className="h-[2px] w-full bg-zinc-500 transition-width duration-300"></span>
        </div>
      </div>



      <div className="flex justify-between items-center w-[100%] h-[50px] text-[12px] md:h-[60px] xl:h-[85px] border border-neutral-700 rounded-[20px] p-5 text-zinc-500 text-center mt-10 mb-5">
        <div className="flex gap-6 items-center w-[30%]">
          <span className="ml-2">#</span>
          <span>Artist</span>
        </div>
        <span className="hidden md:block">Change</span>
        <span className="hidden xl:block">NFTs Sold</span>
        <span>Volume</span>
      </div>




      <div className="flex flex-col gap-5">
        <CreatorsInfoCard />
        <CreatorsInfoCard />
        <CreatorsInfoCard />
        <CreatorsInfoCard />
        <CreatorsInfoCard />
        <CreatorsInfoCard />
        <CreatorsInfoCard />
        <CreatorsInfoCard />
        <CreatorsInfoCard />
        <CreatorsInfoCard />
        <CreatorsInfoCard />
        <CreatorsInfoCard />
        <CreatorsInfoCard />
        <CreatorsInfoCard />
        <CreatorsInfoCard />
        <CreatorsInfoCard />
        <CreatorsInfoCard />
      </div>
    </div >
  )
}
export default Page
