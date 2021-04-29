import React, { useEffect } from "react";
import { connect } from "react-redux";
import { filterTasks } from "../redux/Task/task-actions"

// Step -- 8

function Filter({  Data ,type }) {
  function show(){
    console.log(Data)
  }

  return (

    <div className="filter" style={{ display: "flex", margin: "30px 19px", justifyContent: "space-between", backgroundColor: "#469bbd", padding: "10px" }}>
      <div className="filter-result" style={{ color: "white", fontSize: "19px" }}>{Data.tasks.length} Tasks</div>
      <div className="filter-sort" style={{ color: "white", fontSize: "19px" }} >
        Task Duration{" "}
        {/* <select value={sorted} onChange={sortTheTask(Data)}>
          <option >Latest</option>
          <option value="highest">lowest</option>
          <option value="lowest">Highest</option>
        </select> */}
      </div>
      <div className="filter-size" style={{ color: "white", fontSize: "19px" }}>
        Task Category{" "}
        <select value={type} onClick={show()} onChange={(e) =>
          filterTasks(Data, e.target.value)
        } >
          <option value="">ALL</option>
          <option value="software">software</option>
          <option value="workforce">workforce</option>
          <option value="business">business</option>
        </select>
      </div>
    </div>

  )
}


const mapDispatchToProps = (dispatch) => {
  return {
 
    filterTasks: (Data,type) => dispatch(filterTasks(Data,type)),
  };
};




export default connect(null, mapDispatchToProps)(Filter);
