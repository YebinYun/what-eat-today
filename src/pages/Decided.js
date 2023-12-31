import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { foods } from "../data/Data.js";

const Decided = () => {
  return (
    <main>
      <div className="Container">
        <div className="Outline">
          <div className="Inline">
            <div className="DecidedWrap">
              <Link to="/">
                <div className="BackBtn" />
              </Link>
              <ul className="BtnWrap">
                {foods.map((food) => (
                  <li key={food.id}>
                    <Link to={`/decided-result/${food.section}`} >
                      <Button variant="danger">{food.section}</Button>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Decided;
