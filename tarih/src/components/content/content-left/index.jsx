import { useEffect, useState } from "react";
import data from "../../../data/kaz.json";

export const Left = ({ year }) => {
  const [paper, setPaper] = useState(false);

  useEffect(() => {
    if (year >= 1850) {
      setPaper(true);
    }
    if (year <= 1850) {
      setPaper(false);
    }
  });

  return (
    <div className="left">
      {data.map((item) => (
        <div key={item.key} className="left-item">
          <div className="left-item-text">
            <div
              className={paper ? "left-item-event paper" : "left-item-events"}
            >
              <h1 id="event">События:</h1>
              {item.events.map((event) => (
                <li>{event}</li>
              ))}
            </div>
            <div
              className={paper ? "left-item-event paper" : "left-item-events"}
            >
              <h1>Инновации:</h1>
              {item.innovations.map((inv) => (
                <li>{inv}</li>
              ))}
            </div>
            <div
              className={paper ? "left-item-event paper" : "left-item-events"}
            >
              <h1>Известные люди:</h1>
              {item.famous.map((fms) => (
                <li>{fms}</li>
              ))}
            </div>
          </div>
          <div className="left-item-img">
            {item.imgs.map((image) => (
              <img src={image} alt="" />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
