import React, { useState, useEffect,useRef } from 'react';
import './slider.css';

const Slider = ({onChange, percentage}) => {

    const [position, setPosition] = useState(0)   
    const [marginLeft, setMarginLeft] = useState(0)
    const [progressBarWidth, setProgressBarWidth] = useState(0)

    const rangeRef = useRef()
    const thumbRef = useRef()
    

    useEffect(() => {
        const rangeWidth = rangeRef.current.getBoundingClientRect().width
        const thumbWidth = thumbRef.current.getBoundingClientRect().width
        const centerThumb =(thumbWidth / 100) * percentage * -1
        const centerProgressBar =  thumbWidth + rangeWidth/100 * percentage - (thumbWidth/100 * percentage)

        setMarginLeft(centerThumb)
        setProgressBarWidth(centerProgressBar)
        setPosition(percentage) 
    },[percentage])

    return(
        <div className="slider-container">
            <div className="progress-bar-cover" style={{
                width: `${progressBarWidth}px`
            }}></div>
            <div className="thumb" ref={thumbRef} style={{
                left: `${position}%`,
                marginLeft: `${marginLeft}px`
            }}></div>
            <input type="range" ref={rangeRef} step="0.01" className="range" onChange={onChange}></input>
        </div>
    );
}; 

export default Slider;