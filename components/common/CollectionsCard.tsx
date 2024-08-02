import Image from "next/image"

const CollectionsCard = () => {
    return (
        <div className="w-[100%] md:w-[330px]">
            <Image
                src="/images/main-page-img/AnyConv.com__Image Placeholder.webp"
                alt="Storefront"
                width={315}
                height={315}
                className="w-full rounded-[20px] mb-4"
            />
            <div className="flex gap-4">
                <Image
                    src="/images/main-page-img/AnyConv.com__Image Placeholder.webp"
                    alt="Storefront"
                    width={40}
                    height={40}
                    className="w-full rounded-[20px]"
                />
                <Image
                    src="/images/main-page-img/AnyConv.com__Image Placeholder.webp"
                    alt="Storefront"
                    width={40}
                    height={40}
                    className="w-full rounded-[20px]"
                />
                <div className="w-full rounded-[20px] bg-purple-500 flex justify-center items-center">212+</div>
            </div>
            <div className="h-24 flex flex-col justify-center gap-2 pl-4">
                <span className="text-textBig">Space Walking</span>
                <div className="flex gap-2">
                    <Image
                        src="/images/main-page-img/AnyConv.com__Image Placeholder.webp"
                        alt="Storefront"
                        width={24}
                        height={24}
                        className="rounded-full"
                    />
                    <span>Animakid</span>
                </div>
            </div>
        </div>
    )
}

export default CollectionsCard

