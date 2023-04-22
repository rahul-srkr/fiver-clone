import ChevronDownIcon from "@heroicons/react/24/outline/ChevronDownIcon"
import { FooterLogo, Twitter, Pinterest, Linkdin, Facebook, Instagram, Globe, Accessibility } from "./Svg"

const Footer = () => {
    return (
        <div className="p-8 border-t max-[600px]:mt-0 max-[600px]:p-0 max-[600px]:px-6">
            <div className="grid grid-cols-5 max-[600px]:flex max-[600px]:flex-col max-[900px]:grid-cols-3 my-8 max-[600px]:text-xl">
                <div className="leading-10 text-[1.05rem] font-semibold text-gray-500 relative">
                    <input type="checkbox" className="top-0 inset-x-0 absolute opacity-0 peer" />
                    <h2 className="font-bold text-lg text-gray-800 mb-3 max-[600px]:text-xl ">Categories</h2>
                    <ChevronDownIcon className="hidden max-[600px]:block w-6 h-6 duration-500 transition-all peer-checked:-rotate-180 absolute top-0 right-0" />
                    <div className="max-[600px]:max-h-0 peer-checked:max-h-[480px] overflow-hidden transition-all max-[600px]:text-xl max-[600px]:leading-[3rem] duration-500">
                        <p className="cursor-pointer hover:underline">Graphics & Design</p>
                        <p className="cursor-pointer hover:underline">Digital Marketing</p>
                        <p className="cursor-pointer hover:underline">Writing & Translation
                        </p>
                        <p className="cursor-pointer hover:underline">Video & Animation
                        </p>
                        <p className="cursor-pointer hover:underline">Music & Audio
                        </p>
                        <p className="cursor-pointer hover:underline">Programming & Tech
                        </p>
                        <p className="cursor-pointer hover:underline">Data
                        </p>
                        <p className="cursor-pointer hover:underline">Business
                        </p>
                        <p className="cursor-pointer hover:underline">Lifestyle
                        </p>
                        <p className="cursor-pointer hover:underline">Photography</p>
                        <p className="cursor-pointer hover:underline">Sitemap
                        </p>
                    </div>
                </div>
                <div className="leading-10 text-[1.05rem] font-semibold text-gray-500 relative">
                    <input type="checkbox" className="top-0 inset-x-0 absolute opacity-0 peer" />
                    <h2 className="font-bold text-lg text-gray-800 mb-3 max-[600px]:text-xl ">About</h2>
                    <ChevronDownIcon className="hidden max-[600px]:block w-6 h-6 duration-500 transition-all peer-checked:-rotate-180 absolute top-0 right-0" />
                    <div className="max-[600px]:max-h-0 peer-checked:max-h-[480px] overflow-hidden transition-all max-[600px]:text-xl max-[600px]:leading-[3rem] duration-500">
                        <p className="cursor-pointer hover:underline">Careers</p>
                        <p className="cursor-pointer hover:underline">Press & News
                        </p>
                        <p className="cursor-pointer hover:underline">Partnerships
                        </p>
                        <p className="cursor-pointer hover:underline">Privacy Policy
                        </p>
                        <p className="cursor-pointer hover:underline">Terms of Service
                        </p>
                        <p className="cursor-pointer hover:underline">Intellectual Property Claims
                        </p>
                        <p className="cursor-pointer hover:underline">Investor Relations
                        </p>
                    </div>
                </div>
                <div className="leading-10 text-[1.05rem] font-semibold text-gray-500 relative">
                    <input type="checkbox" className="top-0 inset-x-0 absolute opacity-0 peer" />
                    <h2 className="font-bold text-lg text-gray-800 mb-3 max-[600px]:text-xl ">Support</h2>
                    <ChevronDownIcon className="hidden max-[600px]:block w-6 h-6 duration-500 transition-all peer-checked:-rotate-180 absolute top-0 right-0" />
                    <div className="max-[600px]:max-h-0 peer-checked:max-h-[480px] overflow-hidden transition-all max-[600px]:text-xl max-[600px]:leading-[3rem] duration-500">
                        <p className="cursor-pointer hover:underline">Help & Support
                        </p>
                        <p className="cursor-pointer hover:underline">Trust & Safety
                        </p>
                        <p className="cursor-pointer hover:underline">Selling on Fiverr
                        </p>
                        <p className="cursor-pointer hover:underline">Buying on Fiverr
                        </p>
                    </div>
                </div>
                <div className="leading-10 text-[1.05rem] font-semibold max-[900px]:mt-6 max-[600px]:mt-0 text-gray-500 relative">
                    <input type="checkbox" className="top-0 inset-x-0 absolute opacity-0 peer" />
                    <h2 className="font-bold text-lg text-gray-800 mb-3 max-[600px]:text-xl ">Community</h2>
                    <ChevronDownIcon className="hidden max-[600px]:block w-6 h-6 duration-500 transition-all peer-checked:-rotate-180 absolute top-0 right-0" />
                    <div className="max-[600px]:max-h-0 peer-checked:max-h-[480px] overflow-hidden transition-all max-[600px]:text-xl max-[600px]:leading-[3rem] duration-500">
                        <p className="cursor-pointer hover:underline">Customer Success Stories
                        </p>
                        <p className="cursor-pointer hover:underline">Community Hub
                        </p>
                        <p className="cursor-pointer hover:underline">Forum</p>
                        <p className="cursor-pointer hover:underline">Events</p>
                        <p className="cursor-pointer hover:underline">Blog</p>
                        <p className="cursor-pointer hover:underline">Influencers</p>
                        <p className="cursor-pointer hover:underline">Affiliates</p>
                        <p className="cursor-pointer hover:underline">Podcast
                        </p>
                        <p className="cursor-pointer hover:underline">Invite a Friend
                        </p>
                        <p className="cursor-pointer hover:underline">Become a Seller
                        </p>
                        <p className="cursor-pointer hover:underline">Community Standards
                        </p>
                    </div>
                </div>
                <div className="leading-10 text-[1.05rem] font-semibold max-[900px]:mt-6 max-[600px]:mt-0 text-gray-500 relative">
                    <input type="checkbox" className="top-0 inset-x-0 absolute opacity-0 peer" />
                    <h2 className="font-bold text-lg text-gray-800 mb-3 max-[600px]:text-xl ">More From Fiverr</h2>
                    <ChevronDownIcon className="hidden max-[600px]:block w-6 h-6 duration-500 transition-all peer-checked:-rotate-180 absolute top-0 right-0" />
                    <div className="max-[600px]:max-h-0 peer-checked:max-h-[480px] overflow-hidden transition-all max-[600px]:text-xl max-[600px]:leading-[3rem] duration-500">
                        <p className="cursor-pointer hover:underline">Fiverr Pro</p>
                        <p className="cursor-pointer hover:underline">Fiverr Logo Maker</p>
                        <p className="cursor-pointer hover:underline">Fiverr Guides</p>
                        <p className="cursor-pointer hover:underline">Get Inspired</p>
                        <p className="cursor-pointer hover:underline">Fiverr Select</p>
                        <div className="cursor-pointer hover:underline">
                            <p>ClearVoice</p>
                            <p className="text-[.95rem] text-gray-400 leading-none mb-3">Content Marketing</p>
                        </div>
                        <div className="cursor-pointer hover:underline">
                            <p>Fiverr Workspace</p>
                            <p className="text-[.95rem] text-gray-400 leading-none mb-3">Invoice Software</p>
                        </div>
                        <div className="cursor-pointer hover:underline">
                            <p>Learn</p>
                            <p className="text-[.95rem] text-gray-400 leading-none mb-3">Online Courses</p>
                        </div>
                        <p className="cursor-pointer hover:underline">Working Not Working</p>
                    </div>
                </div>
            </div>
            <div className="flex space-x-6 max-[825px]:space-x-0 max-[825px]:space-y-6 max-[825px]:flex-col pt-8 pb-2 border-t max-[600px]:pt-6 max-[600px]:pb-0">
                <div className="flex items-center space-x-6 flex-grow max-[600px]:flex-col max-[600px]:space-x-0 max-[600px]:space-y-3">
                    <FooterLogo />
                    <p className="font-semibold text-gray-400 text-[.9rem]">© Fiverr International Ltd. 2023</p>
                </div>
                <div className="flex items-center space-x-12 max-[600px]:flex-col max-[600px]:space-x-0 max-[600px]:space-y-4">
                    <div className="flex space-x-7 items-center">
                        <Twitter />
                        <Facebook />
                        <Linkdin />
                        <Pinterest />
                        <Instagram />
                    </div>
                    <div className="flex items-center space-x-8">
                        <div className="flex items-center space-x-2">
                            <Globe />
                            <p className="font-semibold text-gray-600">English</p>
                        </div>
                        <p className="font-bold text-gray-600">₹ INR</p>
                        <Accessibility />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer