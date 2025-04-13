import React, { useState } from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom"

// import Navbar from "./pages/Navbar.jsx";
// import HeroSection from "./pages/HeroSection.jsx";
// import Login from "./pages/Login.jsx";
// import Todo from "./pages/Todo.jsx";
// import NotFound from "./pages/NotFound.jsx";
// import BgColor from "./pages/BgColor.jsx";
// // import FormValidation from "./pages/FormValidation.jsx";
// import FormToDo from "./pages/FormToDo.jsx";
import UserContext from "./context/UserContext.js";
import UserContextProvider from "./context/UserContextProvider.jsx";
import Profile from "./components/Login.jsx";
// import Profile from "./components/Profile.jsx";
import SideBar from "./pages/SideBar.jsx";
import Dashboard from "./pages/Dashboard.jsx";

const App = () => {
//   const route = createBrowserRouter([
// {path:"/todo",element:<Todo/>},
// {path:"/",element:<Navbar/>},
// {path:"*",element:<NotFound/>},
//   ])
  

  return (
//     <div >
//      {/* <FormValidation/> */}
// <RouterProvider router={route}/>
//     </div>
      //  <UserContextProvider>
      //   <h1>make a create react project</h1>
      //   <Login/>
      //   <Profile/>
      //  </UserContextProvider>
      <div>
        <SideBar/>
      
      </div>
  );
};

export default App;
