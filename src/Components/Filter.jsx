import React, { useState } from "react";
import "../styles/Filter.css";
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
      <div className="control-group">
        <div className="select">
          <select
            name="type"
            id="type-select"
            onChange={selectSortingColumn}
            required
          >
            <option value="">Пожалуйста выберите опцию</option>
            <option value="name">Название</option>
            <option value="population">Количество</option>
            <option value="distance">Расстояние</option>
          </select>
          <div className="select__arrow"></div>
        </div>
        {/* Choose on which condition to sort */}
        <div className="select">
          <select
            name="condition"
            id="condition-select"
            onChange={selectSortingCondition}
            required
          >
            <option value="">Пожалуйста выберите опцию</option>
            <option value="equal">Равно</option>
            <option value="contain">Содержит</option>
            <option value="bigger">Больше</option>
            <option value="smaller">Меньше</option>
          </select>
          <div className="select__arrow"></div>
        </div>

        {/* Get the value to compare from */}
        <input
          type="text"
          placeholder="Введите значение..."
          id="condition-input"
          onChange={getUserValue}
          required
        />
        <button id="submitBtn" type="submit">Сортировать</button>
      </div>
    </form>
  );
}

export default Filter;
