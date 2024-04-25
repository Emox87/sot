import React, { useEffect, useState } from "react";

import axios from "axios";
import Select from "./Select";
import SelectOption from "./SelectOption";

const DispatcherList = ({ onSelect }) => {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/dispatchers").then((res) => {
      setOptions(res.data);
    });
  }, []);

  return (
    <Select id="dispatcher" onChange={onSelect}>
      {options.map((dispatcher) => (
        <SelectOption
          value={dispatcher._id}
          key={dispatcher._id}
          tag={dispatcher._id}
        />
      ))}
    </Select>
  );
};

export default DispatcherList;
