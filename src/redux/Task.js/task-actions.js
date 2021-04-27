// Step -5

import * as actionTypes from "./task-types"

export const addToTask = (itemID) => {
    return {
      type: actionTypes.ADD_TO_TASK,
      payload: {
        _id: itemID,
      },
    };
  };
  
  
export const removeFromTask = (itemID) => {
    return {
      type: actionTypes.REMOVE_FROM_TASK,
      payload: {
        _id: itemID,
      },
    };
  };


  export const adjustItemQty = (itemID, qty) => {
    return {
      type: actionTypes.ADJUST_ITEM_QTY,
      payload: {
        _id: itemID,
        qty,
      },
    };
  };
  

  export const loadCurrentItem = (item) => {
    return {
      type: actionTypes.LOAD_CURRENT_ITEM,
      payload: item,
    };
  };
  