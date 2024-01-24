import Image from "next/image";
import Navbar from "./Navbar";

import background from "@/app/assets/background.svg";
import background2 from "@/app/assets/background2.svg";
import mockup from "@/app/assets/mockup.svg";
import appStore from "@/app/assets/icons/apple.svg";
import playStore from "@/app/assets/icons/playstore.svg";
import MobileNavbar from "./MobileNavbar";

const Hero = () => {
  return (
    <div className="w-full md:h-[110vh]">
      <div className="w-full relative h-full">
        <div className="absolute w-full h-full -z-10 hidden lg:block">
          <Image
            src={background}
            className="w-full h-full object-cover"
            alt="background"
          />
        </div>
        <div className="absolute w-full h-full -z-10 hidden lg:block">
          <Image
            src={background2}
            className="w-full h-full object-cover"
            alt="background"
          />
        </div>
        <div className="hidden md:block md:px-20 pt-5">
          <Navbar />
        </div>
        {/* Mobile Navbar */}
        <div className="md:hidden px-8 pt-3">
          <MobileNavbar />
        </div>

        <div className="w-full h-full">
          <div className="w-full flex flex-col gap-12 md:gap-0 lg:flex-row mt-12">
            {/* Content */}
            <div className="md:flex-1 lg:w-1/2">
              <div className="h-full flex flex-col justify-center gap-5 md:gap-10 px-8 md:px-0 md:pl-20">
                <div className="flex flex-col gap-1 md:gap-3">
                  <h2 className="leading-10">
                    <span className="text-[#DC2F39] text-[50px] md:text-[70px] font-bold mr-2">
                      Healthy
                    </span>
                    <span className="text-[30px] md:text-[40px] font-light">
                      living
                      <br /> made easy!!
                    </span>
                  </h2>
                  <span className="text-slate-900 text-md">
                    Get your custom plans & <br />
                    one-on-one guidance from our expers
                  </span>
                </div>
                <div className="flex gap-3">
                  <div className="flex items-center gap-2 bg-black p-2 rounded-md">
                    <div className="w-7 h-7">
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
                  <div className="flex items-center gap-2 bg-black p-2 rounded-md">
                    <div className="w-7 h-7">
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

            {/* Mockup */}
            <div className="md:flex-1 md:w-1/2">
              <div className="w-full">
                <Image src={mockup} className="w-full" alt="mockup" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
