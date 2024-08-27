import Image from "next/image"
import Link from "next/link"

interface CreatorCardProps {
    id: number
    index: number
    icon: string
    volume_all: number
    name: string
}
const CreatorCard: React.FC<CreatorCardProps> = ({ id, index, icon, volume_all, name }) => {
    return (
        <Link href={`/rankings/${id}`} className="flex xl:flex-col justify-between items-center w-[100%] h-[100px] xl:h-[238px] bg-neutral-700 rounded-[20px] p-5 shadow-for-box">
            <div className="relative">
                <span className="absolute -top-2 -left-2 xl:-left-12 xxl:-left-24  bg-zinc-800 text-zinc-500 w-[30px] h-[30px] rounded-full text-center leading-[30px]">{index}</span>
                <Image
                    src={`/images/user-avatars/${icon}`}
                    alt="Storefront"
                    width={60}
                    height={60}
                    className=" rounded-full w-[60px] h-[60px] xl:w-[120px] xl:h-[120px]"
                />
            </div>

            <div className="xl:flex xl:flex-col xl:items-center">
                <span className="text-textBig">{name}</span>
                <div className="mt-3">
                    <span className="text-zinc-500 mr-3">Total Sales:</span>
                    <span>{volume_all} ETH</span>
                </div>
            </div>
        </Link>
    )
}

export default CreatorCard
