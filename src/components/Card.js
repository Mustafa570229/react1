export default function Card(props) {
  return (
    <div style={{ border: "1px #999 solid", padding: "20px" }}>
      <div
        style={{
          backgroundImage: `url(${props.img})`,
          backgroundRepeat: "no-repeat",
          width: "200px",
          height: "200px",
          backgroundSize: "cover",
          backgroundPosition:"center",
          borderRadius:"20px"
        }}
      ></div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "200px",
        }}
      >
        <h1 style={{ color: "red", margin: " auto " }}>{props.title}</h1>
        <h5>{props.rate}</h5>
      </div>

      <p style={{ width: "200px", fontFamily: "Arial" }}>{props.desc}</p>
      <h3>{props.price} /Night</h3>
    </div>
  );
}
