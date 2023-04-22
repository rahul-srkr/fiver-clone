import Carousel from "../Utils/Carousel"

const SectionOne = () => {
    return (
        <div className="flex h-80 md:h-64 md:space-x-8 md:px-8 md:my-8">
            <div className="hidden border bg-[#fafafa] h-full w-80 space-y-4 flex-col items-center justify-center rounded-md md:flex">
                <h2 className="text-center text-xl font-semibold text-gray-700">HI Rahul,</h2>
                <p className="text-center text-lg">Get matched with sellers for your project.</p>
                <button className="text-center bg-[#1dbf73] p-2 text-white rounded-md font-bold">Post a request</button>
            </div>
            <Carousel />
        </div >
    )
}
export default SectionOne