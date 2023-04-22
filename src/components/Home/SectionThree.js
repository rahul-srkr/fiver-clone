import ChevronLeftIcon from "@heroicons/react/24/outline/ChevronLeftIcon"
import ChevronRightIcon from "@heroicons/react/24/outline/ChevronRightIcon"
import Card from "../Utils/Card"
import React, { useEffect, useRef, useState } from "react";
import MediumCard from "../Utils/MediumCard";

const SectionThree = () => {
    let scrollCards = useRef()
    const [rightArrow, setRightArrow] = useState("block");
    const [leftArrow, setLeftArrow] = useState("hidden");
    const [screenWidth, setScreenWidth] = useState(0);

    useEffect(() => {
        if (typeof window !== "undefined" && window) {
            setScreenWidth(window.screen.width)
        }
    }, []);

    if (screenWidth > 1350) {
        return (
            <main className="w-full px-6 md:px-8">
                <div className="py-5 rounded-md relative">
                    <div className="flex items-center justify-between mb-5">
                        <h2 className="text-lg md:text-2xl font-bold text-gray-700">Most popular Gigs in <span className="text-[#446ee7]">NFT Art</span></h2>
                    </div>


                    <div onClick={() => scrollCards.current.scrollLeft -= 528} className={`absolute z-10 -left-5 bottom-52 bg-white rounded-full p-2 shadow-md ${leftArrow}`}><ChevronLeftIcon className="w-8 h-8" /></div>

                    <div onClick={() => scrollCards.current.scrollLeft += 528} className={`absolute z-10 -right-5 bottom-52 bg-white rounded-full p-2 shadow ${rightArrow}`}><ChevronRightIcon className="w-8 h-8" /></div>

                    <ul ref={scrollCards} onScroll={(e) => {
                        if (e.target.scrollLeft > 0) {
                            setLeftArrow("block")
                            setRightArrow("block")
                        } else {
                            setLeftArrow("hidden")
                            setRightArrow("block")
                        }

                        if (e.target.scrollWidth - e.target.clientWidth == e.target.scrollLeft) {
                            setLeftArrow("block")
                            setRightArrow("hidden")
                        }
                    }} className="flex space-x-8 justify-between overflow-x-scroll hide-scrollbar scroll-smooth">
                        <li className="w-[14.5rem]"><Card /></li>
                        <li className="w-[14.5rem]"><Card /></li>
                        <li className="w-[14.5rem]"><Card /></li>
                        <li className="w-[14.5rem]"><Card /></li>
                        <li className="w-[14.5rem]"><Card /></li>
                        <li className="w-[14.5rem]"><Card /></li>
                        <li className="w-[14.5rem]"><Card /></li>
                        <li className="w-[14.5rem]"><Card /></li>
                        <li className="w-[14.5rem]"><Card /></li>
                        <li className="w-[14.5rem]"><Card /></li>
                    </ul>
                </div>
            </main>
        )
    } else {
        return (
            <main className="w-full px-4 md:px-8">
                <div className="py-5 rounded-md relative">
                    <div className="flex items-center justify-between mb-5">
                        <h2 className="text-lg md:text-2xl font-bold text-gray-700">Most popular Gigs in <span className="text-[#446ee7]">NFT Art</span></h2>
                    </div>
                    <div className="mt-8">
                        <MediumCard />
                        <MediumCard />
                        <MediumCard />
                        <MediumCard />
                        <MediumCard />
                        <MediumCard />
                        <MediumCard />
                    </div>
                </div>
            </main>
        )
    }
}
export default SectionThree