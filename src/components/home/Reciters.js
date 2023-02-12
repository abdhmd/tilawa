import { useStateContext } from "context/State";
import { useEffect, useState } from "react";

import {
  IoPlay,
  IoPause,
  IoHeartOutline,
  IoHeart,
  IoArrowBack,
  IoArrowForward,
  IoSearch,
} from "react-icons/io5";

const Reciters = ({ riwayat, reciters }) => {
  const chapters = reciters.filter(
    (item) => item.moshaf[0].surah_total === 114
  );
  const [page, setPage] = useState(1);
  const [items, setItems] = useState(chapters.slice(0, 10));
  const [searchItem, setSearchItem] = useState([]);
  const [pageNumber, setPageNumber] = useState(13);

  // Search =======
  const titles = [];
  const itemTitle = chapters.map((item) => item.name);

  const intDivision = Math.floor(searchItem.length / 10);
  const rstDivision = Math.floor(searchItem.length % 10);

  const searchReciter = (e) => {
    const value = e.target.value;
    for (let i = 0; i <= itemTitle.length - 1; i++) {
      const result = value != "" ? itemTitle[i].search(value) : -1;
      result === -1 ? titles.splice() : titles.push(itemTitle[i]);
    }

    if (titles != []) {
      setSearchItem(
        titles.map((title) => chapters.filter((item) => item.name === title))
      );
    }

    if ((value.length > 2) & (searchItem !== [])) {
      rstDivision != 0
        ? setPageNumber(intDivision + 1)
        : setPageNumber(intDivision);
      setPage(1);
      setItems(searchItem.slice(page * 10 - 10, page * 10));
    } else {
      setItems(chapters.slice(page * 10 - 10, page * 10));
      setPageNumber(13);
    }
  };

  // Pagination ========
  const incPage = () => {
    page >= pageNumber ? setPage(1) : setPage((prev) => prev + 1);
  };

  const decPage = () => {
    page <= 1 ? setPage(pageNumber) : setPage((prev) => prev - 1);
  };

  useEffect(() => {
    pageNumber != 13
      ? setItems(searchItem.slice(page * 10 - 10, page * 10))
      : setItems(chapters.slice(page * 10 - 10, page * 10));
  }, [page]);

  return (
    <div className="  flex flex-col items-end justify-center w-full">
      <div className="     w-full mb-4 flex  gap-2 md:gap-4 flex-row-reverse items-center justify-between   ">
        <div className="h-10   rounded-lg flex flex-row-reverse gap-2 md:gap-4 items-center justify-center ">
          <span className="h-full px-6 rounded-lg text-xs md:text-sm font-semibold bg-skin-background flex items-center">
            القراء
          </span>
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
          <div className="flex flex-row-reverse items-center px-4 gap-2 h-10  bg-skin-primary text-white rounded-lg ">
            <span className=" text-sm font-semibold   flex justify-center items-center  ">
              {page < 10 ? `0${page}` : page}
            </span>
            <span>من</span>
            <span className=" text-sm font-semibold   flex justify-center items-center  ">
              {pageNumber < 10 ? `0${pageNumber}` : pageNumber}
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

      {/* Filter =============================== */}

      <div className="mb-4  md:h-10   items-center gap-4 w-full">
       
        <div className="h-12 md:h-full w-full flex flex-row-reverse items-center justify-between flex-auto border rounded-lg  px-2">
          <input
            style={{
              background: "transparent",
              direction: "rtl",
            }}
            type="text"
            onChange={(e) => searchReciter(e)}
            placeholder="ابحث عن قارئ"
            className="outline-none border-none  text-right   text-xs md:text-base flex-auto"
          />
          <span className="text-xl opacity-70">
            <IoSearch />
          </span>
        </div>
      </div>

      {/* Reciters =============================== */}
      <ul className=" flex flex-wrap items-end justify-end gap-2">
        {}

        {items.map((item, i) => {
          return (
            <li
              key={i}
              className=" flex-auto w-fit text-center text-sm font-medium cursor-pointer bg-skin-background p-4 rounded-lg duration-300 hover:bg-skin-primary hover:text-white"
            >
              {(searchItem !== []) & (item[0] !== undefined)
                ? item[0].name
                : item.name}

            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Reciters;
