import React, { useState } from "react";
import Connection from "./Connection";
import { data } from "../data";

export default function Connectionlist() {
  const [connectionList] = useState(data.dataConnection);
  return (
    <section className="collection section">
      <div className="collection__container bd-grid">
        {connectionList.map((connection) => {
          return <Connection key={connection.connectionId} {...connection} />;
        })}
      </div>
    </section>
  );
}
