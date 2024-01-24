import Image from "next/image"

import facebook from "@/app/assets/icons/facebook.svg"
import instagram from "@/app/assets/icons/instagram.svg"
import twitter from "@/app/assets/icons/twitter.svg"

import line from "@/app/assets/line.svg"

const Footer = () => {

    const links = [
        {
            id: 0,
            name: 'About us',
            url: '#'
        },
        {
            id: 1,
            name: 'Features',
            url: '#'
        },
        {
            id: 2,
            name: 'Blogs',
            url: '#'
        },
        {
            id: 3,
            name: 'Careers',
            url: '#'
        }
    ]


    const socials = [
        {
            id: 0,
            name: 'Facebook',
            url: '#',
            icon: facebook
        },
        {
            id: 1,
            name: 'Twitter',
            url: '#',
            icon: twitter
        },
        {
            id: 2,
            name: 'Instagram',
            url: '#',
            icon: instagram
        }
    ]


    const year = new Date().getFullYear()

    return (
        <footer className="bg-[#BEEBC2] mt-[5rem]">
            <div className="w-full pt-10 md:px-[15rem] px-8 pb-5">
                <div className="flex flex-col md:flex-row justify-between">
                    <div className="flex flex-col gap-5 md:gap-0 md:flex-row">
                        <div className="flex flex-col md:mr-10">
                            <h1 className="font-bold text-xl mb-5">Company</h1>
                            <ul className="flex flex-col">
                                {links.map((link) => (
                                    <li key={link.id} className="py-1">
                                        <a href={link.url} className="text-[#4B5548] hover:text-[#2F3A2F]">{link.name}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="flex flex-col">
                            <h1 className="font-bold text-xl mb-5">Socials</h1>
                            <ul className="flex flex-col gap-3">
                                {socials.map((social) => (
                                    <div
                                        key={social.id}
                                        className="flex gap-2"
                                    >
                                        <div className="w-7 h-7 bg-white flex justify-center items-center rounded-full">
                                            <Image src={social.icon} className="w-2/3 h-2/3" alt="icon" />
                                        </div>
                                        <li className="py-1">
                                            <a href={social.url} className="text-[#4B5548] hover:text-[#2F3A2F]">{social.name}</a>
                                        </li>
                                    </div>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="w-full md:w-[40%] flex flex-col gap-3 mt-5 md:mt-0">
                        <h1 className="font-bold text-xl">Newsletter</h1>
                        <p className="text-[#4B5548]">Subscribe to our newsletter to get health tips straight to your mail.</p>
                        <div className=" w-full flex flex-row">
                            <input type="text" placeholder="Enter your email" className="w-full h-10 rounded-l-md px-3 md:px-5 outline-none" />
                            <button className="bg-[#2F3A2F] text-white rounded-r-md px-5">Subscribe</button>
                        </div>
                    </div>
                </div>
                <div className="w-full flex justify-center py-2">
                    <Image
                        src={line}
                        alt="line"
                    />
                </div>
                <div className="w-full flex justify-center">
                    <span className="text-gray-600 text-sm">&copy; {year}. The Radix Team. All Rights Reserved.</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer