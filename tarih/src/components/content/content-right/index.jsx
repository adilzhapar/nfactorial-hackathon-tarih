import events from "../../../data/left.json";

export const Right = () => {
  events.map((item) => console.log(item.img));

  return (
    <div className="right">
      {events.map((item) => (
        <div className="right-item">
          <div className="right-item-img">
            <img key={item.key} src={item.img} alt="item" />
          </div>
        </div>
      ))}
    </div>
  );
};
