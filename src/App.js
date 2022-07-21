import "./App.css";
import { useState } from "react";
import Pagination from "./UI/Pagination/Pagination";
import Table from "./UI/Table/Table";
import { city_data } from "./data";

function App() {
  const [postPerPage, setPostPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber); // Updating current page
  };
  const indexOfLastItem = currentPage * postPerPage;
  const indexOfFirstItem = indexOfLastItem - postPerPage;
  const currentPageData = city_data.slice(indexOfFirstItem, indexOfLastItem); // render only 5 items on each page

  return (
    // re-render everytime the currentPage have been updated
    <div className="App">
      <h1>List of major Russian cities</h1>
      <Table currentPageData={currentPageData} />
      <Pagination
        postPerPage={postPerPage}
        totalPost={city_data.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
}

export default App;
