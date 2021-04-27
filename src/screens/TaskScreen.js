import { useState } from "react";
import "../styles/TaskScreen.css";
import data from "../data.json";
import Task from "../components/Task";
import Filter from "../components/Filter";

// Redux
import { connect } from "react-redux";

function TaskScreen({ Data }) {
  // const [task, settask] = useState({
  //   task: "",
  //   sort: "",
  //   taskItems: [],
  //   tasks: data.tasks,
  // });

  // function sortTasks(event) {
  //   const sort = event.target.value;
  //   settask({
  //     sort: task.sort,
  //     tasks: task.tasks
  //       .slice()
  //       .sort((a, b) =>
  //         sort === "highest"
  //           ? a.price > b.price
  //             ? 1
  //             : -1
  //           : sort === "lowest"
  //             ? a.price < b.price
  //               ? 1
  //               : -1
  //             : a._id < b._id
  //               ? 1
  //               : -1
  //       ),
  //   });
  // }

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
          // sort={task.sort}
          // filterTasks={filterTasks}
          // sortTasks={sortTasks}
        />
        <div className="taskScreen__tasks">
          {/* {task.tasks.map((val, index) => { */}
  {Data.tasks.map( task =>{
            return (
              <Task key = {task._id} taskData={task}
                // key={index}
                // _id={val._id}
                // image={val.image}
                // title={val.title}
                // desc={val.desc}
                // deadline={val.deadline}
              />
            );
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
