import "../styles/TaskScreen.css";
import data from "../data.json";
import Task from "../components/Task";

function TaskScreen() {

    return (
        <div className="homescreen">
            <div className="container text-center">
                <h1 className="mt-3">Tasks</h1>
                <hr className="w-25 mx-auto" />
            </div>
            <div className="taskScreen__tasks">
                {data.tasks.map((val, index) => {
                    return (
                        <Task
                            key={index}
                            image={val.image}
                            title={val.title}
                            desc={val.desc}
                            type={val.type}
                            deadline={val.deadline}
                        />
                    )
                })}
            </div>


        </div>
    );
}

export default TaskScreen;
