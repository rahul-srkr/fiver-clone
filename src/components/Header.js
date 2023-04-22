import MagnifyingGlassIcon from "@heroicons/react/24/outline/MagnifyingGlassIcon"
import BellIcon from "@heroicons/react/24/outline/BellIcon"
import EnvelopeIcon from "@heroicons/react/24/outline/EnvelopeIcon"
import HeartIcon from "@heroicons/react/24/outline/HeartIcon"
import Bars3Icon from "@heroicons/react/24/outline/Bars3Icon"
import { useEffect, useRef, useState } from "react"
import {
    Drawer,
    DrawerOverlay,
} from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'
import { useRouter } from "next/router"
import Sidebar from "./Sidebar"
import { Logo } from "./Svg"
import CategoriesBar from "./CategoriesBar"

const Header = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()

    const [screenWidth, setScreenWidth] = useState(0);

    useEffect(() => {
        if (typeof window !== "undefined" && window) {
            setScreenWidth(window.screen.width)
        }
    }, []);

    return (
        <header>
            <Drawer
                isOpen={isOpen}
                placement='left'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <Sidebar />
            </Drawer>
            <div className="h-36 border-b-slate-200 flex flex-col border p-6 md:h-20 md:px-8 md:flex-row">
                <div className="flex items-center w-full md:w-auto">
                    <Bars3Icon className="h-8 w-8 justify-start md:mr-2 lg:hidden" ref={btnRef} onClick={onOpen} />
                    <a href="#" className="flex m-auto md:mr-8 md:ml-0">
                        <Logo />
                    </a>
                </div>
                <form action="" className="relative flex flex-grow justify-center w-full items-end md:mr-8 md:items-center md:w-auto">
                    <input placeholder="What service are you looking for today?" className="h-8 border w-full border-gray-400 rounded-md placeholder:text-extra-light p-5 flex-grow md:h-11 md:w-auto md:p-5 md:rounded-tl-md md:rounded-tr-none md:rounded-br-none md:rounded-bl-md md:placeholder:text-lg md:placeholder:font-semibold" type="text" name="" id="" />
                    <button className=" hidden py-3 px-4 -ml-1 bg-gray-900 rounded-tr-md rounded-br-md md:block"><MagnifyingGlassIcon className="h-5 w-5 text-white" /></button>
                    <div className="hidden absolute top-20 rounded-md w-full border h-20 bg-white md:top-11"></div>
                </form>

                <ul className="hidden items-center md:flex lg:space-x-7">
                    <li className="relative hidden lg:block tooltip-icon cursor-pointer">
                        <BellIcon className="h-6 w-6 text-super-light" />
                        <div className="absolute hidden h-2 w-2 -top-1 right-0 bg-pink-500 rounded-full lg:block"></div>
                        <div className="bell-tooltip">Notification</div>
                    </li>
                    <li className="tooltip-icon relative cursor-pointer">
                        <EnvelopeIcon className="h-6 w-6 text-super-light hidden lg:block" />
                        <div className="absolute hidden h-2 w-2 -top-1 -right-1 bg-pink-500 rounded-full lg:block"></div>
                        <div className="message-tooltip">Messages</div>
                    </li>
                    <li className="tooltip-icon relative cursor-pointer hidden xl:block">
                        <HeartIcon className="h-6 w-6 text-super-light" />
                        <div className="heart-tooltip">Lists</div>
                    </li>
                    <li className="text-lg font-semibold text-light hidden xl:block hover:text-primary-teal transition-all cursor-pointer">
                        Orders
                    </li>
                    <li className="relative text-lg font-semibold text-primary-teal hidden lg:block tooltip-icon cursor-pointer">
                        Switch to selling
                        <div className="order-tooltip">Access all the tools you need to sell your services. We&apos;ll set this as your default mode.</div>
                    </li>
                    <li className="rounded-full relative md:block">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTcoK-dlbjL7C1eAPifV1gUs2n6ukUugyM-J5wFbSEptPEn7GCoJXnFXMDlp9SdP-JcIQ&usqp=CAU" className="h-9 w-9" alt="" />
                        <div className="absolute h-3 w-3 bottom-0 border-white border right-0 text-primary-teal rounded-full"></div>
                    </li>
                </ul>
            </div>
            {
                screenWidth > 1350 && <CategoriesBar />
            }
        </header>
    )
}

export default Header