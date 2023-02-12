import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="w-full p-6 lg:p-12  text-right flex flex-col items-end gap-2">
      <h1
      style={{
        lineHeight : "140%"
      }}
      
      className="font-bold text-2xl md:text-3xl lg:text-4xl  mb-2">
        قرآن يتلى آناء
        <br />
        الليل وأطراف النهار
      </h1>
      <p className="text-sm opacity-70">أكثر من 100 قارئ بروايات مختلفة</p>
      <Link href="#audio">
        <button className="bg-skin-primary w-fit py-3 px-6 rounded-lg text-white mt-4">
          استمع الٱن
        </button>
      </Link>
    </div>
  );
};

export default Hero;
