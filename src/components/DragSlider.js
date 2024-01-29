import React, { useState } from 'react'

import styles from './DragSlider.module.scss'

export const DragSlider = ({ number, setNumber, step, minValue, maxValue, className, loanTerm, onSliderChange, select }) => {
   
   

    const sliderChange = (e) => {
        setNumber(e.target.value)
    }
    const [currentTerm, setCurrentTerm] = useState(0);
    const [prevTerm, setPrevTerm] = useState(0);

    const handleLoanSliderChange = (e) => {
        console.log(select.options[0]);
        const values = [10, 15, 20, 30];
        setNumber(e.target.value);
        
    };


    return (
        <div className={styles.dragSliderWrapper}>
            <div className={styles.track} id="track" >

                <input
                    className={`${styles.rangeInput} ${className}`}
                    name="minDragSlider"
                    type="range"
                    min={minValue}
                    max={maxValue}
                    step={step}
                    value={number}
                    onChange={loanTerm ? handleLoanSliderChange : sliderChange}                   
                   
                />
               
            </div>

        </div>
    )

}