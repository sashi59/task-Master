import React from "react";

function Filter(props) {
  return (

      <div className="filter" style={{display:"flex",margin:"30px 19px",justifyContent:"space-between" ,backgroundColor:"#469bbd",padding:"10px"}}>
        <div className="filter-result" style={{color:"white",fontSize:"19px"}}>{props.length} Tasks</div>
        <div className="filter-sort" style={{color:"white",fontSize:"19px"}} >
         Task Duration{" "}
          <select value={props.type.sort} onChange={props.sortTasks}>
            <option >Latest</option>
            <option value="highest">lowest</option>
            <option value="lowest">Highest</option>
          </select>
        </div>
        <div className="filter-size" style={{color:"white",fontSize:"19px"}}>
          Task Category{" "}
          <select value={props.type.type} onChange={props.filterTasks}>
            <option value="">ALL</option>
            <option value="software">software</option>
            <option value="workforce">workforce</option>
            <option value="business">business</option>
          </select>
        </div>
      </div>
  );
}

export default Filter;
