import React, {useMemo, useState} from "react";
import ProductCard from "../Components/ProductCard";
import Footer from "../Components/Footer";
import Filter from "../Components/Filter";
import productsData from "../Mockdata/ProductsData";
import "./Products.css";
import {Link} from "react-router-dom";
import scrollToTop from "../Utility/ScrollToTop";

const Products = () => {
  const [filterValue, setFilterValue] = useState("");

  const productCards = useMemo(() => {
    return productsData
        .filter((el) => el.name.toLowerCase().includes(filterValue.toLowerCase()))
        .map((item, index) => {
          return (
              <Link to={`/products/${item.id}`} onClick={scrollToTop}
                    style={{textDecoration: "none", color: "#272C28"}} key={index}>
                <ProductCard
                    productId={item.id}
                    description={item.description}
                    name={item.name}
                    price={item.price}
                    currency={item.currency}
                    images={item.images}
                />
              </Link>
          );
        });
  }, [filterValue]);

  return (
      <div className="products">
        <Filter filterValue={filterValue} setFilterValue={setFilterValue}/>
        {productCards}
        <Footer/>
      </div>
  );
};

export default Products;
