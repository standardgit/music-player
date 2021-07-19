import { useState, useEffect } from 'react';
import Player from './Component.js/Player';
import './App.css'

import fireboy from './images/image-1.jpg';
import cardi from './images/image-2.jpg';
import adekunle from './images/image-3.jpg';
import flow from './images/image-4.jpg';

import party from './songs/mp1.mp3';
import till from './songs/mp2.mp3';
import dawn from './songs/mp3.mp3';
import small from './songs/mp4.mp3';

function App() {
  const [songs] = useState([
    {
      title: "What if i say",
      artist: "Fireboy",
      src: party,
      img_src: fireboy
    },
    {
      title: "Bodak yellow",
      artist: "Cardi B",
      src: till,
      img_src: cardi
    },
    {
      title: "Man's not hot",
      artist: "Big shaqq",
      src: dawn,
      img_src: adekunle
    },
    {
      title: "IRE",
      artist: "Adekunle Gold",
      src: small,
      img_src: flow
    }
  ]);


  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);

  useEffect (() => {
    setNextSongIndex(() => {
      if(currentSongIndex + 1 > songs.length - 1) {
        return 0
      } else {
        return currentSongIndex + 1;
      }
    })
  }, [currentSongIndex]);

  return (
    <div className="App">
      <Player 
        currentSongIndex = {currentSongIndex}
        setCurrentSongIndex = {setCurrentSongIndex}
        nextSongIndex = {nextSongIndex}
        songs = {songs}
      />
    </div>
  );
}

export default App;
