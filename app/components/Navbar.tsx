import Image from "next/image";
import Link from "next/link";

import logo from "@/app/assets/apple.svg";

const Navbar = () => {
  return (
    <nav>
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center gap-7">
          <div>
            {/* <Image src={logo} alt="logo" width={50} height={50} /> */}
            <span className="font-semibold text-[2rem]">Radix.</span>
          </div>
        </div>
        <div className="flex items-center gap-7">
          <Link href="/"> Features </Link>
          <Link href="/"> Blogs </Link>
          <Link href="/"> About </Link>
          <span className="px-3 py-2 border-[1px]  border-gray-500 rounded-md">
            <Link href="/">Contact Us</Link>
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
