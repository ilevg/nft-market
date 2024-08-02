"use client";
import Image from "next/image";
import Link from "next/link";
import MyButton from "./MyButton";
import { useEffect, useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const screenWidth = typeof window !== "undefined" && window.innerWidth

  useEffect(() => {
    if (menuOpen && screenWidth && screenWidth < 834) {
      document.body.classList.add("overflow-hidden");
      document.body.classList.add("pr-4");
    } else {
      document.body.classList.remove("overflow-hidden");
      document.body.classList.remove("pr-4");
    }
  }, [menuOpen]);

  const burgeerMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  function handleButton() {
    setMenuOpen(!menuOpen);
    console.log("sda");
  }

  return (
    <div className="flex justify-between items-center h-[54px] md:h-[100px]  px-5 md:px-[50px] bg-zinc-800 relative z-40">
      <Link href="/">
        <div className="flex items-center">
          <Image
            src="/images/icons/Storefront-pink.webp"
            alt="Storefront"
            width={24}
            height={24}
            className="md:w-[32px] md:h-[32px]  mr-2"
          />
          <span className="text-[20px] md:text-xl font-bold text-white">
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
        <Link onClick={burgeerMenuToggle} href="/marketplace">
          Marketplace
        </Link>
        <Link onClick={burgeerMenuToggle} href="/rankings">
          Rankings
        </Link>
        <Link onClick={burgeerMenuToggle} href="/wallet">
          Connect a wallet
        </Link>
        <div className="h-[60px] w-[152px]">
          <MyButton
            href="/authentication"
            onClick={handleButton}
            iconSrc={"/images/icons/User.webp"}
            alt={"icon"}
            text={"Sign Up"}
            bg={"#A259FF"}
          />
        </div>


        <Image
          className="absolute bottom-10 right-10 h-auto w-auto object-cover blur-[2px] md:hidden"
          src="/images/nft-card-img/Image-12.webp"
          alt="mashroom"
          width={150}
          height={150}
        />
      </div>
    </div>
  );
};

export default Header;
