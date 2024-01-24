import Image from "next/image";

import strawberries from "@/app/assets/strawberries.svg";
import checkMark from "@/app/assets/tick.svg";
import lifestyleText from "@/app/assets/lifestyle-text.svg";

import line from "@/app/assets/line.svg";
import woman2 from "@/app/assets/woman2.svg";
import gym from "@/app/assets/gym.svg";

import apple from "@/app/assets/apple.svg";
import banana from "@/app/assets/banana.svg";
import avocado from "@/app/assets/avocado.svg";

const Why = () => {
  const features = [
    {
      id: 0,
      title: "Improved Health",
    },
    {
      id: 1,
      title: "Better Mental Health",
    },
    {
      id: 2,
      title: "Increased longevity",
    },
    {
      id: 3,
      title: "Weight management",
    },
    {
      id: 4,
      title: "Improved self-confidence",
    },
    {
      id: 5,
      title: "Reduced stress",
    },
  ]

  const plans = [
    {
      id: 0,
      title: "Loosing weight",
      icon: apple,
    },
    {
      id: 1,
      title: "Gaining weight",
      icon: banana,
    },
    {
      id: 2,
      title: "Maintaining weight",
      icon: avocado,
    },
  ]

  return (
    <section className="md:h-[100vh] my-10 md:my-0">
      <div className="w-full h-full">
        <div className="relative h-full w-full">
          <div className="absolute left-0 bottom-0 -z-10">
            <Image src={strawberries} className="w-2/3" alt="strawberries" />
          </div>

          <div className="w-full px-8 md:px-[15rem] h-[80%]">
            <div className="mb-5 md:mb-0">
              <Image src={lifestyleText} className="" alt="lifestyle Text" />
            </div>

            <div className="flex flex-col md:flex-row w-full h-[50%]">
              <div className="md:w-1/2 flex-1 h-full">
                <div className="flex flex-col h-full justify-between gap-3 md:gap-0">
                  {
                    features.map(features => (
                      <div
                        key={features.id}
                        className="flex items-center gap-3"
                      >
                        <div>
                          <Image src={checkMark} className="w-7" alt="check mark" />
                        </div>
                        <div>
                          <span className="text-lg">{features.title}</span>
                        </div>
                      </div>
                    ))
                  }
                </div>
              </div>

              <div className="md:w-1/2 h-full items-end flex-1 flex flex-col gap-3 my-7 md:my-0">
                <div className="flex gap-3">
                  <div className="flex items-end">
                    <Image src={woman2} className=" md:w-[15rem]" alt="lifestyle Text" />
                  </div>
                  <div className="">
                    <Image src={woman2} className=" md:w-[15rem]" alt="lifestyle Text" />
                  </div>
                </div>
                <div>
                  <Image src={gym} className=" md:w-[30.8rem]" alt="lifestyle Text" />
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:pl-[15rem] px-8 md:px-0">
            <div className="w-full bg-[#F2FFF5] border-[0.2rem] border-black-600 shadow-sm px-10 py-6 md:py-4 rounded-l-xl rounded-r-xl md:rounded-r-none">
              <div className="w-full h-full flex flex-col">


                <div className="w-full flex flex-col gap-2 justify-center items-center">
                  <div className="text-center">
                    <h2 className="font-medium text-lg">We have plans for</h2>
                    <span className="text-sm text-gray-500">Build healthier habits with personalized lessons</span>
                  </div>
                  <div className="w-full flex justify-center">
                    <Image src={line} className="w-1/2" alt="line" />
                  </div>
                </div>
                <div className="w-full flex justify-center py-2 md:px-[10rem]">
                  <div className="w-full flex flex-col gap-3 md:gap-0 md:flex-row justify-between">

                    {
                      plans.map(plans => (
                        <div
                          key={plans.id}
                          className="flex items-center gap-2"
                        >
                          <div className="w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-sm shadow-gray-400 p-2">
                            <Image src={plans.icon} className="w-full" alt="icon" />
                          </div>
                          <div>
                            <span>{plans.title}</span>
                          </div>
                        </div>
                      ))
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Why;
