import React, { useState, useEffect } from "react";

const Wsapi = () => {
  const [lists, setLists] = useState([]);
  const [starships,setStarships]=useState([])
  // const [selectedMunfecturer,setSelectedMenufecturer]=useState('')
  // const test =  list.results !==undefined && list.results.length > 0 && list.results

  useEffect(() => {
    const getList = async () => {
      await fetch("https://swapi.dev/api/starships")
        .then((response) => response.json())
        .then((data) => {
          setLists(data.results)
          setStarships(data.results)
        });
    };
    getList();
  }, []);

  const selectHandler = (e) => {
    const newList = starships.filter(
      (list) => list.manufacturer === e.target.value
    );
    setLists(newList)
  };
  return (
    <div>
      <select
        name="starship"
        id="cars"
        form="starship"
        onChange={selectHandler}
      >
        {starships.length &&
          starships.map((list, idx) => {
            return (
              <option value={list.manufacturer} key={idx}>
                {list.manufacturer}
              </option>
            );
          })}
      </select>
      <table style={{ border: "5px solid black" }}>
        <thead>
          <tr>
            <td>name</td>
            <td>model</td><td>manufacturer</td><td> cost_in_credits</td>{" "}
          </tr>
        </thead>
        <tbody>
          {lists.map((list, idx) => {
            return (
              <tr key={idx}>
                <td>{list.name}</td>
                <td>{list.model}</td>
                <td>{list.manufacturer}</td><td>{list.cost_in_credits}</td>{" "}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Wsapi;
