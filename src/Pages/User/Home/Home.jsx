import React,{useEffect, useState} from "react";
import { motion } from "framer-motion";
import Footer from "../../../Components/Footer/Footer"
import Alert from '@mui/material/Alert';


import homeCarImage from "../../../assets/homecarimg.avif";
import carsvg from "../../../assets/carsvg.svg"
import pricesvg from "../../../assets/pricesvg.svg"
import supportsvg from "../../../assets/supportsvg.svg"
import calendersvg from "../../../assets/calendersvg.svg"
import iconengine from "../../../assets/iconengine.svg"
import icinsure from "../../../assets/icinsure.svg"
import flexiblebooking from "../../../assets/flexiblebooking.svg";
import affordablepricing from "../../../assets/affordablepricing.svg"
import ecofriendly from "../../../assets/ecofriendly.svg"
import mileagecar from "../../../assets/mileagecar.svg"
import carinside from "../../../assets/carinside.jpg"
import carinsidesteering from "../../../assets/carinsidesteering.jpg"


import "./Home.css";

export default function Home() {

  const [alert,setAlert]=useState(true)

 const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const listItemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const imageVariants = {
    hidden: { y: 100, opacity: 0 },
    halfway: { y: 50, opacity: 0.7 },
    visible: { y: 0, opacity: 1 },
  };


  // setTimeout(() => {
  //   setAlert(false); // Hide alert after 2 seconds
  //   navigate("/Home"); // Redirect user
  // }, 2500);


return (
    <div className="homecontainer">

   {/* {alert && <Alert severity="success" sx={{ fontSize: "1rem",textAlign:"right" }}>This is a success Alert.</Alert>} */}
    
    <div className="carimg">
    <img src={homeCarImage} className="background-image"/>
    
    <motion.p
        initial={{ opacity: 0, y: 70 }} 
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }} 
        viewport={{ once: true }}
        className="absolute bottom-4 left-4 text-white text-lg font-semibold"
      >
        Quick and affordable car rentals
      </motion.p>


    
    </div>
  
   


    <div className="features">
     
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="flexible text-center text-xl font-semibold mb-6"
      >
        Enjoy flexibility and unbeatable rates with our city car rentals
      </motion.p>

      <div className="featurescards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
       
        {[ 
          { img: carsvg, title: "Well maintained vehicles", text: "All our cars are well-maintained and regularly serviced, ensuring safe and smooth driving." },
          { img: calendersvg, title: "Easy online booking", text: "Book your car in minutes with our user-friendly online platform. Fast, simple, and convenient!" },
          { img: pricesvg, title: "Affordable pricing", text: "Enjoy competitive rates with no hidden fees. Rent the perfect car without breaking the bank." },
          { img: supportsvg, title: "24/7 support", text: "We’re here to assist you anytime, anywhere. Drive with peace of mind knowing help is just a call away." }
        ].map((card, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.9, delay: index * 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="fcard p-4 border rounded-lg shadow-lg bg-white"
          >
            <img src={card.img} alt={card.title} className="w-12 h-12 mb-4" />
            <p id="ftitle" className="text-lg font-semibold mb-2">{card.title}</p>
            <p className="text-gray-600">{card.text}</p>
          </motion.div>
        ))}
      </div>
    </div>

    <div className="bookingsteps">
    <video 
        src="https://videos.pexels.com/video-files/1572442/1572442-uhd_2560_1440_24fps.mp4" 
        autoPlay 
        muted 
        loop 
         
        playsInline 
        
      />
      
      <div className="stepcontainer">
      <p className="step-title">Rent your car in 3 easy steps</p>
      <div className="steps">
        {[
          {
            id: 1,
            title: "Choose your car",
            process:
              "Browse our wide selection of vehicles, from compact city cars to spacious SUVs. Pick the perfect ride that suits your needs.",
          },
          {
            id: 2,
            title: "Book online",
            process:
              "Reserve your car in just a few clicks with our user-friendly booking system. Select your dates, and locations, and confirm your reservation instantly.",
          },
          {
            id: 3,
            title: "Pick up & drive",
            process:
              "Head to the nearest pickup location and grab your keys. Enjoy a smooth ride through the city with our reliable and well-maintained vehicles.",
          },
        ].map((card) => (
          <div key={card.id} className="step">
           
            <div className="step-number">{card.id}</div>
            
            <div className="step-content">
              <h3 className="step-heading">{card.title}</h3>
              <p className="step-description">{card.process}</p>
            </div>
          </div>
        ))}
      </div>
    </div>


    </div>

    <div className="modernreliableamenities">
      <div className="modernamenities">
        <p className="ma">Modern Amenities</p>
        <p className="reliable">Reliable Road Power</p>
      </div>

      <div className="amenities">
        
        <motion.div 
          className="l_a"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            visible: { 
              transition: { staggerChildren: 0.2 } 
            }
          }}
        >
          {[
            { id: 1, image: iconengine, text: "GPS Navigation" },
            { id: 2, image: icinsure, text: "Insurance Coverage" },
            { id: 3, image: flexiblebooking, text: "Flexible Booking" },
            { id: 4, image: affordablepricing, text: "Affordable Pricing" },
            { id: 5, image: ecofriendly, text: "Eco-Friendly" },
            { id: 6, image: mileagecar, text: "Unlimited Mileage" },
          ].map((item) => (
            <motion.div 
              key={item.id}
              className="amenity"
              variants={listItemVariants}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <img src={item.image} alt={item.text} />
              <p>{item.text}</p>
              <p>&#10003;</p>
            </motion.div>
          ))}
        </motion.div>

       
        <motion.div
          className="l_m"
          initial="hidden"
          whileInView={["halfway", "visible"]}
          viewport={{ once: true, amount: 0.2 }}
          variants={imageVariants}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img src={carinsidesteering} alt="Car Inside Steering" />
        </motion.div>

        
        <motion.div
          className="l_r"
          initial="hidden"
          whileInView={["halfway", "visible"]}
          viewport={{ once: true, amount: 0.2 }}
          variants={imageVariants}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <img src={carinside} alt="Car Inside" />
        </motion.div>
      </div>
    </div>
    
    <Footer/>

    </div>
  );
}
