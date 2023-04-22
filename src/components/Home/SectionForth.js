import { useEffect, useState } from "react";
import Card from "../Utils/Card"
import MediumCard from "../Utils/MediumCard";

const SectionForth = () => {
    const [screenWidth, setScreenWidth] = useState(0);

    useEffect(() => {
        if (typeof window !== "undefined" && window) {
            setScreenWidth(window.screen.width)
        }
    }, []);

    if (screenWidth > 1350) {
        return (
            <div className="px-8 max-[595px]:px-0 my-3 lg:mt-5">
                <h2 className="text-lg md:text-2xl font-bold text-gray-700 mb-5 lg:mb-10">Gigs you may like</h2>
                <div className="grid gap-3 lg:gap-8 max-[595px]:grid-cols-1 max-[895px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        )
    } else {
        return (
            <div className="max-[595px]:px-4 px-8 my-3 lg:mt-5">
                <h2 className="text-lg md:text-2xl font-bold text-gray-700 mb-5 lg:mb-10">Gigs you may like</h2>
                <div>
                    <MediumCard />
                    <MediumCard />
                    <MediumCard />
                    <MediumCard />
                    <MediumCard />
                    <MediumCard />
                    <MediumCard />
                </div>
            </div>
        )
    }

}
export default SectionForth