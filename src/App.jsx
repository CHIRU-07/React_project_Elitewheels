import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { auth, db } from "./Firebaseconfig";
import { ref, get } from "firebase/database";
import { onAuthStateChanged } from "firebase/auth";
import Spinner from "react-bootstrap/Spinner"; // Import Bootstrap Spinner



import Login from "./Components/Login/Login"
import Signup from "./Components/Signup/Signup"
import Cars from "./Pages/User/Cars/Cars";

import Addcars from "./Pages/Admin/Addcars/Addcars";
import Adminnavbar from "./Components/Adminnavbar/Adminnavbar";
import Usernavbar from "./Components/Usernavbar/Usernavbar";
import Landingnavbar from "./Components/Landingnavbar/Landingnavbar";
import Landingpage from "./Pages/Landingpage/Landingpage";
import Home from "./Pages/User/Home/Home";
import Adminhome from "./Pages/Admin/Adminhome/Adminhome";
import Rentcar from "./Components/Rentcar/Rentcar";
import Blog from "./Pages/User/Blog/Blog";
import SingleCar from "./Pages/User/SingleCar/SingleCar";

import Hyderabad from "./Components/Locations/Hyderabad/Hyderabad";
import Bengaluru from "./Components/Locations/Bengaluru/Bengaluru";
import Vizag from "./Components/Locations/Vizag/Vizag";
import Chennai from "./Components/Locations/Chennai/Chennai";
import Delhi from "./Components/Locations/Delhi/Delhi";
import Mumbai from "./Components/Locations/Mumbai/Mumbai";
import Kolkata from "./Components/Locations/Kolkata/Kolkata";



const App = () => {
  const [user, setUser] = useState(null);
  const [userRole, setUserRole] = useState("");
  const [loading, setLoading] = useState(true);


  useEffect(() => {
     const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      console.log("Auth state changed. Current user:", currentUser);

      if (!currentUser) {
        console.log("No user logged in");
        setUser(null);
        setUserRole("");
        setLoading(false);
        return;
      }

      setUser(currentUser);

      // Check if user is an ADMIN first
      const adminRef = ref(db, `admins/${currentUser.uid}`);
      const adminSnapshot = await get(adminRef);

      if (adminSnapshot.exists()) {
        console.log("User is an ADMIN");
        setUserRole("admin");
        setLoading(false);
        return;
      }

      const userRef = ref(db, `users/${currentUser.uid}`);
      const userSnapshot = await get(userRef);

      if (userSnapshot.exists()) {
        console.log("User is a USER");
        setUserRole("user");
        setLoading(false);
        return;
      }


      console.log("User has NO ROLE");
      setLoading(false);
      setUserRole("");
    });


    return () => unsubscribe();
  }, []);



  console.log(userRole)
  console.log("Rendering App with role:", userRole);
  console.log("User Role in Routing:", userRole);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }

  return (
    <div>

      {userRole === "admin" ? <Adminnavbar /> :
        userRole === "user" ? <Usernavbar /> :
          <Landingnavbar />
      }


      <div>
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          


          <Route
            path="/Adminhome"
            element={userRole === "admin" ? <Adminhome /> : <Navigate to="/" />}
          />
          <Route
            path="/Addcars"
            element={userRole === "admin" ? <Addcars /> : <Navigate to="/" />}
          />
          <Route
            path="/Home"
            element={userRole === "user" ? <Home /> : <Navigate to="/" />}
          />
          <Route
            path="/rent"
            element={userRole === "user" ? <Rentcar /> : <Navigate to="/" />}
          />
          <Route
            path="/blog"
            element={userRole === "user" ? <Blog /> : <Navigate to="/" />}
          />

          <Route
            path="/hyderabad"
            element={ <Hyderabad />}
          />

          <Route
            path="/bengaluru"
            element={<Bengaluru />}
          />
          <Route
            path="/vizag"
            element={<Vizag/>}
          />

          <Route
            path="/chennai"
            element={<Chennai />}
          />

          <Route
            path="/delhi"
            element={<Delhi/>}
          />

          <Route
            path="/mumbai"
            element={<Mumbai /> }
          />
          <Route
            path="/kolkata"
            element={<Kolkata />}
          />

          <Route
            path="/cars"
            element={userRole === "user" ? <Cars /> : <Navigate to="/" />}
          />
          <Route
            path="/cars/:id"
            element={userRole === "user" ? <SingleCar /> : <Navigate to="/" />}
          />



          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
