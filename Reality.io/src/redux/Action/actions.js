import * as actionTypes from "./actionTypes";
import api from "../../Api/Api"

export const FetchGrocery = ()=> async (dispatch)=>{
const response = await api.get("/data1");
dispatch({
  type: actionTypes.FETCH_GROCERY, 
  payload: response.data
  })
}

export const FetchSelectedGrocery = (id)=> async (dispatch)=>{
  const response = await api.get(`/grocery/${id}`);
  dispatch({
    type: actionTypes.SELECTED_GROCERY, 
    payload: response.data
    })
  }

export const SelectedGrocery = (gro)=>{

  return{
      type: actionTypes.SELECTED_GROCERY,
      payload: gro
  }
}

export const CartGrocery = (cgro)=>{

  return{
      type: actionTypes.CART_GROCERY,
      payload: cgro
  }
}














export const addToCart = (product) => {
  return {
    type: actionTypes.ADD_TO_CART,
    payload:product
  };
};

export const removeCart = (id) => {
  return {
    type: actionTypes.REMOVE_CART,
    payload:id
  };
};

export const addQt = (qty) => {
  return {
    type: actionTypes.ADD_QT,
    payload:qty
  };
};
export const subQt = (qty) => {
  return {
    type: actionTypes.SUB_QT,
    payload:qty
  };
};


export const SetTotal = (total)=>{

  return{
      type: actionTypes.SET_TOTAL,
      payload: total
  }
}

export const SubTotal = (total)=>{

  return{
      type: actionTypes.SUB_TOTAL,
      payload: total
  }
}
export const AddTotal = (total)=>{

  return{
      type: actionTypes.ADD_TOTAL,
      payload: total
  }
}


export const addCount = (count)=>({
  type: actionTypes.ADD_COUNT,
  payload: count,
})

export const subCount = (count)=>({
  type: actionTypes.SUB_COUNT,
  payload: count,
})
 