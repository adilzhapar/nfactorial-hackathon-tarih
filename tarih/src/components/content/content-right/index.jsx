import data from "../../../data/world.json";

export const Right = () => {
  return (
    <div className="right">
      {data.map((item) => (
        <div key={item.key} className="right-item">
          <div className="right-item-img">
            {item.imgs.map((image) => (
              <img src={image} alt=""/>
            ))
            }
          </div>
          <div className="right-item-events">
            {item.events.map((event) => (
              <p>{event}</p>
            ))
            }
          </div>
          <div className="right-item-innovations">
            {item.innovations.map((inv) => (
              <p>{inv}</p>
            ))
            }
          </div>
          <div className="right-item-famous">
            {item.famous.map((fms) => (
              <p>{fms}</p>
            ))
            }
          </div>
        </div>
      ))
      }
    </div>

  );
};
