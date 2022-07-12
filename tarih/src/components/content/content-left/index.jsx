import data from "../../../data/kaz.json";

export const Left = () => {
  return (
    <div className="left">
      {data.map((item) => (
        <div key={item.key} className="left-item">
          <div className="left-item-text">
            <div className="left-item-events">
              <h1>События:</h1>
              {item.events.map((event) => (
                <li>{event}</li>
              ))}
            </div>
            <div className="left-item-innovations">
              <h1>Инновации:</h1>
              {item.innovations.map((inv) => (
                <li>{inv}</li>
              ))}
            </div>
            <div className="left-item-famous">
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
