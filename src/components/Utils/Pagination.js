import ChevronLeftIcon from "@heroicons/react/24/outline/ChevronLeftIcon"
import ChevronRightIcon from "@heroicons/react/24/outline/ChevronRightIcon"
import { v4 as uuidv4 } from 'uuid';

const Pagination = ({ cardsPerPage, totalCards, paginate, currentPage, rightBtn, leftBtn }) => {
    const pageNumbers = []
    for (let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i++) {
        pageNumbers.push(i)
    }
    return (
        <div className="my-9 flex justify-center">
            <ul className="flex items-center space-x-3">
                <li onClick={leftBtn} className="px-3 py-2 border text-lg cursor-pointer"><ChevronLeftIcon className="w-5 h-5" /></li>
                {
                    pageNumbers.map(num => <li key={uuidv4()} onClick={() => paginate(num)} className={`transition-all ease-in-out px-4 py-1 border text-lg cursor-pointer ${currentPage === num && "font-bold"}`}>
                        {num}
                    </li>)
                }
                <li onClick={rightBtn} className="px-3 py-2 border text-lg cursor-pointer"><ChevronRightIcon className="w-5 h-5" /></li>
            </ul>
        </div>
    )
}
export default Pagination