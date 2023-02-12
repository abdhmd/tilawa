import Image from "next/image";
import { useEffect, useState } from "react";
import { useStateContext } from "context/State";
import {
  IoPlay,
  IoPause,
  IoPlaySkipBackOutline,
  IoPlaySkipForwardOutline,
} from "react-icons/io5";

const Player = ({ shadow }) => {
  const [width, setWidth] = useState("0");
  const dragWidth = (e) => {
    const value = e.target.value;
    setWidth(value);
  };


  const {isPlaying,setIsPlaying} = useStateContext()

  return (
    <div className="flex md:flex-col justify-between items-center gap-4 p-6  lg:p-12">
      <div style={shadow} className=" border border-skin-primary rounded-full p-2">
        <Image
          className="rounded-full"
          src="/../public/image.png"
          alt="image"
          width={100}
          height={100}
        />
      </div>
      <div className="w-full flex flex-col gap-4">
        <div className="flex justify-between flex-row-reverse text-sm">
          <span>سعد الغامدي</span>
          <span>الفاتحة</span>
        </div>
        <div className="flex gap-2 w-full justify-between items-center text-sm">
          <span className="opacity-50">1:23</span>
          <div className="relative w-full h-[5px] cursor-pointer rounded-full overflow-hidden  flex  bg-skin-background border-skin-layout-background">
            <span
              style={{
                width: `${width}%`,
              }}
              className={`bg-skin-primary  h-full absolute top-0 left-0 `}
            ></span>
            <input
              type="range"
              onChange={(e) => {
                dragWidth(e);
              }}
              className=" w-full h-[1px] cursor-pointer bg-skin-primary rounded-full opacity-0  appearance-none"
            />
          </div>
          <span className="opacity-50">2:56</span>
        </div>

        <div className="flex w-full gap-4 justify-center items-center text-xl">
          <span className="cursor-pointer">
            <IoPlaySkipBackOutline />
          </span>
          <span 
          onClick={()=>{
            setIsPlaying(!isPlaying)
          }}
          className="  bg-skin-primary text-white rounded-lg p-3 cursor-pointer">
            {!isPlaying ? <IoPlay /> : <IoPause />}
          </span>
          <span className="cursor-pointer">
            <IoPlaySkipForwardOutline />
          </span>
          {/* <span>
            <IoHeartCircleOutline />
          </span> */}
        </div>
      </div>
    </div>
  );
};

export default Player;
