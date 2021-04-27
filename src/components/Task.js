import React from "react";
import "../styles/Task.css"
import formatCurrency from "../util";
function Task({_id, image, title, desc, deadline }) {
    function addToCart(){
        console.log()
    }

    return (
        <div className="task">
            <img src={image} alt={title} />

            <div className="task__info">
                <p
                    style={{ fontWeight: "bold", fontSize: "22px" }}
                    className="info__name mt-4"
                >
                    {title}
                </p>

                <p className="info__description">
                    <span style={{ fontWeight: "bold", fontSize: "14px" }}>
                        Task Information:{" "}
                    </span>
                    {desc}
                </p>

                <p className="info__price">
                <span style={{ fontWeight: "bold", fontSize: "14px" }}>
                Deadline: {""}
                </span>
                {formatCurrency(deadline)} 
                </p>

                <button  onClick={() => addToCart()} className="info__button">Assign Task</button>

            </div>
        </div>
        
    );
}

export default Task;
