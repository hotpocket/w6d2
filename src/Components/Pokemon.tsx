import React, { useState } from "react";

type Props = {
  url: string;
  setInfo: any;
};

export const Pokemon = ({ url, setInfo }: Props) => {
  const fetchInfo = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setInfo(data));
  };
  // return <button onClick={fetchInfo}>{name}</button>;
  return (
    <a
      onMouseEnter={fetchInfo}
      class="pokemon-"
      style={{
        display: "inline-block",
        letterSpacing: "-1px",
      }}
    >
      |
    </a>
  );
};

export default Pokemon;
