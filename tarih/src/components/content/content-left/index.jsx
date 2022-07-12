import events from "../../../data/left.json";

export const Left = () => {
  // events.map((item) => console.log(item.img));
  

  return (
    <div className="left">
      {events.map((item) => (
        <div className="left-item">
          <div className="left-item-text">
            {
              item.text.map((txt) => (
                <p>{txt}</p>
              ))
            }
          </div>
          <div className="left-item-img">
            <img key={item.key} src={item.img} alt="item" />
          </div>
        </div>
      ))}
    </div>
  );
};
