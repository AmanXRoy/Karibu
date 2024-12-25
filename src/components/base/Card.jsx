import React from "react";
import rating_star from "../../assets/images/rating_star.png"
import yellow_pad from "../../assets/images/yellow_pad.png"
import clock_small_icon from "../../assets/images/clock_small_icon.png"
import ticket from "../../assets/images/ticket.png"
import calendar_small_icon from "../../assets/images/calendar_small_icon.png"
import external_link from "../../assets/images/external_link_icon.png"
import Progress from "./Progress";
import { Link } from "react-router-dom";

function Card({
  timeRemaining,
  ticketsRemaining,
  image,
  progress,
  prizeName,
  rating,
  price,
}) {
  return (
    <Link to={'detail'}>
    <div className="relative text-black border rounded-[8.1%] overflow-hidden productCard cursor-pointer">
      <div className="relative image_section">
        <div className="stats grid grid-cols-2 border-[#75777A] border-b w-full">
          <div className="timeRemaining border-r border-[#75777A] flex items-center gap-2 justify-center p-3">
            <img src={clock_small_icon} alt="" className="h-4" />
            {timeRemaining}
          </div>
          <div className="ticketsRemaining flex items-center gap-2 justify-center p-3">
            <img src={calendar_small_icon} alt="" className="h-4" />
            {ticketsRemaining} Remaining
          </div>
        </div>
        <div className="flex justify-center">
          <img src={image} alt="prize" className="h-[300px]" />
        </div>
      </div>
      <div className="card_content p-4">
       <Progress progress={progress}/>
        <h5 className="max-w-[80%] mx-auto mb-3">{prizeName}</h5>
        <div className="rating flex max-w-[80%] mx-auto mb-3">
          {Array.from({ length: rating }, (_, index) => (
            <span key={index} style={{ color: "gold", fontSize: "24px" }}>
              <img src={rating_star} alt="rating star" height="30" width="30" />
            </span>
          ))}
        </div>
        <div className="price_section max-w-[80%] mx-auto mb-3 flex justify-between">
          <div className="price font-bold text-3xl">
            ${price}
          </div>
          <div className="external">
            <img src={external_link} className="h-10" />
          </div>
        </div>
      </div>
    </div>
    </Link>
  );
}

export default Card;
