import React, { useState } from "react";

function Filter({ sortTable }) {
  const [type, setType] = useState("");
  const [condition, setCondition] = useState("");
  const [value, setValue] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    sortTable(type, condition, value);
  };

  const selectSortingColumn = (e) => {
    setType(e.target.value);
  };

  const selectSortingCondition = (e) => {
    setCondition(e.target.value);
  };

  const getUserValue = (e) => {
    setValue(e.target.value);
  };

  return (
    <form onSubmit={submitForm}>
      {/* Choose the column to sort */}
      <select
        name="type"
        id="type-select"
        onChange={selectSortingColumn}
        required
      >
        <option value="">--Пожалуйста выберите опцию--</option>
        <option value="name">Название</option>
        <option value="population">Количество</option>
        <option value="distance">Расстояние</option>
      </select>
      {/* Choose on which condition to sort */}
      <select
        name="condition"
        id="condition-select"
        onChange={selectSortingCondition}
        required
      >
        <option value="">--Пожалуйста выберите опцию--</option>
        <option value="equal">Равно</option>
        <option value="contain">Содержит</option>
        <option value="bigger">Больше</option>
        <option value="smaller">Меньше</option>
      </select>
      {/* Get the value to compare from */}
      <input
        type="text"
        placeholder="Input the value"
        id="condition-input"
        onChange={getUserValue}
        required
      />
      <button type="submit">Sort</button>
    </form>
  );
}

export default Filter;
