import React from 'react'

import Card from "../base/Card.jsx";
import card1 from "../../assets/images/card1.png"
import card2 from "../../assets/images/card2.png"
import card3 from "../../assets/images/card3.png"
import card4 from "../../assets/images/card4.png"
import card5 from "../../assets/images/card5.png"
import card6 from "../../assets/images/card6.png"
import SortButton from '../base/SortButton';

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
        isBuyMore: true,
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
        isBuyMore: false,

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
        isBuyMore: true,

    },
    {
        id: 4,
        timeRemaining: "05 Days",
        ticketsRemaining: "1550",
        image: card4,
        progress: "27",
        prizeName: "Toyota Double Cabin",
        rating: "5",
        price: "3.00",
        isBuyMore: true,

    },
    {
        id: 5,
        timeRemaining: "05 Days",
        ticketsRemaining: "1550",
        image: card5,
        progress: "80",
        prizeName: "IPhone 15 pro",
        rating: "5",
        price: "7.00",
        isBuyMore: true,

    },
    {
        id: 6,
        timeRemaining: "05 Days",
        ticketsRemaining: "1550",
        image: card6,
        progress: "27",
        prizeName: "Toyota Double Cabin",
        rating: "5",
        price: "3.00",
        isBuyMore: true,

    },
];

const sortOptions = [
    "Sort by popularity",
    "Sort by Price"
]

function CompetitionList() {
    return (
        <div className="px-16 py-8">
            <div className='flex justify-between text-black py-6'>
                <div>
                    <p>Showing 1-7 of 75 results</p>
                </div>
            </div>
            <div className="card_section grid justify-between lg:grid-cols-3 sm:grid-cols-2 gap-24">
                {cardData.map((card, index) => {
                    return (
                        <Card
                            timeRemaining={card.timeRemaining}
                            ticketsRemaining={card.ticketsRemaining}
                            image={card.image}
                            progress={card.progress}
                            prizeName={card.prizeName}
                            rating={card.rating}
                            price={card.price}
                            key={index + card.id}
                            isBuyMore={card.isBuyMore}
                        />
                    );
                })}
            </div>
        </div>
    )
}

export default CompetitionList