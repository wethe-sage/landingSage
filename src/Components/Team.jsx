import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import TeamCard from './TeamCard';
import naveen from "./Asset/naveen.png"
import chandu from './Asset/Chandu.jpg'
import vihari from "./Asset/vihari.png"
import rohit from './Asset/Rohit.jpg'

const Team = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const dataTeam = [
    {
      id: 1,
      image: naveen,
      name: 'Naveen Anand',
      url: 'https://www.linkedin.com/in/naveen-anand-733022283/?trk=contact-info',
      designation: 'Co-Founder',
      exp: ' Entrepreneur | Trader',
    },
    {
      id: 2,
      image: vihari,
      name: 'Vihari',
      url: 'https://www.linkedin.com/in/vihari09/?trk=contact-info',
      designation: 'Co-Founder',
      exp: ' Entrepreneur | Trader',
    },
    {
      id: 3,
      image: chandu,
      name: 'Chandra Sekhar',
      url: 'https://www.linkedin.com/in/rahul-vihari-9b0b0a1b4/https://www.linkedin.com/in/k-s-chandra-sekhar-lanka-682963bb/',
      designation: 'CTO',
      exp: ' Entrepreneur | Software Engineer',
    },
    {
      id: 4,
      image: rohit,
      name: 'Rohith Thota',
      url: 'https://www.linkedin.com/in/rohith-thota-140b38224/?trk=contact-info',
      designation: 'CEO',
      exp: ' Entrepreneur | Trader',
    },
  ];

  const data = dataTeam.map((item) => (
    <TeamCard
      key={item.id}
      image={item.image}
      name={item.name}
      url={item.url}
      designation={item.designation}
      exp={item.exp}
    />
  ));

  return (
    <div className='' >
      <Carousel responsive={responsive}>{data}</Carousel>
    </div>
  );
};

export default Team;
