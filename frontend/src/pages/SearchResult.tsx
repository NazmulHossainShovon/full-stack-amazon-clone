import React, { useContext, useEffect, useState } from "react";
import { Store } from "../Store";
import { useGetProductsQuery } from "../hooks/productHooks";
import { Product } from "../types/Product";
import { Col, Row } from "react-bootstrap";
import ProductItem from "../components/ProductItem";

export default function SearchResult() {
  const { state } = useContext(Store);
  const { searchQuery } = state;
  const { data } = useGetProductsQuery();
  const [filteredData, setFilteredData] = useState<Product[]>([]);

  useEffect(() => {
    const searchedData = data?.filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredData(searchedData);
  }, [searchQuery]);

  return (
    <Row>
      {filteredData!.map((product) => (
        <Col key={product.slug} sm={6} md={4} lg={3}>
          <ProductItem product={product} />
        </Col>
      ))}
    </Row>
  );
}
