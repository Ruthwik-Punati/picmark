import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { remove } from "./store.js/cartSlice";
function Cart() {
  const cartProducts = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const removeFromCart = function (id) {
    dispatch(remove(id));
  };
  return cartProducts.map((p) => {
    return (
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
            <Card.Footer style={{ backgroundColor: "white " }}>
              <Button
                style={{ backgroundColor: "red" }}
                onClick={() => removeFromCart(p.id)}
                variant="primary"
              >
                Remove
              </Button>
            </Card.Footer>
          </div>
        </Card>
      </div>
    );
  });
}

export default Cart;
