import Card from "./components/Card";
import { Data } from "./Data";

export default function App() {
  const dataShow = Data.map((el,index) => (
    <Card 
      key={index}
      
      img={el.img}
      title={el.title}
      desc={el.desc}
      price={el.price}
      rate={el.rate}
    />
  ));

  return <div style={{display:"flex",justifyContent:"space-around",textAlign:"center",flexWrap:"wrap"}}>{dataShow}</div>
  ;
}
