import React from "react";
import "./Filter.css";

interface IFilter {
  filterValue: string;
  setFilterValue: Function;
}

/** Alias of React.ChangeEvent<HTMLInputElement> */
interface Input extends React.ChangeEvent<HTMLInputElement> {
}

const Filter = (props: IFilter) => {

  const filterHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.setFilterValue(e.target.value);
  };

  return (
      <input
          className="product-filter"
          type="text"
          placeholder="Search"
          value={props.filterValue}
          onChange={filterHandler}
      />
  );
};

export default Filter;