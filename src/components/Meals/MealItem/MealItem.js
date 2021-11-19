import { useContext } from "react";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../../../store/Cart-context";

const MealItem = (props) => {
  const price = `£${parseFloat(props.price).toFixed(2)}`;

  const cartContext = useContext(CartContext);

  const addToCartHandler = (enteredAmountNumber) => {
    cartContext.addItem({
      id: props.id,
      amount: enteredAmountNumber,
      price: props.price,
      name: props.name,
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm id={props.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
