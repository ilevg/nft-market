import Image from "next/image";
import Link from "next/link";
import MyButton from "./MyButton";

const Footer = () => {
  return (
    <div className="bg-neutral-700 py-[40px]">
      <div className=" text-stone-300 flex flex-col gap-7 xl:flex-row xl:justify-between w-[100%] md:w-[690px] xl:w-[1050px] xxl:w-[1450px] my-0 mx-auto px-5 md:px-0" >
        <div className="flex flex-col gap-5">
          <Link href="/" className=" mb-3 shadow-for-text w-fit">
            <div className="flex items-center">
              <Image
                src="/images/icons/Storefront-pink.webp"
                alt="Storefront"
                width={24}
                height={24}
                className="md:w-[32px] md:h-[32px]  mr-2"
              />
              <span className="text-textBig md:text-xl font-bold text-white">
                NFT Marketplace
              </span>
            </div>
          </Link>
          <span>NFT marketplace UI created with Anima for Figma.</span>
          <span>Join our community</span>
          <div className="flex gap-3">
            <Link href='https://www.discord.com/' className="shadow-for-box rounded-[10px]">
              <Image
                src="/images/icons/DiscordLogo.webp"
                alt="discord"
                width={32}
                height={32}
              />

            </Link>
            <Link href='https://www.youtube.com/' className="shadow-for-box rounded-[10px]">
              <Image
                src="/images/icons/YoutubeLogo.webp"
                alt="discord"
                width={32}
                height={32}
              />
            </Link>
            <Link href='https://www.twitter.com/' className="shadow-for-box rounded-[10px]">
              <Image
                src="/images/icons/TwitterLogo.webp"
                alt="discord"
                width={32}
                height={32}
              />
            </Link>
            <Link href='https://www.instagram.com' className="shadow-for-box rounded-[10px]">
              <Image
                src="/images/icons/InstagramLogo.webp"
                alt="discord"
                width={32}
                height={32}
              />
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <h2 className="text-textBig md:text-xl font-bold text-white mb-3">Explore</h2>
          <Link href="/marketplace" className="shadow-for-text">
            Marketplace
          </Link>
          <Link href="/rankings" className="shadow-for-text">
            Rankings
          </Link>
          <Link href="/wallet" className="shadow-for-text">
            Connect a wallet
          </Link>
        </div>

        <div className="flex flex-col gap-5">
          <h2 className="text-textBig md:text-xl font-bold text-white mb-3">Join our weekly digest</h2>
          <span>Get exclusive promotions & updates straight to your inbox.</span>
          <div className="relative md:w-[420px]">
            <input
              type="text"
              placeholder="Enter Your Email Address"
              className="w-full h-[46px] md:h-[60px] rounded-[20px] px-5 placeholder:text-black"
            />
            <div className="w-[100%] h-[46px] mt-5 md:mt-0 md:absolute md:top-0 md:right-0 md:w-[178px] md:h-[60px]">
              <MyButton
                href=''
                text={'Subscribe'}
                bg={'#A259FF'}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="pt-5 mt-7 border-t border-t-zinc-500 w-[100%] md:w-[690px] xl:w-[1050px] xxl:w-[1450px] my-0 mx-auto px-5 md:px-0 text-stone-300">Ⓒ 2024 NFT Market. All rights reserved.</div>
    </div>

  )
}

export default Footer
