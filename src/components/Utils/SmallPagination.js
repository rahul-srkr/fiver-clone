import ChevronLeftIcon from "@heroicons/react/24/outline/ChevronLeftIcon"
import ChevronRightIcon from "@heroicons/react/24/outline/ChevronRightIcon"

const SmallPagination = ({ cardsPerPage, totalCards, paginate, currentPage, rightBtn, leftBtn }) => {
    const pageNumbers = []
    for (let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i++) {
        pageNumbers.push(i)
    }
    return (
        <div className="my-9 flex justify-center">
            <ul className="flex items-center space-x-10">
                <li onClick={leftBtn} className=" text-lg cursor-pointer"><ChevronLeftIcon className={`w-6 h-6 ${currentPage === 1 && "opacity-0"}`} /></li>
                <li className={`transition-all ease-in-out text-lg cursor-pointer font-semibold`}>
                    Page {currentPage}
                </li>
                <li onClick={rightBtn} className="text-lg cursor-pointer"><ChevronRightIcon className="w-6 h-6" /></li>
            </ul>
        </div>
    )
}
export default SmallPagination