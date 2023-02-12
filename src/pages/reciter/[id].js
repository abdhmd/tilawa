import { useState, useEffect } from "react";

const Reciter = ({ reciter, suwar }) => {
 return(
  <div>reciter</div>
 )
};

export async function getStaticPaths() {
  const res = await fetch("https://www.mp3quran.net/api/v3/reciters?&reciter");
  const data = await res.json();

  const paths = data.reciters.map((reciter) => ({
    params: {
      id: reciter.id.toString(),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { id } }) {
  const res = await fetch(
    `https://www.mp3quran.net/api/v3/reciters?&reciter=${id}`
  );
  const data = await res.json();

  const resSuwar = await fetch("https://mp3quran.net/api/v3/suwar");
  const dataSuwar = await resSuwar.json();
  return {
    props: {
      reciter: data.reciters[0],
      suwar: dataSuwar.suwar,
    },
  };
}

export default Reciter;
