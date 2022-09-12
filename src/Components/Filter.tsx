import React, { useState } from "react";
import "./Filter.css";

interface IFilter {
  filterValue: string;
  setFilterValue: Function;
}

const Filter = (props: IFilter) => {
  // const [filterValue, setFilterValue] = useState("");

  const filterHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.setFilterValue(e.target.value);
  };

  return (
    <div style={{ width: "100%", margin: "20px 0" }}>
      <input
        className="product-filter"
        type="text"
        placeholder="Filter"
        value={props.filterValue}
        onChange={filterHandler}
      />
    </div>
  );
};

export default Filter;
