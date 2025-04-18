import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from "../../../Firebaseconfig";
import { onValue ,ref} from 'firebase/database';

import  './Cars.css';


import luggagesvg from "../../../assets/luggagesvg.svg";
import gearicon from "../../../assets/gearicon.svg";
import petroldabba from "../../../assets/petroldabba.svg";
import carseats from "../../../assets/carseats.svg"



const Cars = () => {
   const navigate=useNavigate()  
  
    const [searchedcars,setSearchedCars]=useState({})
    const [totaldata,setTotaldata]=useState([])
    const [carbyloc,setCarsByLoc]=useState([])
    const [duration, setDuration] = useState(null);
    const [filters, setFilters] = useState({
      segment: [],
      fuel: [],
      transmission: [],
      seating: [],
     
    });
  


    useEffect(()=>{
      const carsRef=ref( db, "cars");

      const unsubscribe = onValue(carsRef,(snapshot)=>{
        if(snapshot.exists()){
         const response=snapshot.val()
         setTotaldata(Object.values(response))
        }
        else{
            console.log("No data available")
        }
      })
      return ()=> unsubscribe()
      
    },[])

    useEffect(()=>{
     const singlecar=JSON.parse(sessionStorage.getItem("carsearch"))
     setSearchedCars(singlecar)
    
    },[])

    useEffect(() => {
        if (totaldata.length > 0 && searchedcars.locname) {
            const filtereddata = totaldata.filter(x => x.location === searchedcars.locname && x.bookingstatus==='true');
           setCarsByLoc(filtereddata);
        }
        if (searchedcars?.pickuptime && searchedcars?.droptime) {
          calculateDuration(searchedcars.pickuptime, searchedcars.droptime);
        }
    }, [totaldata, searchedcars]); 

    const calculateDuration = (pickup, dropoff) => {
      const pickupTime = new Date(pickup);
      const dropTime = new Date(dropoff);
  
      if (dropTime <= pickupTime) {
        setDuration(null); 
        return;
      }
  
      const diffMs = dropTime - pickupTime;
      const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
  
      setDuration({ days, hours, minutes });
    };


    const handleCheckboxChange = (category, value) => {
      setFilters((prevFilters) => {
          const categoryFilters = prevFilters[category];
          const updatedFilters = categoryFilters.includes(value)
              ? categoryFilters.filter((item) => item !== value) 
              : [...categoryFilters, value];
  
          const newFilters = { ...prevFilters, [category]: updatedFilters };
  
          applyFilters(newFilters);
          return newFilters;
      });
  };

  const sortCars = (order) => {
    const sortedCars = [...carbyloc].sort((a, b) => {
      return order === "low-high"
        ? a.pricePerDay - b.pricePerDay
        : b.pricePerDay - a.pricePerDay;
    });
    setCarsByLoc(sortedCars);
  };
    
      const clearAllFilters = () => {
        setFilters({
          segment: [],
          models: [],
          fuel: [],
          transmission: [],
          seating: [],
          luggage: [],
        });
      };
    
      const applyFilters = (newFilters) => {
        const filteredData = totaldata.filter(car => {  
            const locationMatch = car.location === searchedcars.locname;
            const bookingMatch = car.bookingstatus === 'true'; // Ensure only available cars are shown
            const segmentMatch = newFilters.segment.length === 0 || newFilters.segment.includes(car.type);
            const fuelMatch = newFilters.fuel.length === 0 || newFilters.fuel.includes(car.fuelType);
            const transmissionMatch = newFilters.transmission.length === 0 || newFilters.transmission.includes(car.gearbox);
            const seatingMatch = newFilters.seating.length === 0 || 
                     newFilters.seating.includes(car.seats);
    
            return locationMatch && bookingMatch && segmentMatch && fuelMatch && transmissionMatch && seatingMatch;
        });
    
        // If no filters are applied, show all available cars at that location
        if (
            newFilters.segment.length === 0 &&
            newFilters.fuel.length === 0 &&
            newFilters.transmission.length === 0 &&
            newFilters.seating.length === 0
        ) {
            setCarsByLoc(totaldata.filter(car => car.location === searchedcars.locname && car.bookingstatus === 'true'));
        } else {
            setCarsByLoc(filteredData);
        }
    };
    

   
    console.log(totaldata,"totalcars")
    console.log(searchedcars,"searched cars")
    console.log(carbyloc,"cars by location")
    console.log(duration,"time duration")

  return (
   
      
      <div className='parent'>
        <div className="filterContainer">
      <div className="filterHeader">
        <button className="filterToggle">☰ Filter</button>
        <button onClick={clearAllFilters} className="clearAll">Clear All</button>
      </div>

      <div className="filterSection">
        <h3>Segment</h3>
       
       <div className='checkboxes'>
       <input
            type="checkbox"
            name="segment"
            value="Sedan"
            checked={filters.segment.includes('Sedan')}
            onChange={() => handleCheckboxChange('segment', 'Sedan')}
          />
        <label> Sedan</label>
       </div>
        
       <div className='checkboxes'>
        <input
            type="checkbox"
            name="segment"
            value="Hatchback"
            checked={filters.segment.includes('Hatchback')}
            onChange={() => handleCheckboxChange('segment', 'Hatchback')}
          />
        <label> Hatchback </label>
       </div>
        
      <div className='checkboxes'>
      <input
            type="checkbox"
            name="segment"
            value="SUV"
            checked={filters.segment.includes('SUV')}
            onChange={() => handleCheckboxChange('segment', 'SUV')}
          />
        <label>SUV</label>
      </div>
      </div>

      

      <div className="filterSection">
        <h3>Fuel Type</h3>

        <div className='checkboxes'>
        <input
            type="checkbox"
            name="fuel"
            value="Petrol"
            checked={filters.fuel.includes('Petrol')}
            onChange={() => handleCheckboxChange('fuel', 'Petrol')}
          />
        <label> Petrol</label>
        </div>
        
        <div className='checkboxes'>
        <input
            type="checkbox"
            name="fuel"
            value="Diesel"
            checked={filters.fuel.includes('Diesel')}
            onChange={() => handleCheckboxChange('fuel', 'Diesel')}
          />
        <label> Diesel</label>
        </div>

        <div className='checkboxes'>
        <input
            type="checkbox"
            name="fuel"
            value="Electric"
            checked={filters.fuel.includes('Electric')}
            onChange={() => handleCheckboxChange('fuel', 'Electric')}
          />
        <label>Electric</label>
        </div>
      </div>

      <div className="filterSection">
        <h3>Transmission Type</h3>

       <div className='checkboxes'>
       <input
            type="checkbox"
            name="transmission"
            value="Manual"
            checked={filters.transmission.includes('Manual')}
            onChange={() => handleCheckboxChange('transmission', 'Manual')}
          />
        <label>Manual</label>
        </div>

      <div className='checkboxes'>
        <input
            type="checkbox"
            name="transmission"
            value="Automatic"
            checked={filters.transmission.includes('Automatic')}
            onChange={() => handleCheckboxChange('transmission', 'Automatic')}
          />
        <label>Automatic</label>
      </div>

      </div>

      <div className="filterSection">
        <h3>Seating Capacity</h3>
        
        <div className='checkboxes'>
         <input
            type="checkbox"
            name="seating"
            value="5"
            checked={filters.seating.includes('5')}
            onChange={() => handleCheckboxChange('seating', '5')}
          />
        <label>5</label>
        </div>

        <div className='checkboxes'>
        <input
            type="checkbox"
            name="seating"
            value="7"
            checked={filters.seating.includes('7')}
            onChange={() => handleCheckboxChange('seating', '7')}
          />
        <label>7</label>
        </div>
      </div>

      

      <button onClick={applyFilters} className="applyButton">
        Apply
      </button>
    </div>
        <div id="entirecars">
        <div id="carsupper">
        <h2>Showing {carbyloc.length} cars at {searchedcars.locname}</h2>
        <div id="timeduration">
  <p>Total travel duration :</p>
  {duration ? (
    <p>{duration.days} Days {duration.hours} Hours {duration.minutes} minutes</p>
  ) : (
    <p>Please select valid pickup and drop-off times</p>
  )}
</div>
        <div id="selectpricefilter">
          <label htmlFor='pricefilter'>Sort By:</label>
          <select id="pricefilter" onChange={(e) => sortCars(e.target.value)}>
  <option value="">Sort By</option>
  <option value="low-high">Price - Low to High</option>
  <option value="high-low">Price - High to Low</option>
</select></div>
        </div>
        <div className="cars-container" >
        {carbyloc.map((car, index) => (
          
          <div key={index} className="car-card" onClick={()=>navigate(`${car.id}`)}>
            <img src={car.mainimage} alt={`${car.brand} ${car.model}`} className="car-image" />
            <div className="car-info">
              <h3>{car.brand} {car.model}</h3>
              
              <div className="car-details">
                <span><img src={gearicon} alt="Gearbox" className="icon"/> {car.gearbox}</span>
                <span><img src={petroldabba} alt="Fuel Type" className="icon"/> {car.fuelType}</span>
                <span><img src={carseats} alt="Car Type" className="icon" id="carseatssvg"/> {car.type}</span>
              </div>

              <p className="car-price"> ₹{car.pricePerDay}  /Hour</p>
              <button className="book-button">Book</button>
            </div>
          </div>
        ))}
      </div>
        </div>
      </div>
      
   
  )
}

export default Cars
