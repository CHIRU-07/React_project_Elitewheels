import "../Hyderabad/Hyderabad.css"
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Footer from "../../../Components/Footer/Footer"
import { CalendarDays, CarFront, MapPin, Smartphone } from "lucide-react";

import chennai from "../../../assets/chennai.jpg"


const Chennai = () => {

   
   

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
                <img src={chennai} className="background-image" />

                <motion.p
                    initial={{ opacity: 0, y: 70 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="absolute bottom-4 left-4 text-white text-lg font-semibold"
                >
                    EliteWheels offers the best self-drive car rentals in Chennai with affordable prices
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
  <h2>Top Tourist Attractions through Chennai Car Rental</h2>
  <div className="attraction-grid">

    <div className="attraction-card">
      <h4>Marina Beach</h4>
      <p>One of the longest urban beaches in the world, perfect for a relaxing stroll.</p>
    </div>
    <div className="attraction-card">
      <h4>Kapaleeshwarar Temple</h4>
      <p>Dravidian-style temple dedicated to Lord Shiva, rich in history and architecture.</p>
    </div>
    <div className="attraction-card">
      <h4>Fort St. George</h4>
      <p>Historic British fort housing a museum and Tamil Nadu's legislative assembly.</p>
    </div>
    <div className="attraction-card">
      <h4>Santhome Basilica</h4>
      <p>Gothic-style Roman Catholic church built over the tomb of St. Thomas.</p>
    </div>
    <div className="attraction-card">
      <h4>Elliot’s Beach (Besant Nagar)</h4>
      <p>Serene beach with a chill vibe and cozy cafes along the shore.</p>
    </div>
    <div className="attraction-card">
      <h4>Government Museum</h4>
      <p>Home to ancient bronze sculptures, natural history, and archaeological exhibits.</p>
    </div>

    <div className="attraction-card">
      <h4>Valluvar Kottam</h4>
      <p>Monument dedicated to the Tamil poet Thiruvalluvar with a massive auditorium.</p>
    </div>
    <div className="attraction-card">
      <h4>Guindy National Park</h4>
      <p>Urban forest with wildlife and a children’s park in the heart of the city.</p>
    </div>
    <div className="attraction-card">
      <h4>Mylapore</h4>
      <p>Cultural hotspot known for classical music, temples, and heritage.</p>
    </div>
    <div className="attraction-card">
      <h4>Birla Planetarium</h4>
      <p>Science and space exploration center perfect for kids and adults alike.</p>
    </div>
    <div className="attraction-card">
      <h4>Mahabalipuram</h4>
      <p>Famous for shore temples and ancient rock-cut monuments, just an hour from Chennai.</p>
    </div>
    <div className="attraction-card">
      <h4>Crocodile Bank</h4>
      <p>Wildlife park focused on crocodile conservation, ideal for families.</p>
    </div>
    <div className="attraction-card">
      <h4>Arignar Anna Zoological Park (Vandalur Zoo)</h4>
      <p>One of India’s largest zoos, home to over 2,000 animals.</p>
    </div>
    <div className="attraction-card">
      <h4>Thiruvanmiyur Beach</h4>
      <p>Less crowded than Marina, a peaceful place for locals and joggers.</p>
    </div>
    <div className="attraction-card">
      <h4>Pulicat Lake</h4>
      <p>A bird sanctuary and serene weekend getaway near Chennai.</p>
    </div>
    <div className="attraction-card">
      <h4>Ashtalakshmi Temple</h4>
      <p>Temple by the sea dedicated to the eight forms of Goddess Lakshmi.</p>
    </div>
    <div className="attraction-card">
      <h4>ISKCON Temple Chennai</h4>
      <p>Peaceful spiritual complex with art, food court, and gift shops.</p>
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
      Why Choose <span className="highlight">Elite Wheels</span> Car Rental Chennai?
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
      Book your Chennai car rental with <span className="highlight">Elite Wheels</span> and make your travel convenient,
      hassle-free, and enjoyable.
    </p>
  </motion.div>
</motion.section>

            <Footer />




        </div>




    )
}

export default Chennai
