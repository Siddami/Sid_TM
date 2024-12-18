import {useDispatch, useSelector } from "react-redux";
import boardsSlice from "../redux/boardsSlice";
import { Switch } from "@headlessui/react";

export const HeaderDropDown = (setOpenDropDown) => {
  
    const dispatch = useDispatch()
    const boards = useSelector((state) => state.boards);
  
    return (
    <div className=" py-10 px-6 absolute left-0 right-0 bottom-[-100vh] top-16 bg-[#00000080]"
    onClick={(e) => {
        if (e.target !== e.currentTarget) {
          return;
        }
        setOpenDropDown(false);
      }}
    >
        {/* DropDown Modal */}
        <div className="bg-white dark:bg-[#2b2c37] shadow-md shadow-[#364e7e1a]  w-full   py-4 rounded-xl">
            <h3 className=" dark:text-gray-300 text-gray-600 font-semibold mx-4 mb-8 ">
                ALL BOARDS ({boards?.length})
            </h3>
            <div className=" dropdown-borad  ">
                {boards.map((board, index) => (
                    <div
                    className={` flex items-baseline space-x-2 px-5 py-4  ${
                        board.isActive &&
                        " bg-[#635fc7] rounded-r-full text-white mr-8 "
                    } `}
                    key={index}
                    onClick={() => {
                        dispatch(boardsSlice.actions.setBoardActive({ index }));
                    }}
                    >
                    <i className='bx bx-clipboard filter-white text-md' ></i>{" "}
                    <p className=" text-lg font-bold  ">{board.name}</p>
                    </div>
                ))}

                <div 
                    onClick={() => {
                        setIsBoardModalOpen(true);
                        setOpenDropDown(false)
                    }}
                    className=" flex items-baseline space-x-2  text-[#635fc7] px-5 py-4  ">
                        <i className='bx bx-clipboard filter-white text-md' ></i>
                        <p className=" text-lg font-bold  ">Create New Board </p>
                </div>

                <div className=" mx-2  p-4  space-x-2 bg-slate-100 dark:bg-[#20212c] flex justify-center items-center rounded-lg">
                    <i className='bx bx-sun text-lg'></i>

                    <Switch
                    checked={darkSide}
                    onChange={toggleDarkMode}
                    className={`${
                        darkSide ? "bg-[#635fc7]" : "bg-gray-200"
                    } relative inline-flex h-6 w-11 items-center rounded-full`}
                    >
                    <span className="sr-only">Enable notifications</span>
                    <span
                        className={`${
                        darkSide ? "translate-x-6" : "translate-x-1"
                        } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                    />
                    </Switch>

                    <img src={darkIcon} alt="moon indicating dark mode" />
                </div>
            </div>
        </div>
    </div>
  )
}
