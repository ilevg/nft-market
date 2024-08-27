"use client"
import React, { useEffect, useState, useMemo } from "react"
import CreatorsInfoCard from "./components/CreatorsInfoCard"
import { useFetchData } from "@/hooks/useFetchData";
type Tab = 'all time' | '30d' | '7d' | '1d';

const Page = () => {
  const [activeTab, setActiveTab] = useState<Tab>('1d');
  const { authors } = useFetchData({ endpoint: '/api/authors' });

  const sortAuthors = (tab: string) => {
    switch (tab) {
      case '1d':
        return authors.sort((a, b) => b.volume_day - a.volume_day);
      case '7d':
        return authors.sort((a, b) => b.volume_week - a.volume_week);
      case '30d':
        return authors.sort((a, b) => b.volume_month - a.volume_month);
      case 'all time':
        return authors.sort((a, b) => b.volume_all - a.volume_all);
      default:
        return authors;
    }
  };

  const handleTabChange = (e: React.MouseEvent<HTMLButtonElement>) => {
    const tabText = e.currentTarget.textContent?.toLowerCase() as Tab;
    if (tabText) {
      setActiveTab(tabText);
    }
  };

  const sortedAuthors = useMemo(() => sortAuthors(activeTab), [authors, activeTab]);

  return (
    <div className=" text-white w-[100%] md:w-[690px] xl:w-[1050px] xxl:w-[1450px mx-auto mb-10 px-5 md:px-0 bg-bg">
      <div className="py-10 md:py-[60px] xl:py-20" >
        <h2 className="text-subtitleSec md:text-subtitle">Top Creators</h2>
        <span className="flex mt-[10px] mb-[20px]">Check out top ranking NFT artists on the NFT Marketplace.</span>
      </div>

      <div className="flex text-zinc-500">
        {['1d', '7d', '30d', 'all time'].map(tab => (
          <div key={tab} className="w-1/2 flex flex-col justify-center">
            <div className="py-3 text-center">
              <button onClick={handleTabChange} type="button" className="shadow-for-text w-full">
                {tab}
              </button>
            </div>
            <span
              style={{ width: activeTab === tab ? '100%' : 0 }}
              className="h-[2px] w-full bg-[rgba(57,255,20,0.9)] transition-width duration-300 rounded-full"
            ></span>
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center w-[100%] h-[50px] text-[12px] md:h-[60px] xl:h-[85px] border border-neutral-700 rounded-[20px] p-5 text-zinc-500 text-center mt-10 mb-5">
        <div className="flex gap-6 items-center w-[30%]">
          <span className="ml-2">#</span>
          <span>Artist</span>
        </div>
        <span className="hidden md:block">Change</span>
        <span className="hidden xl:block">NFTs Sold</span>
        <span>Volume ↑</span>
      </div>

      <div className="flex flex-col gap-5">
        {sortedAuthors.slice(0, 20).map((author, index) => (
          <CreatorsInfoCard
            activeTab={activeTab}
            id={author.id}
            index={index}
            key={author.id}
            name={author.name}
            icon={author.icon}
            change_all={author.change_all}
            change_month={author.change_month}
            change_week={author.change_week}
            change_day={author.change_day}
            nft_sold_all={author.nft_sold_all}
            nft_sold_month={author.nft_sold_month}
            nft_sold_week={author.nft_sold_week}
            nft_sold_day={author.nft_sold_day}
            volume_all={author.volume_all}
            volume_month={author.volume_month}
            volume_week={author.volume_week}
            volume_day={author.volume_day}
          />
        ))}
      </div>
    </div>
  );
};

export default Page;
