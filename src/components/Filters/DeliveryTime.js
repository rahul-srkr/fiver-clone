import ChevronDownIcon from "@heroicons/react/24/outline/ChevronDownIcon"

const DeliveryTime = ({ handleFilterToggle, filterToggle }) => {
    return (
        <div className="relative">
            <div id="delivery_time" onClick={handleFilterToggle} className="hover:border-black cursor-pointer flex items-center space-x-3 border p-2 rounded-md">
                <div className="text-lg font-semibold">Delivery Time</div>
                <ChevronDownIcon className={`w-4 h-4 top-4 right-2 stroke-2 ${filterToggle.deliveryTime ? "-rotate-180" : "rotate-0"} transition-all duration-500`} />
            </div>
            <div className={`absolute z-30 ${filterToggle.deliveryTime ? "max-h-[100rem] border" : "max-h-0"} max-h-0 overflow-hidden w-[17rem] rounded-lg top-12 left-0 transition-all duration-500 shadow-md bg-white`}>
                <div className="px-4 py-6 w-full">
                    <div className="flex items-center space-x-2 hover:bg-gray-100 p-2 rounded-lg">
                        <input id="24Hour" name="deliveryTime" type="radio" className="w-5 h-5 accent-black" />
                        <label htmlFor="24Hour" className="font-bold text-gray-500">Express 24H</label>
                    </div>
                    <div className="flex items-center space-x-2 hover:bg-gray-100 p-2 rounded-lg">
                        <input id="3Days" type="radio" name="deliveryTime" className="w-5 h-5 accent-black" />
                        <label htmlFor="3Days" className="font-bold text-gray-500">Up to 3 days</label>
                    </div>
                    <div className="flex items-center space-x-2 hover:bg-gray-100 p-2 rounded-lg">
                        <input id="7Days" type="radio" name="deliveryTime" className="w-5 h-5 accent-black" />
                        <label htmlFor="7Days" className="font-bold text-gray-500">Up to 7 days</label>
                    </div>
                    <div className="flex items-center space-x-2 hover:bg-gray-100 p-2 rounded-lg">
                        <input id="anyTime" type="radio" name="deliveryTime" className="w-5 h-5 accent-black" />
                        <label htmlFor="anyTime" className="font-bold text-gray-500">Anytime</label>
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
export default DeliveryTime