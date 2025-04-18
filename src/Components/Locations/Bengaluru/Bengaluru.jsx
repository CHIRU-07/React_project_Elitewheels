import "../Hyderabad/Hyderabad.css"
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Footer from "../../../Components/Footer/Footer"
import { CalendarDays, CarFront, MapPin, Smartphone } from "lucide-react";

import Banglore from "../../../assets/bengaluru.jpeg"


const Bengaluru = () => {

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
                <img src={Banglore} className="background-image" />

                <motion.p
                    initial={{ opacity: 0, y: 70 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="absolute bottom-4 left-4 text-white text-lg font-semibold"
                >
                    Rent a car in Bangalore today and enjoy the convenience and freedom to explore on your terms.
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
                        desc: "Planning to rent a self-drive car in Bengaluru? Keep these documents ready:",
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
                <h2>Top Tourist Attractions through Bengaluru Car Rental</h2>
                <div className="attraction-grid">

                    <div className="attraction-card">
                        <h4>MG Road</h4>
                        <p>Shopping and nightlife hub in the heart of the city.</p>
                    </div>
                    <div className="attraction-card">
                        <h4>Whitefield</h4>
                        <p>IT hub with modern cafes and tech parks.</p>
                    </div>
                    <div className="attraction-card">
                        <h4>Electronic City</h4>
                        <p>Major tech corridor with corporate offices.</p>
                    </div>
                    <div className="attraction-card">
                        <h4>Koramangala</h4>
                        <p>Trendy area with pubs, restaurants, and startups.</p>
                    </div>
                    <div className="attraction-card">
                        <h4>Indiranagar</h4>
                        <p>Buzzing nightlife and cultural neighborhood.</p>
                    </div>
                    <div className="attraction-card">
                        <h4>Hebbal</h4>
                        <p>Known for lakes and access to airport road.</p>
                    </div>

                    <div className="attraction-card">
                        <h4>Lalbagh Botanical Garden</h4>
                        <p>Expansive garden with rare plant species.</p>
                    </div>
                    <div className="attraction-card">
                        <h4>Bannerghatta National Park</h4>
                        <p>Wildlife safari and nature reserve.</p>
                    </div>
                    <div className="attraction-card">
                        <h4>Cubbon Park</h4>
                        <p>Green lung of Bengaluru with colonial charm.</p>
                    </div>
                    <div className="attraction-card">
                        <h4>Bangalore Palace</h4>
                        <p>Historic royal palace with stunning architecture.</p>
                    </div>
                    <div className="attraction-card">
                        <h4>ISKCON Temple</h4>
                        <p>Spiritual escape with beautiful architecture.</p>
                    </div>
                    <div className="attraction-card">
                        <h4>Vidhana Soudha</h4>
                        <p>Seat of Karnataka's legislature, a grand building.</p>
                    </div>
                    <div className="attraction-card">
                        <h4>UB City</h4>
                        <p>Luxury shopping and fine dining destination.</p>
                    </div>
                    <div className="attraction-card">
                        <h4>Wonderla</h4>
                        <p>Popular amusement and water park near the city.</p>
                    </div>
                    <div className="attraction-card">
                        <h4>Nandi Hills</h4>
                        <p>Weekend getaway spot with sunrise views.</p>
                    </div>
                    <div className="attraction-card">
                        <h4>Chikmagalur</h4>
                        <p>Coffee plantations and scenic landscapes.</p>
                    </div>
                    <div className="attraction-card">
                        <h4>Shivanasamudra Falls</h4>
                        <p>Gorgeous twin waterfalls near Bengaluru.</p>
                    </div>
                    <div className="attraction-card">
                        <h4>Coorg</h4>
                        <p>Hill station known for coffee and nature trails.</p>
                    </div>
                    <div className="attraction-card">
                        <h4>Hampi</h4>
                        <p>Ancient ruins and cultural UNESCO site.</p>
                    </div>
                    <div className="attraction-card">
                        <h4>Mysore</h4>
                        <p>Royal city with palaces, zoo, and Chamundi Hills.</p>
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
                        Why Choose <span className="highlight">Elite Wheels</span> Car Rental Bengaluru?
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
                        Book your Bengaluru car rental with <span className="highlight">Elite Wheels</span> and make your travel convenient,
                        hassle-free, and enjoyable.
                    </p>
                </motion.div>
            </motion.section>

            <Footer />



        </div>


    )
}

export default Bengaluru
