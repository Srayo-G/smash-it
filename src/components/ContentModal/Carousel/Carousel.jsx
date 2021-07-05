//jshint esversion: 11
import axios from "axios";
import React, { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { noPicture } from "../../../config/config";
import { img_300 } from "../../../config/config";
import "./Carousel.css";

const handleDragStart = (e) => e.preventDefault();

const Carousel = ({ media_type, id }) => {
  const [credits, setCredits] = useState([]);

  const fetchCredits = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${media_type}/${id}/credits?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );
    setCredits(data.cast);
  };

  const items =
    credits &&
    credits.map((c) => {
      return (
        <div className="carouselItem">
          <img
            alt={c && c.name}
            src={c.profile_path ? `${img_300}/${c.profile_path}` : noPicture}
            onDragStart={handleDragStart}
            className="carouselItem__img"
          />
          <b className="carouselItem__txt">{c.name}</b>
        </div>
      );
    });

  const responsive = {
    0: {
      items: 3,
    },
    512: {
      items: 5,
    },
    1024: {
      items: 7,
    },
  };

  useEffect(() => {
    fetchCredits();
  }, []);

  return (
    <>
      <AliceCarousel
        mouseTracking
        items={items}
        autoPlay
        disableButtonsControls
        disableDotsControls
        responsive={responsive}
      />
    </>
  );
};

export default Carousel;
