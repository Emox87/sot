import React, { useEffect, useState } from "react";

import axios from "axios";
import Select from "./Select";
import SelectOption from "./SelectOption";

const LocationsList = ({ onSelect }) => {
  const [options, setOptions] = useState(["Монтана"]);
  const [patrol, setPatrol] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/locations").then((res) => {
      setOptions(res.data);
    });
  }, []);

  return (
    <Select id="location" onChange={onSelect}>
      {options.map((location) => (
        <SelectOption
          value={location._id}
          key={location._id}
          tag={location._id}
        />
      ))}
    </Select>
  );
};

export default LocationsList;
