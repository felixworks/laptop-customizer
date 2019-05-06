import React from "react";

export function Option(props) {
  return (
    <li className="feature__item">
      <div className={props.featureClass} onClick={props.onClick}>
        {props.name}(
        {new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD"
        }).format(props.cost)}
        )
      </div>
    </li>
  );
}
