import Suwar from "@/components/home/Suwar";
import Reciters from "@/components/home/Reciters";
import Player from "@/components/Player";
import Navbar from "@/components/Navbar";
import { useState, useEffect } from "react";
import Hero from "@/components/home/Hero";
import Bestreciters from "@/components/home/Bestreciters";
import Riwayat from "@/components/home/Riwayat";
import { useStateContext } from "context/State";

const shadow = {
  boxShadow: " rgba(10, 12, 20, 0.02) 0px 20px 100px 0px",
};

const Home = ({ reciters, suwar, riwayat }) => {
  const { isOpen } = useStateContext();

  return (
    <main className=" flex flex-col  gap-6">
      <header className="w-full flex gap-6 flex-col md:flex-row-reverse md:grid-cols-2 ">
        <div
          style={shadow}
          className=" flex-auto flex  items-center bg-skin-background rounded-lg overflow-hidden"
        >
          <Hero />
        </div>
        <div
          style={shadow}
          className="  rounded-lg border border-skin-layout-background h-fit overflow-hidden bg-gradient-to-tr from-skin-background to-skin-layout-background "
        >
          <Player shadow={shadow} />
        </div>
      </header>

      <section className="flex flex-col-reverse md:grid md:grid-cols-2 gap-6">
        <div id="audio" style={shadow} className="rounded-lg overflow-hidden">
          <Suwar suwar={suwar} />
        </div>
        <div className="  rounded-lg overflow-hidden h-fit ">
          <Reciters shadow={shadow} reciters={reciters} riwayat={riwayat} />
        </div>
      </section>
    </main>
  );
};

export async function getStaticProps() {
  const res = await fetch("https://mp3quran.net/api/v3/reciters");
  const data = await res.json();

  const resSuwar = await fetch(
    "https://api.quran.com/api/v4/chapters?language=ar"
  );
  const dataSuwar = await resSuwar.json();

  const resRiwayat = await fetch("https://mp3quran.net/api/v3/riwayat");
  const dataRiwayat = await resRiwayat.json();

  return {
    props: {
      reciters: data.reciters,
      suwar: dataSuwar,
      riwayat: dataRiwayat.riwayat,
    },
  };
}

export default Home;
