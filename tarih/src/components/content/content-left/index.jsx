import data from "../../../data/kaz.json";

export const Left = () => {
  return (
    <div className="left">
      {data.map((item) => (
        <div key={item.key} className="left-item">
          <div className="left-item-img">
            {item.imgs.map((image) => (
              <img src={image} alt=""/>
            ))
            }
          </div>
          <div className="left-item-events">
            {item.events.map((event) => (
              <p>{event}</p>
            ))
            }
          </div>
          <div className="left-item-innovations">
            {item.innovations.map((inv) => (
              <p>{inv}</p>
            ))
            }
          </div>
          <div className="left-item-famous">
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
