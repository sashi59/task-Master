import React, { useState, useEffect } from "react";
import TaskItem from "../components/TaskItem";
import "../styles/TaskItemsScreen.css";
// Step -- 7
import { connect } from "react-redux";

function TaskItemsScreen({ cart }) {
  const [totalDuration, setTotalDuration] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [showCheckout, setShowCheckout] = useState(false);
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

  // const [order , setOrder] = useState({
  //   fullName:"",
  //   email: "",
  //   department: "",
  //   city: "",
  //   tasktitle:"",
  //   taskdeadline:""
  // })

  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();

  today = mm + "/" + dd + "/" + yyyy;

  const cartTitlevalue = cart.map(
    (item, index) => index + 1 + ")  " + item.title + " "
  );
  const cartDeadlinevalue = Math.round(totalDuration) + " days from " + today;

  // setOrder({
  //   fullName: data.fullName,
  //   email: data.email,
  //   department: data.department,
  //   city: data.city,
  //   tasktitle: cartTitlevalue,
  //   taskdeadline:cartDeadlinevalue,
  // })

  const order = {
    fullName: data.fullName,
    email: data.email,
    department: data.department,
    city: data.city,
    tasktitle: cartTitlevalue,
    taskdeadline: cartDeadlinevalue,
  };

  // cart = [
  //   {
  //     deadline: 2
  //   desc: "This is for all the latest trends, no matter who you are, where you’re from and what you’re up to. Exclusive to ASOS, our universal brand is here for you, and comes in all our fit ranges: ASOS Curve, Tall, Petite and Maternity. Created by us, styled by you."
  //   image: "/images/software1.png"
  //   qty: 2
  //   title: "Midi sundress with shirring detail"
  //   type: ["software"]
  //   _id: "task1"
  //   },

  // {
  //     deadline: 2
  //   desc: "This is for all the latest trends, no matter who you are, where you’re from and what you’re up to. Exclusive to ASOS, our universal brand is here for you, and comes in all our fit ranges: ASOS Curve, Tall, Petite and Maternity. Created by us, styled by you."
  //   image: "/images/software1.png"
  //   qty: 2
  //   title: "Midi sundress with shirring detail"
  //   type: ["software"]
  //   _id: "task1"
  //   }
  // ]

  // data ={
  //   city: "Bhubaneswar"
  // department: "hjm"
  // email: "payalpatra105@gmail.com"
  // fullName: "Payal patra"
  // }

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

  const PostData = async (e) => {
    e.preventDefault();
    const {
      fullName,
      email,
      department,
      city,
      tasktitle,
      taskdeadline,
    } = order;

    const response = await fetch("/task", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        fullName,
        email,
        department,
        city,
        tasktitle,
        taskdeadline,
      }),
    });
    const _order = await response.json();
    if (!_order.status === 422) {
      console.log("Error");
    } else {
      console.log("Task and Employee Data Has Been Added");
    }
  };

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
            <span>Deadline: {Math.round(totalDuration)} days</span>
          </div>
          <button onClick={handleCheckout} className="summary__checkoutBtn">
            Proceed To Checkout
          </button>
        </div>
      </div>

      {showCheckout === true ? (
        <div>
          <form>
            <div className="form__container">
              <div>
                <label htmlFor="exampleInputtext1" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputtext1"
                  name="fullName"
                  value={data.fullName}
                  onChange={InputEvent}
                  placeholder="Enter Your Name"
                  required=""
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label mt-3">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  name="email"
                  value={data.email}
                  onChange={InputEvent}
                  placeholder="name@example.com"
                  required=""
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Department
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  name="department"
                  value={data.department}
                  onChange={InputEvent}
                  placeholder="Department"
                  required=""
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleDataList" className="form-label">
                  Select City
                </label>
                <input
                  className="form-control"
                  list="datalistOptions"
                  id="exampleDataList"
                  type="text"
                  name="city"
                  value={data.city}
                  onChange={InputEvent}
                  placeholder="Type to search..."
                  required=""
                />
                <datalist id="datalistOptions">
                  <option value="San Francisco"></option>
                  <option value="New York"></option>
                  <option value="Seattle"></option>
                  <option value="Los Angeles"></option>
                  <option value="Chicago"></option>
                  <option value="Bhubaneswar"></option>
                </datalist>
              </div>

              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Assigned Task
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="example"
                  aria-describedby="emailHelp"
                  name="tasktitle"
                  onChange={InputEvent}
                  value={cartTitlevalue}
                  placeholder=""
                  required=""
                />
              </div>

              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Deadline
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  name="taskdeadline"
                  onChange={InputEvent}
                  value={cartDeadlinevalue}
                  placeholder=""
                  required={true}
                />
              </div>

              <button
                type="submit"
                onClick={PostData}
                className="summary__checkoutBtn"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      ) : (
        <p></p>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    cart: state.taskShop.cart,
  };
};

export default connect(mapStateToProps)(TaskItemsScreen);
