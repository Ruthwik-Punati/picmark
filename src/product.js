import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { add } from "./store.js/cartSlice";
import { getProducts } from "./store.js/productsSlice";
function Product() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.data);
  useEffect(() => {
    // fetch("https://fakestoreapi.com/products")
    //   .then((res) => res.json())
    //   .then((res) => getProducts(res));
    dispatch(getProducts());
  }, []);
  console.log(products);

  const addToCart = function (product) {
    dispatch(add(product));
  };
  const cards = products.map((p) => (
    <div key={p.id} className="col-md-3" style={{ marginBottom: "18px" }}>
      <Card className="h-100" style={{ width: "18rem" }}>
        <div className="text-center">
          <Card.Img
            variant="top"
            src={p.image}
            style={{ height: "130px", width: "100px" }}
          />

          <Card.Body>
            <Card.Title>{p.title}</Card.Title>
            <Card.Text>INR: {p.price}</Card.Text>
          </Card.Body>
          <Card.Footer style={{ backgroundColor: "white" }}>
            <Button onClick={() => addToCart(p)} variant="primary">
              Add to Cart
            </Button>
          </Card.Footer>
        </div>
      </Card>
    </div>
  ));

  return <div className="row">{cards}</div>;
}
export default Product;
