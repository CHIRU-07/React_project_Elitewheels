import React from 'react'

import "./Landingpage.css"
import Button from '@mui/material/Button';

const Landingpage = () => {
  return (
    <div>
    <div class="hero-section">
  <div class="overlay"></div>
  <div class="hero-content">
    <h1>Rent Your Ride, Anytime, Anywhere!</h1>
    <p>
      Discover the ease of car rentals designed to fit your lifestyle. Whether you're planning a quick city drive, a weekend getaway, or a long-term journey.
    </p>
    <Button variant="contained" href="/Login" >Book now </Button>
  </div>
</div>

    </div>
  )
}

export default Landingpage
