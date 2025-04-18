import React, { useState } from 'react';
import { ref, push } from 'firebase/database';
import {db} from "../../../Firebaseconfig"
import './Addcars.css';
import Swal from 'sweetalert2'

const Addcars = () => {
  const [previewImages, setPreviewImages] = useState([]);
  const [coverImagePreview, setCoverImagePreview] = useState(""); 
  const [formData, setFormData] = useState({
    brand: '',
    model: '',
    type: '',
    gearbox: '',
    images: [],
    pricePerDay: '',
    mainimage:'',
    bookingstatus:'',
    location: '',
    fuelType:'',
    seats:''
  });

  const successalert=()=>{
    Swal.fire({
      title: "Car Added Successfully",
      icon: "success",
      draggable: true
    });
  }


  const handleChange = (e) => {
    const { name, value, files } = e.target;
  
    if (files && files.length > 0) {
      const imageFiles = Array.from(files);
  
      if (name === "mainimage") {
        
        const coverPreview = URL.createObjectURL(imageFiles[0]);
        setCoverImagePreview(coverPreview);
        setFormData((prev) => ({ ...prev, mainimage: imageFiles[0] }));
      } 
      else if (name === "images") {
      
        const previews = imageFiles.map((file) => URL.createObjectURL(file));
        setPreviewImages(previews);
        setFormData((prev) => ({ ...prev, images: imageFiles }));
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Upload multiple images
      const uploadedImages = await Promise.all(
        formData.images.map(async (image) => {
          const imageFormData = new FormData();
          imageFormData.append('file', image);
          imageFormData.append('upload_preset', 'ml_default');
  
          const res = await fetch(`https://api.cloudinary.com/v1_1/dnf1kqg1v/image/upload`, {
            method: 'POST',
            body: imageFormData,
          });
  
          const data = await res.json();
          if (data.secure_url) return data.secure_url;
          throw new Error('Failed to upload image');
        })
      );
  
      // Upload main image separately
      let mainImageUrl = '';
      if (formData.mainimage) {
        const mainImageFormData = new FormData();
        mainImageFormData.append('file', formData.mainimage);
        mainImageFormData.append('upload_preset', 'ml_default');
  
        const mainRes = await fetch(`https://api.cloudinary.com/v1_1/dnf1kqg1v/image/upload`, {
          method: 'POST',
          body: mainImageFormData,
        });
  
        const mainData = await mainRes.json();
        if (mainData.secure_url) mainImageUrl = mainData.secure_url;
      }
  
      // New car object with all fields
      const newCar = {
        brand: formData.brand,
        model: formData.model,
        type: formData.type,
        gearbox: formData.gearbox,
        pricePerDay: formData.pricePerDay,
        images: uploadedImages,
        mainimage: mainImageUrl, // Corrected main image URL
        bookingstatus: formData.bookingstatus,
        location: formData.location,
        fuelType: formData.fuelType, 
        seats:formData.seats
      };
  
      await push(ref(db, 'cars'), newCar);
      successalert();
  
      // Reset form
      setFormData({
        brand: '',
        model: '',
        type: '',
        gearbox: '',
        mainimage: '',
        bookingstatus: '',
        images: [],
        pricePerDay: '',
        fuelType: '',
        location: '',
        seats:''
      });
      setPreviewImages([]);
      setCoverImagePreview("");
  
    } catch (error) {
      console.error('Error adding car:', error.message);
      alert('Failed to add car');
    }
  };
  

  return (
    <div className="card">
      <h2 className="card-title">Add a New Car</h2>

      <form onSubmit={handleSubmit} className="card-body">
        <div className="inputcontainer">
          <label htmlFor="brand">Brand:</label>
          <input type="text" name="brand" id="brand" placeholder="Enter car brand" value={formData.brand} onChange={handleChange} required />
        </div>

        <div className="inputcontainer">
          <label htmlFor="model">Model:</label>
          <input type="text" name="model" id="model" placeholder="Enter car model" value={formData.model} onChange={handleChange} required />
        </div>

        <div className="inputcontainer">
          <label htmlFor="type">Type:</label>
          <select name="type" id="type" value={formData.type} onChange={handleChange} required>
            <option value="">Select Type</option>
            <option value="Sedan">Sedan</option>
            <option value="SUV">SUV</option>
            <option value="Hatchback">Hatchback</option>
          </select>
        </div>

        <div className="inputcontainer">
          <label htmlFor="bookingstatus">Booking Status: </label>
          <select name="bookingstatus" id="type" value={formData.bookingstatus} onChange={handleChange} required>
            <option value="">Select Booking status</option>
            <option value="true">true</option>
            <option value="false">false</option>
            
          </select>
        </div>

        <div className="inputcontainer">
          <label htmlFor="gearbox">Gearbox:</label>
          <select name="gearbox" id="gearbox" value={formData.gearbox} onChange={handleChange} required>
            <option value="">Select Gearbox</option>
            <option value="Manual">Manual</option>
            <option value="Automatic">Automatic</option>
          </select>
        </div>

        <div className="inputcontainer">
          <label htmlFor="pricePerDay">Price Per Day (₹):</label>
          <input type="number" name="pricePerDay" id="pricePerDay" placeholder="Enter price per day" value={formData.pricePerDay} onChange={handleChange} required />
        </div>

        <div className="inputcontainer">
          <label htmlFor="location">Location:</label>
          <select name="location" id="location" value={formData.location} onChange={handleChange} required>
            <option value="">Select Location</option>
            <option value="Hyderabad">Hyderabad</option>
            <option value="Vizag">Vizag</option>
            <option value="Bengaluru">Bengaluru</option>
            <option value="Chennai">Chennai</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Delhi">Delhi</option>
            <option value="Kolkata">Kolkata</option>
          </select>
        </div>

        <div className="inputcontainer">
          <label htmlFor="fuelType">Fuel Type:</label>
          <select name="fuelType" id="fuelType" value={formData.fuelType} onChange={handleChange} required>
            <option value="">Select Fuel Type</option>
            <option value="Petrol">Petrol</option>
            <option value="Diesel">Diesel</option>
            <option value="Electric">Electric</option>
            
          </select>
        </div>

        <div className="inputcontainer">
          <label htmlFor="model">Seats:</label>
          <input type="text" name="seats" id="model" placeholder="Enter number of seats" value={formData.seats} onChange={handleChange} required />
        </div>


        {/* <div className="image-section">
          <label htmlFor="mainimage">Add Cover Image:</label>
          <input type="file" name="mainimage" id="images" accept="image/*"  onChange={handleChange} required />
          <div className="preview-container">
            {previewImages.map((src, index) => (
              <img key={index} src={src} alt={`Preview ${index}`} />
            ))}
          </div>
        </div> */}
        
        <div className="image-section">
        <label htmlFor="mainimage">Add Cover Image:</label>
        <input
          type="file"
          name="mainimage"
          id="mainimage"
          accept="image/*"
          onChange={handleChange}
          required
        />
        <div className="preview-container">
          {coverImagePreview && <img src={coverImagePreview} alt="Cover Preview" />}
        </div>
      </div>

        <div className="image-section">
          <label htmlFor="images">Upload Images:</label>
          <input type="file" name="images" id="images" accept="image/*" multiple onChange={handleChange} required />
          <div className="preview-container">
            {previewImages.map((src, index) => (
              <img key={index} src={src} alt={`Preview ${index}`} />
            ))}
          </div>
        </div>

        <button type="submit" className="submit-btn">Add Car</button>
      </form>
    </div>
  );
};

export default Addcars;
