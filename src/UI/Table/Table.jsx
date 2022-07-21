import React from "react";
import "./Table.module.css";

function Table({ currentPageData }) {
  return (
    <table>
      <tr>
        <th>Дата</th>
        <th>Название</th>
        <th>Количество</th>
        <th>Расстояние</th>
      </tr>
      {currentPageData.map((user, i) => (
        <tr key={i}>
          <td>{user.founding_date}</td>
          <td>{user.name}</td>
          <td>{user.population}</td>
          <td>{user.distance}</td>
        </tr>
      ))}
    </table>
  );
}

export default Table;
