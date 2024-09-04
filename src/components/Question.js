import React, { useState } from "react";
import plus from "../assets/plus.svg";
import minus from "../assets/minus.svg";
import styled from "styled-components";

function Question({ title, description }) {
  const [toggle, setToggle] = useState(false);

  const btnToggler = () => {
    setToggle(!toggle);
  };

  return (
    <div
      className={`questionItem ${toggle ? "questionToggled" : ""}`}
      onClick={btnToggler}
    >
      <div className="q-con overflow-y-hidden ">
        <div className="toggle-title">
          <h6>{title}</h6>
          <button onClick={btnToggler}>
            {toggle ? (
              <img
                loading="lazy"
                src={minus}
                alt="minus"
                className={`transition-transform ${toggle ? "rotate-180" : ""}`}
              />
            ) : (
              <img loading="lazy" src={plus} alt="plus" />
            )}
          </button>
        </div>
        {toggle && <p>{description}</p>}
      </div>
    </div>
  );
}

export default Question;
