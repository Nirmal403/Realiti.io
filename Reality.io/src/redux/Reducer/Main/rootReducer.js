import { combineReducers } from "redux";
import { cartCountReducer, shopReducer, totalReducer } from "../Reducers/cartreducer";
import { groceryReducer, selectedgroceryReducer } from "../Reducers/groceryreducer";

        

const rootReducer = combineReducers({
  
  shop: shopReducer,

  groceries: groceryReducer,
  groceryitem: selectedgroceryReducer,


  total: totalReducer,
  cartcount: cartCountReducer,
  
});

export default rootReducer;