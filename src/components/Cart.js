import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {

  const cartItems = useSelector(store => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  }

  return (
    <div className="text-center p-4 m-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className="w-6/12 m-auto">
        <button className="rounded-lg p-2 m-2 bg-red-700 text-white" onClick={() => handleClearCart()}>Clear Cart</button>
        <ItemList items={cartItems}/>
      </div>
    </div>
  )
}

export default Cart;