import { useState } from 'react';
import Player from './Component.js/Player';
import './App.css'

import fireboy from './images/image-1.jpg';
import cardi from './images/image-2.jpg';
import adekunle from './images/image-3.jpg';
import flow from './images/image-3.jpg';

function App() {
  const [songs, setSongs] = useState([
    {
      title: "What if i say",
      artist: "Fireboy",
      src: "../songs/mp1",
      img_src: fireboy
    },
    {
      title: "Bodak yellow",
      artist: "Cardi B",
      src: "../songs/mp2",
      img_src: cardi
    },
    {
      title: "IRE",
      artist: "Adekunle Gold",
      src: "../songs/mp3",
      img_src: adekunle
    },
    {
      title: "Dont know",
      artist: "FLow",
      src: "../songs/mp4",
      img_src: flow
    }
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);



  return (
    <div className="App">
      <Player 
        song={songs[currentSongIndex]}
        nextSong={songs[nextSongIndex]}
      />
    </div>
  );
}

export default App;
