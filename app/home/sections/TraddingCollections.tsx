import TraddingCollectionsCard from "../../../components/common/CollectionsCard"

const TraddingCollections = () => {
    return (
        <div>
            <h2 className="text-subtitleSec md:text-subtitle">Trending Collection</h2>
            <span className="flex mt-[10px] mb-[40px] md:mb-[60px]">Checkout our weekly updated trending collection.</span>
            <div className="flex justify-between gap-7">
                <TraddingCollectionsCard />
                {/* <TraddingCollectionsCard />
                <TraddingCollectionsCard /> */}
            </div>
        </div>
    )
}

export default TraddingCollections
