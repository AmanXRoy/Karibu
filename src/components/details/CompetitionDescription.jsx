import React from 'react';
import Card from '../base/Card';
import card1 from '../../assets/images/card1.png';
import card2 from '../../assets/images/card2.png';
import card3 from '../../assets/images/card3.png';
import doubleCabin from '../../assets/images/ToyataDoubleCabin.png';
import chevronDown from '../../assets/images/chevronDown.svg';
import Progress from '../base/Progress';
import { Link } from 'react-router-dom';
import StarRating from '../base/StarRating';

function CompetitionDescription() {

  const cardData = [
    {
      id: 1,
      timeRemaining: "05 Days",
      ticketsRemaining: "1550",
      image: card1,
      progress: "50",
      prizeName: "IPhone 13",
      rating: "5",
      price: "8.00",
    },
    {
      id: 2,
      timeRemaining: "05 Days",
      ticketsRemaining: "1550",
      image: card2,
      progress: "100",
      prizeName: "Samsung Galaxy Z Fold",
      rating: "5",
      price: "4.00",
    },
    {
      id: 3,
      timeRemaining: "05 Days",
      ticketsRemaining: "1550",
      image: card3,
      progress: "60",
      prizeName: "TVS Apache 125cc",
      rating: "5",
      price: "5.00",
    },
  ];
  return (
    <div>
      <h2 className='text-5xl font-semibold text-black text-center py-8 px-16'>
        Make it a reality by joining our Raffle tickets
        &nbsp;<span className='text-[#FF650E]'>today!</span>
      </h2>
      <div className="description flex gap-14 px-[100px] ">
        <div className="productWrapper flex-1">
          <div className="productImage bg-[#ffa50080]">
            <img src={doubleCabin} />
            <div className="productBanner bg-[#FFA500] px-[42px] py-[58px] flex items-center justify-between ">
              <p className='text-3xl font-semibold text-white'>Toyota Double Cabin
              <StarRating rating={[1,2,3,4,5]}/>
              </p>
              <span className='text-center'>$ 8.00 <br /><span className='text-2xl text-center'>PER ENTRY</span></span>
            </div>
          </div>
        </div>
        <div className="productDetails flex-1 text-secondary-light border-[#C1B4B4] border-[1px] border-solid px-3 relative">
          <div className="descriptionTag bg-[#FF650E] w-fit mb-10 py-5 px-[80px]">
            <p className='text-[36px] text-[#fff]'>Description</p>
          </div>
          <p className='text-[26px] text-[#3F3836] font-semibold'>Landcruiser Toyota Double Cabin</p>
          <p className='text-[24px] text-[#717171] font-medium my-[30px]'>The Landcruiser Toyota Double Cabin is renowned for its [key features: sleek design, powerful engine, advanced technology, luxurious interior]. Whether you're commuting to work or planning a weekend getaway, this car offers unmatched style, comfort, and performance.</p>
          <p className='text-[20px] font-medium text-[#717171]'><span className='font-semibold text-[#000]'>1.Engine Power: </span>[Highlight horsepower, engine type, etc.]</p>
          <p className='text-[20px] font-medium text-[#717171]'><span className='font-semibold text-[#000]' >1.Engine Power: </span>[Highlight horsepower, engine type, etc.]</p>
          <p className='text-[20px] font-medium text-[#717171]'><span className='font-semibold text-[#000]'>1.Engine Power: </span>[Highlight horsepower, engine type, etc.]</p>
          <p className='text-[20px] font-medium text-[#717171]'><span className='font-semibold text-[#000]'>1.Engine Power: </span>[Highlight horsepower, engine type, etc.]</p>
          <div className="progressWrapper mt-[50px]">
            <Progress progress={80} />
          </div>
          <Link to={'/lotteryDetails'}>
            <button className="buybtn bg-[#FF650E] py-[15px] px-[35px] rounded-[8px] absolute right-3 bottom-3">
              <p className='text-[30px] text-[#fff] flex items-center'>Buy Ticket
                <img src={chevronDown} className='ms-[10px]' />
              </p>
            </button>
          </Link>
        </div>
      </div>
      <div className='px-[100px]'>
        <h3 className='text-5xl font-semibold text-black py-8'>Related Competitions</h3>
        <div className="card_section grid justify-between lg:grid-cols-3 sm:grid-cols-2 gap-24">
          {cardData.map((card, index) => {
            return (
              <>
                <Card
                  timeRemaining={card.timeRemaining}
                  ticketsRemaining={card.ticketsRemaining}
                  image={card.image}
                  progress={card.progress}
                  prizeName={card.prizeName}
                  rating={card.rating}
                  price={card.price}
                  key={index + card.id}
                />
              </>
            );
          })}
        </div>
      </div>
    </div>
  )
}

export default CompetitionDescription