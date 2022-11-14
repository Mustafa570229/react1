import React from "react";

export default function App() {
  const [variable, changeFun] = React.useState(true);
  function toggle() {
    changeFun((prev) => !prev);
  }

  return (
    <div
      style={{
        fontSize: "40px",
        textAlign: "center",

        cursor: "pointer",
      }}
      onClick={toggle}
    >
      {variable ? (
        <i class="fa-regular fa-star"></i>
      ) : (
        <i className="fa-solid fa-star" style={{ color: "yellowgreen" }}></i>
      )}
    </div>
  );
}
