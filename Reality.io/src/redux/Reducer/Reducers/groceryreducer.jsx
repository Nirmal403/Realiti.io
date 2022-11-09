import * as actionTypes from "../../Action/actionTypes";

const INITIAL_STATE = {
    grocery: []
  };


  export const groceryReducer = (state = INITIAL_STATE, { type, payload})=>{

    switch(type){
      
        case actionTypes.FETCH_GROCERY:
          return { ...state, grocery: payload};

        case actionTypes.CART_GROCERY:
          let updateGro = state.grocery.filter((e)=>{
            if(e.id === payload && e.cart == 'true'){
              e.cart = 'false';
              return true;
            }else{
              return true;
            }
          })
          
          return {...state, grocery:updateGro}
  
        default:
            return state;
    }
  }
  
  export const selectedgroceryReducer = (state = INITIAL_STATE, { type, payload})=>{
  
    switch(type){
  
        case actionTypes.SELECTED_GROCERY:
            return { ...state, ...payload};
            
        default:
            return state;
    }
  }
