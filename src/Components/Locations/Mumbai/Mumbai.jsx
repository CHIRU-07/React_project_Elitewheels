import "../Hyderabad/Hyderabad.css"
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Footer from "../../../Components/Footer/Footer"
import { CalendarDays, CarFront, MapPin, Smartphone } from "lucide-react";

import mumbai from "../../../assets/mumbai.jpg"


const Mumbai = () => {


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
                <img src={mumbai} className="background-image" />

                <motion.p
                    initial={{ opacity: 0, y: 70 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="absolute bottom-4 left-4 text-white text-lg font-semibold"
                >
                    EliteWheels offers the best self-drive car rentals in Mumbai with affordable prices
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
                        desc: "Planning to rent a self-drive car in Mumbai? Keep these documents ready:",
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
                <h2>Top Tourist Attractions through Mumbai Car Rental</h2>
                <div className="attraction-grid">

                    <div className="attraction-card">
                        <h4>Gateway of India</h4>
                        <p>Iconic arch monument on the waterfront in Colaba.</p>
                    </div>
                    <div className="attraction-card">
                        <h4>Marine Drive</h4>
                        <p>Scenic seaside promenade known as the Queen’s Necklace.</p>
                    </div>
                    <div className="attraction-card">
                        <h4>Chhatrapati Shivaji Terminus</h4>
                        <p>Historic railway station and UNESCO World Heritage Site.</p>
                    </div>
                    <div className="attraction-card">
                        <h4>Elephanta Caves</h4>
                        <p>Ancient rock-cut temples on Elephanta Island.</p>
                    </div>
                    <div className="attraction-card">
                        <h4>Juhu Beach</h4>
                        <p>Popular beach destination with street food and sunsets.</p>
                    </div>
                    <div className="attraction-card">
                        <h4>Bandra-Worli Sea Link</h4>
                        <p>Modern engineering marvel connecting western suburbs.</p>
                    </div>
                    <div className="attraction-card">
                        <h4>Haji Ali Dargah</h4>
                        <p>Religious and architectural marvel in the Arabian Sea.</p>
                    </div>
                    <div className="attraction-card">
                        <h4>Siddhivinayak Temple</h4>
                        <p>Famous temple dedicated to Lord Ganesha.</p>
                    </div>
                    <div className="attraction-card">
                        <h4>Colaba Causeway</h4>
                        <p>Shopping street known for street fashion and cafes.</p>
                    </div>
                    <div className="attraction-card">
                        <h4>Chor Bazaar</h4>
                        <p>Famous for antiques, vintage items, and rare finds.</p>
                    </div>
                    <div className="attraction-card">
                        <h4>Film City</h4>
                        <p>Bollywood film production hub with studio tours.</p>
                    </div>
                    <div className="attraction-card">
                        <h4>Powai Lake</h4>
                        <p>Serene artificial lake near the IIT Mumbai campus.</p>
                    </div>
                    <div className="attraction-card">
                        <h4>Sanjay Gandhi National Park</h4>
                        <p>Green escape with nature trails, caves, and safaris.</p>
                    </div>
                    <div className="attraction-card">
                        <h4>Nehru Planetarium</h4>
                        <p>Interactive science and astronomy center.</p>
                    </div>
                    <div className="attraction-card">
                        <h4>Mani Bhavan</h4>
                        <p>Gandhi’s residence and now a museum of his life.</p>
                    </div>
                    <div className="attraction-card">
                        <h4>Global Vipassana Pagoda</h4>
                        <p>Peaceful meditation hall and architectural gem.</p>
                    </div>
                    <div className="attraction-card">
                        <h4>Worli Sea Face</h4>
                        <p>Tranquil spot with a view of the Arabian Sea and skyline.</p>
                    </div>
                    <div className="attraction-card">
                        <h4>Kala Ghoda</h4>
                        <p>Cultural neighborhood known for arts and festivals.</p>
                    </div>
                    <div className="attraction-card">
                        <h4>Girgaon Chowpatty</h4>
                        <p>Classic Mumbai beach ideal for food and festivals.</p>
                    </div>
                    <div className="attraction-card">
                        <h4>High Street Phoenix</h4>
                        <p>Luxury shopping and entertainment destination.</p>
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
                        Why Choose <span className="highlight">Elite Wheels</span> Car Rental Mumbai?
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
                        Book your Mumbai car rental with <span className="highlight">Elite Wheels</span> and make your travel convenient,
                        hassle-free, and enjoyable.
                    </p>
                </motion.div>
            </motion.section>

            <Footer />




        </div>




    )
}

export default Mumbai
