import "../Hyderabad/Hyderabad.css"
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Footer from "../../Footer/Footer"
import { CalendarDays, CarFront, MapPin, Smartphone } from "lucide-react";

import vizag from "../../../assets/vizag.jpeg"

const Vizag = () => {

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 30 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: i * 0.05,
        ease: "easeOut",
      },
    }),
  };



  const containerVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.15,
      },
    },
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4 } }
  }

  return (
    <div className="homecontainer">
      <div className="carimg">
        <img src={vizag} className="background-image" />

        <motion.p
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="absolute bottom-4 left-4 text-white text-lg font-semibold"
        >
          EliteWheels offers the best self-drive car rentals in Vizag with affordable prices
        </motion.p>



      </div>

      <section className="rental-process-section">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          How to Rent a Car
        </motion.h2>

        <motion.p
          className="rental-process-subtext"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
        >
          EliteWheels makes hitting the road effortless—simply choose your car, reserve it, and drive whenever and wherever you need!
        </motion.p>

        <div className="rental-steps-wrapper">
          {[
            {
              icon: "https://cdn-icons-png.flaticon.com/512/2989/2989988.png",
              text: "Log onto Elite Wheels",
            },
            {
              icon: "https://cdn-icons-png.flaticon.com/512/2922/2922547.png",
              text: "Select city, date and time",
            },
            {
              icon: "https://cdn-icons-png.flaticon.com/512/743/743007.png",
              text: "Pick a car of your choice",
            },
            {
              icon: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
              text: "Explore your destinations",
            },
          ].map((step, index, arr) => (
            <React.Fragment key={index}>
              <motion.div
                className="rental-step"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 + index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="rental-icon-container">
                  <img src={step.icon} alt={step.text} />
                </div>
                <p className="rental-step-text">{step.text}</p>
              </motion.div>

              {index < arr.length - 1 && (
                <motion.div
                  className="rental-dotted-connector"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.2 }}
                  viewport={{ once: true }}
                  style={{ transformOrigin: "left" }}
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </section>


      <section className="car-rental-info">
        {[
          {
            title: "📄 Documents & Eligibility",
            desc: "Planning to rent a self-drive car in Vizag? Keep these documents ready:",
            items: [
              "✅ Valid Aadhar Card",
              "✅ Original Driving License",
              "✅ Passport for Foreigners/NRI (original only)",
            ],
          },
          {
            title: "🚗 Why Choose Elite Wheels?",
            desc: "Enjoy a seamless rental experience loaded with benefits:",
            items: [
              "💰 Reasonable Prices – Low security deposit & guaranteed savings.",
              "🕒 Flexible Rental Terms – Hourly, daily, or monthly options.",
              "🚙 Huge Car Fleet – From budget cars to luxury SUVs.",
              "📞 24/7 Customer Support – Always available for you.",
              "📱 Easy Booking – Through website.",
            ],
          },
          {
            title: "🧼 Safety & Hygiene Measures",
            desc: "Elite Wheels prioritizes your safety and comfort with strict hygiene standards:",
            items: [
              "🧽 Sanitization of Cars – Every car is cleaned and sanitized after each rental.",
              "🔧 Well-Maintained Cars – Regular servicing for a smooth and secure ride.",
              "🛡 Insurance & Emergency Support – Includes 24/7 roadside assistance and insurance coverage.",
            ],
          },
        ].map((block, index) => (
          <motion.div
            className="info-block"
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <h3>{block.title}</h3>
            <p>{block.desc}</p>
            <ul>
              {block.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </section>

      <div className="tourist-section">
        <h2>Top Tourist Attractions through Vizag Car Rental</h2>
        <div className="attraction-grid">

          <div className="attraction-card">
            <h4>RK Beach</h4>
            <p>Iconic beach perfect for evening strolls and sunrise views.</p>
          </div>
          <div className="attraction-card">
            <h4>Kailasagiri</h4>
            <p>Hilltop park with panoramic sea views and giant Shiva-Parvati statues.</p>
          </div>
          <div className="attraction-card">
            <h4>Yarada Beach</h4>
            <p>Secluded and scenic beach surrounded by lush hills.</p>
          </div>
          <div className="attraction-card">
            <h4>Submarine Museum</h4>
            <p>India’s first submarine museum inside the INS Kurusura.</p>
          </div>
          <div className="attraction-card">
            <h4>Rushikonda Beach</h4>
            <p>Adventure hotspot for jet skiing and surfing.</p>
          </div>
          <div className="attraction-card">
            <h4>Dolphin's Nose</h4>
            <p>Massive rock viewpoint resembling a dolphin’s nose.</p>
          </div>

          <div className="attraction-card">
            <h4>Borra Caves</h4>
            <p>Stunning limestone caves with stalactites and natural formations.</p>
          </div>
          <div className="attraction-card">
            <h4>Araku Valley</h4>
            <p>Picturesque hill station with tribal culture and coffee plantations.</p>
          </div>
          <div className="attraction-card">
            <h4>Katiki Waterfalls</h4>
            <p>Hidden waterfall trek near Borra Caves surrounded by dense forest.</p>
          </div>
          <div className="attraction-card">
            <h4>Simhachalam Temple</h4>
            <p>Ancient hilltop temple dedicated to Lord Narasimha.</p>
          </div>
          <div className="attraction-card">
            <h4>Thotlakonda</h4>
            <p>Ruins of an ancient Buddhist monastery with serene coastal views.</p>
          </div>
          <div className="attraction-card">
            <h4>Bheemili Beach</h4>
            <p>Colonial architecture meets calm beachside escape.</p>
          </div>
          <div className="attraction-card">
            <h4>Victory at Sea War Memorial</h4>
            <p>Tribute to naval heroes located on the RK Beach road.</p>
          </div>
          <div className="attraction-card">
            <h4>Vizag Zoo (Indira Gandhi Zoological Park)</h4>
            <p>Large zoo surrounded by hills and forest landscapes.</p>
          </div>
          <div className="attraction-card">
            <h4>Erra Matti Dibbalu (Red Sand Hills)</h4>
            <p>Rare red sand dunes near Bheemili offering unique photo ops.</p>
          </div>
          <div className="attraction-card">
            <h4>Gangavaram Beach</h4>
            <p>Peaceful, lesser-known beach with scenic rocky formations.</p>
          </div>
          <div className="attraction-card">
            <h4>Meadows of Lambasingi</h4>
            <p>Nicknamed "Andhra Kashmir" with foggy mornings and cool weather.</p>
          </div>
          <div className="attraction-card">
            <h4>Tyda Nature Camp</h4>
            <p>Eco-tourism spot with trekking, rock climbing, and nature walks.</p>
          </div>
          <div className="attraction-card">
            <h4>Annavaram</h4>
            <p>Famous temple town located near Vizag, ideal for a short trip.</p>
          </div>

        </div>
      </div>

      <motion.section
        className="why-choose-indusgo"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div className="why-card">
          <h2>
            Why Choose <span className="highlight">Elite Wheels</span> Car Rental Vizag?
          </h2>
          <p>
            <span className="highlight">Elite Wheels</span> self-drive car rental is economical and budget-friendly.
            Compared to taxis or ride-sharing, self-drive rentals give you complete freedom,
            and you can plan your trip as per your choice.
          </p>

          <motion.ul>
            {[
              "You have complete freedom in the choice of car models.",
              "We offer you immaculately clean and disinfected vehicles.",
              "Flexible booking timings as per your convenience.",
              "No time restriction or unwanted interaction with the drivers.",
              "No restriction on entertainment activities and travel time.",
              "Reasonable tariff with all-India permits.",
              "24/7 customer support and roadside assistance.",
            ].map((item, index) => (
              <motion.li key={index} variants={listItemVariants}>
                {item}
              </motion.li>
            ))}
          </motion.ul>

          <p>
            Book your Vizag car rental with <span className="highlight">Elite Wheels</span> and make your travel convenient,
            hassle-free, and enjoyable.
          </p>
        </motion.div>
      </motion.section>

      <Footer />




    </div>




  )
}


export default Vizag
