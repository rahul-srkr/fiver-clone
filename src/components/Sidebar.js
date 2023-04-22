import {
    DrawerBody,
    DrawerHeader,
    DrawerContent,
    DrawerCloseButton,
} from '@chakra-ui/react'
import data from "../data"
import ChevronDownIcon from "@heroicons/react/24/outline/ChevronDownIcon"
import GlobeAltIcon from "@heroicons/react/24/outline/GlobeAltIcon"
import { v4 as uuidv4 } from 'uuid';

const Sidebar = () => {

    return (
        <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>
                <div className="flex items-center gap-4">
                    <div className="rounded-full ">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTcoK-dlbjL7C1eAPifV1gUs2n6ukUugyM-J5wFbSEptPEn7GCoJXnFXMDlp9SdP-JcIQ&usqp=CAU" className="h-14 w-14 object-cover" alt="" />
                    </div>
                    <p>rahulsrk309</p>
                </div>
            </DrawerHeader>
            <DrawerBody>
                <ul className="text-lg font-[500] max-[400px]:text-base text-gray-400 flex flex-col space-y-3">
                    <li>Home</li>
                    <li>Inbox</li>
                    <li>Dashboard</li>
                    <li>Lists</li>
                    <li className="relative">
                        <input type="checkbox" className="absolute h-7 top-0 inset-x-0 peer opacity-0" />
                        <p className="">Browse Categories</p>
                        <ChevronDownIcon className="absolute h-5 w-5 stroke-2 top-1 right-0 transition-all duration-500 peer-checked:-rotate-180" />
                        <ul className="ml-5 overflow-hidden max-h-0 transition-all duration-500 peer-checked:max-h-[500rem] peer-checked:mt-3 flex flex-col space-y-3">
                            {
                                data.map(item => <li key={uuidv4()} className="relative">
                                    <input type="checkbox" className="absolute h-7 top-0 inset-x-0 peer opacity-0" />
                                    <p>{item.name}</p>
                                    <ChevronDownIcon className="absolute h-5 w-5 stroke-2 top-1 right-0 transition-all duration-500 peer-checked:-rotate-180" />
                                    <ul className="ml-5 overflow-hidden max-h-0 transition-all duration-500 peer-checked:max-h-[200rem] peer-checked:mt-3 flex flex-col space-y-3">
                                        {
                                            item.subCategory ? item.subCategory?.map(cat => cat.data.map(subcat => <li key={uuidv4()}>{subcat}</li>)) :
                                                item.data.map(cat => <li key={uuidv4()}>{cat}</li>)
                                        }
                                    </ul>
                                </li>)
                            }
                        </ul>
                    </li>
                    <li className="relative">
                        <input type="checkbox" className="absolute top-0 h-7 inset-x-0 peer opacity-0" />
                        <p>Explore</p>
                        <ChevronDownIcon className="absolute h-5 w-5 stroke-2 top-1 right-0 transition-all duration-500 peer-checked:-rotate-180" />
                        <ul className="ml-5 overflow-hidden max-h-0 transition-all duration-500 peer-checked:max-h-96 peer-checked:mt-3 flex flex-col space-y-3">
                            <li className="">Discover</li>
                            <li className="">Learn</li>
                            <li className="">Community</li>
                            <li className="">Podcast</li>
                            <li className="">Blog</li>
                            <li className="">Fiverr Workspace</li>
                            <li className="">Lifestyle</li>
                        </ul>
                    </li>
                    <li className="text-[#02c2a9] font-bold">Fiverr Pro</li>
                </ul>
                <p className="py-4 mt-5 border-b border-b-gray-400 font-bold text-gray-700">Buying</p>
                <p className="py-4 text-lg text-gray-400 font-semibold">Post a Request</p>
                <p className="py-4 mt-3 border-b border-b-gray-400 font-bold text-gray-700">Selling</p>
                <p className="py-4 text-lg text-gray-400 font-semibold">Start Selling</p>
                <p className="py-4 mt-3 border-b border-b-gray-400 font-bold text-gray-700">General</p>
                <ul className="pt-4 text-lg text-gray-400 font-semibold flex flex-col space-y-3">
                    <li>Settings</li>
                    <li>Billing</li>
                    <li>Logout</li>
                    <li className="flex space-x-2 items-center">
                        <p>English</p>
                        <GlobeAltIcon className="h-5 w-5" />
                    </li>
                    <li>₹ INR</li>
                </ul>
            </DrawerBody>
        </DrawerContent>
    )
}
export default Sidebar