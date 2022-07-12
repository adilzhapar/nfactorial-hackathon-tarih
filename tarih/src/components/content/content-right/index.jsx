import events from "../../../data/left.json";

export const Right = () => {
  return (
    <div className="right">
      {events.map((item) => (
        <div className="right-item">
          <div className="right-item-img">
            <img key={item.key} src={item.img} alt="item" />
          </div>
          <div className="right-item-text">
            {item.text.map((txt) => (
              <ul>
                <li>{txt}</li>
              </ul>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
