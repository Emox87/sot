import React, { useState, useEffect } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from "./components/Select";

import axios from "axios";

import "./App.css";

import Input from "./components/Input";
import Button from "./components/Button";
import DispatcherList from "./components/DispatcherList";
import LocationsList from "./components/LocationsList";

function App() {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [dispatcher, setDispatcher] = useState("Емил");
  const [location, setLocation] = useState("Монтана");

  const handleSubmit = (event) => {
    event.preventDefault();
    const objectData = {
      objectID: event.target[0].value.trim(),
      objectName: event.target[1].value.trim(),
      timestamp: startDate,
      dispatcher,
    };
    console.log(objectData);
    axios
      .post("http://localhost:5000/signals", objectData)
      .then((res) => console.log(res));
  };

  const idChangeHandler = (event) => {
    setId(event.target.value);
  };

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };

  const dispatcherChangeHandler = (event) => {
    setDispatcher(event.target.value);
  };

  const locationChangeHandler = (event) => {
    console.log(event.target.value);
  };

  console.log("App rendering");
  return (
    <form method="POST" onSubmit={handleSubmit}>
      <Input
        className="objectID"
        placeholder="ObjectID"
        name="objectID"
        id="objectID"
        required
        value={id}
        onChange={idChangeHandler}
      />
      <Input
        className="objectName"
        placeholder="objectName"
        type="text"
        name="objectName"
        id="objectName"
        required
        value={name}
        onChange={nameChangeHandler}
      />
      <DatePicker
        showIcon
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        showTimeSelect
        dateFormat="dd/MM/YYYY h:mm aa"
        showTimeInput
      />
      <LocationsList onSelect={locationChangeHandler} />
      <DispatcherList onSelect={dispatcherChangeHandler} />
      <Button type="submit">ADD</Button>
    </form>
  );
}

export default App;
