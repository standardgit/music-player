import React, { useState, useRef, useEffect } from 'react';
import PlayerDetails from './PlayerDetails';
import PlayerControl from './PlayerControls';
import Slider from './Slider';

const Player = (props) => {
    const [percentage, setPercentage] = useState(0)
    const [musicLenght, setMusicLenght] = useState(0)
    const audio = useRef(null)
    const [isPlaying, setIsPlaying] = useState(false);
    

    const onChange = (event) => {
        setPercentage(event.target.value)
        audio.current.currentTime = (event.target.value / 100) * musicLenght
    };

    const onPlay = (time) => {
      const percent = (time/musicLenght) * 100;
      setPercentage(percent);
    }

    


    // const getCurrentDuration = (event) => {
        
    // }

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
            <audio src = {props.songs[props.currentSongIndex].src} ref={audio}
                onLoadedData = {(event) => {
                    console.log(event.currentTarget.duration)
                    setMusicLenght(event.currentTarget.duration)
                    // setDuration(event.currentTarget.duration.toFixed(2))
                }}
                onTimeUpdate = {(event) => {
                    console.log(event.currentTarget.currentTime)
                    onPlay(event.currentTarget.currentTime)
                }}
             ></audio>
            <h4>Playing now</h4>
            <PlayerDetails song={props.songs[props.currentSongIndex]} />
            <Slider onChange={onChange} percentage={percentage}/>
            <PlayerControl isPlaying={isPlaying} setIsPlaying={setIsPlaying} skipSong={skipSong}/>
            <p><strong>Next up:</strong> {props.songs[props.nextSongIndex].title} by {props.songs[props.nextSongIndex].artist}</p>
        </div>
    );
};

export default Player;