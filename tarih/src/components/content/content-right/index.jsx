import { useEffect, useState } from "react";
import data from "../../../data/world.json";

export const Right = ({ year }) => {
  const [paper, setPaper] = useState(false);

  useEffect(() => {
    if (year >= 1900) {
      setPaper(true);
    }
    if (year <= 1900) {
      setPaper(false);
    }
  });

  return (
    <div className="right">
      {data.map((item) => (
        <div key={item.key} className="right-item">
          <div className="right-item-img">
            {item.imgs.map((image) => (
              <img src={image} alt="" />
            ))}
          </div>
          <div className="right-item-text">
            <div className={paper ? "right-item-event paper" : "right-item-events"}>
              <h2>События:</h2>
              {item.events.map((event) => (
                <li>{event}</li>
              ))}
            </div>
            <div className={paper ? "right-item-event paper" : "right-item-events"}>
              <h2>Инновации:</h2>
              {item.innovations.map((inv) => (
                <li>{inv}</li>
              ))}
            </div>
            <div className={paper ? "right-item-event paper" : "right-item-events"}>
              <h2>Известные люди:</h2>
              {item.famous.map((fms) => (
                <li>{fms}</li>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
