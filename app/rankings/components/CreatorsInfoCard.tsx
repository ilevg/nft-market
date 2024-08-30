
import Image from "next/image"
import Link from "next/link";
type Tab = 'all time' | '30d' | '7d' | '1d';

interface Author {
    activeTab: Tab;
    id: number;
    index: number;
    name: string;
    icon: string;
    change_all: number;
    change_month: number;
    change_week: number;
    change_day: number;
    nft_sold_all: number;
    nft_sold_month: number;
    nft_sold_week: number;
    nft_sold_day: number;
    volume_all: number;
    volume_month: number;
    volume_week: number;
    volume_day: number;
}

const CreatorsInfoCard: React.FC<Author> = ({
    activeTab,
    id,
    index,
    name,
    icon,
    change_all,
    change_month,
    change_week,
    change_day,
    nft_sold_all,
    nft_sold_month,
    nft_sold_week,
    nft_sold_day,
    volume_all,
    volume_month,
    volume_week,
    volume_day
}) => {
    const tabData: Record<Tab, { change: number; nftsSold: number; volume: number }> = {
        'all time': {
            change: change_all,
            nftsSold: nft_sold_all,
            volume: volume_all
        },
        '30d': {
            change: change_month,
            nftsSold: nft_sold_month,
            volume: volume_month
        },
        '7d': {
            change: change_week,
            nftsSold: nft_sold_week,
            volume: volume_week
        },
        '1d': {
            change: change_day,
            nftsSold: nft_sold_day,
            volume: volume_day
        }
    };

    const { change, nftsSold, volume } = tabData[activeTab];
    return (
        <Link href={`/rankings/${id}`} className="flex justify-between items-center w-[100%] h-[50px] md:h-[60px] xl:h-[85px] bg-neutral-700 rounded-[20px] p-5 text-[12px] transition-all hover:scale-105">
            <div className="flex gap-4 items-center md:w-[30%]">
                <span className="bg-zinc-800 text-zinc-500 w-[30px] h-[30px] rounded-full text-center leading-[30px]">{index + 1}</span>
                <Image
                    src={`/images/user-avatars/${icon}`}
                    alt="author-icon"
                    width={24}
                    height={24}
                    className="rounded-full w-[24px] h-[24px] md:w-[40px] md:h-[40px] xl:w-[60px] xl:h-[60px]"
                />
                <span className="text-[12px] xl:text-textBig">{name}</span>
            </div>
            <span
                className="hidden md:block"
                style={{ color: change > 0 ? '#16a34a' : 'red' }}
            >{change} %</span>
            <span className="hidden xl:block">{nftsSold}</span>
            <span>{volume} ETH</span>
        </Link>
    )
}

export default CreatorsInfoCard
