import React, { useState, useEffect } from "react";
import TaskItem from "../components/TaskItem";
import "../styles/TaskItemsScreen.css";
// Step -- 7
import { connect } from "react-redux";



function TaskItemsScreen({ cart }) {

  const [totalDuration, setTotalDuration,] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [showCheckout, setShowCheckout] = useState(false)
  const [data, setData] = useState({
    fullName: "",
    email: "",
    department: "",
    city: "",
  });


  function handleCheckout() {
    if (showCheckout === false) {
      setShowCheckout(true);
    }
  }
  const InputEvent = (event) => {
    const { name, value } = event.target;
    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };
  function PostData(e) {
    e.preventDefault();
    console.log("This is Cart",[cart,data])
  }

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
    <div className="">
      <div className="cart">
        <div className="cart__items">
          {cart.map((item) => (
            <TaskItem key={item._id} itemData={item} />
          ))}
        </div>
        <div className="cart__summary">
          <h4 className="summary__title">Task Summary</h4>
          <div className="summary__price">
            <span>Total Tasks: {totalItems}</span>
            <span>Deadline: {totalDuration} days</span>
          </div>
          <button onClick={handleCheckout} className="summary__checkoutBtn">Proceed To Checkout</button>

        </div>

      </div>

          {showCheckout === true ? (<div>
        <form  >
        <div className="form__container">
          <div>
            <label htmlFor="exampleInputtext1"
              className="form-label">Name</label>
            <input type="text"
              className="form-control"
              id="exampleInputtext1"
              name="fullName"
              value={data.fullName}
              onChange={InputEvent}
              placeholder="Enter Your Name"
              required="" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label mt-3">Email address</label>
            <input type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="email"
              value={data.email}
              onChange={InputEvent}
              placeholder="name@example.com"
              required="" />

          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Department</label>
            <input type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="department"
              value={data.department}
              onChange={InputEvent}
              placeholder="Adrees"
              required="" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleDataList"
              className="form-label">Select City</label>
            <input
              className="form-control"
              list="datalistOptions"
              id="exampleDataList"
              type="text"
              name="city"
              value={data.city}
              onChange={InputEvent}
              placeholder="Type to search..."
              required="" />
            <datalist id="datalistOptions">
              <option value="San Francisco"></option>
              <option value="New York"></option>
              <option value="Seattle"></option>
              <option value="Los Angeles"></option>
              <option value="Chicago"></option>
              <option value="Bhubaneswar"></option>
            </datalist>
          </div>

          <button type="submit" onClick={PostData} className="summary__checkoutBtn">Submit</button>
          </div>
        </form>
      </div>) : (<p></p>)}
    </div>
  );
}



const mapStateToProps = (state) => {
  return {
    cart: state.taskShop.cart,
  };
};

export default connect(mapStateToProps)(TaskItemsScreen);
