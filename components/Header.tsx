import Link from "next/link";
import MobileNav from "./MobileNav";
import Nav from "./Nav";
import Image from "next/image";
import logo from "@/public/productor.png";
const Header = () => {
  return (
    <div>
      <header className="fixed top-0 z-50 h-[140px] w-full max-w-[1920px] bg-black lg:h-[118px]">
        <div className="container mx-auto flex h-full flex-col items-center justify-between lg:flex-row">
          <Link href="/">
            <Image
              src={logo}
              alt="logo"
              width={100}
              height={80}
              className="mt-7 h-[140px] w-[100px] py-7 text-black lg:h-[120px]  lg:w-[80px] lg:py-4"
            />
          </Link>

          <MobileNav containerStyles="capitalize fixed text-white mt-4 flex font-bold gap-4  md:text-xl lg:hidden" />
          <Nav containerStyles="capitalize flex gap-4 hidden font-bold text-white lg:flex" />
        </div>
      </header>
    </div>
  );
};
export default Header;
