import { IoPlayCircleOutline } from "react-icons/io5";
import { AiOutlineHeart, AiFillHeart, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { useStateContext } from "context/State";
const Suwar = ({ suwar, open, setOpen }) => {
  const { chapters } = suwar;
  const { setNumber, pauseAudio, changeIsPlaying } = useStateContext();
  const [fav, setFav] = useState(false);
  const [id, setId] = useState();
  const addSurah = (item) => {
    pauseAudio();
    changeIsPlaying();
    setNumber({
      id: item.id,
      name: item.name_arabic,
    });
  };

 

  return (
    <div className="">
      <div className="py-4 w-full  md:hidden fixed  bg-skin-primary border-b flex items-center justify-between px-6">
        <span
          onClick={() => {
            setOpen(!open);
          }}
          className="text-2xl md:hidden"
        >
          <AiOutlineClose />
        </span>
        <span className="text-lg font-semibold">السور</span>
      </div>

      <ul className="flex flex-col gap-2 p-2 pt-20   md:pt-0">
        {chapters.map((chapter) => {
          return (
            <li
              key={chapter.id}
              className="border py-3 rounded-lg flex items-center justify-between px-4 text-3xl"
            >
              <span
                onClick={() => {
                  addSurah(chapter);
                  setOpen(!open);
                }}
              >
                <IoPlayCircleOutline />
              </span>
              <span className="text-lg">{chapter.name_arabic}</span>
              <span
                onClick={() => {
                  setId(chapter.id);
                  id === chapter.id && setFav(!fav);
                }}
              >
                {id === chapter.id ? <AiFillHeart /> : <AiOutlineHeart />}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Suwar;
