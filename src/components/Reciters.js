import Link from "next/link";
import { IoPlayCircleOutline } from "react-icons/io5";
import { AiOutlineHeart, AiFillHeart, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { useStateContext } from "context/State";
const Reciters = ({ reciters, open, setOpen }) => {
  const { setServer, pauseAudio, changeIsPlaying } = useStateContext();


  const data = reciters.reciters;
  const recitations = data.filter(
    (item) => item.moshaf[0].surah_total === 114
  );

  const [fav, setFav] = useState(false);
  const [id, setId] = useState();

  const addReciter = (item) => {
    pauseAudio();
    changeIsPlaying();

    setServer({
      name: item.name,
      server: item.moshaf[0].server,
    });
  };

  return (
    <section className="p-6 w-full bg-red-50">
      <div className="py-4 w-full  md:hidden fixed  bg-skin-primary border-b flex items-center justify-between px-6">
        <span
          onClick={() => {
            setOpen(!open);
          }}
          className="text-2xl md:hidden"
        >
          <AiOutlineClose />
        </span>
        <span className="text-lg font-semibold">القراء</span>
      </div>
      <ul className="flex flex-col gap-2 p-2 pt-20   md:pt-0">
        {recitations.map((chapter) => {
          return (
            <li
              key={chapter.id}
              className="border py-3 rounded-lg flex items-center justify-between px-4 text-3xl"
            >
              <span
                onClick={() => {
                  addReciter(chapter);
                  setOpen(!open);
                }}
              >
                <IoPlayCircleOutline />
              </span>
              <span className="text-sm">{chapter.name}</span>
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
    </section>
  );
};

export default Reciters;
