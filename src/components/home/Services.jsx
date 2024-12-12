import React from "react";
import raider_coutout from '../../assets/images/raider_cutout.png';
import icon1 from '../../assets/images/service-icon-1.png';
import icon2 from '../../assets/images/service-icon-2.png';
import icon3 from '../../assets/images/service-icon-3.png';
import circleGif from '../../assets/images/circle.gif';


const serviceList = [
  {
    icon: icon1,
    heading: "Dream Lineup",
    descripition:
      "Our exclusive raffle limits the number of entries, enhancing your chances of winning",
    alt: 'bike_icon',
  },
  {
    icon: icon2,
    heading: "Transparent Draw Process",
    descripition:
      "Our exclusive raffle limits the number of entries, enhancing your chances of winning",
    alt: 'shield_icon',
  },
  {
    icon: icon3,
    heading: "Secure Ticket Purchasing",
    descripition:
      "Our exclusive raffle limits the number of entries, enhancing your chances of winning",
    alt: 'ticket_icon',
  },
];
function Services() {
  return (
    <div className="flex text-black p-16">
      <div className="raider w-1/2 flex items-center relative">
      <img className="absolute left-0 z-10
        " src={raider_coutout} alt="tvs raider" data-aos="fade-right" data-aos-delay="50" />
        <img className="absolute left-[25%] z-0" src={circleGif} alt="tvs raider" />
      </div>
      <div className="service_info w-1/2">
        <h2 className="text-5xl font-bold leading-tight">
          Explore <span className="text-primary">Our Exclusive</span> <br />
          Lottery Services
        </h2>
        <div className="grid gap-8 my-8">
          {serviceList.map((service, index) => {
            return (
              <>
                <div className="service_card grid grid-cols-[50px_auto] gap-5" key={index + "service list"}>
                  <div className="service_icon rounded-full w-12 h-12 bg-primary grid place-items-center p-2.5">
                    <img src={service.icon} alt={service.alt} width="35" />
                  </div>
                  <div className="service_content">
                    <h4 className="text-xl font-semibold">{service.heading}</h4>
                    <p className="text-muted">
                      {service.descripition.length < 84
                        ? service.descripition
                        : service.descripition.substring(0, 84)}
                      {service.descripition.length > 84 && (
                        <span className="text-success">Read more...</span>
                      )}
                    </p>
                  </div>
                </div>
              </>
            );
          })}
          <div>
            <button className="button button-primary rounded-full px-8 h-12 font-semibold text-sm">
                Buy Ticket
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
