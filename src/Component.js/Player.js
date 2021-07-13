import React from 'react';
import PlayerDetails from './PlayerDetails';
import PlayerControls from './PlayerControls'
import PlayerControl from './PlayerControls';

const Player = (props) => {
    return (
        <div className="player">
            <audio></audio>
            <h4>Playing now</h4>
            <PlayerDetails song={props.song} />
            <PlayerControl />
    <p><strong>Next up:</strong>{props.nextSong.title} by {props.nextSong.artist}</p>
        </div>
    );
};

export default Player;