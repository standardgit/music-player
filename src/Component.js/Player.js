import React, { useState, useRef, useEffect } from 'react';
import PlayerDetails from './PlayerDetails';
import PlayerControl from './PlayerControls';
import Slider from './Slider';

const Player = (props) => {

    const audio = useRef(null)
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect (() => {
        const roll = document.getElementsByClassName('details-img')
        if (isPlaying) {
            audio.current.play();
             

        } else {
            audio.current.pause()
           
        }
    })

    const skipSong= (forwards = true) => {
        if (forwards) {
           props.setCurrentSongIndex(() => {
               let temp = props.currentSongIndex;
               temp++;

               if (temp > props.songs.length - 1) {
                   temp = 0
               }

               return temp; 
           }) 
        } else {
            props.setCurrentSongIndex(() => {
                let temp = props.currentSongIndex;
                temp--;
 
                if (temp < 0) {
                    temp = props.songs.length - 1
                }
 
                return temp; 
            }) 
        }
    }

    return (
        <div className="player">
            <audio src = {props.songs[props.currentSongIndex].src} ref={audio}></audio>
            <h4>Playing now</h4>
            <PlayerDetails song={props.songs[props.currentSongIndex]} />
            <Slider onChange={onChange} percentage={percentage}/>
            <PlayerControl isPlaying={isPlaying} setIsPlaying={setIsPlaying} skipSong={skipSong}/>
            <p><strong>Next up:</strong> {props.songs[props.nextSongIndex].title} by {props.songs[props.nextSongIndex].artist}</p>
        </div>
    );
};

export default Player;