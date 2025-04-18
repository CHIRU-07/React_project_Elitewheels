import "../Hyderabad/Hyderabad.css"
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Footer from "../../../Components/Footer/Footer"
import { CalendarDays, CarFront, MapPin, Smartphone } from "lucide-react";

import delhi from "../../../assets/delhi.jpeg"


const Delhi = () => {

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
        visible: { opacity: 1, x: 0, transition: { duration: 0.4}}
      }

    return (
        <div className="homecontainer">
            <div className="carimg">
                <img src={delhi} className="background-image" />

                <motion.p
                    initial={{ opacity: 0, y: 70 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="absolute bottom-4 left-4 text-white text-lg font-semibold"
                >
                    EliteWheels offers the best self-drive car rentals in Delhi with affordable prices
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
                        desc: "Planning to rent a self-drive car in Chennai? Keep these documents ready:",
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
  <h2>Top Tourist Attractions through Delhi Car Rental</h2>
  <div className="attraction-grid">

    <div className="attraction-card">
      <h4>India Gate</h4>
      <p>War memorial and iconic national monument.</p>
    </div>
    <div className="attraction-card">
      <h4>Red Fort</h4>
      <p>Mughal-era fort and UNESCO World Heritage Site.</p>
    </div>
    <div className="attraction-card">
      <h4>Qutub Minar</h4>
      <p>Tallest brick minaret in the world, built in 1193.</p>
    </div>
    <div className="attraction-card">
      <h4>Lotus Temple</h4>
      <p>Baha'i House of Worship known for its flower-like shape.</p>
    </div>
    <div className="attraction-card">
      <h4>Humayun’s Tomb</h4>
      <p>Beautiful Mughal architecture and historical tomb.</p>
    </div>
    <div className="attraction-card">
      <h4>Akshardham Temple</h4>
      <p>Grand spiritual complex with exhibitions and gardens.</p>
    </div>
    <div className="attraction-card">
      <h4>Chandni Chowk</h4>
      <p>Historic market area for food, shopping, and culture.</p>
    </div>
    <div className="attraction-card">
      <h4>Jama Masjid</h4>
      <p>One of the largest and most stunning mosques in India.</p>
    </div>
    <div className="attraction-card">
      <h4>Rashtrapati Bhavan</h4>
      <p>Official residence of the President of India.</p>
    </div>
    <div className="attraction-card">
      <h4>Raj Ghat</h4>
      <p>Memorial dedicated to Mahatma Gandhi.</p>
    </div>
    <div className="attraction-card">
      <h4>Connaught Place</h4>
      <p>Commercial and business hub of New Delhi.</p>
    </div>
    <div className="attraction-card">
      <h4>Hauz Khas Village</h4>
      <p>Trendy area with cafes, nightlife, and ancient ruins.</p>
    </div>
    <div className="attraction-card">
      <h4>Lodhi Gardens</h4>
      <p>Historic park with tombs and lush greenery.</p>
    </div>
    <div className="attraction-card">
      <h4>Sarojini Nagar</h4>
      <p>Popular market for affordable fashion and accessories.</p>
    </div>
    <div className="attraction-card">
      <h4>Dilli Haat</h4>
      <p>Cultural market with crafts, cuisines, and performances.</p>
    </div>
    <div className="attraction-card">
      <h4>Purana Qila</h4>
      <p>Ancient fort showcasing Delhi’s deep history.</p>
    </div>
    <div className="attraction-card">
      <h4>ISKCON Temple</h4>
      <p>Spiritual and serene temple dedicated to Lord Krishna.</p>
    </div>
    <div className="attraction-card">
      <h4>Delhi Zoo</h4>
      <p>Home to diverse animal species near Old Fort.</p>
    </div>
    <div className="attraction-card">
      <h4>National Museum</h4>
      <p>Extensive collection of India’s rich history and heritage.</p>
    </div>
    <div className="attraction-card">
      <h4>Safdarjung Tomb</h4>
      <p>Mughal-style garden tomb and architectural marvel.</p>
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
      Why Choose <span className="highlight">Elite Wheels</span> Car Rental Che?
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
      Book your Che car rental with <span className="highlight">Elite Wheels</span> and make your travel convenient,
      hassle-free, and enjoyable.
    </p>
  </motion.div>
</motion.section>

            <Footer />




        </div>




    )
}

export default Delhi
