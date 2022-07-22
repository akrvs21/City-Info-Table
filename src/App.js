import "./App.css";
import { useState } from "react";
import Pagination from "./UI/Pagination/Pagination";
import Table from "./UI/Table/Table";
import { city_data } from "./data";
import Filter from "./Components/Filter";

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(5);

  const indexOfLastItem = currentPage * postPerPage;
  const indexOfFirstItem = indexOfLastItem - postPerPage;
  // const currentPageData = city_data.slice(indexOfFirstItem, indexOfLastItem); // render only 5 items on each page
  const [sortedData, setSortedData] = useState(city_data);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber); // Updating current page
  };

  const sortTable = (type, condition, value) => {
    if (type === "name") {
      switch (condition) {
        case "equal":
          console.log("equal");
          setSortedData(city_data.filter((item) => item.name === value));
          break;
        case "contain":
          console.log("contain");
          setSortedData(
            city_data.filter((item) =>
              item.name.toLowerCase().includes(value.toLowerCase())
            )
          );
          break;
        case "bigger":
          console.log("bigger");
          setSortedData(city_data.filter((item) => item.name > value));
          break;
        case "smaller":
          console.log("smaller");
          console.log(city_data[2].name < value);
          setSortedData(city_data.filter((item) => item.name < value));
          break;
        default:
          console.log("no such condition");
          break;
      }
    } else if (type === "population") {
      switch (condition) {
        case "equal":
          console.log("equal");
          setSortedData(
            city_data.filter((item) => item.population == value)
            // city_data.sort((a, b) =>
            //   a.name > b.name ? 1 : b.name > a.name ? -1 : 0
            // )
          );
          break;
        case "contain":
          console.log("contain");
          setSortedData(
            city_data.filter((item) =>
              item.population.toString().includes(value)
            )
          );
          break;
        case "bigger":
          console.log("bigger");
          setSortedData(city_data.filter((item) => item.population > +value));
          break;
        case "smaller":
          console.log("smaller");
          setSortedData(city_data.filter((item) => item.population < +value));
          break;
        default:
          console.log("no such condition");
          break;
      }
    } else {
      switch (condition) {
        case "equal":
          console.log("equal");
          console.log(typeof value);
          console.log(city_data[0]);
          setSortedData(
            city_data.filter((item) => item.distance == value)
            // city_data.sort((a, b) =>
            //   a.name > b.name ? 1 : b.name > a.name ? -1 : 0
            // )
          );
          break;
        case "contain":
          console.log("contain");
          setSortedData(
            city_data.filter((item) => item.distance.toString().includes(value))
          );
          break;
        case "bigger":
          console.log("bigger");
          setSortedData(city_data.filter((item) => item.distance > +value));
          break;
        case "smaller":
          console.log("smaller");
          setSortedData(city_data.filter((item) => item.distance < +value));
          break;
        default:
          console.log("no such condition");
          break;
      }
    }
  };

  return (
    // re-render everytime the currentPage have been updated
    <div className="App">
      <h1>List of major Russian cities</h1>
      <Filter sortTable={sortTable} />
      <Table
        currentPageData={sortedData.slice(indexOfFirstItem, indexOfLastItem)}
      />
      <Pagination
        postPerPage={postPerPage}
        totalPost={sortedData.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
}

export default App;
