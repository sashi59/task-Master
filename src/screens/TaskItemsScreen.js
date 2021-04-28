import React, { useState ,useEffect} from "react";
import TaskItem from "../components/TaskItem";
import "../styles/TaskItemsScreen.css";
// Step -- 7
import { connect } from "react-redux";



function TaskItemsScreen({ cart }) {

  const [totalDuration, setTotalDuration,] = useState(0);
  const [totalItems, setTotalItems] = useState(0);


  useEffect(() => {
    let items = 0;
    let deadline = 0;

    cart.forEach((item) => {
      items += item.qty;
      deadline += item.qty * item.deadline;
    });

    setTotalItems(items);
    setTotalDuration(deadline);
  }, [cart, totalDuration, totalItems, setTotalDuration, setTotalItems]);


  return (
    <div className="cart">
      <div className="cart__items">
        {cart.map((item) => (
          <TaskItem key={item._id} itemData ={item} />
        ))}
      </div>
      <div className="cart__summary">
        <h4 className="summary__title">Task Summary</h4>
        <div className="summary__price">
          <span>Total Tasks: {totalItems}</span>
          <span>Deadline: {totalDuration} days</span>
        </div>
        <button className="summary__checkoutBtn">Proceed To Checkout</button>
      </div>
    </div>
  );
}



const mapStateToProps = (state) => {
  return {
    cart: state.taskShop.cart,
  };
};

export default connect(mapStateToProps)(TaskItemsScreen);
