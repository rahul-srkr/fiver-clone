import ChevronLeftIcon from "@heroicons/react/24/outline/ChevronLeftIcon"
import ChevronRightIcon from "@heroicons/react/24/outline/ChevronRightIcon"
import { useRef, useState } from "react"
import data from "../data"
import { useRouter } from "next/router"
import { v4 as uuidv4 } from 'uuid';

const CategoriesBar = () => {
    const router = useRouter()
    let scrollMenus = useRef()
    const [rightArrow, setRightArrow] = useState("block");
    const [leftArrow, setLeftArrow] = useState("hidden");


    return (
        <div className="px-8 border-b relative hidden md:block">
            <div onClick={() => scrollMenus.current.scrollLeft -= 100} className={`absolute bg-gradient-to-r to-transparent via-white from-white pr-8 left-8 top-3 xl:hidden ${leftArrow}`}><ChevronLeftIcon className="w-5 h-5 text-super-light" /></div>
            <ul ref={scrollMenus} onScroll={(e) => {
                if (e.target.scrollLeft == 0) {
                    setLeftArrow("hidden")
                    setRightArrow("block")
                }

                if (e.target.scrollWidth - e.target.clientWidth == e.target.scrollLeft) {
                    setLeftArrow("block")
                    setRightArrow("hidden")
                }
            }} className="flex space-x-4 justify-between text-lg font-semibold text-super-light overflow-x-scroll hide-scrollbar scroll-smooth">

                {
                    data.map((item, i) => (
                        <li key={uuidv4()} className="border-b-4 border-b-white cursor-pointer whitespace-nowrap py-2 hover:border-b-green-400 group">{item.name}
                            {
                                item.subCategory ?
                                    <div className={`absolute transition-all duration-500 delay-500 hidden bg-white z-50 group-hover:block hover:block top-12
                                    ${item.name === "Graphics & Design" && "h-[50rem] w-[90%]"}
                                    ${item.name === "Digital Marketing" && "h-[35rem] w-[60%]"}
                                    ${item.name === "Programming & Tech" && "h-[34rem] w-[70%] left-[5%]"}
                                    ${item.name === "Photography" && "h-[26rem] w-[40%] right-[15%]"}
                                     ${item.name === "Business" && "h-[33rem] w-[90%] right-[5%]"}
                                     ${item.name === "AI Services" && "h-[24rem] w-[40%] right-[2%]"}
                                    
                                    `}>
                                        <div className={`flex flex-col h-full w-full gap-5 p-6 flex-wrap border`}>
                                            {
                                                item.subCategory.map(sub => (
                                                    <div key={uuidv4()} className="leading-10">
                                                        <h2 className="text-xl mb-1 text-dark font-semibold">{sub.name}</h2>
                                                        {
                                                            sub.data.map(subCat => <p key={uuidv4()} className="" onClick={() =>
                                                                router.push(`/${subCat}`)}>{subCat}</p>)
                                                        }
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div> :
                                    <div className={`absolute transition-all ease-in-out bg-white z-50 hidden group-hover:block hover:block top-12
                                    ${item.name === "Writing & Translation" && "h-[33.3rem] w-[70%]"}
                                    ${item.name === "Video & Animation" && "h-[35rem] w-[70%] left-[30%]"}
                                    ${item.name === "Music & Audio" && "h-[33rem] w-[50%] right-[5%]"}
                                    `}>
                                        <div className="flex flex-col h-full w-full gap-3 p-6 flex-wrap border">
                                            {
                                                item.data && item.data.map(cat => <p key={uuidv4()} onClick={() => router.push(`/${cat}`)}>{cat}</p>)
                                            }
                                        </div>
                                    </div>
                            }
                        </li>
                    ))
                }
            </ul>
            <div onClick={() => scrollMenus.current.scrollLeft += 100} className={`absolute xl:hidden bg-gradient-to-l to-transparent from-white right-8 pl-8 top-3 ${rightArrow}`}><ChevronRightIcon className="w-5 h-5  text-gray-500" /></div>
        </div>
    )
}
export default CategoriesBar