import events from "../../../data/left.json";

export const Left = () => {
  events.map((item) => console.log(item.img));

  return (
    <div className="left">
      {events.map((item) => (
        <div className="left-item">
          <div className="left-item-text">
            <ul>
              <li>Test</li>
              <li>Test</li>
              <li>Test</li>
              <li>Test</li>
              <li>Test</li>
            </ul>
          </div>
          <div className="left-item-img">
            <img key={item.key} src={item.img} alt="item" />
          </div>
        </div>
      ))}
    </div>
  );
};
