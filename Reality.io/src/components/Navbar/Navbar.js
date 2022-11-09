import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
// import logo from "../Images/logo.png"
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {

  const navigate = useNavigate();
  // const displayUser = useSelector((state)=> state.displayuser.displayuser);
  const count = useSelector((state)=> state.cartcount.cartcount);
  // const dispatch = useDispatch();
  
  // React.useEffect(() => {
  //   if (!localStorage.getItem("auth")) navigate("/signin");
  // }, [logout]);

  // const logoutHandler = (e) => {
  //   e.preventDefault();
  //   localStorage.removeItem("auth");
  //   setLogout(true);
  // };

  return (
    <div id="navbar">
      <Link to="/">
        {/* <img id="navbar-logo" src={logo} alt="" /> */}
        <h2 id="navbar-logo">Home</h2>
      </Link>
      
        <div id="nav-cart">
          {/* <Link to="/signin"><button onClick={logoutHandler} id="account">Logout</button></Link> */}
          <Link to="/cart">
             <img id="nav-img" src="https://img.icons8.com/external-tulpahn-flat-tulpahn/64/000000/external-add-to-cart-online-shopping-tulpahn-flat-tulpahn.png"/>
          </Link>
          <div>{count}</div>
        </div>
        
     
      
    </div>
  );
};

export default Navbar;
