import React from "react";
import TaskItem from "../components/TaskItem";
import "../styles/TaskItemsScreen.css"

function TaskItemsScreen() {
  return (
    <div className="cart">
      <div className="cart__items">

        <TaskItem/>
     
      </div>
      <div className="cart__summary">
        <h4 className="summary__title">Task Summary</h4>
        <div className="summary__price">
          <span>TOTAL: (4 items)</span>
          <span>$ 50</span>
        </div>
        <button className="summary__checkoutBtn">Proceed To Checkout</button>
      </div>
    </div>
  );
}

export default TaskItemsScreen;
