import "./styles/App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Pagination from "./UI/Pagination/Pagination";
import Table from "./UI/Table/Table";
import Filter from "./Components/Filter";
import MyLoader from "./UI/Loader/MyLoader";

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(5);

  // calculate indeces to slice sorted array for pagination
  const indexOfLastItem = currentPage * postPerPage;
  const indexOfFirstItem = indexOfLastItem - postPerPage;

  const [cityData, setCityData] = useState([]);
  const [sortedData, setSortedData] = useState(cityData);

  const [isLoading, setIsLoading] = useState(true); // the state to control loader

  // re-render everytime the currentPage have been updated
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber); // Updating current page
  };

  const sortTable = (type, condition, value) => {
    setCurrentPage(1);
    if (type === "name") {
      switch (condition) {
        case "equal":
          console.log("equal");
          setSortedData(cityData.filter((item) => item.city_name === value));
          break;
        case "contain":
          console.log("contain");
          setSortedData(
            cityData.filter((item) =>
              item.city_name.toLowerCase().includes(value.toLowerCase())
            )
          );
          break;
        case "bigger":
          console.log("bigger");
          setSortedData(cityData.filter((item) => item.city_name > value));
          break;
        case "smaller":
          console.log("smaller");
          setSortedData(cityData.filter((item) => item.city_name < value));
          break;
        default:
          console.log("no such condition");
          break;
      }
    } else if (type === "population") {
      switch (condition) {
        case "equal":
          console.log("equal");
          setSortedData(cityData.filter((item) => item.population == value));
          break;
        case "contain":
          console.log("contain");
          setSortedData(
            cityData.filter((item) =>
              item.population.toString().includes(value)
            )
          );
          break;
        case "bigger":
          console.log("bigger");
          setSortedData(cityData.filter((item) => item.population > +value));
          break;
        case "smaller":
          console.log("smaller");
          setSortedData(cityData.filter((item) => item.population < +value));
          break;
        default:
          console.log("no such condition");
          break;
      }
    } else {
      switch (condition) {
        case "equal":
          console.log("equal");
          setSortedData(cityData.filter((item) => item.distance == value));
          break;
        case "contain":
          console.log("contain");
          setSortedData(
            cityData.filter((item) => item.distance.toString().includes(value))
          );
          break;
        case "bigger":
          console.log("bigger");
          setSortedData(cityData.filter((item) => item.distance > +value));
          break;
        case "smaller":
          console.log("smaller");
          setSortedData(cityData.filter((item) => item.distance < +value));
          break;
        default:
          console.log("no such condition");
          break;
      }
    }
  };

  useEffect(() => {
    axios
      .get("https://city-list21.herokuapp.com/api/cities")
      .then(function (response) {
        // handle success
        setCityData(response.data);
        setSortedData(response.data);
        setIsLoading(false);
        console.log(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, []);

  return (
    <div className="App">
      <h1>Список крупных городов России</h1>
      <Filter sortTable={sortTable} />
      {isLoading ? (
        <MyLoader />
      ) : (
        <Table
          currentPageData={sortedData.slice(indexOfFirstItem, indexOfLastItem)}
        />
      )}

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
