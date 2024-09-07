import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { authActions } from "./../store/index";
import { Link } from "react-router-dom";
const Sidebar = () => {
  const isLoggedin = useSelector((state) =>state.isLoggedin);
    const dispatch = useDispatch();
    // let navigate = useNavigate();
    function logout(){
        // sessionStorage.clear("id");
        dispatch(authActions.logout());
        // navigate("/");
    }
  return (
    <div className="w-64 h-screen bg-gray-200 p-5">
      <h2 className="text-2xl text-blue-500">TaskMe</h2>
      <ul className="list-none p-0 mt-5 space-y-2">
      {!isLoggedin && 
        <div className="d-flex flex-col my-lg-0 my-2">
            <li className="py-2 px-3 rounded hover:bg-gray-300 cursor-pointer">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        </div>}
        {!isLoggedin && 
        <div className="d-flex flex-col my-lg-0 my-2">
            <li className="py-2 px-3 rounded hover:bg-gray-300 cursor-pointer">
            <Link className="nav-link active" aria-current="page" to="/login">Login</Link>
        </li>
        </div>}
        {!isLoggedin && 
        <div className="d-flex flex-col my-lg-0 my-2">
            <li className="py-2 px-3 rounded hover:bg-gray-300 cursor-pointer">
            <Link className="nav-link active" aria-current="page" to="/signup">Signup</Link>
        </li>
        </div>}
        {isLoggedin && 
        <div className="d-flex flex-col my-lg-0 my-2">
            <li className="py-2 px-3 rounded hover:bg-gray-300 cursor-pointer">
            <Link className="nav-link active" aria-current="page" to="/dashborad">Dashboard</Link>
        </li>
        </div>}
        {isLoggedin && 
        <div className="d-flex flex-col my-lg-0 my-2">
            <li className="py-2 px-3 rounded hover:bg-gray-300 cursor-pointer">
            <Link className="nav-link active" aria-current="page" to="/task">All task</Link>
        </li>
        </div>}
        {isLoggedin && 
        <div className="d-flex flex-col my-lg-0 my-2">
            <li className="py-2 px-3 rounded hover:bg-gray-300 cursor-pointer">
            <Link className="nav-link active" aria-current="page" to="/todo">Todo</Link>
        </li>
        </div>}
        {isLoggedin && 
        <div className="d-flex flex-col my-lg-0 my-2">
            <li className="py-2 px-3 rounded hover:bg-gray-300 cursor-pointer">
            <Link className="nav-link active" aria-current="page" to="/completed">Completed</Link>
        </li>
        </div>}
        {isLoggedin && 
        <div className="d-flex flex-col my-lg-0 my-2">
            <li className="py-2 px-3 rounded hover:bg-gray-300 cursor-pointer">
            <Link className="nav-link active" aria-current="page" to="/progress">Progress</Link>
        </li>
        </div>}
        {isLoggedin && 
        <div className="d-flex flex-col my-lg-0 my-2">
            <li className="py-2 px-3 rounded hover:bg-gray-300 cursor-pointer">
            <Link className="nav-link active" aria-current="page" to="/team">Team</Link>
        </li>
        </div>}
      </ul>
    </div>
  );
};

export default Sidebar;
