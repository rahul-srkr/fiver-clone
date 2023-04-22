import ArrowRightIcon from "@heroicons/react/24/outline/ArrowRightIcon"
import ChevronLeftIcon from "@heroicons/react/24/outline/ChevronLeftIcon"
import ChevronRightIcon from "@heroicons/react/24/outline/ChevronRightIcon"
import Card from "../Utils/Card"
import React, { useEffect, useRef, useState } from "react";
import SmallCard from "../Utils/SmallCard";

const SectionTwo = () => {
    let scrollCards = useRef()
    const [rightArrow, setRightArrow] = useState("block");
    const [leftArrow, setLeftArrow] = useState("opacity-40");
    const [screenWidth, setScreenWidth] = useState(0);
    const [cardsRightTransparent, setCardsRightTransparent] = useState("block");
    const [cardsLeftTransparent, setCardsLeftTransparent] = useState("hidden");

    useEffect(() => {
        if (typeof window !== "undefined" && window) {
            setScreenWidth(window.screen.width)
        }
    }, []);

    if (screenWidth > 1350) {
        return (
            <main className="w-full md:px-8">
                <div className="md:border md:p-7 py-5 rounded-md relative">
                    <div className="flex items-center justify-between mb-5">
                        <div className="items-center flex space-x-2">
                            <h2 className="text-xl font-bold text-gray-600">Continue browsing</h2>
                            <ArrowRightIcon className="h-5 w-5 font-semibold" />
                        </div>

                        <div className="flex items-center space-x-3">
                            <div onClick={() => scrollCards.current.scrollLeft -= 500} className={`bg-white rounded-full p-2 shadow ${leftArrow} cursor-pointer`} ><ChevronLeftIcon className="w-4 h-4" /></div>
                            <div onClick={() => scrollCards.current.scrollLeft += 500} className={`bg-white rounded-full p-2 shadow ${rightArrow} cursor-pointer`}><ChevronRightIcon className="w-4 h-4" /></div>
                        </div>
                    </div>
                    <div className={`${cardsRightTransparent} w-14 z-10 bg-gradient-to-l to-transparent via-white from-white h-[25rem] right-0 absolute`}></div>
                    <div className={`w-14 z-10 bg-gradient-to-r to-transparent via-white from-white h-[25rem] left-0 absolute ${cardsLeftTransparent}`}></div>
                    <ul ref={scrollCards} onScroll={(e) => {
                        if (e.target.scrollLeft > 0) {
                            setLeftArrow("block")
                            setRightArrow("block")
                        } else {
                            setLeftArrow("opacity-40")
                            setRightArrow("block")
                            setCardsLeftTransparent("hidden")
                            setCardsRightTransparent("block")
                        }

                        if (e.target.scrollWidth - e.target.clientWidth == e.target.scrollLeft) {
                            setLeftArrow("block")
                            setRightArrow("opacity-40")
                            setCardsRightTransparent("hidden")
                            setCardsLeftTransparent("block")
                        }
                    }} className="flex space-x-4 justify-between overflow-x-scroll hide-scrollbar scroll-smooth">
                        <li className="w-[16rem]"><Card /></li>
                        <li className="w-[16rem]"><Card /></li>
                        <li className="w-[16rem]"><Card /></li>
                        <li className="w-[16rem]"><Card /></li>
                        <li className="w-[16rem]"><Card /></li>
                        <li className="w-[16rem]"><Card /></li>
                        <li className="w-[16rem]"><Card /></li>
                        <li className="w-[16rem]"><Card /></li>
                    </ul>
                </div>

            </main>
        )
    } else {
        return (
            <main className="w-full px-4 md:px-8">
                <div className="md:border md:p-8 py-5 rounded-md relative">
                    <div className="flex items-center justify-between mb-5">
                        <div className="items-center flex space-x-2">
                            <h2 className="text-xl font-bold text-gray-600">Continue browsing</h2>
                            <ArrowRightIcon className="h-5 w-5 font-semibold" />
                        </div>
                    </div>
                    <ul className="flex items-center space-x-4 overflow-x-scroll hide-scrollbar scroll-smooth">
                        <li><SmallCard /></li>
                        <li><SmallCard /></li>
                        <li><SmallCard /></li>
                        <li><SmallCard /></li>
                        <li><SmallCard /></li>
                        <li><SmallCard /></li>
                        <li><SmallCard /></li>
                        <li><SmallCard /></li>
                        <li><SmallCard /></li>
                    </ul>
                </div>
            </main>
        )
    }
}

export default SectionTwo