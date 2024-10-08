import Image from "next/image"
import Link from "next/link"

interface CategoryCard {
    id: string
    text: string
    img: string
    icon: string
    imgAlt: string
    iconAlt: string
    href: string
}
const CategoryCard: React.FC<CategoryCard> = ({ id, text, img, icon, imgAlt, iconAlt, href }) => {
    return (
        <Link href={'/marketplace'} id={id} className="w-[100%] m-auto shadow-for-box rounded-[20px] block">
            <div className="w-full  h-auto relative">
                <Image
                    src={img}
                    alt={imgAlt}
                    width={150}
                    height={150}
                    className=" flex w-full h-auto blur-sm"
                />
                <Image
                    src={icon}
                    alt={iconAlt}
                    width={80}
                    height={80}
                    className="absolute inset-0 m-auto"
                />
            </div>

            <div className="bg-neutral-700 rounded-b-[20px] w-full h-[68px] xl:h-[76px] flex items-center">
                <span className="ml-4">{text}</span>
            </div>
        </Link>
    )
}

export default CategoryCard
