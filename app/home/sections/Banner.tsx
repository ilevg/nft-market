"use client";
import AnimatedNumb from "@/components/common/AnimatedNumb";
import MyButton from "@/components/common/MyButton";
import { countNumbData } from "../data";
import BannerCard from "../components/BannerCard";
import { useEffect, useState } from "react";

const Banner = () => {
  const [cardVisible, setCardVisible] = useState(false)
  const [screenWidth, setScreenWidth] = useState(typeof window !== "undefined" && window.innerWidth);

  const handleResize = () => {
    setScreenWidth(typeof window !== "undefined" && window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    screenWidth && screenWidth > 834
      ? setCardVisible(false)
      : setCardVisible(true)
  }, [cardVisible, screenWidth])

  return (
    <div className="flex-col md:flex md:flex-row gap-7 my-10 md:mb-20 md:mt-20">
      <div className="flex flex-col gap-7 w-full md:w-[50%]">
        <h1 className="text-subtitle  xl:text-header ">Discover digital art & Collect NFTs</h1>
        <span className="text-base md:text-textBig">
          NFT marketplace UI created with Anima for Figma. Collect, buy and sell
          art from more than 20k NFT artists.
        </span>
        {
          cardVisible && <BannerCard />
        }
        <div className="w-full h-[60px] mx-auto md:w-[223px] md:mx-0">
          <MyButton
            href="/marketplace"
            iconSrc="/images/icons/RocketLaunch.webp"
            alt="Rocket"
            text="Get Started"
            bg="#A259FF"
          />
        </div>


        <div className="flex justify-between w-[100%] gap-10 text-base xl:text-textBig">
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
      </div>

      {
        !cardVisible && <BannerCard />
      }

    </div>
  );
};

export default Banner;
