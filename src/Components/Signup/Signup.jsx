import React, { useState, } from "react";
import { useNavigate } from "react-router-dom";
import {Container,TextField,Button,Typography,Box, Radio,RadioGroup , FormControlLabel, FormControl, FormLabel,} from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import { Link } from "react-router-dom";
import { auth ,db} from "../../Firebaseconfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {set, ref, } from 'firebase/database';
import Swal from 'sweetalert2'

const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user"); 

const successAlert = () => {
    Swal.fire({
      title: "Success!",
      text: "Account Created",
      icon: "success",
      confirmButtonText: "OK",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("name:", name, "Email:", email, "Password:", password, "Role:", role);
  
    try {
      const signupUser = await createUserWithEmailAndPassword(auth, email, password);
      const user = signupUser.user;
      
      await set(ref(db, `${role}s/${user.uid}`), {
        name: name,
        email: email,
        password: password, 
        role: role,
        userId: user.uid,
      });
      
      successAlert()

      setEmail("")
      setName("")
      setPassword("")
      setRole("user")
      navigate("/Login")
  
    } catch (error) {
      console.error("Error during registration:", error);
      Swal.fire("Error!", error.message, "error");
    }
  };

  return (
    <div style={{backgroundColor:"#f8f9fa",paddingTop:"30px", width:"98.4vw%"}}>
      <Container maxWidth="xs">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          p: 4,
          backgroundColor: "#f8f9fa",
          width: "90%",
           }}
      >
        <LockIcon
          sx={{
            fontSize: 35,
            color: " #415ff2",
            mb: 1,
            transition: "color 0.3s",
            "&:hover": { color: "black " },
          }}
        />
        <Typography variant="h5" gutterBottom>
          Signup
        </Typography>
        <form onSubmit={handleSubmit} style={{ width: "100%" }}>
        <TextField
            label="Name"
            type="text"
            variant="outlined"
            fullWidth
            margin="normal"
            value={name}
            onChange={(e) => setName(e.target.value)}
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

          {/* Role Selection */}
          <FormControl component="fieldset" sx={{ mt: 2 }}>
            <FormLabel component="legend" sx={{ color: "#000", fontWeight: 500 }}>
              Select Role
            </FormLabel>
            <RadioGroup
              row
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <FormControlLabel value="user" control={<Radio sx={{ color: "#000" }} />} label="User" />
              <FormControlLabel value="admin" control={<Radio sx={{ color: "#000" }} />} label="Admin" />
            </RadioGroup>
          </FormControl>

          {/* Centered Button */}
          <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
            <Button
              type="submit"
              variant="contained"
              sx={{
                mt: 2,
                width: "60%",
                backgroundColor: " #415ff2",
                color: "white",
                transition: "background-color 0.3s",
                "&:hover": { backgroundColor: "black " ,color:"white"},
              }}
            >
              Signup
            </Button>
          </Box>
        </form>

        <Typography variant="body2" sx={{ mt: 2, color: "#333",fontSize: "1rem" }}>
          Already have an account?{" "}
          <Link
            to="/login"
            style={{
              color: "black",
              fontWeight: "bold",
              textDecoration: "underline",
              fontSize: "1.1rem"
             
            }}
            onMouseOver={(e) => (e.target.style.color =" #415ff2")}
            onMouseOut={(e) => (e.target.style.color = "black")}
          >
            Login
          </Link>
        </Typography>
        
      </Box>
    </Container>
    </div>
  );
};

export default Signup;
