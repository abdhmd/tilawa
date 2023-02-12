import Link from "next/link";

const Riwayat = ({ riwayat }) => {
  return (
    <section>
      <div className="flex flex-col items-end  w-full ">
        <h2 className="mb-6 font-semibold text-lg">الروايات</h2>
      </div>
      <ul className=" flex flex-wrap items-end justify-end gap-2">
        {riwayat.map((item, i) => {
          return <li key={i} className=" flex-auto w-fit text-center text-sm font-medium cursor-pointer bg-skin-layout-background p-4 rounded-lg duration-300 hover:bg-skin-primary hover:text-white">{item.name}</li>;
        })}
      </ul>
    </section>
  );
};

export default Riwayat;
