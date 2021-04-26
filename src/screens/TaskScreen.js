import { useState } from "react";
import "../styles/TaskScreen.css";
import data from "../data.json";
import Task from "../components/Task";
import Filter from "../components/Filter";

function TaskScreen() {
  const [type, setType] = useState({
    type: "",
    sort: "",
    tasks: data.tasks,
  });

  function sortTasks(event) {
    const sort = event.target.value;
    // if (event.target.value === "") {
    //     setType({
    //         type: "",
    //         sort: "",
    //         tasks: data.tasks,
    //     });
    // } else if (event.target.value === "lowest") {
    //     setType({
    //         type: type,
    //         sort: event.target.value,
    //         tasks: data.tasks.filter(
    //             function (task) {
    //                 if (task.deadline <= 20) {

    //                     sortedTasks.push(task)
    //                 }

    //                 return sortedTasks

    //             }
    //         ),
    //     });
    // }
    setType({
      sort: type.sort,
      tasks: type.tasks
        .slice()
        .sort((a, b) =>
          sort === "lowest"
            ? a.price > b.price
              ? 1
              : -1
            : sort === "highest"
            ? a.price < b.price
              ? 1
              : -1
            : a._id < b._id
            ? 1
            : -1
        ),
    });
  }

  function filterTasks(event) {
    if (event.target.value === "") {
      setType({
        type: "",
        // sort: event.target.value,
        tasks: data.tasks,
      });
    } else {
      setType({
        type: event.target.value,
        // sort: event.target.value,
        tasks: data.tasks.filter(
          (task) => task.type.indexOf(event.target.value) >= 0
        ),
      });
    }
  }

  return (
    <div className="homescreen">
      <div className="container text-center">
        <h1 className="mt-3">Tasks</h1>
        <hr className="w-25 mx-auto" />
      </div>
      <Filter
        length={data.tasks.length}
        type={type}
        sort={type.sort}
        filterTasks={filterTasks}
        sortTasks={sortTasks}
      />
      <div className="taskScreen__tasks">
        {type.tasks.map((val, index) => {
          return (
            <Task
              key={index}
              image={val.image}
              title={val.title}
              desc={val.desc}
              type={val.type}
              deadline={val.deadline}
            />
          );
        })}
      </div>
    </div>
  );
}

export default TaskScreen;
