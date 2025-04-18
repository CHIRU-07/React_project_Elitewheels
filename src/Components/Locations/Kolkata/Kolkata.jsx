import "../Hyderabad/Hyderabad.css"
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Footer from "../../../Components/Footer/Footer"
import { CalendarDays, CarFront, MapPin, Smartphone } from "lucide-react";

import kolkata from "../../../assets/kolkata.jpg"


const Kolkata = () => {

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
                <img src={kolkata} className="background-image" />

                <motion.p
                    initial={{ opacity: 0, y: 70 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="absolute bottom-4 left-4 text-white text-lg font-semibold"
                >
                    EliteWheels offers the best self-drive car rentals in Kolkata with affordable prices
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
                        desc: "Planning to rent a self-drive car in Kolkata? Keep these documents ready:",
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
                <h2>Top Tourist Attractions through Kolkata Car Rental</h2>
                <div className="attraction-grid">

                    <div className="attraction-card">
                        <h4>Victoria Memorial</h4>
                        <p>Iconic white marble monument and museum.</p>
                    </div>
                    <div className="attraction-card">
                        <h4>Howrah Bridge</h4>
                        <p>Historic cantilever bridge over the Hooghly River.</p>
                    </div>
                    <div className="attraction-card">
                        <h4>Indian Museum</h4>
                        <p>Oldest and largest museum in India with rare artifacts.</p>
                    </div>
                    <div className="attraction-card">
                        <h4>Kalighat Temple</h4>
                        <p>Famous pilgrimage site dedicated to Goddess Kali.</p>
                    </div>
                    <div className="attraction-card">
                        <h4>Prinsep Ghat</h4>
                        <p>Colonial riverside promenade with a scenic view.</p>
                    </div>
                    <div className="attraction-card">
                        <h4>Marble Palace</h4>
                        <p>Historic mansion filled with art and antiques.</p>
                    </div>
                    <div className="attraction-card">
                        <h4>Science City</h4>
                        <p>Interactive science museum and amusement center.</p>
                    </div>
                    <div className="attraction-card">
                        <h4>Belur Math</h4>
                        <p>Headquarters of Ramakrishna Mission, peaceful and spiritual.</p>
                    </div>
                    <div className="attraction-card">
                        <h4>St. Paul's Cathedral</h4>
                        <p>Gothic-style Anglican cathedral with beautiful interiors.</p>
                    </div>
                    <div className="attraction-card">
                        <h4>Birla Planetarium</h4>
                        <p>One of the largest planetariums in Asia.</p>
                    </div>
                    <div className="attraction-card">
                        <h4>Alipore Zoo</h4>
                        <p>Oldest zoological park in India with diverse species.</p>
                    </div>
                    <div className="attraction-card">
                        <h4>Eco Park</h4>
                        <p>Urban park with lake views, gardens, and activities.</p>
                    </div>
                    <div className="attraction-card">
                        <h4>Nicco Park</h4>
                        <p>Amusement park with rides and water attractions.</p>
                    </div>
                    <div className="attraction-card">
                        <h4>Dakshineswar Kali Temple</h4>
                        <p>Renowned temple dedicated to Goddess Kali.</p>
                    </div>
                    <div className="attraction-card">
                        <h4>Mother House</h4>
                        <p>Home of Mother Teresa and her charitable work.</p>
                    </div>
                    <div className="attraction-card">
                        <h4>Park Street</h4>
                        <p>Buzzing area for food, nightlife, and shopping.</p>
                    </div>
                    <div className="attraction-card">
                        <h4>South Park Street Cemetery</h4>
                        <p>Historic colonial-era cemetery with Gothic tombs.</p>
                    </div>
                    <div className="attraction-card">
                        <h4>Rabinrda Sarovar</h4>
                        <p>Serene lake surrounded by greenery and walking paths.</p>
                    </div>
                    <div className="attraction-card">
                        <h4>Salt Lake City (Bidhannagar)</h4>
                        <p>Planned township with shopping, eateries, and offices.</p>
                    </div>
                    <div className="attraction-card">
                        <h4>Sealdah Market</h4>
                        <p>Local hub for fresh produce and everyday goods.</p>
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
                        Why Choose <span className="highlight">Elite Wheels</span> Car Rental Kolkata?
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
                        Book your Kolkata car rental with <span className="highlight">Elite Wheels</span> and make your travel convenient,
                        hassle-free, and enjoyable.
                    </p>
                </motion.div>
            </motion.section>

            <Footer />




        </div>




    )
}

export default Kolkata
