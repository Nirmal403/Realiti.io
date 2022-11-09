import * as actionTypes from "../../Action/actionTypes";

const INITIAL_STATE = {
    cart: [],
    total: 0,
    cartcount: 0,
};


export const shopReducer = (state = INITIAL_STATE, { type, payload})=>{

  switch(type){

      case actionTypes.ADD_TO_CART:
          return {...state, cart: state.cart.concat(payload)}

      case actionTypes.REMOVE_CART:
        let updateCart = state.cart.filter((e)=>{
          if(e.title === payload){
            return false;
          }else{
            return true;
          }
        })
        return {...state, cart:updateCart}

        case actionTypes.SUB_QT:
          const subqty =state.cart.filter((ele) => {
            if (ele.title === payload) {
              ele.qty=ele.qty-1;
              return true;
            } else {
              return true;
            }
          });
           return {
            ...state,
            cart:subqty,
          };

          case actionTypes.ADD_QT:
          const addqty =state.cart.filter((ele) => {

            if (ele.title === payload) {
              ele.qty=ele.qty+1;
              return true;
            } else {
              return true;
            }
          });
           return {
            ...state,
            cart:addqty,
          };

        default:
          return state;
  }
}

export const totalReducer = (state = INITIAL_STATE, { type, payload})=>{

  switch(type){

      case actionTypes.SET_TOTAL:
          return { ...state, total: state.total+payload};

      case actionTypes.SUB_TOTAL:
          return { ...state, total: state.total-payload};

      case actionTypes.ADD_TOTAL:
        return { ...state, total: state.total+payload};

      default:
          return state;
  }
}

export const cartCountReducer = (state = INITIAL_STATE, { type, payload})=>{

  switch(type){

      case actionTypes.ADD_COUNT:
        return {...state, cartcount:state.cartcount + payload}

      case actionTypes.SUB_COUNT:
        return {...state, cartcount:state.cartcount - payload}

      default:
          return state;
  }
}