import images from "@/assets"
import Image from "next/image"
import Link from "next/link"

interface INavbarProps {}

const Navbar = (props: INavbarProps) => {
  return (
    <header>
      <div className="grid grid-cols-3 gap-4 m-2">
        <div className="flex items-center rounded-full overflow-hidden">
          <Image src={images.img_logo} alt="jayden logo" width={50} height={50} className="rounded-full border-2 border-white"/>
        </div>
        <div className="flex items-center text-center border-b-[0.5px] border-white/50 justify-center space-x-8 transition-all duration-300 ease-in-out">
          <Link href="/" className="bg-left-bottom bg-gradient-to-r from-white to-white bg-[length:0%_1px] bg-no-repeat hover:bg-[length:100%_1px] transition-all duration-200 ease-out">Home</Link>
          <Link href="#"  className="bg-left-bottom bg-gradient-to-r from-white to-white bg-[length:0%_1px] bg-no-repeat hover:bg-[length:100%_1px] transition-all duration-200 ease-out">My Projects</Link>
          <Link href="#" className="bg-left-bottom bg-gradient-to-r from-white to-white bg-[length:0%_1px] bg-no-repeat hover:bg-[length:100%_1px] transition-all duration-200 ease-out">My Courses</Link>
          <Link href="/about-me" className="bg-left-bottom bg-gradient-to-r from-white to-white bg-[length:0%_1px] bg-no-repeat hover:bg-[length:100%_1px] transition-all duration-200 ease-out">About Me</Link>
        </div>
        <div className="flex items-center justify-end">
          <button className="hover:bg-gray-100/20">
            <p className="border-[1px] border-white px-6 py-1">
              Log In
            </p>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar
