import { MdKeyboardArrowLeft } from "react-icons/md";
import { BsMoon, BsSun } from "react-icons/bs";

const NvbarChat = ({room , theme ,changeTheme}) => {
  return (
    <div className={`${theme} p-[10px] flex justify-between`}>
      <div className="flex">
          <a href="/"><MdKeyboardArrowLeft className="text-[40px] mt-[10px] text-red-500" /></a>
          <img
            src="https://images.unsplash.com/photo-1681785886872-6599ee1ed228?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
            alt="icons_room"
            className="w-[50px] h-[50px]  rounded-full "
          />
          <div className="p-[5px] ml-[3px] ">
            <p className="font-medium ">{room}</p>
            <p className="text-[#1d841d] font-bold">online</p>
          </div>
      </div>
      <div className="">
        {theme === "white" ? (
          <BsMoon className="text-[28px] mt-[12px] text-red-500 " onClick={changeTheme} />
        ) : (
          <BsSun
            className="text-[28px] mt-[12px] text-red-500"
            onClick={changeTheme}
          />
        )}
      </div>
    </div>
  );
};
export default NvbarChat;
