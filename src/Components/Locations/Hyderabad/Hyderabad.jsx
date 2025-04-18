import "./Hyderabad.css"
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Footer from "../../../Components/Footer/Footer"


import charminar from "../../../assets/charminar.jpeg"


const Hyderabad = () => {

    const cardVariants = {
        hidden: { opacity: 0, scale: 0.9, y: 30 },
        visible: (i) => ({
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                duration: 0.3,
                ease: "easeOut",
            },
        }),
    };

    const attractions = [
        { title: "Uppal", desc: "Commercial and residential complex." },
        { title: "Manikonda", desc: "Large IT complex and corporate offices." },
        { title: "Kondapur", desc: "Shopping and entertainment hub." },
        { title: "Gachibowli", desc: "Popular tech and business park area." },
        { title: "Shamshabad", desc: "Home to Rajiv Gandhi International Airport." },
        { title: "Kukatpally", desc: "Busy commercial and residential locality." },
        { title: "Golconda Fort", desc: "Historic fort amidst natural beauty." },
        { title: "Charminar", desc: "Iconic monument representing Hyderabad’s heritage." },
        { title: "Qutb Shahi Tombs", desc: "Architectural elegance of Qutb Shahi dynasty." },
        { title: "Mecca Masjid", desc: "One of India's largest mosques." },
        { title: "Chowmahalla Palace", desc: "A royal palace rich in history." },
        { title: "Salar Jung Museum", desc: "Museum with rare artifacts and antiques." },
        { title: "Paigah Tombs", desc: "Intricately designed royal tombs." },
        { title: "Birla Mandir", desc: "Beautiful temple with panoramic city views." },
        { title: "Hussain Sagar Lake", desc: "Lakeside escape with boating options." },
        { title: "NTR Gardens", desc: "Recreational park in the heart of the city." },
        { title: "Botanical Gardens", desc: "Serene space with diverse flora." },
        { title: "Hatiyan Ka Jhad", desc: "Historical tree with expansive canopy." },
        { title: "Ananthagiri Hills", desc: "Trekking and nature retreat destination." },
        { title: "Hampi", desc: "UNESCO World Heritage site of ancient ruins." },
        { title: "Ramoji Film City", desc: "World's largest film studio complex." },
        { title: "Jal Vihar", desc: "Popular family-friendly water park." },
        { title: "Lumbini Park", desc: "Lakeside park with laser light shows." },
        { title: "Hyderabad International Airport", desc: "Convenient car pickup for travelers." },
    ];

    const containerVariants = {
        hidden: { opacity: 0, y: 60 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut",
                when: "beforeChildren",
                staggerChildren: 0.15,
            },
        },
    };

    const listItemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.3 } }
    }

    return (
        <div className="homecontainer">
            <div className="carimg">
                <img src={charminar} className="background-image" />

                <motion.p
                    initial={{ opacity: 0, y: 70 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="absolute bottom-4 left-4 text-white text-lg font-semibold"
                >
                    EliteWheels offers the best self-drive car rentals in Hyderabad with affordable prices
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
                        desc: "Planning to rent a self-drive car in Hyderabad? Keep these documents ready:",
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
                <h2>Top Tourist Attractions through Hyderabad Car Rental</h2>
                <div className="attraction-grid">
                    {attractions.map((item, i) => (
                        <motion.div
                            className="attraction-card"
                            key={i}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            custom={i}
                            viewport={{ once: true }}
                        >
                            <h4>{item.title}</h4>
                            <p>{item.desc}</p>
                        </motion.div>
                    ))}
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
                        Why Choose <span className="highlight">Elite Wheels</span> Car Rental Hyderabad?
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
                        Book your Hyderabad car rental with <span className="highlight">Elite Wheels</span> and make your travel convenient,
                        hassle-free, and enjoyable.
                    </p>
                </motion.div>
            </motion.section>

            <Footer />




        </div>




    )
}

export default Hyderabad
