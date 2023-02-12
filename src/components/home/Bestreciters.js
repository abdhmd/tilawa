import { useEffect, useState } from "react";
import Link from "next/link";

const Bestreciters = ({ reciters, shadow }) => {
  const [bestRecitations, setBestRecitations] = useState([]);
  const ids = [29, 49, 5, 20, 30, 93, 57, 74];

  useEffect(() => {
    setBestRecitations(
      reciters.filter((item) => {
        for (let i = 0; i <= ids.length; i++) {
          if (item.id === ids[i]) {
            return item;
          }
        }
      })
    );
  }, []);

  return (
    <div className="flex flex-col items-end justify-center w-full ">
      <div
        style={shadow}
        className=" bg-skin-background p-6 py-4 rounded-lg w-full mb-2 flex flex-row-reverse items-center justify-between  "
      >
        <h2 className="text-lg font-semibold">أشهر القراء</h2>
        <p className="text-sm duration-300 cursor-pointer hover:text-skin-primary">
          كل القراء
        </p>
      </div>

      <ul className=" w-full grid grid-cols-2   gap-2 ">
        {bestRecitations.map((item, i) => {
          return (
            <li

              key={i}
            >
              <Link
                className=" text-xs  font-semibold    bg-skin-background rounded-lg flex justify-center items-center  py-4  text-center duration-300 hover:bg-skin-primary hover:text-white"
                href={`/reciter/${item.id}`}
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Bestreciters;
