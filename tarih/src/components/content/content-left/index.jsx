import events from "../../../data/left.json";


export const Left = () => {
  events.map((item) => (
    console.log(item.img)
  ))
  
  return <div>
    {
      events.map((item) => (
        <img key={item.key} src={item.img} alt="item" />
      ))

    }
  </div>;
};
