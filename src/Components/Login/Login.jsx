import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; 
import { Container, TextField, Button, Typography, Box } from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import { signInWithEmailAndPassword } from "firebase/auth";
import { ref, get } from "firebase/database"; 
import { auth, db } from "../../Firebaseconfig"; 
import Swal from "sweetalert2"; 

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();  
  
  const successAlert = () => {
    Swal.fire({
      title: "Success!",
      text: "Login Successful",
      icon: "success",
      confirmButtonText: "OK",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Email:", email, "Password:", password);
    try {
      const loggedInUserDetails = await signInWithEmailAndPassword(auth, email, password);
      const user = loggedInUserDetails.user;

      const adminRef = ref(db, `admins/${user.uid}`);
      const adminSnapshot = await get(adminRef);
      
      const userRef = ref(db, `users/${user.uid}`);
    const userSnapshot = await get(userRef);

    if (adminSnapshot.exists()) {
      successAlert();
      navigate("/Adminhome");
      return;
    }

    if (userSnapshot.exists()) {
      successAlert()
      navigate("/Home");
      return;
    }

    Swal.fire("Error!", "User role not found.", "error");
      
    } catch (error) {
      Swal.fire("Error!", error.message, "error");
    }
  };

  return (
    <div style={{backgroundColor:"#f8f9fa",paddingTop:"30px", width:"98.4vw%",height:"88vh"}}>
      <Container maxWidth="xs">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          p: 6,
          backgroundColor: "#f8f9fa",
          width: "90%",
        }}
      >
        <LockIcon sx={{ fontSize: 35, color: "#415ff2", mb: 1 }} />
        <Typography variant="h5" gutterBottom>
          Login
        </Typography>
        <form onSubmit={handleSubmit} style={{ width: "100%" }}>
          <TextField
            label="Email"
            type="email"
            variant="outlined"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "#ccc" },
                "&:hover fieldset": { borderColor: "#000" },
                "&.Mui-focused fieldset": { borderColor: "#000" },
              },
              "& .MuiInputLabel-root": { color: "#777" },
              "& .MuiInputLabel-root.Mui-focused": { color: "#000" },
            }}
          />

          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "#ccc" },
                "&:hover fieldset": { borderColor: "#000" },
                "&.Mui-focused fieldset": { borderColor: "#000" },
              },
              "& .MuiInputLabel-root": { color: "#777" },
              "& .MuiInputLabel-root.Mui-focused": { color: "#000" },
            }}
          />

          {/* ✅ Centering the Button using Box */}
          <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
            <Button
              type="submit"
              variant="contained"
              sx={{
                mt: 3,
                width: "60%",
                backgroundColor: "#415ff2",
                color: "white",
                "&:hover": { backgroundColor: "black" },
              }}
            >
              Login
            </Button>
          </Box>
        </form>

        <Typography variant="body2" sx={{ mt: 2, color: "#333", fontSize: "1rem" }}>
          Don't have an account?{" "}
          <Link
            to="/signup"
            style={{
              color: "black",
              fontWeight: "bold",
              textDecoration: "underline",
              fontSize: "1.1rem",
            }}
            onMouseOver={(e) => (e.target.style.color = "#415ff2")}
            onMouseOut={(e) => (e.target.style.color = "black")}
          >
            Signup
          </Link>
        </Typography>
      </Box>
    </Container>
    </div>
  );
};

export default Login;
