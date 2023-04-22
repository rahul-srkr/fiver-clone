import ChevronDownIcon from "@heroicons/react/24/outline/ChevronDownIcon"

const Budget = ({ handleFilterToggle, filterToggle }) => {
    return (
        <div className="relative">
            <div id="budget" onClick={handleFilterToggle} className="hover:border-black cursor-pointer flex items-center space-x-3 border p-2 rounded-md">
                <div className="text-lg font-semibold">Budget</div>
                <ChevronDownIcon className={`w-4 h-4 top-4 right-2 stroke-2 ${filterToggle.budget ? "-rotate-180" : "rotate-0"} transition-all duration-500`} />
            </div>
            <div className={`absolute max-h-0 overflow-hidden w-[21rem] ${filterToggle.budget ? "max-h-[100rem] border" : "max-h-0"} rounded-lg z-30 top-12 left-0 transition-all duration-500 shadow-md bg-white`}>
                <div className="flex items-center p-6 w-full space-x-3">
                    <div className="w-1/2">
                        <p>Min.</p>
                        <input type="text" placeholder="Any" className="border rounded-md placeholder:font-bold placeholder:text-gray-600 pl-3 py-2 w-full mt-2" />
                        <p className="absolute top-[4rem] right-[11.4rem] font-semibold text-gray-400">$</p>
                    </div>
                    <div className="w-1/2">
                        <p>Max.</p>
                        <input type="text" placeholder="Any" className="border rounded-md placeholder:font-bold placeholder:text-gray-600 pl-3 py-2 w-full mt-2" />
                        <p className="absolute top-[4rem] right-[2.1rem] font-semibold text-gray-400">$</p>
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
export default Budget