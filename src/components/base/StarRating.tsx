import React from 'react';
import starRating from '../../assets/images/rating_star.png';


const StarRating = (props:{rating:Array<number>}) => {
    console.log
    return (
        <>
            <div className="starRating flex">
                {props.rating && props.rating.length && props.rating.map((rating)=><img src={starRating} alt={'star'+ rating}/>)}
            </div>
        </>
    )
}

export default StarRating;