import Link from "next/link"

const MobileNavbar = () => {
    return (
        <nav>
            <div className="w-full flex items-center justify-between">
                <div className="flex items-center gap-7">
                    <div>
                        <span className="font-semibold text-[1.5rem]">Radix.</span>
                    </div>
                </div>
                <div className="flex items-center gap-7">

                    <span className="px-3 py-2 border-[1px]  border-gray-500 rounded-md">
                        <Link href="/">Get Started</Link>
                    </span>
                </div>
            </div>
        </nav>
    )
}

export default MobileNavbar