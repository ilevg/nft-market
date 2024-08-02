import MyButton from "@/components/common/MyButton"
import NftCard from "@/components/common/NftCard"

const DiscoverNft = () => {
    return (
        <div className="relative mb-[40px] xl:mb-[80px]">
            <h2 className="text-subtitleSec md:text-subtitle">Discover More NFTs</h2>
            <span className="flex mt-[10px] mb-[40px] md:mb-[60px]">Explore new trending NFTs</span>
            <div className="flex flex-col gap-5 md:flex-row md:gap-7">
                <NftCard
                    id='string'
                    text='string'
                    img='string'
                    icon='string'
                    imgAlt='string'
                    iconAlt='string'
                    href='string'
                /><NftCard
                    id='string'
                    text='string'
                    img='string'
                    icon='string'
                    imgAlt='string'
                    iconAlt='string'
                    href='string'
                /><NftCard
                    id='string'
                    text='string'
                    img='string'
                    icon='string'
                    imgAlt='string'
                    iconAlt='string'
                    href='string'
                />
            </div>
            <div className="h-[60px] w-[100%] mt-10 md:mt-0 md:w-[244px] md:absolute top-5 right-0 border border-purple-500 rounded-[20px]">
                <MyButton
                    href='/rankings'
                    iconSrc='/images/icons/Eye-blue.png'
                    alt='rocket icon'
                    text='See All'
                    bg='transparent'
                />
            </div>
        </div>
    )
}

export default DiscoverNft
