"use client";
import Image from "next/image";
import Link from "next/link";
import MyLink from "./MyLink";
import { useEffect, useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const screenWidth = typeof window !== "undefined" && window.innerWidth

  useEffect(() => {
    if (menuOpen && screenWidth && screenWidth < 834) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [menuOpen, screenWidth]);

  const burgeerMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  function handleButton() {
    setMenuOpen(!menuOpen);
  }

  return (
    <div className="flex justify-between items-center h-[54px] md:h-[100px]  px-5 md:px-[50px] bg-zinc-800 relative z-40">
      <Link href="/" className="shadow-for-text">
        <div className="flex items-center">
          <Image
            src="/images/icons/Storefront-pink.webp"
            alt="Storefront"
            width={24}
            height={24}
            className="md:w-[32px] md:h-[32px]  mr-2"
          />
          <span className=" text-[20px] md:text-xl font-bold text-white">
            NFT Marketplace
          </span>
        </div>
      </Link>

      <button type="button" onClick={burgeerMenuToggle}>
        <span className="block w-4 h-[1.5px] bg-white rounded-full md:hidden"></span>
        <span className="block w-5 h-[1.5px] bg-white my-1 rounded-full md:hidden"></span>
        <span className="block w-4 h-[1.5px] bg-white rounded-full md:hidden"></span>
      </button>
      <div
        className={`fixed top-0 right-0 ${menuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"} transition-[transform, opacity] duration-700 w-full h-full py-36 bg-black flex flex-col items-center gap-5 text-white md:flex-row md:relative md:py-0 md:translate-x-0 md:bg-transparent md:opacity-100 md:w-auto md:h-auto z-50`}
      >
        <button
          type="button"
          className="absolute top-10 right-10 p-2"
          onClick={burgeerMenuToggle}
        >
          <span className="block w-5 h-[1.5px] bg-white rounded-full md:hidden rotate-45  -translate-x-1/2 translate-y-1/2"></span>
          <span className="block w-5 h-[1.5px] bg-white rounded-full md:hidden -rotate-45 -translate-x-1/2 -translate-y-1/2"></span>
        </button>
        <Link onClick={burgeerMenuToggle} href="/marketplace" className="shadow-for-text">
          Marketplace
        </Link>
        <Link onClick={burgeerMenuToggle} href="/rankings" className="shadow-for-text">
          Rankings
        </Link>
        <Link onClick={burgeerMenuToggle} href="/wallet" className="shadow-for-text">
          Connect a wallet
        </Link>
        <div className="h-[60px] w-[152px]">
          <MyLink
            href="/auth"
            onClick={handleButton}
            iconSrc={"/images/icons/User.webp"}
            alt={"icon"}
            text={"Log in"}
            bg={"#A259FF"}
          />
        </div>


        <Image
          className="absolute bottom-10 right-10 h-auto w-auto object-cover blur-[2px] md:hidden "
          src="/images/nft-card-img/nft-31.png"
          alt="mashroom"
          width={120}
          height={120}
        />
      </div>
    </div>
  );
};

export default Header;
