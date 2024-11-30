import { useState } from "react"
import { HeaderDropDown } from "./HeaderDropDown";

const Header = () => {
  const[openDropDown, setOpenDropDown] = useState(false);

  return (
    <div className="p-3 fixed left-0 bg-white dark:bg-[#2b2c37] z-50 right-0">
        <header className="flex justify-between dark:text-white items-center">

            {/* Left Side */}
            <div className="flex items-center space-x-2 md:space-x-4">
                <img src="/assets/logo.png" alt="logo" className="h-14 w-14" />
                <h3 className="hidden md:inline-block font-bold font-sans md:text-4xl">
                    kanban
                </h3>
                <div className="flex items-center">
                    <h3 className="truncate max-w-[200px] md:text-2xl text-xl font-bold md:ml-20 font-sans">
                        board name
                    </h3>
                    <i className={`${openDropDown? 'bx bx-up-arrow-alt': 'bx bx-down-arrow-alt'} text-lg ml-2 cursor-pointer md:hidden`}
                        onClick={() => setOpenDropDown(state => !state)}
                    ></i>
                </div>
            </div>

            {/* Right Side */}
            <div className="flex space-x-4 items-center md:space-x-6">
                <button className=" hidden md:block button ">
                    + Add new task
                </button>
                <button className=" button py-1 px-3 md:hidden">
                    +
                </button>
                <i className='bx bx-dots-vertical-rounded cursor-pointer text-2xl'></i>
            </div>
        </header>

        {openDropDown && <HeaderDropDown setOpenDropDown={setOpenDropDown} />}
    </div>
  )
}

export default Header