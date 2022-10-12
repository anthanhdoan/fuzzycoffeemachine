import React, {useMemo, useState} from "react";
import ProductCard from "../Components/ProductCard";
import Footer from "../Components/Footer";
import Filter from "../Components/Filter";
import productsData from "../Mockdata/ProductsData";
import "./Products.css";
import {Link} from "react-router-dom";

const Products = () => {
  const [filterValue, setFilterValue] = useState("");

  const productCards = useMemo(() => {
    return productsData
        .filter((el) => el.name.toLowerCase().includes(filterValue.toLowerCase()))
        .map((item, index) => {
          return (
              <Link to={`/products/${item.id}`}
                    style={{textDecoration: "none", color: "#272C28"}} key={index}>
                <ProductCard
                    id={item.id}
                    description={item.description}
                    name={item.name}
                    price={item.price}
                    currency={item.currency}
                    images={item.images}
                    longDescription={item.longDescription}
                />
              </Link>
          );
        });
  }, [filterValue]);

  return (
      <div className="products-wrapper">
        <Filter filterValue={filterValue} setFilterValue={setFilterValue}/>
        <div className="products-container">
          <div className="products">
            {productCards}
          </div>
        </div>
        <Footer/>
      </div>
  );
};

export default Products;
