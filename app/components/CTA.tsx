import Image from 'next/image'

import appStore from "@/app/assets/icons/apple.svg";
import playStore from "@/app/assets/icons/playstore.svg";
import checkMark from "@/app/assets/tick.svg";

const CTA = () => {
    const data = [
        {
            id: 0,
            title: "Quick account creation",
        },
        {
            id: 0,
            title: "No commitment - cancel at any time",
        },
        {
            id: 0,
            title: "Join over 45 million other users",
        },
    ]
    return (
        <div className='md:pt-[8rem]'>
            <div className="w-full bg-[#F2FFF5] p-10 px-5 md:px-[15rem]">
                <div className="w-full flex flex-col items-center gap-10">
                    <div className='flex flex-col gap-5'>
                        <div className="text-center">

                            <h2 className="text-lg">Invest in yourself and</h2>
                            <h2 className="text-lg">
                                boost your <br className='md:hidden' />
                                <span className='text-3xl text-[#32794F] font-semibold pl-1'>Health</span>
                                <span className='text-3xl font-medium'>,</span>
                                <span className="text-3xl text-[#32794F] font-semibold px-1">body</span>
                                and <br className='md:hidden' />
                                <span className="text-3xl text-[#32794F] font-semibold pl-1">confidence</span>
                            </h2>
                        </div>
                        <div className='flex justify-center'>
                            <div className="flex gap-3">
                                <div className="flex items-center gap-2 bg-black py-2 px-3 rounded-md">
                                    <div className="w-6 h-6">
                                        <Image
                                            src={playStore}
                                            alt="playstore"
                                            className="w-full h-full"
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-xs text-gray-400">
                                            Avaliable on
                                        </span>
                                        <span className="text-white text-sm">Playstore</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 bg-black py-2 px-3 rounded-md">
                                    <div className="w-6 h-6">
                                        <Image
                                            src={appStore}
                                            alt="playstore"
                                            className="w-full h-full"
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-xs text-gray-400">
                                            Avaliable on
                                        </span>
                                        <span className="text-white text-sm">AppStore</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex justify-center">
                        <div className="w-full flex flex-col md:flex-row justify-between">
                            {
                                data.map((item, index) => (
                                    <div className="flex gap-3" key={index}>
                                        <div className="w-5 h-5">
                                            <Image
                                                src={checkMark}
                                                alt="playstore"
                                                className="w-full h-full"
                                            />
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-md text-gray-700 font-medium md:font-normal">
                                                {item.title}
                                            </span>
                                        </div>
                                    </div>
                                ))

                            }
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default CTA