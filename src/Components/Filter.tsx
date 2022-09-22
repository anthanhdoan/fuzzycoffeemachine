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

  const filterHandler = (e: Input) => {
    props.setFilterValue(e.target.value);
  };

  return (
      <div style={{width: "100%", margin: "20px 0"}}>
        <input
            className="product-filter"
            type="text"
            placeholder="Search"
            value={props.filterValue}
            onChange={filterHandler}
        />
      </div>
  );
};

export default Filter;