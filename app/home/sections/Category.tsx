import CategoryCard from "../components/CategoryCard"
import { categorySectionData } from "../data"

const Category = () => {
    return (
        <div className="mb-[40px] xl:mb-[80px]">
            <h2 className="text-subtitleSec md:text-subtitle mb-[40px] xl:md-[60px]">Browse Categories</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {
                    categorySectionData.map((info) => (
                        <div key={info.id}>
                            <CategoryCard id={info.id} text={info.text} img={info.img} icon={info.icon} imgAlt={info.iconAlt} iconAlt={info.href} href={info.text} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Category
