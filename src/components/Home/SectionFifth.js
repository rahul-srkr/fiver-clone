import ChevronLeftIcon from "@heroicons/react/24/outline/ChevronLeftIcon"
import ChevronRightIcon from "@heroicons/react/24/outline/ChevronRightIcon"
import Card from "../Utils/Card"
import React, { useEffect, useRef, useState } from "react";
import MediumCard from "../Utils/MediumCard";

const SectionFifth = () => {
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
            <div className="md:px-8 md:mt-20">
                <div className="pt-6 md:p-6 bg-[#fafafa] relative">
                    <div className="mb-6 flex items-center justify-between">
                        <div>
                            <h1 className="text-lg md:text-2xl font-bold text-gray-700">Verified Pro services in <span className="text-[#02c2a9]">NFT Art</span></h1>
                            <p className="text-[.9rem] py-1 text-gray-600 font-semibold">Hand-vetted talent for all your professional needs.</p>
                        </div>
                        <div className="items-center text-[#02c2a9] text-lg font-semibold space-x-2 hidden md:flex">
                            <div className="">See All</div>
                            <ChevronRightIcon className="w-4 h-4 stroke-2" />
                        </div>
                    </div>

                    <div onClick={() => scrollCards.current.scrollLeft -= 400} className={`lg:hidden absolute z-10 -left-0 bottom-52 bg-white rounded-full p-2 shadow-md ${leftArrow}`} ><ChevronLeftIcon className="w-8 h-8" /></div>

                    <div onClick={() => scrollCards.current.scrollLeft += 400} className={`lg:hidden absolute z-10 -right-0 bottom-52 bg-white rounded-full p-2 shadow ${rightArrow}`} ><ChevronRightIcon className="w-8 h-8" /></div>
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
                    }} className="flex space-x-9 justify-between overflow-x-scroll hide-scrollbar scroll-smooth">
                        <li className="w-[13.7rem]"><Card /></li>
                        <li className="w-[13.7rem]"><Card /></li>
                        <li className="w-[13.7rem]"><Card /></li>
                        <li className="w-[13.7rem]"><Card /></li>
                        <li className="w-[13.7rem]"><Card /></li>
                        <li className="w-[13.7rem]"><Card /></li>
                        <li className="w-[13.7rem]"><Card /></li>
                        <li className="w-[13.7rem]"><Card /></li>
                        <li className="w-[13.7rem]"><Card /></li>
                        <li className="w-[13.7rem]"><Card /></li>
                    </ul>
                    <div className="flex items-center text-[#02c2a9] text-lg font-semibold justify-between m-3 md:hidden">
                        <div className="text-base">See All</div>
                        <ChevronRightIcon className="w-4 h-4 stroke-2" />
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="md:px-4 md:my-16">
                <div className="pt-6 p-4 md:p-6 bg-[#fafafa] relative">
                    <div className="mb-6 flex items-center justify-between">
                        <div>
                            <h1 className="text-lg md:text-2xl font-bold text-gray-700">Verified Pro services in <span className="text-[#02c2a9]">NFT Art</span></h1>
                            <p className="text-[.9rem] py-1 text-gray-600 font-semibold">Hand-vetted talent for all your professional needs.</p>
                        </div>
                        <div className="items-center text-[#02c2a9] text-lg font-semibold space-x-2 hidden md:flex">
                            <div className="">See All</div>
                            <ChevronRightIcon className="w-4 h-4 stroke-2" />
                        </div>
                    </div>
                    <div>
                        <MediumCard />
                        <MediumCard />
                        <MediumCard />
                        <MediumCard />
                        <MediumCard />
                        <MediumCard />
                        <MediumCard />
                    </div>
                    <div className="flex items-center text-[#02c2a9] text-lg font-semibold justify-between m-3 md:hidden">
                        <div className="text-base">See All</div>
                        <ChevronRightIcon className="w-4 h-4 stroke-2" />
                    </div>
                </div>
            </div>
        )
    }
}

export default SectionFifth