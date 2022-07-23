import React from "react";
import cl from "./Table.module.css";

function Table({ currentPageData }) {
  return (
    <div className={cl.container}>
      <table className={cl.table}>
        <thead>
          <tr className={cl.tableHeader}>
            <th className={cl.headerItem}>Дата</th>
            <th className={cl.headerItem}>Название</th>
            <th className={cl.headerItem}>Количество</th>
            <th className={cl.headerItem}>Расстояние</th>
          </tr>
        </thead>
        <tbody>
          {currentPageData.map((user, i) => (
            <tr className={cl.tableRow} key={i}>
              <td className={cl.tableData}>{user.founding_date}</td>
              <td className={cl.tableData}>{user.city_name}</td>
              <td className={cl.tableData}>{user.population}</td>
              <td className={cl.tableData}>{user.distance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
