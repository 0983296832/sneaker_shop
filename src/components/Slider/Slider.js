import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import { data } from "../data";
import "./Slider.css";

function Slider() {
  const [people] = useState(data.dataPeople);
  const [index, setIndex] = React.useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <section className="ssection">
      <div className="stitle">
        <h2>
          <span>/</span>FEEDBACK
        </h2>
      </div>
      <div className="ssection-center">
        {people.map((person, personIndex) => {
          const {
            peopleId,
            peopleImage,
            peopleName,
            peopleTitle,
            peopleQuote,
          } = person;

          let position = "nextSlide";
          if (personIndex === index) {
            position = "activeSlide";
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
          ) {
            position = "lastSlide";
          }

          return (
            <article className={`article ${position}`} key={peopleId}>
              <img src={peopleImage} alt={peopleName} className="sperson-img" />
              <h4>{peopleName}</h4>
              <p className="stitle">{peopleTitle}</p>
              <p className="stext">{peopleQuote}</p>
              <FaQuoteRight className="sicon" />
            </article>
          );
        })}
        <button className="sprev" onClick={() => setIndex(index - 1)}>
          <FiChevronLeft />
        </button>
        <button className="snext" onClick={() => setIndex(index + 1)}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}

export default Slider;
