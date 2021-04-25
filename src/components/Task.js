import React from "react";
import { Link } from "react-router-dom";
import "../styles/Task.css"
import formatCurrency from "../util";
function Task({ image, title, desc, type, deadline }) {
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

                <Link className="info__button">Assign Task</Link>
            </div>
        </div>
        
    );
}

export default Task;
