import { onValue, ref } from 'firebase/database'
import React, { useEffect, useState } from 'react'
import { db } from "../../../Firebaseconfig"
import { useParams } from 'react-router-dom'
import "./SingleCar.css"
import Button from '@mui/material/Button';
import { Accordion, AccordionSummary, AccordionDetails, Typography, Box, Divider } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import insurancecoverage from "../../../assets/insurancecoverage.png"
import Modal from '@mui/material/Modal';
import { FaInfinity, FaLock } from "react-icons/fa";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import PercentIcon from '@mui/icons-material/Percent';

const SingleCar = () => {






  const { id } = useParams()
  const [carTimeandLoc, setCarTimeandLoc] = useState({})
  const [carsData, setCarsData] = useState([])
  const [singleCardata, setSingleCarData] = useState([])
  const [selectedPlan, setSelectedPlan] = useState("MAX");
  const [modalOpen, setModalOpen] = useState(false)
  const [onlyRent, setOnlyRent] = useState("")
  const planPrices = {
    MAX: 539,
    PLUS: 469,
    BASIC: 259,
  };


  const handlePlanClick = (plan) => {
    setSelectedPlan(plan);
  };
  const handleOpen = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);

  const faqs = [
    {
      question: "How do I book a car?",
      answer: [
        "-Simply select the dates and the car of your choice.",
        "-Select the location you want to pick it up from or get it delivered at.",
        "-Choose your preferred mode of payment to pay and you are ready to GO!"
      ],
    },
    {
      question: "What does Fastag enabled means?",
      answer: [
        "FASTag enabled means",
        "-The car will have FASTag installed.",
        "-You'll have the option to recharge it if you intend to go through tolls."
      ],
    },
    {
      question: "What happens if I return the car with extra fuel?",
      answer: [
        "We highly recommend returning the car at the same fuel level as it was when you picked it up.",
        "Please note that EliteWheels gives you the freedom to resolve all fuel-related queries directly with the host."
      ],
    },
    {
      question: "Who will recharge the FASTag?",
      answer: [
        "You will recharge the FASTag as per your usage for the booking,You can reach out to the Host and they'll provide you with the FASTag recharge details."
      ],
    },
    {
      question: "What happens if I forget my personal belongings in the car?",
      answer: [
        "EliteWheels does not take any responsibility for personal belongings left by you in the car.",
        "- Please remove all your personal belongings from the car before ending the trip.",
        "- If you end up forgetting any belongings in the car, you may reach out to the host to retrieve it."
      ],
    },
  ];
  const getCancellationDeadline = () => {
    if (!carTimeandLoc.pickuptime) return null;
    const pickupTime = new Date(carTimeandLoc.pickuptime);
    return new Date(pickupTime.getTime() - 6 * 60 * 60 * 1000);
  };

  const cancellationDeadline = getCancellationDeadline();
  const now = new Date();
  const isBeforeDeadline = cancellationDeadline && now < cancellationDeadline;

  useEffect(() => {

    const carsRef = ref(db, "cars")
    const unsubscribe = onValue(carsRef, (snapshot) => {
      if (snapshot) {
        const response = snapshot.val()
        setCarsData(Object.values(response))


      }
      else {
        console.log("No data available")
      }

      const carLocationAndTimings = sessionStorage.getItem('carsearch');
      if (carLocationAndTimings) {
        try {
          setCarTimeandLoc(JSON.parse(carLocationAndTimings));
        } catch (err) {
          console.error('Invalid carsearch JSON in sessionStorage');
        }
      }

    })
    return () => unsubscribe()
  }, [])

  useEffect(() => {
    if (carsData.length > 0) {
      const singlecarData = carsData.find(x => x.id === String(id))
      setSingleCarData(singlecarData || null)
    }

  }, [carsData])

  useEffect(() => {
    if (!carTimeandLoc.pickuptime || !carTimeandLoc.droptime || !singleCardata.pricePerDay) return;

    const pickup = new Date(carTimeandLoc.pickuptime);
    const drop = new Date(carTimeandLoc.droptime);
    const diffInMs = drop - pickup;
    const hours = Math.ceil(diffInMs / (1000 * 60 * 60));

    const pricePerHour = parseFloat(singleCardata.pricePerDay);
    const rentalCost = hours * pricePerHour;
    setOnlyRent(Number(rentalCost));
  }, [carTimeandLoc, singleCardata]);

  const formatDateTime = (iso) => {
    if (!iso) return '';
    const date = new Date(iso);
    const options = {
      day: 'numeric',
      month: 'short',
      year: '2-digit',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    };
    return date.toLocaleString('en-IN', options).replace(',', '');
  };

  const calculateTotalPrice = () => {
    const insuranceCost = planPrices[selectedPlan];
    const convenienceFee = 249;
    const total = onlyRent + insuranceCost + convenienceFee;
    return total.toLocaleString('en-IN');
  };


  console.log(carsData)
  console.log(singleCardata, "single car data")
  console.log(id)

  if (!singleCardata) {
    return <div className="p-10 text-center text-xl">Loading car details...</div>;
  }

  return (
    <div className="carpage-container">
      {/* Booking Info */}
      <div className="booking-info">
        <div><strong>Pickup Location:</strong> {carTimeandLoc.locname || '—'}</div>
        <div><strong>Check-in:</strong> {formatDateTime(carTimeandLoc.pickuptime)}</div>
        <div><strong>Check-out:</strong> {formatDateTime(carTimeandLoc.droptime)}</div>
      </div>

     
     <div className='Halfcontainer'>
     <div className='left_sidepart'>
        {/* Main Section */}
        <div className="main-section">
        <div className="image-section">
          <img className="main-img" src={singleCardata.mainimage} alt="Main car" />
          <div className="thumbnail-column">
            {singleCardata.images?.map((img, index) => (
              <img key={index} className="thumb-img" src={img} alt={`Thumb ${index}`} />
            ))}
          </div>
        </div>


        {/* Details Sidebar */}
        

      </div>



      {/* Features Section */}

      <div className="car-location-section">
        <h3>Car Location</h3>
        <div className="location-card">
          <div>

            "UCO Bank Ln, Greenland Colony, Madhava Reddy Colony, Gachibowli, Hyderabad, Telangana 500032, India"

          </div>
          <Button variant="outlined" color="success">Get directions</Button>
        </div>
      </div>

      <div className="features-section">
        <h3>Features</h3>
        <div className="features-grid">
          {[
            "Toolkit",
            "Reverse Camera",
            "Anti-lock Braking System",
            "2 Front Airbags",
            "2 Side Airbags",
            "Power Windows",
            "Power steering",
            "Air Conditioning",
            "Full boot space"
          ].map((feature, index) => (
            <div key={index} className="feature-item">
              ✅ {feature}
            </div>
          ))}
        </div>
      </div>


     {/* For cancelling the booking */}
      {cancellationDeadline && (
        <Box sx={{ border: '1px solid #ddd', borderRadius: 2, p: 3, my: 4, fontFamily: 'Poppins, Roboto, sans-serif' }}>
          <Box display="flex" alignItems="center" gap={1.5} mb={2}>
            <img src="https://cdn-icons-png.flaticon.com/512/3523/3523885.png" alt="hourglass" width={26} height={26} />
            <Typography sx={{ fontWeight: 500, fontSize: '1rem', color: '#1a1a1a' }}>
              <strong>Cancellation Fee:</strong>{' '}
              <span style={{ fontWeight: 500 }}>50% of trip amount or INR 4000</span> (whichever is lower) until{' '}
              <span style={{ fontWeight: 500 }}>
                {cancellationDeadline.toLocaleDateString('en-IN', {
                  day: '2-digit',
                  month: 'short',
                  year: 'numeric',
                })}
                ,{' '}
                {cancellationDeadline.toLocaleTimeString('en-IN', {
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </span>
            </Typography>
          </Box>

          <Typography variant="body2" sx={{ color: '#6e6e6e', mb: 2 }}>
            Convenience fee is non-refundable.
          </Typography>

          <Typography sx={{ fontWeight: 500, fontSize: '0.95rem', color: '#2d2d2d', mb: 1 }}>
            REFUND UPON CANCELLATION
          </Typography>

          {/* Progress Bar */}
          <Box
            sx={{
              height: 34,
              width: '100%',
              display: 'flex',
              borderRadius: 999,
              overflow: 'hidden',
              fontSize: '0.95rem',
            }}
          >
            {/* Left 50% Refund */}
            <Box
              sx={{
                width: isBeforeDeadline ? '50%' : '0%',
                backgroundColor: '#1c7c3c',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                fontWeight: 400,
                transition: 'width 0.6s ease',
              }}
            >
              {isBeforeDeadline && '50% Refund'}
            </Box>

            {/* Right 50% / 100% Zero refund */}
            <Box
              sx={{
                width: isBeforeDeadline ? '50%' : '100%',
                backgroundColor: '#2f2f2f',
                display: 'flex',
                alignItems: 'center',
                justifyContent: isBeforeDeadline ? 'flex-end' : 'center',
                color: '#fff',
                fontWeight: 400,
                paddingRight: isBeforeDeadline ? 2 : 0,
                transition: 'width 0.6s ease',
              }}
            >
              0%
            </Box>
          </Box>


          {/* Time Marker */}
          <Box display="flex" justifyContent="flex-end" mt={1}>
            <Box textAlign="center">
              <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.75rem' }}>
                {cancellationDeadline.toLocaleDateString('en-IN', {
                  month: 'short',
                  day: '2-digit',
                })}
              </Typography>
              <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.75rem' }}>
                {cancellationDeadline.toLocaleTimeString('en-IN', {
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </Typography>
            </Box>
          </Box>
        </Box>
      )}


      {/* insurance coverage */}
      <div className="insurance-container">
        <div className="insurance-header">
          <img src={insurancecoverage} alt="insurance-bg" className="header-image" />
        </div>

        <div className="content-section">
          <div className="top-row">
            <div>
              <h2 className="title">Travel with confidence</h2>
              <p className="subtitle">Choose a plan & secure your trip</p>
            </div>
            <a href="#" className="learn-more">Learn More &rarr;</a>
          </div>

          {/* Plans */}
          <div className="plans-row">
            <div
              className={`plan-card max-plan ${selectedPlan === "MAX" ? "selected" : ""}`}
              onClick={() => handlePlanClick("MAX")}
            >
              <div className="tag">Most Opted</div>
              <h3 className="max">MAX</h3>
              <p className="cover-label">Cover</p>
              <p className="price">₹539</p>
              <p className="note">Only pay Rs.99 in case of any accidents</p>
            </div>

            <div
              className={`plan-card ${selectedPlan === "PLUS" ? "selected" : ""}`}
              onClick={() => handlePlanClick("PLUS")}
            >
              <h3 className="plus">PLUS</h3>
              <p className="cover-label">Cover</p>
              <p className="price">₹469</p>
              <p className="note">Only pay Rs.999 in case of any accidents</p>
            </div>

            <div
              className={`plan-card ${selectedPlan === "BASIC" ? "selected" : ""}`}
              onClick={() => handlePlanClick("BASIC")}
            >
              <h3 className="basic">BASIC</h3>
              <p className="cover-label">Cover</p>
              <p className="price">₹259</p>
              <p className="note">Only pay Rs.3499 in case of any accidents</p>
            </div>
          </div>

          {/* Benefits */}
          <h3 className="benefits-title">Enjoy these additional benefits</h3>
          <div className="benefits">
            <div className="benefit-item">
              <div className="benefit-icon"><FaInfinity /></div>
              <div>
                <p className="benefit-title">Unlimited KMs</p>
                <p className="benefit-subtitle">Endless kilometres with no extra charge</p>
              </div>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon"><FaLock /></div>
              <div>
                <p className="benefit-title">Zero Deposit</p>
                <p className="benefit-subtitle">No security deposits or fees</p>
              </div>
            </div>
          </div>


        </div>
      </div>

 
     {/* FAQS and policy agreements */}
      <Box sx={{ my: 4 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
          <Typography variant="h6" fontWeight={600}>
            FAQs
          </Typography>
        </Box>

        {faqs.map((faq, index) => (
          <Accordion key={index} sx={{
            boxShadow: 'none',
            border: '1px solid #e0e0e0',
            borderRadius: 1,
            mb: 1, // <-- This adds space (margin-bottom) between each accordion
            '&:before': {
              display: 'none', // removes the default divider line from MUI
            }
          }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} >
              <Typography fontWeight={500}>{faq.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              {Array.isArray(faq.answer) ? (
                <>
                  {faq.answer.map((line, i) => (
                    <Typography
                      key={i}
                      variant="body2"
                      color="text.secondary"
                      sx={{ mb: 0.5 }}
                    >
                      {line}
                    </Typography>
                  ))}
                </>
              ) : (
                <Typography variant="body2" color="text.secondary">
                  {faq.answer}
                </Typography>
              )}
            </AccordionDetails>
          </Accordion>
        ))}

        <Divider sx={{ my: 3 }} />

        {/* Policies and Agreement */}
        <Box>
          <Typography variant="h6" fontWeight={600} mb={2}>
            Policies and Agreement
          </Typography>
          <Box
            sx={{
              p: 2,
              backgroundColor: '#f7f7f7',
              borderRadius: 1,
              display: 'flex',
              alignItems: 'center',
              gap: 40,
              flexWrap: 'wrap',
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <span style={{
                display: 'inline-block',
                width: 20,
                height: 20,
                backgroundColor: '#00793e',
                color: 'white',
                textAlign: 'center',
                lineHeight: '20px',
                fontSize: 14,
                borderRadius: 4
              }}>✓</span>
              <Typography variant="body2" color="text.secondary">
                I hereby agree to the terms and conditions of the Lease Agreement with Host
              </Typography>
            </Box>
            <Typography sx={{ color: '#00793e', fontWeight: 600, cursor: 'pointer', fontSize: "1.3rem" }}>
              VIEW DETAILS
            </Typography>
          </Box>
        </Box>
      </Box>
    </div>


      <Box className="detail-section">
  <Box className="detail-card" sx={{ p: 2, borderRadius: 3, bgcolor: '#fff', boxShadow: 1 }}>
    {/* Car Details */}
    <Box mb={1}>
  <Typography variant="h5" fontWeight="bold" gutterBottom textAlign="center">
    {singleCardata.brand} {singleCardata.model}
  </Typography>

  {/* Car Info Rows */}
  {[
    { label: 'Type', value: singleCardata.type },
    { label: 'Fuel', value: singleCardata.fuelType },
    { label: 'Gearbox', value: singleCardata.gearbox },
    { label: 'Seats', value: singleCardata.seats },
   
  ].map((item, index) => (
    <Box
      key={index}
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      py={1}
      px={2}
      sx={{ fontSize: '1.1rem' }}
    >
      <Typography fontWeight="bold" flex={1}>
        {item.label}:
      </Typography>
      <Typography fontWeight="medium" textAlign="right" flex={2}>
        {item.value}
      </Typography>
    </Box>
  ))}
</Box>

    {/* Offers */}
    <Typography variant="h6" fontWeight="bold" mb={1}>Exclusive Offers</Typography>
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        border: '1px solid #e0e0e0',
        borderRadius: 3,
        p: 2,
        backgroundColor: '#fefefe',
        cursor: 'pointer',
        '&:hover': {
          boxShadow: 2,
        },
        mb: 1
      }}
    >
      <Box display="flex" alignItems="center">
        <Box
          sx={{
            backgroundColor: '#1e60d4',
            borderRadius: '50%',
            width: 36,
            height: 36,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            mr: 2,
          }}
        >
          <PercentIcon fontSize="small" />
        </Box>
        <Box>
          <Typography fontWeight="bold">Explore Offers</Typography>
          <Typography variant="body2" color="text.secondary">
            Check Availability Here
          </Typography>
        </Box>
      </Box>
      <ChevronRightIcon sx={{ color: 'grey.600' }} />
    </Box>

    {/* Trip Protection Fee */}
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      my={2}
      border="1px solid #e0e0e0"
      p={2}
      borderRadius={2}
      bgcolor="#fafafa"
    >
      <Typography variant="body1" fontWeight="medium">
        Trip Protection Fee:
      </Typography>
      <Typography variant="body1" fontWeight="bold">
        ₹{planPrices[selectedPlan]}
      </Typography>
    </Box>

    {/* Total & View Details */}
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        p: 2,
        borderRadius: 2,
        backgroundColor: '#f9f9f9',
        boxShadow: 1,
        mb: 2,
      }}
    >
      <Box>
        <Typography fontWeight="bold">Total Price</Typography>
        <Typography variant="body2" color="text.secondary">
          Inclusive of taxes
        </Typography>
      </Box>
      <Box textAlign="right">
        <Typography fontWeight="bold">₹{calculateTotalPrice()}</Typography>
        <Typography
          variant="body2"
          color="success.main"
          sx={{ cursor: 'pointer' }}
          onClick={handleOpen}
        >
          View Details
        </Typography>
      </Box>
    </Box>

    {/* Pay Now Button */}
    <Button
      variant="contained"
      fullWidth
      sx={{
        backgroundColor: 'green',
        color: '#fff',
        fontWeight: 'bold',
        borderRadius: '10px',
        paddingY: 1.2,
        '&:hover': {
          backgroundColor: '#006400',
        },
      }}
    >
      Pay now
    </Button>

    {/* Modal */}
    <Modal
      open={modalOpen}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 420,
          bgcolor: 'background.paper',
          borderRadius: 3,
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography variant="h6" fontWeight="bold" textAlign="center" gutterBottom>
          Trip Summary
        </Typography>

        <Box display="flex" justifyContent="space-between" my={1}>
          <Typography>Trip Amount (excluding fuel):</Typography>
          <Typography fontWeight="medium">₹{onlyRent}</Typography>
        </Box>

        <Box display="flex" justifyContent="space-between" my={1}>
          <Typography>Trip Protection Fee:</Typography>
          <Typography fontWeight="medium">+ ₹{planPrices[selectedPlan]}</Typography>
        </Box>

        <Box display="flex" justifyContent="space-between" my={1}>
          <Typography>Convenience Fee:</Typography>
          <Typography fontWeight="medium">+ ₹249</Typography>
        </Box>

        <Divider sx={{ my: 2 }} />

        <Box display="flex" justifyContent="space-between" my={1}>
          <Typography fontWeight="bold">Total Amount:</Typography>
          <Typography fontWeight="bold">₹{calculateTotalPrice()}</Typography>
        </Box>

        <Box display="flex" justifyContent="space-between" my={1}>
          <Typography>Refundable Deposit:</Typography>
          <Typography>₹0</Typography>
        </Box>

        <Box display="flex" justifyContent="space-between" my={1}>
          <Typography fontWeight="bold">Final Amount:</Typography>
          <Typography fontWeight="bold" color="success.main">
            ₹{calculateTotalPrice()}
          </Typography>
        </Box>

        <Box mt={3} textAlign="center">
          <Button variant="contained" color="success" onClick={handleClose}>
            Close
          </Button>
        </Box>
      </Box>
    </Modal>
  </Box>
</Box>
     </div>




    </div>




  )
}

export default SingleCar
