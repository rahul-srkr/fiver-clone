import StarIcon from "@heroicons/react/24/solid/StarIcon"
import HeartIcon from "@heroicons/react/24/solid/HeartIcon"
import Bars3Icon from "@heroicons/react/24/outline/Bars3Icon"
import ImageCarousel from "./ImageCarousel"

const Card = () => {
    return (
        <div className="border">
            {/* <img src="./assets/card-img.jpeg" className="w-full h-40 object-cover" alt="" /> */}
            <ImageCarousel />
            <div className="px-3">
                <div className="flex h-12 items-center mt-2 space-x-2">
                    <div className="rounded-full">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTcoK-dlbjL7C1eAPifV1gUs2n6ukUugyM-J5wFbSEptPEn7GCoJXnFXMDlp9SdP-JcIQ&usqp=CAU" alt="" className="h-6 w-6" />
                    </div>
                    <div>
                        <p className="font-semibold">Rahul sarkar</p>
                        <p className="text-gray-500">Level 2 Seller</p>
                    </div>
                </div>
                <h2 className="line-clamp-2 font-semibold my-3 text-gray-800 h-12">I will create high quality pixel art for your nft collection</h2>
                <div className="flex h-6 items-center my-3 space-x-2 font-semibold">
                    <StarIcon className="h-4 w-4 text-yellow-400" />
                    <span className="text-gray-400">5.0 (1.38)</span>
                </div>
            </div>
            <hr />
            <div className="flex h-14 items-center justify-between py-2 px-3">
                <div>
                    <div className="flex space-x-2">
                        <Bars3Icon className="h-6 w-6 text-gray-500" />
                        <HeartIcon className="h-5 w-5 text-gray-500" />
                    </div>
                </div>
                <div>
                    <p className="text-xs font-semibold text-gray-600">STARTING AT</p>
                    <p className="text-lg font-semibold text-gray-700">₹3,466</p>
                </div>
            </div>
        </div>
    )
}
export default Card