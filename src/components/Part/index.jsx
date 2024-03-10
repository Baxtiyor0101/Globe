import React from "react";
import "./style.css";
function Part({ data: { id, img, title, info, position, percent, date } }) {
  // console.log(img);
  return (
    <div className="wrapper">
      <div className="top">
        <img src={img} alt="" />
        <div className="info">
          <h3 className="title">{title}</h3>
          <p className="info">{info}</p>
        </div>
      </div>
      <div className="bottom">
        {Object.entries(position).length === 3 ? (
          <div>
            <img src={position.tezer} alt="" />
            <img src={position.trx} alt="" />
            <img src={position.usdt} alt="" />
          </div>
        ) : Object.entries(position).length === 1 || date ? (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h2 className="percent">{percent}</h2>
            {Object.entries(position).length ? (
              <img style={{ width: "151.56px" }} src={position.graph} alt="" />
            ) : (
              <p className="hour">{date}</p>
            )}
          </div>
        ) : (
          <p style={{ color: position?.color ? position.color : "#fff" }}>
            {position.text}
          </p>
        )}
      </div>
    </div>
  );
}

export default Part;
// "d"?"":
