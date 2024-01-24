import robotHand from "@/app/assets/robot-hand.png";
import Image from "next/image";

const Newsletter = () => {
    return (
        <div className="w-full my-10 md:my-0">
            <div className="w-full flex flex-col md:flex-row">
                <div className="md:flex-1 md:w-1/2 flex flex-col justify-center items-center gap-8">
                    <div>
                        <h2 className="text-xl">Custom
                            <span className="text-[#DC2F39] text-[70px] font-bold mx-2">
                                Health
                            </span>
                            <br /> tips, sent straight to your mail!</h2>
                    </div>
                    <div className="flex md:w-1/2">
                        <div className="w-full">
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="w-full p-2 border-2 outline-none"
                            />
                        </div>
                        <div>
                            <button className="bg-[#DC2F39] text-white px-5 py-2 rounded-r-full">Subscribe</button>
                        </div>
                    </div>
                </div>
                <div className="md:flex-1 md:w-1/2 flex justify-end items-center">
                    <div className="w-[80%]">
                        <Image
                            src={robotHand}
                            className="w-full h-full"
                            alt="robot-hand"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Newsletter