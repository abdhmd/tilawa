import {
  IoPlay,
  IoPause,
  IoHeartOutline,
  IoHeart,
  IoArrowBack,
  IoArrowForward,
} from "react-icons/io5";

import { useStateContext } from "context/State";
import { useEffect, useState } from "react";

const Suwar = ({ suwar, shadow }) => {
  const [page, setPage] = useState(1);
  const { chapters } = suwar;
  const [items, setItems] = useState(chapters.slice(0, 6));

  const incPage = () => {
    page === 19 ? setPage(1) : setPage((prev) => prev + 1);
  };

  const decPage = () => {
    page === 1 ? setPage(19) : setPage((prev) => prev - 1);
  };

  const chapterId = (ID) => {
    if (ID < 10) {
      return `00${ID}`;
    } else if ((ID > 9) & (ID < 100)) {
      return `0${ID}`;
    } else {
      return ID;
    }
  };

  useEffect(() => {
    setItems(chapters.slice(page * 6 - 6, page * 6));
  }, [page]);

  const { isPlaying, setIsPlaying } = useStateContext();
  const [fav, setFav] = useState(false);

  useEffect(() => {
    localStorage.setItem("favorited", JSON.stringify(fav));
  }, [fav]);

  const [isCheck, setIsCheck] = useState(false);
  const [id, setIds] = useState();

  const playingAction = (ID) => {
    setIds(ID);
    setIsPlaying(!isPlaying);
  };

  return (
    <section>
      <div
        className="     w-full mb-4 flex  gap-2 md:gap-4 flex-row-reverse items-center justify-between   "
      >
        <div className="h-10   rounded-lg flex flex-row-reverse gap-2 md:gap-4 items-center justify-center ">
          <span className="h-full px-6 rounded-lg text-xs md:text-sm font-semibold bg-skin-primary text-white flex items-center">سعد الغامدي</span>
          <div
          onClick={()=>{
            setFav(!fav)
          }}
          className="h-full w-10 bg-skin-background rounded-lg flex justify-center items-center text-xl cursor-pointer">
            {fav ? (
              <span className="text-skin-primary">
                <IoHeart />
              </span>
            ) : (
              <span>
                <IoHeartOutline />
              </span>
            )}
          </div>
        </div>

        <div className="flex gap-2 md:gap-4 justify-center items-center   ">
          <span
            onClick={() => {
              incPage();
            }}
            className="cursor-pointer bg-skin-background  w-10 h-10  flex justify-center items-center rounded-lg text-xl"
          >
            <IoArrowBack />
          </span>
          <div className="flex flex-row-reverse items-center h-10 gap-4 bg-skin-primary text-white rounded-lg ">
            <span className=" text-sm font-semibold w-10   flex justify-center items-center rounded-lg ">
              {page < 10 ? `0${page}` : page}
            </span>
          </div>
          <span
            onClick={() => {
              decPage();
            }}
            className="cursor-pointer bg-skin-background w-10 h-10  flex justify-center items-center rounded-lg text-xl"
          >
            <IoArrowForward />
          </span>
        </div>
      </div>



      <ul className="w-full flex flex-col gap-2">
        {items.map((item) => {
          return (
            <li
              key={item.id}
              className=" bg-gradient-to-br border border-skin-layout-background from-skin-background to-skin-layout-background p-4 rounded-lg flex flex-row-reverse  w-full items-center justify-between"
            >
              <div className="w-10 h-10 text-white text-xs rounded-lg flex justify-center items-center bg-skin-primary font-semibold">
                {chapterId(item.id)}
              </div>
              <span className="w-20 md:w-fit   flex flex-row-reverse">
                {item.name_arabic}
              </span>
              <span className="text-xs opacity-75 font-semibold  text-right text-skin-primary  ">
                2:45
              </span>
              <div className="relative   w-10 h-10  flex justify-center items-center text-xl ">
                <span
                  onClick={() => {
                    setFav(!fav);
                    setIds(item.id);
                  }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                >
                  {(item.id === id) & fav ? (
                    <span className="text-skin-primary duration-300">
                      <IoHeart />
                    </span>
                  ) : (
                    <IoHeartOutline />
                  )}
                </span>
              </div>
              <div
                onClick={() => {
                  playingAction(item.id);
                }}
                className="w-10 h-10 flex justify-center items-center rounded-lg bg-gradient-to-t from-skin-background to-skin-layout-background cursor-pointer duration-300 text-skin-primary border border-skin-background"
              >
                {(item.id == id) & isPlaying ? <IoPause /> : <IoPlay />}
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Suwar;
