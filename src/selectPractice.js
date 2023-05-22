import { useState, memo } from "react";
import { info } from "./values";

function SelectCountry() {
  const [country, setCountry] = useState(Object.keys(info.countries)[0]);

  return (
    <>
      <select onChange={(e) => setCountry(e.target.value)} value={country}>
        {Object.keys(info.countries).map((e, i) => (
          <option key={i}>{e}</option>
        ))}
      </select>
      <select>
        {info.countries[country].cities.map((e, i) => (
          <option key={i}>{e}</option>
        ))}
      </select>
    </>
  );
}

export default memo(SelectCountry);
