import Image from "next/image"

import line from "@/app/assets/card-line.svg"

interface Props {
    image: string,
    title: string,
    description: string,
    width: any
}
const Card = ({ image, title, description, width }: Props) => {
    return (
        <div className="w-full">
            <div className="w-full flex flex-col gap-5">
                <div className="w-full flex items-center gap-3">
                    <div className={`w-[${width}]`}>
                        <Image
                            src={image}
                            className={`w-full`}
                            alt={title} />
                    </div>
                    <div className="flex flex-col gap-2">
                        <h2 className="text-lg font-medium">{title}</h2>
                        <span className="text-sm text-gray-600">{description}</span>
                    </div>
                </div>
                <div>
                    <Image src={line} alt="line" />
                </div>
            </div>
        </div>
    )
}

export default Card