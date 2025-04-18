// // import React, { useState } from 'react';
// // import {useNavigate} from "react-router-dom"
// // import "./Rentcar.css"


// // const Rentcar = () => {
// //   const Navigate=useNavigate()

// //   const locations = [ "Hyderabad","Vizag","Bengaluru", "Chennai", "Mumbai", "Delhi", "Kolkata"];
// //   const [showDropOff, setShowDropOff] = useState(false);
// //   const [formdata,setFormdata]=useState({
// //     locname:"",
// //     pickuptime:"",
// //     droploc:"",
// //     droptime:""
// // })

// // const handleChange=(e)=>{
// //   setFormdata({...formdata,[e.target.name]:e.target.value})
// // }


// //   const handleSubmit=()=>{
// //       sessionStorage.setItem("carsearch",JSON.stringify(formdata))
// //       console.log(formdata)
// //       Navigate("/cars")

// //   }


// //   return (

// //     <div class="booking-form">
// //       <h2>Find the right car now!</h2>
// //       <div className="toggle">
// //         <input
// //           type="checkbox"
// //           id="return-location"
// //           onChange={() => setShowDropOff(!showDropOff)}
// //         />
// //         <label htmlFor="return-location">Return car to another location</label>
// //       </div>
 
// //       <input list="locations" placeholder="Pick up location" name="locname" value={formdata.locname} onChange={handleChange}/>
// //       <datalist id="locations">
// //         {locations.map((loc) => (
// //           <option key={loc} value={loc} />
// //         ))}
// //       </datalist>

      
// //       <div className="input-container">
// //         <label htmlFor="pickup">Enter pickup date and time</label>
// //         <input type="datetime-local" id="pickup" name="pickuptime" value={formdata.pickuptime} onChange={handleChange}/>
// //       </div>

// //       {showDropOff && (
// //         <>
// //           <input list="dropoff-locations" placeholder="Drop off location" required name="droploc" value={formdata.droploc} onChange={handleChange}/>
// //           <datalist id="dropoff-locations">
// //             {locations.map((loc) => (
// //               <option key={loc} value={loc} />
// //             ))}
// //           </datalist>
// //         </>
// //       )}
// //       <div class="input-container">
// //         <label htmlFor="pickup">Enter Dropoff date and time</label>
// //         <input type="datetime-local" id="pickup" name="droptime" value={formdata.droptime} onChange={handleChange} />
// //       </div>
// //       <button className="btn-go" onClick={handleSubmit}>Go</button>
// //       <div className="options">
// //         <div className="option">
// //           🚗 Doorstep delivery Available in your city
// //         </div>
// //         <div className="option">
// //           🔄 Choose your KM Package
// //         </div>
// //       </div>
// //     </div>
// //   )
// // }

// // export default Rentcar


// import React, { useState } from 'react';
// import { useNavigate } from "react-router-dom";
// import "./Rentcar.css";

// const Rentcar = () => {
//   const Navigate = useNavigate();
//   const locations = ["Hyderabad", "Vizag", "Bengaluru", "Chennai", "Mumbai", "Delhi", "Kolkata"];
//   const [showDropOff, setShowDropOff] = useState(false);
//   const [formdata, setFormdata] = useState({
//     locname: "",
//     pickuptime: "",
//     droploc: "",
//     droptime: ""
//   });

//   const handleChange = (e) => {
//     setFormdata({ ...formdata, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = () => {
//     sessionStorage.setItem("carsearch", JSON.stringify(formdata));
//     console.log(formdata);
//     Navigate("/cars");
//   };

//   // Get today's date in the format required for datetime-local
//   const getCurrentDateTime = () => {
//     const now = new Date();
//     const year = now.getFullYear();
//     const month = String(now.getMonth() + 1).padStart(2, '0');
//     const date = String(now.getDate()).padStart(2, '0');
//     const hours = String(now.getHours()).padStart(2, '0');
//     const minutes = String(now.getMinutes()).padStart(2, '0');
//     return `${year}-${month}-${date}T${hours}:${minutes}`;
//   };

//   return (
//     <div className="booking-form">
//       <h2>Find the right car now!</h2>
//       <div className="toggle">
//         <input
//           type="checkbox"
//           id="return-location"
//           onChange={() => setShowDropOff(!showDropOff)}
//         />
//         <label htmlFor="return-location">Return car to another location</label>
//       </div>

//       <input list="locations" placeholder="Pick up location" name="locname" value={formdata.locname} onChange={handleChange} />
//       <datalist id="locations">
//         {locations.map((loc) => (
//           <option key={loc} value={loc} />
//         ))}
//       </datalist>

//       <div className="input-container">
//         <label htmlFor="pickup">Enter pickup date and time</label>
//         <input
//           type="datetime-local"
//           id="pickup"
//           name="pickuptime"
//           value={formdata.pickuptime}
//           onChange={handleChange}
//           min={getCurrentDateTime()} // Disable past dates
//         />
//       </div>

//       {showDropOff && (
//         <>
//           <input list="dropoff-locations" placeholder="Drop off location" name="droploc" value={formdata.droploc} onChange={handleChange} />
//           <datalist id="dropoff-locations">
//             {locations.map((loc) => (
//               <option key={loc} value={loc} />
//             ))}
//           </datalist>
//         </>
//       )}

//       <div className="input-container">
//         <label htmlFor="dropoff">Enter Dropoff date and time</label>
//         <input
//           type="datetime-local"
//           id="dropoff"
//           name="droptime"
//           value={formdata.droptime}
//           onChange={handleChange}
//           min={formdata.pickuptime || getCurrentDateTime()} // Ensure dropoff is after pickup
//         />
//       </div>

//       <button className="btn-go" onClick={handleSubmit}>Go</button>
//       <div className="options">
//         <div className="option">🚗 Doorstep delivery Available in your city</div>
//         <div className="option">🔄 Choose your KM Package</div>
//       </div>
//     </div>
//   );
// };

// export default Rentcar;

import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Rentcar.css";

const Rentcar = () => {
  const Navigate = useNavigate();
  const locations = ["Hyderabad", "Vizag", "Bengaluru", "Chennai", "Mumbai", "Delhi", "Kolkata"];
  const [showDropOff, setShowDropOff] = useState(false);
  const [formdata, setFormdata] = useState({
    locname: "",
    pickuptime: null,
    droploc: "",
    droptime: null
  });

  const handleSubmit = () => {
    sessionStorage.setItem("carsearch", JSON.stringify(formdata));
    console.log(formdata);
    Navigate("/cars");
  };

  return (
    <div className="booking-form">
      <h2>Find the right car now!</h2>
      <div className="toggle">
        <input
          type="checkbox"
          id="return-location"
          onChange={() => setShowDropOff(!showDropOff)}
        />
        <label htmlFor="return-location">Return car to another location</label>
      </div>

      <input list="locations" placeholder="Pick up location" name="locname"
        value={formdata.locname} onChange={(e) => setFormdata({ ...formdata, locname: e.target.value })} />
      <datalist id="locations">
        {locations.map((loc) => (
          <option key={loc} value={loc} />
        ))}
      </datalist>

      <div className="input-container">
        <label>Enter pickup date and time</label>
        <DatePicker
          selected={formdata.pickuptime}
          onChange={(date) => setFormdata({ ...formdata, pickuptime: date })}
          showTimeSelect
          dateFormat="Pp"
          minDate={new Date()}
          className="styled-datepicker"
        />
      </div>

      {showDropOff && (
        <>
          <input list="dropoff-locations" placeholder="Drop off location" name="droploc"
            value={formdata.droploc} onChange={(e) => setFormdata({ ...formdata, droploc: e.target.value })} />
          <datalist id="dropoff-locations">
            {locations.map((loc) => (
              <option key={loc} value={loc} />
            ))}
          </datalist>
        </>
      )}

      <div className="input-container">
        <label>Enter Dropoff date and time</label>
        <DatePicker
          selected={formdata.droptime}
          onChange={(date) => setFormdata({ ...formdata, droptime: date })}
          showTimeSelect
          dateFormat="Pp"
          minDate={formdata.pickuptime || new Date()}
          className="styled-datepicker"
        />
      </div>

      <button className="btn-go" onClick={handleSubmit}>Go</button>
      <div className="options">
        <div className="option">🚗 Doorstep delivery Available in your city</div>
        <div className="option">🔄 Choose your KM Package</div>
      </div>
    </div>
  );
};

export default Rentcar;
