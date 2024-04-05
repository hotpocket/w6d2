import React, { useState } from "react";

type Props = {
  name: string;
  url: string;
  setInfo: any;
};

export const Pokemon = ({ name, url, setInfo }: Props) => {
  const fetchInfo = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setInfo(data));
  };
  return <button onClick={fetchInfo}>{name}</button>;
};

export default Pokemon;
