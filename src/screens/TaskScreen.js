
import "../styles/TaskScreen.css";

import Task from "../components/Task";
import Filter from "../components/Filter";

// Redux
import { connect } from "react-redux";




function TaskScreen({ Data }) {


  // function sortTasks(event) {
  //   const sorted = event.target.value;
  //   settask({
  //     sorted: event.target.value,
  //     Data: Data.tasks
  //       .slice()
  //       .sort((a, b) =>
  //         sorted === "highest"
  //           ? a.deadline > b.deadline
  //             ? 1
  //             : -1
  //           : sorted === "lowest"
  //             ? a.deadline < b.deadline
  //               ? 1
  //               : -1
  //             : a._id < b._id
  //               ? 1
  //               : -1
  //       ),
  //   });

  // }


  //   // Updating Cart Value
  // useEffect(() => {
  //   let count = 0;
  //   cart.forEach((item) => {
  //     count += item.qty;
  //   });
  //   setCartCount(count);
  // }, [cart,cartCount])


  // function filterTasks(event) {
  //   if (event.target.value === "") {
  //     settask({
  //       task: "",
  //       // sort: event.target.value,
  //       tasks: data.tasks,
  //     });
  //   } else {
  //     settask({
  //       task: event.target.value,
  //       // sort: event.target.value,
  //       tasks: data.tasks.filter(
  //         (task) => task.type.indexOf(event.target.value) >= 0
  //       ),
  //     });
  //   }
  // }

  return (
    <div>
      <div className="homescreen">
        <div className="container text-center">
          <h1 className="mt-3">Tasks</h1>
          <hr className="w-25 mx-auto" />
        </div>
        <Filter
          // length={data.tasks.length}
          // task={task}
          Data={Data}
        // type ={type}

        // filterTasks={filterTasks}
        // sortTasks={sortTasks}
        />
        <div className="taskScreen__tasks">
          {Data.tasks.map((task) => {
            return <Task key={task._id} taskData={task} />;
          })}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  // Data from The Task-Reducers
  return {
    Data: state.taskShop.Data,
  };
};

export default connect(mapStateToProps)(TaskScreen);
