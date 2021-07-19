import React from 'react';

const PlayerDetails = (props) => {
    console.log(props.song.img_src)
    return (
        <div className="player-details">
            <div style={{backgroundImage:`url(${props.song.img_src})`}} className="details-img">
                
            </div>
    <h3 className="details-title">{props.song.title}</h3>
    <h4 className="details-artist">{props.song.artist}</h4>
        </div>
    );
}

export default PlayerDetails;