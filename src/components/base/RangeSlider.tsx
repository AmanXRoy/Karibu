import React, { useRef, useState } from 'react';

const RangeSlider = () => {
    const [value, setValue] = useState(1); // Initialize slider at 1
    const sliderRef = useRef(null);

    const handleDrag = (e) => {
        e.preventDefault();
        const slider = sliderRef.current;

        // Get the slider's bounding rectangle
        const sliderRect = slider.getBoundingClientRect();

        // Calculate the new value based on mouse position
        let newLeft = e.clientX - sliderRect.left;

        // Ensure the newLeft stays within slider boundaries
        if (newLeft < 0) newLeft = 0;
        if (newLeft > sliderRect.width) newLeft = sliderRect.width;

        // Map newLeft to a value between 1 and 20
        const percentage = (newLeft / sliderRect.width); // 0 to 1 range
        const newValue = Math.round(1 + percentage * 19); // Maps to 1-20

        setValue(newValue);
    };

    const handleDragStart = (e) => {
        document.addEventListener('mousemove', handleDrag);
        document.addEventListener('mouseup', handleDragEnd);
    };

    const handleDragEnd = () => {
        document.removeEventListener('mousemove', handleDrag);
        document.removeEventListener('mouseup', handleDragEnd);
    };

    // Calculate width as a percentage (1 maps to 5%, 20 maps to 100%)
    const percentageWidth = ((value - 1) / 19) * 100;

    return (
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span className='text-[32px] text-[#000]'>{1}</span>
            <div className="slider-container w-full">
                <div
                    ref={sliderRef}
                    className="sliderBg h-[25px] bg-[#ECECEC] relative cursor-pointer"
                    onMouseDown={(e) => handleDrag(e)} // Optional: Slider click to move thumb
                >
                    {/* Slider Range */}
                    <div
                        className="sliderRange absolute bg-[#FFA500] inset-0"
                        style={{ width: `${percentageWidth}%` }}
                    >
                        {/* Range Thumb */}
                        <button
                            className="rangeThumb absolute w-[40px] h-[40px] rounded-full bg-[#FFA500] top-[50%] translate-y-[-50%] cursor-pointer"
                            style={{ left: `${percentageWidth}%` }}
                            onMouseDown={handleDragStart}
                        >
                            <p className="text-[16px] text-[#000]">{value}</p>
                        </button>
                    </div>
                </div>
            </div>
            <span className='text-[32px] text-[#000]'>{20}</span>
        </div>
    );
};

export default RangeSlider;
