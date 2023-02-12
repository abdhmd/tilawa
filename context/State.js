import React, { createContext, useContext, useState, useEffect } from "react";
const Context = createContext();

export const State = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [server, setServer] = useState([]);
  const [number, setNumber] = useState([]);
  const [audio, setAudio] = useState();
  const [url, setUrl] = useState();

  const id = number.id;
  const svr = server.server;

  useEffect(() => {
    if (id < 10) {
      setUrl(`${svr}00${id}.mp3`);
    } else if ((100 > id) & (id > 9)) {
      setUrl(`${svr}0${id}.mp3`);
    } else {
      setUrl(`${svr}${id}.mp3`);
    }
    if ((svr != undefined) & (id != undefined)) {
      setAudio(new Audio(url));
    }
  }, [url, id, svr]);

  const changeIsPlaying = () => {
    setIsPlaying(!isPlaying);
  };
  const pauseAudio = () => {
    audio && audio.pause();
  };
  return (
    <Context.Provider
      value={{
        number,
        setNumber,
        server,
        setServer,
        audio,
        isPlaying,
        setIsPlaying,
        isOpen,
        setIsOpen,
        pauseAudio,
        changeIsPlaying,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
