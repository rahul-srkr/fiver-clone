import StarIcon from "@heroicons/react/24/solid/StarIcon"
import HeartIcon from "@heroicons/react/24/solid/HeartIcon"

const MediumCard = () => {
    return (
        <div className="border-b mt-4">
            <div className="flex space-x-3 h-28">
                <div className="relative flex items-center w-40 min-w-[150px]">
                    <img src="./assets/card-img.jpeg" className="w-full h-24 object-cover rounded-md" alt="" />
                    <HeartIcon className="h-5 w-5 text-gray-500 absolute top-2 right-2" />
                </div>
                <div className="flex flex-col justify-between">
                    <h2 className="line-clamp-2 font-semibold text-gray-800">I will create high quality pixel art for your nft collection</h2>
                    <div className="flex items-center space-x-2 font-semibold">
                        <StarIcon className="h-4 w-4 text-yellow-400" />
                        <span className="text-gray-400">5.0 (1.38)</span>
                    </div>
                </div>
            </div>
            <div className="flex justify-between py-1 items-center">
                <div className="flex items-center space-x-2">
                    <div className="rounded-full">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTcoK-dlbjL7C1eAPifV1gUs2n6ukUugyM-J5wFbSEptPEn7GCoJXnFXMDlp9SdP-JcIQ&usqp=CAU" alt="" className="h-6 w-6" />
                    </div>
                    <div>
                        <p className="font-semibold text-sm">Rahul sarkar</p>
                        <p className="text-gray-500 text-[.95rem]">Level 2 Seller</p>
                    </div>
                </div>
                <div>
                    <p className="text-xs font-semibold text-gray-600">STARTING AT</p>
                    <p className="text-lg font-semibold text-gray-700 text-right">₹3,466</p>
                </div>
            </div>
        </div>
    )
}
export default MediumCard