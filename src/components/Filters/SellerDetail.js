import ChevronDownIcon from "@heroicons/react/24/outline/ChevronDownIcon"

const SellerDetail = ({ handleFilterToggle, filterToggle }) => {
    return (
        <div className="relative">
            <div onClick={handleFilterToggle} id="seller_details" className=" hover:border-black cursor-pointer flex items-center space-x-3 border p-2 rounded-md">
                <div className="text-lg font-semibold">Seller Details</div>
                <ChevronDownIcon className={`w-4 h-4 top-4 right-2 stroke-2 ${filterToggle.sellerDetail ? "-rotate-180" : "rotate-0"} transition-all duration-500`} />
            </div>
            <div className={`absolute z-30 ${filterToggle.sellerDetail ? "max-h-[100rem] border" : "max-h-0"} max-h-0 overflow-hidden w-[38rem]  rounded-lg top-12 left-0 transition-all duration-500 shadow-md bg-white`}>
                <div className="max-h-[30rem] overflow-y-scroll">
                    <div className="flex flex-col p-6 space-y-5">
                        <h2 className="font-bold text-lg">Seller Level</h2>
                        <div className="flex items-center w-full justify-between">
                            <div className="flex space-x-2 items-center w-1/2">
                                <input className="h-6 w-6 accent-black" id="topSeller" type="checkbox" />
                                <label htmlFor="topSeller" className="font-bold text-gray-700">Top Seller Level <span className="text-gray-400">(19)</span></label>
                            </div>
                            <div className="flex space-x-2 items-center w-1/2">
                                <input id="levelOne" type="checkbox" className="h-6 w-6 accent-black" />
                                <label htmlFor="levelOne" className="font-bold text-gray-700">Level One <span className="text-gray-400">(19)</span></label>
                            </div>
                        </div>
                        <div className="flex items-center w-full justify-between">
                            <div className="flex space-x-2 items-center w-1/2">
                                <input id="levelTwo" type="checkbox" className="h-6 w-6 accent-black" />
                                <label htmlFor="levelTwo" className="font-bold text-gray-700">Level Two <span className="text-gray-400">(19)</span></label>
                            </div>
                            <div className="flex space-x-2 items-center w-1/2">
                                <input id="newSeller" type="checkbox" className="h-6 w-6 accent-black" />
                                <label htmlFor="newSeller" className="font-bold text-gray-700">New Seller <span className="text-gray-400">(19)</span></label>
                            </div>
                        </div>

                    </div>
                    <hr className="mx-6" />
                    <div className="flex flex-col p-6 space-y-5">
                        <h2 className="font-bold text-lg">Seller Speaks</h2>
                        <div className="flex items-center w-full justify-between">
                            <div className="flex space-x-2 items-center w-1/2">
                                <input className="h-6 w-6 accent-black" id="topSeller" type="checkbox" />
                                <label htmlFor="topSeller" className="font-bold text-gray-700">English <span className="text-gray-400">(19)</span></label>
                            </div>
                            <div className="flex space-x-2 items-center w-1/2">
                                <input id="levelOne" type="checkbox" className="h-6 w-6 accent-black" />
                                <label htmlFor="levelOne" className="font-bold text-gray-700">Hindi <span className="text-gray-400">(19)</span></label>
                            </div>
                        </div>
                        <div className="flex items-center w-full justify-between">
                            <div className="flex space-x-2 items-center w-1/2">
                                <input id="levelTwo" type="checkbox" className="h-6 w-6 accent-black" />
                                <label htmlFor="levelTwo" className="font-bold text-gray-700">Arabic <span className="text-gray-400">(19)</span></label>
                            </div>
                            <div className="flex space-x-2 items-center w-1/2">
                                <input id="newSeller" type="checkbox" className="h-6 w-6 accent-black" />
                                <label htmlFor="newSeller" className="font-bold text-gray-700">Urdu <span className="text-gray-400">(19)</span></label>
                            </div>
                        </div>
                        <p className="underline text-gray-500 font-semibold">+24 more</p>
                    </div>
                    <hr className="mx-6" />
                    <div className="flex flex-col p-6 space-y-5">
                        <h2 className="font-bold text-lg">Seller Lives In</h2>
                        <div className="flex items-center w-full justify-between">
                            <div className="flex space-x-2 items-center w-1/2">
                                <input className="h-6 w-6 accent-black" id="topSeller" type="checkbox" />
                                <label htmlFor="topSeller" className="font-bold text-gray-700">United State <span className="text-gray-400">(19)</span></label>
                            </div>
                            <div className="flex space-x-2 items-center w-1/2">
                                <input id="levelOne" type="checkbox" className="h-6 w-6 accent-black" />
                                <label htmlFor="levelOne" className="font-bold text-gray-700">Germany <span className="text-gray-400">(19)</span></label>
                            </div>
                        </div>
                        <div className="flex items-center w-full justify-between">
                            <div className="flex space-x-2 items-center w-1/2">
                                <input id="levelTwo" type="checkbox" className="h-6 w-6 accent-black" />
                                <label htmlFor="levelTwo" className="font-bold text-gray-700">United Kingdom <span className="text-gray-400">(19)</span></label>
                            </div>
                            <div className="flex space-x-2 items-center w-1/2">
                                <input id="newSeller" type="checkbox" className="h-6 w-6 accent-black" />
                                <label htmlFor="newSeller" className="font-bold text-gray-700">Canada <span className="text-gray-400">(19)</span></label>
                            </div>
                        </div>
                        <p className="underline text-gray-500 font-semibold">+24 more</p>
                    </div>
                </div>

                <hr />
                <div className="flex items-center justify-between px-6 py-4">
                    <p className="text-lg text-gray-500 font-bold">Clear All</p>
                    <button className="text-lg font-bold px-5 py-3 rounded-md bg-black text-white">Apply</button>
                </div>
            </div>
        </div>
    )
}
export default SellerDetail