import React, { useEffect, useState } from "react";
import "./Adminhome.css";
import { ref, onValue, update,remove } from "firebase/database";
import { Modal, Box, Button, TextField, Select, MenuItem,InputLabel } from "@mui/material";

import { db } from "../../../Firebaseconfig";
import Swal from "sweetalert2";


import luggagesvg from "../../../assets/luggagesvg.svg";
import carseats from "../../../assets/carseats.svg";
import gearicon from "../../../assets/gearicon.svg";
import petroldabba from "../../../assets/petroldabba.svg";
const Adminhome = () => {
  const [cars, setCars] = useState([]);
  const [carsdata, setCarsdata] = useState({
    brand: "",
    model: "",
    type: "",
    gearbox: "",
    pricePerDay: "",
    location: "",
    fuelType: "",
    bookingstatus:'',
    mileage: "",
    images: [],
    seats:''
  });

  const [previewImage, setPreviewImage] = useState(""); // For image preview
  const [open, setOpen] = useState(false);


  const handleOpen = (car) => {
    setCarsdata(car); 
    setPreviewImage(car.images?.[0] || "https://via.placeholder.com/150");
    setOpen(true);
  };


  const handleClose = () => setOpen(false);

  
  const handleChange = (e) => {
    setCarsdata({ ...carsdata, [e.target.name]: e.target.value });
  };

  // Handle Image Upload to Cloudinary
  // const handleImageUpload = async (e) => {
  //   const file = e.target.files[0]; 
  //   if (!file) return;
  
  //   const formData = new FormData();
  //   formData.append("file", file);
  //   formData.append("upload_preset", "your_upload_preset");
  
  //   try {
  //     const response = await fetch("https://api.cloudinary.com/v1_1/your_cloud_name/image/upload", {
  //       method: "POST",
  //       body: formData,
  //     });
  
  //     const data = await response.json();
  //     if (!data.secure_url) throw new Error("Upload failed");
  
  //     const imageUrl = data.secure_url;
  
  //     // ✅ Update Firebase/Database (Replace with your update function)
  //     await updateCarInDatabase(carsdata.id, { images: [...(carsdata.images || []), imageUrl] });
  
  //     // ✅ Update local state
  //     setCarsdata((prev) => ({
  //       ...prev,
  //       images: [...(prev.images || []), imageUrl],
  //     }));
  
  //     setPreviewImage(imageUrl);
  //     Swal.fire("Success!", "Image uploaded successfully.", "success");
  //   } catch (error) {
  //     console.error("Error uploading image:", error);
  //     Swal.fire("Error!", "Failed to upload image.", "error");
  //   }
  // };
  

 
  const handleSubmit = (e) => {
    e.preventDefault();

    update(ref(db, `cars/${carsdata.id}`), carsdata)
      .then(() => {
        Swal.fire("Updated!", "Car details updated successfully.", "success");
        setOpen(false);
      })
      .catch((error) => {
        Swal.fire("Error!", error.message, "error");
      });
  };

  const handleDelete = (carId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This car will be permanently deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        remove(ref(db, `cars/${carId}`))
          .then(() => {
            Swal.fire("Deleted!", "Car has been deleted.", "success");
          })
          .catch((error) => {
            Swal.fire("Error!", error.message, "error");
          });
      }
    });
  };


  useEffect(() => {
    const carsRef = ref(db, "cars");

    const unsubscribe = onValue(carsRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        const carsArray = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));
        setCars(carsArray);
      } else {
        setCars([]);
      }
    });

   

    return () => unsubscribe();
  }, []);

  console.log(cars)

  return (
    <div className="grid-container">
      {cars.map((car) => (
        <div key={car.id} className="car-card">
          <img
            src={car.mainimage}
            alt={`${car.brand} ${car.model}`}
            className="car-image"
          />
          <h3 className="car-title">
            {car.brand} {car.model}
          </h3>
          <p className="car-price">
            {car.pricePerDay} ₹<span>/Per day</span>
          </p>

          <div className="car-details">
            <div className="detail">
              <img src={gearicon} alt="Gearbox" />
              <span>{car.gearbox}</span>
            </div>
            <div className="detail">
              <img src={carseats} alt="Luggage" id="carseatssvg"/>
              <span>{car.seats}</span>
            </div>
            <div className="detail">
              <img src={petroldabba} alt="Fuel Type" />
              <span>{car.fuelType}</span>
            </div>
          </div>

          <div className="car-actions">
            

            <Button
              onClick={() => handleOpen(car)}
              sx={{
                backgroundColor: "#4caf50",
                color: "white",
                transition: "transform 0.3s ease-in-out",
                "&:hover": {
                  backgroundColor: "#45a049",
                  transform: "scale(1.05)",
                },
              }}
            >
              Edit Car
            </Button>
            <Button
              onClick={() => handleDelete(car.id)}
              sx={{ backgroundColor: "#d32f2f", color: "white" }}
            >
              Delete Car
            </Button>

            {/* Modal for Editing Car */}
            <Modal open={open} onClose={handleClose} aria-labelledby="edit-car-title">
              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: 450,
                  bgcolor: "background.paper",
                  boxShadow: 24,
                  p: 6,
                  borderRadius: 2,
                  maxHeight: "80vh",
                  overflowY: "auto", // Added Scroll
                }}
              >
                <h2>Edit Car Details</h2>
                <form onSubmit={handleSubmit}>
                  <TextField label="Brand" name="brand" value={carsdata.brand} onChange={handleChange} fullWidth margin="normal" />
                  <TextField label="Model" name="model" value={carsdata.model} onChange={handleChange} fullWidth margin="normal" />
                  
                  <Select name="type" value={carsdata.type} onChange={handleChange} fullWidth displayEmpty sx={{ mb: 2 }}>
                    <MenuItem value="">Select Type</MenuItem>
                    <MenuItem value="Sedan">Sedan</MenuItem>
                    <MenuItem value="SUV">SUV</MenuItem>
                    <MenuItem value="Hatchback">Hatchback</MenuItem>
                  </Select>

                  <Select name="gearbox" value={carsdata.gearbox} onChange={handleChange} fullWidth displayEmpty sx={{ mb: 2 }}>
                    <MenuItem value="">Select Gearbox</MenuItem>
                    <MenuItem value="Manual">Manual</MenuItem>
                    <MenuItem value="Automatic">Automatic</MenuItem>
                  </Select>
                  <InputLabel>Booking status</InputLabel>
                  <Select name="bookingstatus" value={carsdata.bookingstatus} onChange={handleChange} fullWidth displayEmpty sx={{ mb: 2 }}>
                    <MenuItem value="">Booking Status</MenuItem>
                    <MenuItem value="true">true</MenuItem>
                    <MenuItem value="false">false</MenuItem>
                 
                  </Select>

                  <TextField label="Price Per Day" name="pricePerDay" type="number" value={carsdata.pricePerDay} onChange={handleChange} fullWidth margin="normal" />
                  <TextField label="Seats" name="seats" value={carsdata.seats} onChange={handleChange} fullWidth margin="normal" />

                  <InputLabel>Fuel Type</InputLabel>
  <Select
    name="fuelType"
    value={carsdata.fuelType}
    onChange={handleChange}
    displayEmpty
    sx={{ width: "100%", height: 45 }}
  >
    <MenuItem value="">
      <em>Select Fuel Type</em>
    </MenuItem>
    <MenuItem value="Petrol">Petrol</MenuItem>
    <MenuItem value="Diesel">Diesel</MenuItem>
    <MenuItem value="Electric">Electric</MenuItem>
  </Select>


  <InputLabel>Location</InputLabel>
  <Select
    name="location"
    value={carsdata.location}
    onChange={handleChange}
    displayEmpty
    sx={{ width: "100%", height: 45 }}
  >
    <MenuItem value="">
      <em>Select Location</em>
    </MenuItem>
    <MenuItem value="Hyderabad">Hyderabad</MenuItem>
    <MenuItem value="Vizag">Vizag</MenuItem>
    <MenuItem value="Bengaluru">Bengaluru</MenuItem>
    <MenuItem value="Chennai">Chennai</MenuItem>
    <MenuItem value="Mumbai">Mumbai</MenuItem>
    <MenuItem value="Delhi">Delhi</MenuItem>
    <MenuItem value="Kolkata">Kolkata</MenuItem>


  </Select>

                 

                  

                  {/* Image Upload  */}
                   {/* <div className="image-upload">
                    <p>Update Car Image:</p>
                    <input type="file" accept="image/*" onChange={handleImageUpload} multiple/>
                    <img src={previewImage} alt="Preview" className="preview-img" style={{ width: "100%", borderRadius: "10px", marginTop: "10px" }} />
                  </div> */}

                  <div style={{ display: "flex", justifyContent: "space-between", marginTop: "20px" }}>
                    <Button type="submit" variant="contained" color="primary">Save Changes</Button>
                    <Button onClick={handleClose} variant="contained" color="error">Cancel</Button>
                  </div>
                </form>
              </Box>
            </Modal>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Adminhome;
