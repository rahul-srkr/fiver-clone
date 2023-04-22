import Header from "../components/Header"
import Footer from "../components/Footer"
import HomeIcon from "@heroicons/react/24/outline/HomeIcon"
import PlayCircleIcon from "@heroicons/react/24/solid/PlayCircleIcon"
import ChevronDownIcon from "@heroicons/react/24/outline/ChevronDownIcon"
import { Switch } from '@chakra-ui/react'
import { useEffect, useRef, useState } from "react"
import Card from "../components/Utils/Card"
import Pagination from "../components/Utils/Pagination"
import ChevronLeftIcon from "@heroicons/react/24/outline/ChevronLeftIcon"
import ChevronRightIcon from "@heroicons/react/24/outline/ChevronRightIcon"
import CheckIcon from "@heroicons/react/24/outline/CheckIcon"
import AdjustmentsHorizontalIcon from "@heroicons/react/24/outline/AdjustmentsHorizontalIcon"
import XMarkIcon from "@heroicons/react/24/outline/XMarkIcon"
import Bars3BottomLeftIcon from "@heroicons/react/24/outline/Bars3BottomLeftIcon"
import HistoryCard from "../components/HistoryCard"
import SellerDetail from "../components/Filters/SellerDetail"
import Budget from "../components/Filters/Budget"
import DeliveryTime from "../components/Filters/DeliveryTime"
import MediumCard from "../components/Utils/MediumCard";
import SmallPagination from "../components/Utils/SmallPagination"
import { v4 as uuidv4 } from 'uuid';

const Category = () => {

    const [filterToggle, setFilterToggle] = useState({
        sellerDetail: false,
        budget: false,
        deliveryTime: false
    });

    const [showFilterModal, setShowFilterModal] = useState({
        filter: false,
        sort: false
    });
    const [screenWidth, setScreenWidth] = useState(0);

    useEffect(() => {
        if (typeof window !== "undefined" && window) {
            setScreenWidth(window.screen.width)
        }
    }, []);

    const [filterBottomShadow, setFilterBottomShadow] = useState(false);

    const [currentPage, setCurrentPage] = useState(1);
    const [cardsPerPage, setCardsPerPage] = useState(12);

    const allCards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100]

    const indexOfLastCard = currentPage * cardsPerPage
    const indexOfFirstCard = indexOfLastCard - cardsPerPage
    const currentCards = allCards.slice(indexOfFirstCard, indexOfLastCard)

    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    const leftBtn = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1)
    }

    const rightBtn = () => {
        if (currentPage < Math.ceil(allCards.length / cardsPerPage)) setCurrentPage(currentPage + 1)
    }

    if (typeof window !== "undefined" && window) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 280) {
                setFilterBottomShadow(true)
            } else {
                setFilterBottomShadow(false)
            }
        })
    }



    const handleFilterToggle = (e) => {

        if (e.currentTarget.id === "seller_details") {
            if (!filterToggle.sellerDetail) {
                setFilterToggle({ sellerDetail: true, budget: false, deliveryTime: false })
            } else {
                setFilterToggle({ sellerDetail: false, budget: false, deliveryTime: false })
            }
        }

        if (e.currentTarget.id === "budget") {
            if (!filterToggle.budget) {
                setFilterToggle({ sellerDetail: false, budget: true, deliveryTime: false })
            } else {
                setFilterToggle({ sellerDetail: false, budget: false, deliveryTime: false })
            }
        }

        if (e.currentTarget.id === "delivery_time") {
            if (!filterToggle.deliveryTime) {
                setFilterToggle({ sellerDetail: false, budget: false, deliveryTime: true })
            } else {
                setFilterToggle({ sellerDetail: false, budget: false, deliveryTime: false })
            }
        }
    }

    let scrollCards = useRef()
    const [rightArrow, setRightArrow] = useState("block");
    const [leftArrow, setLeftArrow] = useState("hidden");

    if (screenWidth > 1350) {
        return (
            <div>
                <Header />
                <div className="flex items-center space-x-2 mt-9 px-8">
                    <HomeIcon className="w-4 h-4 mr-2" />
                    <p className="text-gray-400">/</p>
                    <p>Graphics & Design</p>
                </div>
                <div className="mt-4 px-8">
                    <h1 className="text-3xl font-bold">Graphics & Design</h1>
                    <div className="flex items-center space-x-3 mt-3">
                        <p className="text-gray-500 font-semibold">Create new fonts, typography, hand lettering & calligraphy designs.</p>
                        <p className="text-gray-400">|</p>
                        <div className="flex items-center">
                            <PlayCircleIcon className="w-4 h-4 mr-2" />
                            <p className="font-semibold">How Fiverr Works</p>
                        </div>
                    </div>
                </div>
                <div className={`flex flex-col lg:flex-row space-y-3 lg:items-center justify-between sticky top-0 bg-white z-20 mt-2 py-4 px-8 ${filterBottomShadow ? "shadow-lg" : "shadow-none"} `}>
                    <div className="flex items-center space-x-2">
                        <SellerDetail handleFilterToggle={handleFilterToggle} filterToggle={filterToggle} />

                        <Budget handleFilterToggle={handleFilterToggle} filterToggle={filterToggle} />

                        <DeliveryTime handleFilterToggle={handleFilterToggle} filterToggle={filterToggle} />

                    </div>
                    <div className="flex items-center space-x-5">
                        <div className="flex items-center space-x-2">
                            <Switch />
                            <p className="text-lg font-bold text-gray-700">Pro Services</p>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Switch />
                            <p className="text-lg font-bold text-gray-700">Local Sellers</p>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Switch />
                            <p className="text-lg font-bold text-gray-700">Online Sellers</p>
                        </div>
                    </div>
                </div>
                <div className="px-8 mt-2">
                    <div className="flex items-center justify-between">
                        <p className="font-bold text-gray-500">2,731 services available</p>
                        <div className="flex items-center space-x-2 text-lg relative ">
                            <input type="checkbox" className="w-full h-5 absolute peer opacity-0 cursor-pointer" />
                            <p className="cursor-pointer">Sort by <span className="font-semibold">Best Selling</span>
                            </p>
                            <ChevronDownIcon className="w-4 h-4 peer-checked:-rotate-180 transition-all duration-300" />
                            <div className="absolute max-h-0 overflow-hidden peer-checked:max-h-80 right-0 z-10 top-8 transition-all duration-300">
                                <div className=" border bg-white p-7 w-72  leading-[3rem] text-xl font-semibold text-dark">
                                    <div className="flex items-center">
                                        <div className=" w-10 h-5">
                                            <CheckIcon className="w-6 h-5 text-dark stroke-2" />
                                        </div>
                                        <p>Recommended</p>
                                    </div>
                                    <div className="flex items-center">
                                        <div className=" w-10 h-5">

                                        </div>
                                        <p>Best Selling</p>
                                    </div>
                                    <div className="flex items-center">
                                        <div className=" w-10 h-5">

                                        </div>
                                        <p>Newest Arrivals</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-4 grid gap-3 lg:gap-8 max-[595px]:grid-cols-1 max-[895px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        {
                            currentCards.map(item => <Card key={uuidv4()} />)
                        }
                    </div>

                    <Pagination cardsPerPage={cardsPerPage} totalCards={allCards.length} paginate={paginate} currentPage={currentPage} leftBtn={leftBtn} rightBtn={rightBtn} />

                </div>
                <Footer />
            </div>
        )
    } else {
        return (
            <>{
                showFilterModal.filter || showFilterModal.sort ?
                    showFilterModal.filter ?
                        <div className="absolute w-full h-screen bg-white top-0 left-0 z-50 ">
                            <div className="overflow-y-scroll h-[89%]">
                                <div className="flex items-center justify-between py-6 px-4">
                                    <button className="text-lg text-light font-semibold">Clear All</button>
                                    <h2 className="text-xl text-dark font-semibold">Refine</h2>
                                    <XMarkIcon className="h-7 w-7" onClick={() => setShowFilterModal({ filter: false, sort: false })} />
                                </div>
                                <hr />
                                <div className="px-4 text-xl font-semibold text-dark mt-4 flex flex-col space-y-9">
                                    <div className="flex items-center justify-between">
                                        <p>Pro services</p>
                                        <Switch size="lg" />
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <p>Subscription services</p>
                                        <Switch size="lg" />
                                    </div>
                                </div>
                                <div className="px-4 mt-9">
                                    <p className="text-xl font-semibold text-dark">Budget</p>
                                    <div className="flex items-center space-x-2 relative mt-4">
                                        <input type="text" className="w-1/2 border border-extra-light text-dark font-semibold rounded-md p-2 pl-10 text-lg" />
                                        <span className="text-2xl text-extra-light">-</span>
                                        <input type="text" className="w-1/2 border border-extra-light text-dark font-semibold rounded-md p-2 pl-10 text-lg" />
                                        <span className="absolute text-lg text-extra-light font-semibold left-3">₹</span>
                                        <span className="absolute text-lg text-extra-light font-semibold right-[47%] ">₹</span>
                                    </div>
                                </div>

                                <div className="px-4 mt-7">
                                    <p className="text-xl font-semibold text-dark">Style</p>
                                    <div className="flex items-center justify-between border p-4 py-6 rounded-md mt-4 shadow-md">
                                        <div className="flex items-center space-x-2 text-light font-semibold">
                                            <input type="checkbox" className="w-5 h-5" />
                                            <p className="text-lg">Minimalist</p>
                                        </div>
                                        <p className="text-lg">(4,027)</p>
                                    </div>
                                    <div className="flex items-center justify-between border p-4 py-6 rounded-md mt-4 shadow-md">
                                        <div className="flex items-center space-x-2 text-light font-semibold">
                                            <input type="checkbox" className="w-5 h-5" />
                                            <p className="text-lg">Other</p>
                                        </div>
                                        <p className="text-lg">(4,027)</p>
                                    </div>
                                    <div className="flex items-center justify-between border p-4 py-6 rounded-md mt-4 shadow-md">
                                        <div className="flex items-center space-x-2 text-light font-semibold">
                                            <input type="checkbox" className="w-5 h-5" />
                                            <p className="text-lg">Vintage</p>
                                        </div>
                                        <p className="text-lg">(4,027)</p>
                                    </div>
                                    <p className="font-bold text-[#446ee7] mt-3">+ Show More</p>
                                </div>

                                <div className="px-4 mt-10">
                                    <p className="text-xl font-semibold text-dark">Service includes</p>
                                    <div className="flex items-center justify-between border p-4 py-6 rounded-md mt-4 shadow-md">
                                        <div className="flex items-center space-x-2 text-light font-semibold">
                                            <input type="checkbox" className="w-5 h-5" />
                                            <p className="text-lg">Color palette</p>
                                        </div>
                                        <p className="text-lg">(4,027)</p>
                                    </div>
                                    <div className="flex items-center justify-between border p-4 py-6 rounded-md mt-4 shadow-md">
                                        <div className="flex items-center space-x-2 text-light font-semibold">
                                            <input type="checkbox" className="w-5 h-5" />
                                            <p className="text-lg">Typography guidelines</p>
                                        </div>
                                        <p className="text-lg">(4,027)</p>
                                    </div>
                                    <div className="flex items-center justify-between border p-4 py-6 rounded-md mt-4 shadow-md">
                                        <div className="flex items-center space-x-2 text-light font-semibold">
                                            <input type="checkbox" className="w-5 h-5" />
                                            <p className="text-lg">Logo usage guidelines</p>
                                        </div>
                                        <p className="text-lg">(4,027)</p>
                                    </div>
                                    <p className="font-bold text-[#446ee7] mt-3">+ Show More</p>
                                </div>

                                <div className="px-4 mt-10">
                                    <p className="text-xl font-semibold text-dark">Seller Level</p>
                                    <div className="flex items-center justify-between border p-4 py-6 rounded-md mt-4 shadow-md">
                                        <div className="flex items-center space-x-2 text-light font-semibold">
                                            <input type="checkbox" className="w-5 h-5" />
                                            <p className="text-lg">Top Rated Seller</p>
                                        </div>
                                        <p className="text-lg">(4,027)</p>
                                    </div>
                                    <div className="flex items-center justify-between border p-4 py-6 rounded-md mt-4 shadow-md">
                                        <div className="flex items-center space-x-2 text-light font-semibold">
                                            <input type="checkbox" className="w-5 h-5" />
                                            <p className="text-lg">Level Two</p>
                                        </div>
                                        <p className="text-lg">(4,027)</p>
                                    </div>
                                    <div className="flex items-center justify-between border p-4 py-6 rounded-md mt-4 shadow-md">
                                        <div className="flex items-center space-x-2 text-light font-semibold">
                                            <input type="checkbox" className="w-5 h-5" />
                                            <p className="text-lg">Level One</p>
                                        </div>
                                        <p className="text-lg">(4,027)</p>
                                    </div>
                                    <div className="flex items-center justify-between border p-4 py-6 rounded-md mt-4 shadow-md">
                                        <div className="flex items-center space-x-2 text-light font-semibold">
                                            <input type="checkbox" className="w-5 h-5" />
                                            <p className="text-lg">New Seller</p>
                                        </div>
                                        <p className="text-lg">(4,027)</p>
                                    </div>
                                </div>

                                <div className="px-4 mt-10">
                                    <p className="text-xl font-semibold text-dark">Seller Speaks</p>
                                    <div className="flex items-center justify-between border p-4 py-6 rounded-md mt-4 shadow-md">
                                        <div className="flex items-center space-x-2 text-light font-semibold">
                                            <input type="checkbox" className="w-5 h-5" />
                                            <p className="text-lg">English</p>
                                        </div>
                                        <p className="text-lg">(4,027)</p>
                                    </div>
                                    <div className="flex items-center justify-between border p-4 py-6 rounded-md mt-4 shadow-md">
                                        <div className="flex items-center space-x-2 text-light font-semibold">
                                            <input type="checkbox" className="w-5 h-5" />
                                            <p className="text-lg">Urdu</p>
                                        </div>
                                        <p className="text-lg">(4,027)</p>
                                    </div>
                                    <div className="flex items-center justify-between border p-4 py-6 rounded-md mt-4 shadow-md">
                                        <div className="flex items-center space-x-2 text-light font-semibold">
                                            <input type="checkbox" className="w-5 h-5" />
                                            <p className="text-lg">Arabic</p>
                                        </div>
                                        <p className="text-lg">(4,027)</p>
                                    </div>
                                    <p className="font-bold text-[#446ee7] mt-3">+ Show More</p>
                                </div>

                                <div className="px-4 mt-10">
                                    <p className="text-xl font-semibold text-dark">Seller Availability</p>
                                    <div className="flex items-center justify-between border p-4 py-6 rounded-md mt-4 shadow-md">
                                        <div className="flex items-center space-x-2 text-light font-semibold">
                                            <input type="checkbox" className="w-5 h-5" />
                                            <p className="text-lg">Online</p>
                                        </div>
                                        <p className="text-lg">(4,027)</p>
                                    </div>
                                </div>

                                <div className="px-4 my-10">
                                    <div className="flex items-center justify-between">
                                        <p className="text-xl font-semibold text-dark">Seller Lives In</p>
                                        <p className="text-lg font-semibold hover:text-primary-teal text-dark">Clear</p>
                                    </div>
                                    <div className="flex items-center justify-between text-light font-semibold border w-60 p-2 mt-3 rounded-md">
                                        <p className="text-xl">India </p>
                                        <ChevronDownIcon className="w-4 h-4 stroke-2" />
                                    </div>

                                </div>
                            </div>

                            <div className="p-3 border-t">
                                <button className="bg-primary-teal text-white text-xl font-bold text-center rounded-md w-full p-3">Show Results</button>
                            </div>
                        </div> :
                        <div className="w-full h-screen bg-white px-4 ">
                            <div className="mt-4 flex items-center justify-between">
                                <h2 className="text-dark text-2xl font-semibold ">Sort Gigs by</h2>
                                <XMarkIcon className="stroke-2 h-7 w-7" onClick={() => setShowFilterModal({ filter: false, sort: false })} />
                            </div>
                            <div className="mt-4 flex space-x-2 border border-extra-light shadow-md py-6 px-4 rounded-md items-center">
                                <input type="radio" className="h-5 w-5" />
                                <label htmlFor="" className="text-dark text-xl font-semibold">Recommended</label>
                            </div>
                            <div className="mt-4 flex space-x-2 border border-extra-light shadow-md py-6 px-4 rounded-md items-center">
                                <input type="radio" className="h-5 w-5" />
                                <label htmlFor="" className="text-dark text-xl font-semibold">Best Selling</label>
                            </div>
                            <div className="mt-4 flex space-x-2 border border-extra-light shadow-md py-6 px-4 rounded-md items-center">
                                <input type="radio" className="h-5 w-5" />
                                <label htmlFor="" className="text-dark text-xl font-semibold">Newest Arrivals</label>
                            </div>
                        </div> :

                    <div>

                        <Header />
                        <div className="flex items-center space-x-2 mt-9 px-8">
                            <HomeIcon className="w-4 h-4 mr-2" />
                            <p className="text-gray-400">/</p>
                            <p>Graphics & Design</p>
                        </div>
                        <div className="mt-4 px-8">
                            <h1 className="text-3xl font-bold">Graphics & Design</h1>
                            <div className="flex items-center space-x-3 max-[600px]:space-x-0 mt-3 max-[800px]:flex-col max-[800px]:items-start max-[800px]:space-y-2">
                                <p className="text-gray-500 font-semibold">Create new fonts, typography, hand lettering & calligraphy designs.</p>
                                <p className="text-gray-400  max-[800px]:hidden">|</p>
                                <div className="flex items-center max-[600px]:text-[#446ee7]">
                                    <PlayCircleIcon className="w-4 h-4 mr-2 max-[600px]:mr-0" />
                                    <p className="font-semibold">How Fiverr Works</p>
                                </div>
                            </div>
                        </div>

                        <div className={`sticky top-0 bg-white z-20 mt-2 py-4 px-8 ${filterBottomShadow ? "shadow-lg" : "shadow-none"} `}>
                            <div className="flex space-x-3 justify-between">
                                <div onClick={() => setShowFilterModal(prev => ({ ...prev, filter: true }))} className="w-1/2 border p-2 flex justify-center items-center space-x-2 rounded-md">
                                    <AdjustmentsHorizontalIcon className="w-6 h-6 text-primary-teal stroke-2" />
                                    <p className="font-semibold ">Filter</p>
                                </div>

                                <div onClick={() => setShowFilterModal(prev => ({ ...prev, sort: true }))} className="w-1/2 border p-2 flex justify-center items-center space-x-2 rounded-md">
                                    <Bars3BottomLeftIcon className="w-6 h-6 text-primary-teal stroke-2" />
                                    <p className="font-semibold ">Sort</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-2 mt-5">
                                <Switch />
                                <p className="text-lg font-bold text-gray-700">Pro Services</p>
                            </div>
                        </div>
                        <div className="px-8 mt-2">
                            <div className="">
                                {
                                    currentCards.map(item => <MediumCard key={uuidv4()} />)
                                }
                            </div>
                            <SmallPagination cardsPerPage={cardsPerPage} totalCards={allCards.length} paginate={paginate} currentPage={currentPage} leftBtn={leftBtn} rightBtn={rightBtn} />
                        </div>
                        <Footer />
                    </div>
            }
            </>
        )
    }
}


export default Category