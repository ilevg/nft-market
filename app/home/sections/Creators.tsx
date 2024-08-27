"use client"
import MyButton from "@/components/common/MyButton"
import CreatorCard from "../components/CreatorCard"
import { useFetchData } from "@/hooks/useFetchData"

const Creators = () => {
    const { authors } = useFetchData({ endpoint: '/api/authors' })
    return (
        <div className="relative my-10 xl:my-20">
            <h2 className="text-subtitleSec md:text-subtitle">Top creators</h2>
            <span className="flex mt-[10px] mb-[40px] md:mb-[60px]">Checkout Top Rated Creators on the NFT Marketplace.</span>
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                {
                    authors.map((author, index) => {
                        if (index >= 8) return
                        return <div key={author.id}>
                            <CreatorCard
                                id={author.id}
                                index={index + 1}
                                icon={author.icon}
                                volume_all={author.volume_all}
                                name={author.name}
                            />
                        </div>

                    })
                }
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
