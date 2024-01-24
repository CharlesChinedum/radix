import Image from "next/image"

import Card from "./Card"

import fruitJuice from "@/app/assets/fruit-juice.svg"
import fruitAndDrinks from "@/app/assets/fruits-and-drinks.svg"
import vegetables from "@/app/assets/vegetables.svg"
import fruits from "@/app/assets/fruits.svg"
import oranges from "@/app/assets/oranges.svg"
import analytics from "@/app/assets/analytics.svg"
import ellipse from "@/app/assets/ellipse.svg"

import questionMark from "@/app/assets/question-mark.svg"

const Features = () => {
    const data = [
        {
            id: 0,
            title: "Find a diet you love",
            description: "Find a nutritious Diet that fits your lifestyle and food preferences. Take charge of your daily habits with one of the many ongoing Diets including Clean Eating and High Protein",
            image: vegetables,
            width: "20rem"
        }, {
            id: 1,
            title: "Start a simplified meal plan",
            description: "Follow a 7-21 day Meal Plan and get four pre-planned recipes a day. Depending on your health goals, there are many Meal Plans to choose from including Keto Burn and Vegan for a week.",
            image: fruits,
            width: "20rem"
        }, {
            id: 2,
            title: "Track your way to success",
            description: "Track your activities and what you eat with the help of our food-, exercise- and water trackers to maintain a balanced everyday life.",
            image: fruitJuice,
            width: "15rem"
        }, {
            id: 3,
            title: "Start your own healthy journey",
            description: "To help you reach your goals and customize your health journey you can add your favorite meals, food items, recipes and exercises to your Favorites.",
            image: fruitAndDrinks,
            width: "15rem"
        },
    ]
    const features = [
        {
            id: 0,
            title: "Diet tracker"
        },
        {
            id: 1,
            title: "Best nutrition advice"
        },
        {
            id: 2,
            title: "Health AI"
        },
        {
            id: 0,
            title: "Meal planner"
        },
        {
            id: 0,
            title: "Custom newsletter"
        },
        {
            id: 0,
            title: "Recipes database"
        },
        {
            id: 0,
            title: "Community"
        },
    ]
    return (
        <div className='md:pt-16 pb-16 w-full '>
            <div className="w-full px-8 md:px-0">
                <div className="w-full flex justify-center">
                    <h2 className="font-medium leading-9">
                        <span className="text-xl md:text-lg"> Have a</span> <br className="md:hidden" />
                        <span className="text-[#DC2F39] text-[60px] font-bold px-1">HealthyBite</span>
                        <br className="md:hidden" />
                        <span className="text-xl md:text-lg">
                            for
                        </span>
                    </h2>
                </div>
                <div className="w-full flex flex-wrap md:px-[15rem] pt-8">
                    {
                        data.map((item) => (
                            <div
                                key={item.id}
                                className="w-full md:w-1/2 px-5 py-5"
                            >
                                <Card
                                    key={item.id}
                                    {...item} />
                            </div>
                        ))
                    }
                </div>
                <div className="w-full flex justify-center pt-5">
                    <div className="md:w-[40%] bg-[#F2FFF5] border-[2px] rounded-xl shadow-md shadow-gray-400">
                        <div className="w-full flex p-8">
                            <div className="w-[70%] flex flex-col gap-3">
                                <span className="text-lg font-medium">{"Don't know what's the right meal plan or the diet for you ?"}</span>
                                <div>
                                    <button className="bg-[#DC2F39] text-white px-5 py-2 rounded-lg">
                                        <span>Find out now</span>
                                    </button>
                                </div>
                            </div>
                            <div className="w-[30%] flex justify-center items-center md:items-start">
                                <div className="w-[70%] md:w-[30%]">
                                    <Image
                                        src={questionMark}
                                        className="w-full"
                                        alt="question mark"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full md:h-[50vh] pt-10">
                    <div className="w-full h-full relative">
                        <div className="hidden md:block absolute right-0 top-0 h-[30rem] -z-10">
                            <Image src={oranges} className="w-full h-full" alt="strawberries" />
                        </div>
                        <div className="w-full h-full flex flex-col md:flex-row md:px-[15rem]">

                            <div className="md:flex-1">
                                <div>
                                    <span className="text-[25px]">What is</span>
                                    <span className="text-[40px] text-[#DC2F39] font-medium px-2">Radix</span>
                                    <span className="text-[25px]">for you ?</span>
                                </div>
                                <div className="w-[20rem] h-[20rem]">
                                    <Image src={analytics} className="w-full h-full" alt="strawberries" />
                                </div>
                                <div></div>
                            </div>

                            <div className="md:flex-1 flex md:justify-center">
                                <div className="flex flex-col gap-5 pt-20">
                                    {
                                        features.map(features => (
                                            <div
                                                key={features.id}
                                                className="flex items-center gap-3"
                                            >
                                                <div>
                                                    <Image src={ellipse} className="w-9 md:w-7" alt="check mark" />
                                                </div>
                                                <div>
                                                    <span className="text-lg md:text-md font-medium">{features.title}</span>
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
    )
}

export default Features