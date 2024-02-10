import React, { forwardRef } from 'react';
import { useState } from "react";
import "./about.css";
import DATA from "../../data";

const About = forwardRef((props, ref) => {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };
  return (
    <div ref={ref} className="about-wrapper">
      {DATA.map((item, i) => (
        <div key={i} className="item-container">
          <div className="item" onClick={() => toggle(i)}>
            <img src={item.image} alt={item.name} />
            <h2>{item.title}</h2>
          </div>
          <div className={selected === i ? "text show" : "text"}>{item.text}</div>
        </div>
      ))}
    </div>
  );
});

export default About;
