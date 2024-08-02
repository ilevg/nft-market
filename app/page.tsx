import Banner from "./home/sections/Banner";
import TraddingCollections from "./home/sections/TraddingCollections";
import Creators from "./home/sections/Creators";
import Category from "./home/sections/Category";
import DiscoverNft from "./home/sections/DiscoverNft";
import Auction from "./home/sections/Auction";
import Info from "./home/sections/Info";

export default function Home() {
  return (
    <main className="text-white w-[100%] md:w-[690px] xl:w-[1050px] xxl:w-[1450px] my-0 mx-auto px-5 md:px-0 bg-bg">
      <Banner />
      <TraddingCollections />
      <Creators />
      <Category />
      <DiscoverNft />
      <Auction />
      <Info />
    </main>
  );
}