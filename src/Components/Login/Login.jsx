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
    <Container maxWidth="xs">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: 8,
          p: 5,
          mb: 8,
          boxShadow: 8,
          borderRadius: 2,
          backgroundColor: "white",
          width: "90%",
        }}
      >
        <LockIcon sx={{ fontSize: 35, color: "#f4c430", mb: 1 }} />
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
                mt: 2,
                width: "60%",
                backgroundColor: "#f4c430",
                color: "#000",
                "&:hover": { backgroundColor: "#e6c72f" },
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
              color: "#f4c430",
              fontWeight: "bold",
              textDecoration: "none",
              fontSize: "1.1rem",
            }}
            onMouseOver={(e) => (e.target.style.color = "#e6c72f")}
            onMouseOut={(e) => (e.target.style.color = "#f4c430")}
          >
            Signup
          </Link>
        </Typography>
      </Box>
    </Container>
  );
};

export default Login;
