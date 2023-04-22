import StarIcon from "@heroicons/react/24/solid/StarIcon"
import HeartIcon from "@heroicons/react/24/solid/HeartIcon"
import Bars3Icon from "@heroicons/react/24/outline/Bars3Icon"

const SmallCard = () => {
    return (
        <div className="flex flex-col w-36 min-w-[144px]">
            <div className="">
                <img src="./assets/card-img.jpeg" className="w-full h-24 object-cover rounded-sm" alt="" />
            </div>
            <div className="flex items-center space-x-1 font-semibold mt-1">
                <StarIcon className="h-3 w-3 text-yellow-400" />
                <span className="text-gray-400 text-sm"><span className="text-yellow-400">5.0</span> (1.38)</span>
            </div>
            <h2 className="line-clamp-2 font-semibold text-gray-600 text-sm mt-1">I will create high quality pixel art for your nft collection</h2>
            <p className="text-sm font-bold text-gray-700 mt-1">₹3,466</p>
        </div>
    )
}
export default SmallCard