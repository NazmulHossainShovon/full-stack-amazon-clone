import React from "react";
import { Col, Row } from "react-bootstrap";
import ProductItem from "../components/ProductItem";
import {
  useGetOnSaleProductsQuery,
  useGetProductsQuery,
} from "../hooks/productHooks";

export default function OnSale() {
  const { data, fetchStatus } = useGetOnSaleProductsQuery();

  return (
    <Row>
      {data?.map((product) => (
        <Col key={product.slug} sm={6} md={4} lg={3}>
          <ProductItem product={product} />
        </Col>
      ))}
    </Row>
  );
}
