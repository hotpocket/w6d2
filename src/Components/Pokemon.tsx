import { Pok } from "../App";

type Props = {
  url: string;
  setInfo: React.Dispatch<React.SetStateAction<Pok | null>>;
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
