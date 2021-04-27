import React from 'react'
import "../styles/TaskItems.css"

function TaskItem() {
    return (
        <div className="cartItem">
        <img
          className="cartItem__image"
          src=""
          alt="gfgimage"
        />
        <div className="cartItem__details">
          <p className="styles.details__title">This is the titttle</p>
          <p className="details__desc">Info</p>
          <p className="details__price">$ 400</p>
        </div>
        <div className="cartItem__actions">
          <div className="cartItem__qty">
            <label htmlFor="qty">Qty</label>
            <input
              min="1"
              type="number"
              _id="qty"
              name="qty"
              value=""
              onChange=""
            />
          </div>
          <button
          
            className="actions__deleteItemBtn"
          >
            <img
              src="https://image.flaticon.com/icons/svg/709/709519.svg"
              alt=""
            />
          </button>
        </div>
      </div>
    )
}

export default TaskItem
