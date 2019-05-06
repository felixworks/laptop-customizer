import React from "react";
import { SummaryList } from "./SummaryList";
import { SummaryTotal } from "./SummaryTotal";

function Summary(props) {
  return (
    <section className="main__summary">
      <h3>NEW GREENLEAF 2018</h3>
      <SummaryList selected={props.selected} />
      <SummaryTotal selected={props.selected} />
    </section>
  );
}

export default Summary;
