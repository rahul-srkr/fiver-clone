import ChevronRightIcon from "@heroicons/react/24/outline/ChevronRightIcon"

const TopCategories = () => {
    return (
        <div>
            <div className="flex items-center justify-between py-6">
                <h2 className="text-xl font-bold text-gray-700">Top Categories</h2>
                <div className="flex items-center text-[#446ee7] font-semibold">
                    <p>See All</p>
                    <ChevronRightIcon className="h-4 w-5 stroke-2" />
                </div>
            </div>
            <div className="flex flex-col space-y-3">
                <div className="flex items-center space-x-5 border h-16 px-3 py-9">
                    <svg width="50" height="106" viewBox="0 0 106 106" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M53 0C82.3 0 106 23.7 106 53C106 82.3 82.3 106 53 106C23.7 106 0 82.3 0 53C0 23.7 23.7 0 53 0Z" fill="#6F96A9"></path><path d="M34 22H49V85H34V22Z" fill="white"></path><path d="M42.1001 78H49.0001V80.3H42.1001V78ZM42.1001 71.6H49.0001V73.9H42.1001V71.6ZM42.1001 65.8H49.0001V68.1H42.1001V65.8ZM42.1001 59.3H49.0001V61.6H42.1001V59.3ZM42.1001 53.5H49.0001V55.8H42.1001V53.5ZM42.1001 47.1H49.0001V49.4H42.1001V47.1ZM42.1001 41.2H49.0001V43.5H42.1001V41.2ZM42.1001 34.9H49.0001V37.2H42.1001V34.9ZM42.1001 28.4H49.0001V30.7H42.1001V28.4ZM62.2001 80.3H67.4001L65.7001 85H64.0001L62.2001 80.3V80.3ZM57.0001 30.8H72.0001V65.8H57.0001V30.8V30.8ZM57.0001 22H72.0001V28.4H57.0001V22ZM57.6001 68.1H71.4001L68.0001 78H61.7001C61.6001 78 57.6001 68.1 57.6001 68.1Z" fill="white"></path></svg>
                    <div>
                        <h2 className="text-lg md:text-2xl font-bold text-gray-700">Graphics & Design</h2>
                        <p className="text-gray-400">Logo Design, Brand Style Guides</p>
                    </div>
                </div>

                <div className="flex items-center space-x-5 border h-16 px-3 py-9 max-[457px]:h-24">
                    <svg width="50" height="106" viewBox="0 0 106 106" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M53 0C82.3 0 106 23.7 106 53C106 82.3 82.3 106 53 106C23.7 106 0 82.3 0 53C0 23.7 23.7 0 53 0Z" fill="#6F96A9"></path><path d="M26.4 68.7H78.6V26H26.4V68.7ZM76 65.4H29.3V29H76V65.4ZM18 77H87V72H18V77Z" fill="white"></path><path d="M32.2 32.2V58.6L44.5 48.9H57.1L61.8999 42.8L60.2 41.3L63.6 40L67 38.7L66.1 46.3L64.3 44.7L58.6 51.9H45.6L32.8 62.1H73.1V32.2H32.2V32.2Z" fill="white"></path></svg>
                    <div>
                        <h2 className="text-lg md:text-2xl font-bold text-gray-700">Digital Marketing</h2>
                        <p className="text-gray-400">Social Media Advertising & Social Media Marketing</p>
                    </div>
                </div>

                <div className="flex items-center space-x-5 border h-16 px-3 py-9">
                    <svg width="50" height="106" viewBox="0 0 106 106" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M53 0C82.3 0 106 23.7 106 53C106 82.3 82.3 106 53 106C23.7 106 0 82.3 0 53C0 23.7 23.7 0 53 0Z" fill="#6F96A9"></path><path d="M46.4 33.4V30H40V33.4H46.4ZM66 33.4V30H59.6V33.4H66ZM17 43.3H23.5V33.3H17V43.3ZM82.5 43.3H89V33.3H82.5V43.3ZM64.6 46.7L64.5 46.6L62.8 43.4H43.1L41.5 46.6L41.4 46.7H26.7V80H79.2V46.7H64.6V46.7ZM67.9 51.5C69.9 54.2 66.9 57.2 64.3 55.2C62.3 52.5 65.3 49.5 67.9 51.5ZM64.6 61.5C66.6 64.2 63.6 67.2 61 65.2C59 62.5 62 59.5 64.6 61.5V61.5ZM57.7 51.5C60.3 49.5 63.3 52.5 61.3 55.2C58.7 57.2 55.7 54.2 57.7 51.5ZM58.1 61.5C60.1 64.2 57.1 67.2 54.5 65.2C52.5 62.5 55.4 59.5 58.1 61.5V61.5ZM51.2 51.5C53.8 49.5 56.8 52.5 54.8 55.2C52.2 57.2 49.2 54.2 51.2 51.5ZM51.5 61.5C53.5 64.2 50.5 67.2 47.9 65.2C45.9 62.5 48.9 59.5 51.5 61.5V61.5ZM44.6 51.5C47.2 49.5 50.2 52.5 48.2 55.2C45.6 57.2 42.6 54.2 44.6 51.5ZM44.9 65.2C42.3 67.2 39.3 64.2 41.3 61.5C44 59.5 47 62.5 44.9 65.2ZM38.1 51.5C40.7 49.5 43.7 52.5 41.7 55.2C39 57.2 36 54.2 38.1 51.5ZM38.4 61.5C40.4 64.2 37.4 67.2 34.8 65.2C32.8 62.5 35.7 59.5 38.4 61.5ZM31.5 55.2C29.5 52.5 32.5 49.5 35.1 51.5C37.1 54.2 34.1 57.2 31.5 55.2ZM71.6 75.1H33.6V70.7H71.6V75.1ZM67.6 65.2C65.6 62.5 68.6 59.5 71.2 61.5C73.2 64.2 70.2 67.2 67.6 65.2ZM74.5 55.2C71.9 57.2 68.9 54.2 70.9 51.5C73.5 49.5 76.5 52.5 74.5 55.2Z" fill="white"></path><path d="M76.2 30H69.5V36.7H36.6V30H30L26.7 33.4V43.4H38.2L39.8 40.2H65.8999L67.6 43.4H79.3999V33.3L76.2 30V30Z" fill="white"></path></svg>
                    <div>
                        <h2 className="text-lg md:text-2xl font-bold text-gray-700">Writing & Translation</h2>
                        <p className="text-gray-400">Articles & Blog Posts, Resume Writing</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default TopCategories