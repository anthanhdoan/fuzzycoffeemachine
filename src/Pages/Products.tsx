import React, { useEffect, useMemo, useState } from "react";
import ProductCard from "../Components/ProductCard";
import Footer from "../Components/Footer";
import Filter from "../Components/Filter";
import productsData from "../Mockdata/ProductsData";
import "./Products.css";

const Products = () => {
  const [filterValue, setFilterValue] = useState("");

  const productCards = useMemo(() => {
    return productsData
      .filter((el) => el.name.toLowerCase().includes(filterValue.toLowerCase()))
      .map((item) => {
        return (
          <ProductCard
            productId={item.id}
            description={item.description}
            name={item.name}
            price={item.price}
            currency={item.currency}
            images={item.images}
          />
        );
      });
  }, [filterValue]);

  return (
    <div className="products">
      <Filter filterValue={filterValue} setFilterValue={setFilterValue} />
      {productCards}
      <Footer />
    </div>
  );
};

export default Products;
