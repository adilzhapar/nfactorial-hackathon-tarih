import data from "../../../data/world.json";

export const Right = () => {
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
            <div className="right-item-events">
              <h1>События:</h1>
              {item.events.map((event) => (
                <li>{event}</li>
              ))}
            </div>
            <div className="right-item-innovations">
              <h1>Инновации:</h1>
              {item.innovations.map((inv) => (
                <li>{inv}</li>
              ))}
            </div>
            <div className="right-item-famous">
              <h1>Известные люди:</h1>
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
