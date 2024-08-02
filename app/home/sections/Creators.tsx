import MyButton from "@/components/common/MyButton"
import CreatorCard from "../components/CreatorCard"

const Creators = () => {
    return (
        <div className="relative my-10 xl:my-20">
            <h2 className="text-subtitleSec md:text-subtitle">Top creators</h2>
            <span className="flex mt-[10px] mb-[40px] md:mb-[60px]">Checkout Top Rated Creators on the NFT Marketplace.</span>
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                <CreatorCard />
                <CreatorCard />
                <CreatorCard />
                <CreatorCard />
                <CreatorCard />
            </div>
            <div className="h-[60px] w-[100%] mt-10 md:mt-0 md:w-[244px] md:absolute top-5 right-0 border border-purple-500 rounded-[20px]">
                <MyButton
                    href='/rankings'
                    iconSrc='/images/icons/RocketLaunch.webp'
                    alt='rocket icon'
                    text='View Rankings'
                    bg='transparent'
                />
            </div>
        </div>
    )
}

export default Creators
